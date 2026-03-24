import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { rateLimit } from '@/lib/rate-limit';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const method = request.method.toUpperCase();

  // --- 1. PROTECCIÓN CSRF PARA RUTAS DE LA API --- //
  if (pathname.startsWith('/api/')) {
    // Si la petición modifica estado (mutación)
    if (!['GET', 'HEAD', 'OPTIONS'].includes(method)) {
      const origin = request.headers.get('origin');
      const referer = request.headers.get('referer');
      const host = request.headers.get('host');
      
      const url = new URL(request.url);
      const expectedOrigin = `${url.protocol}//${host}`;

      if (origin) {
        if (origin !== expectedOrigin) {
          console.warn(`[CSRF Warning] Origin no coincide: ${origin} vs ${expectedOrigin}`);
          return new NextResponse(JSON.stringify({ error: 'Forbidden. CSRF Origin mismatch.' }), { status: 403, headers: { 'Content-Type': 'application/json' } });
        }
      } else if (referer) {
        try {
          const refererOrigin = new URL(referer).origin;
          if (refererOrigin !== expectedOrigin) {
            console.warn(`[CSRF Warning] Referer no coincide: ${refererOrigin} vs ${expectedOrigin}`);
            return new NextResponse(JSON.stringify({ error: 'Forbidden. CSRF Referer mismatch.' }), { status: 403, headers: { 'Content-Type': 'application/json' } });
          }
        } catch (e) {
          return new NextResponse(JSON.stringify({ error: 'Forbidden. Invalid Referer.' }), { status: 403, headers: { 'Content-Type': 'application/json' } });
        }
      }

      // Verificación de headers custom (X-Requested-With) vs Content-Type
      const customXhrHeader = request.headers.get('X-Requested-With');
      const contentType = request.headers.get('Content-Type') || '';
      
      if (!customXhrHeader && !contentType.includes('application/json') && !contentType.includes('multipart/form-data')) {
           return new NextResponse(JSON.stringify({ error: 'Forbidden. Custom Request Headers required to prevent CSRF.' }), { status: 403, headers: { 'Content-Type': 'application/json' } });
      }
    }
  }

  // --- 2. PROTECCIÓN DE AUTENTICACIÓN --- //
  
  // Rutas públicas que no requieren token
  if (pathname.startsWith('/login') || pathname.startsWith('/api/auth') || pathname.startsWith('/api/ia/callback')) {
    return NextResponse.next()
  }

  // Protección de autenticación con el token en cookies
  const token = request.cookies.get('auth')?.value

  if (!token) {
    if (pathname.startsWith('/api/')) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    } else {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  // --- 3. RATE LIMITING DISTRIBUIDO (API) --- //
  if (pathname.startsWith('/api/') && !pathname.startsWith('/api/ia/callback')) {
    const ip = request.headers.get('x-forwarded-for') || '127.0.0.1';
    const { success, limit, remaining, reset } = await rateLimit(ip, 120, 60); // 120 req / minuto
    
    if (!success) {
      return new NextResponse(JSON.stringify({ error: 'Too Many Requests' }), { 
        status: 429, 
        headers: { 
          'Content-Type': 'application/json',
          'X-RateLimit-Limit': limit.toString(),
          'X-RateLimit-Remaining': remaining.toString(),
          'X-RateLimit-Reset': reset.toString()
        } 
      });
    }
  }

  // --- Dejamos seguir al request --- //
  return NextResponse.next();
}

export const config = {
  // Ajustamos el matcher para procesar toda la app validando rutas protegidas, pero omitiendo estáticos
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
