import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { getUsuario } from '@/lib/server-auth'

export async function GET(request: Request) {
  try {
    const usuario = await getUsuario()
    if (!usuario) return NextResponse.json({ error: 'No autenticado' }, { status: 401 })
    if (usuario.rol !== 'admin') return NextResponse.json({ error: 'Sin permisos' }, { status: 403 })

    const { searchParams } = new URL(request.url)
    const page     = Math.max(1, parseInt(searchParams.get('page') ?? '1'))
    const limit    = 50
    const skip     = (page - 1) * limit
    const nivel    = searchParams.get('nivel')     ?? ''
    const accion   = searchParams.get('accion')    ?? ''
    const usuarioId = searchParams.get('usuarioId') ?? ''
    const desde    = searchParams.get('desde')     ?? ''
    const hasta    = searchParams.get('hasta')     ?? ''

    const where: any = {}
    if (nivel)      where.nivel     = nivel
    if (accion)     where.accion    = { contains: accion, mode: 'insensitive' }
    if (usuarioId)  where.usuarioId = usuarioId
    if (desde || hasta) {
      where.createdAt = {}
      if (desde) where.createdAt.gte = new Date(desde)
      if (hasta) where.createdAt.lte = new Date(hasta)
    }

    const [logs, total] = await Promise.all([
      prisma.auditLog.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
      }),
      prisma.auditLog.count({ where }),
    ])

    return NextResponse.json({
      logs,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    })
  } catch (error) {
    console.error('[GET /api/audit]', error)
    return NextResponse.json({ error: 'Error al obtener logs' }, { status: 500 })
  }
}