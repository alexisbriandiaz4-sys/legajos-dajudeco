import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { getUsuarioId } from '@/lib/server-auth'
import { OficioSchema, handlePrismaError } from '@/lib/validators'

export async function GET() {
  try {
    const usuarioId = await getUsuarioId()
    if (!usuarioId) return NextResponse.json({ error: 'No autenticado' }, { status: 401 })

    const oficios = await prisma.oficio.findMany({
      where: { legajo: { usuarioId } },
      orderBy: { createdAt: 'desc' },
      include: {
        legajo: { include: { victimas: true, dispositivos: true } }
      }
    })
    return NextResponse.json(oficios)
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
    const parsed = OficioSchema.safeParse(json)
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.issues[0].message }, { status: 400 })
    }
    const body = parsed.data

    const legajo = await prisma.legajo.findFirst({ where: { id: body.legajoId, usuarioId } })
    if (!legajo) return NextResponse.json({ error: 'Legajo no encontrado' }, { status: 404 })

    const oficio = await prisma.oficio.create({
      data: {
        legajoId:         body.legajoId,
        operadora:        body.operadora,
        tipo:             body.tipo,
        urgencia:         body.urgencia,
        numero:           body.numero           || null,
        observaciones:    body.observaciones    || null,
        columnas:         body.columnas         || null,
        tipoConsulta:     body.tipoConsulta,
        numeroLinea:      body.numeroLinea      || null,
        imeiSeleccionado: body.imeiSeleccionado || null,
        fechaEnvio:       body.fechaEnvio ? new Date(body.fechaEnvio) : null,
      },
      include: {
        legajo: { include: { victimas: true, dispositivos: true } }
      }
    })
    return NextResponse.json(oficio)
  } catch (error) {
    console.error(error)
    const { message, status } = handlePrismaError(error)
    return NextResponse.json({ error: message }, { status })
  }
}