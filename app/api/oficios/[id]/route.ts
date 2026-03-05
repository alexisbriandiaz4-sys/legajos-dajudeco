import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { getUsuarioId } from '@/lib/server-auth'
import { handlePrismaError } from '@/lib/validators'

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    const usuarioId = await getUsuarioId()
    if (!usuarioId) return NextResponse.json({ error: 'No autenticado' }, { status: 401 })

    const oficio = await prisma.oficio.findFirst({
      where: { id, legajo: { usuarioId } }
    })
    if (!oficio) return NextResponse.json({ error: 'Oficio no encontrado' }, { status: 404 })

    const body = await request.json()
    const actualizado = await prisma.oficio.update({
      where: { id },
      data: body,
      include: { legajo: { include: { victimas: true, dispositivos: true } } }
    })
    return NextResponse.json(actualizado)
  } catch (error) {
    console.error(error)
    const { message, status } = handlePrismaError(error)
    return NextResponse.json({ error: message }, { status })
  }
}

export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    const usuarioId = await getUsuarioId()
    if (!usuarioId) return NextResponse.json({ error: 'No autenticado' }, { status: 401 })

    const oficio = await prisma.oficio.findFirst({
      where: { id, legajo: { usuarioId } }
    })
    if (!oficio) return NextResponse.json({ error: 'Oficio no encontrado' }, { status: 404 })

    await prisma.oficio.delete({ where: { id } })
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error(error)
    const { message, status } = handlePrismaError(error)
    return NextResponse.json({ error: message }, { status })
  }
}
export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    const usuarioId = await getUsuarioId()
    if (!usuarioId) return NextResponse.json({ error: 'No autenticado' }, { status: 401 })

    const oficio = await prisma.oficio.findFirst({
      where: { id, legajo: { usuarioId } }
    })
    if (!oficio) return NextResponse.json({ error: 'Oficio no encontrado' }, { status: 404 })

    const body = await request.json()
    const actualizado = await prisma.oficio.update({
      where: { id },
      data: body,
      include: { legajo: { include: { victimas: true, dispositivos: true } } }
    })
    return NextResponse.json(actualizado)
  } catch (error) {
    console.error(error)
    const { message, status } = handlePrismaError(error)
    return NextResponse.json({ error: message }, { status })
  }
}