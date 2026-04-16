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
    // Pero NO ve los legajos sin asignar (Base General) en su vista personal
    if (usuario.rol === 'admin') {
      if (filtroUsuarioId) {
        where.usuarioId = filtroUsuarioId
      } else {
        // Admin ve todos los legajos EXCEPTO los no asignados (Base General)
        // Ve: los que él creó + los que están asignados a otros
        where.OR = [
          { usuarioId: usuario.id }, // Legajos que él mismo creó
          { asignadoA: { not: null } } // Legajos asignados a otros
        ]
      }
    } else {
      // Investigador solo ve sus legajos asignados y los de Base General
      where.OR = [
        { usuarioId: usuario.id }, // Legajos que él creó
        { asignadoA: usuario.id }, // Legajos asignados a él
        { asignadoA: null } // Base General
      ]
    }

    if (estado) where.estado = estado

    if (desde || hasta) {
      where.fechaHecho = {}
      if (desde) {
        const fechaDesde = new Date(desde)
        // Asegurar que la fecha sea válida y establecer inicio del día
        fechaDesde.setHours(0, 0, 0, 0)
        where.fechaHecho.gte = fechaDesde
      }
      if (hasta) {
        const fechaHasta = new Date(hasta)
        // Asegurar que la fecha sea válida y establecer fin del día
        fechaHasta.setHours(23, 59, 59, 999)
        where.fechaHecho.lte = fechaHasta
      }
    }

    if (busqueda) {
      where.OR = [
        { numero:   { contains: busqueda, mode: 'insensitive' } },
        { caratula: { contains: busqueda, mode: 'insensitive' } },
        { delito:   { contains: busqueda, mode: 'insensitive' } },
        { fiscal:   { contains: busqueda, mode: 'insensitive' } },
        { cuij:     { contains: busqueda, mode: 'insensitive' } },
        { victimas: { some: { nombre: { contains: busqueda, mode: 'insensitive' } } } },
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
        asignadoA:     body.asignadoA || null,
        victimas:     { create: body.victimas },
        dispositivos: { create: body.dispositivos },
      },
      include: { victimas: true, dispositivos: true, oficios: true }
    })

    // Crear notificación si se asignó a un investigador
    if (body.asignadoA && body.asignadoA !== usuario.id) {
      await prisma.notificacion.create({
        data: {
          usuarioId: body.asignadoA,
          legajoId: legajo.id,
          tipo: 'ASIGNACION',
          mensaje: `Se te ha asignado el legajo ${body.numero} - ${body.caratula}`,
          leida: false
        }
      })
    }

    return NextResponse.json(legajo)
  } catch (error) {
    console.error(error)
    const { message, status } = handlePrismaError(error)
    return NextResponse.json({ error: message }, { status })
  }
}