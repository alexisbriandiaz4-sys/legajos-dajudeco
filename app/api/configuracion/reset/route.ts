import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getUsuario } from "@/lib/server-auth";

export async function DELETE(req: NextRequest) {
  try {
    const usuario = await getUsuario();
    if (!usuario || usuario.rol !== "admin") {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    // Usar transaction para asegurar consistencia
    // Dejamos el usuario admin intacto para no destruir la sesión.
    await prisma.$transaction([
      prisma.respuesta.deleteMany({}),
      prisma.oficio.deleteMany({}),
      prisma.victima.deleteMany({}),
      prisma.dispositivo.deleteMany({}),
      prisma.archivoLegajo.deleteMany({}),
      prisma.comentarioLegajo.deleteMany({}),
      prisma.redConexiones.deleteMany({}),
      prisma.legajo.deleteMany({}),
      prisma.fiscal.deleteMany({}),
      prisma.registroTelefonia.deleteMany({}),
      prisma.registroEstafa.deleteMany({}),
      prisma.auditLog.deleteMany({}),
      prisma.session.deleteMany({}),
      prisma.usuario.deleteMany({
        where: {
          id: { not: usuario.id }
        }
      })
    ]);

    // Registrar en AuditLog que el admin hizo un Factory Reset
    await prisma.auditLog.create({
      data: {
        nivel: "CRITICAL",
        accion: "FACTORY_RESET",
        usuarioId: usuario.id,
        detalles: JSON.stringify({ ip: req.headers.get("x-forwarded-for") || "unknown", resetType: "FULL" })
      }
    });

    return NextResponse.json({ success: true, message: "Sistema formateado correctamente" });
  } catch (error) {
    console.error("Error en factory reset:", error);
    return NextResponse.json({ error: "Error interno al formatear el sistema" }, { status: 500 });
  }
}
