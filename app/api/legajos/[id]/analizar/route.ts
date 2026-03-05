import { NextResponse } from 'next/server'
import { getUsuarioId } from '@/lib/server-auth'
import { GoogleGenerativeAI } from '@google/generative-ai'
import { prisma } from '@/lib/db'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const usuarioId = await getUsuarioId()
    if (!usuarioId) return NextResponse.json({ error: 'No autenticado' }, { status: 401 })

    const { searchParams } = new URL(request.url)
    const archivoId = searchParams.get('archivoId')
    if (!archivoId) return NextResponse.json({ error: 'Falta archivoId' }, { status: 400 })

    const archivo = await prisma.archivoLegajo.findUnique({ where: { id: archivoId } })
    if (!archivo) return NextResponse.json({ error: 'Archivo no encontrado' }, { status: 404 })

    // Si ya tiene análisis guardado, devolverlo directamente
    if (archivo.analisis) {
      return NextResponse.json({ analisis: archivo.analisis, cached: true })
    }

    return NextResponse.json({ analisis: null, cached: false })
  } catch (error: any) {
    console.error(error)
    return NextResponse.json({ error: error.message || 'Error' }, { status: 500 })
  }
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const usuarioId = await getUsuarioId()
    if (!usuarioId) return NextResponse.json({ error: 'No autenticado' }, { status: 401 })

    const { url, nombre, archivoId } = await request.json()
    if (!url) return NextResponse.json({ error: 'No hay URL de archivo' }, { status: 400 })

    // Si ya tiene análisis guardado, devolverlo sin llamar a Gemini
    if (archivoId) {
      const archivo = await prisma.archivoLegajo.findUnique({ where: { id: archivoId } })
      if (archivo?.analisis) {
        return NextResponse.json({ analisis: archivo.analisis, cached: true })
      }
    }

    // Descargar el archivo desde Cloudinary
    const response = await fetch(url)
    if (!response.ok) throw new Error(`Error descargando archivo: ${response.status}`)

    const buffer = await response.arrayBuffer()
    if (buffer.byteLength === 0) throw new Error('El archivo descargado está vacío')

    const analisis = await analizarConGemini(buffer, url)

    // Guardar el análisis en la base de datos
    if (archivoId) {
      await prisma.archivoLegajo.update({
        where: { id: archivoId },
        data: { analisis },
      })
    }

    return NextResponse.json({ analisis, cached: false })

  } catch (error: any) {
    console.error(error)
    return NextResponse.json({ error: error.message || 'Error al analizar' }, { status: 500 })
  }
}

async function analizarConGemini(buffer: ArrayBuffer, url: string): Promise<string> {
  const base64 = Buffer.from(buffer).toString('base64')
  const mimeType = url.toLowerCase().endsWith('.pdf') ? 'application/pdf' : 'application/pdf'

  const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' })

  const prompt = `Sos un asistente especializado en análisis de respuestas de oficios judiciales de Argentina, específicamente de la provincia de Santa Fe.

Analizá el documento adjunto que es una respuesta a un oficio judicial enviado a una empresa de telecomunicaciones (Claro, Movistar, Personal, etc.) o entidad similar.

Extraé y organizá TODA la información disponible en estas categorías:

## 📋 INFORMACIÓN GENERAL
- Empresa que responde
- Número de oficio / expediente
- Fecha de respuesta
- Tipo de respuesta (titularidad, tráfico, sin actividad, etc.)

## 📱 TITULARIDAD DE LÍNEA
- Número de línea/celular
- Nombre completo del titular
- DNI / CUIL / CUIT
- Domicilio completo
- Fecha de alta/activación
- Fecha de baja (si aplica)
- Estado de la línea (activa/inactiva)
- Plan / tipo de servicio

## 📱 HISTORIAL DE TITULARES (si hay más de uno)
- Titular anterior con fechas
- Titular actual con fechas

## 📲 EQUIPO / IMEI
- IMEI del equipo
- Marca y modelo (si figura)
- Fecha de asociación al número

## 📞 TRÁFICO DE LLAMADAS (si hay datos de tráfico)
- Total de llamadas entrantes
- Total de llamadas salientes
- Top 5 contactos más frecuentes (número y cantidad de contactos)
- Llamada más larga (duración y con quién)
- Período de fechas del tráfico

## 💬 MENSAJES SMS (si hay datos)
- Total de SMS enviados
- Total de SMS recibidos
- Contactos más frecuentes por SMS

## 🌐 DATOS / INTERNET (si hay datos)
- Consumo total
- Períodos

## ⚠️ OBSERVACIONES IMPORTANTES
- Cualquier dato relevante que no entre en las categorías anteriores
- Si la respuesta indica que no hay actividad, explicalo claramente

Si alguna categoría no tiene datos disponibles en el documento, indicá "Sin datos disponibles" en esa sección.
Respondé siempre en español. Sé preciso y no inventes datos que no estén en el documento.`

  const result = await model.generateContent([
    {
      inlineData: {
        mimeType,
        data: base64,
      }
    },
    { text: prompt }
  ])

  return result.response.text()
}