"use client";

import { useState, useEffect, useCallback } from "react";
import { Plus, Search, FolderOpen, Calendar, User, Smartphone, FileText, ChevronRight, Pencil, Trash2, PowerOff, AlertTriangle, SlidersHorizontal, X, ChevronLeft } from "lucide-react";
import { toast } from "sonner";
import FormularioLegajo from "./FormularioLegajo";
import SeccionArchivos from "./SeccionArchivos";

interface Victima { id: string; nombre: string; dni?: string; telefono?: string; email?: string; }
interface Dispositivo { id: string; tipo: string; marca?: string; modelo?: string; imei?: string; }
interface Oficio { id: string; operadora: string; estado: string; }
interface Legajo {
  id: string; numero: string; caratula: string; cuij?: string;
  delito: string; fechaHecho: string; estado: string; observaciones?: string;
  fiscal?: string; emailRespuesta?: string;
  victimas: Victima[]; dispositivos: Dispositivo[]; oficios: Oficio[];
}

interface PaginaResponse {
  legajos: Legajo[]; total: number; page: number; limit: number; totalPages: number;
}

const ESTADOS = ["Activo", "En seguimiento", "Cerrado", "Inactivo"];
const LIMIT = 20;

export default function ModuloLegajos() {
  const [datos, setDatos] = useState<PaginaResponse>({ legajos: [], total: 0, page: 1, limit: LIMIT, totalPages: 0 });
  const [cargando, setCargando] = useState(true);
  const [page, setPage] = useState(1);
  const [busqueda, setBusqueda] = useState("");
  const [busquedaInput, setBusquedaInput] = useState("");
  const [mostrarFiltros, setMostrarFiltros] = useState(false);
  const [filtroEstado, setFiltroEstado] = useState("");
  const [filtroFechaDesde, setFiltroFechaDesde] = useState("");
  const [filtroFechaHasta, setFiltroFechaHasta] = useState("");
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [legajoSeleccionado, setLegajoSeleccionado] = useState<Legajo | null>(null);
  const [legajoEditar, setLegajoEditar] = useState<Legajo | null>(null);
  const [confirmarBorrar, setConfirmarBorrar] = useState<Legajo | null>(null);
  const [procesando, setProcesando] = useState(false);

  const cargarLegajos = useCallback(async (p = page) => {
    setCargando(true);
    try {
      const params = new URLSearchParams({ page: String(p), limit: String(LIMIT) });
      if (busqueda)         params.set('q', busqueda);
      if (filtroEstado)     params.set('estado', filtroEstado);
      if (filtroFechaDesde) params.set('desde', filtroFechaDesde);
      if (filtroFechaHasta) params.set('hasta', filtroFechaHasta);

      const res = await fetch(`/api/legajos?${params}`);
      if (res.ok) {
        setDatos(await res.json());
      } else {
        toast.error("Error al cargar los legajos");
      }
    } catch {
      toast.error("Error de conexión al cargar legajos");
    } finally {
      setCargando(false);
    }
  }, [page, busqueda, filtroEstado, filtroFechaDesde, filtroFechaHasta]);

  useEffect(() => { cargarLegajos(page); }, [page, busqueda, filtroEstado, filtroFechaDesde, filtroFechaHasta]);

  useEffect(() => {
    const t = setTimeout(() => {
      setBusqueda(busquedaInput);
      setPage(1);
    }, 400);
    return () => clearTimeout(t);
  }, [busquedaInput]);

  async function cambiarEstado(legajo: Legajo, nuevoEstado: string) {
    setProcesando(true);
    try {
      const res = await fetch(`/api/legajos/${legajo.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ estado: nuevoEstado }),
      });
      if (res.ok) {
        toast.success(`Legajo marcado como "${nuevoEstado}"`);
        await cargarLegajos(page);
        if (legajoSeleccionado?.id === legajo.id) {
          const actualizado = await fetch(`/api/legajos/${legajo.id}`);
          if (actualizado.ok) setLegajoSeleccionado(await actualizado.json());
        }
      } else {
        const data = await res.json();
        toast.error(data.error ?? "Error al cambiar el estado");
      }
    } catch {
      toast.error("Error de conexión al cambiar el estado");
    } finally {
      setProcesando(false);
    }
  }

  async function borrarLegajo(legajo: Legajo) {
    setProcesando(true);
    try {
      const res = await fetch(`/api/legajos/${legajo.id}`, { method: "DELETE" });
      if (res.ok) {
        toast.success(`Legajo #${legajo.numero} eliminado`);
        setConfirmarBorrar(null);
        setLegajoSeleccionado(null);
        await cargarLegajos(page);
      } else {
        const data = await res.json();
        toast.error(data.error ?? "Error al eliminar el legajo");
      }
    } catch {
      toast.error("Error de conexión al eliminar el legajo");
    } finally {
      setProcesando(false);
    }
  }

  function limpiarFiltros() {
    setBusquedaInput("");
    setBusqueda("");
    setFiltroEstado("");
    setFiltroFechaDesde("");
    setFiltroFechaHasta("");
    setPage(1);
  }

  const hayFiltrosActivos = busquedaInput || filtroEstado || filtroFechaDesde || filtroFechaHasta;

  function colorEstado(estado: string) {
    if (estado === "Activo") return { background: "rgba(34,197,94,0.15)", color: "var(--success)" };
    if (estado === "Cerrado") return { background: "rgba(239,68,68,0.15)", color: "var(--danger)" };
    if (estado === "Inactivo") return { background: "rgba(100,100,100,0.15)", color: "var(--text-muted)" };
    return { background: "rgba(245,158,11,0.15)", color: "var(--warning)" };
  }

  const btnAccion = (onClick: () => void, icon: React.ReactNode, titulo: string, color = "var(--text-muted)") => (
    <button onClick={e => { e.stopPropagation(); onClick(); }} title={titulo}
      style={{ color }} className="p-1.5 rounded-lg hover:opacity-70 transition">
      {icon}
    </button>
  );

  const inputStyle = { background: "var(--bg-tertiary)", border: "1px solid var(--border)", color: "var(--text-primary)" };
  const inputClass = "w-full rounded-lg px-3 py-2 text-sm outline-none";

  // ── Vista detalle ──
  if (legajoSeleccionado) {
    return (
      <div>
        <button onClick={() => setLegajoSeleccionado(null)}
          style={{ color: "var(--accent)" }} className="mb-4 text-sm flex items-center gap-1 hover:opacity-80">
          ← Volver a legajos
        </button>
        <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)" }} className="rounded-xl p-6 space-y-6">
          <div className="flex items-start justify-between">
            <div>
              <p style={{ color: "var(--text-muted)" }} className="text-xs mb-1">Legajo</p>
              <h2 style={{ color: "var(--text-primary)" }} className="text-2xl font-bold">{legajoSeleccionado.numero}</h2>
              <p style={{ color: "var(--text-secondary)" }} className="text-sm mt-1">{legajoSeleccionado.caratula}</p>
            </div>
            <div className="flex items-center gap-2">
              <span style={colorEstado(legajoSeleccionado.estado)} className="text-xs px-3 py-1 rounded-full font-medium">
                {legajoSeleccionado.estado}
              </span>
              {btnAccion(() => setLegajoEditar(legajoSeleccionado), <Pencil size={15} />, "Editar legajo", "var(--accent)")}
              {btnAccion(
                () => cambiarEstado(legajoSeleccionado, legajoSeleccionado.estado === "Inactivo" ? "Activo" : "Inactivo"),
                <PowerOff size={15} />,
                legajoSeleccionado.estado === "Inactivo" ? "Activar" : "Desactivar",
                legajoSeleccionado.estado === "Inactivo" ? "var(--success)" : "var(--warning)"
              )}
              {btnAccion(() => setConfirmarBorrar(legajoSeleccionado), <Trash2 size={15} />, "Eliminar legajo", "var(--danger)")}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span style={{ color: "var(--text-muted)" }} className="text-xs">Estado:</span>
            {["Activo", "En seguimiento", "Cerrado"].map(est => (
              <button key={est} onClick={() => cambiarEstado(legajoSeleccionado, est)} disabled={procesando}
                style={legajoSeleccionado.estado === est
                  ? { ...colorEstado(est), border: "1px solid currentColor" }
                  : { background: "var(--bg-tertiary)", color: "var(--text-muted)", border: "1px solid var(--border)" }}
                className="text-xs px-3 py-1 rounded-full transition hover:opacity-80 disabled:opacity-50">
                {est}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: "CUIJ", valor: legajoSeleccionado.cuij || "—" },
              { label: "Delito", valor: legajoSeleccionado.delito },
              { label: "Fecha del hecho", valor: new Date(legajoSeleccionado.fechaHecho).toLocaleDateString("es-AR") },
              { label: "Fiscal", valor: legajoSeleccionado.fiscal || "—" },
              { label: "Email respuesta", valor: legajoSeleccionado.emailRespuesta || "—" },
            ].map(({ label, valor }) => (
              <div key={label} style={{ background: "var(--bg-tertiary)" }} className="rounded-lg p-3">
                <p style={{ color: "var(--text-muted)" }} className="text-xs mb-1">{label}</p>
                <p style={{ color: "var(--text-primary)" }} className="text-sm font-medium break-all">{valor}</p>
              </div>
            ))}
          </div>

          {legajoSeleccionado.victimas.length > 0 && (
            <div>
              <p style={{ color: "var(--text-muted)" }} className="text-xs font-semibold mb-2 uppercase tracking-wide">Víctimas</p>
              <div className="space-y-2">
                {legajoSeleccionado.victimas.map(v => (
                  <div key={v.id} style={{ background: "var(--bg-tertiary)", border: "1px solid var(--border)" }} className="rounded-lg p-3 flex items-center gap-3">
                    <User size={16} style={{ color: "var(--text-muted)" }} />
                    <div>
                      <p style={{ color: "var(--text-primary)" }} className="text-sm font-medium">{v.nombre}</p>
                      <p style={{ color: "var(--text-muted)" }} className="text-xs">{v.dni && `DNI: ${v.dni}`} {v.telefono && `· Tel: ${v.telefono}`}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {legajoSeleccionado.dispositivos.length > 0 && (
            <div>
              <p style={{ color: "var(--text-muted)" }} className="text-xs font-semibold mb-2 uppercase tracking-wide">Dispositivos</p>
              <div className="space-y-2">
                {legajoSeleccionado.dispositivos.map(d => (
                  <div key={d.id} style={{ background: "var(--bg-tertiary)", border: "1px solid var(--border)" }} className="rounded-lg p-3 flex items-center gap-3">
                    <Smartphone size={16} style={{ color: "var(--text-muted)" }} />
                    <div>
                      <p style={{ color: "var(--text-primary)" }} className="text-sm font-medium">{d.marca} {d.modelo}</p>
                      <p style={{ color: "var(--text-muted)" }} className="text-xs">{d.imei && `IMEI: ${d.imei}`} · {d.tipo}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {legajoSeleccionado.observaciones && (
            <div>
              <p style={{ color: "var(--text-muted)" }} className="text-xs font-semibold mb-2 uppercase tracking-wide">Observaciones</p>
              <p style={{ color: "var(--text-secondary)", background: "var(--bg-tertiary)" }} className="text-sm rounded-lg p-3">{legajoSeleccionado.observaciones}</p>
            </div>
          )}

          <div>
            <p style={{ color: "var(--text-muted)" }} className="text-xs font-semibold mb-2 uppercase tracking-wide">Oficios</p>
            {legajoSeleccionado.oficios.length === 0
              ? <p style={{ color: "var(--text-muted)" }} className="text-sm">Sin oficios registrados</p>
              : legajoSeleccionado.oficios.map(o => (
                <div key={o.id} style={{ background: "var(--bg-tertiary)" }} className="rounded-lg p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileText size={15} style={{ color: "var(--text-muted)" }} />
                    <span style={{ color: "var(--text-primary)" }} className="text-sm">{o.operadora}</span>
                  </div>
                  <span style={colorEstado(o.estado)} className="text-xs px-2 py-0.5 rounded-full">{o.estado}</span>
                </div>
              ))
            }
          </div>

          {/* ── Sección de archivos ── */}
          <div>
            <p style={{ color: "var(--text-muted)" }} className="text-xs font-semibold mb-2 uppercase tracking-wide">Archivos y análisis</p>
            <SeccionArchivos legajoId={legajoSeleccionado.id} nroLegajo={legajoSeleccionado.numero} />
          </div>

        </div>

        {legajoEditar && (
          <FormularioLegajo legajoEditar={legajoEditar} onCerrar={() => setLegajoEditar(null)}
            onGuardado={async () => {
              setLegajoEditar(null);
              toast.success("Legajo actualizado correctamente");
              await cargarLegajos(page);
              const res = await fetch(`/api/legajos/${legajoSeleccionado.id}`);
              if (res.ok) setLegajoSeleccionado(await res.json());
            }} />
        )}
        {confirmarBorrar && (
          <ModalConfirmarBorrar legajo={confirmarBorrar} procesando={procesando}
            onCancelar={() => setConfirmarBorrar(null)}
            onConfirmar={() => borrarLegajo(confirmarBorrar)} />
        )}
      </div>
    );
  }

  // ── Vista lista ──
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 style={{ color: "var(--text-primary)" }} className="text-xl font-bold">Legajos</h2>
          <p style={{ color: "var(--text-muted)" }} className="text-sm">
            {datos.total} legajo{datos.total !== 1 ? "s" : ""}
            {hayFiltrosActivos ? " (filtrado)" : ""}
            {datos.totalPages > 1 && ` · Página ${datos.page} de ${datos.totalPages}`}
          </p>
        </div>
        <button onClick={() => setMostrarFormulario(true)}
          style={{ background: "var(--accent)" }}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-white text-sm font-medium hover:opacity-90 transition">
          <Plus size={16} /> Nuevo legajo
        </button>
      </div>

      {/* Búsqueda */}
      <div className="flex gap-2">
        <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)" }} className="flex-1 flex items-center gap-2 rounded-lg px-3 py-2">
          <Search size={16} style={{ color: "var(--text-muted)" }} />
          <input value={busquedaInput} onChange={e => setBusquedaInput(e.target.value)}
            placeholder="Buscar por número, carátula, delito, fiscal, CUIJ o víctima..."
            style={{ background: "transparent", color: "var(--text-primary)" }}
            className="flex-1 text-sm outline-none placeholder:text-[var(--text-muted)]" />
          {busquedaInput && (
            <button onClick={() => { setBusquedaInput(""); setBusqueda(""); setPage(1); }}
              style={{ color: "var(--text-muted)" }} className="hover:opacity-70">
              <X size={14} />
            </button>
          )}
        </div>
        <button onClick={() => setMostrarFiltros(v => !v)}
          style={{
            background: mostrarFiltros || (filtroEstado || filtroFechaDesde || filtroFechaHasta) ? "var(--accent)" : "var(--bg-secondary)",
            border: "1px solid var(--border)",
            color: mostrarFiltros || (filtroEstado || filtroFechaDesde || filtroFechaHasta) ? "#fff" : "var(--text-secondary)",
          }}
          className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition hover:opacity-90">
          <SlidersHorizontal size={15} />
          <span className="hidden md:inline">Filtros</span>
          {(filtroEstado || filtroFechaDesde || filtroFechaHasta) && (
            <span className="w-2 h-2 rounded-full bg-white opacity-90" />
          )}
        </button>
      </div>

      {/* Filtros avanzados */}
      {mostrarFiltros && (
        <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)" }} className="rounded-xl p-4 space-y-3">
          <div className="flex items-center justify-between">
            <p style={{ color: "var(--text-primary)" }} className="text-sm font-medium">Filtros avanzados</p>
            {hayFiltrosActivos && (
              <button onClick={limpiarFiltros} style={{ color: "var(--danger)" }} className="text-xs hover:opacity-70 flex items-center gap-1">
                <X size={12} /> Limpiar todo
              </button>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div>
              <label style={{ color: "var(--text-muted)" }} className="text-xs mb-1 block">Estado</label>
              <select value={filtroEstado} onChange={e => { setFiltroEstado(e.target.value); setPage(1); }}
                style={inputStyle} className={inputClass}>
                <option value="">Todos</option>
                {ESTADOS.map(e => <option key={e} value={e}>{e}</option>)}
              </select>
            </div>
            <div>
              <label style={{ color: "var(--text-muted)" }} className="text-xs mb-1 block">Fecha hecho — desde</label>
              <input type="date" value={filtroFechaDesde}
                onChange={e => { setFiltroFechaDesde(e.target.value); setPage(1); }}
                style={inputStyle} className={inputClass} />
            </div>
            <div>
              <label style={{ color: "var(--text-muted)" }} className="text-xs mb-1 block">Fecha hecho — hasta</label>
              <input type="date" value={filtroFechaHasta}
                onChange={e => { setFiltroFechaHasta(e.target.value); setPage(1); }}
                style={inputStyle} className={inputClass} />
            </div>
          </div>
          {(filtroEstado || filtroFechaDesde || filtroFechaHasta) && (
            <div className="flex flex-wrap gap-2 pt-1">
              {filtroEstado && (
                <span style={{ background: "var(--bg-tertiary)", color: "var(--text-secondary)", border: "1px solid var(--border)" }}
                  className="flex items-center gap-1 text-xs px-2 py-1 rounded-full">
                  Estado: {filtroEstado}
                  <button onClick={() => { setFiltroEstado(""); setPage(1); }} className="hover:opacity-70"><X size={11} /></button>
                </span>
              )}
              {filtroFechaDesde && (
                <span style={{ background: "var(--bg-tertiary)", color: "var(--text-secondary)", border: "1px solid var(--border)" }}
                  className="flex items-center gap-1 text-xs px-2 py-1 rounded-full">
                  Desde: {new Date(filtroFechaDesde).toLocaleDateString("es-AR")}
                  <button onClick={() => { setFiltroFechaDesde(""); setPage(1); }} className="hover:opacity-70"><X size={11} /></button>
                </span>
              )}
              {filtroFechaHasta && (
                <span style={{ background: "var(--bg-tertiary)", color: "var(--text-secondary)", border: "1px solid var(--border)" }}
                  className="flex items-center gap-1 text-xs px-2 py-1 rounded-full">
                  Hasta: {new Date(filtroFechaHasta).toLocaleDateString("es-AR")}
                  <button onClick={() => { setFiltroFechaHasta(""); setPage(1); }} className="hover:opacity-70"><X size={11} /></button>
                </span>
              )}
            </div>
          )}
        </div>
      )}

      {/* Lista */}
      {cargando ? (
        <p style={{ color: "var(--text-muted)" }} className="text-sm text-center py-8">Cargando legajos...</p>
      ) : datos.legajos.length === 0 ? (
        <div className="text-center py-16">
          <FolderOpen size={40} style={{ color: "var(--text-muted)" }} className="mx-auto mb-3" />
          <p style={{ color: "var(--text-muted)" }} className="text-sm">
            {hayFiltrosActivos ? "Sin resultados para los filtros aplicados" : "No hay legajos registrados"}
          </p>
          {hayFiltrosActivos && (
            <button onClick={limpiarFiltros} style={{ color: "var(--accent)" }} className="text-sm mt-2 hover:opacity-80">
              Limpiar filtros
            </button>
          )}
        </div>
      ) : (
        <div className="space-y-2">
          {datos.legajos.map(legajo => (
            <div key={legajo.id}
              style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)", opacity: legajo.estado === "Inactivo" ? 0.5 : 1 }}
              className="rounded-xl p-4 hover:border-[var(--accent)] transition-all group">
              <div className="flex items-start justify-between">
                <button className="flex-1 min-w-0 text-left" onClick={() => setLegajoSeleccionado(legajo)}>
                  <div className="flex items-center gap-2 mb-1">
                    <span style={{ color: "var(--accent)" }} className="text-sm font-bold">#{legajo.numero}</span>
                    <span style={colorEstado(legajo.estado)} className="text-xs px-2 py-0.5 rounded-full">{legajo.estado}</span>
                  </div>
                  <p style={{ color: "var(--text-primary)" }} className="text-sm font-medium truncate">{legajo.caratula}</p>
                  <p style={{ color: "var(--text-muted)" }} className="text-xs mt-0.5">{legajo.delito}</p>
                  <div className="flex items-center gap-4 mt-2 flex-wrap">
                    <span style={{ color: "var(--text-muted)" }} className="text-xs flex items-center gap-1">
                      <User size={11} /> {legajo.victimas.length} víctima{legajo.victimas.length !== 1 ? "s" : ""}
                    </span>
                    <span style={{ color: "var(--text-muted)" }} className="text-xs flex items-center gap-1">
                      <Smartphone size={11} /> {legajo.dispositivos.length} dispositivo{legajo.dispositivos.length !== 1 ? "s" : ""}
                    </span>
                    <span style={{ color: "var(--text-muted)" }} className="text-xs flex items-center gap-1">
                      <Calendar size={11} /> {new Date(legajo.fechaHecho).toLocaleDateString("es-AR")}
                    </span>
                    {legajo.fiscal && (
                      <span style={{ color: "var(--text-muted)" }} className="text-xs flex items-center gap-1">
                        <User size={11} /> {legajo.fiscal}
                      </span>
                    )}
                  </div>
                </button>
                <div className="flex items-center gap-1 ml-2">
                  {btnAccion(() => setLegajoEditar(legajo), <Pencil size={14} />, "Editar", "var(--accent)")}
                  {btnAccion(
                    () => cambiarEstado(legajo, legajo.estado === "Inactivo" ? "Activo" : "Inactivo"),
                    <PowerOff size={14} />,
                    legajo.estado === "Inactivo" ? "Activar" : "Desactivar",
                    legajo.estado === "Inactivo" ? "var(--success)" : "var(--warning)"
                  )}
                  {btnAccion(() => setConfirmarBorrar(legajo), <Trash2 size={14} />, "Eliminar", "var(--danger)")}
                  <ChevronRight size={16} style={{ color: "var(--text-muted)" }} className="ml-1 group-hover:translate-x-0.5 transition-transform" />
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
                  className="w-8 h-8 rounded-lg text-sm hover:opacity-80 transition">
                  {p}
                </button>
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
        <FormularioLegajo onCerrar={() => setMostrarFormulario(false)}
          onGuardado={() => { setMostrarFormulario(false); toast.success("Legajo creado correctamente"); cargarLegajos(1); setPage(1); }} />
      )}
      {legajoEditar && (
        <FormularioLegajo legajoEditar={legajoEditar} onCerrar={() => setLegajoEditar(null)}
          onGuardado={() => { setLegajoEditar(null); toast.success("Legajo actualizado correctamente"); cargarLegajos(page); }} />
      )}
      {confirmarBorrar && (
        <ModalConfirmarBorrar legajo={confirmarBorrar} procesando={procesando}
          onCancelar={() => setConfirmarBorrar(null)}
          onConfirmar={() => borrarLegajo(confirmarBorrar)} />
      )}
    </div>
  );
}

function ModalConfirmarBorrar({ legajo, procesando, onCancelar, onConfirmar }: {
  legajo: Legajo; procesando: boolean; onCancelar: () => void; onConfirmar: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.6)" }}>
      <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)" }} className="rounded-xl p-6 max-w-sm w-full space-y-4">
        <div className="flex items-center gap-3">
          <div style={{ background: "rgba(239,68,68,0.15)" }} className="p-2 rounded-lg">
            <AlertTriangle size={20} style={{ color: "var(--danger)" }} />
          </div>
          <div>
            <h3 style={{ color: "var(--text-primary)" }} className="font-semibold">Eliminar legajo</h3>
            <p style={{ color: "var(--text-muted)" }} className="text-xs">Esta acción no se puede deshacer</p>
          </div>
        </div>
        <p style={{ color: "var(--text-secondary)" }} className="text-sm">
          ¿Estás seguro que querés eliminar el legajo <span style={{ color: "var(--text-primary)" }} className="font-semibold">#{legajo.numero}</span>? Se eliminarán también todas las víctimas, dispositivos y oficios asociados.
        </p>
        <div className="flex gap-3">
          <button onClick={onCancelar}
            style={{ background: "var(--bg-tertiary)", color: "var(--text-secondary)", border: "1px solid var(--border)" }}
            className="flex-1 py-2 rounded-lg text-sm hover:opacity-80 transition">Cancelar</button>
          <button onClick={onConfirmar} disabled={procesando} style={{ background: "var(--danger)" }}
            className="flex-1 py-2 rounded-lg text-sm text-white hover:opacity-80 transition disabled:opacity-50">
            {procesando ? "Eliminando..." : "Eliminar"}
          </button>
        </div>
      </div>
    </div>
  );
}