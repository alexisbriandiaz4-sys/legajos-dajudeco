"use client";

import { useState, useEffect } from "react";
import { X, Plus, Trash2 } from "lucide-react";

interface Victima { nombre: string; dni?: string; telefono?: string; email?: string; }
interface Dispositivo { tipo: string; marca?: string; modelo?: string; imei?: string; color?: string; }
interface FiscalOpcion { id: string; nombre: string; fiscalia?: string; email?: string; activo: boolean; }

interface LegajoEditar {
  id: string; numero: string; caratula: string; cuij?: string;
  delito: string; fechaHecho: string; estado: string; observaciones?: string;
  fiscal?: string; emailRespuesta?: string;
  victimas: Victima[]; dispositivos: Dispositivo[];
}

interface Props {
  onCerrar: () => void;
  onGuardado: () => void;
  legajoEditar?: LegajoEditar;
}

const dispositivoVacio = (): Dispositivo => ({ tipo: "Celular", marca: "", modelo: "", imei: "", color: "" });
const victimaVacia = (): Victima => ({ nombre: "", dni: "", telefono: "", email: "" });

function formatFecha(f: string) {
  if (!f) return "";
  return f.split("T")[0];
}

export default function FormularioLegajo({ onCerrar, onGuardado, legajoEditar }: Props) {
  const esEdicion = !!legajoEditar;

  const [form, setForm] = useState({
    numero: legajoEditar?.numero ?? "",
    caratula: legajoEditar?.caratula ?? "",
    cuij: legajoEditar?.cuij ?? "",
    delito: legajoEditar?.delito ?? "",
    fechaHecho: legajoEditar ? formatFecha(legajoEditar.fechaHecho) : "",
    estado: legajoEditar?.estado ?? "Activo",
    observaciones: legajoEditar?.observaciones ?? "",
    fiscal: legajoEditar?.fiscal ?? "",
    emailRespuesta: legajoEditar?.emailRespuesta ?? "",
  });

  const [fiscalesOpciones, setFiscalesOpciones] = useState<FiscalOpcion[]>([]);

  useEffect(() => {
    fetch("/api/fiscales").then(r => r.json()).then(data => {
      if (Array.isArray(data)) setFiscalesOpciones(data.filter((f: FiscalOpcion) => f.activo !== false));
    }).catch(() => {});
  }, []);

  function seleccionarFiscal(id: string) {
    if (!id) return;
    const f = fiscalesOpciones.find(f => f.id === id);
    if (!f) return;
    setForm(prev => ({
      ...prev,
      fiscal: f.fiscalia ? `${f.nombre} — ${f.fiscalia}` : f.nombre,
      emailRespuesta: f.email || prev.emailRespuesta,
    }));
  }

  const [victimas, setVictimas] = useState<Victima[]>(
    legajoEditar?.victimas?.length
      ? legajoEditar.victimas.map(v => ({ nombre: v.nombre, dni: v.dni ?? "", telefono: v.telefono ?? "", email: (v as any).email ?? "" }))
      : [victimaVacia()]
  );

  const [dispositivos, setDispositivos] = useState<Dispositivo[]>(
    legajoEditar?.dispositivos?.length
      ? legajoEditar.dispositivos.map(d => ({ tipo: d.tipo, marca: d.marca ?? "", modelo: d.modelo ?? "", imei: d.imei ?? "", color: d.color ?? "" }))
      : [dispositivoVacio()]
  );

  const [guardando, setGuardando] = useState(false);
  const [error, setError] = useState("");

  function actualizarVictima(i: number, campo: keyof Victima, valor: string) {
    setVictimas(prev => prev.map((v, idx) => idx === i ? { ...v, [campo]: valor } : v));
  }
  function actualizarDispositivo(i: number, campo: keyof Dispositivo, valor: string) {
    setDispositivos(prev => prev.map((d, idx) => idx === i ? { ...d, [campo]: valor } : d));
  }

  async function guardar() {
    if (!form.numero || !form.caratula || !form.delito || !form.fechaHecho) {
      setError("Completá los campos obligatorios: número, carátula, delito y fecha"); return;
    }
    if (victimas[0].nombre === "") { setError("Ingresá al menos una víctima"); return; }
    setGuardando(true); setError("");
    try {
      const body = {
        ...form,
        victimas: victimas.filter(v => v.nombre.trim() !== ""),
        dispositivos: dispositivos.filter(d => (d.marca ?? "").trim() !== "" || (d.imei ?? "").trim() !== ""),
      };

      const res = await fetch(
        esEdicion ? `/api/legajos/${legajoEditar!.id}` : "/api/legajos",
        {
          method: esEdicion ? "PUT" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      const data = await res.json();
      if (!res.ok) { setError(data.error ?? "Error al guardar"); return; }
      onGuardado();
    } catch { setError("Error de conexión"); }
    finally { setGuardando(false); }
  }

  const inputClass = "w-full rounded-lg px-3 py-2 text-sm outline-none";
  const inputStyle = { background: "var(--bg-tertiary)", border: "1px solid var(--border)", color: "var(--text-primary)" };
  const labelStyle = { color: "var(--text-muted)" };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.6)" }}>
      <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)" }} className="w-full max-w-2xl rounded-2xl max-h-[90vh] overflow-y-auto">

        {/* Header */}
        <div style={{ borderBottom: "1px solid var(--border)" }} className="flex items-center justify-between p-5">
          <h3 style={{ color: "var(--text-primary)" }} className="font-bold text-lg">
            {esEdicion ? `Editar Legajo #${legajoEditar!.numero}` : "Nuevo Legajo"}
          </h3>
          <button onClick={onCerrar} style={{ color: "var(--text-muted)" }} className="hover:opacity-70">
            <X size={20} />
          </button>
        </div>

        <div className="p-5 space-y-6">

          {/* Datos del legajo */}
          <div>
            <p style={{ color: "var(--text-muted)" }} className="text-xs font-semibold uppercase tracking-wide mb-3">Datos del legajo</p>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label style={labelStyle} className="text-xs mb-1 block">Número de legajo *</label>
                <input value={form.numero} onChange={e => setForm({ ...form, numero: e.target.value })}
                  style={inputStyle} className={inputClass} placeholder="Ej: 2024-001"
                  disabled={esEdicion}
                />
              </div>
              <div>
                <label style={labelStyle} className="text-xs mb-1 block">CUIJ</label>
                <input value={form.cuij} onChange={e => setForm({ ...form, cuij: e.target.value })}
                  style={inputStyle} className={inputClass} placeholder="Ej: 21-00000000-0" />
              </div>
              <div className="col-span-2">
                <label style={labelStyle} className="text-xs mb-1 block">Carátula *</label>
                <input value={form.caratula} onChange={e => setForm({ ...form, caratula: e.target.value })}
                  style={inputStyle} className={inputClass} placeholder="Ej: GOMEZ, Juan s/ Robo" />
              </div>
              <div>
                <label style={labelStyle} className="text-xs mb-1 block">Delito *</label>
                <input value={form.delito} onChange={e => setForm({ ...form, delito: e.target.value })}
                  style={inputStyle} className={inputClass} placeholder="Ej: Robo calificado" />
              </div>
              <div>
                <label style={labelStyle} className="text-xs mb-1 block">Fecha del hecho *</label>
                <input type="date" value={form.fechaHecho} onChange={e => setForm({ ...form, fechaHecho: e.target.value })}
                  style={inputStyle} className={inputClass} />
              </div>
              <div>
                <label style={labelStyle} className="text-xs mb-1 block">Estado</label>
                <select value={form.estado} onChange={e => setForm({ ...form, estado: e.target.value })}
                  style={inputStyle} className={inputClass}>
                  <option value="Activo">Activo</option>
                  <option value="En seguimiento">En seguimiento</option>
                  <option value="Cerrado">Cerrado</option>
                  <option value="Inactivo">Inactivo</option>
                </select>
              </div>

              {/* Selector de fiscal */}
              <div>
                <label style={labelStyle} className="text-xs mb-1 block">Fiscal a cargo</label>
                {fiscalesOpciones.length > 0 ? (
                  <select
                    onChange={e => seleccionarFiscal(e.target.value)}
                    style={inputStyle} className={inputClass}
                    defaultValue="">
                    <option value="">Seleccionar fiscal...</option>
                    {fiscalesOpciones.map(f => (
                      <option key={f.id} value={f.id}>
                        {f.nombre}{f.fiscalia ? ` — ${f.fiscalia}` : ""}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input value={form.fiscal} onChange={e => setForm({ ...form, fiscal: e.target.value })}
                    style={inputStyle} className={inputClass} placeholder="Ej: Fiscalía N° 505 - Pedro Machado" />
                )}
              </div>

              {/* Email — se autocompleta al seleccionar fiscal pero se puede editar */}
              <div>
                <label style={labelStyle} className="text-xs mb-1 block">Email oficial de respuesta</label>
                <input value={form.emailRespuesta} onChange={e => setForm({ ...form, emailRespuesta: e.target.value })}
                  style={inputStyle} className={inputClass} placeholder="Se autocompleta al elegir fiscal" />
              </div>

              {/* Fiscal seleccionado — muestra el valor actual */}
              {form.fiscal && (
                <div className="col-span-2">
                  <div style={{ background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.2)" }} className="rounded-lg px-3 py-2 flex items-center justify-between">
                    <span style={{ color: "var(--text-secondary)" }} className="text-xs">⚖️ {form.fiscal}</span>
                    <button onClick={() => setForm({ ...form, fiscal: "", emailRespuesta: "" })}
                      style={{ color: "var(--text-muted)" }} className="hover:opacity-70 text-xs">✕</button>
                  </div>
                </div>
              )}

              <div className="col-span-2">
                <label style={labelStyle} className="text-xs mb-1 block">Observaciones</label>
                <input value={form.observaciones} onChange={e => setForm({ ...form, observaciones: e.target.value })}
                  style={inputStyle} className={inputClass} placeholder="Notas adicionales..." />
              </div>
            </div>
          </div>

          {/* Víctimas */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <p style={{ color: "var(--text-muted)" }} className="text-xs font-semibold uppercase tracking-wide">Víctimas</p>
              <button onClick={() => setVictimas(p => [...p, victimaVacia()])}
                style={{ color: "var(--accent)" }} className="text-xs flex items-center gap-1 hover:opacity-80">
                <Plus size={13} /> Agregar
              </button>
            </div>
            <div className="space-y-3">
              {victimas.map((v, i) => (
                <div key={i} style={{ background: "var(--bg-tertiary)", border: "1px solid var(--border)" }} className="rounded-lg p-3">
                  <div className="flex justify-between items-center mb-2">
                    <span style={{ color: "var(--text-muted)" }} className="text-xs">Víctima {i + 1}</span>
                    {victimas.length > 1 && (
                      <button onClick={() => setVictimas(p => p.filter((_, idx) => idx !== i))}
                        style={{ color: "var(--danger)" }} className="hover:opacity-80"><Trash2 size={13} /></button>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {([["nombre", "Nombre y apellido *", "text"], ["dni", "DNI", "text"], ["telefono", "Teléfono", "tel"], ["email", "Email", "email"]] as const).map(([campo, label, type]) => (
                      <div key={campo}>
                        <label style={labelStyle} className="text-xs mb-1 block">{label}</label>
                        <input type={type} value={v[campo] ?? ""} onChange={e => actualizarVictima(i, campo, e.target.value)}
                          style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)", color: "var(--text-primary)" }}
                          className={inputClass} placeholder={label} />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dispositivos */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <p style={{ color: "var(--text-muted)" }} className="text-xs font-semibold uppercase tracking-wide">Dispositivos</p>
              <button onClick={() => setDispositivos(p => [...p, dispositivoVacio()])}
                style={{ color: "var(--accent)" }} className="text-xs flex items-center gap-1 hover:opacity-80">
                <Plus size={13} /> Agregar
              </button>
            </div>
            <div className="space-y-3">
              {dispositivos.map((d, i) => (
                <div key={i} style={{ background: "var(--bg-tertiary)", border: "1px solid var(--border)" }} className="rounded-lg p-3">
                  <div className="flex justify-between items-center mb-2">
                    <span style={{ color: "var(--text-muted)" }} className="text-xs">Dispositivo {i + 1}</span>
                    {dispositivos.length > 1 && (
                      <button onClick={() => setDispositivos(p => p.filter((_, idx) => idx !== i))}
                        style={{ color: "var(--danger)" }} className="hover:opacity-80"><Trash2 size={13} /></button>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label style={labelStyle} className="text-xs mb-1 block">Tipo</label>
                      <select value={d.tipo} onChange={e => actualizarDispositivo(i, "tipo", e.target.value)}
                        style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)", color: "var(--text-primary)" }}
                        className={inputClass}>
                        <option>Celular</option><option>Tablet</option><option>Laptop</option><option>Otro</option>
                      </select>
                    </div>
                    {([["marca", "Marca"], ["modelo", "Modelo"], ["imei", "IMEI"], ["color", "Color"]] as const).map(([campo, label]) => (
                      <div key={campo}>
                        <label style={labelStyle} className="text-xs mb-1 block">{label}</label>
                        <input value={d[campo] ?? ""} onChange={e => actualizarDispositivo(i, campo, e.target.value)}
                          style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)", color: "var(--text-primary)" }}
                          className={inputClass} placeholder={label} />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {error && <p style={{ color: "var(--danger)" }} className="text-sm text-center">{error}</p>}

          <div className="flex gap-3">
            <button onClick={onCerrar}
              style={{ background: "var(--bg-tertiary)", color: "var(--text-secondary)", border: "1px solid var(--border)" }}
              className="flex-1 py-2.5 rounded-lg text-sm font-medium hover:opacity-80 transition">
              Cancelar
            </button>
            <button onClick={guardar} disabled={guardando}
              style={{ background: "var(--accent)" }}
              className="flex-1 py-2.5 rounded-lg text-sm font-medium text-white hover:opacity-90 transition disabled:opacity-50">
              {guardando ? "Guardando..." : esEdicion ? "Guardar cambios" : "Guardar legajo"}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}