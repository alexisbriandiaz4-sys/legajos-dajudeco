import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { getUsuarioId } from '@/lib/server-auth'

export async function GET() {
  try {
    const usuarioId = await getUsuarioId()
    if (!usuarioId) return NextResponse.json({ error: 'No autenticado' }, { status: 401 })

    const legajos = await prisma.legajo.findMany({
      where: { usuarioId },
      orderBy: { createdAt: 'desc' },
      include: {
        victimas: true,
        dispositivos: true,
        oficios: true,
      }
    })
    return NextResponse.json(legajos)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Error al obtener legajos' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const usuarioId = await getUsuarioId()
    if (!usuarioId) return NextResponse.json({ error: 'No autenticado' }, { status: 401 })

    const body = await request.json()
    const legajo = await prisma.legajo.create({
      data: {
        numero: body.numero,
        caratula: body.caratula,
        cuij: body.cuij ?? null,
        delito: body.delito,
        fechaHecho: new Date(body.fechaHecho),
        estado: body.estado ?? 'Activo',
        observaciones: body.observaciones ?? null,
        usuarioId,
        victimas: {
          create: body.victimas ?? []
        },
        dispositivos: {
          create: body.dispositivos ?? []
        }
      },
      include: { victimas: true, dispositivos: true, oficios: true }
    })
    return NextResponse.json(legajo)
  } catch (error: any) {
    if (error.code === 'P2002') return NextResponse.json({ error: 'El número de legajo ya existe' }, { status: 400 })
    console.error(error)
    return NextResponse.json({ error: 'Error al crear legajo' }, { status: 500 })
  }
}