import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getUsuarioId } from "@/lib/server-auth";

export async function GET() {
  let config = await prisma.configuracion.findUnique({ where: { id: "global" } });
  if (!config) {
    config = await prisma.configuracion.create({
      data: {
        id: "global",
        emailRespuesta: "",
        diasAlertaMedia: 2,
        diasAlertaAlta: 3,
        diasAlertaCritica: 7,
      }
    });
  }
  return NextResponse.json(config);
}

export async function PUT(req: Request) {
  const usuarioId = await getUsuarioId();
  if (!usuarioId) return NextResponse.json({ error: "No autenticado" }, { status: 401 });

  const body = await req.json();
  const config = await prisma.configuracion.upsert({
    where: { id: "global" },
    update: {
      emailRespuesta: body.emailRespuesta ?? undefined,
      diasAlertaMedia: body.diasAlertaMedia ?? undefined,
      diasAlertaAlta: body.diasAlertaAlta ?? undefined,
      diasAlertaCritica: body.diasAlertaCritica ?? undefined,
    },
    create: {
      id: "global",
      emailRespuesta: body.emailRespuesta ?? "",
      diasAlertaMedia: body.diasAlertaMedia ?? 2,
      diasAlertaAlta: body.diasAlertaAlta ?? 3,
      diasAlertaCritica: body.diasAlertaCritica ?? 7,
    },
  });
  return NextResponse.json(config);
}