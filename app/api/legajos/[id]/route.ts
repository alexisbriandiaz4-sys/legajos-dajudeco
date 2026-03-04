import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'

const SECRET = process.env.JWT_SECRET ?? 'legajos-secret-2024'

async function getUsuarioId() {
  const cookieStore = await cookies()
  const token = cookieStore.get('auth')?.value
  if (!token) return null
  try {
    const payload = jwt.verify(token, SECRET) as any
    return payload.id
  } catch { return null }
}

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

    const body = await request.json()

    // Verificar que el legajo pertenece al usuario
    const legajoExistente = await prisma.legajo.findFirst({ where: { id, usuarioId } })
    if (!legajoExistente) return NextResponse.json({ error: 'No encontrado' }, { status: 404 })

    // Actualizar datos principales del legajo
    await prisma.legajo.update({
      where: { id },
      data: {
        numero: body.numero,
        caratula: body.caratula,
        cuij: body.cuij ?? null,
        delito: body.delito,
        fechaHecho: new Date(body.fechaHecho),
        estado: body.estado,
        observaciones: body.observaciones ?? null,
        fiscal: body.fiscal ?? null,
        emailRespuesta: body.emailRespuesta ?? null,
      }
    })

    // Reemplazar víctimas: borrar las existentes y crear las nuevas
    if (Array.isArray(body.victimas)) {
      await prisma.victima.deleteMany({ where: { legajoId: id } })
      if (body.victimas.length > 0) {
        await prisma.victima.createMany({
          data: body.victimas
            .filter((v: any) => v.nombre?.trim())
            .map((v: any) => ({
              nombre: v.nombre,
              dni: v.dni || null,
              telefono: v.telefono || null,
              email: v.email || null,
              legajoId: id,
            }))
        })
      }
    }

    // Reemplazar dispositivos: borrar los existentes y crear los nuevos
    if (Array.isArray(body.dispositivos)) {
      await prisma.dispositivo.deleteMany({ where: { legajoId: id } })
      if (body.dispositivos.length > 0) {
        await prisma.dispositivo.createMany({
          data: body.dispositivos
            .filter((d: any) => d.marca?.trim() || d.imei?.trim())
            .map((d: any) => ({
              tipo: d.tipo || 'Celular',
              marca: d.marca || null,
              modelo: d.modelo || null,
              imei: d.imei || null,
              color: d.color || null,
              legajoId: id,
            }))
        })
      }
    }

    // Devolver el legajo actualizado completo
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

    // Verificar que pertenece al usuario antes de borrar
    const legajo = await prisma.legajo.findFirst({ where: { id, usuarioId } })
    if (!legajo) return NextResponse.json({ error: 'No encontrado' }, { status: 404 })

    // Borrar víctimas, dispositivos y oficios relacionados primero
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