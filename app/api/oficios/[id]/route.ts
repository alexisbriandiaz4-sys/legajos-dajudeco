import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { getUsuarioId } from '@/lib/server-auth'
import { OficioSchema, handlePrismaError } from '@/lib/validators'

export async function PUT(request: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params
    const { getUsuario } = await import('@/lib/server-auth')
    const usuario = await getUsuario()
    if (!usuario) return NextResponse.json({ error: 'No autenticado' }, { status: 401 })

    const esAdmin = usuario.rol === 'admin'
    const where = esAdmin ? { id } : { id, legajo: { OR: [{ usuarioId: usuario.id }, { asignadoA: usuario.id }, { asignadoA: null }] } }
    const oficio = await prisma.oficio.findFirst({
      where
    })
    if (!oficio) return NextResponse.json({ error: 'Oficio no encontrado' }, { status: 404 })

    const body = await request.json()
    const parsed = OficioSchema.partial().safeParse(body)
    if (!parsed.success) return NextResponse.json({ error: parsed.error.issues[0].message }, { status: 400 })

    const dataOriginal = parsed.data;
    const dataLimpia = {
      ...dataOriginal,
      numero: dataOriginal.numero || null,
      observaciones: dataOriginal.observaciones || null,
      columnas: dataOriginal.columnas || null,
      numeroLinea: dataOriginal.numeroLinea || null,
      imeiSeleccionado: dataOriginal.imeiSeleccionado || null,
      fechaEnvio: dataOriginal.fechaEnvio ? new Date(dataOriginal.fechaEnvio) : undefined,
      fechaRespuesta: dataOriginal.fechaRespuesta ? new Date(dataOriginal.fechaRespuesta) : undefined,
    }

    const actualizado = await prisma.oficio.update({
      where: { id },
      data: dataLimpia,
      include: { legajo: { include: { victimas: true, dispositivos: true } } }
    })
    return NextResponse.json(actualizado)
  } catch (error) {
    console.error(error)
    const { message, status } = handlePrismaError(error)
    return NextResponse.json({ error: message }, { status })
  }
}

export async function DELETE(request: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params
    const { getUsuario } = await import('@/lib/server-auth')
    const usuario = await getUsuario()
    if (!usuario) return NextResponse.json({ error: 'No autenticado' }, { status: 401 })

    const esAdmin = usuario.rol === 'admin'
    const where = esAdmin ? { id } : { id, legajo: { OR: [{ usuarioId: usuario.id }, { asignadoA: usuario.id }, { asignadoA: null }] } }
    const oficio = await prisma.oficio.findFirst({
      where
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