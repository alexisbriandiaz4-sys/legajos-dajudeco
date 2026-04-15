import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { getUsuarioId } from '@/lib/server-auth'
import { handlePrismaError } from '@/lib/validators'

export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    const usuarioId = await getUsuarioId()
    if (!usuarioId) return NextResponse.json({ error: 'No autenticado' }, { status: 401 })

    const dispositivo = await prisma.dispositivo.findFirst({
      where: { id, legajo: { OR: [{ usuarioId }, { asignadoA: usuarioId }, { asignadoA: null }] } }
    })
    if (!dispositivo) return NextResponse.json({ error: 'Dispositivo no encontrado' }, { status: 404 })

    await prisma.dispositivo.deleteMany({ where: { id, legajo: { OR: [{ usuarioId }, { asignadoA: usuarioId }, { asignadoA: null }] } } })
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error(error)
    const { message, status } = handlePrismaError(error)
    return NextResponse.json({ error: message }, { status })
  }
}