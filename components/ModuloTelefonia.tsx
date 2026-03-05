"use client";
import { useState, useEffect, useCallback } from "react";
import { Search, Upload, Plus, ChevronLeft, ChevronRight, X, Eye, Trash2, Phone } from "lucide-react";
import { toast } from "sonner";
import * as XLSX from "xlsx";

interface RegistroTelefonia {
  id: string;
  anio?: number;
  nroLegajo?: string;
  nroInterno?: number;
  cuij?: string;
  fechaHecho?: string;
  fechaIngreso?: string;
  lugarHecho?: string;
  barrio?: string;
  victima?: string;
  causa?: string;
  aparato?: string;
  empresa?: string;
  abonado?: string;
  imei?: string;
  color?: string;
  correo?: string;
  clave?: string;
  fiscal?: string;
  depOrigen?: string;
  nroCom?: string;
  rpiComisaria?: string;
  rpiCompleja?: string;
  observaciones?: string;
  estadoLegajo?: string;
  elevaciones?: string;
  imputados?: string;
  requisa?: string;
  procedimientos?: string;
  createdAt: string;
}

const LIMIT = 20;

const DATOS_INICIALES = {
  registros: [] as RegistroTelefonia[],
  total: 0,
  page: 1,
  totalPages: 0,
};

