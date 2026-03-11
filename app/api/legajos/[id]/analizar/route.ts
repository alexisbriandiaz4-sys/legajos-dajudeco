import { NextResponse } from 'next/server'
import { getUsuarioId } from '@/lib/server-auth'
import { prisma } from '@/lib/db'
import { logger } from '@/lib/logger'

const GROQ_API_KEY = process.env.GROQ_API_KEY!
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions'

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

    if (archivo.analisis) {
      return NextResponse.json({ analisis: archivo.analisis, cached: true })
    }

    return NextResponse.json({ analisis: null, cached: false })
  } catch (error: any) {
    logger.error('[GET /analizar]', error)
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

    // Devolver caché si ya fue analizado
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

    // Detectar tipo de archivo
    const urlLower = url.toLowerCase()
    const esImagen = urlLower.includes('.jpg') || urlLower.includes('.jpeg') ||
                     urlLower.includes('.png') || urlLower.includes('.webp') ||
                     urlLower.includes('image/')

    let analisis: string

    if (esImagen) {
      analisis = await analizarImagenConGroq(buffer, url)
    } else {
      analisis = await analizarPDFConGroq(buffer, nombre || 'documento.pdf')
    }

    // Guardar análisis en la base de datos
    if (archivoId) {
      await prisma.archivoLegajo.update({
        where: { id: archivoId },
        data: { analisis },
      })
    }

    return NextResponse.json({ analisis, cached: false })

  } catch (error: any) {
    logger.error('[POST /analizar]', error)
    return NextResponse.json({ error: error.message || 'Error al analizar' }, { status: 500 })
  }
}

// ── Prompt especializado para oficios judiciales ──
const PROMPT_ANALISIS = `Sos un asistente especializado en análisis de respuestas de oficios judiciales de Argentina, específicamente de la provincia de Santa Fe. Tu rol es extraer y organizar información de documentos respondidos por empresas de telecomunicaciones (Claro, Movistar, Personal, Telecom) u otras entidades.

Analizá el documento y extraé TODA la información disponible organizándola en estas secciones:

## 📋 INFORMACIÓN GENERAL
- Empresa que responde
- Número de oficio / expediente referenciado
- Fecha de la respuesta
- Tipo de respuesta (titularidad, tráfico, sin actividad, parcial, etc.)

## 📱 TITULARIDAD DE LÍNEA
- Número de línea/celular consultado
- Nombre completo del titular
- DNI / CUIL / CUIT del titular
- Domicilio completo registrado
- Fecha de alta / activación
- Fecha de baja (si aplica)
- Estado actual (activa / inactiva / suspendida)
- Plan / tipo de servicio / modalidad (prepago, pospago)

## 👥 HISTORIAL DE TITULARES
- Titular anterior (nombre, DNI, fechas)
- Titular actual (nombre, DNI, fechas)
- Cualquier cambio de titularidad relevante

## 📲 EQUIPO / IMEI
- IMEI del equipo (número completo)
- Marca y modelo del dispositivo
- Fecha de asociación al número
- IMEI anteriores si los hay

## 📞 TRÁFICO DE LLAMADAS
- Período que abarca el tráfico
- Total de llamadas entrantes / salientes
- Top 5 contactos más frecuentes (número y cantidad de contactos)
- Llamada más larga (duración, fecha, con quién)
- Números internacionales o sospechosos si los hay

## 💬 MENSAJES SMS
- Total de SMS enviados / recibidos
- Contactos más frecuentes por SMS
- Período del tráfico

## 🌐 DATOS / INTERNET
- Consumo total de datos
- Períodos
- Observaciones relevantes

## 🏦 DATOS FINANCIEROS / BANCARIOS (si aplica)
- CBU / CVU / alias de cuenta
- Banco o entidad
- Movimientos relevantes

## ⚠️ OBSERVACIONES IMPORTANTES
- Datos que no entren en las categorías anteriores
- Si la respuesta indica que no hay actividad o datos, explicarlo claramente
- Inconsistencias o datos llamativos para la investigación
- Plazos o fechas relevantes para el expediente

---
REGLAS IMPORTANTES:
- Respondé SIEMPRE en español argentino
- Sé preciso: no inventes datos que no estén en el documento
- Si una sección no tiene datos, escribí "Sin datos disponibles"
- Destacá con ⚠️ cualquier dato que parezca relevante para la investigación
- Formatá los números de teléfono como aparecen en el documento`

