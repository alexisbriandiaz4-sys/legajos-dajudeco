/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  ImageRun, AlignmentType, BorderStyle, WidthType, UnderlineType,
  VerticalAlign,
} from "docx";

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
  columnas?: string; tipoConsulta?: string; numeroLinea?: string;
  legajo: Legajo;
}

const OPERADORAS: Record<string, { razon: string; gerente: string }> = {
  Claro:    { razon: "ARGENTINA AMX S.A. (CLARO)",                   gerente: "SR. GERENTE REQUERIMIENTOS JUDICIALES." },
  Personal: { razon: "TELECOM PERSONAL S.A. (PERSONAL)",             gerente: "SR. GERENTE REQUERIMIENTOS JUDICIALES." },
  Movistar: { razon: "TELEFÓNICA MÓVILES ARGENTINA S.A. (MOVISTAR)", gerente: "SR. GERENTE REQUERIMIENTOS JUDICIALES." },
};

function fmtFechaLarga(d: string | Date) {
  return new Date(d).toLocaleDateString("es-AR", {
    day: "2-digit", month: "long", year: "numeric"
  }).toUpperCase();
}

function fmt(d: string | Date) {
  return new Date(d).toLocaleDateString("es-AR", { day: "2-digit", month: "2-digit", year: "numeric" });
}

function extraerNombre(fiscal?: string) {
  if (!fiscal) return "";
  return fiscal.split("—")[0].trim();
}

function primerIMEI(dispositivos: Dispositivo[]) {
  return dispositivos.find(d => d.imei)?.imei || "";
}

function txt(text: string, opts: Record<string, any> = {}) {
  return new TextRun({ text, font: "Calibri Light", size: 24, color: "000000", ...opts });
}

function p(children: TextRun[], opts: Record<string, any> = {}) {
  return new Paragraph({
    children,
    spacing: { after: 0, before: 0, line: 276 },
    alignment: AlignmentType.JUSTIFIED,
    ...opts,
  } as any);
}

function vacio() {
  return p([txt("")]);
}

