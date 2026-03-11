import { NextResponse } from 'next/server'
import { getUsuario } from '@/lib/server-auth'
import { logger } from '@/lib/logger'

export async function POST() {
  try {
    // Registrar el logout antes de limpiar la cookie
    const usuario = await getUsuario()
    if (usuario) {
      logger.audit('LOGOUT', usuario.id, 'auth', { usuario: usuario.usuario })
    }
  } catch {}

  const res = NextResponse.json({ ok: true })
  res.cookies.set('auth', '', {
    httpOnly: true,
    maxAge: 0,
    path: '/',
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
  })
  return res
}