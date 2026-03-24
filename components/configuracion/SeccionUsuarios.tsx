"use client";

import { useState, useEffect } from "react";
import { Plus, Pencil, Trash2, XCircle, CheckCircle, Shield, User } from "lucide-react";
import { toast } from "sonner";
import { Usuario } from "./types";
import FormularioUsuario from "./FormularioUsuario";
import ModalConfirmar from "../ui/ModalConfirmar";
import { motion, AnimatePresence } from "framer-motion";

export default function SeccionUsuarios() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [cargando, setCargando] = useState(true);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [usuarioEditar, setUsuarioEditar] = useState<Usuario | null>(null);
  const [confirmarBorrar, setConfirmarBorrar] = useState<Usuario | null>(null);
  const [sinPermisos, setSinPermisos] = useState(false);

  useEffect(() => { cargar(); }, []);

  async function cargar() {
    setCargando(true);
    try {
      const res = await fetch("/api/usuarios");
      if (res.status === 403) { setSinPermisos(true); return; }
      if (res.ok) {
        setUsuarios(await res.json());
      } else {
        toast.error("Error al cargar los usuarios");
      }
    } catch {
      toast.error("Error de conexión al cargar usuarios");
    } finally {
      setCargando(false);
    }
  }

  async function toggleActivo(u: Usuario) {
    try {
      const res = await fetch(`/api/usuarios/${u.id}`, {
        method: "PUT", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ activo: !u.activo }),
      });
      if (res.ok) {
        toast.success(`Usuario activado o desactivado con éxito`);
        cargar();
      } else {
        toast.error("Error al actualizar el usuario");
      }
    } catch {
      toast.error("Error de conexión");
    }
  }

  async function borrar(u: Usuario) {
    try {
      const res = await fetch(`/api/usuarios/${u.id}`, { method: "DELETE" });
      if (res.ok) {
        toast.success(`Usuario eliminado`);
        setConfirmarBorrar(null);
        cargar();
      } else {
        toast.error("Error al eliminar el usuario");
      }
    } catch {
      toast.error("Error de conexión");
    }
  }

  if (sinPermisos) {
    return (
      <div className="text-center py-20 bg-[var(--bg-secondary)] rounded-2xl border border-[var(--border)] border-dashed">
        <Shield size={54} style={{ color: "var(--danger)" }} className="mx-auto mb-4 opacity-50" />
        <h3 className="text-lg font-bold mb-1" style={{ color: "var(--text-primary)" }}>Acceso Denegado</h3>
        <p style={{ color: "var(--text-muted)" }} className="text-sm">Solo los administradores pueden gestionar usuarios.</p>
      </div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
      <div className="flex items-center justify-between">
        <p style={{ color: "var(--text-muted)" }} className="text-sm font-medium">
          {usuarios.length} usuarios registrados
        </p>
        <button onClick={() => { setUsuarioEditar(null); setMostrarFormulario(true); }}
          style={{ background: "var(--accent)" }}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-white text-sm font-bold shadow-sm hover:shadow-md hover:scale-[1.02] transition-all">
          <Plus size={16} /> Nuevo usuario
        </button>
      </div>

      {cargando ? (
        <p style={{ color: "var(--text-muted)" }} className="text-sm text-center py-8">Cargando usuarios...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <AnimatePresence>
            {usuarios.map(u => (
              <motion.div key={u.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: u.activo ? 1 : 0.6, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)" }}
                className="rounded-xl p-5 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between gap-4">
                
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div style={{ background: u.rol === "admin" ? "rgba(245,158,11,0.15)" : "rgba(59,130,246,0.15)" }} className="p-3 rounded-xl shadow-inner border border-white/5">
                      {u.rol === "admin" ? <Shield size={22} style={{ color: "var(--warning)" }} /> : <User size={22} style={{ color: "var(--accent)" }} />}
                    </div>
                    <div>
                      <p style={{ color: "var(--text-primary)" }} className="text-base font-bold">{u.nombre}</p>
                      <p style={{ color: "var(--text-secondary)" }} className="text-xs font-medium">@{u.usuario}</p>
                    </div>
                  </div>
                  <span style={u.activo
                    ? { background: "rgba(34,197,94,0.15)", color: "var(--success)" }
                    : { background: "rgba(100,100,100,0.15)", color: "var(--text-muted)" }
                  } className="text-[10px] px-2.5 py-1 rounded-md uppercase font-bold tracking-widest shrink-0">
                    {u.activo ? "Activo" : "Inactivo"}
                  </span>
                </div>

                <div className="flex items-center justify-between border-t border-[var(--bg-tertiary)] pt-3">
                  <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
                    Rol: {u.rol === "admin" ? "Administrador" : "Investigador"}
                  </span>
                  
                  <div className="flex items-center gap-1.5 opacity-100 sm:opacity-50 group-hover:opacity-100 transition-opacity">
                    <button onClick={() => { setUsuarioEditar(u); setMostrarFormulario(true); }}
                      style={{ color: "var(--text-secondary)", background: "var(--bg-tertiary)" }} className="p-2 rounded-lg hover:bg-black/10 transition" title="Editar">
                      <Pencil size={15} />
                    </button>
                    <button onClick={() => toggleActivo(u)}
                      style={{ color: u.activo ? "var(--warning)" : "var(--success)", background: "var(--bg-tertiary)" }}
                      className="p-2 rounded-lg hover:bg-black/10 transition" title={u.activo ? "Desactivar" : "Activar"}>
                      {u.activo ? <XCircle size={15} /> : <CheckCircle size={15} />}
                    </button>
                    <button onClick={() => setConfirmarBorrar(u)}
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
        <FormularioUsuario
          usuario={usuarioEditar}
          onCerrar={() => { setMostrarFormulario(false); setUsuarioEditar(null); }}
          onGuardado={() => { setMostrarFormulario(false); setUsuarioEditar(null); cargar(); }}
        />
      )}
      {confirmarBorrar && (
        <ModalConfirmar
          titulo="Eliminar usuario"
          mensaje="¿Estás seguro que deseas eliminar este usuario? Esta acción no se puede deshacer."
          textoConfirmar="Eliminar Usuario"
          onCancelar={() => setConfirmarBorrar(null)}
          onConfirmar={() => borrar(confirmarBorrar)}
        />
      )}
    </motion.div>
  );
}
