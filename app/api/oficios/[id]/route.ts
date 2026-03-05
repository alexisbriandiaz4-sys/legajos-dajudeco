import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { getUsuarioId } from '@/lib/server-auth'
import { OficioSchema } from '@/lib/validators'

export async function PUT(request: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params
    const usuarioId = await getUsuarioId()
    if (!usuarioId) return NextResponse.json({ error: 'No autenticado' }, { status: 401 })

    const json = await request.json()
    const parsed = OficioSchema.partial().safeParse(json)
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.issues[0].message }, { status: 400 })
    }
    const body = parsed.data

    const oficio = await prisma.oficio.updateMany({
      where: { id, legajo: { usuarioId } },
      data: {
        ...(body.estado        !== undefined && { estado: body.estado }),
        ...(body.urgencia      !== undefined && { urgencia: body.urgencia }),
        ...(body.observaciones !== undefined && { observaciones: body.observaciones || null }),
        ...(body.fechaEnvio    !== undefined && { fechaEnvio: body.fechaEnvio ? new Date(body.fechaEnvio) : null }),
        ...('fechaRespuesta' in json && { fechaRespuesta: json.fechaRespuesta ? new Date(json.fechaRespuesta) : null }),
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