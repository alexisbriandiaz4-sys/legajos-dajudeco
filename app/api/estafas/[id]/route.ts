import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { getUsuario, getUsuarioId } from '@/lib/server-auth'
import { handlePrismaError } from '@/lib/validators'

export async function PATCH(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    const usuarioId = await getUsuarioId()
    if (!usuarioId) return NextResponse.json({ error: 'No autenticado' }, { status: 401 })

    await prisma.registroEstafa.update({
      where: { id },
      data: { visto: true },
    })
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error(error)
    const { message, status } = handlePrismaError(error)
    return NextResponse.json({ error: message }, { status })
  }
}

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    const usuario = await getUsuario()
    if (!usuario) return NextResponse.json({ error: 'No autenticado' }, { status: 401 })
    if (usuario.rol !== 'admin') return NextResponse.json({ error: 'Sin permisos' }, { status: 403 })

    const body = await request.json()

    const registro = await prisma.registroEstafa.update({
      where: { id },
      data: {
        nroInterno:         body.nroInterno         ? parseInt(body.nroInterno) : null,
        cuij:               body.cuij               || null,
        fechaHecho:         body.fechaHecho         ? new Date(body.fechaHecho) : null,
        fechaDenuncia:      body.fechaDenuncia       ? new Date(body.fechaDenuncia) : null,
        dependencia:        body.dependencia         || null,
        nroLegajo:          body.nroLegajo           || null,
        victima:            body.victima             || null,
        telefonoVictima:    body.telefonoVictima     || null,
        caratula:           body.caratula            || null,
        fiscal:             body.fiscal              || null,
        ardid:              body.ardid               || null,
        seudonimo:          body.seudonimo           || null,
        telefonoReferencia: body.telefonoReferencia  || null,
        nombreReferencia:   body.nombreReferencia    || null,
        imei:               body.imei               || null,
        otrosTelefonos:     body.otrosTelefonos      || null,
        cbu:                body.cbu                || null,
        titulares:          body.titulares           || null,
        otrosCbu:           body.otrosCbu            || null,
        estadoLegajo:       body.estadoLegajo        || null,
        complementos:       body.complementos        || null,
        asignadoA:          body.asignadoA           || null,
      }
    })

    return NextResponse.json(registro)
  } catch (error) {
    console.error(error)
    const { message, status } = handlePrismaError(error)
    return NextResponse.json({ error: message }, { status })
  }
}

export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    const usuario = await getUsuario()
    if (!usuario) return NextResponse.json({ error: 'No autenticado' }, { status: 401 })
    if (usuario.rol !== 'admin') return NextResponse.json({ error: 'Sin permisos' }, { status: 403 })

    await prisma.registroEstafa.delete({ where: { id } })
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error(error)
    const { message, status } = handlePrismaError(error)
    return NextResponse.json({ error: message }, { status })
  }
}
