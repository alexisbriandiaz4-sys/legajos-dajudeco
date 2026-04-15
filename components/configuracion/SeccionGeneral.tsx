"use client";

import { useState, useEffect } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";

const inputStyle = { background: "var(--bg-tertiary)", border: "1px solid var(--border)", color: "var(--text-primary)" };
const inputClass = "w-full rounded-lg px-3 py-2 text-sm outline-none transition-all focus:ring-2 focus:ring-[var(--accent)]";
const labelStyle = { color: "var(--text-muted)" };

export default function SeccionGeneral() {
  const [email, setEmail] = useState("");
  const [diasMedia, setDiasMedia] = useState(2);
  const [diasAlta, setDiasAlta] = useState(3);
  const [diasCritica, setDiasCritica] = useState(7);
  const [guardando, setGuardando] = useState(false);

  useEffect(() => {
    fetch("/api/configuracion", { headers: { 'Cache-Control': 'no-cache', 'Pragma': 'no-cache' }, cache: 'no-store' })
      .then(r => r.json())
      .then(d => {
        setEmail(d.emailRespuesta || "");
        setDiasMedia(d.diasAlertaMedia ?? 2);
        setDiasAlta(d.diasAlertaAlta ?? 3);
        setDiasCritica(d.diasAlertaCritica ?? 7);
      })
      .catch(() => toast.error("Error al cargar la configuración"));
  }, []);

  async function guardar() {
    setGuardando(true);
    try {
      const res = await fetch("/api/configuracion", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          emailRespuesta: email,
          diasAlertaMedia: diasMedia,
          diasAlertaAlta: diasAlta,
          diasAlertaCritica: diasCritica,
        }),
      });
      if (res.ok) {
        toast.success("Configuración guardada correctamente");
      } else {
        toast.error("Error al guardar la configuración");
      }
    } catch {
      toast.error("Error de conexión");
    } finally {
      setGuardando(false);
    }
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}
      style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)" }} 
      className="rounded-xl p-6 space-y-5 shadow-sm"
    >
      <h3 style={{ color: "var(--text-primary)" }} className="font-semibold text-lg">Configuración general</h3>

      <div>
        <label style={labelStyle} className="text-xs mb-1 block font-medium uppercase tracking-wide">
          Correo de respuesta para oficios fiscales
        </label>
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={inputStyle}
          className={inputClass}
          placeholder="Ej: abdiaz@santafe.gov.ar"
        />
        <p style={{ color: "var(--text-muted)" }} className="text-xs mt-1.5 opacity-80">
          Este correo aparecerá al final de cada oficio fiscal generado automáticamente.
        </p>
      </div>

      <div>
        <p style={{ color: "var(--text-primary)" }} className="text-sm font-semibold mb-3">Días sin respuesta para alertas</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-3 rounded-xl" style={{ background: "var(--bg-tertiary)", border: "1px solid rgba(234, 179, 8, 0.2)" }}>
            <label style={{ color: "#eab308" }} className="text-xs mb-2 block font-bold tracking-wide uppercase">⚠ Alerta Media</label>
            <div className="flex items-center gap-2">
              <input type="number" min={1} max={30} value={diasMedia} onChange={e => setDiasMedia(Number(e.target.value))}
                style={inputStyle} className={inputClass} />
              <span style={{ color: "var(--text-muted)" }} className="text-xs">días</span>
            </div>
          </div>
          <div className="p-3 rounded-xl" style={{ background: "var(--bg-tertiary)", border: "1px solid rgba(249, 115, 22, 0.2)" }}>
            <label style={{ color: "#f97316" }} className="text-xs mb-2 block font-bold tracking-wide uppercase">🔶 Alerta Alta</label>
            <div className="flex items-center gap-2">
              <input type="number" min={1} max={30} value={diasAlta} onChange={e => setDiasAlta(Number(e.target.value))}
                style={inputStyle} className={inputClass} />
              <span style={{ color: "var(--text-muted)" }} className="text-xs">días</span>
            </div>
          </div>
          <div className="p-3 rounded-xl" style={{ background: "var(--bg-tertiary)", border: "1px solid rgba(239, 68, 68, 0.2)" }}>
            <label style={{ color: "#ef4444" }} className="text-xs mb-2 block font-bold tracking-wide uppercase">🔴 Alerta Crítica</label>
            <div className="flex items-center gap-2">
              <input type="number" min={1} max={30} value={diasCritica} onChange={e => setDiasCritica(Number(e.target.value))}
                style={inputStyle} className={inputClass} />
              <span style={{ color: "var(--text-muted)" }} className="text-xs">días</span>
            </div>
          </div>
        </div>
        <p style={{ color: "var(--text-muted)" }} className="text-xs mt-3 opacity-80">
          Un oficio enviado sin respuesta generará un color de estado en el listado según los días configurados.
        </p>
      </div>

      <div className="pt-2">
        <button onClick={guardar} disabled={guardando} style={{ background: "var(--accent)" }}
          className="w-full sm:w-auto px-8 py-2.5 rounded-xl text-white text-sm font-bold shadow-md hover:shadow-lg hover:opacity-90 transition-all disabled:opacity-50">
          {guardando ? "Guardando..." : "Guardar Cambios"}
        </button>
      </div>
    </motion.div>
  );
}
