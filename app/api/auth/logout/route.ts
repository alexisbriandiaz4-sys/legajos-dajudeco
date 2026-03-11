import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { getUsuario } from '@/lib/server-auth'
import { prisma } from '@/lib/db'
import { logger } from '@/lib/logger'

export async function POST() {
  try {
    const usuario = await getUsuario()
    const cookieStore = await cookies()
    const refreshToken = cookieStore.get('refresh')?.value

    if (usuario) {
      logger.audit('LOGOUT', usuario.id, 'auth', { usuario: usuario.usuario })
    }
    
    if (refreshToken) {
      await prisma.session.deleteMany({
        where: { sessionToken: refreshToken }
      })
    }
  } catch {}

  const res = NextResponse.json({ ok: true })
  res.cookies.set('auth', '', {
    httpOnly: true,
    maxAge: 0,
    path: '/',
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production',
  })
  res.cookies.set('refresh', '', {
    httpOnly: true,
    maxAge: 0,
    path: '/api/auth/refresh',
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production',
  })
  return res
}