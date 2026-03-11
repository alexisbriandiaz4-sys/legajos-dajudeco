import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const apiKey = req.headers.get('x-api-key');
    
    // Verificación de Autenticidad (Webhook Seguro)
    if (apiKey !== (process.env.API_SECRET || 'sap-secret-key-123')) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    if (!data.ok) {
       console.error(`[Webhook IA] Análisis falló para legajo ${data.legajoId}: ${data.error}`);
       return NextResponse.json({ ok: true });
    }

    // 1. Actualizar reporte textual del archivo (IA Summary)
    await prisma.archivoLegajo.update({
      where: { id: data.archivoId },
      data: { analisis: data.informe }
    });

    // 2. Inyectar Entidades Extractadas (Motor de Grafo - NPL)
    if (data.grafos && Array.isArray(data.grafos)) {
      // Filtrar nodos corruptos (alucinaciones de IA)
      const nodosValidos = data.grafos.filter((c: any) => c.entidad1 && c.entidad2 && c.relacion && c.tipoEntidad1);
      
      const conexiones = nodosValidos.map((c: any) => ({
        legajoId: data.legajoId,
        entidad1: String(c.entidad1).toUpperCase().trim(),
        tipoEntidad1: String(c.tipoEntidad1).toUpperCase().trim(),
        relacion: String(c.relacion).toUpperCase().trim(),
        entidad2: String(c.entidad2).toUpperCase().trim(),
        tipoEntidad2: String(c.tipoEntidad2 || 'DESCONOCIDO').toUpperCase().trim(),
        confianza: typeof c.confianza === 'number' ? c.confianza : 100,
        evidenciaId: data.archivoId
      }));

      // Inyección Masiva (High Performance)
      if (conexiones.length > 0) {
        await prisma.redConexiones.createMany({
          data: conexiones,
          skipDuplicates: true
        });
        console.log(`[Webhook IA] Se inyectaron ${conexiones.length} nuevos vectores de relación forense en el Legajo ${data.legajoId}`);
      }
    }

    return NextResponse.json({ ok: true, msg: 'Vector processing and Summary successful' });

  } catch (error) {
    console.error("WEBHOOK ERROR:", error);
    return NextResponse.json({ error: 'Internal server error processing Intelligence Data' }, { status: 500 });
  }
}
