import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'
import { prisma } from '@/lib/db'
import { logger } from '@/lib/logger'

function getSecret(): string {
  const secret = process.env.JWT_SECRET
  if (!secret || secret.length < 32) throw new Error('JWT_SECRET inválido')
  return secret
}

const TOKEN_DURACION    = '7d'
const REFRESH_UMBRAL_MS = 24 * 60 * 60 * 1000 // renovar si le quedan menos de 24hs

export async function POST() {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('auth')?.value
    if (!token) return NextResponse.json({ error: 'No autenticado' }, { status: 401 })

    const SECRET = getSecret()
    let payload: any

    try {
      payload = jwt.verify(token, SECRET) as any
    } catch (err: any) {
      // Token expirado — intentar decodificar igual para obtener el id
      if (err.name === 'TokenExpiredError') {
        payload = jwt.decode(token) as any
      } else {
        return NextResponse.json({ error: 'Token inválido' }, { status: 401 })
      }
    }

    if (!payload?.id) return NextResponse.json({ error: 'Token inválido' }, { status: 401 })

    // Verificar que el usuario aún existe y está activo
    const usuario = await prisma.usuario.findUnique({
      where: { id: payload.id },
      select: { id: true, usuario: true, rol: true, nombre: true, activo: true }
    })

    if (!usuario || !usuario.activo) {
      return NextResponse.json({ error: 'Usuario no encontrado o inactivo' }, { status: 401 })
    }

    // Si el token aún es válido y le queda más de 24hs, no renovar
    if (payload.exp) {
      const msRestantes = payload.exp * 1000 - Date.now()
      if (msRestantes > REFRESH_UMBRAL_MS) {
        return NextResponse.json({ ok: true, renovado: false })
      }
    }

    // Generar nuevo token
    const nuevoToken = jwt.sign(
      { id: usuario.id, usuario: usuario.usuario, rol: usuario.rol, nombre: usuario.nombre },
      SECRET,
      { expiresIn: TOKEN_DURACION }
    )

    logger.audit('TOKEN_RENOVADO', usuario.id, 'auth', { usuario: usuario.usuario })

    const res = NextResponse.json({ ok: true, renovado: true })
    res.cookies.set('auth', nuevoToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7, // 7 días
      path: '/',
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
    })
    return res

  } catch (error) {
    logger.error('[POST /api/auth/refresh]', error)
    return NextResponse.json({ error: 'Error al renovar sesión' }, { status: 500 })
  }
}