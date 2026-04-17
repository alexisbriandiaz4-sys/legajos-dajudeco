import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getUsuario } from "@/lib/server-auth";
import { z } from "zod";
export const dynamic = 'force-dynamic';

const ConfiguracionSchema = z.object({
  emailRespuesta:    z.string().email('Email inválido').optional().or(z.literal('')),
  diasAlertaMedia:   z.number().int().min(1).max(365).optional(),
  diasAlertaAlta:    z.number().int().min(1).max(365).optional(),
  diasAlertaCritica: z.number().int().min(1).max(365).optional(),
})

export async function GET() {
  const usuario = await getUsuario();
  if (!usuario) return NextResponse.json({ error: "No autenticado" }, { status: 401 });
  if (usuario.rol !== 'admin') return NextResponse.json({ error: "Sin permisos" }, { status: 403 });

  let config = await prisma.configuracion.findUnique({ where: { id: "global" } });
  if (!config) {
    config = await prisma.configuracion.create({
      data: { id: "global", emailRespuesta: "", diasAlertaMedia: 2, diasAlertaAlta: 3, diasAlertaCritica: 7 }
    });
  }
  return NextResponse.json(config);
}

export async function PUT(req: Request) {
  const usuario = await getUsuario();
  if (!usuario) return NextResponse.json({ error: "No autenticado" }, { status: 401 });
  if (usuario.rol !== 'admin') return NextResponse.json({ error: "No autorizado. Se requiere rol de administrador." }, { status: 403 });

  const body = await req.json();
  const parsed = ConfiguracionSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0].message }, { status: 400 });
  }

  const config = await prisma.configuracion.upsert({
    where: { id: "global" },
    update: parsed.data,
    create: { id: "global", emailRespuesta: "", diasAlertaMedia: 2, diasAlertaAlta: 3, diasAlertaCritica: 7, ...parsed.data },
  });
  return NextResponse.json(config);
}
