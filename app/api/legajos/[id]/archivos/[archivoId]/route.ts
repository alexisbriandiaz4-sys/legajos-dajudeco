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

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string; archivoId: string }> }
) {
  try {
    const { archivoId } = await params
    const usuarioId = await getUsuarioId()
    if (!usuarioId) return NextResponse.json({ error: 'No autenticado' }, { status: 401 })

    const archivo = await prisma.archivoLegajo.findUnique({ where: { id: archivoId } })
    if (!archivo) return NextResponse.json({ error: 'Archivo no encontrado' }, { status: 404 })

    // Eliminar de Cloudinary
    await cloudinary.uploader.destroy(archivo.publicId, { resource_type: 'raw' })
    await cloudinary.uploader.destroy(archivo.publicId, { resource_type: 'image' })

    // Eliminar de la base de datos
    await prisma.archivoLegajo.delete({ where: { id: archivoId } })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error(error)
    const { message, status } = handlePrismaError(error)
    return NextResponse.json({ error: message }, { status })
  }
}