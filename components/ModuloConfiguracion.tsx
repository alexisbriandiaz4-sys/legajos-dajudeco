"use client";

import { useState, useEffect } from "react";
import { Users, Scale, Download, Plus, Pencil, Trash2, X, Eye, EyeOff, CheckCircle, XCircle, Shield, User, Settings } from "lucide-react";
import { toast } from "sonner";

interface Fiscal {
  id: string; nombre: string; cargo?: string; fiscalia?: string;
  secretario?: string; dniSecretario?: string; dni?: string;
  email?: string; emailSecretario?: string; direccion?: string;
  telefono?: string; telefonoMovil?: string; activo: boolean;
}

interface Usuario {
  id: string; nombre: string; usuario: string;
  rol: string; activo: boolean; createdAt: string;
}

type Seccion = "general" | "fiscales" | "usuarios" | "backup";

const inputStyle = { background: "var(--bg-tertiary)", border: "1px solid var(--border)", color: "var(--text-primary)" };
const inputClass = "w-full rounded-lg px-3 py-2 text-sm outline-none";
const labelStyle = { color: "var(--text-muted)" };

export default function ModuloConfiguracion() {
  const [seccion, setSeccion] = useState<Seccion>("general");

  return (
    <div className="space-y-4">
      <div>
        <h2 style={{ color: "var(--text-primary)" }} className="text-xl font-bold">Configuración</h2>
        <p style={{ color: "var(--text-muted)" }} className="text-sm">Gestión general, fiscales, usuarios y backups</p>
      </div>

      <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)" }} className="flex rounded-xl p-1 gap-1">
        {([
          { key: "general",  label: "General",  icon: <Settings size={15} /> },
          { key: "fiscales", label: "Fiscales",  icon: <Scale size={15} /> },
          { key: "usuarios", label: "Usuarios",  icon: <Users size={15} /> },
          { key: "backup",   label: "Backup",    icon: <Download size={15} /> },
        ] as { key: Seccion; label: string; icon: React.ReactNode }[]).map(({ key, label, icon }) => (
          <button key={key} onClick={() => setSeccion(key)}
            style={seccion === key ? { background: "var(--accent)", color: "#fff" } : { color: "var(--text-muted)" }}
            className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-medium transition">
            {icon} {label}
          </button>
        ))}
      </div>

      {seccion === "general"  && <SeccionGeneral />}
      {seccion === "fiscales" && <SeccionFiscales />}
      {seccion === "usuarios" && <SeccionUsuarios />}
      {seccion === "backup"   && <SeccionBackup />}
    </div>
  );
}

function SeccionGeneral() {
  const [email, setEmail] = useState("");
  const [diasMedia, setDiasMedia] = useState(2);
  const [diasAlta, setDiasAlta] = useState(3);
  const [diasCritica, setDiasCritica] = useState(7);
  const [guardando, setGuardando] = useState(false);

  useEffect(() => {
    fetch("/api/configuracion")
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
    <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)" }} className="rounded-xl p-6 space-y-5">
      <h3 style={{ color: "var(--text-primary)" }} className="font-semibold">Configuración general</h3>

      {/* Email */}
      <div>
        <label style={labelStyle} className="text-xs mb-1 block">
          Correo de respuesta para oficios fiscales
        </label>
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={inputStyle}
          className={inputClass}
          placeholder="Ej: abdiaz@santafe.gov.ar"
        />
        <p style={{ color: "var(--text-muted)" }} className="text-xs mt-1">
          Este correo aparecerá al final de cada oficio fiscal generado.
        </p>
      </div>

      {/* Días de alerta */}
      <div>
        <p style={{ color: "var(--text-primary)" }} className="text-sm font-medium mb-3">Días sin respuesta para alertas</p>
        <div className="grid grid-cols-3 gap-3">
          <div>
            <label style={{ color: "#eab308" }} className="text-xs mb-1 block font-medium">⚠ Media</label>
            <input
              type="number"
              min={1}
              max={30}
              value={diasMedia}
              onChange={e => setDiasMedia(Number(e.target.value))}
              style={inputStyle}
              className={inputClass}
            />
            <p style={{ color: "var(--text-muted)" }} className="text-xs mt-1">días</p>
          </div>
          <div>
            <label style={{ color: "#f97316" }} className="text-xs mb-1 block font-medium">🔶 Alta</label>
            <input
              type="number"
              min={1}
              max={30}
              value={diasAlta}
              onChange={e => setDiasAlta(Number(e.target.value))}
              style={inputStyle}
              className={inputClass}
            />
            <p style={{ color: "var(--text-muted)" }} className="text-xs mt-1">días</p>
          </div>
          <div>
            <label style={{ color: "#ef4444" }} className="text-xs mb-1 block font-medium">🔴 Crítica</label>
            <input
              type="number"
              min={1}
              max={30}
              value={diasCritica}
              onChange={e => setDiasCritica(Number(e.target.value))}
              style={inputStyle}
              className={inputClass}
            />
            <p style={{ color: "var(--text-muted)" }} className="text-xs mt-1">días</p>
          </div>
        </div>
        <p style={{ color: "var(--text-muted)" }} className="text-xs mt-2">
          Un oficio enviado sin respuesta generará alerta según los días configurados.
        </p>
      </div>

      <button onClick={guardar} disabled={guardando} style={{ background: "var(--accent)" }}
        className="w-full py-2.5 rounded-xl text-white text-sm font-medium hover:opacity-90 transition disabled:opacity-50">
        {guardando ? "Guardando..." : "Guardar"}
      </button>
    </div>
  );
}

