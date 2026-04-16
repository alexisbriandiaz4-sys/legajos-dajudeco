import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { getUsuario } from '@/lib/server-auth'

export async function GET(request: Request) {
  try {
    const usuario = await getUsuario()
    if (!usuario) return NextResponse.json({ error: 'No autenticado' }, { status: 401 })

    const { searchParams } = new URL(request.url)
    const page = Math.max(1, parseInt(searchParams.get('page') ?? '1'))
    const limit = Math.min(20, Math.max(1, parseInt(searchParams.get('limit') ?? '10')))

    const where: any = {
      usuarioId: usuario.id,
      leida: false
    }

    const [total, notificaciones] = await prisma.$transaction([
      prisma.notificacion.count({ where }),
      prisma.notificacion.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit
      })
    ])

    return NextResponse.json({
      notificaciones,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit)
    })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Error al obtener notificaciones' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const usuario = await getUsuario()
    if (!usuario || usuario.rol !== 'admin') {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
    }

    const { usuarioId, legajoId, tipo, mensaje } = await request.json()

    if (!usuarioId || !legajoId || !tipo) {
      return NextResponse.json({ error: 'Datos incompletos' }, { status: 400 })
    }

    const notificacion = await prisma.notificacion.create({
      data: {
        usuarioId,
        legajoId,
        tipo: tipo === 'asignacion' ? 'ASIGNACION' : tipo === 'cambio' ? 'CAMBIO' : 'INFO',
        mensaje: mensaje || `Se te ha asignado el legajo ${legajoId}`,
        leida: false
      }
    })

    return NextResponse.json(notificacion)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Error al crear notificación' }, { status: 500 })
  }
}

export async function PUT(request: Request) {
  try {
    const usuario = await getUsuario()
    if (!usuario) return NextResponse.json({ error: 'No autenticado' }, { status: 401 })

    const { notificationIds } = await request.json()

    if (!Array.isArray(notificationIds)) {
      return NextResponse.json({ error: 'IDs inválidos' }, { status: 400 })
    }

    await prisma.notificacion.updateMany({
      where: {
        id: { in: notificationIds },
        usuarioId: usuario.id
      },
      data: { leida: true }
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Error al marcar notificaciones' }, { status: 500 })
  }
}
