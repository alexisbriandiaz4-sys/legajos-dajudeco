"use client";
import { useState, useEffect, useCallback } from "react";
import { Search, Upload, Plus, ChevronLeft, ChevronRight, X, Eye, Trash2, Phone, AlertTriangle, Database } from "lucide-react";
import { toast } from "sonner";
import * as XLSX from "xlsx";

// ─── TIPOS ───────────────────────────────────────────────────────────────────

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

interface RegistroEstafa {
  id: string;
  nroInterno?: number;
  cuij?: string;
  fechaHecho?: string;
  fechaDenuncia?: string;
  dependencia?: string;
  nroLegajo?: string;
  recibido?: string | null;
  victima?: string;
  telefonoVictima?: string;
  caratula?: string;
  fiscal?: string;
  ardid?: string;
  seudonimo?: string;
  telefonoReferencia?: string;
  nombreReferencia?: string;
  imei?: string;
  otrosTelefonos?: string;
  cbu?: string;
  titulares?: string;
  otrosCbu?: string;
  estadoLegajo?: string;
  complementos?: string;
  createdAt: string;
}

interface RegistroGeneral {
  id: string;
  tipo: "telefonia" | "estafa";
  victima?: string;
  nroLegajo?: string;
  fiscal?: string;
  fechaHecho?: string;
  fechaIngreso?: string;
  causa?: string;        // telefonia
  ardid?: string;        // estafa
  aparato?: string;      // telefonia
  imei?: string;
  estadoLegajo?: string;
  createdAt: string;
  original: RegistroTelefonia | RegistroEstafa;
}

type Pestana = "telefonia" | "estafas" | "general";
const LIMIT = 20;
const DATOS_INICIALES = { registros: [] as any[], total: 0, page: 1, totalPages: 0 };

// ─── HELPERS ─────────────────────────────────────────────────────────────────

const formatFecha = (f?: string | null) => {
  if (!f) return "—";
  try { return new Date(f).toLocaleDateString("es-AR"); } catch { return f; }
};

// ─── COMPONENTE PRINCIPAL ────────────────────────────────────────────────────

