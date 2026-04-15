import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'

function getSecret(): string {
  const secret = process.env.JWT_SECRET || "fallback_super_secreto_temporal_123"
  if (!secret || secret.length < 32) {
    throw new Error('JWT_SECRET no está definido o es demasiado corto (mínimo 32 caracteres)')
  }
  return secret
}

export async function getUsuarioId(): Promise<string | null> {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('auth')?.value
    if (!token) return null
    const payload = jwt.verify(token, getSecret()) as any
    return payload.id ?? null
  } catch {
    return null
  }
}

export async function getUsuario(): Promise<{ id: string; usuario: string; rol: 'admin' | 'investigador'; nombre: string } | null> {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('auth')?.value
    if (!token) return null
    const payload = jwt.verify(token, getSecret()) as any
    return { id: payload.id, usuario: payload.usuario, rol: payload.rol, nombre: payload.nombre }
  } catch {
    return null
  }
}
