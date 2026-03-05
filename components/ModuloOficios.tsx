"use client";

import { useState, useEffect, useCallback } from "react";
import { Plus, Search, FileText, Clock, CheckCircle, XCircle, AlertTriangle, Trash2, ChevronLeft, ChevronRight } from "lucide-react";
import { toast } from "sonner";
import FormularioOficio from "./FormularioOficio";
import { generarOficioFiscal } from "@/lib/generarOficioFiscal";

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
  legajo: Legajo; columnas?: string; tipoConsulta?: string;
  numeroLinea?: string; imeiSeleccionado?: string;
}

interface PaginaResponse {
  oficios: Oficio[]; total: number; page: number; limit: number; totalPages: number;
}

const ESTADOS = ["Todos", "Pendiente", "Enviado", "Respondido", "Sin respuesta"];
const LIMIT = 20;

export default function ModuloOficios() {
  const [datos, setDatos] = useState<PaginaResponse>({ oficios: [], total: 0, page: 1, limit: LIMIT, totalPages: 0 });
  const [cargando, setCargando] = useState(true);
  const [page, setPage] = useState(1);
  const [busquedaInput, setBusquedaInput] = useState("");
  const [busqueda, setBusqueda] = useState("");
  const [filtroEstado, setFiltroEstado] = useState("Todos");
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [oficioAEliminar, setOficioAEliminar] = useState<string | null>(null);

  const cargarOficios = useCallback(async (p = page) => {
    setCargando(true);
    try {
      const params = new URLSearchParams({ page: String(p), limit: String(LIMIT) });
      if (busqueda) params.set('q', busqueda);
      if (filtroEstado !== "Todos") params.set('estado', filtroEstado);

      const res = await fetch(`/api/oficios?${params}`);
      if (res.ok) {
        setDatos(await res.json());
      } else {
        toast.error("Error al cargar los oficios");
      }
    } catch {
      toast.error("Error de conexión al cargar oficios");
    } finally {
      setCargando(false);
    }
  }, [page, busqueda, filtroEstado]);

  useEffect(() => { cargarOficios(page); }, [page, busqueda, filtroEstado]);

  // Debounce búsqueda
  useEffect(() => {
    const t = setTimeout(() => { setBusqueda(busquedaInput); setPage(1); }, 400);
    return () => clearTimeout(t);
  }, [busquedaInput]);

  async function cambiarEstado(id: string, estado: string) {
    const extra: Record<string, string> = {};
    if (estado === "Enviado") extra.fechaEnvio = new Date().toISOString();
    if (estado === "Respondido") extra.fechaRespuesta = new Date().toISOString();
    try {
      const res = await fetch(`/api/oficios/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ estado, ...extra }),
      });
      if (res.ok) {
        toast.success(`Oficio marcado como "${estado}"`);
        cargarOficios(page);
      } else {
        const data = await res.json();
        toast.error(data.error ?? "Error al actualizar el estado");
      }
    } catch {
      toast.error("Error de conexión al actualizar el estado");
    }
  }

  async function confirmarEliminar() {
    if (!oficioAEliminar) return;
    try {
      const res = await fetch(`/api/oficios/${oficioAEliminar}`, { method: "DELETE" });
      if (res.ok) {
        toast.success("Oficio eliminado");
        cargarOficios(page);
      } else {
        const data = await res.json();
        toast.error(data.error ?? "Error al eliminar el oficio");
      }
    } catch {
      toast.error("Error de conexión al eliminar el oficio");
    } finally {
      setOficioAEliminar(null);
    }
  }

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
    const colores: Record<string, string> = { Claro: "#e53e3e", Personal: "#3182ce", Movistar: "#38a169" };
    return colores[op] ?? "var(--text-muted)";
  }

  return (
    <div className="space-y-4">

      {/* Modal confirmación eliminar */}
      {oficioAEliminar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.6)" }}>
          <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)" }} className="rounded-2xl p-6 w-full max-w-sm shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div style={{ background: "rgba(239,68,68,0.15)" }} className="p-2 rounded-full">
                <Trash2 size={20} style={{ color: "var(--danger)" }} />
              </div>
              <div>
                <h3 style={{ color: "var(--text-primary)" }} className="font-semibold">Eliminar oficio</h3>
                <p style={{ color: "var(--text-muted)" }} className="text-sm">Esta acción no se puede deshacer</p>
              </div>
            </div>
            <div className="flex gap-2 justify-end mt-4">
              <button onClick={() => setOficioAEliminar(null)}
                style={{ background: "var(--bg-primary)", border: "1px solid var(--border)", color: "var(--text-secondary)" }}
                className="px-4 py-2 rounded-lg text-sm hover:opacity-80 transition">Cancelar</button>
              <button onClick={confirmarEliminar}
                style={{ background: "var(--danger)", color: "#fff" }}
                className="px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition">Eliminar</button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 style={{ color: "var(--text-primary)" }} className="text-xl font-bold">Oficios</h2>
          <p style={{ color: "var(--text-muted)" }} className="text-sm">
            {datos.total} oficio{datos.total !== 1 ? "s" : ""}
            {datos.totalPages > 1 && ` · Página ${datos.page} de ${datos.totalPages}`}
          </p>
        </div>
        <button onClick={() => setMostrarFormulario(true)}
          style={{ background: "var(--accent)" }}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-white text-sm font-medium hover:opacity-90 transition">
          <Plus size={16} /> Nuevo oficio
        </button>
      </div>

      {/* Stats — se calculan del total de la página actual */}
      {datos.total > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: "Pendientes", valor: datos.oficios.filter(o => o.estado === "Pendiente").length, color: "var(--warning)" },
            { label: "Enviados", valor: datos.oficios.filter(o => o.estado === "Enviado").length, color: "var(--accent)" },
            { label: "Respondidos", valor: datos.oficios.filter(o => o.estado === "Respondido").length, color: "var(--success)" },
            { label: "Sin respuesta", valor: datos.oficios.filter(o => o.estado === "Sin respuesta").length, color: "var(--danger)" },
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
          <input value={busquedaInput} onChange={e => setBusquedaInput(e.target.value)}
            placeholder="Buscar por operadora, legajo..."
            style={{ background: "transparent", color: "var(--text-primary)" }}
            className="flex-1 text-sm outline-none placeholder:text-[var(--text-muted)]" />
        </div>
        <div className="flex gap-1 flex-wrap">
          {ESTADOS.map(e => (
            <button key={e} onClick={() => { setFiltroEstado(e); setPage(1); }}
              style={{
                background: filtroEstado === e ? "var(--accent)" : "var(--bg-secondary)",
                border: `1px solid ${filtroEstado === e ? "var(--accent)" : "var(--border)"}`,
                color: filtroEstado === e ? "#fff" : "var(--text-muted)",
              }}
              className="px-3 py-1.5 rounded-lg text-xs transition">{e}</button>
          ))}
        </div>
      </div>

      {/* Lista */}
      {cargando ? (
        <p style={{ color: "var(--text-muted)" }} className="text-sm text-center py-8">Cargando oficios...</p>
      ) : datos.oficios.length === 0 ? (
        <div className="text-center py-16">
          <FileText size={40} style={{ color: "var(--text-muted)" }} className="mx-auto mb-3" />
          <p style={{ color: "var(--text-muted)" }} className="text-sm">
            {busqueda || filtroEstado !== "Todos" ? "Sin resultados" : "No hay oficios registrados"}
          </p>
        </div>
      ) : (
        <div className="space-y-2">
          {datos.oficios.map(oficio => (
            <div key={oficio.id} style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)" }} className="rounded-xl p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span style={{ color: colorOperadora(oficio.operadora) }} className="text-sm font-bold">{oficio.operadora}</span>
                    <span style={colorEstado(oficio.estado)} className="text-xs px-2 py-0.5 rounded-full flex items-center gap-1">
                      {iconoEstado(oficio.estado)} {oficio.estado}
                    </span>
                    <span style={{ background: "rgba(245,158,11,0.1)", color: "var(--warning)" }} className="text-xs px-2 py-0.5 rounded-full">
                      ⏱ {oficio.urgencia}
                    </span>
                  </div>
                  <p style={{ color: "var(--text-secondary)" }} className="text-xs mb-1">
                    Legajo <span style={{ color: "var(--accent)" }} className="font-medium">#{oficio.legajo.numero}</span> — {oficio.legajo.caratula}
                  </p>
                  <p style={{ color: "var(--text-muted)" }} className="text-xs truncate">
                    {oficio.tipoConsulta === "linea" ? `📞 Por línea: ${oficio.numeroLinea || "-"}` : `📱 Por IMEI`}
                  </p>
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
                <div className="flex flex-col gap-1 shrink-0">
                  {oficio.estado === "Pendiente" && (
                    <button onClick={() => cambiarEstado(oficio.id, "Enviado")}
                      style={{ background: "rgba(59,130,246,0.15)", color: "var(--accent)" }}
                      className="text-xs px-2 py-1 rounded-lg hover:opacity-80 transition whitespace-nowrap">Marcar enviado</button>
                  )}
                  {oficio.estado === "Enviado" && (
                    <>
                      <button onClick={() => cambiarEstado(oficio.id, "Respondido")}
                        style={{ background: "rgba(34,197,94,0.15)", color: "var(--success)" }}
                        className="text-xs px-2 py-1 rounded-lg hover:opacity-80 transition whitespace-nowrap">Marcar respondido</button>
                      <button onClick={() => cambiarEstado(oficio.id, "Sin respuesta")}
                        style={{ background: "rgba(239,68,68,0.15)", color: "var(--danger)" }}
                        className="text-xs px-2 py-1 rounded-lg hover:opacity-80 transition whitespace-nowrap">Sin respuesta</button>
                    </>
                  )}
                  <button onClick={() => generarOficioFiscal(oficio)}
                    style={{ background: "rgba(59,130,246,0.15)", color: "var(--accent)" }}
                    className="text-xs px-2 py-1 rounded-lg hover:opacity-80 transition whitespace-nowrap">📝 Generar Oficio</button>
                  <button onClick={() => setOficioAEliminar(oficio.id)}
                    style={{ color: "var(--danger)" }}
                    className="text-xs px-2 py-1 rounded-lg hover:opacity-80 transition">Eliminar</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Paginación */}
      {datos.totalPages > 1 && (
        <div className="flex items-center justify-between pt-2">
          <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1 || cargando}
            style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)", color: "var(--text-secondary)" }}
            className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm hover:opacity-80 transition disabled:opacity-40">
            <ChevronLeft size={15} /> Anterior
          </button>
          <div className="flex items-center gap-1">
            {Array.from({ length: Math.min(5, datos.totalPages) }, (_, i) => {
              let p: number;
              if (datos.totalPages <= 5) p = i + 1;
              else if (page <= 3) p = i + 1;
              else if (page >= datos.totalPages - 2) p = datos.totalPages - 4 + i;
              else p = page - 2 + i;
              return (
                <button key={p} onClick={() => setPage(p)}
                  style={{
                    background: p === page ? "var(--accent)" : "var(--bg-secondary)",
                    border: "1px solid var(--border)",
                    color: p === page ? "#fff" : "var(--text-secondary)",
                  }}
                  className="w-8 h-8 rounded-lg text-sm hover:opacity-80 transition">{p}</button>
              );
            })}
          </div>
          <button onClick={() => setPage(p => Math.min(datos.totalPages, p + 1))} disabled={page === datos.totalPages || cargando}
            style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)", color: "var(--text-secondary)" }}
            className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm hover:opacity-80 transition disabled:opacity-40">
            Siguiente <ChevronRight size={15} />
          </button>
        </div>
      )}

      {mostrarFormulario && (
        <FormularioOficio onCerrar={() => setMostrarFormulario(false)}
          onGuardado={() => { setMostrarFormulario(false); toast.success("Oficio creado correctamente"); cargarOficios(page); }} />
      )}
    </div>
  );
}