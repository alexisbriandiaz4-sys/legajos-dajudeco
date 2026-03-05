import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  let config = await prisma.configuracion.findUnique({ where: { id: "global" } });
  if (!config) {
    config = await prisma.configuracion.create({ data: { id: "global", emailRespuesta: "" } });
  }
  return NextResponse.json(config);
}

export async function PUT(req: Request) {
  const body = await req.json();
  const config = await prisma.configuracion.upsert({
    where: { id: "global" },
    update: { emailRespuesta: body.emailRespuesta },
    create: { id: "global", emailRespuesta: body.emailRespuesta },
  });
  return NextResponse.json(config);
}
