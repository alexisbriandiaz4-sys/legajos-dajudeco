// app/api/oficios/route.ts

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