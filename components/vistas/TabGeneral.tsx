"use client";
import { useEffect } from 'react';
import { LIMIT, RegistroGeneral, formatFecha, useUsuarios } from './types';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { ModalDetalleTelefonia, ModalDetalleEstafa } from './SharedComponents';
import { useFiltrosBase } from '@/hooks/useFiltrosBase';
import { useDatosBase } from '@/hooks/useDatosBase';
import { FiltrosBase } from './FiltrosBase';
import { toast } from 'sonner';

export default function TabGeneral({ esAdmin }: { esAdmin: boolean }) {
  const {
    page, setPage, busqueda, setBusqueda, filtroDesde, setFiltroDesde,
    filtroHasta, setFiltroHasta, recargar, limpiarFiltros, hayFiltrosActivos
  } = useFiltrosBase({});

  // TabGeneral muestra los legajos sin asignar (Base General)
  const {
    datos, cargando, detalle, setDetalle, cargar
  } = useDatosBase<RegistroGeneral>("/api/legajos?asignadoA=null", LIMIT);

  const usuarios = useUsuarios();

  useEffect(() => { 
    cargar(page, { q: busqueda, desde: filtroDesde, hasta: filtroHasta }); 
  }, [page, recargar, cargar, busqueda, filtroDesde, filtroHasta]);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <p className="text-[var(--text-muted)] text-sm">{datos.total.toLocaleString()} registros en total</p>
      </div>

      <FiltrosBase
        busqueda={busqueda} setBusqueda={setBusqueda}
        filtroDesde={filtroDesde} setFiltroDesde={setFiltroDesde}
        filtroHasta={filtroHasta} setFiltroHasta={setFiltroHasta}
        limpiarFiltros={limpiarFiltros} hayFiltrosActivos={hayFiltrosActivos}
        placeholderBusqueda="Buscar por víctima, IMEI, CBU, legajo, causa, ardid..."
      />

      <div className="bg-[var(--bg-secondary)] rounded-xl border border-[var(--border)] overflow-hidden">
        <div className="overflow-x-auto min-h-[400px]">
          <table className="w-full text-left text-sm">
            <thead className="bg-[var(--bg-tertiary)] border-b border-[var(--border)] text-[var(--text-muted)]">
              <tr>
                <th className="px-4 py-3 font-medium">Tipo</th>
                <th className="px-4 py-3 font-medium">N° Legajo</th>
                <th className="px-4 py-3 font-medium">Víctima</th>
                <th className="px-4 py-3 font-medium">Causa / Carátula</th>
                <th className="px-4 py-3 font-medium">Dato Clave</th>
                <th className="px-4 py-3 font-medium">Fecha Hecho</th>
                <th className="px-4 py-3 w-10 text-center">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              {cargando ? (
                <tr><td colSpan={7} className="px-4 py-8 text-center text-[var(--text-muted)]">Cargando registros...</td></tr>
              ) : datos.registros.length === 0 ? (
                <tr><td colSpan={7} className="px-4 py-8 text-center text-[var(--text-muted)] font-medium">No se encontraron registros.</td></tr>
              ) : (
                datos.registros.map((r: RegistroGeneral) => (
                  <tr key={r.id} className="hover:bg-[var(--bg-tertiary)] transition-colors">
                    <td className="px-4 py-3 font-medium">
                      {r.tipo === 'telefonia' ? <span className="text-blue-400">Telefonía</span> : <span className="text-orange-400">Estafa</span>}
                    </td>
                    <td className="px-4 py-3 text-[var(--text-primary)] whitespace-nowrap">{r.nroLegajo ?? "—"}</td>
                    <td className="px-4 py-3 text-[var(--text-primary)] font-medium">{r.victima ?? "—"}</td>
                    <td className="px-4 py-3 text-[var(--text-secondary)]">{r.causaOcaratula ?? "—"}</td>
                    <td className="px-4 py-3 text-[var(--text-secondary)] font-mono text-xs">{(r as any).datoClave ?? "—"}</td>
                    <td className="px-4 py-3 text-[var(--text-secondary)] whitespace-nowrap">{formatFecha(r.fechaHecho)}</td>
                    <td className="px-4 py-3 text-center">
                      <button onClick={async () => {
                        try {
                          const res = await fetch(`/api/${r.tipo === 'telefonia' ? 'telefonia' : 'estafas'}/${r.id}`);
                          if(res.ok){
                            const fullData = await res.json();
                            setDetalle({...fullData, _tipoParaModal: r.tipo});
                          } else toast.error("Error al cargar detalle");
                        } catch(e) { toast.error("Error de conexión"); }
                      }} className="p-1 hover:bg-[var(--bg-secondary)] text-[var(--text-muted)] hover:text-blue-400 rounded transition-colors" title="Ver detalles">
                        <Eye className="w-4 h-4" />
                      </button>
                      {esAdmin && (
                        <button onClick={async () => {
                          if (confirm(`¿Estás seguro de que quieres eliminar este registro de ${r.tipo === 'telefonia' ? 'telefonía' : 'estafa'}?`)) {
                            try {
                              const res = await fetch(`/api/${r.tipo === 'telefonia' ? 'telefonia' : 'estafas'}/${r.id}`, {
                                method: 'DELETE'
                              });
                              if(res.ok) {
                                toast.success(`Registro eliminado exitosamente`);
                                recargar();
                              } else {
                                toast.error("Error al eliminar registro");
                              }
                            } catch(e) {
                              toast.error("Error de conexión");
                            }
                          }
                        }} className="ml-2 p-1 hover:bg-red-500 text-red-600 rounded transition-colors" title="Eliminar">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 00-2.828 0L7.05 18.628a5 5 0 00-7.078 2.828L5.172 4.828a5 5 0 00-7.078 2.828l-6.928 6.928z" />
                          </svg>
                        </button>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        
        {datos.totalPages > 1 && (
          <div className="flex items-center justify-between px-4 py-3 border-t border-[var(--border)] bg-[var(--bg-tertiary)]">
            <span className="text-sm text-[var(--text-muted)]">Página {page} de {datos.totalPages}</span>
            <div className="flex gap-2">
              <button disabled={page === 1} onClick={() => setPage(p => p - 1)} className="p-1 rounded hover:bg-[var(--bg-secondary)] disabled:opacity-50 text-[var(--text-primary)]"><ChevronLeft className="w-5 h-5" /></button>
              <button disabled={page >= datos.totalPages} onClick={() => setPage(p => p + 1)} className="p-1 rounded hover:bg-[var(--bg-secondary)] disabled:opacity-50 text-[var(--text-primary)]"><ChevronRight className="w-5 h-5" /></button>
            </div>
          </div>
        )}
      </div>

      {detalle && (detalle as any)._tipoParaModal === 'telefonia' && <ModalDetalleTelefonia registro={detalle as any} onCerrar={() => setDetalle(null)} usuarios={usuarios} />}
      {detalle && (detalle as any)._tipoParaModal === 'estafa' && <ModalDetalleEstafa registro={detalle as any} onCerrar={() => setDetalle(null)} usuarios={usuarios} />}
    </div>
  );
}
