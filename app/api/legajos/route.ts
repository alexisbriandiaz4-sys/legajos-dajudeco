import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { getUsuario } from '@/lib/server-auth'
import { LegajoSchema, handlePrismaError } from '@/lib/validators'

export async function GET(request: Request) {
  try {
    const usuario = await getUsuario()
    if (!usuario) return NextResponse.json({ error: 'No autenticado' }, { status: 401 })

    const { searchParams } = new URL(request.url)
    const page      = Math.max(1, parseInt(searchParams.get('page')  ?? '1'))
    const limit     = Math.min(50, Math.max(1, parseInt(searchParams.get('limit') ?? '20')))
    const busqueda  = searchParams.get('q')         ?? ''
    const estado    = searchParams.get('estado')    ?? ''
    const desde     = searchParams.get('desde')     ?? ''
    const hasta     = searchParams.get('hasta')     ?? ''
    const filtroUsuarioId = searchParams.get('usuarioId') ?? ''

    const where: any = {}

    // Si es admin puede ver todos o filtrar por usuarioId específico
    // Si es investigador solo ve los suyos
    if (usuario.rol === 'admin') {
      if (filtroUsuarioId) where.usuarioId = filtroUsuarioId
    } else {
      where.usuarioId = usuario.id
    }

    if (estado) where.estado = estado

    if (desde || hasta) {
      where.fechaHecho = {}
      if (desde) where.fechaHecho.gte = new Date(desde)
      if (hasta) {
        const h = new Date(hasta)
        h.setHours(23, 59, 59)
        where.fechaHecho.lte = h
      }
    }

    if (busqueda) {
      const q = busqueda.toLowerCase()
      where.OR = [
        { numero:   { contains: q } },
        { caratula: { contains: q } },
        { delito:   { contains: q } },
        { fiscal:   { contains: q } },
        { cuij:     { contains: q } },
        { victimas: { some: { nombre: { contains: q } } } },
      ]
    }

    const [total, legajos] = await prisma.$transaction([
      prisma.legajo.count({ where }),
      prisma.legajo.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
        include: { victimas: true, dispositivos: true, oficios: true }
      })
    ])

    return NextResponse.json({
      legajos,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    })
  } catch (error) {
    console.error(error)
    const { message, status } = handlePrismaError(error)
    return NextResponse.json({ error: message }, { status })
  }
}

export async function POST(request: Request) {
  try {
    const usuario = await getUsuario()
    if (!usuario) return NextResponse.json({ error: 'No autenticado' }, { status: 401 })

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
        usuarioId:     usuario.id,
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