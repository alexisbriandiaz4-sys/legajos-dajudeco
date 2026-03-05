// app/api/oficios/route.ts

import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { getUsuarioId } from '@/lib/server-auth'

export async function GET() {
  try {
    const usuarioId = await getUsuarioId()
    if (!usuarioId) return NextResponse.json({ error: 'No autenticado' }, { status: 401 })

    const oficios = await prisma.oficio.findMany({
      where: { legajo: { usuarioId } },
      orderBy: { createdAt: 'desc' },
      include: {
        legajo: {
          include: { victimas: true, dispositivos: true }
        }
      }
    })
    return NextResponse.json(oficios)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Error al obtener oficios' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const usuarioId = await getUsuarioId()
    if (!usuarioId) return NextResponse.json({ error: 'No autenticado' }, { status: 401 })

    const body = await request.json()

    const legajo = await prisma.legajo.findFirst({
      where: { id: body.legajoId, usuarioId }
    })
    if (!legajo) return NextResponse.json({ error: 'Legajo no encontrado' }, { status: 404 })

    const oficio = await prisma.oficio.create({
      data: {
        legajoId:         body.legajoId,
        operadora:        body.operadora,
        tipo:             body.tipo,
        urgencia:         body.urgencia         ?? '48 horas',
        numero:           body.numero           ?? null,
        observaciones:    body.observaciones    ?? null,
        columnas:         body.columnas         ?? null,
        tipoConsulta:     body.tipoConsulta     ?? 'imei',
        numeroLinea:      body.numeroLinea      ?? null,
        imeiSeleccionado: body.imeiSeleccionado ?? null,
        fechaEnvio:       body.fechaEnvio ? new Date(body.fechaEnvio) : null,
      },
      include: {
        legajo: {
          include: { victimas: true, dispositivos: true }
        }
      }
    })
    return NextResponse.json(oficio)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Error al crear oficio' }, { status: 500 })
  }
}
