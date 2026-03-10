import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { getUsuario } from '@/lib/server-auth'

export async function GET() {
  try {
    const usuario = await getUsuario()
    if (!usuario) return NextResponse.json({ error: 'No autenticado' }, { status: 401 })

    const esAdmin = usuario.rol === 'admin'
    const whereBase = esAdmin ? {} : { usuarioId: usuario.id }
    const whereOficio = esAdmin ? {} : { legajo: { usuarioId: usuario.id } }

    const [
      totalLegajos,
      legajosPorEstado,
      ultimosLegajos,
      totalOficios,
      oficiosPorEstado,
      oficiosPorOperadora,
      totalTelefonia,
      totalEstafas,
      topCausasTelefonia,
      topArdidEstafas,
      topEmpresasTelefonia,
      legajosPorMes,
    ] = await Promise.all([
      prisma.legajo.count({ where: whereBase }),

      prisma.legajo.groupBy({
        by: ['estado'],
        where: whereBase,
        _count: { estado: true },
      }),

      prisma.legajo.findMany({
        where: whereBase,
        orderBy: { createdAt: 'desc' },
        take: 5,
        select: {
          id: true, numero: true, caratula: true,
          delito: true, estado: true, createdAt: true, fiscal: true,
        },
      }),

      prisma.oficio.count({ where: whereOficio }),

      prisma.oficio.groupBy({
        by: ['estado'],
        where: whereOficio,
        _count: { estado: true },
      }),

      prisma.oficio.groupBy({
        by: ['operadora'],
        where: whereOficio,
        _count: { operadora: true },
        orderBy: { _count: { operadora: 'desc' } },
        take: 6,
      }),

      prisma.registroTelefonia.count(),
      prisma.registroEstafa.count(),

      // Top causas/delitos en telefonía
      prisma.registroTelefonia.groupBy({
        by: ['causa'],
        _count: { causa: true },
        orderBy: { _count: { causa: 'desc' } },
        take: 10,
      }),

      // Top modalidades de estafa
      prisma.registroEstafa.groupBy({
        by: ['ardid'],
        _count: { ardid: true },
        orderBy: { _count: { ardid: 'desc' } },
        take: 10,
      }),

      // Top empresas en telefonía
      prisma.registroTelefonia.groupBy({
        by: ['empresa'],
        _count: { empresa: true },
        orderBy: { _count: { empresa: 'desc' } },
        take: 6,
      }),

      // Legajos por mes (últimos 6 meses)
      prisma.$queryRaw`
        SELECT
          TO_CHAR(DATE_TRUNC('month', "createdAt"), 'Mon YYYY') as mes,
          DATE_TRUNC('month', "createdAt") as fecha,
          COUNT(*)::int as total
        FROM "Legajo"
        WHERE "createdAt" >= NOW() - INTERVAL '6 months'
        GROUP BY DATE_TRUNC('month', "createdAt")
        ORDER BY fecha ASC
      `,
    ])

    const oficiosVencidos = await prisma.oficio.count({
      where: { ...whereOficio, estado: 'Vencido' },
    })

    return NextResponse.json({
      legajos: {
        total: totalLegajos,
        porEstado: legajosPorEstado.map(e => ({ estado: e.estado, total: e._count.estado })),
        ultimos: ultimosLegajos,
        porMes: (legajosPorMes as any[]).map(r => ({ mes: r.mes, total: Number(r.total) })),
      },
      oficios: {
        total: totalOficios,
        porEstado: oficiosPorEstado.map(e => ({ estado: e.estado, total: e._count.estado })),
        vencidos: oficiosVencidos,
        porOperadora: oficiosPorOperadora.map(o => ({ operadora: o.operadora, total: o._count.operadora })),
      },
      baseGeneral: {
        totalTelefonia,
        totalEstafas,
        topCausasTelefonia: topCausasTelefonia
          .filter(d => d.causa && d.causa.trim() !== '')
          .map(d => ({ causa: d.causa!, total: d._count.causa })),
        topArdidEstafas: topArdidEstafas
          .filter(d => d.ardid && d.ardid.trim() !== '')
          .map(d => ({ ardid: d.ardid!, total: d._count.ardid })),
        topEmpresasTelefonia: topEmpresasTelefonia
          .filter(d => d.empresa && d.empresa.trim() !== '')
          .map(d => ({ empresa: d.empresa!, total: d._count.empresa })),
      },
    })
  } catch (error) {
    console.error('Error en estadísticas:', error)
    return NextResponse.json({ error: 'Error al obtener estadísticas' }, { status: 500 })
  }
}