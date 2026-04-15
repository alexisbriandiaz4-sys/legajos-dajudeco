import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { getUsuario } from '@/lib/server-auth'
import { handlePrismaError } from '@/lib/validators'
import { z } from 'zod'

const ComentarioSchema = z.object({
  texto: z.string().min(1, 'El comentario no puede estar vacío').max(2000),
})

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const usuario = await getUsuario()
    if (!usuario) return NextResponse.json({ error: 'No autenticado' }, { status: 401 })

    if (usuario.rol !== 'admin') {
      const legajo = await prisma.legajo.findFirst({
        where: { id, OR: [{ usuarioId: usuario.id }, { asignadoA: usuario.id }, { asignadoA: null }] }
      })
      if (!legajo) return NextResponse.json({ error: 'Acceso denegado' }, { status: 403 })
    }

    const comentarios = await prisma.comentarioLegajo.findMany({
      where: { legajoId: id },
      orderBy: { createdAt: 'desc' },
      include: {
        usuario: { select: { nombre: true, rol: true } },
      },
    })

    return NextResponse.json(comentarios)
  } catch (error) {
    const { message, status } = handlePrismaError(error)
    return NextResponse.json({ error: message }, { status })
  }
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const usuario = await getUsuario()
    if (!usuario) return NextResponse.json({ error: 'No autenticado' }, { status: 401 })

    if (usuario.rol !== 'admin') {
      const legajo = await prisma.legajo.findFirst({
        where: { id, OR: [{ usuarioId: usuario.id }, { asignadoA: usuario.id }, { asignadoA: null }] }
      })
      if (!legajo) return NextResponse.json({ error: 'Acceso denegado' }, { status: 403 })
    }

    const body = await request.json()
    const parsed = ComentarioSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.issues[0].message }, { status: 400 })
    }

    const comentario = await prisma.comentarioLegajo.create({
      data: {
        legajoId: id,
        usuarioId: usuario.id,
        texto: parsed.data.texto,
      },
      include: {
        usuario: { select: { nombre: true, rol: true } },
      },
    })

    return NextResponse.json(comentario)
  } catch (error) {
    const { message, status } = handlePrismaError(error)
    return NextResponse.json({ error: message }, { status })
  }
}