function SeccionFiscales() {
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
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <p style={{ color: "var(--text-muted)" }} className="text-sm">{fiscales.length} fiscal{fiscales.length !== 1 ? "es" : ""} registrado{fiscales.length !== 1 ? "s" : ""}</p>
        <button onClick={() => { setFiscalEditar(null); setMostrarFormulario(true); }}
          style={{ background: "var(--accent)" }}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-white text-sm font-medium hover:opacity-90 transition">
          <Plus size={15} /> Nuevo fiscal
        </button>
      </div>

      {cargando ? (
        <p style={{ color: "var(--text-muted)" }} className="text-sm text-center py-8">Cargando...</p>
      ) : fiscales.length === 0 ? (
        <div className="text-center py-16">
          <Scale size={36} style={{ color: "var(--text-muted)" }} className="mx-auto mb-3" />
          <p style={{ color: "var(--text-muted)" }} className="text-sm">No hay fiscales registrados</p>
        </div>
      ) : (
        <div className="space-y-2">
          {fiscales.map(f => (
            <div key={f.id}
              style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)", opacity: f.activo ? 1 : 0.5 }}
              className="rounded-xl p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p style={{ color: "var(--text-primary)" }} className="font-semibold text-sm">{f.nombre}</p>
                    <span style={f.activo
                      ? { background: "rgba(34,197,94,0.15)", color: "var(--success)" }
                      : { background: "rgba(100,100,100,0.15)", color: "var(--text-muted)" }
                    } className="text-xs px-2 py-0.5 rounded-full">
                      {f.activo ? "Activo" : "Inactivo"}
                    </span>
                  </div>
                  <p style={{ color: "var(--text-muted)" }} className="text-xs">{f.fiscalia || "—"}</p>
                  <div className="flex gap-4 mt-1 flex-wrap">
                    {f.email && <span style={{ color: "var(--text-muted)" }} className="text-xs">✉ {f.email}</span>}
                    {f.telefono && <span style={{ color: "var(--text-muted)" }} className="text-xs">📞 {f.telefono}</span>}
                    {f.secretario && <span style={{ color: "var(--text-muted)" }} className="text-xs">👤 Sec: {f.secretario}</span>}
                  </div>
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  <button onClick={() => { setFiscalEditar(f); setMostrarFormulario(true); }}
                    style={{ color: "var(--accent)" }} className="p-1.5 rounded-lg hover:opacity-70 transition" title="Editar">
                    <Pencil size={14} />
                  </button>
                  <button onClick={() => toggleActivo(f)}
                    style={{ color: f.activo ? "var(--warning)" : "var(--success)" }}
                    className="p-1.5 rounded-lg hover:opacity-70 transition"
                    title={f.activo ? "Desactivar" : "Activar"}>
                    {f.activo ? <XCircle size={14} /> : <CheckCircle size={14} />}
                  </button>
                  <button onClick={() => setConfirmarBorrar(f)}
                    style={{ color: "var(--danger)" }} className="p-1.5 rounded-lg hover:opacity-70 transition" title="Eliminar">
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
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
          mensaje={`¿Eliminar a ${confirmarBorrar.nombre}? Esta acción no se puede deshacer.`}
          onCancelar={() => setConfirmarBorrar(null)}
          onConfirmar={() => borrar(confirmarBorrar)}
        />
      )}
    </div>
  );
}

function FormularioFiscal({ fiscal, onCerrar, onGuardado }: {
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
    if (!nombre.trim()) { setError("El nombre es obligatorio"); return; }
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
    } catch { setError("Error de conexión"); }
    finally { setGuardando(false); }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.6)" }}>
      <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)" }} className="w-full max-w-2xl rounded-2xl max-h-[90vh] overflow-y-auto">
        <div style={{ borderBottom: "1px solid var(--border)" }} className="flex items-center justify-between p-5">
          <h3 style={{ color: "var(--text-primary)" }} className="font-bold text-lg">
            {esEdicion ? "Editar Fiscal" : "Nuevo Fiscal"}
          </h3>
          <button onClick={onCerrar} style={{ color: "var(--text-muted)" }} className="hover:opacity-70"><X size={20} /></button>
        </div>
        <div className="p-5 space-y-5">
          <div>
            <p style={{ color: "var(--text-muted)" }} className="text-xs font-semibold uppercase tracking-wide mb-3">Datos del fiscal / titular</p>
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2">
                <label style={labelStyle} className="text-xs mb-1 block">Nombre y apellido *</label>
                <input value={nombre} onChange={e => setNombre(e.target.value)} style={inputStyle} className={inputClass} placeholder="Nombre y apellido" />
              </div>
              <div>
                <label style={labelStyle} className="text-xs mb-1 block">Cargo</label>
                <input value={cargo} onChange={e => setCargo(e.target.value)} style={inputStyle} className={inputClass} placeholder="Ej: Fiscal" />
              </div>
              <div>
                <label style={labelStyle} className="text-xs mb-1 block">Fiscalía / Organismo</label>
                <input value={fiscalia} onChange={e => setFiscalia(e.target.value)} style={inputStyle} className={inputClass} placeholder="Ej: Fiscalía N° 505" />
              </div>
              <div>
                <label style={labelStyle} className="text-xs mb-1 block">DNI</label>
                <input value={dni} onChange={e => setDni(e.target.value)} style={inputStyle} className={inputClass} placeholder="DNI" />
              </div>
              <div>
                <label style={labelStyle} className="text-xs mb-1 block">Email oficial</label>
                <input value={email} onChange={e => setEmail(e.target.value)} style={inputStyle} className={inputClass} placeholder="Ej: fiscal@mpa.gov.ar" />
              </div>
              <div>
                <label style={labelStyle} className="text-xs mb-1 block">Teléfono fijo</label>
                <input value={telefono} onChange={e => setTelefono(e.target.value)} style={inputStyle} className={inputClass} placeholder="Teléfono fijo" />
              </div>
              <div>
                <label style={labelStyle} className="text-xs mb-1 block">Teléfono móvil</label>
                <input value={telefonoMovil} onChange={e => setTelefonoMovil(e.target.value)} style={inputStyle} className={inputClass} placeholder="Teléfono móvil" />
              </div>
              <div className="col-span-2">
                <label style={labelStyle} className="text-xs mb-1 block">Dirección</label>
                <input value={direccion} onChange={e => setDireccion(e.target.value)} style={inputStyle} className={inputClass} placeholder="Ej: San Martín 1234, Rafaela" />
              </div>
            </div>
          </div>
          <div>
            <p style={{ color: "var(--text-muted)" }} className="text-xs font-semibold uppercase tracking-wide mb-3">Datos del secretario</p>
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2">
                <label style={labelStyle} className="text-xs mb-1 block">Nombre y apellido</label>
                <input value={secretario} onChange={e => setSecretario(e.target.value)} style={inputStyle} className={inputClass} placeholder="Nombre y apellido" />
              </div>
              <div>
                <label style={labelStyle} className="text-xs mb-1 block">DNI</label>
                <input value={dniSecretario} onChange={e => setDniSecretario(e.target.value)} style={inputStyle} className={inputClass} placeholder="DNI" />
              </div>
              <div>
                <label style={labelStyle} className="text-xs mb-1 block">Email</label>
                <input value={emailSecretario} onChange={e => setEmailSecretario(e.target.value)} style={inputStyle} className={inputClass} placeholder="Email" />
              </div>
            </div>
          </div>
          {error && <p style={{ color: "var(--danger)" }} className="text-sm text-center">{error}</p>}
          <div className="flex gap-3">
            <button onClick={onCerrar}
              style={{ background: "var(--bg-tertiary)", color: "var(--text-secondary)", border: "1px solid var(--border)" }}
              className="flex-1 py-2.5 rounded-lg text-sm font-medium hover:opacity-80 transition">
              Cancelar
            </button>
            <button onClick={guardar} disabled={guardando} style={{ background: "var(--accent)" }}
              className="flex-1 py-2.5 rounded-lg text-sm font-medium text-white hover:opacity-90 transition disabled:opacity-50">
              {guardando ? "Guardando..." : esEdicion ? "Guardar cambios" : "Crear fiscal"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SeccionUsuarios() {
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
        toast.success(`Usuario ${!u.activo ? "activado" : "desactivado"}`);
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
        toast.success(`Usuario ${u.nombre} eliminado`);
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
      <div className="text-center py-16">
        <Shield size={36} style={{ color: "var(--text-muted)" }} className="mx-auto mb-3" />
        <p style={{ color: "var(--text-muted)" }} className="text-sm">Solo los administradores pueden gestionar usuarios</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <p style={{ color: "var(--text-muted)" }} className="text-sm">{usuarios.length} usuario{usuarios.length !== 1 ? "s" : ""}</p>
        <button onClick={() => { setUsuarioEditar(null); setMostrarFormulario(true); }}
          style={{ background: "var(--accent)" }}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-white text-sm font-medium hover:opacity-90 transition">
          <Plus size={15} /> Nuevo usuario
        </button>
      </div>

      {cargando ? (
        <p style={{ color: "var(--text-muted)" }} className="text-sm text-center py-8">Cargando...</p>
      ) : (
        <div className="space-y-2">
          {usuarios.map(u => (
            <div key={u.id}
              style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)", opacity: u.activo ? 1 : 0.5 }}
              className="rounded-xl p-4">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div style={{ background: u.rol === "admin" ? "rgba(245,158,11,0.15)" : "rgba(59,130,246,0.15)" }} className="p-2 rounded-lg">
                    {u.rol === "admin" ? <Shield size={16} style={{ color: "var(--warning)" }} /> : <User size={16} style={{ color: "var(--accent)" }} />}
                  </div>
                  <div>
                    <p style={{ color: "var(--text-primary)" }} className="text-sm font-semibold">{u.nombre}</p>
                    <p style={{ color: "var(--text-muted)" }} className="text-xs">@{u.usuario} · {u.rol === "admin" ? "Administrador" : "Investigador"}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span style={u.activo
                    ? { background: "rgba(34,197,94,0.15)", color: "var(--success)" }
                    : { background: "rgba(100,100,100,0.15)", color: "var(--text-muted)" }
                  } className="text-xs px-2 py-0.5 rounded-full">
                    {u.activo ? "Activo" : "Inactivo"}
                  </span>
                  <button onClick={() => { setUsuarioEditar(u); setMostrarFormulario(true); }}
                    style={{ color: "var(--accent)" }} className="p-1.5 rounded-lg hover:opacity-70 transition" title="Editar">
                    <Pencil size={14} />
                  </button>
                  <button onClick={() => toggleActivo(u)}
                    style={{ color: u.activo ? "var(--warning)" : "var(--success)" }}
                    className="p-1.5 rounded-lg hover:opacity-70 transition"
                    title={u.activo ? "Desactivar" : "Activar"}>
                    {u.activo ? <XCircle size={14} /> : <CheckCircle size={14} />}
                  </button>
                  <button onClick={() => setConfirmarBorrar(u)}
                    style={{ color: "var(--danger)" }} className="p-1.5 rounded-lg hover:opacity-70 transition" title="Eliminar">
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
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
          mensaje={`¿Eliminar al usuario ${confirmarBorrar.nombre}? Esta acción no se puede deshacer.`}
          onCancelar={() => setConfirmarBorrar(null)}
          onConfirmar={() => borrar(confirmarBorrar)}
        />
      )}
    </div>
  );
}

function FormularioUsuario({ usuario, onCerrar, onGuardado }: { usuario: Usuario | null; onCerrar: () => void; onGuardado: () => void }) {
  const esEdicion = !!usuario;
  const [form, setForm] = useState({
    nombre: usuario?.nombre ?? "", usuario: usuario?.usuario ?? "",
    password: "", confirmar: "", rol: usuario?.rol ?? "investigador",
  });
  const [verPassword, setVerPassword] = useState(false);
  const [guardando, setGuardando] = useState(false);
  const [error, setError] = useState("");

  async function guardar() {
    if (!form.nombre.trim()) { setError("El nombre es obligatorio"); return; }
    if (!form.usuario.trim()) { setError("El nombre de usuario es obligatorio"); return; }
    if (!esEdicion && !form.password) { setError("La contraseña es obligatoria"); return; }
    if (form.password && form.password !== form.confirmar) { setError("Las contraseñas no coinciden"); return; }
    if (form.password && form.password.length < 6) { setError("La contraseña debe tener al menos 6 caracteres"); return; }
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
    } catch { setError("Error de conexión"); }
    finally { setGuardando(false); }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.6)" }}>
      <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)" }} className="w-full max-w-md rounded-2xl">
        <div style={{ borderBottom: "1px solid var(--border)" }} className="flex items-center justify-between p-5">
          <h3 style={{ color: "var(--text-primary)" }} className="font-bold text-lg">
            {esEdicion ? "Editar Usuario" : "Nuevo Usuario"}
          </h3>
          <button onClick={onCerrar} style={{ color: "var(--text-muted)" }} className="hover:opacity-70"><X size={20} /></button>
        </div>
        <div className="p-5 space-y-4">
          <div>
            <label style={labelStyle} className="text-xs mb-1 block">Nombre completo *</label>
            <input value={form.nombre} onChange={e => setForm({ ...form, nombre: e.target.value })}
              style={inputStyle} className={inputClass} placeholder="Ej: Juan García" />
          </div>
          <div>
            <label style={labelStyle} className="text-xs mb-1 block">Nombre de usuario *</label>
            <input value={form.usuario} onChange={e => setForm({ ...form, usuario: e.target.value })}
              style={inputStyle} className={inputClass} placeholder="Ej: jgarcia" />
          </div>
          <div>
            <label style={labelStyle} className="text-xs mb-1 block">
              {esEdicion ? "Nueva contraseña (dejar vacío para no cambiar)" : "Contraseña *"}
            </label>
            <div className="relative">
              <input type={verPassword ? "text" : "password"} value={form.password}
                onChange={e => setForm({ ...form, password: e.target.value })}
                style={inputStyle} className={inputClass + " pr-10"} placeholder="Mínimo 6 caracteres" />
              <button onClick={() => setVerPassword(v => !v)} style={{ color: "var(--text-muted)" }}
                className="absolute right-3 top-1/2 -translate-y-1/2 hover:opacity-70">
                {verPassword ? <EyeOff size={15} /> : <Eye size={15} />}
              </button>
            </div>
          </div>
          {form.password && (
            <div>
              <label style={labelStyle} className="text-xs mb-1 block">Confirmar contraseña *</label>
              <input type={verPassword ? "text" : "password"} value={form.confirmar}
                onChange={e => setForm({ ...form, confirmar: e.target.value })}
                style={inputStyle} className={inputClass} placeholder="Repetí la contraseña" />
            </div>
          )}
          <div>
            <label style={labelStyle} className="text-xs mb-1 block">Rol</label>
            <div className="flex gap-2">
              {[["investigador", "Investigador"], ["admin", "Administrador"]].map(([val, lbl]) => (
                <button key={val} onClick={() => setForm({ ...form, rol: val })}
                  style={form.rol === val
                    ? { background: "var(--accent)", color: "#fff", border: "1px solid var(--accent)" }
                    : { background: "var(--bg-tertiary)", color: "var(--text-muted)", border: "1px solid var(--border)" }
                  }
                  className="flex-1 py-2 rounded-lg text-sm transition">
                  {lbl}
                </button>
              ))}
            </div>
          </div>
          {error && <p style={{ color: "var(--danger)" }} className="text-sm text-center">{error}</p>}
          <div className="flex gap-3 pt-1">
            <button onClick={onCerrar}
              style={{ background: "var(--bg-tertiary)", color: "var(--text-secondary)", border: "1px solid var(--border)" }}
              className="flex-1 py-2.5 rounded-lg text-sm font-medium hover:opacity-80 transition">
              Cancelar
            </button>
            <button onClick={guardar} disabled={guardando} style={{ background: "var(--accent)" }}
              className="flex-1 py-2.5 rounded-lg text-sm font-medium text-white hover:opacity-90 transition disabled:opacity-50">
              {guardando ? "Guardando..." : esEdicion ? "Guardar cambios" : "Crear usuario"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SeccionBackup() {
  const [generando, setGenerando] = useState(false);

  async function generarBackup() {
    setGenerando(true);
    try {
      const [legajosRes, oficiosRes, fiscalesRes] = await Promise.all([
        fetch("/api/legajos"), fetch("/api/oficios"), fetch("/api/fiscales"),
      ]);
      const legajos = await legajosRes.json();
      const oficios = await oficiosRes.json();
      const fiscales = await fiscalesRes.json();
      const { utils, writeFile } = await import("xlsx");
      const wb = utils.book_new();

      utils.book_append_sheet(wb, utils.json_to_sheet(legajos.map((l: any) => ({
        "N° Legajo": l.numero, "Carátula": l.caratula, "CUIJ": l.cuij || "",
        "Delito": l.delito, "Fecha del hecho": new Date(l.fechaHecho).toLocaleDateString("es-AR"),
        "Estado": l.estado, "Fiscal": l.fiscal || "", "Email respuesta": l.emailRespuesta || "",
        "Observaciones": l.observaciones || "", "Fecha creación": new Date(l.createdAt).toLocaleDateString("es-AR"),
      }))), "Legajos");

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
        "DNI": f.dni || "", "Email": f.email || "", "Teléfono": f.telefono || "",
        "Móvil": f.telefonoMovil || "", "Dirección": f.direccion || "",
        "Secretario": f.secretario || "", "DNI Secretario": f.dniSecretario || "",
        "Email Secretario": f.emailSecretario || "", "Activo": f.activo ? "Sí" : "No",
      }))), "Fiscales");

      const fecha = new Date().toLocaleDateString("es-AR").replace(/\//g, "-");
      writeFile(wb, `Backup_Legajos_${fecha}.xlsx`);
      toast.success("Backup generado y descargado correctamente");
    } catch (e) {
      console.error(e);
      toast.error("Error al generar el backup");
    } finally {
      setGenerando(false);
    }
  }

  return (
    <div className="space-y-4">
      <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)" }} className="rounded-xl p-6 space-y-4">
        <div className="flex items-start gap-4">
          <div style={{ background: "rgba(34,197,94,0.15)" }} className="p-3 rounded-xl shrink-0">
            <Download size={22} style={{ color: "var(--success)" }} />
          </div>
          <div>
            <h3 style={{ color: "var(--text-primary)" }} className="font-semibold mb-1">Exportar base de datos a Excel</h3>
            <p style={{ color: "var(--text-muted)" }} className="text-sm">Genera un archivo Excel con todas las hojas: Legajos, Víctimas, Dispositivos, Oficios y Fiscales.</p>
          </div>
        </div>
        <div style={{ background: "var(--bg-tertiary)", border: "1px solid var(--border)" }} className="rounded-lg p-3 space-y-1">
          {["📁 Legajos — todos los casos registrados", "👤 Víctimas — datos de todas las víctimas",
            "📱 Dispositivos — IMEIs y datos de equipos", "📄 Oficios — todos los oficios y su estado",
            "⚖️ Fiscales — datos de fiscales cargados"].map(item => (
            <p key={item} style={{ color: "var(--text-secondary)" }} className="text-xs">{item}</p>
          ))}
        </div>
        <button onClick={generarBackup} disabled={generando} style={{ background: "var(--success)" }}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-white text-sm font-medium hover:opacity-90 transition disabled:opacity-50">
          <Download size={16} />
          {generando ? "Generando backup..." : "Descargar backup Excel"}
        </button>
      </div>
    </div>
  );
}

function ModalConfirmar({ titulo, mensaje, onCancelar, onConfirmar }: {
  titulo: string; mensaje: string; onCancelar: () => void; onConfirmar: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.6)" }}>
      <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)" }} className="rounded-xl p-6 max-w-sm w-full space-y-4">
        <h3 style={{ color: "var(--text-primary)" }} className="font-semibold">{titulo}</h3>
        <p style={{ color: "var(--text-secondary)" }} className="text-sm">{mensaje}</p>
        <div className="flex gap-3">
          <button onClick={onCancelar}
            style={{ background: "var(--bg-tertiary)", color: "var(--text-secondary)", border: "1px solid var(--border)" }}
            className="flex-1 py-2 rounded-lg text-sm hover:opacity-80 transition">
            Cancelar
          </button>
          <button onClick={onConfirmar} style={{ background: "var(--danger)" }}
            className="flex-1 py-2 rounded-lg text-sm text-white hover:opacity-80 transition">
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}