export default function ModuloBaseGeneral() {
  const [pestana, setPestana] = useState<Pestana>("telefonia");

  return (
    <div className="p-6 space-y-4">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white flex items-center gap-2">
          <Database className="w-6 h-6 text-blue-400" />
          Base General
        </h1>
        <p className="text-gray-400 text-sm mt-1">Registros unificados de telefonía y estafas</p>
      </div>

      {/* Pestañas */}
      <div className="flex gap-1 bg-gray-900 p-1 rounded-xl w-fit">
        {([
          { id: "telefonia", label: "Telefonía", icon: Phone },
          { id: "estafas",   label: "Estafas",   icon: AlertTriangle },
          { id: "general",   label: "General",   icon: Database },
        ] as { id: Pestana; label: string; icon: any }[]).map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setPestana(id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              pestana === id
                ? "bg-blue-600 text-white"
                : "text-gray-400 hover:text-white hover:bg-gray-800"
            }`}
          >
            <Icon className="w-4 h-4" />
            {label}
          </button>
        ))}
      </div>

      {/* Contenido */}
      {pestana === "telefonia" && <TabTelefonia />}
      {pestana === "estafas"   && <TabEstafas />}
      {pestana === "general"   && <TabGeneral />}
    </div>
  );
}

// ─── TAB TELEFONÍA ────────────────────────────────────────────────────────────

function TabTelefonia() {
  const [datos, setDatos] = useState(DATOS_INICIALES);
  const [page, setPage] = useState(1);
  const [busqueda, setBusqueda] = useState("");
  const [filtroAnio, setFiltroAnio] = useState("");
  const [filtroCausa, setFiltroCausa] = useState("");
  const [filtroDesde, setFiltroDesde] = useState("");
  const [filtroHasta, setFiltroHasta] = useState("");
  const [cargando, setCargando] = useState(false);
  const [importando, setImportando] = useState(false);
  const [detalle, setDetalle] = useState<RegistroTelefonia | null>(null);
  const [eliminar, setEliminar] = useState<string | null>(null);
  const [recargar, setRecargar] = useState(0);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const cargar = useCallback(async (p: number) => {
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
        setDatos({ registros: json.registros ?? [], total: json.total ?? 0, page: json.page ?? 1, totalPages: json.totalPages ?? 0 });
      } else {
        toast.error("Error al cargar registros");
        setDatos(DATOS_INICIALES);
      }
    } catch { toast.error("Error de conexión"); setDatos(DATOS_INICIALES); }
    finally { setCargando(false); }
  }, [busqueda, filtroAnio, filtroCausa, filtroDesde, filtroHasta]);

  useEffect(() => { cargar(page); }, [page, recargar, cargar]);
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
      const rows: any[][] = XLSX.utils.sheet_to_json(ws, { header: 1, raw: true, defval: null });
      const dataRows = rows.slice(2).filter(r => r.some(c => c !== null && c !== undefined && c !== ""));
      toast.info(`Importando ${dataRows.length} registros...`);
      const res = await fetch("/api/telefonia/importar", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ registros: dataRows }),
      });
      if (res.ok) {
        const json = await res.json();
        toast.success(`✓ ${json.insertados} registros importados`);
        setPage(1); setRecargar(r => r + 1);
      } else {
        const err = await res.json();
        toast.error(err.error || "Error al importar");
      }
    } catch (err) { console.error(err); toast.error("Error al procesar el archivo"); }
    finally { setImportando(false); e.target.value = ""; }
  };

  const confirmarEliminar = async () => {
    if (!eliminar) return;
    try {
      const res = await fetch(`/api/telefonia/${eliminar}`, { method: "DELETE" });
      if (res.ok) { toast.success("Registro eliminado"); setEliminar(null); setRecargar(r => r + 1); }
      else toast.error("Error al eliminar");
    } catch { toast.error("Error de conexión"); }
  };

  return (
    <div className="space-y-4">
      {/* Acciones */}
      <div className="flex justify-between items-center">
        <p className="text-gray-400 text-sm">{datos.total.toLocaleString()} registros</p>
        <div className="flex gap-2">
          <label className={`flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer text-sm font-medium transition-colors ${importando ? "bg-gray-700 text-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700 text-white"}`}>
            <Upload className="w-4 h-4" />
            {importando ? "Importando..." : "Importar Excel"}
            <input type="file" accept=".xlsx,.xls" className="hidden" onChange={handleImportar} disabled={importando} />
          </label>
          <button onClick={() => setMostrarFormulario(true)} className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors">
            <Plus className="w-4 h-4" /> Nuevo registro
          </button>
        </div>
      </div>

      {/* Filtros */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="relative lg:col-span-2">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input type="text" placeholder="Buscar por víctima, IMEI, causa, legajo..." value={busqueda} onChange={e => setBusqueda(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm placeholder-gray-400 focus:outline-none focus:border-blue-500" />
        </div>
        <select value={filtroAnio} onChange={e => setFiltroAnio(e.target.value)} className="px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500">
          <option value="">Todos los años</option>
          {Array.from({ length: 12 }, (_, i) => 2026 - i).map(a => <option key={a} value={a}>{a}</option>)}
        </select>
        <input type="text" placeholder="Filtrar por causa..." value={filtroCausa} onChange={e => setFiltroCausa(e.target.value)}
          className="px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm placeholder-gray-400 focus:outline-none focus:border-blue-500" />
        <div className="flex gap-2 items-center">
          <span className="text-gray-400 text-sm whitespace-nowrap">Desde</span>
          <input type="date" value={filtroDesde} onChange={e => setFiltroDesde(e.target.value)} className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500" />
        </div>
        <div className="flex gap-2 items-center">
          <span className="text-gray-400 text-sm whitespace-nowrap">Hasta</span>
          <input type="date" value={filtroHasta} onChange={e => setFiltroHasta(e.target.value)} className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500" />
        </div>
        {(busqueda || filtroAnio || filtroCausa || filtroDesde || filtroHasta) && (
          <button onClick={() => { setBusqueda(""); setFiltroAnio(""); setFiltroCausa(""); setFiltroDesde(""); setFiltroHasta(""); }}
            className="flex items-center gap-1 px-3 py-2 text-gray-400 hover:text-white text-sm transition-colors">
            <X className="w-4 h-4" /> Limpiar
          </button>
        )}
      </div>

      {/* Tabla */}
      <TablaConPaginacion
        cargando={cargando} datos={datos} page={page} setPage={setPage}
        columnas={["Año", "N° Legajo", "Víctima", "Causa", "Aparato", "IMEI", "Fecha Hecho", "Fiscal", "Estado"]}
        renderFila={(r: RegistroTelefonia) => (
          <>
            <td className="px-4 py-3 text-gray-300 whitespace-nowrap">{r.anio ?? "—"}</td>
            <td className="px-4 py-3 text-blue-400 font-medium whitespace-nowrap">{r.nroLegajo ?? "—"}</td>
            <td className="px-4 py-3 text-white font-medium">{r.victima ?? "—"}</td>
            <td className="px-4 py-3 text-gray-300">{r.causa ?? "—"}</td>
            <td className="px-4 py-3 text-gray-300 whitespace-nowrap">{r.aparato ?? "—"}</td>
            <td className="px-4 py-3 text-gray-300 font-mono text-xs whitespace-nowrap">{r.imei ?? "—"}</td>
            <td className="px-4 py-3 text-gray-300 whitespace-nowrap">{formatFecha(r.fechaHecho)}</td>
            <td className="px-4 py-3 text-gray-300 whitespace-nowrap">{r.fiscal ?? "—"}</td>
            <td className="px-4 py-3">{r.estadoLegajo ? <span className="px-2 py-1 rounded-full text-xs bg-gray-700 text-gray-300">{r.estadoLegajo}</span> : "—"}</td>
          </>
        )}
        onVer={(r) => setDetalle(r)}
        onEliminar={(r) => setEliminar(r.id)}
        mensajeVacio="No hay registros. Importá un Excel para comenzar."
      />

      {/* Modal Detalle */}
      {detalle && (
        <ModalDetalleTelefonia registro={detalle} onCerrar={() => setDetalle(null)} />
      )}

      {/* Modal Eliminar */}
      {eliminar && <ModalEliminar onCancelar={() => setEliminar(null)} onConfirmar={confirmarEliminar} />}

      {/* Formulario */}
      {mostrarFormulario && (
        <FormularioTelefonia
          onCerrar={() => setMostrarFormulario(false)}
          onGuardado={() => { setMostrarFormulario(false); setPage(1); setRecargar(r => r + 1); }}
        />
      )}
    </div>
  );
}

// ─── TAB ESTAFAS ──────────────────────────────────────────────────────────────

function TabEstafas() {
  const [datos, setDatos] = useState(DATOS_INICIALES);
  const [page, setPage] = useState(1);
  const [busqueda, setBusqueda] = useState("");
  const [filtroArdid, setFiltroArdid] = useState("");
  const [filtroDesde, setFiltroDesde] = useState("");
  const [filtroHasta, setFiltroHasta] = useState("");
  const [cargando, setCargando] = useState(false);
  const [importando, setImportando] = useState(false);
  const [detalle, setDetalle] = useState<RegistroEstafa | null>(null);
  const [eliminar, setEliminar] = useState<string | null>(null);
  const [recargar, setRecargar] = useState(0);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const cargar = useCallback(async (p: number) => {
    setCargando(true);
    try {
      const params = new URLSearchParams({ page: String(p), limit: String(LIMIT) });
      if (busqueda) params.set("q", busqueda);
      if (filtroArdid) params.set("ardid", filtroArdid);
      if (filtroDesde) params.set("desde", filtroDesde);
      if (filtroHasta) params.set("hasta", filtroHasta);
      const res = await fetch(`/api/estafas?${params}`);
      if (res.ok) {
        const json = await res.json();
        setDatos({ registros: json.registros ?? [], total: json.total ?? 0, page: json.page ?? 1, totalPages: json.totalPages ?? 0 });
      } else { toast.error("Error al cargar registros"); setDatos(DATOS_INICIALES); }
    } catch { toast.error("Error de conexión"); setDatos(DATOS_INICIALES); }
    finally { setCargando(false); }
  }, [busqueda, filtroArdid, filtroDesde, filtroHasta]);

  useEffect(() => { cargar(page); }, [page, recargar, cargar]);
  useEffect(() => {
    const t = setTimeout(() => { setPage(1); setRecargar(r => r + 1); }, 400);
    return () => clearTimeout(t);
  }, [busqueda, filtroArdid, filtroDesde, filtroHasta]);

  const handleImportar = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImportando(true);
    toast.info("Procesando Excel...");
    try {
      const buffer = await file.arrayBuffer();
      const wb = XLSX.read(buffer, { type: "array", cellDates: true });
      const ws = wb.Sheets[wb.SheetNames[0]];
      const rows: any[][] = XLSX.utils.sheet_to_json(ws, { header: 1, raw: true, defval: null });
      // Fila 1 = encabezados, empezamos desde fila 2
      const dataRows = rows.slice(1).filter(r => r.some(c => c !== null && c !== undefined && c !== ""));
      toast.info(`Importando ${dataRows.length} registros...`);
      const res = await fetch("/api/estafas/importar", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ registros: dataRows }),
      });
      if (res.ok) {
        const json = await res.json();
        toast.success(`✓ ${json.insertados} registros importados`);
        setPage(1); setRecargar(r => r + 1);
      } else {
        const err = await res.json();
        toast.error(err.error || "Error al importar");
      }
    } catch (err) { console.error(err); toast.error("Error al procesar el archivo"); }
    finally { setImportando(false); e.target.value = ""; }
  };

  const confirmarEliminar = async () => {
    if (!eliminar) return;
    try {
      const res = await fetch(`/api/estafas/${eliminar}`, { method: "DELETE" });
      if (res.ok) { toast.success("Registro eliminado"); setEliminar(null); setRecargar(r => r + 1); }
      else toast.error("Error al eliminar");
    } catch { toast.error("Error de conexión"); }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <p className="text-gray-400 text-sm">{datos.total.toLocaleString()} registros</p>
        <div className="flex gap-2">
          <label className={`flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer text-sm font-medium transition-colors ${importando ? "bg-gray-700 text-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700 text-white"}`}>
            <Upload className="w-4 h-4" />
            {importando ? "Importando..." : "Importar Excel"}
            <input type="file" accept=".xlsx,.xls" className="hidden" onChange={handleImportar} disabled={importando} />
          </label>
          <button onClick={() => setMostrarFormulario(true)} className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors">
            <Plus className="w-4 h-4" /> Nuevo registro
          </button>
        </div>
      </div>

      {/* Filtros */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="relative lg:col-span-2">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input type="text" placeholder="Buscar por víctima, CBU, ardid, legajo, IMEI..." value={busqueda} onChange={e => setBusqueda(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm placeholder-gray-400 focus:outline-none focus:border-blue-500" />
        </div>
        <input type="text" placeholder="Filtrar por ardid/modalidad..." value={filtroArdid} onChange={e => setFiltroArdid(e.target.value)}
          className="px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm placeholder-gray-400 focus:outline-none focus:border-blue-500" />
        <div className="flex gap-2 items-center">
          <span className="text-gray-400 text-sm whitespace-nowrap">Desde</span>
          <input type="date" value={filtroDesde} onChange={e => setFiltroDesde(e.target.value)} className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500" />
        </div>
        <div className="flex gap-2 items-center">
          <span className="text-gray-400 text-sm whitespace-nowrap">Hasta</span>
          <input type="date" value={filtroHasta} onChange={e => setFiltroHasta(e.target.value)} className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500" />
        </div>
        {(busqueda || filtroArdid || filtroDesde || filtroHasta) && (
          <button onClick={() => { setBusqueda(""); setFiltroArdid(""); setFiltroDesde(""); setFiltroHasta(""); }}
            className="flex items-center gap-1 px-3 py-2 text-gray-400 hover:text-white text-sm transition-colors">
            <X className="w-4 h-4" /> Limpiar
          </button>
        )}
      </div>

      <TablaConPaginacion
  cargando={cargando} datos={datos} page={page} setPage={setPage}
  columnas={["N° Legajo", "Recibido", "Víctima", "Carátula", "Ardid / Modalidad", "CBU / Cuenta", "Fecha Hecho", "Fiscal", "Estado"]}
renderFila={(r: RegistroEstafa) => (
  <>
    <td className="px-4 py-3 text-blue-400 font-medium whitespace-nowrap">{r.nroLegajo ?? "—"}</td>
    <td className="px-4 py-3 text-gray-300 whitespace-nowrap">{formatFecha(r.recibido)}</td>
    <td className="px-4 py-3 text-white font-medium">{r.victima ?? "—"}</td>
    <td className="px-4 py-3 text-gray-300">{r.caratula ?? "—"}</td>
    <td className="px-4 py-3 text-gray-300">{r.ardid ?? "—"}</td>
    <td className="px-4 py-3 text-gray-300 font-mono text-xs whitespace-nowrap max-w-[180px] truncate" title={r.cbu ?? ""}>{r.cbu ?? "—"}</td>
    <td className="px-4 py-3 text-gray-300 whitespace-nowrap">{formatFecha(r.fechaHecho)}</td>
    <td className="px-4 py-3 text-gray-300 whitespace-nowrap">{r.fiscal ?? "—"}</td>
    <td className="px-4 py-3">{r.estadoLegajo ? <span className="px-2 py-1 rounded-full text-xs bg-gray-700 text-gray-300">{r.estadoLegajo}</span> : "—"}</td>
  </>
)}
        onVer={(r) => setDetalle(r)}
        onEliminar={(r) => setEliminar(r.id)}
        mensajeVacio="No hay registros. Importá un Excel para comenzar."
      />

      {detalle && <ModalDetalleEstafa registro={detalle} onCerrar={() => setDetalle(null)} />}
      {eliminar && <ModalEliminar onCancelar={() => setEliminar(null)} onConfirmar={confirmarEliminar} />}
      {mostrarFormulario && (
        <FormularioEstafa
          onCerrar={() => setMostrarFormulario(false)}
          onGuardado={() => { setMostrarFormulario(false); setPage(1); setRecargar(r => r + 1); }}
        />
      )}
    </div>
  );
}

// ─── TAB GENERAL (UNIFICADO) ──────────────────────────────────────────────────

function TabGeneral() {
  const [registros, setRegistros] = useState<RegistroGeneral[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [busqueda, setBusqueda] = useState("");
  const [filtroDesde, setFiltroDesde] = useState("");
  const [filtroHasta, setFiltroHasta] = useState("");
  const [cargando, setCargando] = useState(false);
  const [detalle, setDetalle] = useState<RegistroGeneral | null>(null);
  const [recargar, setRecargar] = useState(0);

  const cargar = useCallback(async (p: number) => {
    setCargando(true);
    try {
      const params = new URLSearchParams({ page: String(p), limit: String(LIMIT) });
      if (busqueda) params.set("q", busqueda);
      if (filtroDesde) params.set("desde", filtroDesde);
      if (filtroHasta) params.set("hasta", filtroHasta);

      // Traer ambas bases en paralelo
      const [resT, resE] = await Promise.all([
        fetch(`/api/telefonia?${params}`),
        fetch(`/api/estafas?${params}`),
      ]);

      const [jsonT, jsonE] = await Promise.all([resT.json(), resE.json()]);

      // Unificar y normalizar
      const tel: RegistroGeneral[] = (jsonT.registros ?? []).map((r: RegistroTelefonia) => ({
        id: r.id,
        tipo: "telefonia" as const,
        victima: r.victima,
        nroLegajo: r.nroLegajo,
        fiscal: r.fiscal,
        fechaHecho: r.fechaHecho,
        fechaIngreso: r.fechaIngreso,
        causa: r.causa,
        aparato: r.aparato,
        imei: r.imei,
        estadoLegajo: r.estadoLegajo,
        createdAt: r.createdAt,
        original: r,
      }));

      const est: RegistroGeneral[] = (jsonE.registros ?? []).map((r: RegistroEstafa) => ({
        id: r.id,
        tipo: "estafa" as const,
        victima: r.victima,
        nroLegajo: r.nroLegajo,
        fiscal: r.fiscal,
        fechaHecho: r.fechaHecho,
        ardid: r.ardid,
        imei: r.imei,
        estadoLegajo: r.estadoLegajo,
        createdAt: r.createdAt,
        original: r,
      }));

      // Ordenar por fecha de hecho descendente
      const unificados = [...tel, ...est].sort((a, b) => {
        const fa = a.fechaHecho ? new Date(a.fechaHecho).getTime() : 0;
        const fb = b.fechaHecho ? new Date(b.fechaHecho).getTime() : 0;
        return fb - fa;
      });

      setRegistros(unificados);
      setTotal((jsonT.total ?? 0) + (jsonE.total ?? 0));
      setTotalPages(Math.max(jsonT.totalPages ?? 0, jsonE.totalPages ?? 0));
    } catch { toast.error("Error de conexión"); }
    finally { setCargando(false); }
  }, [busqueda, filtroDesde, filtroHasta]);

  useEffect(() => { cargar(page); }, [page, recargar, cargar]);
  useEffect(() => {
    const t = setTimeout(() => { setPage(1); setRecargar(r => r + 1); }, 400);
    return () => clearTimeout(t);
  }, [busqueda, filtroDesde, filtroHasta]);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <p className="text-gray-400 text-sm">{total.toLocaleString()} registros totales (telefonía + estafas)</p>
      </div>

      {/* Filtros */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="relative lg:col-span-2">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input type="text" placeholder="Buscar en toda la base..." value={busqueda} onChange={e => setBusqueda(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm placeholder-gray-400 focus:outline-none focus:border-blue-500" />
        </div>
        <div className="flex gap-2 items-center">
          <span className="text-gray-400 text-sm whitespace-nowrap">Desde</span>
          <input type="date" value={filtroDesde} onChange={e => setFiltroDesde(e.target.value)} className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500" />
        </div>
        <div className="flex gap-2 items-center">
          <span className="text-gray-400 text-sm whitespace-nowrap">Hasta</span>
          <input type="date" value={filtroHasta} onChange={e => setFiltroHasta(e.target.value)} className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500" />
        </div>
        {(busqueda || filtroDesde || filtroHasta) && (
          <button onClick={() => { setBusqueda(""); setFiltroDesde(""); setFiltroHasta(""); }}
            className="flex items-center gap-1 px-3 py-2 text-gray-400 hover:text-white text-sm transition-colors">
            <X className="w-4 h-4" /> Limpiar
          </button>
        )}
      </div>

      {/* Tabla unificada */}
      <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-700 bg-gray-900">
                <th className="text-left px-4 py-3 text-gray-400 font-medium">Tipo</th>
                <th className="text-left px-4 py-3 text-gray-400 font-medium">N° Legajo</th>
                <th className="text-left px-4 py-3 text-gray-400 font-medium">Víctima</th>
                <th className="text-left px-4 py-3 text-gray-400 font-medium">Causa / Ardid</th>
                <th className="text-left px-4 py-3 text-gray-400 font-medium">Aparato / IMEI</th>
                <th className="text-left px-4 py-3 text-gray-400 font-medium">Fecha Hecho</th>
                <th className="text-left px-4 py-3 text-gray-400 font-medium">Fiscal</th>
                <th className="text-left px-4 py-3 text-gray-400 font-medium">Estado</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {cargando ? (
                <tr><td colSpan={9} className="text-center py-12 text-gray-400">Cargando...</td></tr>
              ) : registros.length === 0 ? (
                <tr><td colSpan={9} className="text-center py-12 text-gray-400">Sin resultados.</td></tr>
              ) : registros.map(r => (
                <tr key={`${r.tipo}-${r.id}`} className="border-b border-gray-700 hover:bg-gray-750 transition-colors">
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${r.tipo === "telefonia" ? "bg-blue-500/20 text-blue-400" : "bg-orange-500/20 text-orange-400"}`}>
                      {r.tipo === "telefonia" ? "📱 Tel." : "⚠️ Estafa"}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-blue-400 font-medium whitespace-nowrap">{r.nroLegajo ?? "—"}</td>
                  <td className="px-4 py-3 text-white font-medium">{r.victima ?? "—"}</td>
                  <td className="px-4 py-3 text-gray-300">{r.causa ?? r.ardid ?? "—"}</td>
                  <td className="px-4 py-3 text-gray-300 font-mono text-xs whitespace-nowrap">{r.aparato ? `${r.aparato}${r.imei ? ` · ${r.imei}` : ""}` : (r.imei ?? "—")}</td>
                  <td className="px-4 py-3 text-gray-300 whitespace-nowrap">{formatFecha(r.fechaHecho)}</td>
                  <td className="px-4 py-3 text-gray-300 whitespace-nowrap">{r.fiscal ?? "—"}</td>
                  <td className="px-4 py-3">{r.estadoLegajo ? <span className="px-2 py-1 rounded-full text-xs bg-gray-700 text-gray-300">{r.estadoLegajo}</span> : "—"}</td>
                  <td className="px-4 py-3">
                    <button onClick={() => setDetalle(r)} className="p-1.5 text-gray-400 hover:text-blue-400 transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {totalPages > 1 && (
          <div className="flex items-center justify-between px-4 py-3 border-t border-gray-700">
            <span className="text-gray-400 text-sm">Página {page} de {totalPages} — {total.toLocaleString()} registros</span>
            <div className="flex gap-2">
              <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1} className="p-2 rounded-lg bg-gray-700 text-gray-300 hover:bg-gray-600 disabled:opacity-40 transition-colors"><ChevronLeft className="w-4 h-4" /></button>
              <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages} className="p-2 rounded-lg bg-gray-700 text-gray-300 hover:bg-gray-600 disabled:opacity-40 transition-colors"><ChevronRight className="w-4 h-4" /></button>
            </div>
          </div>
        )}
      </div>

      {/* Modal detalle unificado */}
      {detalle && (
        detalle.tipo === "telefonia"
          ? <ModalDetalleTelefonia registro={detalle.original as RegistroTelefonia} onCerrar={() => setDetalle(null)} />
          : <ModalDetalleEstafa registro={detalle.original as RegistroEstafa} onCerrar={() => setDetalle(null)} />
      )}
    </div>
  );
}

