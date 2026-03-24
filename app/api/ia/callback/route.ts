import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { z } from 'zod';

const GrafoSchema = z.object({
  entidad1: z.string().min(1).max(255),
  tipoEntidad1: z.string().min(1).max(100),
  relacion: z.string().min(1).max(255),
  entidad2: z.string().min(1).max(255),
  tipoEntidad2: z.string().max(100).optional(),
  confianza: z.number().min(0).max(100).optional()
});

const WebhookPayloadSchema = z.object({
  ok: z.boolean(),
  error: z.string().optional(),
  legajoId: z.string().optional(),
  archivoId: z.string().optional(),
  informe: z.string().optional(),
  grafos: z.array(GrafoSchema).optional()
});

export async function POST(req: Request) {
  try {
    const rawData = await req.json();
    const apiKey = req.headers.get('x-api-key');
    
    // Verificación de Autenticidad Estricta
    if (!process.env.API_SECRET) {
      console.error("[Webhook IA] CRÍTICO: API_SECRET no configurado en entorno.");
      return NextResponse.json({ error: 'Configuración de servidor inválida' }, { status: 500 });
    }

    if (!apiKey || apiKey !== process.env.API_SECRET) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    // Validación y sanitización utilizando Zod
    const parsed = WebhookPayloadSchema.safeParse(rawData);
    if (!parsed.success) {
      console.error(`[Webhook IA] Payload inválido:`, parsed.error);
      return NextResponse.json({ error: 'Payload mal formado' }, { status: 400 });
    }

    const data = parsed.data;

    if (!data.ok) {
       console.error(`[Webhook IA] Análisis falló para legajo ${data.legajoId}: ${data.error}`);
       return NextResponse.json({ ok: true });
    }

    if (!data.archivoId) {
      console.error(`[Webhook IA] archivoId faltante en respuesta exitosa`);
      return NextResponse.json({ error: 'archivoId obligatorio' }, { status: 400 });
    }

    // 1. Actualizar reporte textual del archivo (IA Summary)
    if (data.informe) {
      await prisma.archivoLegajo.update({
        where: { id: data.archivoId },
        data: { analisis: data.informe }
      });
    }

    // 2. Inyectar Entidades Extractadas (Motor de Grafo - NPL) - Sanitizadas por Zod
    if (data.grafos && data.grafos.length > 0) {
      const conexiones = data.grafos.map((c) => ({
        legajoId: data.legajoId as string,
        entidad1: c.entidad1.toUpperCase().trim(),
        tipoEntidad1: c.tipoEntidad1.toUpperCase().trim(),
        relacion: c.relacion.toUpperCase().trim(),
        entidad2: c.entidad2.toUpperCase().trim(),
        tipoEntidad2: (c.tipoEntidad2 || 'DESCONOCIDO').toUpperCase().trim(),
        confianza: c.confianza ?? 100,
        evidenciaId: data.archivoId as string
      }));

      // Inyección Masiva (High Performance)
      await prisma.redConexiones.createMany({
        data: conexiones,
        skipDuplicates: true
      });
    }

    return NextResponse.json({ ok: true, msg: 'Vector processing and Summary successful' });

  } catch (error) {
    console.error("WEBHOOK ERROR:", error);
    return NextResponse.json({ error: 'Internal server error processing Intelligence Data' }, { status: 500 });
  }
}
