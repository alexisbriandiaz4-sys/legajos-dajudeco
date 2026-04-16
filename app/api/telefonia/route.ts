import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { getUsuario } from '@/lib/server-auth'
import { handlePrismaError } from '@/lib/validators'

export async function GET(request: Request) {
  try {
    const usuario = await getUsuario()
    if (!usuario) return NextResponse.json({ error: 'No autenticado' }, { status: 401 })

    const { searchParams } = new URL(request.url)
    const page  = Math.max(1, parseInt(searchParams.get('page')  ?? '1'))
    const limit = Math.min(50, Math.max(1, parseInt(searchParams.get('limit') ?? '20')))
    const busqueda = searchParams.get('q') ?? ''

    const where: any = {}

    if (usuario.rol !== 'admin') {
      where.OR = [
        { asignadoA: usuario.id },
        { asignadoA: null }
      ]
    }

    if (busqueda) {
      where.OR = [
        { nroLegajo: { contains: busqueda, mode: 'insensitive' } },
        { victima:   { contains: busqueda, mode: 'insensitive' } },
        { imei:      { contains: busqueda, mode: 'insensitive' } },
        { causa:     { contains: busqueda, mode: 'insensitive' } },
        { abonado:   { contains: busqueda, mode: 'insensitive' } },
      ]
    }

    const [total, registros] = await prisma.$transaction([
      prisma.registroTelefonia.count({ where }),
      prisma.registroTelefonia.findMany({
        where,
        orderBy: { createdAt: 'desc' },
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

    const registro = await prisma.registroTelefonia.create({
      data: {
        anio:          body.anio          ? parseInt(body.anio) : null,
        nroLegajo:     body.nroLegajo     || null,
        nroInterno:    body.nroInterno    ? parseInt(body.nroInterno) : null,
        cuij:          body.cuij          || null,
        fechaHecho:    body.fechaHecho    ? new Date(body.fechaHecho) : null,
        fechaIngreso:  body.fechaIngreso  ? new Date(body.fechaIngreso) : null,
        lugarHecho:    body.lugarHecho    || null,
        barrio:        body.barrio        || null,
        victima:       body.victima       || null,
        causa:         body.causa         || null,
        aparato:       body.aparato       || null,
        empresa:       body.empresa       || null,
        abonado:       body.abonado       || null,
        imei:          body.imei          || null,
        color:         body.color         || null,
        fiscal:        body.fiscal        || null,
        depOrigen:     body.depOrigen     || null,
        nroCom:        body.nroCom        || null,
        observaciones: body.observaciones || null,
        estadoLegajo:  body.estadoLegajo  || null,
        asignadoA:     body.asignadoA     || null,
      }
    })

    // Si se asignó a un investigador, crear también un Legajo en su pestaña
    if (body.asignadoA) {
      await prisma.legajo.create({
        data: {
          numero:        `TEL-${registro.id.slice(-8).toUpperCase()}`,
          caratula:      body.causa || body.victima || 'Sin carátula',
          cuij:          body.cuij       || null,
          delito:        body.causa      || 'Telefonía',
          fechaHecho:    body.fechaHecho ? new Date(body.fechaHecho) : new Date(),
          estado:        body.estadoLegajo || 'Activo',
          observaciones: body.observaciones || null,
          fiscal:        body.fiscal     || null,
          usuarioId:     usuario.id,
          asignadoA:     body.asignadoA,
          origenTipo:    'telefonia',
          origenId:      registro.id,
        }
      })
    }

    return NextResponse.json(registro)
  } catch (error) {
    console.error(error)
    const { message, status } = handlePrismaError(error)
    return NextResponse.json({ error: message }, { status })
  }
}