// ─── COMPONENTES REUTILIZABLES ────────────────────────────────────────────────

function TablaConPaginacion({ cargando, datos, page, setPage, columnas, renderFila, onVer, onEliminar, mensajeVacio }: {
  cargando: boolean; datos: typeof DATOS_INICIALES; page: number; setPage: (fn: (p: number) => number) => void;
  columnas: string[]; renderFila: (r: any) => React.ReactNode;
  onVer: (r: any) => void; onEliminar: (r: any) => void; mensajeVacio: string;
}) {
  return (
    <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-700 bg-gray-900">
              {columnas.map(c => <th key={c} className="text-left px-4 py-3 text-gray-400 font-medium">{c}</th>)}
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {cargando ? (
              <tr><td colSpan={columnas.length + 1} className="text-center py-12 text-gray-400">Cargando...</td></tr>
            ) : datos.registros.length === 0 ? (
              <tr><td colSpan={columnas.length + 1} className="text-center py-12 text-gray-400">
                {datos.total === 0 ? mensajeVacio : "Sin resultados para los filtros aplicados."}
              </td></tr>
            ) : datos.registros.map((r: any) => (
              <tr key={r.id} className="border-b border-gray-700 hover:bg-gray-750 transition-colors">
                {renderFila(r)}
                <td className="px-4 py-3">
                  <div className="flex gap-2 justify-end">
                    <button onClick={() => onVer(r)} className="p-1.5 text-gray-400 hover:text-blue-400 transition-colors"><Eye className="w-4 h-4" /></button>
                    <button onClick={() => onEliminar(r)} className="p-1.5 text-gray-400 hover:text-red-400 transition-colors"><Trash2 className="w-4 h-4" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {datos.totalPages > 1 && (
        <div className="flex items-center justify-between px-4 py-3 border-t border-gray-700">
          <span className="text-gray-400 text-sm">Página {datos.page} de {datos.totalPages} — {datos.total.toLocaleString()} registros</span>
          <div className="flex gap-2">
            <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1} className="p-2 rounded-lg bg-gray-700 text-gray-300 hover:bg-gray-600 disabled:opacity-40 transition-colors"><ChevronLeft className="w-4 h-4" /></button>
            <button onClick={() => setPage(p => Math.min(datos.totalPages, p + 1))} disabled={page === datos.totalPages} className="p-2 rounded-lg bg-gray-700 text-gray-300 hover:bg-gray-600 disabled:opacity-40 transition-colors"><ChevronRight className="w-4 h-4" /></button>
          </div>
        </div>
      )}
    </div>
  );
}

function ModalEliminar({ onCancelar, onConfirmar }: { onCancelar: () => void; onConfirmar: () => void }) {
  return (
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
          <button onClick={onCancelar} className="flex-1 px-4 py-2 bg-gray-700 text-white rounded-lg text-sm hover:bg-gray-600 transition-colors">Cancelar</button>
          <button onClick={onConfirmar} className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700 transition-colors">Eliminar</button>
        </div>
      </div>
    </div>
  );
}

function ModalDetalleTelefonia({ registro: r, onCerrar }: { registro: RegistroTelefonia; onCerrar: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-xl border border-gray-700 w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-700 sticky top-0 bg-gray-800">
          <div>
            <h2 className="text-lg font-bold text-white">Legajo {r.nroLegajo ?? "—"} — Telefonía</h2>
            <p className="text-gray-400 text-sm">{r.victima ?? "Sin víctima"}</p>
          </div>
          <button onClick={onCerrar} className="p-2 text-gray-400 hover:text-white transition-colors"><X className="w-5 h-5" /></button>
        </div>
        <div className="p-6 grid grid-cols-2 gap-4">
          {([
            ["Año", r.anio], ["N° Legajo", r.nroLegajo], ["N° Interno", r.nroInterno], ["CUIJ", r.cuij],
            ["Fecha Hecho", formatFecha(r.fechaHecho)], ["Fecha Ingreso", formatFecha(r.fechaIngreso)],
            ["Lugar del Hecho", r.lugarHecho], ["Barrio", r.barrio], ["Víctima", r.victima], ["Causa", r.causa],
            ["Aparato", r.aparato], ["Empresa", r.empresa], ["Abonado", r.abonado], ["IMEI", r.imei],
            ["Color", r.color], ["Correo", r.correo], ["Fiscal", r.fiscal], ["Dep. Origen", r.depOrigen],
            ["N° COM", r.nroCom], ["RPI Comisaría", r.rpiComisaria], ["RPI Compleja", r.rpiCompleja],
            ["Estado Legajo", r.estadoLegajo], ["Imputados", r.imputados], ["Requisa", r.requisa],
          ] as [string, any][]).map(([label, value]) => (
            <div key={label} className="space-y-1">
              <p className="text-gray-400 text-xs uppercase tracking-wide">{label}</p>
              <p className="text-white text-sm break-all">{value ? String(value) : "—"}</p>
            </div>
          ))}
          {r.observaciones && <div className="col-span-2 space-y-1"><p className="text-gray-400 text-xs uppercase tracking-wide">Observaciones</p><p className="text-white text-sm">{r.observaciones}</p></div>}
          {r.elevaciones && <div className="col-span-2 space-y-1"><p className="text-gray-400 text-xs uppercase tracking-wide">Elevaciones</p><p className="text-white text-sm">{r.elevaciones}</p></div>}
          {r.procedimientos && <div className="col-span-2 space-y-1"><p className="text-gray-400 text-xs uppercase tracking-wide">Procedimientos</p><p className="text-white text-sm">{r.procedimientos}</p></div>}
        </div>
      </div>
    </div>
  );
}

function ModalDetalleEstafa({ registro: r, onCerrar }: { registro: RegistroEstafa; onCerrar: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-xl border border-gray-700 w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-700 sticky top-0 bg-gray-800">
          <div>
            <h2 className="text-lg font-bold text-white">Legajo {r.nroLegajo ?? "—"} — Estafa</h2>
            <p className="text-gray-400 text-sm">{r.victima ?? "Sin víctima"}</p>
          </div>
          <button onClick={onCerrar} className="p-2 text-gray-400 hover:text-white transition-colors"><X className="w-5 h-5" /></button>
        </div>
        <div className="p-6 grid grid-cols-2 gap-4">
          {([
            ["N° Legajo", r.nroLegajo], ["CUIJ", r.cuij],
            ["Fecha Hecho", formatFecha(r.fechaHecho)], ["Fecha Denuncia", formatFecha(r.fechaDenuncia)],
            ["Dependencia", r.dependencia], ["Recibido", r.recibido],
            ["Víctima", r.victima], ["Teléfono Víctima", r.telefonoVictima],
            ["Carátula", r.caratula], ["Fiscal", r.fiscal],
            ["Ardid / Modalidad", r.ardid], ["Seudónimo", r.seudonimo],
            ["Tel. Referencia", r.telefonoReferencia], ["Nombre Referencia", r.nombreReferencia],
            ["IMEI", r.imei], ["Otros Teléfonos / IMEI", r.otrosTelefonos],
            ["Estado Legajo", r.estadoLegajo],
          ] as [string, any][]).map(([label, value]) => (
            <div key={label} className="space-y-1">
              <p className="text-gray-400 text-xs uppercase tracking-wide">{label}</p>
              <p className="text-white text-sm break-all">{value ? String(value) : "—"}</p>
            </div>
          ))}
          {r.cbu && <div className="col-span-2 space-y-1"><p className="text-gray-400 text-xs uppercase tracking-wide">CBU / Cuenta</p><p className="text-white text-sm break-all">{r.cbu}</p></div>}
          {r.titulares && <div className="col-span-2 space-y-1"><p className="text-gray-400 text-xs uppercase tracking-wide">Titulares</p><p className="text-white text-sm">{r.titulares}</p></div>}
          {r.otrosCbu && <div className="col-span-2 space-y-1"><p className="text-gray-400 text-xs uppercase tracking-wide">Otros CBU</p><p className="text-white text-sm">{r.otrosCbu}</p></div>}
          {r.complementos && <div className="col-span-2 space-y-1"><p className="text-gray-400 text-xs uppercase tracking-wide">Complementos</p><p className="text-white text-sm">{r.complementos}</p></div>}
        </div>
      </div>
    </div>
  );
}

// ─── FORMULARIOS ──────────────────────────────────────────────────────────────

function FormularioTelefonia({ onCerrar, onGuardado }: { onCerrar: () => void; onGuardado: () => void }) {
  const [form, setForm] = useState<Record<string, string>>({});
  const [guardando, setGuardando] = useState(false);
  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));
  const guardar = async () => {
    if (!form.victima && !form.nroLegajo) { toast.error("Ingresá al menos el N° de legajo o la víctima"); return; }
    setGuardando(true);
    try {
      const res = await fetch("/api/telefonia", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, anio: form.anio ? parseInt(form.anio) : null, nroInterno: form.nroInterno ? parseInt(form.nroInterno) : null, fechaHecho: form.fechaHecho || null, fechaIngreso: form.fechaIngreso || null }),
      });
      if (res.ok) { toast.success("Registro creado"); onGuardado(); }
      else { const err = await res.json(); toast.error(err.error || "Error al guardar"); }
    } catch { toast.error("Error de conexión"); }
    finally { setGuardando(false); }
  };
  const campos: [string, string, string][] = [
    ["anio","Año","number"],["nroLegajo","N° Legajo","text"],["nroInterno","N° Interno","number"],
    ["cuij","CUIJ","text"],["fechaHecho","Fecha Hecho","date"],["fechaIngreso","Fecha Ingreso","date"],
    ["lugarHecho","Lugar del Hecho","text"],["barrio","Barrio","text"],["victima","Víctima","text"],
    ["causa","Causa / Hecho","text"],["aparato","Aparato","text"],["empresa","Empresa","text"],
    ["abonado","Abonado","text"],["imei","IMEI","text"],["color","Color","text"],
    ["fiscal","Fiscal","text"],["depOrigen","Dep. Origen","text"],["nroCom","N° COM","text"],
  ];
  return (
    <ModalFormulario titulo="Nuevo Registro — Telefonía" onCerrar={onCerrar} onGuardar={guardar} guardando={guardando}>
      {campos.map(([key, label, type]) => (
        <div key={key} className="space-y-1">
          <label className="text-gray-400 text-xs uppercase tracking-wide">{label}</label>
          <input type={type} value={form[key] ?? ""} onChange={e => set(key, e.target.value)} className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500" />
        </div>
      ))}
    </ModalFormulario>
  );
}

