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

    const tiposAnalizables = ['application/pdf', 'image/jpeg', 'image/png', 'image/webp']
    const esAnalizable = tiposAnalizables.includes(file.type)

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

    return NextResponse.json(archivo)
  } catch (error) {
    console.error(error)
    const { message, status } = handlePrismaError(error)
    return NextResponse.json({ error: message }, { status })
  }
}