import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const SECRET = process.env.JWT_SECRET ?? 'legajos-secret-2024'

export async function POST(request: Request) {
  try {
    const { usuario, password } = await request.json()
    const user = await prisma.usuario.findUnique({ where: { usuario } })
    if (!user || !user.activo) {
      return NextResponse.json({ error: 'Usuario o contraseña incorrectos' }, { status: 401 })
    }
    const ok = await bcrypt.compare(password, user.password)
    if (!ok) {
      return NextResponse.json({ error: 'Usuario o contraseña incorrectos' }, { status: 401 })
    }
    const token = jwt.sign(
      { id: user.id, usuario: user.usuario, rol: user.rol, nombre: user.nombre },
      SECRET,
      { expiresIn: '7d' }
    )
    const res = NextResponse.json({ ok: true, nombre: user.nombre, rol: user.rol })
    res.cookies.set('auth', token, { httpOnly: true, maxAge: 60 * 60 * 24 * 7, path: '/' })
    return res
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Error en login' }, { status: 500 })
  }
}