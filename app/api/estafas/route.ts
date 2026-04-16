export async function POST(request: Request) {
  try {
    const usuario = await getUsuario()
    if (!usuario) return NextResponse.json({ error: 'No autenticado' }, { status: 401 })

    const body = await request.json()

    const registro = await prisma.registroEstafa.create({
      data: {
        nroInterno:         body.nroInterno         ? parseInt(body.nroInterno) : null,
        cuij:               body.cuij               || null,
        fechaHecho:         body.fechaHecho         ? new Date(body.fechaHecho) : null,
        fechaDenuncia:      body.fechaDenuncia       ? new Date(body.fechaDenuncia) : null,
        dependencia:        body.dependencia         || null,
        nroLegajo:          body.nroLegajo           || null,
        recibido:           body.recibido            ? new Date(body.recibido) : null,
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
        filaExcel:          body.filaExcel           ? parseInt(body.filaExcel) : null,
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
