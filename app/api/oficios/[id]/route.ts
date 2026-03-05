import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { getUsuarioId } from '@/lib/server-auth'

export async function PUT(request: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params
    const usuarioId = await getUsuarioId()
    if (!usuarioId) return NextResponse.json({ error: 'No autenticado' }, { status: 401 })

    const body = await request.json()

    const oficio = await prisma.oficio.updateMany({
      where: { id, legajo: { usuarioId } },
      data: {
        estado: body.estado ?? undefined,
        fechaEnvio: body.fechaEnvio ? new Date(body.fechaEnvio) : undefined,
        fechaRespuesta: body.fechaRespuesta ? new Date(body.fechaRespuesta) : undefined,
        observaciones: body.observaciones ?? undefined,
        urgencia: body.urgencia ?? undefined,
      }
    })
    return NextResponse.json(oficio)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Error al actualizar oficio' }, { status: 500 })
  }
}

export async function DELETE(_: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params
    const usuarioId = await getUsuarioId()
    if (!usuarioId) return NextResponse.json({ error: 'No autenticado' }, { status: 401 })

    await prisma.oficio.deleteMany({ where: { id, legajo: { usuarioId } } })
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Error al eliminar oficio' }, { status: 500 })
  }
}