async function generarDocumento(oficio: Oficio, operadora: string, emailRespuesta: string): Promise<Blob> {
  const res = await fetch("/logo-mpa.png");
  const logoBuffer = await res.arrayBuffer();

  const op = OPERADORAS[operadora] || OPERADORAS["Claro"];
  const nombreFiscal = extraerNombre(oficio.legajo.fiscal);
  const fechaOficio = oficio.fechaEnvio ? fmtFechaLarga(oficio.fechaEnvio) : fmtFechaLarga(new Date());
  const fechaDesde = fmt(oficio.legajo.fechaHecho);
  const fechaHasta = oficio.fechaEnvio ? fmt(oficio.fechaEnvio) : fmt(new Date());
  const imei = primerIMEI(oficio.legajo.dispositivos);

  // Determinar tipo de consulta — aseguramos que venga bien aunque sea undefined
  const esLinea = (oficio.tipoConsulta ?? "imei") === "linea";
  const numLinea = oficio.numeroLinea ?? "";

  const noBorder = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" };
  const noBorders = { top: noBorder, bottom: noBorder, left: noBorder, right: noBorder };

  const doc = new Document({
    sections: [{
      properties: {
        page: {
          size: { width: 11906, height: 16838 },
          margin: { top: 1134, right: 1134, bottom: 1134, left: 1134 },
        }
      } as any,
      children: [

        // ── Encabezado ──
        new Table({
          width: { size: 9638, type: WidthType.DXA },
          columnWidths: [1800, 7838],
          borders: { top: noBorder, bottom: noBorder, left: noBorder, right: noBorder, insideH: noBorder, insideV: noBorder } as any,
          rows: [
            new TableRow({
              children: [
                new TableCell({
                  borders: noBorders,
                  width: { size: 1800, type: WidthType.DXA },
                  verticalAlign: VerticalAlign.CENTER,
                  children: [
                    new Paragraph({
                      alignment: AlignmentType.LEFT,
                      spacing: { after: 0, before: 0, line: 276 },
                      children: [
                        new ImageRun({
                          data: logoBuffer,
                          transformation: { width: 75, height: 100 },
                          type: "png",
                        } as any)
                      ]
                    })
                  ]
                }),
                new TableCell({
                  borders: noBorders,
                  width: { size: 7838, type: WidthType.DXA },
                  verticalAlign: VerticalAlign.CENTER,
                  children: [
                    new Paragraph({
                      alignment: AlignmentType.RIGHT,
                      spacing: { after: 0, before: 0, line: 276 },
                      children: [txt("UNIDAD FISCAL N° 505 RAFAELA", { bold: true, size: 26 })]
                    }),
                    new Paragraph({
                      alignment: AlignmentType.RIGHT,
                      spacing: { after: 0, before: 0, line: 276 },
                      children: [txt("Necochea 443, Rafaela. Tel. (03492) 453563/4/6/8")]
                    }),
                  ]
                }),
              ]
            })
          ]
        }),

        vacio(), vacio(),

        p([txt(`RAFAELA, ${fechaOficio}.`, { bold: true, underline: { type: UnderlineType.SINGLE } })], {
          alignment: AlignmentType.RIGHT,
        }),

        vacio(),

        p([txt(op.gerente, { bold: true })]),
        p([txt(op.razon, { bold: true })]),
        p([txt("S----------------------/-------------------------D.")]),

        vacio(),

        p([
          txt("\t\t\t\t"),
          txt("Quien suscribe, Dr. "),
          txt(nombreFiscal),
          txt(", Fiscal de Unidad Fiscal de la 5° Circunscripción, en el marco del legajo de investigación \""),
          txt(oficio.legajo.caratula, { bold: true }),
          txt("\" comunicado mediante "),
          txt(`N° interno ${oficio.legajo.numero}`, { underline: { type: UnderlineType.SINGLE } }),
          txt(", se dirige la a usted a fin de solicitar que proceda a informar:"),
        ]),

        vacio(),

        esLinea
          ? p([
              txt("\t\t\t\t"),
              txt("Si en su empresa se encuentra vinculado el número de línea "),
              txt(numLinea || "--------------------"),
              txt(" y en caso positivo informar titularidad junto a sus respectivos datos filiatorios, como así también el número de IMEI asociado a dicha línea y el respectivo registro de llamadas / mensajes entrantes y salientes. Todo ello comprendido entre las fechas "),
              txt(`${fechaDesde} hasta las fechas ${fechaHasta}`, { underline: { type: UnderlineType.SINGLE } }),
              txt("."),
            ])
          : p([
              txt("\t\t\t\t"),
              txt("Si en su empresa se encuentra vinculado el Imei N.° "),
              txt(imei || "--------------------"),
              txt(" y en caso positivo informar titularidad junto a sus respectivos datos filiatorios, como así también el respectivo registro llamadas / mensajes entrantes y salientes. Todo ello comprendido entre las fechas "),
              txt(`${fechaDesde} hasta las fechas ${fechaHasta}`, { underline: { type: UnderlineType.SINGLE } }),
              txt("."),
            ]),

        vacio(),

        p([
          txt("\t\t\t\t"),
          txt("El presente oficio se remite en el marco de una Investigación Penal Preparatoria dirigida por el Ministerio Público de la Acusación de la Provincia de Santa Fe.-"),
        ]),

        vacio(),

        p([
          txt("\t\t\t\t"),
          txt("Este requerimiento deberá ser contestado dentro del plazo de 3 días hábiles, bajo apercibimientos legales.-"),
        ]),

        vacio(),

        p([txt("\t\t\t\t"), txt("Se transcriben a continuación las normas pertinentes:")]),

        vacio(),

        p([
          txt("Art. 4, Ley 13013 – Potestades", { underline: { type: UnderlineType.SINGLE } }),
          txt(". El Ministerio Público de la Acusación, en ejercicio de sus funciones, podrá pedir la colaboración de cualquier funcionario y autoridad administrativa del Estado y de las personas privadas físicas o jurídicas, estando éstos obligados a prestarla sin demora y a proporcionar los documentos e informes que le sean requeridos, dentro de los límites legales."),
        ]),

        vacio(),

        p([
          txt("Datos del correo electrónico al que debe dirigirse la respuesta", { bold: true, underline: { type: UnderlineType.SINGLE } }),
          txt(": Policía de Investigaciones – Compleja 5, casilla de correo electrónico ", { bold: true }),
          txt(emailRespuesta, { bold: true }),
          txt(". --", { bold: true }),
        ]),

        vacio(), vacio(),

        p([txt("Saludo a usted atentamente.-")], { alignment: AlignmentType.CENTER }),
      ]
    }]
  });

  const buffer = await Packer.toBuffer(doc);
  return new Blob([buffer as unknown as ArrayBuffer], {
    type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  });
}

function descargar(blob: Blob, nombre: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = nombre;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function generarOficioFiscal(oficio: Oficio) {
  const operadorasValidas = ["Claro", "Personal", "Movistar"];

  // Leer correo desde configuración global
  const configRes = await fetch("/api/configuracion");
  const config = await configRes.json();
  const emailRespuesta = config.emailRespuesta || "";

  if (oficio.operadora === "Todos" || oficio.operadora === "Todas") {
    // Generar los 3 con delay entre cada uno para que el navegador no bloquee las descargas
    for (const op of operadorasValidas) {
      const blob = await generarDocumento(oficio, op, emailRespuesta);
      descargar(blob, `Oficio_${op}_Legajo${oficio.legajo.numero}.docx`);
      await delay(800);
    }
  } else {
    const blob = await generarDocumento(oficio, oficio.operadora, emailRespuesta);
    descargar(blob, `Oficio_${oficio.operadora}_Legajo${oficio.legajo.numero}.docx`);
  }
}