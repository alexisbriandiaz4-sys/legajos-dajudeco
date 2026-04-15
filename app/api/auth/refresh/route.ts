import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'
import { prisma } from '@/lib/db'
import { logger } from '@/lib/logger'
import crypto from 'crypto'

function getSecret(): string {
  const secret = process.env.JWT_SECRET || "fallback_super_secreto_temporal_123"
  if (!secret || secret.length < 32) throw new Error('JWT_SECRET inválido')
  return secret
}

export async function POST() {
  try {
    const cookieStore = await cookies()
    const refreshToken = cookieStore.get('refresh')?.value

    if (!refreshToken) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
    }

    // Buscar la sesión en base de datos
    const session = await prisma.session.findUnique({
      where: { sessionToken: refreshToken },
      include: { usuario: true }
    })

    if (!session || session.expires < new Date() || !session.usuario.activo) {
      return NextResponse.json({ error: 'Sesión expirada o inválida' }, { status: 401 })
    }

    const { usuario } = session

    // Rotación: Borrar la vieja sesión y generar una nueva
    await prisma.session.delete({ where: { id: session.id } })

    const SECRET = getSecret()
    
    // Auto-login (Access Token)
    const nuevoToken = jwt.sign(
      { id: usuario.id, usuario: usuario.usuario, rol: usuario.rol, nombre: usuario.nombre },
      SECRET,
      { expiresIn: '1h' }
    )

    // Nuevo Refresh Token (RTR)
    const newRefreshToken = crypto.randomBytes(32).toString('hex')
    const expiresIn7Days = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)

    await prisma.session.create({
      data: {
        sessionToken: newRefreshToken,
        userId: usuario.id,
        expires: expiresIn7Days
      }
    })

    logger.audit('TOKEN_RENOVADO', usuario.id, 'auth', { usuario: usuario.usuario })

    const res = NextResponse.json({ ok: true, renovado: true })
    
    res.cookies.set('auth', nuevoToken, {
      httpOnly: true,
      maxAge: 60 * 60, // 1h
      path: '/',
      sameSite: 'strict',
      secure: process.env.NODE_ENV === 'production',
    })

    res.cookies.set('refresh', newRefreshToken, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60, // 7 días
      path: '/api/auth/refresh',
      sameSite: 'strict',
      secure: process.env.NODE_ENV === 'production',
    })

    return res

  } catch (error) {
    logger.error('[POST /api/auth/refresh]', error)
    return NextResponse.json({ error: 'Error al renovar sesión' }, { status: 500 })
  }
}
