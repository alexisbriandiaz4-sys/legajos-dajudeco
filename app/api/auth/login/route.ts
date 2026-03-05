import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { z } from 'zod'

const loginAttempts = new Map<string, { count: number; firstAttempt: number }>()
const MAX_INTENTOS = 10
const VENTANA_MS = 15 * 60 * 1000

function checkRateLimit(ip: string): boolean {
  const ahora = Date.now()
  const registro = loginAttempts.get(ip)
  if (!registro) {
    loginAttempts.set(ip, { count: 1, firstAttempt: ahora })
    return true
  }
  if (ahora - registro.firstAttempt > VENTANA_MS) {
    loginAttempts.set(ip, { count: 1, firstAttempt: ahora })
    return true
  }
  if (registro.count >= MAX_INTENTOS) return false
  registro.count++
  return true
}

const LoginSchema = z.object({
  usuario: z.string().min(1, 'Usuario requerido').max(50),
  password: z.string().min(1, 'Contraseña requerida').max(100),
})

export async function POST(request: Request) {
  try {
    const SECRET = process.env.JWT_SECRET
    if (!SECRET) {
      console.error('JWT_SECRET no está definido en las variables de entorno')
      return NextResponse.json({ error: 'Error de configuración del servidor' }, { status: 500 })
    }

    const ip = request.headers.get('x-forwarded-for') ?? request.headers.get('x-real-ip') ?? 'unknown'
    if (!checkRateLimit(ip)) {
      return NextResponse.json({ error: 'Demasiados intentos. Esperá 15 minutos.' }, { status: 429 })
    }

    const body = await request.json()
    const parsed = LoginSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.issues[0].message }, { status: 400 })
    }

    const { usuario, password } = parsed.data

    const user = await prisma.usuario.findUnique({ where: { usuario } })
    if (!user || !user.activo) {
      return NextResponse.json({ error: 'Usuario o contraseña incorrectos' }, { status: 401 })
    }

    const ok = await bcrypt.compare(password, user.password)
    if (!ok) {
      return NextResponse.json({ error: 'Usuario o contraseña incorrectos' }, { status: 401 })
    }

    loginAttempts.delete(ip)

    const token = jwt.sign(
      { id: user.id, usuario: user.usuario, rol: user.rol, nombre: user.nombre },
      SECRET,
      { expiresIn: '7d' }
    )

    const res = NextResponse.json({ ok: true, nombre: user.nombre, rol: user.rol })
    res.cookies.set('auth', token, { httpOnly: true, maxAge: 60 * 60 * 24 * 7, path: '/' })
    return res

  } catch (error) {
    console.error('Error en login:', error)
    return NextResponse.json({ error: 'Error en login' }, { status: 500 })
  }
}