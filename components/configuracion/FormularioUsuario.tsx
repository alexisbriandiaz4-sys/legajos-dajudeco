"use client";

import { useState } from "react";
import { X, Eye, EyeOff } from "lucide-react";
import { Usuario } from "./types";
import { motion, AnimatePresence } from "framer-motion";

const inputStyle = { background: "var(--bg-tertiary)", border: "1px solid var(--border)", color: "var(--text-primary)" };
const inputClass = "w-full rounded-xl px-4 py-3 text-sm outline-none transition-all focus:ring-2 focus:ring-[var(--accent)]";
const labelStyle = { color: "var(--text-muted)" };

export default function FormularioUsuario({ usuario, onCerrar, onGuardado }: { usuario: Usuario | null; onCerrar: () => void; onGuardado: () => void }) {
  const esEdicion = !!usuario;
  const [form, setForm] = useState({
    nombre: usuario?.nombre ?? "", usuario: usuario?.usuario ?? "",
    password: "", confirmar: "", rol: usuario?.rol ?? "investigador",
  });
  const [verPassword, setVerPassword] = useState(false);
  const [guardando, setGuardando] = useState(false);
  const [error, setError] = useState("");

  async function guardar() {
    if (!form.nombre.trim()) { setError("El nombre completo es obligatorio"); return; }
    if (!form.usuario.trim()) { setError("El nombre de usuario es obligatorio"); return; }
    if (!esEdicion && !form.password) { setError("La contraseña es obligatoria para usuarios nuevos"); return; }
    if (form.password && form.password !== form.confirmar) { setError("Las contraseñas no coinciden"); return; }
    if (form.password && form.password.length < 6) { setError("La contraseña debe ser mayor a 6 caracteres"); return; }
    
    setGuardando(true); setError("");
    try {
      const body: Record<string, string> = { nombre: form.nombre, usuario: form.usuario, rol: form.rol };
      if (form.password) body.password = form.password;
      const res = await fetch(
        esEdicion ? `/api/usuarios/${usuario!.id}` : "/api/usuarios",
        { method: esEdicion ? "PUT" : "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) }
      );
      const data = await res.json();
      if (!res.ok) { setError(data.error ?? "Error al guardar"); return; }
      onGuardado();
    } catch { setError("Error de conexión al servidor"); }
    finally { setGuardando(false); }
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 backdrop-blur-sm" style={{ background: "rgba(0,0,0,0.6)" }}>
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
        style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)" }} 
        className="w-full max-w-md rounded-2xl shadow-2xl">
        <div style={{ borderBottom: "1px solid var(--bg-tertiary)" }} className="flex items-center justify-between p-5">
          <h3 style={{ color: "var(--text-primary)" }} className="font-bold text-lg tracking-wide">
            {esEdicion ? "Editar Usuario del S.A.P." : "Nuevo Investigador / Admin"}
          </h3>
          <button onClick={onCerrar} style={{ color: "var(--text-muted)" }} className="p-1 rounded-full hover:bg-[var(--bg-tertiary)] transition"><X size={20} /></button>
        </div>
        
        <div className="p-6 space-y-5">
          <div>
            <label style={labelStyle} className="text-xs font-bold uppercase tracking-widest mb-1.5 block">Nombre completo *</label>
            <input value={form.nombre} onChange={e => setForm({ ...form, nombre: e.target.value })}
              style={inputStyle} className={inputClass} placeholder="Ej: Inspector General Juan García" />
          </div>
          <div>
            <label style={labelStyle} className="text-xs font-bold uppercase tracking-widest mb-1.5 block">Nombre de usuario *</label>
            <input value={form.usuario} onChange={e => setForm({ ...form, usuario: e.target.value })}
              style={inputStyle} className={inputClass} placeholder="Ej: jgarcia" />
          </div>
          
          <div className="bg-[var(--bg-tertiary)] p-4 rounded-xl border border-[var(--border)]">
            <label style={labelStyle} className="text-xs font-bold uppercase tracking-widest mb-1.5 block">
              {esEdicion ? "Cambiar contraseña (opcional)" : "Contraseña de acceso *"}
            </label>
            <div className="relative mb-3">
              <input type={verPassword ? "text" : "password"} value={form.password}
                onChange={e => setForm({ ...form, password: e.target.value })}
                style={inputStyle} className={inputClass + " pr-11"} placeholder="Mínimo 6 caracteres" />
              <button onClick={() => setVerPassword(v => !v)} style={{ color: "var(--text-muted)" }}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 hover:bg-[var(--bg-secondary)] rounded-md transition">
                {verPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            
            <AnimatePresence>
              {form.password && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                  <label style={labelStyle} className="text-xs font-bold uppercase tracking-widest mb-1.5 block pt-1">Repetir contraseña *</label>
                  <input type={verPassword ? "text" : "password"} value={form.confirmar}
                    onChange={e => setForm({ ...form, confirmar: e.target.value })}
                    style={inputStyle} className={inputClass} placeholder="Debe coincidir con la anterior" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <div>
            <label style={labelStyle} className="text-xs font-bold uppercase tracking-widest mb-2 block">Nivel de Privilegios</label>
            <div className="flex gap-3">
              {[["investigador", "Agente / Investigador"], ["admin", "Administrador"]].map(([val, lbl]) => (
                <button key={val} onClick={() => setForm({ ...form, rol: val })}
                  style={form.rol === val
                    ? { background: "var(--accent)", color: "#fff", border: "1px solid var(--accent)" }
                    : { background: "var(--bg-tertiary)", color: "var(--text-muted)", border: "1px solid var(--border)" }
                  }
                  className="flex-1 py-3 rounded-xl text-sm font-bold shadow-sm transition-all hover:scale-[1.02]">
                  {lbl}
                </button>
              ))}
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
          
          <div className="flex gap-3 pt-3">
            <button onClick={onCerrar}
              style={{ background: "transparent", color: "var(--text-secondary)", border: "1px solid var(--bg-tertiary)" }}
              className="flex-1 py-3.5 rounded-xl text-sm font-bold hover:bg-[var(--bg-tertiary)] transition">
              Cancelar
            </button>
            <button onClick={guardar} disabled={guardando} style={{ background: "var(--accent)" }}
              className="flex-1 py-3.5 rounded-xl text-sm font-bold text-white shadow-md hover:shadow-lg hover:scale-[1.02] transition-all disabled:opacity-50 disabled:scale-100">
              {guardando ? "Procesando..." : esEdicion ? "Confirmar Cambios" : "Verificar y Crear"}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
