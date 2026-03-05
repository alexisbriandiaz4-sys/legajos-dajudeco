import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { getUsuarioId } from '@/lib/server-auth'
import { LegajoSchema } from '@/lib/validators'

export async function GET(_: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params
    const usuarioId = await getUsuarioId()
    if (!usuarioId) return NextResponse.json({ error: 'No autenticado' }, { status: 401 })

    const legajo = await prisma.legajo.findFirst({
      where: { id, usuarioId },
      include: { victimas: true, dispositivos: true, oficios: true }
    })
    if (!legajo) return NextResponse.json({ error: 'No encontrado' }, { status: 404 })
    return NextResponse.json(legajo)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Error al obtener legajo' }, { status: 500 })
  }
}

export async function PUT(request: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params
    const usuarioId = await getUsuarioId()
    if (!usuarioId) return NextResponse.json({ error: 'No autenticado' }, { status: 401 })

    const json = await request.json()
    const parsed = LegajoSchema.partial().safeParse(json)
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.issues[0].message }, { status: 400 })
    }
    const body = parsed.data

    const legajoExistente = await prisma.legajo.findFirst({ where: { id, usuarioId } })
    if (!legajoExistente) return NextResponse.json({ error: 'No encontrado' }, { status: 404 })

    await prisma.legajo.update({
      where: { id },
      data: {
        ...(body.numero      !== undefined && { numero: body.numero }),
        ...(body.caratula    !== undefined && { caratula: body.caratula }),
        ...(body.cuij        !== undefined && { cuij: body.cuij || null }),
        ...(body.delito      !== undefined && { delito: body.delito }),
        ...(body.fechaHecho  !== undefined && { fechaHecho: new Date(body.fechaHecho) }),
        ...(body.estado      !== undefined && { estado: body.estado }),
        ...(body.observaciones !== undefined && { observaciones: body.observaciones || null }),
        ...(body.fiscal      !== undefined && { fiscal: body.fiscal || null }),
        ...(body.emailRespuesta !== undefined && { emailRespuesta: body.emailRespuesta || null }),
      }
    })

    if (Array.isArray(body.victimas)) {
      await prisma.victima.deleteMany({ where: { legajoId: id } })
      if (body.victimas.length > 0) {
        await prisma.victima.createMany({
          data: body.victimas
            .filter((v) => v.nombre?.trim())
            .map((v) => ({
              nombre: v.nombre,
              dni: v.dni || null,
              telefono: v.telefono || null,
              email: v.email || null,
              legajoId: id,
            }))
        })
      }
    }

    if (Array.isArray(body.dispositivos)) {
      await prisma.dispositivo.deleteMany({ where: { legajoId: id } })
      if (body.dispositivos.length > 0) {
        await prisma.dispositivo.createMany({
          data: body.dispositivos
            .filter((d) => d.marca?.trim() || d.imei?.trim() || d.numeroLinea?.trim())
            .map((d) => ({
              tipo: d.tipo || 'Celular',
              marca: d.marca || null,
              modelo: d.modelo || null,
              imei: d.imei || null,
              color: d.color || null,
              numeroLinea: d.numeroLinea || null,
              legajoId: id,
            }))
        })
      }
    }

    const legajoActualizado = await prisma.legajo.findFirst({
      where: { id },
      include: { victimas: true, dispositivos: true, oficios: true }
    })

    return NextResponse.json(legajoActualizado)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Error al actualizar legajo' }, { status: 500 })
  }
}

export async function DELETE(_: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params
    const usuarioId = await getUsuarioId()
    if (!usuarioId) return NextResponse.json({ error: 'No autenticado' }, { status: 401 })

    const legajo = await prisma.legajo.findFirst({ where: { id, usuarioId } })
    if (!legajo) return NextResponse.json({ error: 'No encontrado' }, { status: 404 })

    await prisma.victima.deleteMany({ where: { legajoId: id } })
    await prisma.dispositivo.deleteMany({ where: { legajoId: id } })
    await prisma.oficio.deleteMany({ where: { legajoId: id } })
    await prisma.legajo.delete({ where: { id } })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Error al eliminar legajo' }, { status: 500 })
  }
}