import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // CSRF Protection para mutaciones (POST, PUT, DELETE, PATCH)
  if (['POST', 'PUT', 'DELETE', 'PATCH'].includes(request.method)) {
    const origin = request.headers.get('origin');
    const host = request.headers.get('host');

    // Validar el Origin en peticiones de mutación si está presente
    if (origin) {
      try {
        const originUrl = new URL(origin);
        if (originUrl.host !== host) {
          console.warn(`[CSRF BLOQUEADO] Origen: ${originUrl.host} | Host Esperado: ${host}`);
          return NextResponse.json({ error: 'CSRF bloqueado. Origen no autorizado.' }, { status: 403 });
        }
      } catch (e) {
        return NextResponse.json({ error: 'Origen inválido.' }, { status: 400 });
      }
    }
  }

  // Rutas públicas que no requieren token
  if (pathname.startsWith('/login') || pathname.startsWith('/api/auth') || pathname.startsWith('/api/ia/callback')) {
    return NextResponse.next()
  }

  // Protección de autenticación
  const token = request.cookies.get('auth')?.value

  if (!token && !pathname.startsWith('/api/')) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
  
  if (!token && pathname.startsWith('/api/')) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
  }

  return NextResponse.next()
}

// NextJS a veces prefiere buscar el export 'proxy'. Lo exportamos también.
export const proxy = middleware;

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}