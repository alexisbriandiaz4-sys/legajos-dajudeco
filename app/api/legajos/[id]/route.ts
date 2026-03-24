import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { getUsuario } from '@/lib/server-auth'
import { LegajoSchema, handlePrismaError } from '@/lib/validators'
import { logger } from '@/lib/logger'

export async function GET(_: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params
    const usuario = await getUsuario()
    if (!usuario) return NextResponse.json({ error: 'No autenticado' }, { status: 401 })

    const where = usuario.rol === 'admin' ? { id } : { id, usuarioId: usuario.id }
    const legajo = await prisma.legajo.findFirst({
      where,
      include: { victimas: true, dispositivos: true, oficios: true }
    })
    if (!legajo) return NextResponse.json({ error: 'No encontrado' }, { status: 404 })
    return NextResponse.json(legajo)
  } catch (error) {
    logger.error('[GET /api/legajos/[id]]', error)
    const { message, status } = handlePrismaError(error)
    return NextResponse.json({ error: message }, { status })
  }
}

export async function PUT(request: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params
    const usuario = await getUsuario()
    if (!usuario) return NextResponse.json({ error: 'No autenticado' }, { status: 401 })

    const json = await request.json()
    const parsed = LegajoSchema.partial().safeParse(json)
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.issues[0].message }, { status: 400 })
    }
    const body = parsed.data

    const where = usuario.rol === 'admin' ? { id } : { id, usuarioId: usuario.id }
    const legajoExistente = await prisma.legajo.findFirst({ where })
    if (!legajoExistente) return NextResponse.json({ error: 'No encontrado' }, { status: 404 })

    await prisma.legajo.update({
      where: { id },
      data: {
        ...(body.numero        !== undefined && { numero: body.numero }),
        ...(body.caratula      !== undefined && { caratula: body.caratula }),
        ...(body.cuij          !== undefined && { cuij: body.cuij || null }),
        ...(body.delito        !== undefined && { delito: body.delito }),
        ...(body.fechaHecho    !== undefined && { fechaHecho: new Date(body.fechaHecho) }),
        ...(body.estado        !== undefined && { estado: body.estado }),
        ...(body.observaciones !== undefined && { observaciones: body.observaciones || null }),
        ...(body.fiscal        !== undefined && { fiscal: body.fiscal || null }),
        ...(body.emailRespuesta !== undefined && { emailRespuesta: body.emailRespuesta || null }),
        ...(body.asignadoA !== undefined && { asignadoA: body.asignadoA || null }),
        ...(body.visto !== undefined && { visto: body.visto }),
      }
    })

    if (Array.isArray(body.victimas)) {
      await prisma.victima.deleteMany({ where: { legajoId: id } })
      if (body.victimas.length > 0) {
        await prisma.victima.createMany({
          data: body.victimas
            .filter((v) => v.nombre?.trim())
            .map((v) => ({ nombre: v.nombre, dni: v.dni || null, telefono: v.telefono || null, email: v.email || null, legajoId: id }))
        })
      }
    }

    if (Array.isArray(body.dispositivos)) {
      await prisma.dispositivo.deleteMany({ where: { legajoId: id } })
      if (body.dispositivos.length > 0) {
        await prisma.dispositivo.createMany({
          data: body.dispositivos
            .filter((d) => d.marca?.trim() || d.imei?.trim() || d.numeroLinea?.trim())
            .map((d) => ({ tipo: d.tipo || 'Celular', marca: d.marca || null, modelo: d.modelo || null, imei: d.imei || null, color: d.color || null, numeroLinea: d.numeroLinea || null, legajoId: id }))
        })
      }
    }

    const legajoActualizado = await prisma.legajo.findFirst({
      where: { id },
      include: { victimas: true, dispositivos: true, oficios: true }
    })
    return NextResponse.json(legajoActualizado)
  } catch (error) {
    logger.error('[PUT /api/legajos/[id]]', error)
    const { message, status } = handlePrismaError(error)
    return NextResponse.json({ error: message }, { status })
  }
}

export async function DELETE(_: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params
    const usuario = await getUsuario()
    if (!usuario) return NextResponse.json({ error: 'No autenticado' }, { status: 401 })

    const where = usuario.rol === 'admin' ? { id } : { id, usuarioId: usuario.id }
    const legajo = await prisma.legajo.findFirst({ where })
    if (!legajo) return NextResponse.json({ error: 'No encontrado' }, { status: 404 })

    // onDelete: Cascade en el schema elimina todos los registros relacionados
    await prisma.legajo.delete({ where: { id } })
    logger.audit('LEGAJO_ELIMINADO', usuario.id, `legajo:${id}`, { numero: legajo.numero })
    return NextResponse.json({ ok: true })
  } catch (error) {
    logger.error('[DELETE /api/legajos/[id]]', error)
    const { message, status } = handlePrismaError(error)
    return NextResponse.json({ error: message }, { status })
  }
}