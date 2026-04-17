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

    if (usuario.rol === 'admin') {
      if (filtroUsuarioId) {
        // Tab de un investigador específico: todos sus legajos
        where.usuarioId = filtroUsuarioId
      } else {
        // Tab "Todos": el Admin ve los legajos que tienen asignación
        // (los que cargó sin asignar van a Base General, no aparecen acá)
        where.asignadoA = { not: null }
      }
    } else {
      // Investigador: ve los que él creó, los asignados a él, y los de Base General (sin asignar)
      where.OR = [
        { usuarioId: usuario.id },
        { asignadoA: usuario.id },
        { asignadoA: null },
      ]
    }

    if (estado) where.estado = estado

    if (desde || hasta) {
      where.fechaHecho = {}
      if (desde) {
        const fechaDesde = new Date(desde)
        fechaDesde.setHours(0, 0, 0, 0)
        where.fechaHecho.gte = fechaDesde
      }
      if (hasta) {
        const fechaHasta = new Date(hasta)
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
        cuij:          body.cuij          || null,
        delito:        body.delito,
        fechaHecho:    new Date(body.fechaHecho),
        estado:        body.estado,
        observaciones: body.observaciones || null,
        fiscal:        body.fiscal        || null,
        emailRespuesta: body.emailRespuesta || null,
        usuarioId:     usuario.id,
        asignadoA:     body.asignadoA     || null,
        victimas:     { create: body.victimas },
        dispositivos: { create: body.dispositivos },
      },
      include: { victimas: true, dispositivos: true, oficios: true }
    })

    // Notificación al investigador asignado
    if (body.asignadoA && body.asignadoA !== usuario.id) {
      await prisma.notificacion.create({
        data: {
          usuarioId: body.asignadoA,
          legajoId:  legajo.id,
          tipo:      'ASIGNACION',
          mensaje:   `Se te ha asignado el legajo ${body.numero} - ${body.caratula}`,
          leida:     false,
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
