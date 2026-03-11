import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { getUsuarioId } from '@/lib/server-auth'
import { OficioSchema, handlePrismaError } from '@/lib/validators'

export async function GET(request: Request) {
  try {
    const { getUsuario } = await import('@/lib/server-auth')
    const usuario = await getUsuario()
    if (!usuario) return NextResponse.json({ error: 'No autenticado' }, { status: 401 })
    const usuarioId = usuario.id

    const { searchParams } = new URL(request.url)
    const page     = Math.max(1, parseInt(searchParams.get('page')  ?? '1'))
    const limit    = Math.min(50, Math.max(1, parseInt(searchParams.get('limit') ?? '20')))
    const busqueda = searchParams.get('q')      ?? ''
    const estado   = searchParams.get('estado') ?? ''
    const estados  = searchParams.get('estados') ?? ''

    const esAdmin = usuario.rol === 'admin'
    const where: any = esAdmin ? {} : { legajo: { usuarioId } }
    if (estado) where.estado = estado
    if (estados) where.estado = { in: estados.split(',') }
    if (busqueda) {
      where.OR = [
        { operadora: { contains: busqueda, mode: 'insensitive' } },
        { legajo: { numero:   { contains: busqueda, mode: 'insensitive' } } },
        { legajo: { caratula: { contains: busqueda, mode: 'insensitive' } } },
      ]
    }

    const [total, oficios] = await prisma.$transaction([
      prisma.oficio.count({ where }),
      prisma.oficio.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
        include: {
          legajo: { include: { victimas: true, dispositivos: true } }
        }
      })
    ])

    return NextResponse.json({ oficios, total, page, limit, totalPages: Math.ceil(total / limit) })
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