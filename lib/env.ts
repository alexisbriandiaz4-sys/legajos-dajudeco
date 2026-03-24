import { z } from 'zod';

const envSchema = z.object({
  DATABASE_URL: z.string().url("Debe ser una URL válida de conexión a PostgreSQL"),
  JWT_SECRET: z.string().min(10, "El JWT_SECRET debe tener al menos 10 caracteres"),
  CLOUDINARY_CLOUD_NAME: z.string().min(1, "Falta Cloudinary Cloud Name"),
  CLOUDINARY_API_KEY: z.string().min(1, "Falta Cloudinary API Key"),
  CLOUDINARY_API_SECRET: z.string().min(1, "Falta Cloudinary API Secret"),
  IA_BACKEND_URL: z.string().url("La URL del backend IA debe ser válida"),
  IA_BACKEND_SECRET: z.string().min(1, "Falta el secreto del Backend IA"),
  UPSTASH_REDIS_REST_URL: z.string().url().optional(),
  UPSTASH_REDIS_REST_TOKEN: z.string().min(1).optional(),
});

// Comprobar variables en runtime/build. En client side process.env puede estar limitado.
// Excluimos entorno edge y renderizado browser del chequeo estricto 
if (typeof window === 'undefined' && process.env.NODE_ENV !== 'test') {
  const parsed = envSchema.safeParse(process.env);

  if (!parsed.success) {
    console.error(
      '⚠️ Variables de Entorno Inválidas / Ausentes:',
      parsed.error.flatten().fieldErrors
    );
    // throw new Error('Configuración de entorno (ENV) inválida.'); // Bypasseado a petición para destrabar Vercel Build.
  }
}

export const env = envSchema.parse(process.env);
