"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

interface Legajo {
  id: string; numero: string; caratula: string;
  victimas: { nombre: string; dni?: string; telefono?: string }[];
  dispositivos: { imei?: string; marca?: string; modelo?: string; tipo: string }[];
}

interface Props {
  onCerrar: () => void;
  onGuardado: () => void;
}

const OPERADORAS = ["Claro", "Personal", "Movistar", "Telecom", "Otra"];

const TIPOS_OPCIONES = [
  { valor: "Telefonía Fija", label: "Telefonía Fija" },
  { valor: "Telefonía Móvil", label: "Telefonía Móvil" },
  { valor: "IMEI", label: "IMEI" },
  { valor: "Datos móviles / IP", label: "Datos móviles / IP" },
  { valor: "Llamadas al 911", label: "Llamadas al 911" },
];

const COLUMNAS_FIJA = [
  { key: "titularidad", label: "Titularidad y Nro. de Contacto / Referencia" },
  { key: "llamadas", label: "Listado Llamadas" },
  { key: "domicilioFacturacion", label: "Domicilio de Facturación" },
  { key: "domicilioInstalacion", label: "Domicilio de Instalación" },
];

const COLUMNAS_MOVIL = [
  { key: "titularidad", label: "Titularidad y Nro. de Contacto / Referencia" },
  { key: "llamadasSMS", label: "Listado de Llamadas y SMS con Celdas" },
  { key: "imeiAsociado", label: "Nro. IMEI Asociado" },
  { key: "simcard", label: "Nro. de Simcard" },
  { key: "trafico", label: "Tráfico de Datos con Celdas" },
];

const COLUMNAS_IMEI = [
  { key: "abonados", label: "Abonados que impactaron en el IMEI" },
  { key: "titularidades", label: "Titularidades de los abonados resultantes" },
];

const URGENCIAS = ["12 horas", "24 horas", "48 horas", "72 horas", "Sin urgencia"];

function getColumnasPorTipo(tipo: string) {
  if (tipo === "Telefonía Fija") return COLUMNAS_FIJA;
  if (tipo === "Telefonía Móvil") return COLUMNAS_MOVIL;
  if (tipo === "IMEI") return COLUMNAS_IMEI;
  return [];
}

