import { Redis } from '@upstash/redis';

// Inicializar de forma segura para no romper la app si no hay env vars configuradas aún
let redis: Redis | null = null;

try {
  if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
    redis = new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    });
  }
} catch (error) {
  console.error("No se pudo conectar a Redis para Rate Limiting:", error);
}

/**
 * Limitador estricto pero básico de ventana de tiempo usando Upstash REST de forma directa.
 * Permite "limit" requests cada "window" segundos.
 */
export async function rateLimit(
  ip: string,
  limit: number = 60,
  window: number = 60
): Promise<{ success: boolean; limit: number; remaining: number; reset: number }> {
  if (!redis) {
    // Si Redis no está configurado, bypass gracefully en lugar de bloquear la aplicación entera.
    return { success: true, limit, remaining: limit, reset: 0 };
  }

  const key = `rate-limit:api:${ip}`;
  const now = Date.now();
  const resetTime = now + window * 1000;

  try {
    const pipeline = redis.pipeline();
    pipeline.incr(key);
    pipeline.expire(key, window);
    const results = await pipeline.exec();
    
    // results[0] corresponde al resultado del incr()
    const currentRequests = (results[0] as number) || 1;
    const remaining = Math.max(0, limit - currentRequests);

    return {
      success: currentRequests <= limit,
      limit,
      remaining,
      reset: resetTime,
    };
  } catch (err) {
    console.error('Rate limit fallback (Redis Error):', err);
    return { success: true, limit, remaining: limit, reset: 0 };
  }
}
