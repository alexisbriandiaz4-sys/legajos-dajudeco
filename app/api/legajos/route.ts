import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { getUsuarioId } from '@/lib/server-auth'
import { LegajoSchema, handlePrismaError } from '@/lib/validators'

export async function GET() {
  try {
    const usuarioId = await getUsuarioId()
    if (!usuarioId) return NextResponse.json({ error: 'No autenticado' }, { status: 401 })

    const legajos = await prisma.legajo.findMany({
      where: { usuarioId },
      orderBy: { createdAt: 'desc' },
      include: { victimas: true, dispositivos: true, oficios: true }
    })
    return NextResponse.json(legajos)
  } catch (error) {
    console.error(error)
    const { message, status } = handlePrismaError(error)
    return NextResponse.json({ error: message }, { status })
  }
}

export async function POST(request: Request) {
  try {
    const usuarioId = await getUsuarioId()
    if (!usuarioId) return NextResponse.json({ error: 'No autenticado' }, { status: 401 })

    const json = await request.json()
    const parsed = LegajoSchema.safeParse(json)
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.issues[0].message }, { status: 400 })
    }
    const body = parsed.data

    const legajo = await prisma.legajo.create({
      data: {
        numero:        body.numero,
        caratula:      body.caratula,
        cuij:          body.cuij || null,
        delito:        body.delito,
        fechaHecho:    new Date(body.fechaHecho),
        estado:        body.estado,
        observaciones: body.observaciones || null,
        usuarioId,
        victimas:     { create: body.victimas },
        dispositivos: { create: body.dispositivos },
      },
      include: { victimas: true, dispositivos: true, oficios: true }
    })
    return NextResponse.json(legajo)
  } catch (error) {
    console.error(error)
    const { message, status } = handlePrismaError(error)
    return NextResponse.json({ error: message }, { status })
  }
}