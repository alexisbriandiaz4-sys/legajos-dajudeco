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

export async function PUT(request: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params
    const usuarioId = await getUsuarioId()
    if (!usuarioId) return NextResponse.json({ error: 'No autenticado' }, { status: 401 })

    const body = await request.json()
    const fiscal = await prisma.fiscal.updateMany({
      where: { id, usuarioId },
      data: {
        nombre: body.nombre,
        cargo: body.cargo ?? null,
        fiscalia: body.fiscalia ?? null,
        secretario: body.secretario ?? null,
        dniSecretario: body.dniSecretario ?? null,
        dni: body.dni ?? null,
        email: body.email ?? null,
        emailSecretario: body.emailSecretario ?? null,
        direccion: body.direccion ?? null,
        telefono: body.telefono ?? null,
        telefonoMovil: body.telefonoMovil ?? null,
        activo: body.activo ?? true,
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