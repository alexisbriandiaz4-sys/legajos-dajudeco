import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { getUsuarioId } from '@/lib/server-auth'
import { handlePrismaError } from '@/lib/validators'
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key:    process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    const usuarioId = await getUsuarioId()
    if (!usuarioId) return NextResponse.json({ error: 'No autenticado' }, { status: 401 })

    const archivos = await prisma.archivoLegajo.findMany({
      where: { legajoId: id },
      orderBy: { createdAt: 'desc' }
    })
    return NextResponse.json(archivos)
  } catch (error) {
    const { message, status } = handlePrismaError(error)
    return NextResponse.json({ error: message }, { status })
  }
}

export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    const usuarioId = await getUsuarioId()
    if (!usuarioId) return NextResponse.json({ error: 'No autenticado' }, { status: 401 })

    const formData = await request.formData()
    const file = formData.get('file') as File
    if (!file) return NextResponse.json({ error: 'No hay archivo' }, { status: 400 })

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const result = await new Promise<any>((resolve, reject) => {
      const isPdf = file.type === 'application/pdf'
      cloudinary.uploader.upload_stream(
        {
          folder: `legajos/${id}`,
          resource_type: isPdf ? 'image' : 'auto',
          access_mode: 'public',
          public_id: `${Date.now()}_${file.name.replace(/[^a-zA-Z0-9._-]/g, '_')}`,
        },
        (error, result) => {
          if (error) reject(error)
          else resolve(result)
        }
      ).end(buffer)
    })

    const tiposAnalizables = [
      'application/pdf', 'image/jpeg', 'image/png', 'image/webp',
      'audio/mpeg', 'audio/mp3', 'audio/wav', 'audio/ogg', 'audio/x-m4a', 'audio/mp4', 'video/mp4'
    ]
    const extArchivo = file.name.split('.').pop()?.toLowerCase() ?? ''
    const esAnalizable = tiposAnalizables.includes(file.type)
      || file.type === 'application/zip'
      || file.type === 'application/x-zip-compressed'
      || file.type === 'application/x-rar-compressed'
      || file.type === 'application/vnd.rar'
      || extArchivo === 'zip'
      || extArchivo === 'rar'
      || ['mp3', 'wav', 'ogg', 'm4a', 'mp4'].includes(extArchivo)

    const archivo = await prisma.archivoLegajo.create({
      data: {
        legajoId:    id,
        nombre:      file.name,
        tipo:        file.type,
        url:         result.secure_url,
        publicId:    result.public_id,
        tamano:      file.size,
        esAnalizable,
      }
    })

    // Enviar al backend IA de forma asíncrona (no bloquea la respuesta al usuario)
    console.log('🔍 esAnalizable:', esAnalizable, '| tipo:', file.type)

    if (esAnalizable) {
      const backendUrl = process.env.IA_BACKEND_URL
      const backendSecret = process.env.IA_BACKEND_SECRET

      console.log('🔍 backendUrl:', backendUrl)
      console.log('🔍 backendSecret:', backendSecret ? 'OK' : 'FALTA')

      const host = request.headers.get('x-forwarded-host') || request.headers.get('host')
      const protocol = request.headers.get('x-forwarded-proto') || 'https'
      const dynamicWebhookUrl = host ? `${protocol}://${host}` : (process.env.SAP_WEBHOOK_URL || 'http://localhost:3000')
      
      console.log('🔗 URL detectada para el Webhook de retorno:', dynamicWebhookUrl)

      if (backendUrl && backendSecret) {
        console.log('📤 Enviando al backend IA...')
        fetch(`${backendUrl}/analizar`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': backendSecret,
          },
          body: JSON.stringify({
            url:        result.secure_url,
            tipo:       file.type,
            nombre:     file.name,
            legajoId:   id,
            archivoId:  archivo.id,
            webhookUrl: dynamicWebhookUrl
          }),
        })
        .then(async (res) => {
          console.log('📥 Respuesta backend IA:', res.status)
          if (res.ok) {
            const data = await res.json()
            console.log('✅ Informe recibido:', data.informe?.substring(0, 100))
            await prisma.archivoLegajo.update({
              where: { id: archivo.id },
              data:  { analisis: data.informe }
            })
          }
        })
        .catch((err) => console.error('❌ Error backend IA:', err))
      }
    }

    return NextResponse.json(archivo)
  } catch (error) {
    console.error(error)
    const { message, status } = handlePrismaError(error)
    return NextResponse.json({ error: message }, { status })
  }
}