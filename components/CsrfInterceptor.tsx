"use client";
import React, { useEffect } from "react";

/**
 * Este componente intercepta globalmente Window.fetch en el cliente.
 * 
 * Agrega automáticamente cabeceras necesarias para la mitigación CSRF
 * (HIGH-001) a todas las peticiones fetch de la aplicación sin tener
 * que modificar individualmente cada llamada a la API existente.
 * 
 * El middleware.ts espera 'X-Requested-With': 'XMLHttpRequest' para 
 * validar que la mutación proviene legítimamente de nuestro frontend JS.
 */
export function CsrfInterceptor({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const originalFetch = window.fetch;

    window.fetch = async (...args) => {
      let [resource, config] = args;
      
      const isApiMutation = 
        typeof resource === 'string' && 
        resource.startsWith('/api/') && 
        config?.method && 
        ['POST', 'PUT', 'PATCH', 'DELETE'].includes(config.method.toUpperCase());

      if (isApiMutation) {
        config = config || {};
        config.headers = {
          ...config.headers,
          // Header Anti-CSRF requerido por el middleware
          'X-Requested-With': 'XMLHttpRequest'
        };
      }

      return originalFetch(resource, config);
    };

    // Restaurar fetch original al desmontar (aunque este componente vive a nivel App)
    return () => {
      window.fetch = originalFetch;
    };
  }, []);

  return <>{children}</>;
}
