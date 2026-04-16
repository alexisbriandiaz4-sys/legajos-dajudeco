import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { getUsuario } from '@/lib/server-auth'

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const usuario = await getUsuario()
    if (!usuario) return NextResponse.json({ error: 'No autenticado' }, { status: 401 })

    const legajoId = params.id

    // Marcar como leídas todas las notificaciones de este legajo para este usuario
    await prisma.notificacion.updateMany({
      where: {
        usuarioId: usuario.id,
        legajoId: legajoId,
        leida: false
      },
      data: { leida: true }
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Error al marcar notificaciones' }, { status: 500 })
  }
}