export default function FormularioOficio({ onCerrar, onGuardado }: Props) {
  const [legajos, setLegajos] = useState<Legajo[]>([]);
  const [form, setForm] = useState({
    legajoId: "",
    operadora: "Claro",
    tipo: "Telefonía Móvil",
    urgencia: "48 horas",
    numero: "",
    fechaEnvio: "",
    observaciones: "",
  });
  const [columnasSeleccionadas, setColumnasSeleccionadas] = useState<string[]>([]);
  const [guardando, setGuardando] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/legajos").then(r => r.json()).then(data => {
      setLegajos(data);
      if (data.length > 0) setForm(f => ({ ...f, legajoId: data[0].id }));
    });
  }, []);

  // Resetear columnas cuando cambia el tipo
  useEffect(() => {
    setColumnasSeleccionadas([]);
  }, [form.tipo]);

  function toggleColumna(key: string) {
    setColumnasSeleccionadas(prev =>
      prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]
    );
  }

  async function guardar() {
    if (!form.legajoId) { setError("Seleccioná un legajo"); return; }
    if (!form.operadora) { setError("Seleccioná una operadora"); return; }
    setGuardando(true); setError("");
    try {
      const res = await fetch("/api/oficios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          columnas: JSON.stringify(columnasSeleccionadas),
        }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error ?? "Error al guardar"); return; }
      onGuardado();
    } catch { setError("Error de conexión"); }
    finally { setGuardando(false); }
  }

  const inputStyle = { background: "var(--bg-tertiary)", border: "1px solid var(--border)", color: "var(--text-primary)" };
  const inputClass = "w-full rounded-lg px-3 py-2 text-sm outline-none";
  const labelStyle = { color: "var(--text-muted)" };

  const legajoActual = legajos.find(l => l.id === form.legajoId);
  const columnasDeTipo = getColumnasPorTipo(form.tipo);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.6)" }}>
      <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)" }} className="w-full max-w-lg rounded-2xl max-h-[90vh] overflow-y-auto">

        {/* Header */}
        <div style={{ borderBottom: "1px solid var(--border)" }} className="flex items-center justify-between p-5">
          <h3 style={{ color: "var(--text-primary)" }} className="font-bold text-lg">Nuevo Oficio</h3>
          <button onClick={onCerrar} style={{ color: "var(--text-muted)" }} className="hover:opacity-70">
            <X size={20} />
          </button>
        </div>

        <div className="p-5 space-y-5">

          {/* Legajo */}
          <div>
            <label style={labelStyle} className="text-xs mb-1 block">Legajo *</label>
            <select value={form.legajoId} onChange={e => setForm({ ...form, legajoId: e.target.value })}
              style={inputStyle} className={inputClass}>
              {legajos.map(l => (
                <option key={l.id} value={l.id}>#{l.numero} — {l.caratula}</option>
              ))}
            </select>
          </div>

          {/* Info del legajo seleccionado */}
          {legajoActual && (
            <div style={{ background: "var(--bg-tertiary)", border: "1px solid var(--border)" }} className="rounded-lg p-3 space-y-1">
              {legajoActual.victimas.map((v, i) => (
                <p key={i} style={{ color: "var(--text-secondary)" }} className="text-xs">
                  👤 <span className="font-medium">{v.nombre}</span>{v.dni && ` — DNI: ${v.dni}`}{v.telefono && ` — Tel: ${v.telefono}`}
                </p>
              ))}
              {legajoActual.dispositivos.map((d, i) => (
                <p key={i} style={{ color: "var(--text-secondary)" }} className="text-xs">
                  📱 {d.marca} {d.modelo}{d.imei && ` — IMEI: ${d.imei}`}
                </p>
              ))}
            </div>
          )}

          {/* Operadora */}
          <div>
            <label style={labelStyle} className="text-xs mb-1 block">Operadora *</label>
            <div className="flex flex-wrap gap-2">
              {OPERADORAS.map(op => (
                <button key={op} onClick={() => setForm({ ...form, operadora: op })}
                  style={{
                    background: form.operadora === op ? "var(--accent)" : "var(--bg-tertiary)",
                    border: `1px solid ${form.operadora === op ? "var(--accent)" : "var(--border)"}`,
                    color: form.operadora === op ? "#fff" : "var(--text-secondary)",
                  }}
                  className="px-3 py-1.5 rounded-lg text-sm transition">
                  {op}
                </button>
              ))}
            </div>
          </div>

          {/* Tipo de medida */}
          <div>
            <label style={labelStyle} className="text-xs mb-1 block">Tipo de medida requerida *</label>
            <div className="flex flex-wrap gap-2">
              {TIPOS_OPCIONES.map(t => (
                <button key={t.valor} onClick={() => setForm({ ...form, tipo: t.valor })}
                  style={{
                    background: form.tipo === t.valor ? "var(--accent)" : "var(--bg-tertiary)",
                    border: `1px solid ${form.tipo === t.valor ? "var(--accent)" : "var(--border)"}`,
                    color: form.tipo === t.valor ? "#fff" : "var(--text-secondary)",
                  }}
                  className="px-3 py-1.5 rounded-lg text-sm transition">
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Checkboxes de columnas según tipo */}
          {columnasDeTipo.length > 0 && (
            <div>
              <label style={labelStyle} className="text-xs mb-2 block">
                Columnas a marcar con X en el PDF
              </label>
              <div style={{ background: "var(--bg-tertiary)", border: "1px solid var(--border)" }} className="rounded-lg p-3 space-y-2">
                {columnasDeTipo.map(col => (
                  <label key={col.key} className="flex items-center gap-3 cursor-pointer">
                    <div
                      onClick={() => toggleColumna(col.key)}
                      style={{
                        width: 18, height: 18, borderRadius: 4, flexShrink: 0,
                        background: columnasSeleccionadas.includes(col.key) ? "var(--accent)" : "var(--bg-secondary)",
                        border: `2px solid ${columnasSeleccionadas.includes(col.key) ? "var(--accent)" : "var(--border)"}`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        transition: "all 0.15s",
                      }}
                    >
                      {columnasSeleccionadas.includes(col.key) && (
                        <span style={{ color: "#fff", fontSize: 11, fontWeight: "bold", lineHeight: 1 }}>✓</span>
                      )}
                    </div>
                    <span
                      onClick={() => toggleColumna(col.key)}
                      style={{ color: columnasSeleccionadas.includes(col.key) ? "var(--text-primary)" : "var(--text-muted)" }}
                      className="text-sm select-none"
                    >
                      {col.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Urgencia */}
          <div>
            <label style={labelStyle} className="text-xs mb-1 block">Urgencia</label>
            <div className="flex flex-wrap gap-2">
              {URGENCIAS.map(u => (
                <button key={u} onClick={() => setForm({ ...form, urgencia: u })}
                  style={{
                    background: form.urgencia === u ? "rgba(245,158,11,0.2)" : "var(--bg-tertiary)",
                    border: `1px solid ${form.urgencia === u ? "var(--warning)" : "var(--border)"}`,
                    color: form.urgencia === u ? "var(--warning)" : "var(--text-secondary)",
                  }}
                  className="px-3 py-1.5 rounded-lg text-sm transition">
                  {u}
                </button>
              ))}
            </div>
          </div>

          {/* Número y fecha */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label style={labelStyle} className="text-xs mb-1 block">N° de oficio</label>
              <input value={form.numero} onChange={e => setForm({ ...form, numero: e.target.value })}
                style={inputStyle} className={inputClass} placeholder="Opcional" />
            </div>
            <div>
              <label style={labelStyle} className="text-xs mb-1 block">Fecha de envío</label>
              <input type="date" value={form.fechaEnvio} onChange={e => setForm({ ...form, fechaEnvio: e.target.value })}
                style={inputStyle} className={inputClass} />
            </div>
          </div>

          {/* Observaciones */}
          <div>
            <label style={labelStyle} className="text-xs mb-1 block">Observaciones</label>
            <textarea value={form.observaciones} onChange={e => setForm({ ...form, observaciones: e.target.value })}
              style={{ ...inputStyle, resize: "none" }} className={inputClass} rows={3}
              placeholder="Notas adicionales para el oficio..." />
          </div>

          {error && <p style={{ color: "var(--danger)" }} className="text-sm text-center">{error}</p>}

          <div className="flex gap-3">
            <button onClick={onCerrar}
              style={{ background: "var(--bg-tertiary)", color: "var(--text-secondary)" }}
              className="flex-1 py-2.5 rounded-lg text-sm font-medium hover:opacity-80 transition">
              Cancelar
            </button>
            <button onClick={guardar} disabled={guardando}
              style={{ background: "var(--accent)" }}
              className="flex-1 py-2.5 rounded-lg text-sm font-medium text-white hover:opacity-90 transition disabled:opacity-50">
              {guardando ? "Guardando..." : "Crear oficio"}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}