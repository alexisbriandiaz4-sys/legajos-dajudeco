import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const victima = await prisma.victima.create({
      data: {
        nombre: body.nombre,
        dni: body.dni ?? null,
        telefono: body.telefono ?? null,
        email: body.email ?? null,
        legajoId: body.legajoId,
      }
    })
    return NextResponse.json(victima)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Error al crear víctima' }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json()
    await prisma.victima.delete({ where: { id } })
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Error al eliminar víctima' }, { status: 500 })
  }
}
