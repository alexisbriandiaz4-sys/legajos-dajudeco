import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { getUsuarioId } from '@/lib/server-auth'
import { handlePrismaError } from '@/lib/validators'

function parseDate(value: any): Date | null {
  if (!value) return null
  if (value instanceof Date) return isNaN(value.getTime()) ? null : value
  if (typeof value === 'string') {
    const d = new Date(value)
    return isNaN(d.getTime()) ? null : d
  }
  if (typeof value === 'number') {
    const date = new Date((value - 25569) * 86400 * 1000)
    return isNaN(date.getTime()) ? null : date
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

// IMEI viene como número flotante (ej: 353878073044978.0) — hay que convertirlo a string entero
function parseImei(value: any): string | null {
  if (value === null || value === undefined) return null
  const s = String(value).trim()
  if (s === '' || s === 'null') return null
  // Si es un número flotante tipo "353878073044978.0", sacar el .0
  if (s.includes('.')) {
    const n = parseFloat(s)
    if (!isNaN(n)) return String(Math.round(n))
  }
  return s
}

export async function POST(request: Request) {
  try {
    const usuarioId = await getUsuarioId()
    if (!usuarioId) return NextResponse.json({ error: 'No autenticado' }, { status: 401 })

    // Parsear el body con timeout para archivos grandes
    const body = await Promise.race([
      request.json(),
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Timeout al procesar el archivo')), 30000)
      )
    ]) as any

    const { registros } = body

    if (!Array.isArray(registros) || registros.length === 0) {
      return NextResponse.json({ error: 'No hay registros para importar' }, { status: 400 })
    }

    // Validar tamaño máximo (máximo 10,000 registros)
    if (registros.length > 10000) {
      return NextResponse.json({ 
        error: 'El archivo es demasiado grande. Máximo permitido: 10,000 registros', 
        status: 400 
      })
    }

    // Eliminar registros existentes con transacción
    await prisma.$transaction(async (tx) => {
      await tx.registroTelefonia.deleteMany({})
    })

    // Procesamiento por lotes optimizado
    const data = registros
      .filter((r: any) => {
        const anio = parseIntVal(r[0])
        const victima = parseString(r[8])
        if (!anio || anio < 2000 || anio > 2100) return false
        if (victima && victima.startsWith('FFFF')) return false
        return true
      })
      .map((r: any) => ({
        anio:           parseIntVal(r[0]),
        nroLegajo:      parseString(r[1]),
        nroInterno:     parseIntVal(r[2]),
        cuij:           parseString(r[3]),
        fechaHecho:     parseDate(r[4]),
        fechaIngreso:   parseDate(r[5]),
        lugarHecho:     parseString(r[6]),
        barrio:         parseString(r[7]),
        victima:        parseString(r[8]),
        causa:          parseString(r[9]),
        aparato:        parseString(r[10]),
        empresa:        parseString(r[11]),
        abonado:        parseString(r[12]),
        imei:           parseImei(r[13]),
        color:          parseString(r[14]),
        correo:         parseString(r[15]),
        clave:          parseString(r[16]),
        fiscal:         parseString(r[17]),
        depOrigen:      parseString(r[18]),
        nroCom:         parseString(r[19]),
        rpiComisaria:   parseString(r[20]),
        rpiCompleja:    parseString(r[21]),
        observaciones:  parseString(r[22]),
        estadoLegajo:   parseString(r[23]),
        elevaciones:    parseString(r[24]),
        imputados:      parseString(r[25]),
        requisa:        parseString(r[26]),
        procedimientos: parseString(r[27]),
      }))

    // Lote más pequeño para mejor rendimiento
    const LOTE = 200
    let insertados = 0
    
    // Procesamiento con transacciones por lote
    for (let i = 0; i < data.length; i += LOTE) {
      const lote = data.slice(i, i + LOTE)
      
      await prisma.$transaction(async (tx) => {
        await tx.registroTelefonia.createMany({ 
          data: lote,
          skipDuplicates: true // Ignorar duplicados si los hay
        })
      })
      
      insertados += lote.length
      
      // Pequeña pausa para no sobrecargar la base de datos
      if (i + LOTE < data.length) {
        await new Promise(resolve => setTimeout(resolve, 50))
      }
    }

    return NextResponse.json({ 
      ok: true, 
      insertados,
      total: data.length,
      message: `Se importaron ${insertados} registros exitosamente`
    })
  } catch (error) {
    console.error('Error en importación:', error)
    
    if (error instanceof Error && error.message === 'Timeout al procesar el archivo') {
      return NextResponse.json({ 
        error: 'El archivo es demasiado grande o el servidor tardó demasiado en responder. Intente con un archivo más pequeño.' 
      }, { status: 408 })
    }
    
    const { message, status } = handlePrismaError(error)
    return NextResponse.json({ error: message }, { status })
  }
}