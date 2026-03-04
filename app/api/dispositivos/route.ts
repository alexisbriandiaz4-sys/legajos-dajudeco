import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const dispositivo = await prisma.dispositivo.create({
      data: {
        tipo: body.tipo,
        marca: body.marca ?? null,
        modelo: body.modelo ?? null,
        imei: body.imei ?? null,
        color: body.color ?? null,
        legajoId: body.legajoId,
      }
    })
    return NextResponse.json(dispositivo)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Error al crear dispositivo' }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json()
    await prisma.dispositivo.delete({ where: { id } })
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Error al eliminar dispositivo' }, { status: 500 })
  }
}