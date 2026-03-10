/**
 * cache.ts — Sistema de caché en memoria para el cliente
 *
 * Evita re-fetches innecesarios guardando respuestas por un tiempo configurable.
 * Se invalida automáticamente cuando se hace una mutación (POST/PUT/DELETE).
 */

interface CacheEntry<T> {
  data: T;
  timestamp: number;
  ttl: number; // milisegundos
}

class ClientCache {
  private store = new Map<string, CacheEntry<any>>();

  /** Guarda un valor en caché con un TTL en segundos */
  set<T>(key: string, data: T, ttlSegundos = 30) {
    this.store.set(key, {
      data,
      timestamp: Date.now(),
      ttl: ttlSegundos * 1000,
    });
  }

  /** Obtiene un valor si existe y no expiró */
  get<T>(key: string): T | null {
    const entry = this.store.get(key);
    if (!entry) return null;
    if (Date.now() - entry.timestamp > entry.ttl) {
      this.store.delete(key);
      return null;
    }
    return entry.data as T;
  }

  /** Invalida una clave específica */
  invalidar(key: string) {
    this.store.delete(key);
  }

  /** Invalida todas las claves que empiecen con un prefijo */
  invalidarPrefijo(prefijo: string) {
    for (const key of this.store.keys()) {
      if (key.startsWith(prefijo)) {
        this.store.delete(key);
      }
    }
  }

  /** Limpia todo el caché */
  limpiar() {
    this.store.clear();
  }
}

// Instancia global (singleton)
export const cache = new ClientCache();

// TTLs por tipo de recurso (en segundos)
export const TTL = {
  USUARIOS: 300,        // 5 minutos — cambia poco
  FISCALES: 300,        // 5 minutos
  CONFIGURACION: 300,   // 5 minutos
  LEGAJOS: 30,          // 30 segundos
  OFICIOS: 30,          // 30 segundos
  ESTADISTICAS: 60,     // 1 minuto
  NOVEDADES: 60,        // 1 minuto
  ARCHIVOS: 60,         // 1 minuto
  COMENTARIOS: 30,      // 30 segundos
};

/**
 * fetchConCache — wrapper de fetch que usa caché automáticamente.
 * Solo para GET. Las mutaciones (POST/PUT/DELETE) siempre van directo.
 */
export async function fetchConCache<T>(
  url: string,
  ttlSegundos: number,
  opciones?: RequestInit
): Promise<T> {
  // Solo cachear GETs
  const metodo = opciones?.method?.toUpperCase() ?? 'GET';
  if (metodo !== 'GET') {
    const res = await fetch(url, opciones);
    if (!res.ok) throw new Error(`Error ${res.status}`);
    return res.json();
  }

  // Intentar desde caché
  const cached = cache.get<T>(url);
  if (cached !== null) return cached;

  // Fetch real
  const res = await fetch(url, opciones);
  if (!res.ok) throw new Error(`Error ${res.status}`);
  const data: T = await res.json();

  // Guardar en caché
  cache.set(url, data, ttlSegundos);
  return data;
}