export default function ModuloTelefonia() {
  const [datos, setDatos] = useState(DATOS_INICIALES);
  const [page, setPage] = useState(1);
  const [busqueda, setBusqueda] = useState("");
  const [filtroAnio, setFiltroAnio] = useState("");
  const [filtroCausa, setFiltroCausa] = useState("");
  const [filtroDesde, setFiltroDesde] = useState("");
  const [filtroHasta, setFiltroHasta] = useState("");
  const [cargando, setCargando] = useState(false);
  const [importando, setImportando] = useState(false);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [registroDetalle, setRegistroDetalle] = useState<RegistroTelefonia | null>(null);
  const [registroEliminar, setRegistroEliminar] = useState<string | null>(null);
  const [recargar, setRecargar] = useState(0);

  const cargarRegistros = useCallback(async (p: number) => {
    setCargando(true);
    try {
      const params = new URLSearchParams({ page: String(p), limit: String(LIMIT) });
      if (busqueda) params.set("q", busqueda);
      if (filtroAnio) params.set("anio", filtroAnio);
      if (filtroCausa) params.set("causa", filtroCausa);
      if (filtroDesde) params.set("desde", filtroDesde);
      if (filtroHasta) params.set("hasta", filtroHasta);

      const res = await fetch(`/api/telefonia?${params}`);
      if (res.ok) {
        const json = await res.json();
        setDatos({
          registros: json.registros ?? [],
          total: json.total ?? 0,
          page: json.page ?? 1,
          totalPages: json.totalPages ?? 0,
        });
      } else {
        toast.error("Error al cargar registros");
        setDatos(DATOS_INICIALES);
      }
    } catch {
      toast.error("Error de conexión");
      setDatos(DATOS_INICIALES);
    } finally {
      setCargando(false);
    }
  }, [busqueda, filtroAnio, filtroCausa, filtroDesde, filtroHasta]);

  useEffect(() => {
    cargarRegistros(page);
  }, [page, recargar, cargarRegistros]);

  useEffect(() => {
    const t = setTimeout(() => { setPage(1); setRecargar(r => r + 1); }, 400);
    return () => clearTimeout(t);
  }, [busqueda, filtroAnio, filtroCausa, filtroDesde, filtroHasta]);

  const handleImportar = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImportando(true);
    toast.info("Procesando Excel...");
    try {
      const buffer = await file.arrayBuffer();
      const wb = XLSX.read(buffer, { type: "array", cellDates: true });
      const ws = wb.Sheets[wb.SheetNames[0]];

      // raw: true para que fechas lleguen como Date e IMEI como número real (no notación científica)
      const rows: any[][] = XLSX.utils.sheet_to_json(ws, {
        header: 1,
        raw: true,
        defval: null,
      });

      // Fila 1 = encabezados, Fila 2 = basura (FFFF...) → empezamos desde fila 3
      const dataRows = rows.slice(2).filter(r =>
        r.some(c => c !== null && c !== undefined && c !== "")
      );

      toast.info(`Importando ${dataRows.length} registros...`);

      const res = await fetch("/api/telefonia/importar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ registros: dataRows }),
      });

      if (res.ok) {
        const json = await res.json();
        toast.success(`✓ ${json.insertados} registros importados correctamente`);
        setPage(1);
        setRecargar(r => r + 1);
      } else {
        const err = await res.json();
        toast.error(err.error || "Error al importar");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error al procesar el archivo");
    } finally {
      setImportando(false);
      e.target.value = "";
    }
  };

  const eliminarRegistro = async () => {
    if (!registroEliminar) return;
    try {
      const res = await fetch(`/api/telefonia/${registroEliminar}`, { method: "DELETE" });
      if (res.ok) {
        toast.success("Registro eliminado");
        setRegistroEliminar(null);
        setRecargar(r => r + 1);
      } else {
        toast.error("Error al eliminar");
      }
    } catch {
      toast.error("Error de conexión");
    }
  };

  const formatFecha = (f?: string) => {
    if (!f) return "—";
    try { return new Date(f).toLocaleDateString("es-AR"); } catch { return f; }
  };

  const registros = datos.registros;

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <Phone className="w-6 h-6 text-blue-400" />
            Base de Datos — Telefonía
          </h1>
          <p className="text-gray-400 text-sm mt-1">{datos.total.toLocaleString()} registros</p>
        </div>
        <div className="flex gap-2">
          <label className={`flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer text-sm font-medium transition-colors ${importando ? "bg-gray-700 text-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700 text-white"}`}>
            <Upload className="w-4 h-4" />
            {importando ? "Importando..." : "Importar Excel"}
            <input type="file" accept=".xlsx,.xls" className="hidden" onChange={handleImportar} disabled={importando} />
          </label>
          <button onClick={() => setMostrarFormulario(true)} className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors">
            <Plus className="w-4 h-4" />
            Nuevo registro
          </button>
        </div>
      </div>

      {/* Filtros */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="relative lg:col-span-2">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar por víctima, IMEI, causa, legajo..."
            value={busqueda}
            onChange={e => setBusqueda(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm placeholder-gray-400 focus:outline-none focus:border-blue-500"
          />
        </div>
        <select value={filtroAnio} onChange={e => setFiltroAnio(e.target.value)} className="px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500">
          <option value="">Todos los años</option>
          {/* Desde 2026 hacia atrás hasta 2015 */}
          {Array.from({ length: 12 }, (_, i) => 2026 - i).map(a => (
            <option key={a} value={a}>{a}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Filtrar por causa/hecho..."
          value={filtroCausa}
          onChange={e => setFiltroCausa(e.target.value)}
          className="px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm placeholder-gray-400 focus:outline-none focus:border-blue-500"
        />
        <div className="flex gap-2 items-center">
          <span className="text-gray-400 text-sm whitespace-nowrap">Desde</span>
          <input type="date" value={filtroDesde} onChange={e => setFiltroDesde(e.target.value)} className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500" />
        </div>
        <div className="flex gap-2 items-center">
          <span className="text-gray-400 text-sm whitespace-nowrap">Hasta</span>
          <input type="date" value={filtroHasta} onChange={e => setFiltroHasta(e.target.value)} className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500" />
        </div>
        {(busqueda || filtroAnio || filtroCausa || filtroDesde || filtroHasta) && (
          <button
            onClick={() => { setBusqueda(""); setFiltroAnio(""); setFiltroCausa(""); setFiltroDesde(""); setFiltroHasta(""); }}
            className="flex items-center gap-1 px-3 py-2 text-gray-400 hover:text-white text-sm transition-colors"
          >
            <X className="w-4 h-4" /> Limpiar filtros
          </button>
        )}
      </div>

      {/* Tabla */}
      <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-700 bg-gray-900">
                <th className="text-left px-4 py-3 text-gray-400 font-medium">Año</th>
                <th className="text-left px-4 py-3 text-gray-400 font-medium">N° Legajo</th>
                <th className="text-left px-4 py-3 text-gray-400 font-medium">Víctima</th>
                <th className="text-left px-4 py-3 text-gray-400 font-medium">Causa / Hecho</th>
                <th className="text-left px-4 py-3 text-gray-400 font-medium">Aparato</th>
                <th className="text-left px-4 py-3 text-gray-400 font-medium min-w-[160px]">IMEI</th>
                <th className="text-left px-4 py-3 text-gray-400 font-medium">Fecha Hecho</th>
                <th className="text-left px-4 py-3 text-gray-400 font-medium">Fiscal</th>
                <th className="text-left px-4 py-3 text-gray-400 font-medium">Estado</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {cargando ? (
                <tr><td colSpan={10} className="text-center py-12 text-gray-400">Cargando...</td></tr>
              ) : registros.length === 0 ? (
                <tr><td colSpan={10} className="text-center py-12 text-gray-400">
                  {datos.total === 0 ? "No hay registros. Importá un Excel para comenzar." : "Sin resultados para los filtros aplicados."}
                </td></tr>
              ) : registros.map(r => (
                <tr key={r.id} className="border-b border-gray-700 hover:bg-gray-750 transition-colors">
                  <td className="px-4 py-3 text-gray-300 whitespace-nowrap">{r.anio ?? "—"}</td>
                  <td className="px-4 py-3 text-blue-400 font-medium whitespace-nowrap">{r.nroLegajo ?? "—"}</td>
                  <td className="px-4 py-3 text-white font-medium">{r.victima ?? "—"}</td>
                  <td className="px-4 py-3 text-gray-300">{r.causa ?? "—"}</td>
                  <td className="px-4 py-3 text-gray-300 whitespace-nowrap">{r.aparato ?? "—"}</td>
                  <td className="px-4 py-3 text-gray-300 font-mono text-xs whitespace-nowrap">{r.imei ?? "—"}</td>
                  <td className="px-4 py-3 text-gray-300 whitespace-nowrap">{formatFecha(r.fechaHecho)}</td>
                  <td className="px-4 py-3 text-gray-300 whitespace-nowrap">{r.fiscal ?? "—"}</td>
                  <td className="px-4 py-3">
                    {r.estadoLegajo ? (
                      <span className="px-2 py-1 rounded-full text-xs bg-gray-700 text-gray-300 whitespace-nowrap">{r.estadoLegajo}</span>
                    ) : "—"}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex gap-2 justify-end">
                      <button onClick={() => setRegistroDetalle(r)} className="p-1.5 text-gray-400 hover:text-blue-400 transition-colors" title="Ver detalle">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button onClick={() => setRegistroEliminar(r.id)} className="p-1.5 text-gray-400 hover:text-red-400 transition-colors" title="Eliminar">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Paginación */}
        {datos.totalPages > 1 && (
          <div className="flex items-center justify-between px-4 py-3 border-t border-gray-700">
            <span className="text-gray-400 text-sm">
              Página {datos.page} de {datos.totalPages} — {datos.total.toLocaleString()} registros
            </span>
            <div className="flex gap-2">
              <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1} className="p-2 rounded-lg bg-gray-700 text-gray-300 hover:bg-gray-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button onClick={() => setPage(p => Math.min(datos.totalPages, p + 1))} disabled={page === datos.totalPages} className="p-2 rounded-lg bg-gray-700 text-gray-300 hover:bg-gray-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Modal Detalle */}
      {registroDetalle && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-xl border border-gray-700 w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-gray-700 sticky top-0 bg-gray-800">
              <div>
                <h2 className="text-lg font-bold text-white">Legajo {registroDetalle.nroLegajo ?? "—"}</h2>
                <p className="text-gray-400 text-sm">{registroDetalle.victima ?? "Sin víctima"}</p>
              </div>
              <button onClick={() => setRegistroDetalle(null)} className="p-2 text-gray-400 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 grid grid-cols-2 gap-4">
              {[
                ["Año", registroDetalle.anio],
                ["N° Legajo", registroDetalle.nroLegajo],
                ["N° Interno", registroDetalle.nroInterno],
                ["CUIJ", registroDetalle.cuij],
                ["Fecha Hecho", formatFecha(registroDetalle.fechaHecho)],
                ["Fecha Ingreso", formatFecha(registroDetalle.fechaIngreso)],
                ["Lugar del Hecho", registroDetalle.lugarHecho],
                ["Barrio", registroDetalle.barrio],
                ["Víctima", registroDetalle.victima],
                ["Causa", registroDetalle.causa],
                ["Aparato", registroDetalle.aparato],
                ["Empresa", registroDetalle.empresa],
                ["Abonado", registroDetalle.abonado],
                ["IMEI", registroDetalle.imei],
                ["Color", registroDetalle.color],
                ["Correo", registroDetalle.correo],
                ["Clave", registroDetalle.clave],
                ["Fiscal", registroDetalle.fiscal],
                ["Dep. Origen", registroDetalle.depOrigen],
                ["N° COM", registroDetalle.nroCom],
                ["RPI Comisaría", registroDetalle.rpiComisaria],
                ["RPI Compleja", registroDetalle.rpiCompleja],
                ["Estado Legajo", registroDetalle.estadoLegajo],
                ["Imputados", registroDetalle.imputados],
                ["Requisa", registroDetalle.requisa],
              ].map(([label, value]) => (
                <div key={String(label)} className="space-y-1">
                  <p className="text-gray-400 text-xs uppercase tracking-wide">{label}</p>
                  <p className="text-white text-sm break-all">{value ? String(value) : "—"}</p>
                </div>
              ))}
              {registroDetalle.observaciones && (
                <div className="col-span-2 space-y-1">
                  <p className="text-gray-400 text-xs uppercase tracking-wide">Observaciones</p>
                  <p className="text-white text-sm">{registroDetalle.observaciones}</p>
                </div>
              )}
              {registroDetalle.elevaciones && (
                <div className="col-span-2 space-y-1">
                  <p className="text-gray-400 text-xs uppercase tracking-wide">Elevaciones</p>
                  <p className="text-white text-sm">{registroDetalle.elevaciones}</p>
                </div>
              )}
              {registroDetalle.procedimientos && (
                <div className="col-span-2 space-y-1">
                  <p className="text-gray-400 text-xs uppercase tracking-wide">Procedimientos</p>
                  <p className="text-white text-sm">{registroDetalle.procedimientos}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Modal Eliminar */}
      {registroEliminar && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-xl border border-gray-700 p-6 w-full max-w-sm mx-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                <Trash2 className="w-5 h-5 text-red-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Eliminar registro</h3>
                <p className="text-gray-400 text-sm">Esta acción no se puede deshacer</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button onClick={() => setRegistroEliminar(null)} className="flex-1 px-4 py-2 bg-gray-700 text-white rounded-lg text-sm hover:bg-gray-600 transition-colors">Cancelar</button>
              <button onClick={eliminarRegistro} className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700 transition-colors">Eliminar</button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Formulario Nuevo Registro */}
      {mostrarFormulario && (
        <FormularioTelefonia
          onCerrar={() => setMostrarFormulario(false)}
          onGuardado={() => { setMostrarFormulario(false); setPage(1); setRecargar(r => r + 1); }}
        />
      )}
    </div>
  );
}

function FormularioTelefonia({ onCerrar, onGuardado }: { onCerrar: () => void; onGuardado: () => void }) {
  const [form, setForm] = useState<Record<string, string>>({});
  const [guardando, setGuardando] = useState(false);

  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  const guardar = async () => {
    if (!form.victima && !form.nroLegajo) {
      toast.error("Ingresá al menos el N° de legajo o la víctima");
      return;
    }
    setGuardando(true);
    try {
      const res = await fetch("/api/telefonia", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          anio: form.anio ? parseInt(form.anio) : null,
          nroInterno: form.nroInterno ? parseInt(form.nroInterno) : null,
          fechaHecho: form.fechaHecho || null,
          fechaIngreso: form.fechaIngreso || null,
        }),
      });
      if (res.ok) {
        toast.success("Registro creado correctamente");
        onGuardado();
      } else {
        const err = await res.json();
        toast.error(err.error || "Error al guardar");
      }
    } catch {
      toast.error("Error de conexión");
    } finally {
      setGuardando(false);
    }
  };

  const campos = [
    ["anio", "Año", "number"], ["nroLegajo", "N° Legajo", "text"], ["nroInterno", "N° Interno", "number"],
    ["cuij", "CUIJ", "text"], ["fechaHecho", "Fecha Hecho", "date"], ["fechaIngreso", "Fecha Ingreso", "date"],
    ["lugarHecho", "Lugar del Hecho", "text"], ["barrio", "Barrio", "text"],
    ["victima", "Víctima", "text"], ["causa", "Causa / Hecho", "text"],
    ["aparato", "Aparato", "text"], ["empresa", "Empresa", "text"],
    ["abonado", "Abonado", "text"], ["imei", "IMEI", "text"],
    ["color", "Color", "text"], ["correo", "Correo", "text"],
    ["clave", "Clave", "text"], ["fiscal", "Fiscal", "text"],
    ["depOrigen", "Dep. Origen", "text"], ["nroCom", "N° COM", "text"],
    ["rpiComisaria", "RPI Comisaría", "text"], ["rpiCompleja", "RPI Compleja", "text"],
    ["estadoLegajo", "Estado Legajo", "text"], ["imputados", "Imputados", "text"],
    ["requisa", "Requisa", "text"],
  ];

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-xl border border-gray-700 w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-700 sticky top-0 bg-gray-800">
          <h2 className="text-lg font-bold text-white">Nuevo Registro — Telefonía</h2>
          <button onClick={onCerrar} className="p-2 text-gray-400 hover:text-white transition-colors"><X className="w-5 h-5" /></button>
        </div>
        <div className="p-6 grid grid-cols-2 gap-4">
          {campos.map(([key, label, type]) => (
            <div key={key} className="space-y-1">
              <label className="text-gray-400 text-xs uppercase tracking-wide">{label}</label>
              <input
                type={type}
                value={form[key] ?? ""}
                onChange={e => set(key, e.target.value)}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500"
              />
            </div>
          ))}
          <div className="col-span-2 space-y-1">
            <label className="text-gray-400 text-xs uppercase tracking-wide">Observaciones</label>
            <textarea value={form.observaciones ?? ""} onChange={e => set("observaciones", e.target.value)} rows={3} className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500 resize-none" />
          </div>
          <div className="col-span-2 space-y-1">
            <label className="text-gray-400 text-xs uppercase tracking-wide">Procedimientos</label>
            <textarea value={form.procedimientos ?? ""} onChange={e => set("procedimientos", e.target.value)} rows={3} className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500 resize-none" />
          </div>
        </div>
        <div className="flex gap-3 p-6 border-t border-gray-700">
          <button onClick={onCerrar} className="flex-1 px-4 py-2 bg-gray-700 text-white rounded-lg text-sm hover:bg-gray-600 transition-colors">Cancelar</button>
          <button onClick={guardar} disabled={guardando} className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 disabled:opacity-50 transition-colors">
            {guardando ? "Guardando..." : "Guardar registro"}
          </button>
        </div>
      </div>
    </div>
  );
}