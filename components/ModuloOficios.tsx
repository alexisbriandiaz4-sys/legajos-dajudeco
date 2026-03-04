"use client";

import { useState, useEffect } from "react";
import { Plus, Search, FileText, Clock, CheckCircle, XCircle, AlertTriangle } from "lucide-react";
import FormularioOficio from "./FormularioOficio";
import { generarPDFOficio } from "@/lib/generarPDF";

interface Legajo {
  id: string; numero: string; caratula: string;
  delito: string; fechaHecho: string;
  victimas: { nombre: string; dni?: string; telefono?: string }[];
  dispositivos: { imei?: string; marca?: string; modelo?: string; tipo: string; color?: string }[];
}

interface Oficio {
  id: string; numero?: string; operadora: string; tipo: string;
  urgencia: string; estado: string; fechaEnvio?: string;
  fechaRespuesta?: string; observaciones?: string; createdAt: string;
  legajo: Legajo;
  columnas?: string;
}

const ESTADOS = ["Todos", "Pendiente", "Enviado", "Respondido", "Sin respuesta"];

export default function ModuloOficios() {
  const [oficios, setOficios] = useState<Oficio[]>([]);
  const [cargando, setCargando] = useState(true);
  const [busqueda, setBusqueda] = useState("");
  const [filtroEstado, setFiltroEstado] = useState("Todos");
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  useEffect(() => { cargarOficios(); }, []);

  async function cargarOficios() {
    setCargando(true);
    try {
      const res = await fetch("/api/oficios");
      if (res.ok) setOficios(await res.json());
    } catch {}
    finally { setCargando(false); }
  }

  async function cambiarEstado(id: string, estado: string) {
    const extra: any = {};
    if (estado === "Enviado") extra.fechaEnvio = new Date().toISOString();
    if (estado === "Respondido") extra.fechaRespuesta = new Date().toISOString();
    await fetch(`/api/oficios/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ estado, ...extra }),
    });
    cargarOficios();
  }

  async function eliminar(id: string) {
    if (!confirm("¿Eliminar este oficio?")) return;
    await fetch(`/api/oficios/${id}`, { method: "DELETE" });
    cargarOficios();
  }

  const filtrados = oficios.filter(o => {
    const matchEstado = filtroEstado === "Todos" || o.estado === filtroEstado;
    const matchBusqueda =
      o.operadora.toLowerCase().includes(busqueda.toLowerCase()) ||
      o.legajo.numero.toLowerCase().includes(busqueda.toLowerCase()) ||
      o.legajo.caratula.toLowerCase().includes(busqueda.toLowerCase());
    return matchEstado && matchBusqueda;
  });

  function iconoEstado(estado: string) {
    if (estado === "Respondido") return <CheckCircle size={14} />;
    if (estado === "Sin respuesta") return <XCircle size={14} />;
    if (estado === "Enviado") return <Clock size={14} />;
    return <AlertTriangle size={14} />;
  }

  function colorEstado(estado: string) {
    if (estado === "Respondido") return { background: "rgba(34,197,94,0.15)", color: "var(--success)" };
    if (estado === "Sin respuesta") return { background: "rgba(239,68,68,0.15)", color: "var(--danger)" };
    if (estado === "Enviado") return { background: "rgba(59,130,246,0.15)", color: "var(--accent)" };
    return { background: "rgba(245,158,11,0.15)", color: "var(--warning)" };
  }

  function colorOperadora(op: string) {
    const colores: Record<string, string> = {
      Claro: "#e53e3e", Personal: "#3182ce", Movistar: "#38a169", Telecom: "#805ad5"
    };
    return colores[op] ?? "var(--text-muted)";
  }

  // Estadísticas rápidas
  const stats = {
    total: oficios.length,
    pendientes: oficios.filter(o => o.estado === "Pendiente").length,
    enviados: oficios.filter(o => o.estado === "Enviado").length,
    respondidos: oficios.filter(o => o.estado === "Respondido").length,
    sinRespuesta: oficios.filter(o => o.estado === "Sin respuesta").length,
  };

  return (
    <div className="space-y-4">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 style={{ color: "var(--text-primary)" }} className="text-xl font-bold">Oficios</h2>
          <p style={{ color: "var(--text-muted)" }} className="text-sm">{oficios.length} oficio{oficios.length !== 1 ? "s" : ""} registrado{oficios.length !== 1 ? "s" : ""}</p>
        </div>
        <button onClick={() => setMostrarFormulario(true)}
          style={{ background: "var(--accent)" }}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-white text-sm font-medium hover:opacity-90 transition">
          <Plus size={16} /> Nuevo oficio
        </button>
      </div>

      {/* Estadísticas */}
      {oficios.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: "Pendientes", valor: stats.pendientes, color: "var(--warning)" },
            { label: "Enviados", valor: stats.enviados, color: "var(--accent)" },
            { label: "Respondidos", valor: stats.respondidos, color: "var(--success)" },
            { label: "Sin respuesta", valor: stats.sinRespuesta, color: "var(--danger)" },
          ].map(({ label, valor, color }) => (
            <div key={label} style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)" }} className="rounded-xl p-3 text-center">
              <p style={{ color }} className="text-2xl font-bold">{valor}</p>
              <p style={{ color: "var(--text-muted)" }} className="text-xs">{label}</p>
            </div>
          ))}
        </div>
      )}

      {/* Búsqueda y filtros */}
      <div className="flex flex-col md:flex-row gap-2">
        <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)" }} className="flex items-center gap-2 rounded-lg px-3 py-2 flex-1">
          <Search size={16} style={{ color: "var(--text-muted)" }} />
          <input value={busqueda} onChange={e => setBusqueda(e.target.value)}
            placeholder="Buscar por operadora, legajo..."
            style={{ background: "transparent", color: "var(--text-primary)" }}
            className="flex-1 text-sm outline-none placeholder:text-[var(--text-muted)]" />
        </div>
        <div className="flex gap-1 flex-wrap">
          {ESTADOS.map(e => (
            <button key={e} onClick={() => setFiltroEstado(e)}
              style={{
                background: filtroEstado === e ? "var(--accent)" : "var(--bg-secondary)",
                border: `1px solid ${filtroEstado === e ? "var(--accent)" : "var(--border)"}`,
                color: filtroEstado === e ? "#fff" : "var(--text-muted)",
              }}
              className="px-3 py-1.5 rounded-lg text-xs transition">
              {e}
            </button>
          ))}
        </div>
      </div>

      {/* Lista */}
      {cargando ? (
        <p style={{ color: "var(--text-muted)" }} className="text-sm text-center py-8">Cargando oficios...</p>
      ) : filtrados.length === 0 ? (
        <div className="text-center py-16">
          <FileText size={40} style={{ color: "var(--text-muted)" }} className="mx-auto mb-3" />
          <p style={{ color: "var(--text-muted)" }} className="text-sm">
            {busqueda || filtroEstado !== "Todos" ? "Sin resultados" : "No hay oficios registrados"}
          </p>
        </div>
      ) : (
        <div className="space-y-2">
          {filtrados.map(oficio => (
            <div key={oficio.id}
              style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)" }}
              className="rounded-xl p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">

                  {/* Operadora + estado */}
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span style={{ color: colorOperadora(oficio.operadora) }} className="text-sm font-bold">
                      {oficio.operadora}
                    </span>
                    <span style={colorEstado(oficio.estado)} className="text-xs px-2 py-0.5 rounded-full flex items-center gap-1">
                      {iconoEstado(oficio.estado)} {oficio.estado}
                    </span>
                    <span style={{ background: "rgba(245,158,11,0.1)", color: "var(--warning)" }} className="text-xs px-2 py-0.5 rounded-full">
                      ⏱ {oficio.urgencia}
                    </span>
                  </div>

                  {/* Legajo */}
                  <p style={{ color: "var(--text-secondary)" }} className="text-xs mb-1">
                    Legajo <span style={{ color: "var(--accent)" }} className="font-medium">#{oficio.legajo.numero}</span> — {oficio.legajo.caratula}
                  </p>

                  {/* Tipo */}
                  <p style={{ color: "var(--text-muted)" }} className="text-xs truncate">{oficio.tipo}</p>

                  {/* Fechas */}
                  <div className="flex gap-3 mt-2 flex-wrap">
                    {oficio.fechaEnvio && (
                      <span style={{ color: "var(--text-muted)" }} className="text-xs">
                        📤 Enviado: {new Date(oficio.fechaEnvio).toLocaleDateString("es-AR")}
                      </span>
                    )}
                    {oficio.fechaRespuesta && (
                      <span style={{ color: "var(--text-muted)" }} className="text-xs">
                        📥 Respondido: {new Date(oficio.fechaRespuesta).toLocaleDateString("es-AR")}
                      </span>
                    )}
                  </div>
                </div>

                {/* Acciones */}
                <div className="flex flex-col gap-1 shrink-0">
                  {oficio.estado === "Pendiente" && (
                    <button onClick={() => cambiarEstado(oficio.id, "Enviado")}
                      style={{ background: "rgba(59,130,246,0.15)", color: "var(--accent)" }}
                      className="text-xs px-2 py-1 rounded-lg hover:opacity-80 transition whitespace-nowrap">
                      Marcar enviado
                    </button>
                  )}
                  {oficio.estado === "Enviado" && (
                    <>
                      <button onClick={() => cambiarEstado(oficio.id, "Respondido")}
                        style={{ background: "rgba(34,197,94,0.15)", color: "var(--success)" }}
                        className="text-xs px-2 py-1 rounded-lg hover:opacity-80 transition whitespace-nowrap">
                        Marcar respondido
                      </button>
                      <button onClick={() => cambiarEstado(oficio.id, "Sin respuesta")}
                        style={{ background: "rgba(239,68,68,0.15)", color: "var(--danger)" }}
                        className="text-xs px-2 py-1 rounded-lg hover:opacity-80 transition whitespace-nowrap">
                        Sin respuesta
                      </button>
                    </>
                  )}
                  <button onClick={() => generarPDFOficio(oficio)}
                    style={{ background: "rgba(34,197,94,0.15)", color: "var(--success)" }}
                    className="text-xs px-2 py-1 rounded-lg hover:opacity-80 transition whitespace-nowrap">
                    📄 Generar PDF
                  </button>
                  <button onClick={() => eliminar(oficio.id)}
                    style={{ color: "var(--text-muted)" }}
                    className="text-xs px-2 py-1 rounded-lg hover:opacity-80 transition">
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {mostrarFormulario && (
        <FormularioOficio
          onCerrar={() => setMostrarFormulario(false)}
          onGuardado={() => { setMostrarFormulario(false); cargarOficios(); }}
        />
      )}
    </div>
  );
}