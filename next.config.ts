import type { NextConfig } from "next";

// Validar Entorno en tiempo de build o arranque
import "./lib/env";

const nextConfig: NextConfig = {
  reactCompiler: true,

  // SEC-005: HTTPS enforcement y headers de seguridad
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Content Security Policy (HIGH-005)
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' blob: data:; font-src 'self' data:; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests;"
          },
          // Fuerza HTTPS por 1 año, incluye subdominios
          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },
          // Evita que el browser interprete tipos MIME incorrectamente
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // Evita clickjacking
          { key: 'X-Frame-Options', value: 'DENY' },
          // Controla la información de referrer
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          // Deshabilita features del browser que no necesitamos
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ]
  },
};

export default nextConfig;