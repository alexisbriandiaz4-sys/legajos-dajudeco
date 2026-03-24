import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { getUsuario } from '@/lib/server-auth'

export async function GET() {
  try {
    const usuario = await getUsuario()
    if (!usuario) return NextResponse.json({ error: 'No autenticado' }, { status: 401 })

    // Solo tiene sentido para investigadores
    if (usuario.rol === 'admin') {
      return NextResponse.json({ total: 0 })
    }

    const total = await prisma.legajo.count({
      where: { asignadoA: usuario.id, visto: false },
    })

    return NextResponse.json({ total, telefonia: 0, estafas: 0 })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Error' }, { status: 500 })
  }
}