function FormularioEstafa({ onCerrar, onGuardado }: { onCerrar: () => void; onGuardado: () => void }) {
  const [form, setForm] = useState<Record<string, string>>({});
  const [guardando, setGuardando] = useState(false);
  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));
  const guardar = async () => {
    if (!form.victima && !form.nroLegajo) { toast.error("Ingresá al menos el N° de legajo o la víctima"); return; }
    setGuardando(true);
    try {
      const res = await fetch("/api/estafas", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, nroInterno: form.nroInterno ? parseInt(form.nroInterno) : null, fechaHecho: form.fechaHecho || null, fechaDenuncia: form.fechaDenuncia || null }),
      });
      if (res.ok) { toast.success("Registro creado"); onGuardado(); }
      else { const err = await res.json(); toast.error(err.error || "Error al guardar"); }
    } catch { toast.error("Error de conexión"); }
    finally { setGuardando(false); }
  };
  const campos: [string, string, string][] = [
    ["nroLegajo","N° Legajo","text"],["cuij","CUIJ","text"],
    ["fechaHecho","Fecha Hecho","date"],["fechaDenuncia","Fecha Denuncia","date"],
    ["dependencia","Dependencia","text"],["victima","Víctima","text"],
    ["telefonoVictima","Teléfono Víctima","text"],["caratula","Carátula","text"],
    ["fiscal","Fiscal","text"],["ardid","Ardid / Modalidad","text"],
    ["seudonimo","Seudónimo","text"],["telefonoReferencia","Tel. Referencia","text"],
    ["nombreReferencia","Nombre Referencia","text"],["imei","IMEI","text"],
    ["cbu","CBU / Cuenta","text"],["titulares","Titulares","text"],
    ["estadoLegajo","Estado Legajo","text"],
  ];
  return (
    <ModalFormulario titulo="Nuevo Registro — Estafa" onCerrar={onCerrar} onGuardar={guardar} guardando={guardando}>
      {campos.map(([key, label, type]) => (
        <div key={key} className="space-y-1">
          <label className="text-gray-400 text-xs uppercase tracking-wide">{label}</label>
          <input type={type} value={form[key] ?? ""} onChange={e => set(key, e.target.value)} className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500" />
        </div>
      ))}
      <div className="col-span-2 space-y-1">
        <label className="text-gray-400 text-xs uppercase tracking-wide">Otros CBU</label>
        <textarea value={form.otrosCbu ?? ""} onChange={e => set("otrosCbu", e.target.value)} rows={2} className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500 resize-none" />
      </div>
    </ModalFormulario>
  );
}

function ModalFormulario({ titulo, onCerrar, onGuardar, guardando, children }: {
  titulo: string; onCerrar: () => void; onGuardar: () => void; guardando: boolean; children: React.ReactNode;
}) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-xl border border-gray-700 w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-700 sticky top-0 bg-gray-800">
          <h2 className="text-lg font-bold text-white">{titulo}</h2>
          <button onClick={onCerrar} className="p-2 text-gray-400 hover:text-white transition-colors"><X className="w-5 h-5" /></button>
        </div>
        <div className="p-6 grid grid-cols-2 gap-4">{children}</div>
        <div className="flex gap-3 p-6 border-t border-gray-700">
          <button onClick={onCerrar} className="flex-1 px-4 py-2 bg-gray-700 text-white rounded-lg text-sm hover:bg-gray-600 transition-colors">Cancelar</button>
          <button onClick={onGuardar} disabled={guardando} className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 disabled:opacity-50 transition-colors">
            {guardando ? "Guardando..." : "Guardar registro"}
          </button>
        </div>
      </div>
    </div>
  );
}