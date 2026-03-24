import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { getUsuario } from '@/lib/server-auth'
import { handlePrismaError } from '@/lib/validators'

export async function GET(request: Request) {
  try {
    const usuario = await getUsuario()
    if (!usuario) return NextResponse.json({ error: 'No autenticado' }, { status: 401 })

    const { searchParams } = new URL(request.url)
    const page     = Math.max(1, parseInt(searchParams.get('page')  ?? '1'))
    const limit    = Math.min(100, Math.max(1, parseInt(searchParams.get('limit') ?? '20')))
    const busqueda = searchParams.get('q')      ?? ''
    const anio     = searchParams.get('anio')   ?? ''
    const causa    = searchParams.get('causa')  ?? ''
    const desde    = searchParams.get('desde')  ?? ''
    const hasta    = searchParams.get('hasta')  ?? ''

    const where: any = {}

    // Todos pueden ver todo para búsqueda general
    if (anio) where.anio = parseInt(anio)
    if (causa) where.causa = { contains: causa, mode: 'insensitive' }
    if (desde || hasta) {
      where.fechaHecho = {}
      if (desde) where.fechaHecho.gte = new Date(desde)
      if (hasta) where.fechaHecho.lte = new Date(hasta)
    }
    if (busqueda) {
      const busquedaOR = [
        { victima: { contains: busqueda, mode: 'insensitive' } },
        { imei:    { contains: busqueda, mode: 'insensitive' } },
        { causa:   { contains: busqueda, mode: 'insensitive' } },
        { nroLegajo: { contains: busqueda, mode: 'insensitive' } },
      ]
      // Combinar con filtro de rol si existe
      if (where.OR) {
        where.AND = [{ OR: where.OR }, { OR: busquedaOR }]
        delete where.OR
      } else {
        where.OR = busquedaOR
      }
    }

    const [total, registros] = await prisma.$transaction([
      prisma.registroTelefonia.count({ where }),
      prisma.registroTelefonia.findMany({
        where,
        orderBy: [{ anio: 'desc' }, { fechaIngreso: 'desc' }],
        skip: (page - 1) * limit,
        take: limit,
      })
    ])

    return NextResponse.json({ registros, total, page, limit, totalPages: Math.ceil(total / limit) })
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

    const body = await request.json()
    // asignadoA viene del body, puede ser null o un usuarioId
    const registro = await prisma.registroTelefonia.create({ data: body })
    return NextResponse.json(registro)
  } catch (error) {
    console.error(error)
    const { message, status } = handlePrismaError(error)
    return NextResponse.json({ error: message }, { status })
  }
}