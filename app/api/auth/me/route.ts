import { NextResponse } from 'next/server'
import { getUsuario } from '@/lib/server-auth'

export async function GET() {
  try {
    const usuario = await getUsuario()
    if (!usuario) return NextResponse.json({ error: 'No autenticado' }, { status: 401 })
    return NextResponse.json(usuario)
  } catch {
    return NextResponse.json({ error: 'Token inválido' }, { status: 401 })
  }
}