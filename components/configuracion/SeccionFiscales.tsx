"use client";

import { useState, useEffect } from "react";
import { Plus, Pencil, Trash2, XCircle, CheckCircle, Scale } from "lucide-react";
import { toast } from "sonner";
import { Fiscal } from "./types";
import FormularioFiscal from "./FormularioFiscal";
import ModalConfirmar from "../ui/ModalConfirmar";
import { motion, AnimatePresence } from "framer-motion";

export default function SeccionFiscales() {
  const [fiscales, setFiscales] = useState<Fiscal[]>([]);
  const [cargando, setCargando] = useState(true);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [fiscalEditar, setFiscalEditar] = useState<Fiscal | null>(null);
  const [confirmarBorrar, setConfirmarBorrar] = useState<Fiscal | null>(null);

  useEffect(() => { cargar(); }, []);

  async function cargar() {
    setCargando(true);
    try {
      const res = await fetch("/api/fiscales");
      if (res.ok) {
        setFiscales(await res.json());
      } else {
        toast.error("Error al cargar los fiscales");
      }
    } catch {
      toast.error("Error de conexión al cargar fiscales");
    } finally {
      setCargando(false);
    }
  }

  async function toggleActivo(f: Fiscal) {
    try {
      const res = await fetch(`/api/fiscales/${f.id}`, {
        method: "PUT", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...f, activo: !f.activo }),
      });
      if (res.ok) {
        toast.success(`Fiscal ${!f.activo ? "activado" : "desactivado"}`);
        cargar();
      } else {
        toast.error("Error al actualizar el fiscal");
      }
    } catch {
      toast.error("Error de conexión");
    }
  }

  async function borrar(f: Fiscal) {
    try {
      const res = await fetch(`/api/fiscales/${f.id}`, { method: "DELETE" });
      if (res.ok) {
        toast.success(`Fiscal ${f.nombre} eliminado`);
        setConfirmarBorrar(null);
        cargar();
      } else {
        toast.error("Error al eliminar el fiscal");
      }
    } catch {
      toast.error("Error de conexión");
    }
  }

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
      <div className="flex items-center justify-between">
        <p style={{ color: "var(--text-muted)" }} className="text-sm font-medium">
          {fiscales.length} fiscal{fiscales.length !== 1 ? "es" : ""} registrado{fiscales.length !== 1 ? "s" : ""}
        </p>
        <button onClick={() => { setFiscalEditar(null); setMostrarFormulario(true); }}
          style={{ background: "var(--accent)" }}
          className="flex items-center gap-2 px-4 py-2 rounded-xl border border-transparent text-white text-sm font-bold shadow-sm hover:shadow-md hover:scale-[1.02] transition-all">
          <Plus size={16} /> Nuevo fiscal
        </button>
      </div>

      {cargando ? (
        <p style={{ color: "var(--text-muted)" }} className="text-sm text-center py-8">Cargando fiscales...</p>
      ) : fiscales.length === 0 ? (
        <div className="text-center py-16 bg-[var(--bg-secondary)] rounded-2xl border border-[var(--border)] border-dashed">
          <Scale size={48} style={{ color: "var(--text-muted)" }} className="mx-auto mb-4 opacity-50" />
          <p style={{ color: "var(--text-muted)" }} className="text-sm font-medium">No hay fiscales registrados</p>
        </div>
      ) : (
        <div className="space-y-3">
          <AnimatePresence>
            {fiscales.map(f => (
              <motion.div key={f.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: f.activo ? 1 : 0.6, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)" }}
                className="rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow group">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1.5">
                      <p style={{ color: "var(--text-primary)" }} className="font-bold text-base">{f.nombre}</p>
                      <span style={f.activo
                        ? { background: "rgba(34,197,94,0.15)", color: "var(--success)" }
                        : { background: "rgba(100,100,100,0.15)", color: "var(--text-muted)" }
                      } className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-md">
                        {f.activo ? "Activo" : "Inactivo"}
                      </span>
                    </div>
                    <p style={{ color: "var(--text-accent)" }} className="text-sm font-medium mb-2">{f.fiscalia || "—"} {f.cargo ? `· ${f.cargo}` : ''}</p>
                    <div className="flex gap-4 mt-2 flex-wrap">
                      {f.email && <span style={{ color: "var(--text-secondary)" }} className="text-xs flex items-center gap-1.5 bg-[var(--bg-tertiary)] px-2.5 py-1 rounded-md">✉ {f.email}</span>}
                      {f.telefono && <span style={{ color: "var(--text-secondary)" }} className="text-xs flex items-center gap-1.5 bg-[var(--bg-tertiary)] px-2.5 py-1 rounded-md">📞 {f.telefono}</span>}
                      {f.secretario && <span style={{ color: "var(--text-secondary)" }} className="text-xs flex items-center gap-1.5 bg-[var(--bg-tertiary)] px-2.5 py-1 rounded-md">👤 Sec: {f.secretario}</span>}
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0 opacity-100 sm:opacity-50 sm:group-hover:opacity-100 transition-opacity">
                    <button onClick={() => { setFiscalEditar(f); setMostrarFormulario(true); }}
                      style={{ color: "var(--text-secondary)", background: "var(--bg-tertiary)" }} className="p-2 rounded-lg hover:bg-black/10 dark:hover:bg-white/10 transition" title="Editar">
                      <Pencil size={15} />
                    </button>
                    <button onClick={() => toggleActivo(f)}
                      style={{ color: f.activo ? "var(--warning)" : "var(--success)", background: "var(--bg-tertiary)" }}
                      className="p-2 rounded-lg hover:bg-black/10 dark:hover:bg-white/10 transition"
                      title={f.activo ? "Desactivar" : "Activar"}>
                      {f.activo ? <XCircle size={15} /> : <CheckCircle size={15} />}
                    </button>
                    <button onClick={() => setConfirmarBorrar(f)}
                      style={{ color: "var(--danger)", background: "var(--bg-tertiary)" }} className="p-2 rounded-lg hover:bg-red-500/10 transition" title="Eliminar">
                      <Trash2 size={15} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

      {mostrarFormulario && (
        <FormularioFiscal
          fiscal={fiscalEditar}
          onCerrar={() => { setMostrarFormulario(false); setFiscalEditar(null); }}
          onGuardado={() => { setMostrarFormulario(false); setFiscalEditar(null); cargar(); }}
        />
      )}
      {confirmarBorrar && (
        <ModalConfirmar
          titulo="Eliminar fiscal"
          mensaje={`¿Estás seguro que deseas eliminar a ${confirmarBorrar.nombre}? Esta acción no se puede deshacer y podría afectar legajos u oficios asignados.`}
          textoConfirmar="Eliminar Fiscal"
          onCancelar={() => setConfirmarBorrar(null)}
          onConfirmar={() => borrar(confirmarBorrar)}
        />
      )}
    </motion.div>
  );
}
