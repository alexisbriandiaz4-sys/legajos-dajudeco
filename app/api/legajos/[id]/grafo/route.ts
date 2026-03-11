import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { getUsuario } from '@/lib/server-auth';

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const usuario = await getUsuario();
    if (!usuario) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    const { id } = await params;

    // Buscar todas las conexiones guardadas para este legajo
    const relaciones = await prisma.redConexiones.findMany({
      where: { legajoId: id },
      orderBy: { createdAt: 'desc' }
    });

    // Formatear Graph Data structure (Nodos Únicos + Enlaces)
    const nodosMap = new Map();
    const enlaces: any[] = [];

    relaciones.forEach((rel: any) => {
      if (!nodosMap.has(rel.entidad1)) {
        nodosMap.set(rel.entidad1, { id: rel.entidad1, tipo: rel.tipoEntidad1, label: rel.entidad1 });
      }
      if (!nodosMap.has(rel.entidad2)) {
        nodosMap.set(rel.entidad2, { id: rel.entidad2, tipo: rel.tipoEntidad2, label: rel.entidad2 });
      }

      enlaces.push({
        source: rel.entidad1,
        target: rel.entidad2,
        label: rel.relacion,
        confianza: rel.confianza
      });
    });

    const grafo = {
      nodes: Array.from(nodosMap.values()),
      links: enlaces
    };

    return NextResponse.json(grafo);

  } catch (error) {
    console.error("Error obteniendo grafo:", error);
    return NextResponse.json({ error: 'Error del servidor' }, { status: 500 });
  }
}
