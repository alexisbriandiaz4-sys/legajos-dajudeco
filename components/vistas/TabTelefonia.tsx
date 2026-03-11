"use client";
import { useState, useEffect, useCallback } from 'react';
import { Search, Upload, Plus, X } from 'lucide-react';
import { toast } from 'sonner';
import * as XLSX from 'xlsx';
import { cache } from '@/lib/cache';
import { LIMIT, DATOS_INICIALES, formatFecha, useUsuarios, RegistroTelefonia } from './types';
import { TablaConPaginacion, ModalEliminar, ModalDetalleTelefonia } from './SharedComponents';
import { FormularioTelefonia } from './Formularios';



export default function TabTelefonia({ esAdmin }: { esAdmin: boolean }) {
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
  const usuarios = useUsuarios();

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
      } else { toast.error("Error al cargar registros"); setDatos(DATOS_INICIALES); }
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
        cache.invalidarPrefijo('/api/telefonia');
        cache.invalidar('/api/estadisticas');
        toast.success(`✓ ${json.insertados} registros importados`);
        setPage(1); setRecargar(r => r + 1);
      } else { const err = await res.json(); toast.error(err.error || "Error al importar"); }
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

  const marcarVisto = async (id: string) => {
    await fetch(`/api/telefonia/${id}`, { method: "PATCH" });
    setDatos(prev => ({
      ...prev,
      registros: prev.registros.map((r: any) => r.id === id ? { ...r, visto: true } : r)
    }));
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <p className="text-[var(--text-muted)] text-sm">{datos.total.toLocaleString()} registros</p>
        <div className="flex gap-2">
          {esAdmin && (
            <label className={`flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer text-sm font-medium transition-colors ${importando ? "bg-[var(--bg-tertiary)] text-[var(--text-muted)] cursor-not-allowed" : "bg-green-600 hover:bg-green-700 text-white"}`}>
              <Upload className="w-4 h-4" />
              {importando ? "Importando..." : "Importar Excel"}
              <input type="file" accept=".xlsx,.xls" className="hidden" onChange={handleImportar} disabled={importando} />
            </label>
          )}
          {esAdmin && (
            <button onClick={() => setMostrarFormulario(true)} className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-[var(--text-primary)] rounded-lg text-sm font-medium transition-colors">
              <Plus className="w-4 h-4" /> Nuevo registro
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="relative lg:col-span-2">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)]" />
          <input type="text" placeholder="Buscar por víctima, IMEI, causa, legajo..." value={busqueda} onChange={e => setBusqueda(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg text-[var(--text-primary)] text-sm placeholder-[var(--text-muted)] focus:outline-none focus:border-blue-500" />
        </div>
        <select value={filtroAnio} onChange={e => setFiltroAnio(e.target.value)} className="px-3 py-2 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg text-[var(--text-primary)] text-sm focus:outline-none focus:border-blue-500">
          <option value="">Todos los años</option>
          {Array.from({ length: 12 }, (_, i) => 2026 - i).map(a => <option key={a} value={a}>{a}</option>)}
        </select>
        <input type="text" placeholder="Filtrar por causa..." value={filtroCausa} onChange={e => setFiltroCausa(e.target.value)}
          className="px-3 py-2 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg text-[var(--text-primary)] text-sm placeholder-[var(--text-muted)] focus:outline-none focus:border-blue-500" />
        <div className="flex gap-2 items-center">
          <span className="text-[var(--text-muted)] text-sm whitespace-nowrap">Desde</span>
          <input type="date" value={filtroDesde} onChange={e => setFiltroDesde(e.target.value)} className="flex-1 px-3 py-2 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg text-[var(--text-primary)] text-sm focus:outline-none focus:border-blue-500" />
        </div>
        <div className="flex gap-2 items-center">
          <span className="text-[var(--text-muted)] text-sm whitespace-nowrap">Hasta</span>
          <input type="date" value={filtroHasta} onChange={e => setFiltroHasta(e.target.value)} className="flex-1 px-3 py-2 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg text-[var(--text-primary)] text-sm focus:outline-none focus:border-blue-500" />
        </div>
        {(busqueda || filtroAnio || filtroCausa || filtroDesde || filtroHasta) && (
          <button onClick={() => { setBusqueda(""); setFiltroAnio(""); setFiltroCausa(""); setFiltroDesde(""); setFiltroHasta(""); }}
            className="flex items-center gap-1 px-3 py-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] text-sm transition-colors">
            <X className="w-4 h-4" /> Limpiar
          </button>
        )}
      </div>

      <TablaConPaginacion
        cargando={cargando} datos={datos} page={page} setPage={setPage} esAdmin={esAdmin} usuarios={usuarios}
        columnas={["Año", "N° Legajo", "Víctima", "Causa", "Aparato", "IMEI", "Fecha Hecho", "Fiscal", "Estado", ...(esAdmin ? ["Asignado a"] : [])]}
        renderFila={(r: RegistroTelefonia) => (
          <>
            <td className="px-4 py-3 text-[var(--text-secondary)] whitespace-nowrap">{r.anio ?? "—"}</td>
            <td className="px-4 py-3 text-blue-400 font-medium whitespace-nowrap">{r.nroLegajo ?? "—"}</td>
            <td className="px-4 py-3 text-[var(--text-primary)] font-medium">{r.victima ?? "—"}</td>
            <td className="px-4 py-3 text-[var(--text-secondary)]">{r.causa ?? "—"}</td>
            <td className="px-4 py-3 text-[var(--text-secondary)] whitespace-nowrap">{r.aparato ?? "—"}</td>
            <td className="px-4 py-3 text-[var(--text-secondary)] font-mono text-xs whitespace-nowrap">{r.imei ?? "—"}</td>
            <td className="px-4 py-3 text-[var(--text-secondary)] whitespace-nowrap">{formatFecha(r.fechaHecho)}</td>
            <td className="px-4 py-3 text-[var(--text-secondary)] whitespace-nowrap">{r.fiscal ?? "—"}</td>
            <td className="px-4 py-3">{r.estadoLegajo ? <span className="px-2 py-1 rounded-full text-xs bg-[var(--bg-tertiary)] text-[var(--text-secondary)]">{r.estadoLegajo}</span> : "—"}</td>
            {esAdmin && (
              <td className="px-4 py-3 text-[var(--text-muted)] text-xs whitespace-nowrap">
                {r.asignadoA ? (usuarios.find(u => u.id === r.asignadoA)?.nombre ?? "—") : <span className="text-[var(--text-muted)]">Sin asignar</span>}
              </td>
            )}
          </>
        )}
        onVer={(r) => { setDetalle(r); if (!r.visto && r.asignadoA) marcarVisto(r.id); }}
        onEliminar={esAdmin ? (r) => setEliminar(r.id) : undefined}
        mensajeVacio="No hay registros. Importá un Excel para comenzar."
      />

      {detalle && <ModalDetalleTelefonia registro={detalle} onCerrar={() => setDetalle(null)} usuarios={usuarios} />}
      {eliminar && <ModalEliminar onCancelar={() => setEliminar(null)} onConfirmar={confirmarEliminar} />}
      {mostrarFormulario && (
        <FormularioTelefonia usuarios={usuarios}
          onCerrar={() => setMostrarFormulario(false)}
          onGuardado={() => { setMostrarFormulario(false); setPage(1); setRecargar(r => r + 1); }}
        />
      )}
    </div>
  );
}

