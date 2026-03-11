/**
 * cache.ts — Sistema de caché en memoria para el cliente
 */

interface CacheEntry<T> {
  data: T;
  timestamp: number;
  ttl: number;
}

class ClientCache {
  private store = new Map<string, CacheEntry<any>>();

  set<T>(key: string, data: T, ttlSegundos = 30) {
    this.store.set(key, {
      data,
      timestamp: Date.now(),
      ttl: ttlSegundos * 1000,
    });
  }

  get<T>(key: string): T | null {
    const entry = this.store.get(key);
    if (!entry) return null;
    if (Date.now() - entry.timestamp > entry.ttl) {
      this.store.delete(key);
      return null;
    }
    return entry.data as T;
  }

  invalidar(key: string) {
    this.store.delete(key);
  }

  invalidarPrefijo(prefijo: string) {
    for (const key of this.store.keys()) {
      if (key.startsWith(prefijo)) {
        this.store.delete(key);
      }
    }
  }

  limpiar() {
    this.store.clear();
  }
}

export const cache = new ClientCache();

export const TTL = {
  USUARIOS: 600,        // 10 minutos
  FISCALES: 600,        // 10 minutos
  CONFIGURACION: 600,   // 10 minutos
  LEGAJOS: 60,          // 1 minuto
  OFICIOS: 60,          // 1 minuto
  ESTADISTICAS: 120,    // 2 minutos
  NOVEDADES: 60,        // 1 minuto
  ARCHIVOS: 120,        // 2 minutos
  COMENTARIOS: 60,      // 1 minuto
};

export async function fetchConCache<T>(
  url: string,
  ttlSegundos: number,
  opciones?: RequestInit
): Promise<T> {
  const metodo = opciones?.method?.toUpperCase() ?? 'GET';
  if (metodo !== 'GET') {
    const res = await fetch(url, opciones);
    if (!res.ok) throw new Error(`Error ${res.status}`);
    return res.json();
  }

  const cached = cache.get<T>(url);
  if (cached !== null) return cached;

  const res = await fetch(url, opciones);
  if (!res.ok) throw new Error(`Error ${res.status}`);
  const data: T = await res.json();

  cache.set(url, data, ttlSegundos);
  return data;
}