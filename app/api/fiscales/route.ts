import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { getUsuarioId } from '@/lib/server-auth'

export async function GET() {
  try {
    const usuarioId = await getUsuarioId()
    if (!usuarioId) return NextResponse.json({ error: 'No autenticado' }, { status: 401 })
    const fiscales = await prisma.fiscal.findMany({
      where: { usuarioId },
      orderBy: { nombre: 'asc' }
    })
    return NextResponse.json(fiscales)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Error al obtener fiscales' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const usuarioId = await getUsuarioId()
    if (!usuarioId) return NextResponse.json({ error: 'No autenticado' }, { status: 401 })
    const body = await request.json()
    const fiscal = await prisma.fiscal.create({
      data: {
        nombre: body.nombre,
        cargo: body.cargo ?? null,
        fiscalia: body.fiscalia ?? null,
        secretario: body.secretario ?? null,
        dniSecretario: body.dniSecretario ?? null,
        dni: body.dni ?? null,
        email: body.email ?? null,
        emailSecretario: body.emailSecretario ?? null,
        direccion: body.direccion ?? null,
        telefono: body.telefono ?? null,
        telefonoMovil: body.telefonoMovil ?? null,
        usuarioId,
      }
    })
    return NextResponse.json(fiscal)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Error al crear fiscal' }, { status: 500 })
  }
}
