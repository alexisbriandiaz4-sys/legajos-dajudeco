import { NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'

const SECRET = process.env.JWT_SECRET ?? 'legajos-secret-2024'

export async function GET() {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('auth')?.value
    if (!token) return NextResponse.json({ error: 'No autenticado' }, { status: 401 })
    const payload = jwt.verify(token, SECRET) as any
    return NextResponse.json({ id: payload.id, usuario: payload.usuario, rol: payload.rol, nombre: payload.nombre })
  } catch {
    return NextResponse.json({ error: 'Token inválido' }, { status: 401 })
  }
}