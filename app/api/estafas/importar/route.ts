import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { getUsuarioId } from '@/lib/server-auth'
import { handlePrismaError } from '@/lib/validators'

function parseDate(value: any): Date | null {
  if (!value) return null
  
  if (value instanceof Date) {
    if (isNaN(value.getTime())) return null
    // Descartar fechas fuera de rango válido (1900-2100)
    const year = value.getFullYear()
    if (year < 1900 || year > 2100) return null
    return value
  }
  
  if (typeof value === 'string') {
    const d = new Date(value)
    if (isNaN(d.getTime())) return null
    const year = d.getFullYear()
    if (year < 1900 || year > 2100) return null
    return d
  }
  
  if (typeof value === 'number') {
    // Descartar números seriales absurdos (el error venía de valores como 6695428)
    if (value < 1 || value > 109574) return null // 109574 = 31/12/2199 en serial Excel
    const date = new Date((value - 25569) * 86400 * 1000)
    if (isNaN(date.getTime())) return null
    const year = date.getFullYear()
    if (year < 1900 || year > 2100) return null
    return date
  }
  
  return null
}

function parseString(value: any): string | null {
  if (value === null || value === undefined) return null
  const s = String(value).trim()
  return s === '' || s === 'null' || s === 'undefined' ? null : s
}

function parseIntVal(value: any): number | null {
  if (value === null || value === undefined) return null
  const n = parseInt(String(value))
  return isNaN(n) ? null : n
}

export async function POST(request: Request) {
  try {
    const usuarioId = await getUsuarioId()
    if (!usuarioId) return NextResponse.json({ error: 'No autenticado' }, { status: 401 })

    const body = await request.json()
    const { registros } = body

    if (!Array.isArray(registros) || registros.length === 0) {
      return NextResponse.json({ error: 'No hay registros para importar' }, { status: 400 })
    }

    await prisma.registroEstafa.deleteMany({})

    const data = registros
  .filter((r: any) => {
    const victima = parseString(r[8])
    const cuij = parseString(r[2])
    const legajo = parseString(r[6])
    if (!victima && !cuij && !legajo) return false
    return true
  })
  .map((r: any, index: number) => ({
    filaExcel:          index + 2,
    nroInterno:         parseIntVal(r[0]),
    cuij:               parseString(r[2]),
    fechaHecho:         parseDate(r[3]),
    fechaDenuncia:      parseDate(r[4]),
    dependencia:        parseString(r[5]),
    nroLegajo:          parseString(r[6]),
    recibido:           parseDate(r[7]),
    victima:            parseString(r[8]),
    telefonoVictima:    parseString(r[9]),
    caratula:           parseString(r[10]),
    fiscal:             parseString(r[11]),
    ardid:              parseString(r[12]),
    seudonimo:          parseString(r[13]),
    telefonoReferencia: parseString(r[14]),
    nombreReferencia:   parseString(r[15]),
    imei:               parseString(r[16]),
    otrosTelefonos:     parseString(r[17]),
    cbu:                parseString(r[18]),
    titulares:          parseString(r[19]),
    otrosCbu:           parseString(r[20]),
    estadoLegajo:       parseString(r[21]),
    complementos:       parseString(r[22]),
  }))

    const LOTE = 500
    let insertados = 0
    for (let i = 0; i < data.length; i += LOTE) {
      const lote = data.slice(i, i + LOTE)
      await prisma.registroEstafa.createMany({ data: lote })
      insertados += lote.length
    }

    return NextResponse.json({ ok: true, insertados })
  } catch (error) {
    console.error(error)
    const { message, status } = handlePrismaError(error)
    return NextResponse.json({ error: message }, { status })
  }
}