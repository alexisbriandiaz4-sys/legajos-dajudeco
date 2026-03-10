import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { getUsuario } from '@/lib/server-auth'
import { handlePrismaError } from '@/lib/validators'

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string; comentarioId: string }> }
) {
  try {
    const { comentarioId } = await params
    const usuario = await getUsuario()
    if (!usuario) return NextResponse.json({ error: 'No autenticado' }, { status: 401 })

    const comentario = await prisma.comentarioLegajo.findUnique({ where: { id: comentarioId } })
    if (!comentario) return NextResponse.json({ error: 'Comentario no encontrado' }, { status: 404 })

    // Solo el autor o un admin puede eliminar
    if (comentario.usuarioId !== usuario.id && usuario.rol !== 'admin') {
      return NextResponse.json({ error: 'Sin permiso para eliminar este comentario' }, { status: 403 })
    }

    await prisma.comentarioLegajo.delete({ where: { id: comentarioId } })
    return NextResponse.json({ ok: true })
  } catch (error) {
    const { message, status } = handlePrismaError(error)
    return NextResponse.json({ error: message }, { status })
  }
}