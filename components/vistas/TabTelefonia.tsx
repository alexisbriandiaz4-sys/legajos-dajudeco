"use client";
import { useEffect } from 'react';
import { Upload, Plus } from 'lucide-react';
import { toast } from 'sonner';
import * as XLSX from 'xlsx';
import { cache } from '@/lib/cache';
import { LIMIT, formatFecha, useUsuarios, RegistroTelefonia } from './types';
import { TablaConPaginacion, ModalEliminar, ModalDetalleTelefonia } from './SharedComponents';
import { FormularioTelefonia } from './Formularios';
import { useFiltrosBase } from '@/hooks/useFiltrosBase';
import { useDatosBase } from '@/hooks/useDatosBase';
import { FiltrosBase } from './FiltrosBase';

export default function TabTelefonia({ esAdmin }: { esAdmin: boolean }) {
  const {
    page, setPage, busqueda, setBusqueda, filtroDesde, setFiltroDesde,
    filtroHasta, setFiltroHasta, filtrosAdicionales, setFiltrosAdicionales,
    recargar, setRecargar, limpiarFiltros, hayFiltrosActivos
  } = useFiltrosBase({ anio: "", causa: "" });

  const {
    datos, cargando, importando, setImportando, detalle, setDetalle,
    eliminar, setEliminar, mostrarFormulario, setMostrarFormulario,
    cargar, confirmarEliminar, marcarVisto
  } = useDatosBase<RegistroTelefonia>("/api/telefonia", LIMIT);

  const usuarios = useUsuarios();

  useEffect(() => { 
    cargar(page, { q: busqueda, anio: filtrosAdicionales.anio, causa: filtrosAdicionales.causa, desde: filtroDesde, hasta: filtroHasta }); 
  }, [page, recargar, cargar, busqueda, filtrosAdicionales.anio, filtrosAdicionales.causa, filtroDesde, filtroHasta]);

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
            <button onClick={() => setMostrarFormulario(true)} className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-[var(--text-primary)] rounded-lg text-sm font-medium transition-colors">
              <Plus className="w-4 h-4" /> Nuevo registro
            </button>
        </div>
      </div>

      <FiltrosBase
        busqueda={busqueda} setBusqueda={setBusqueda}
        filtroDesde={filtroDesde} setFiltroDesde={setFiltroDesde}
        filtroHasta={filtroHasta} setFiltroHasta={setFiltroHasta}
        limpiarFiltros={limpiarFiltros} hayFiltrosActivos={hayFiltrosActivos}
        placeholderBusqueda="Buscar por víctima, IMEI, causa, legajo..."
      >
        <select value={filtrosAdicionales.anio} onChange={e => setFiltrosAdicionales(prev => ({...prev, anio: e.target.value}))} className="px-3 py-2 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg text-[var(--text-primary)] text-sm focus:outline-none focus:border-blue-500">
          <option value="">Todos los años</option>
          {Array.from({ length: 12 }, (_, i) => 2026 - i).map(a => <option key={a} value={a}>{a}</option>)}
        </select>
        <input type="text" placeholder="Filtrar por causa..." value={filtrosAdicionales.causa} onChange={e => setFiltrosAdicionales(prev => ({...prev, causa: e.target.value}))}
          className="px-3 py-2 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg text-[var(--text-primary)] text-sm placeholder-[var(--text-muted)] focus:outline-none focus:border-blue-500" />
      </FiltrosBase>

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
      {eliminar && <ModalEliminar onCancelar={() => setEliminar(null)} onConfirmar={() => confirmarEliminar(() => setRecargar(r => r + 1))} />}
      {mostrarFormulario && (
        <FormularioTelefonia usuarios={usuarios}
          onCerrar={() => setMostrarFormulario(false)}
          onGuardado={() => { setMostrarFormulario(false); setPage(1); setRecargar(r => r + 1); }}
        />
      )}
    </div>
  );
}
