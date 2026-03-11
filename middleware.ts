import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Solo aplicamos protección CSRF a las rutas de la API que mutan el estado
  if (request.nextUrl.pathname.startsWith('/api/')) {
    const method = request.method.toUpperCase();

    // Las peticiones GET/HEAD no modifican estado, las dejamos pasar sin restricción
    // (A menos que queramos evitar que otros dominios hagan fetch a nuestra API abierta)
    if (['GET', 'HEAD', 'OPTIONS'].includes(method)) {
      return NextResponse.next();
    }

    // --- Protección CSRF para mutaciones (POST, PUT, PATCH, DELETE) --- //
    
    // 1. Verificación de Origin / Referer estricta (Paso 1 del Defense in Depth de OWASP)
    // El Origen permitido debería ser nuestra propia URL (Next.js automáticamente lo conoce por la petición)
    const origin = request.headers.get('origin');
    const referer = request.headers.get('referer');
    const host = request.headers.get('host');
    
    const url = new URL(request.url);
    const expectedOrigin = `${url.protocol}//${host}`;

    // Si no hay Origin ni Referer en una mutación API desde el browser, es sospechoso.
    // Si están, deben coincidir estrictamente con nuestro dominio.
    if (origin) {
      if (origin !== expectedOrigin) {
        console.warn(`[CSRF Warning] Origin no coincide: ${origin} vs ${expectedOrigin}`);
        return new NextResponse(JSON.stringify({ error: 'Forbidden. CSRF Origin mismatch.' }), { status: 403, headers: { 'Content-Type': 'application/json' } });
      }
    } else if (referer) {
      // Extraemos el origin del referer
      try {
        const refererOrigin = new URL(referer).origin;
        if (refererOrigin !== expectedOrigin) {
          console.warn(`[CSRF Warning] Referer no coincide: ${refererOrigin} vs ${expectedOrigin}`);
          return new NextResponse(JSON.stringify({ error: 'Forbidden. CSRF Referer mismatch.' }), { status: 403, headers: { 'Content-Type': 'application/json' } });
        }
      } catch (e) {
        return new NextResponse(JSON.stringify({ error: 'Forbidden. Invalid Referer.' }), { status: 403, headers: { 'Content-Type': 'application/json' } });
      }
    } else {
       // Si estamos en un modo muy estricto, podríamos bloquear peticiones sin origin ni referer.
       // Lo dejamos pasar asumiendo que es fetch programático del mismo server, 
       // o scripts donde Next.js omita el origin, pero confiaremos en el token a continuación.
    }

    // 2. Double Submit Cookie / Custom Header Rule (Paso 2 de OWASP)
    // Cuando el frontend hace requests de tipo fetch() (que son XMLHttpRequest/fetch a través de JS),
    // requerimos un Header personalizado (`X-Requested-With`). Un ataque CSRF montado en un formulario 
    // estándar o una imagen no puede agregar headers personalizados.
    const customXhrHeader = request.headers.get('X-Requested-With');
    const contentType = request.headers.get('Content-Type') || '';
    
    // Si el contenido no es multipart/form-data (subida de archivos), exigimos JSON estándar o XHR
    if (!customXhrHeader && !contentType.includes('application/json') && !contentType.includes('multipart/form-data')) {
         return new NextResponse(JSON.stringify({ error: 'Forbidden. Custom Request Headers required to prevent CSRF.' }), { status: 403, headers: { 'Content-Type': 'application/json' } });
    }
  }

  // Dejamos seguir la request si pasa las verificaciones
  return NextResponse.next();
}

export const config = {
  // Ejecutar el middleware en todas las rutas bajo /api/ 
  // Omitimos rutas públicas o estáticas de assets.
  matcher: ['/api/:path*'],
};
