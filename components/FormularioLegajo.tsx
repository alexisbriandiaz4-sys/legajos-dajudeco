"use client";

import { useState, useEffect } from "react";
import { X, Plus, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Victima {
  id?: string;
  nombre: string;
  dni?: string;
  telefono?: string;
  email?: string;
}

interface Dispositivo {
  id?: string;
  tipo: string;
  marca?: string;
  modelo?: string;
  imei?: string;
  numeroLinea?: string;
  color?: string;
}

interface Legajo {
  id: string;
  numero: string;
  caratula: string;
  cuij?: string;
  delito: string;
  fechaHecho: string;
  estado: string;
  observaciones?: string;
  fiscal?: string;
  emailRespuesta?: string;
  victimas: Victima[];
  dispositivos: Dispositivo[];
}

interface Props {
  onCerrar: () => void;
  onGuardado: () => void;
  legajoEditar?: Legajo;
}

const ESTADOS = ["Activo", "En seguimiento", "Cerrado", "Inactivo"];
const VICTIMA_VACIA: Victima = { nombre: "", dni: "", telefono: "", email: "" };
const DISPOSITIVO_VACIO: Dispositivo = { tipo: "Celular", marca: "", modelo: "", imei: "", numeroLinea: "", color: "" };

export default function FormularioLegajo({ onCerrar, onGuardado, legajoEditar }: Props) {
  const [numero, setNumero] = useState("");
  const [caratula, setCaratula] = useState("");
  const [cuij, setCuij] = useState("");
  const [delito, setDelito] = useState("");
  const [fechaHecho, setFechaHecho] = useState("");
  const [estado, setEstado] = useState("Activo");
  const [observaciones, setObservaciones] = useState("");
  const [fiscal, setFiscal] = useState("");
  const [emailRespuesta, setEmailRespuesta] = useState("");
  const [victimas, setVictimas] = useState<Victima[]>([{ ...VICTIMA_VACIA }]);
  const [dispositivos, setDispositivos] = useState<Dispositivo[]>([{ ...DISPOSITIVO_VACIO }]);
  const [asignadoA, setAsignadoA] = useState("");
  const [usuarios, setUsuarios] = useState<any[]>([]);
  const [guardando, setGuardando] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/usuarios").then(r => r.json()).then(data => setUsuarios(data.filter((u:any) => u.rol === 'investigador'))).catch(console.error);
    if (legajoEditar) {
      setNumero(legajoEditar.numero);
      setCaratula(legajoEditar.caratula);
      setCuij(legajoEditar.cuij ?? "");
      setDelito(legajoEditar.delito);
      setFechaHecho(legajoEditar.fechaHecho.split("T")[0]);
      setEstado(legajoEditar.estado);
      setObservaciones(legajoEditar.observaciones ?? "");
      setFiscal(legajoEditar.fiscal ?? "");
      setEmailRespuesta(legajoEditar.emailRespuesta ?? "");
      setVictimas(legajoEditar.victimas.length > 0 ? legajoEditar.victimas : [{ ...VICTIMA_VACIA }]);
      setDispositivos(legajoEditar.dispositivos.length > 0 ? legajoEditar.dispositivos : [{ ...DISPOSITIVO_VACIO }]);
      setAsignadoA((legajoEditar as any).asignadoA ?? "");
    }
  }, [legajoEditar]);

  function actualizarVictima(i: number, campo: keyof Victima, valor: string) {
    setVictimas(prev => prev.map((v, idx) => idx === i ? { ...v, [campo]: valor } : v));
  }

  function actualizarDispositivo(i: number, campo: keyof Dispositivo, valor: string) {
    setDispositivos(prev => prev.map((d, idx) => idx === i ? { ...d, [campo]: valor } : d));
  }

  async function guardar() {
    if (!numero.trim()) { setError("El número de legajo es requerido"); return; }
    if (!caratula.trim()) { setError("La carátula es requerida"); return; }
    if (!delito.trim()) { setError("El delito es requerido"); return; }
    if (!fechaHecho) { setError("La fecha del hecho es requerida"); return; }

    const victimasLimpias = victimas.filter(v => v.nombre.trim());
    const dispositivosLimpios = dispositivos.filter(d => d.marca?.trim() || d.imei?.trim() || d.modelo?.trim());

    setGuardando(true);
    setError("");

    try {
      const url = legajoEditar ? `/api/legajos/${legajoEditar.id}` : "/api/legajos";
      const method = legajoEditar ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          numero: numero.trim(),
          caratula: caratula.trim(),
          cuij: cuij.trim(),
          delito: delito.trim(),
          fechaHecho,
          estado,
          observaciones: observaciones.trim(),
          fiscal: fiscal.trim(),
          emailRespuesta: emailRespuesta.trim(),
          asignadoA: asignadoA || null,
          victimas: victimasLimpias,
          dispositivos: dispositivosLimpios,
        }),
      });

      const data = await res.json();
      if (!res.ok) { setError(data.error ?? "Error al guardar"); return; }
      onGuardado();
    } catch {
      setError("Error de conexión");
    } finally {
      setGuardando(false);
    }
  }

  const bgTertiary = { background: "var(--bg-tertiary)", border: "1px solid var(--border)", color: "var(--text-primary)" };
  const bgSecondary = { background: "var(--bg-secondary)", border: "1px solid var(--border)", color: "var(--text-primary)" };
  const inputClass = "w-full rounded-lg px-3 py-2 text-sm outline-none";
  const labelStyle = { color: "var(--text-muted)" };

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm bg-black/50"
      >
        <motion.div 
          initial={{ scale: 0.95, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 15 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)" }} 
          className="w-full max-w-2xl rounded-2xl max-h-[90vh] overflow-y-auto glass-panel shadow-2xl"
        >

        <div className="flex items-center justify-between p-5 sticky top-0 z-10" style={{ background: "var(--bg-secondary)", borderBottom: "1px solid var(--border)" }}>
          <h3 style={{ color: "var(--text-primary)" }} className="font-bold text-lg">
            {legajoEditar ? "Editar legajo" : "Nuevo legajo"}
          </h3>
          <button onClick={onCerrar} style={{ color: "var(--text-muted)" }} className="hover:opacity-70">
            <X size={20} />
          </button>
        </div>

        <div className="p-5 space-y-6">

          <div>
            <p style={{ color: "var(--text-muted)" }} className="text-xs font-semibold uppercase tracking-wide mb-3">Datos del legajo</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label style={labelStyle} className="text-xs mb-1 block">Número *</label>
                <input value={numero} onChange={e => setNumero(e.target.value)} style={bgTertiary} className={inputClass} placeholder="Ej: 12345/2024" />
              </div>
              <div>
                <label style={labelStyle} className="text-xs mb-1 block">CUIJ</label>
                <input value={cuij} onChange={e => setCuij(e.target.value)} style={bgTertiary} className={inputClass} placeholder="Ej: 21-00000000-0" />
              </div>
              <div className="md:col-span-2">
                <label style={labelStyle} className="text-xs mb-1 block">Carátula *</label>
                <input value={caratula} onChange={e => setCaratula(e.target.value)} style={bgTertiary} className={inputClass} placeholder="Ej: GARCIA, Juan s/ Robo" />
              </div>
              <div>
                <label style={labelStyle} className="text-xs mb-1 block">Delito *</label>
                <input value={delito} onChange={e => setDelito(e.target.value)} style={bgTertiary} className={inputClass} placeholder="Ej: Robo calificado" />
              </div>
              <div>
                <label style={labelStyle} className="text-xs mb-1 block">Fecha del hecho *</label>
                <input type="date" value={fechaHecho} onChange={e => setFechaHecho(e.target.value)} style={bgTertiary} className={inputClass} />
              </div>
              <div>
                <label style={labelStyle} className="text-xs mb-1 block">Estado</label>
                <select value={estado} onChange={e => setEstado(e.target.value)} style={bgTertiary} className={inputClass}>
                  {ESTADOS.map(e => <option key={e} value={e}>{e}</option>)}
                </select>
              </div>
              <div>
                <label style={labelStyle} className="text-xs mb-1 block">Fiscal</label>
                <input value={fiscal} onChange={e => setFiscal(e.target.value)} style={bgTertiary} className={inputClass} placeholder="Nombre del fiscal" />
              </div>
              <div className="md:col-span-2">
                <label style={labelStyle} className="text-xs mb-1 block">Email respuesta</label>
                <input type="email" value={emailRespuesta} onChange={e => setEmailRespuesta(e.target.value)} style={bgTertiary} className={inputClass} placeholder="email@ejemplo.com" />
              </div>
              <div className="md:col-span-2">
                <label style={labelStyle} className="text-xs mb-1 block">Observaciones</label>
                <textarea value={observaciones} onChange={e => setObservaciones(e.target.value)} style={bgTertiary} className={`${inputClass} resize-none`} rows={3} placeholder="Observaciones adicionales..." />
              </div>
              <div className="md:col-span-2">
                <label style={labelStyle} className="text-xs mb-1 block">Asignar a Investigador</label>
                <select value={asignadoA} onChange={e => setAsignadoA(e.target.value)} style={bgTertiary} className={inputClass}>
                  <option value="">Sin asignar (Base General)</option>
                  {usuarios.map(u => <option key={u.id} value={u.id}>{u.nombre}</option>)}
                </select>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-3">
              <p style={{ color: "var(--text-muted)" }} className="text-xs font-semibold uppercase tracking-wide">Víctimas</p>
              <button onClick={() => setVictimas(prev => [...prev, { ...VICTIMA_VACIA }])} style={{ color: "var(--accent)" }} className="flex items-center gap-1 text-xs hover:opacity-70 transition">
                <Plus size={13} /> Agregar
              </button>
            </div>
            <div className="space-y-3">
              {victimas.map((v, i) => (
                <div key={i} style={{ background: "var(--bg-tertiary)", border: "1px solid var(--border)" }} className="rounded-xl p-3 space-y-2">
                  <div className="flex items-center justify-between">
                    <span style={{ color: "var(--text-muted)" }} className="text-xs">Víctima {i + 1}</span>
                    {victimas.length > 1 && (
                      <button onClick={() => setVictimas(prev => prev.filter((_, idx) => idx !== i))} style={{ color: "var(--danger)" }} className="hover:opacity-70">
                        <Trash2 size={13} />
                      </button>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div>
                      <label style={labelStyle} className="text-xs mb-1 block">Nombre *</label>
                      <input value={v.nombre} onChange={e => actualizarVictima(i, "nombre", e.target.value)} style={bgSecondary} className={inputClass} placeholder="Nombre completo" />
                    </div>
                    <div>
                      <label style={labelStyle} className="text-xs mb-1 block">DNI</label>
                      <input value={v.dni ?? ""} onChange={e => actualizarVictima(i, "dni", e.target.value)} style={bgSecondary} className={inputClass} placeholder="Ej: 30123456" />
                    </div>
                    <div>
                      <label style={labelStyle} className="text-xs mb-1 block">Teléfono</label>
                      <input value={v.telefono ?? ""} onChange={e => actualizarVictima(i, "telefono", e.target.value)} style={bgSecondary} className={inputClass} placeholder="Ej: 3492123456" />
                    </div>
                    <div>
                      <label style={labelStyle} className="text-xs mb-1 block">Email</label>
                      <input type="email" value={v.email ?? ""} onChange={e => actualizarVictima(i, "email", e.target.value)} style={bgSecondary} className={inputClass} placeholder="email@ejemplo.com" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-3">
              <p style={{ color: "var(--text-muted)" }} className="text-xs font-semibold uppercase tracking-wide">Dispositivos</p>
              <button onClick={() => setDispositivos(prev => [...prev, { ...DISPOSITIVO_VACIO }])} style={{ color: "var(--accent)" }} className="flex items-center gap-1 text-xs hover:opacity-70 transition">
                <Plus size={13} /> Agregar
              </button>
            </div>
            <div className="space-y-3">
              {dispositivos.map((d, i) => (
                <div key={i} style={{ background: "var(--bg-tertiary)", border: "1px solid var(--border)" }} className="rounded-xl p-3 space-y-2">
                  <div className="flex items-center justify-between">
                    <span style={{ color: "var(--text-muted)" }} className="text-xs">Dispositivo {i + 1}</span>
                    {dispositivos.length > 1 && (
                      <button onClick={() => setDispositivos(prev => prev.filter((_, idx) => idx !== i))} style={{ color: "var(--danger)" }} className="hover:opacity-70">
                        <Trash2 size={13} />
                      </button>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div>
                      <label style={labelStyle} className="text-xs mb-1 block">Tipo</label>
                      <input value={d.tipo} onChange={e => actualizarDispositivo(i, "tipo", e.target.value)} style={bgSecondary} className={inputClass} placeholder="Ej: Celular" />
                    </div>
                    <div>
                      <label style={labelStyle} className="text-xs mb-1 block">Marca</label>
                      <input value={d.marca ?? ""} onChange={e => actualizarDispositivo(i, "marca", e.target.value)} style={bgSecondary} className={inputClass} placeholder="Ej: Samsung" />
                    </div>
                    <div>
                      <label style={labelStyle} className="text-xs mb-1 block">Modelo</label>
                      <input value={d.modelo ?? ""} onChange={e => actualizarDispositivo(i, "modelo", e.target.value)} style={bgSecondary} className={inputClass} placeholder="Ej: Galaxy A54" />
                    </div>
                    <div>
                      <label style={labelStyle} className="text-xs mb-1 block">Color</label>
                      <input value={d.color ?? ""} onChange={e => actualizarDispositivo(i, "color", e.target.value)} style={bgSecondary} className={inputClass} placeholder="Ej: Negro" />
                    </div>
                    <div>
                      <label style={labelStyle} className="text-xs mb-1 block">IMEI</label>
                      <input value={d.imei ?? ""} onChange={e => actualizarDispositivo(i, "imei", e.target.value)} style={bgSecondary} className={`${inputClass} font-mono`} placeholder="15 dígitos" />
                    </div>
                    <div>
                      <label style={labelStyle} className="text-xs mb-1 block">Número de línea</label>
                      <input value={d.numeroLinea ?? ""} onChange={e => actualizarDispositivo(i, "numeroLinea", e.target.value)} style={bgSecondary} className={`${inputClass} font-mono`} placeholder="Ej: 3492123456" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {error && <p style={{ color: "var(--danger)" }} className="text-sm text-center">{error}</p>}

          <div className="flex gap-3 pt-2">
            <button onClick={onCerrar} style={{ background: "var(--bg-tertiary)", color: "var(--text-secondary)" }} className="flex-1 py-2.5 rounded-lg text-sm font-medium hover:opacity-80 transition">
              Cancelar
            </button>
            <button onClick={guardar} disabled={guardando} style={{ background: "var(--accent)" }} className="flex-1 py-2.5 rounded-lg text-sm font-medium text-white hover:opacity-90 transition disabled:opacity-50 shadow-lg shadow-blue-500/20">
              {guardando ? "Guardando..." : legajoEditar ? "Guardar cambios" : "Crear legajo"}
            </button>
          </div>

        </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}