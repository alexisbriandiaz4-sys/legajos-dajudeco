import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { z } from 'zod'

const SECRET = process.env.JWT_SECRET!

// Rate limiting simple en memoria
// Guarda { intentos, primerIntento } por IP
const loginAttempts = new Map<string, { count: number; firstAttempt: number }>()
const MAX_INTENTOS = 10
const VENTANA_MS = 15 * 60 * 1000 // 15 minutos

function checkRateLimit(ip: string): boolean {
  const ahora = Date.now()
  const registro = loginAttempts.get(ip)

  if (!registro) {
    loginAttempts.set(ip, { count: 1, firstAttempt: ahora })
    return true
  }

  // Si pasaron más de 15 min, resetear
  if (ahora - registro.firstAttempt > VENTANA_MS) {
    loginAttempts.set(ip, { count: 1, firstAttempt: ahora })
    return true
  }

  // Si superó el límite
  if (registro.count >= MAX_INTENTOS) return false

  registro.count++
  return true
}

// Esquema de validación con Zod
const LoginSchema = z.object({
  usuario: z.string().min(1, 'Usuario requerido').max(50),
  password: z.string().min(1, 'Contraseña requerida').max(100),
})

export async function POST(request: Request) {
  try {
    // Rate limiting por IP
    const ip = request.headers.get('x-forwarded-for') ?? request.headers.get('x-real-ip') ?? 'unknown'
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Demasiados intentos. Esperá 15 minutos.' },
        { status: 429 }
      )
    }

    // Validación con Zod
    const body = await request.json()
    const parsed = LoginSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0].message },
        { status: 400 }
      )
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

    // Login exitoso — resetear intentos
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
    return NextResponse.json({ error: 'Error en login' }, { status: 500 })
  }
}