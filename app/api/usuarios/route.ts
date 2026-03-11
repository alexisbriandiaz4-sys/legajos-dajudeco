import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import bcrypt from 'bcryptjs'
import { z } from 'zod'
import { getUsuario } from '@/lib/server-auth'

const UsuarioCreateSchema = z.object({
  nombre:   z.string().min(1, 'El nombre es requerido').max(100),
  usuario:  z.string().min(3, 'Mínimo 3 caracteres').max(50),
  password: z.string().min(6, 'Mínimo 6 caracteres').max(100),
  rol: z.enum(['admin', 'investigador']).default('investigador'),
})

export async function GET() {
  try {
    const usuario = await getUsuario()
    if (!usuario) return NextResponse.json({ error: 'No autenticado' }, { status: 401 })
    if (usuario.rol !== 'admin') return NextResponse.json({ error: 'Sin permisos' }, { status: 403 })

    const usuarios = await prisma.usuario.findMany({
      orderBy: { createdAt: 'asc' },
      select: { id: true, nombre: true, usuario: true, rol: true, activo: true, createdAt: true, _count: { select: { legajos: true } } }
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
    const parsed = UsuarioCreateSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.issues[0].message }, { status: 400 })
    }

    const existe = await prisma.usuario.findUnique({ where: { usuario: parsed.data.usuario } })
    if (existe) return NextResponse.json({ error: 'El nombre de usuario ya existe' }, { status: 400 })

    const hash = await bcrypt.hash(parsed.data.password, 10)
    const nuevo = await prisma.usuario.create({
      data: {
        nombre:   parsed.data.nombre,
        usuario:  parsed.data.usuario,
        password: hash,
        rol:      parsed.data.rol,
      },
      select: { id: true, nombre: true, usuario: true, rol: true, activo: true, createdAt: true }
    })
    return NextResponse.json(nuevo, { status: 201 })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Error al crear usuario' }, { status: 500 })
  }
}