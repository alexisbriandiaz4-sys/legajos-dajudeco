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

const OPERADORAS = ["Claro", "Personal", "Movistar", "Todas"];

export default function FormularioOficio({ onCerrar, onGuardado }: Props) {
  const [legajos, setLegajos] = useState<Legajo[]>([]);
  const [legajoId, setLegajoId] = useState("");
  const [operadora, setOperadora] = useState("Claro");
  const [tipoConsulta, setTipoConsulta] = useState("imei");
  const [numeroLinea, setNumeroLinea] = useState("");
  const [guardando, setGuardando] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/legajos").then(r => r.json()).then(data => {
      setLegajos(data);
      if (data.length > 0) setLegajoId(data[0].id);
    });
  }, []);

  const legajoActual = legajos.find(l => l.id === legajoId);
  const imeiDelLegajo = legajoActual?.dispositivos.find(d => d.imei)?.imei || "";

  async function guardar() {
    if (!legajoId) { setError("Seleccioná un legajo"); return; }
    if (tipoConsulta === "linea" && !numeroLinea.trim()) { setError("Ingresá el número de línea"); return; }
    setGuardando(true); setError("");
    try {
      const res = await fetch("/api/oficios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          legajoId,
          operadora,
          tipo: "Telefonía Móvil",
          urgencia: "48 horas",
          tipoConsulta,
          numeroLinea: tipoConsulta === "linea" ? numeroLinea : "",
          columnas: "[]",
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.6)" }}>
      <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)" }} className="w-full max-w-md rounded-2xl max-h-[90vh] overflow-y-auto">

        <div style={{ borderBottom: "1px solid var(--border)" }} className="flex items-center justify-between p-5">
          <h3 style={{ color: "var(--text-primary)" }} className="font-bold text-lg">Nuevo Oficio Fiscal</h3>
          <button onClick={onCerrar} style={{ color: "var(--text-muted)" }} className="hover:opacity-70"><X size={20} /></button>
        </div>

        <div className="p-5 space-y-5">

          {/* Legajo */}
          <div>
            <label style={labelStyle} className="text-xs mb-1 block">Legajo *</label>
            <select value={legajoId} onChange={e => setLegajoId(e.target.value)} style={inputStyle} className={inputClass}>
              {legajos.map(l => (
                <option key={l.id} value={l.id}>#{l.numero} — {l.caratula}</option>
              ))}
            </select>
          </div>

          {/* Info del legajo */}
          {legajoActual && (
            <div style={{ background: "var(--bg-tertiary)", border: "1px solid var(--border)" }} className="rounded-lg p-3 space-y-1">
              {legajoActual.victimas.map((v, i) => (
                <p key={i} style={{ color: "var(--text-secondary)" }} className="text-xs">
                  👤 <span className="font-medium">{v.nombre}</span>{v.telefono && ` — Tel: ${v.telefono}`}
                </p>
              ))}
              {legajoActual.dispositivos.filter(d => d.imei).map((d, i) => (
                <p key={i} style={{ color: "var(--text-secondary)" }} className="text-xs">
                  📱 {d.marca} {d.modelo} — IMEI: <span className="font-mono">{d.imei}</span>
                </p>
              ))}
            </div>
          )}

          {/* Operadora */}
          <div>
            <label style={labelStyle} className="text-xs mb-1 block">Compañía *</label>
            <div className="flex flex-wrap gap-2">
              {OPERADORAS.map(op => (
                <button key={op} onClick={() => setOperadora(op)}
                  style={{
                    background: operadora === op ? "var(--accent)" : "var(--bg-tertiary)",
                    border: `1px solid ${operadora === op ? "var(--accent)" : "var(--border)"}`,
                    color: operadora === op ? "#fff" : "var(--text-secondary)",
                  }}
                  className="px-4 py-2 rounded-lg text-sm transition font-medium">
                  {op === "Todas" ? "⚡ Todas" : op}
                </button>
              ))}
            </div>
            {operadora === "Todas" && (
              <p style={{ color: "var(--text-muted)" }} className="text-xs mt-1">
                Se generarán 3 oficios: Claro, Personal y Movistar
              </p>
            )}
          </div>

          {/* Tipo de consulta */}
          <div>
            <label style={labelStyle} className="text-xs mb-1 block">Tipo de consulta *</label>
            <div className="flex gap-2 mb-2">
              {[
                { valor: "imei",  label: "Por IMEI" },
                { valor: "linea", label: "Por N° de línea" },
              ].map(op => (
                <button key={op.valor} onClick={() => setTipoConsulta(op.valor)}
                  style={{
                    background: tipoConsulta === op.valor ? "var(--accent)" : "var(--bg-tertiary)",
                    border: `1px solid ${tipoConsulta === op.valor ? "var(--accent)" : "var(--border)"}`,
                    color: tipoConsulta === op.valor ? "#fff" : "var(--text-secondary)",
                  }}
                  className="flex-1 py-2 rounded-lg text-sm transition">
                  {op.label}
                </button>
              ))}
            </div>

            <div style={{ background: "var(--bg-tertiary)", border: "1px solid var(--border)" }} className="rounded-lg p-3">
              {tipoConsulta === "imei" ? (
                <p style={{ color: imeiDelLegajo ? "var(--text-primary)" : "var(--warning)" }} className="text-sm">
                  {imeiDelLegajo
                    ? <>IMEI: <span className="font-mono font-semibold">{imeiDelLegajo}</span></>
                    : "⚠️ El legajo no tiene IMEI cargado"}
                </p>
              ) : (
                <>
                  <label style={labelStyle} className="text-xs mb-1 block">Número de línea</label>
                  <input
                    value={numeroLinea}
                    onChange={e => setNumeroLinea(e.target.value)}
                    style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)", color: "var(--text-primary)" }}
                    className="w-full rounded-lg px-3 py-2 text-sm outline-none font-mono"
                    placeholder="Ej: 3492123456"
                  />
                </>
              )}
            </div>
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