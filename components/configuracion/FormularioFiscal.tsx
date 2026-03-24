"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Fiscal } from "./types";
import { motion, AnimatePresence } from "framer-motion";

const inputStyle = { background: "var(--bg-tertiary)", border: "1px solid var(--border)", color: "var(--text-primary)" };
const inputClass = "w-full rounded-lg px-3 py-2.5 text-sm outline-none transition-all focus:ring-2 focus:ring-[var(--accent)]";
const labelStyle = { color: "var(--text-muted)" };

export default function FormularioFiscal({ fiscal, onCerrar, onGuardado }: {
  fiscal: Fiscal | null; onCerrar: () => void; onGuardado: () => void;
}) {
  const esEdicion = !!fiscal;
  const [nombre, setNombre] = useState(fiscal?.nombre ?? "");
  const [cargo, setCargo] = useState(fiscal?.cargo ?? "");
  const [fiscalia, setFiscalia] = useState(fiscal?.fiscalia ?? "Fiscalia N.° 505");
  const [dni, setDni] = useState(fiscal?.dni ?? "");
  const [email, setEmail] = useState(fiscal?.email ?? "");
  const [direccion, setDireccion] = useState(fiscal?.direccion ?? "Necochea N.° 443 - Rafaela");
  const [telefono, setTelefono] = useState(fiscal?.telefono ?? "3492-453563");
  const [telefonoMovil, setTelefonoMovil] = useState(fiscal?.telefonoMovil ?? "3492-425560");
  const [secretario, setSecretario] = useState(fiscal?.secretario ?? "");
  const [dniSecretario, setDniSecretario] = useState(fiscal?.dniSecretario ?? "");
  const [emailSecretario, setEmailSecretario] = useState(fiscal?.emailSecretario ?? "");
  const [guardando, setGuardando] = useState(false);
  const [error, setError] = useState("");

  async function guardar() {
    if (!nombre.trim()) { setError("El nombre y apellido son obligatorios"); return; }
    setGuardando(true); setError("");
    try {
      const body = { nombre, cargo, fiscalia, dni, email, direccion, telefono, telefonoMovil, secretario, dniSecretario, emailSecretario };
      const res = await fetch(
        esEdicion ? `/api/fiscales/${fiscal!.id}` : "/api/fiscales",
        { method: esEdicion ? "PUT" : "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) }
      );
      const data = await res.json();
      if (!res.ok) { setError(data.error ?? "Error al guardar"); return; }
      onGuardado();
    } catch { setError("Error de conexión al servidor"); }
    finally { setGuardando(false); }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm" style={{ background: "rgba(0,0,0,0.6)" }}>
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
        style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)" }} 
        className="w-full max-w-2xl rounded-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
        <div style={{ borderBottom: "1px solid var(--bg-tertiary)" }} className="sticky top-0 bg-[var(--bg-secondary)] z-10 flex items-center justify-between p-5">
          <h3 style={{ color: "var(--text-primary)" }} className="font-bold text-lg tracking-wide">
            {esEdicion ? "Editar Fiscal" : "Nuevo Fiscal"}
          </h3>
          <button onClick={onCerrar} style={{ color: "var(--text-muted)" }} className="p-1 rounded-full hover:bg-[var(--bg-tertiary)] transition"><X size={20} /></button>
        </div>
        <div className="p-6 space-y-6">
          <div className="bg-[var(--bg-tertiary)] p-4 rounded-xl border border-[var(--border)]">
            <p style={{ color: "var(--accent)" }} className="text-xs font-bold uppercase tracking-widest mb-4">Datos Principales</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label style={labelStyle} className="text-xs font-medium mb-1.5 block">Nombre y apellido *</label>
                <input value={nombre} onChange={e => setNombre(e.target.value)} style={inputStyle} className={inputClass} placeholder="Nombre completo" />
              </div>
              <div>
                <label style={labelStyle} className="text-xs font-medium mb-1.5 block">Cargo</label>
                <input value={cargo} onChange={e => setCargo(e.target.value)} style={inputStyle} className={inputClass} placeholder="Ej: Fiscal Adjunto" />
              </div>
              <div>
                <label style={labelStyle} className="text-xs font-medium mb-1.5 block">Fiscalía / Organismo</label>
                <input value={fiscalia} onChange={e => setFiscalia(e.target.value)} style={inputStyle} className={inputClass} placeholder="Ej: Fiscalía N° 505" />
              </div>
              <div>
                <label style={labelStyle} className="text-xs font-medium mb-1.5 block">DNI</label>
                <input value={dni} onChange={e => setDni(e.target.value)} style={inputStyle} className={inputClass} placeholder="Documento" />
              </div>
              <div>
                <label style={labelStyle} className="text-xs font-medium mb-1.5 block">Email oficial</label>
                <input value={email} onChange={e => setEmail(e.target.value)} style={inputStyle} className={inputClass} placeholder="ejemplo@mpa.gov.ar" />
              </div>
              <div>
                <label style={labelStyle} className="text-xs font-medium mb-1.5 block">Teléfono fijo</label>
                <input value={telefono} onChange={e => setTelefono(e.target.value)} style={inputStyle} className={inputClass} placeholder="Fijo de la fiscalía" />
              </div>
              <div>
                <label style={labelStyle} className="text-xs font-medium mb-1.5 block">Teléfono móvil</label>
                <input value={telefonoMovil} onChange={e => setTelefonoMovil(e.target.value)} style={inputStyle} className={inputClass} placeholder="Móvil oficial" />
              </div>
              <div className="md:col-span-2">
                <label style={labelStyle} className="text-xs font-medium mb-1.5 block">Dirección completa</label>
                <input value={direccion} onChange={e => setDireccion(e.target.value)} style={inputStyle} className={inputClass} placeholder="Calle y número, Ciudad" />
              </div>
            </div>
          </div>

          <div className="bg-[var(--bg-tertiary)] p-4 rounded-xl border border-[var(--border)]">
            <p style={{ color: "var(--accent)" }} className="text-xs font-bold uppercase tracking-widest mb-4">Datos del Secretario/a</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label style={labelStyle} className="text-xs font-medium mb-1.5 block">Nombre y apellido</label>
                <input value={secretario} onChange={e => setSecretario(e.target.value)} style={inputStyle} className={inputClass} placeholder="Nombre del secretario" />
              </div>
              <div>
                <label style={labelStyle} className="text-xs font-medium mb-1.5 block">DNI</label>
                <input value={dniSecretario} onChange={e => setDniSecretario(e.target.value)} style={inputStyle} className={inputClass} placeholder="Documento" />
              </div>
              <div>
                <label style={labelStyle} className="text-xs font-medium mb-1.5 block">Email</label>
                <input value={emailSecretario} onChange={e => setEmailSecretario(e.target.value)} style={inputStyle} className={inputClass} placeholder="Email secretario" />
              </div>
            </div>
          </div>
          
          <AnimatePresence>
            {error && (
              <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} 
                style={{ color: "var(--danger)" }} className="text-sm font-medium text-center bg-red-500/10 p-2 rounded-lg">
                {error}
              </motion.p>
            )}
          </AnimatePresence>
          
          <div className="flex gap-3 pt-2">
            <button onClick={onCerrar}
              style={{ background: "transparent", color: "var(--text-secondary)", border: "1px solid var(--border)" }}
              className="flex-1 py-3 rounded-xl text-sm font-bold hover:bg-[var(--bg-tertiary)] transition">
              Cancelar
            </button>
            <button onClick={guardar} disabled={guardando} style={{ background: "var(--accent)" }}
              className="flex-1 py-3 rounded-xl text-sm font-bold text-white shadow-md hover:shadow-lg hover:scale-[1.02] transition-all disabled:opacity-50 disabled:scale-100">
              {guardando ? "Guardando..." : esEdicion ? "Guardar cambios" : "Crear fiscal"}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
