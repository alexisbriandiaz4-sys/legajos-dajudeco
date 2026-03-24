"use client";

import { useState } from "react";
import { Download, FileText, AlertTriangle, ShieldAlert } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import ModalConfirmar from "@/components/ui/ModalConfirmar";
import { useAuth } from "@/lib/auth-context";

export default function SeccionBackup() {
  const { logout } = useAuth();
  const [generandoExcel, setGenerandoExcel] = useState(false);
  const [generandoPDF, setGenerandoPDF] = useState(false);
  const [formateando, setFormateando] = useState(false);
  const [modalResetOpen, setModalResetOpen] = useState(false);

  async function generarBackupExcel() {
    setGenerandoExcel(true);
    try {
      const [legajosRes, oficiosRes, fiscalesRes, telefoniaRes, estafasRes] = await Promise.all([
        fetch("/api/legajos"), fetch("/api/oficios"), fetch("/api/fiscales"),
        fetch("/api/telefonia?limit=10000"), fetch("/api/estafas?limit=10000")
      ]);
      const legajos = await legajosRes.json();
      const oficios = await oficiosRes.json();
      const fiscales = await fiscalesRes.json();
      const telefonia = await telefoniaRes.json();
      const estafas = await estafasRes.json();
      
      const { utils, writeFile } = await import("xlsx");
      const wb = utils.book_new();

      const legajosFormat = legajos.map((l: any) => ({
        "N° Legajo": l.numero, "Carátula": l.caratula, "CUIJ": l.cuij || "",
        "Delito": l.delito, "Fecha del hecho": new Date(l.fechaHecho).toLocaleDateString("es-AR"),
        "Estado": l.estado, "Fiscal": l.fiscal || "", "Email respuesta": l.emailRespuesta || "",
        "Observaciones": l.observaciones || "", "Fecha creación": new Date(l.createdAt).toLocaleDateString("es-AR"),
      }));
      utils.book_append_sheet(wb, utils.json_to_sheet(legajosFormat), "Legajos");

      const victimasData: any[] = [];
      legajos.forEach((l: any) => l.victimas?.forEach((v: any) => victimasData.push({
        "N° Legajo": l.numero, "Carátula": l.caratula,
        "Nombre": v.nombre, "DNI": v.dni || "", "Teléfono": v.telefono || "", "Email": v.email || "",
      })));
      utils.book_append_sheet(wb, utils.json_to_sheet(victimasData), "Víctimas");

      const dispositivosData: any[] = [];
      legajos.forEach((l: any) => l.dispositivos?.forEach((d: any) => dispositivosData.push({
        "N° Legajo": l.numero, "Carátula": l.caratula,
        "Tipo": d.tipo, "Marca": d.marca || "", "Modelo": d.modelo || "", "IMEI": d.imei || "", "Color": d.color || "",
      })));
      utils.book_append_sheet(wb, utils.json_to_sheet(dispositivosData), "Dispositivos");

      utils.book_append_sheet(wb, utils.json_to_sheet(oficios.map((o: any) => ({
        "N° Legajo": o.legajo?.numero || "", "Carátula": o.legajo?.caratula || "",
        "Operadora": o.operadora, "Tipo": o.tipo, "Urgencia": o.urgencia, "Estado": o.estado,
        "Fecha envío": o.fechaEnvio ? new Date(o.fechaEnvio).toLocaleDateString("es-AR") : "",
        "Fecha respuesta": o.fechaRespuesta ? new Date(o.fechaRespuesta).toLocaleDateString("es-AR") : "",
        "Observaciones": o.observaciones || "",
      }))), "Oficios");

      utils.book_append_sheet(wb, utils.json_to_sheet(fiscales.map((f: any) => ({
        "Nombre": f.nombre, "Cargo": f.cargo || "", "Fiscalía": f.fiscalia || "",
        "DNI": f.dni || "", "Email": f.email || "", "Activo": f.activo ? "Sí" : "No",
      }))), "Fiscales");

      if (telefonia?.registros) {
        utils.book_append_sheet(wb, utils.json_to_sheet(telefonia.registros.map((t: any) => ({
          "Legajo": t.nroLegajo || "", "Causa": t.causa || "", "IMEI": t.imei || "",
          "Línea": t.abonado || "", "Empresa": t.empresa || "", "Víctima": t.victima || ""
        }))), "Telefonía");
      }

      if (estafas?.registros) {
        utils.book_append_sheet(wb, utils.json_to_sheet(estafas.registros.map((e: any) => ({
          "Legajo": e.nroLegajo || "", "Ardid": e.ardid || "", "CBU": e.cbu || "",
          "Titular": e.titulares || "", "Víctima": e.victima || ""
        }))), "Estafas");
      }

      const fecha = new Date().toLocaleDateString("es-AR").replace(/\//g, "-");
      writeFile(wb, `Backup_Excel_SAP_${fecha}.xlsx`);
      toast.success("Excel generado exitosamente");
    } catch (e) {
      console.error(e);
      toast.error("Error al generar el backup en Excel");
    } finally {
      setGenerandoExcel(false);
    }
  }

  async function generarBackupPDF() {
    setGenerandoPDF(true);
    try {
      const [legajosRes, oficiosRes, fiscalesRes, telefoniaRes, estafasRes] = await Promise.all([
        fetch("/api/legajos"), fetch("/api/oficios"), fetch("/api/fiscales"),
        fetch("/api/telefonia?limit=10000"), fetch("/api/estafas?limit=10000")
      ]);
      const legajos = await legajosRes.json();
      const oficios = await oficiosRes.json();
      const fiscales = await fiscalesRes.json();
      const telefonia = await telefoniaRes.json();
      const estafas = await estafasRes.json();

      const doc = new jsPDF("landscape");
      const fecha = new Date().toLocaleDateString("es-AR");

      doc.setFontSize(22);
      doc.text("S.A.P - Sistema de Análisis Policial", 14, 20);
      doc.setFontSize(16);
      doc.text(`Backup General del Sistema - ${fecha}`, 14, 30);
      doc.setFontSize(11);
      doc.text("Documento confidencial: Datos sensibles de investigación y análisis forense.", 14, 40);

      let startY = 50;

      if (legajos?.length > 0) {
        doc.text("1. Legajos Activos", 14, startY);
        autoTable(doc, {
          startY: startY + 5,
          head: [["N° Legajo", "Carátula", "Estado", "Fiscal", "Delito"]],
          body: legajos.map((l: any) => [l.numero, l.caratula, l.estado, l.fiscal || "", l.delito || ""]),
          styles: { fontSize: 8 }
        });
        startY = (doc as any).lastAutoTable.finalY + 15;
      }

      if (telefonia?.registros?.length > 0) {
        if (startY > doc.internal.pageSize.height - 40) { doc.addPage(); startY = 20; }
        doc.text("2. Registros de Telefonía", 14, startY);
        autoTable(doc, {
          startY: startY + 5,
          head: [["Legajo / Causa", "IMEI", "Línea / Abonado", "Empresa", "Víctima"]],
          body: telefonia.registros.map((t: any) => [
            t.nroLegajo || t.causa || "", t.imei || "", t.abonado || "", t.empresa || "", t.victima || ""
          ]),
          styles: { fontSize: 8 }
        });
        startY = (doc as any).lastAutoTable.finalY + 15;
      }

      if (estafas?.registros?.length > 0) {
        if (startY > doc.internal.pageSize.height - 40) { doc.addPage(); startY = 20; }
        doc.text("3. Registros de Estafas", 14, startY);
        autoTable(doc, {
          startY: startY + 5,
          head: [["Legajo", "Ardid", "CBU / Alias", "Titulares", "Víctima"]],
          body: estafas.registros.map((e: any) => [
            e.nroLegajo || "", e.ardid || "", e.cbu || "", e.titulares || "", e.victima || ""
          ]),
          styles: { fontSize: 8 }
        });
        startY = (doc as any).lastAutoTable.finalY + 15;
      }

      if (oficios?.length > 0) {
        if (startY > doc.internal.pageSize.height - 40) { doc.addPage(); startY = 20; }
        doc.text("4. Oficios y Estado", 14, startY);
        autoTable(doc, {
          startY: startY + 5,
          head: [["Legajo", "Operadora", "Tipo", "Estado", "Urgencia"]],
          body: oficios.map((o: any) => [
            o.legajo?.numero || "", o.operadora, o.tipo, o.estado, o.urgencia
          ]),
          styles: { fontSize: 8 }
        });
        startY = (doc as any).lastAutoTable.finalY + 15;
      }

      doc.save(`Backup_PDF_SAP_${fecha.replace(/\//g, "-")}.pdf`);
      toast.success("PDF generado exitosamente");
    } catch (e) {
      console.error(e);
      toast.error("Error al generar el PDF");
    } finally {
      setGenerandoPDF(false);
    }
  }

  async function factoryReset() {
    setFormateando(true);
    try {
      const res = await fetch("/api/configuracion/reset", { method: "DELETE" });
      if (!res.ok) throw new Error("Error al formatear");
      toast.success("Sistema formateado exitosamente. Redirigiendo...", { duration: 5000 });
      setTimeout(() => logout(), 2000);
    } catch (e) {
      console.error(e);
      toast.error("Error al formatear el sistema");
    } finally {
      setFormateando(false);
      setModalResetOpen(false);
    }
  }

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      
      {/* SECCIÓN BACKUP */}
      <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)" }} className="rounded-xl p-8 space-y-6 shadow-sm">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
          <div style={{ background: "rgba(34,197,94,0.15)" }} className="p-4 rounded-2xl shrink-0 shadow-inner">
            <Download size={32} style={{ color: "var(--success)" }} />
          </div>
          <div>
            <h3 style={{ color: "var(--text-primary)" }} className="font-bold text-xl mb-1.5">Exportar Base de Datos</h3>
            <p style={{ color: "var(--text-muted)" }} className="text-sm">
              Genera archivos de resguardo unificados con todas las bases del sistema (Legajos, Telefonía, Estafas, Oficios, Fiscales).
              Ideal para auditorías forenses y entrega de reportes formales.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button onClick={generarBackupExcel} disabled={generandoExcel || generandoPDF} style={{ background: "var(--success)" }}
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-white text-base font-bold shadow-md hover:shadow-lg hover:opacity-90 transition-all disabled:opacity-50">
            <Download size={18} />
            {generandoExcel ? "Generando Excel..." : "Descargar Excel (.xlsx)"}
          </button>

          <button onClick={generarBackupPDF} disabled={generandoExcel || generandoPDF} style={{ background: "var(--danger)" }}
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-white text-base font-bold shadow-md hover:shadow-lg hover:opacity-90 transition-all disabled:opacity-50">
            <FileText size={18} />
            {generandoPDF ? "Generando PDF..." : "Descargar PDF Formateado"}
          </button>
        </div>
      </div>

      {/* SECCIÓN WIPE / FACTORY RESET */}
      <div style={{ background: "rgba(220, 38, 38, 0.05)", border: "1px solid rgba(220, 38, 38, 0.3)" }} className="rounded-xl p-8 space-y-6 shadow-sm">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
          <div style={{ background: "rgba(220,38,38,0.15)" }} className="p-4 rounded-2xl shrink-0 shadow-inner">
            <ShieldAlert size={32} style={{ color: "var(--danger)" }} />
          </div>
          <div>
            <h3 style={{ color: "var(--danger)" }} className="font-bold text-xl mb-1.5">Módulo de Sanitización Forense (Factory Reset)</h3>
            <p style={{ color: "var(--text-secondary)" }} className="text-sm">
              Esta herramienta realiza un Wipe de todos los registros operativos del sistema (Legajos, Estafas, Telefonía, Usuarios y Oficios),
              dejando solo habilitado este administrador. Se usa tras las fases de Testing, previo al despliegue Operativo Real.
            </p>
          </div>
        </div>
        
        <button onClick={() => setModalResetOpen(true)} disabled={formateando} 
          style={{ background: "var(--danger)" }}
          className="w-full sm:w-auto px-6 flex items-center justify-center gap-2 py-3.5 rounded-xl text-white text-base font-bold shadow-md hover:shadow-lg hover:opacity-90 transition-all disabled:opacity-50 mx-auto">
          <AlertTriangle size={18} />
          {formateando ? "Formateando Base de Datos..." : "Eliminar toda la Información (Factory Reset)"}
        </button>
      </div>

      {modalResetOpen && (
        <ModalConfirmar
          titulo="⚠️ ADVERTENCIA CRÍTICA FORENSE"
          mensaje={
            <div className="space-y-4 text-center">
              <AlertTriangle className="mx-auto text-red-500 mb-2" size={48} />
              <p>Vas a ELIMINAR de forma IRREVERSIBLE:</p>
              <ul className="text-left bg-red-500/10 p-4 rounded-lg text-sm list-disc pl-5">
                <li>Todos los Legajos, Oficios y Archivos Cargados.</li>
                <li>Todas las trazas de Telefonía y Estafas.</li>
                <li>Todos los Usuarios Fiscales e Investigadores ajenos a ti.</li>
                <li>Red de Conexiones generada y Logs de Auditoría.</li>
              </ul>
              <p className="font-bold text-red-500">¿Estás absolutamente seguro de continuar?</p>
            </div>
          }
          textoConfirmar="SÍ, FORMATEAR SISTEMA"
          onCancelar={() => setModalResetOpen(false)}
          onConfirmar={factoryReset}
          procesando={formateando}
        />
      )}

    </motion.div>
  );
}
