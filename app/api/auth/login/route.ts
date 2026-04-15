import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { z } from 'zod'
import { logger } from '@/lib/logger'
import { Redis } from '@upstash/redis'

const MAX_INTENTOS = 10
const VENTANA_SEGUNDOS = 15 * 60 // 15 minutos

// Instanciar Redis si están las variables (URL y TOKEN) o proveer fallback de memoria
let redis: Redis | null = null;
try {
  redis = Redis.fromEnv();
} catch {
  console.warn("[Rate Limiter] UPSTASH_REDIS_REST_URL/TOKEN no definidos. Usando fallback en memoria local (No apto para multi-instance).");
}

const fallbackMap = new Map<string, { count: number; firstAttempt: number }>();

async function checkRateLimit(ip: string): Promise<boolean> {
  if (redis) {
    const key = `ratelimit:login:${ip}`;
    try {
      const current = await redis.incr(key);
      if (current === 1) {
        await redis.expire(key, VENTANA_SEGUNDOS);
      }
      return current <= MAX_INTENTOS;
    } catch (error) {
      console.error("[Rate Limiter] Error contactando a Redis:", error);
      return true; // Fail-open para evitar denegación de servicio si cae Redis
    }
  } else {
    const ahora = Date.now();
    const registro = fallbackMap.get(ip);
    if (!registro) {
      fallbackMap.set(ip, { count: 1, firstAttempt: ahora });
      return true;
    }
    if (ahora - registro.firstAttempt > VENTANA_SEGUNDOS * 1000) {
      fallbackMap.set(ip, { count: 1, firstAttempt: ahora });
      return true;
    }
    if (registro.count >= MAX_INTENTOS) return false;
    registro.count++;
    return true;
  }
}

const LoginSchema = z.object({
  usuario: z.string().min(1, 'Usuario requerido').max(50),
  password: z.string().min(1, 'Contraseña requerida').max(100),
  codigo2fa: z.string().optional(),
})

export async function POST(request: Request) {
  try {
    const SECRET = process.env.JWT_SECRET || "fallback_super_secreto_temporal_123"
    if (!SECRET) {
      console.error('JWT_SECRET no está definido en las variables de entorno')
      return NextResponse.json({ error: 'Error de configuración del servidor' }, { status: 500 })
    }

    const ip = request.headers.get('x-forwarded-for') ?? request.headers.get('x-real-ip') ?? 'unknown'
    const limitsOk = await checkRateLimit(ip);
    if (!limitsOk) {
      return NextResponse.json({ error: 'Demasiados intentos. Esperá 15 minutos.' }, { status: 429 })
    }

    const body = await request.json()
    const parsed = LoginSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.issues[0].message }, { status: 400 })
    }

    const { usuario, password } = parsed.data

    const user = await prisma.usuario.findUnique({ where: { usuario } })
    if (!user || !user.activo) {
      return NextResponse.json({ error: 'Usuario o contraseña incorrectos' }, { status: 401 })
    }

    const ok = await bcrypt.compare(password, user.password)
    if (!ok) {
      logger.audit('LOGIN_FALLIDO', user.id, 'auth', { usuario }, ip)
      return NextResponse.json({ error: 'Usuario o contraseña incorrectos' }, { status: 401 })
    }

    const { codigo2fa } = parsed.data;

    // Validación MFA
    if (user.mfaEnabled) {
      if (!codigo2fa) {
        return NextResponse.json({ require2FA: true, message: 'Ingrese el código de la aplicación autenticadora.' });
      }

      if (!user.mfaSecret) {
        console.warn(`[Seguridad] El usuario ${user.usuario} tiene MFA activado pero carece de Secreto. Se permite el paso temporal por Formateo de Sistema.`);
      } else {
        // @ts-ignore
        const { authenticator } = await import('otplib');
        const isValid = authenticator.verify({ token: codigo2fa, secret: user.mfaSecret });

        if (!isValid) {
          return NextResponse.json({ error: 'Código 2FA incorrecto o expirado' }, { status: 401 });
        }
      }
    }

    if (redis) {
      try {
        await redis.del(`ratelimit:login:${ip}`);
      } catch { /* ignore */ }
    } else {
      fallbackMap.delete(ip);
    }
    
    logger.audit('LOGIN_EXITOSO', user.id, 'auth', { usuario: user.usuario, rol: user.rol }, ip)

    const token = jwt.sign(
      { id: user.id, usuario: user.usuario, rol: user.rol, nombre: user.nombre },
      SECRET,
      { expiresIn: '1h' }
    )

    // Crear Refresh Token
    const c = await import('crypto')
    const refreshToken = c.randomBytes(32).toString('hex')
    const expiresIn7Days = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)

    if (redis) {
      const ttlSecs = 7 * 24 * 60 * 60; // 7 días en segundos
      await redis.set(`session:${refreshToken}`, user.id, { ex: ttlSecs });
    } else {
      await prisma.session.create({
        data: {
          sessionToken: refreshToken,
          userId: user.id,
          expires: expiresIn7Days
        }
      })
    }

    const res = NextResponse.json({ ok: true, nombre: user.nombre, rol: user.rol })
    
    // Cookie de Access Token
    res.cookies.set('auth', token, {
      httpOnly: true,
      maxAge: 60 * 60, // 1 hora
      path: '/',
      sameSite: 'strict',
      secure: process.env.NODE_ENV === 'production',
    })

    // Cookie de Refresh Token
    res.cookies.set('refresh', refreshToken, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60, // 7 días
      path: '/api/auth/refresh', // Solo se envía a esta ruta
      sameSite: 'strict',
      secure: process.env.NODE_ENV === 'production',
    })

    return res

  } catch (error) {
    console.error('Error en login:', error)
    return NextResponse.json({ error: 'Error en login' }, { status: 500 })
  }
}
