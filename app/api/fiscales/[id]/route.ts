import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { getUsuarioId } from '@/lib/server-auth'
import { FiscalSchema } from '@/lib/validators'

export async function PUT(request: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params
    const usuarioId = await getUsuarioId()
    if (!usuarioId) return NextResponse.json({ error: 'No autenticado' }, { status: 401 })

    const json = await request.json()
    const parsed = FiscalSchema.partial().safeParse(json)
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.issues[0].message }, { status: 400 })
    }
    const body = parsed.data

    const fiscal = await prisma.fiscal.updateMany({
      where: { id, usuarioId },
      data: {
        ...(body.nombre          !== undefined && { nombre: body.nombre }),
        ...(body.cargo           !== undefined && { cargo: body.cargo || null }),
        ...(body.fiscalia        !== undefined && { fiscalia: body.fiscalia || null }),
        ...(body.secretario      !== undefined && { secretario: body.secretario || null }),
        ...(body.dniSecretario   !== undefined && { dniSecretario: body.dniSecretario || null }),
        ...(body.dni             !== undefined && { dni: body.dni || null }),
        ...(body.email           !== undefined && { email: body.email || null }),
        ...(body.emailSecretario !== undefined && { emailSecretario: body.emailSecretario || null }),
        ...(body.direccion       !== undefined && { direccion: body.direccion || null }),
        ...(body.telefono        !== undefined && { telefono: body.telefono || null }),
        ...(body.telefonoMovil   !== undefined && { telefonoMovil: body.telefonoMovil || null }),
        ...('activo' in json     && { activo: json.activo ?? true }),
      }
    })
    return NextResponse.json(fiscal)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Error al actualizar fiscal' }, { status: 500 })
  }
}

export async function DELETE(_: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params
    const usuarioId = await getUsuarioId()
    if (!usuarioId) return NextResponse.json({ error: 'No autenticado' }, { status: 401 })
    await prisma.fiscal.deleteMany({ where: { id, usuarioId } })
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Error al eliminar fiscal' }, { status: 500 })
  }
}