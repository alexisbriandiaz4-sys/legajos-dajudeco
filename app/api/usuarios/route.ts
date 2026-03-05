import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

const SECRET = process.env.JWT_SECRET!

async function getUsuario() {
  const cookieStore = await cookies()
  const token = cookieStore.get('auth')?.value
  if (!token) return null
  try {
    const payload = jwt.verify(token, SECRET) as any
    return payload
  } catch { return null }
}

export async function GET() {
  try {
    const usuario = await getUsuario()
    if (!usuario) return NextResponse.json({ error: 'No autenticado' }, { status: 401 })
    if (usuario.rol !== 'admin') return NextResponse.json({ error: 'Sin permisos' }, { status: 403 })

    const usuarios = await prisma.usuario.findMany({
      orderBy: { createdAt: 'asc' },
      select: { id: true, nombre: true, usuario: true, rol: true, activo: true, createdAt: true }
    })
    return NextResponse.json(usuarios)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Error al obtener usuarios' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const usuario = await getUsuario()
    if (!usuario) return NextResponse.json({ error: 'No autenticado' }, { status: 401 })
    if (usuario.rol !== 'admin') return NextResponse.json({ error: 'Sin permisos' }, { status: 403 })

    const body = await request.json()
    if (!body.nombre || !body.usuario || !body.password) {
      return NextResponse.json({ error: 'Nombre, usuario y contraseña son obligatorios' }, { status: 400 })
    }

    const existe = await prisma.usuario.findUnique({ where: { usuario: body.usuario } })
    if (existe) return NextResponse.json({ error: 'El nombre de usuario ya existe' }, { status: 400 })

    const hash = await bcrypt.hash(body.password, 10)
    const nuevo = await prisma.usuario.create({
      data: {
        nombre: body.nombre,
        usuario: body.usuario,
        password: hash,
        rol: body.rol ?? 'investigador',
      },
      select: { id: true, nombre: true, usuario: true, rol: true, activo: true, createdAt: true }
    })
    return NextResponse.json(nuevo)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Error al crear usuario' }, { status: 500 })
  }
}
