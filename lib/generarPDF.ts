import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

interface Victima { nombre: string; dni?: string; telefono?: string; email?: string; }
interface Dispositivo { tipo: string; marca?: string; modelo?: string; imei?: string; color?: string; }
interface Legajo {
  numero: string; caratula: string; cuij?: string; delito: string;
  fechaHecho: string; fiscal?: string; emailRespuesta?: string;
  victimas: Victima[];
  dispositivos: Dispositivo[];
}
interface Oficio {
  id: string; operadora: string; tipo: string; urgencia: string;
  numero?: string; observaciones?: string; fechaEnvio?: string;
  columnas?: string;
  legajo: Legajo;
}

function fmt(d: string | Date) {
  return new Date(d).toLocaleDateString("es-AR", { day: "2-digit", month: "2-digit", year: "numeric" });
}

function extraerNombre(fiscal?: string) {
  if (!fiscal) return "";
  return fiscal.split("—")[0].trim();
}

function extraerFiscalia(fiscal?: string) {
  if (!fiscal) return "";
  const partes = fiscal.split("—");
  return partes.length > 1 ? partes[1].trim().toUpperCase() : fiscal.toUpperCase();
}

export async function generarPDFOficio(oficio: Oficio) {
  const res = await fetch("/plantilla-dajudeco.pdf");
  const plantillaBytes = await res.arrayBuffer();
  const pdfDoc = await PDFDocument.load(plantillaBytes);
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const blanco = rgb(1, 1, 1);
  const negro = rgb(0, 0, 0);
  const sz = 9.96;

  const pages = pdfDoc.getPages();
  const p1 = pages[0];
  const p2 = pages[1];
  const p3 = pages[2];

  const reemplazar = (
    page: typeof p1,
    valor: string,
    x: number, y: number,
    ancho: number, alto = 12,
    size = sz
  ) => {
    if (!valor) return;
    page.drawRectangle({ x, y: y - 2, width: ancho, height: alto + 2, color: blanco });
    page.drawText(valor, { x, y, size, font, color: negro });
  };

  const tapar = (
    page: typeof p1,
    x: number, y: number,
    ancho: number, alto = 12
  ) => {
    page.drawRectangle({ x, y: y - 2, width: ancho, height: alto + 2, color: blanco });
  };

  const fechaOficio = oficio.fechaEnvio ? fmt(oficio.fechaEnvio) : fmt(new Date());
  const fechaDesde  = fmt(oficio.legajo.fechaHecho);
  const tipo        = oficio.tipo.toLowerCase();
  const esFija      = tipo.includes("fija");
  const esMovil     = tipo.includes("móvil") || tipo.includes("movil");
  const esIMEI      = tipo.includes("imei");

  let columnas: string[] = [];
  try {
    if (oficio.columnas) columnas = JSON.parse(oficio.columnas);
  } catch {}

  const nombreFiscal = extraerNombre(oficio.legajo.fiscal);
  const fiscalia     = extraerFiscalia(oficio.legajo.fiscal);
  const dispositivos = oficio.legajo.dispositivos.slice(0, 5);
  const telVictima   = oficio.legajo.victimas[0]?.telefono || "";

  // ══════════ PÁGINA 1 ══════════

  // Fecha
  reemplazar(p1, fechaOficio, 469.3, 727.1, 90);

  // Fecha Desde y Fecha Hasta
  reemplazar(p1, fechaDesde,  234.0, 612.8, 66, 13);
  reemplazar(p1, fechaOficio, 345.0, 612.8, 66, 13);

  // CUIJ
  reemplazar(p1, oficio.legajo.cuij || "EN TRAMITE", 79.0, 559.5, 110, 14);

  // Nº Causa y Delito
  reemplazar(p1, oficio.legajo.numero,               120.6, 540.4, 80);
  reemplazar(p1, oficio.legajo.delito.toUpperCase(), 252.5, 540.4, 120);

  // Organismo Solicitante
  reemplazar(p1, fiscalia, 179.1, 485.9, 175, 12);

  // Email fiscal
  reemplazar(p1, oficio.legajo.emailRespuesta || "", 105.0, 466.4, 148, 12);

  // Representante — Cargo y Nombre del fiscal
  reemplazar(p1, "Fiscal",     90.0,  393.0, 55);
  reemplazar(p1, nombreFiscal, 358.0, 393.0, 175);

  // ══════════ PÁGINA 2 ══════════

  const yFija  = [711.3, 693.3, 675.5, 657.6, 639.6];
  const yMovil = [593.5, 575.6, 557.7, 539.8, 521.9];
  const yIMEI  = [538.0, 518.5, 499.0, 479.5, 460.0];

  // Telefonía FIJA
  if (esFija) {
    reemplazar(p2, telVictima || "(Cod País+Area) – Nro Local", 84.6, yFija[0], 155, 12);
    if (columnas.includes("titularidad"))           reemplazar(p2, "X", 245.0, yFija[0], 18);
    if (columnas.includes("llamadas"))              reemplazar(p2, "X", 318.0, yFija[0], 18);
    if (columnas.includes("domicilioFacturacion"))  reemplazar(p2, "X", 391.0, yFija[0], 18);
    if (columnas.includes("domicilioInstalacion"))  reemplazar(p2, "X", 464.0, yFija[0], 18);
  }

  // Telefonía MÓVIL
  if (esMovil) {
    reemplazar(p2, telVictima || "(Cod País+Area) – Nro Local", 84.6, yMovil[0], 145, 12);
    if (columnas.includes("titularidad"))  reemplazar(p2, "X", 237.0, yMovil[0], 18);
    if (columnas.includes("llamadasSMS"))  reemplazar(p2, "X", 303.0, yMovil[0], 18);
    if (columnas.includes("imeiAsociado")) reemplazar(p2, "X", 366.0, yMovil[0], 18);
    if (columnas.includes("simcard"))      reemplazar(p2, "X", 429.0, yMovil[0], 18);
    if (columnas.includes("trafico"))      reemplazar(p2, "X", 492.0, yMovil[0], 18);
  }

  // IMEI
  if (esIMEI) {
    const conIMEI = dispositivos.filter(d => d.imei);
    conIMEI.forEach((d, i) => {
      reemplazar(p2, d.imei!,  100.0, yIMEI[i], 115, 12);
      if (columnas.includes("abonados"))      reemplazar(p2, "X", 296.0, yIMEI[i], 18);
      if (columnas.includes("titularidades")) reemplazar(p2, "X", 458.0, yIMEI[i], 18);
    });
  }

  // ══════════ PÁGINA 3 ══════════

  // Observaciones
  if (oficio.observaciones) reemplazar(p3, oficio.observaciones, 217.8, 781.8, 200);

  // Urgencia
  reemplazar(p3, oficio.urgencia, 118.0, 760.4, 100);

  // Correo
  tapar(p3, 398.0, 718.0, 175, 15);
  reemplazar(p3, oficio.legajo.emailRespuesta || "", 415.0, 721.0, 155, 12);

  // Guardar y descargar
  const pdfBytes = await pdfDoc.save();
  const blob = new Blob([pdfBytes.buffer as ArrayBuffer], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `Oficio_Dajudeco_Legajo${oficio.legajo.numero}_${oficio.operadora}_${Date.now()}.pdf`;
  a.click();
  URL.revokeObjectURL(url);
}