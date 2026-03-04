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