// ── Análisis de imágenes (vision) ──
async function analizarImagenConGroq(buffer: ArrayBuffer, url: string): Promise<string> {
  const base64 = Buffer.from(buffer).toString('base64')
  const urlLower = url.toLowerCase()

  let mimeType = 'image/jpeg'
  if (urlLower.includes('.png')) mimeType = 'image/png'
  else if (urlLower.includes('.webp')) mimeType = 'image/webp'

  const body = {
    model: 'meta-llama/llama-4-scout-17b-16e-instruct',
    max_tokens: 4096,
    messages: [
      {
        role: 'user',
        content: [
          {
            type: 'image_url',
            image_url: {
              url: `data:${mimeType};base64,${base64}`,
            },
          },
          {
            type: 'text',
            text: PROMPT_ANALISIS,
          },
        ],
      },
    ],
  }

  const res = await fetch(GROQ_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${GROQ_API_KEY}`,
    },
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    const err = await res.text()
    throw new Error(`Error de Groq (imagen): ${err}`)
  }

  const data = await res.json()
  return data.choices[0]?.message?.content || 'Sin respuesta del modelo'
}

// ── Análisis de PDFs (texto extraído) ──
async function analizarPDFConGroq(buffer: ArrayBuffer, nombre: string): Promise<string> {
  // Convertir PDF a texto usando extracción básica de bytes legibles
  const bytes = new Uint8Array(buffer)
  let textoExtraido = ''

  // Extracción simple de texto visible del PDF
  const decoder = new TextDecoder('latin1')
  const contenido = decoder.decode(bytes)

  // Extraer streams de texto del PDF
  const matches = contenido.matchAll(/BT[\s\S]*?ET/g)
  const fragmentos: string[] = []

  for (const match of matches) {
    const stream = match[1]
    const textos = stream.matchAll(/\((.*?)\)/g)
    for (const t of textos) {
      const fragmento = t[1]
        .replace(/\\n/g, ' ')
        .replace(/\\r/g, ' ')
        .replace(/\\t/g, ' ')
        .replace(/\\\(/g, '(')
        .replace(/\\\)/g, ')')
        .replace(/\\\\/g, '\\')
        .trim()
      if (fragmento.length > 1) fragmentos.push(fragmento)
    }
  }

  textoExtraido = fragmentos.join(' ').substring(0, 12000)

  // Si no se extrajo texto (PDF escaneado), avisar
  if (textoExtraido.trim().length < 50) {
    return `⚠️ **El PDF "${nombre}" parece ser un documento escaneado (imagen).**

No fue posible extraer texto automáticamente. 

**Recomendaciones:**
1. Convertí el PDF a imagen (JPG/PNG) y subilo para análisis con visión
2. Usá un programa de OCR para convertirlo a texto primero
3. Si tenés el documento en formato texto, subí esa versión

El análisis automático funciona con:
- ✅ PDFs con texto seleccionable (generados por Word, sistema de la empresa)
- ✅ Imágenes JPG / PNG / WEBP
- ❌ PDFs escaneados sin capa de texto`
  }

  const body = {
    model: 'llama-3.3-70b-versatile',
    max_tokens: 4096,
    temperature: 0.1,
    messages: [
      {
        role: 'system',
        content: 'Sos un asistente especializado en análisis de documentos judiciales argentinos. Extraés información estructurada de respuestas de empresas de telecomunicaciones a oficios judiciales.',
      },
      {
        role: 'user',
        content: `${PROMPT_ANALISIS}

---
DOCUMENTO A ANALIZAR (extraído de "${nombre}"):

${textoExtraido}`,
      },
    ],
  }

  const res = await fetch(GROQ_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${GROQ_API_KEY}`,
    },
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    const err = await res.text()
    throw new Error(`Error de Groq (PDF): ${err}`)
  }

  const data = await res.json()
  return data.choices[0]?.message?.content || 'Sin respuesta del modelo'
}