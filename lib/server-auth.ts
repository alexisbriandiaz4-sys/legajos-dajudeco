import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'

const SECRET = process.env.JWT_SECRET!

export async function getUsuarioId(): Promise<string | null> {
  const cookieStore = await cookies()
  const token = cookieStore.get('auth')?.value
  if (!token) return null
  try {
    const payload = jwt.verify(token, SECRET) as any
    return payload.id
  } catch {
    return null
  }
}

export async function getUsuario(): Promise<{ id: string; usuario: string; rol: string; nombre: string } | null> {
  const cookieStore = await cookies()
  const token = cookieStore.get('auth')?.value
  if (!token) return null
  try {
    const payload = jwt.verify(token, SECRET) as any
    return { id: payload.id, usuario: payload.usuario, rol: payload.rol, nombre: payload.nombre }
  } catch {
    return null
  }
}