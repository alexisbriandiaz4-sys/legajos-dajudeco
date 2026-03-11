"use client";
import { useState, useEffect, useCallback } from 'react';
import { Search, X, Eye } from 'lucide-react';
import { toast } from 'sonner';
import { LIMIT, RegistroGeneral, RegistroTelefonia, RegistroEstafa, formatFecha, useUsuarios } from './types';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ModalDetalleTelefonia, ModalDetalleEstafa } from './SharedComponents';



export default function TabGeneral({ esAdmin }: { esAdmin: boolean }) {
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
  const usuarios = useUsuarios();

  const marcarVisto = async (tipo: string, id: string) => {
    await fetch(`/api/${tipo === 'telefonia' ? 'telefonia' : 'estafas'}/${id}`, { method: "PATCH" });
    setRegistros(prev => prev.map(r => r.id === id ? { ...r, visto: true } : r));
  };

  const cargar = useCallback(async (p: number) => {
    setCargando(true);
    try {
      const params = new URLSearchParams({ page: String(p), limit: String(LIMIT) });
      if (busqueda) params.set("q", busqueda);
      if (filtroDesde) params.set("desde", filtroDesde);
      if (filtroHasta) params.set("hasta", filtroHasta);
      const [resT, resE] = await Promise.all([fetch(`/api/telefonia?${params}`), fetch(`/api/estafas?${params}`)]);
      const [jsonT, jsonE] = await Promise.all([resT.json(), resE.json()]);
      const tel: RegistroGeneral[] = (jsonT.registros ?? []).map((r: RegistroTelefonia) => ({
        id: r.id, tipo: "telefonia" as const, victima: r.victima, nroLegajo: r.nroLegajo,
        fiscal: r.fiscal, fechaHecho: r.fechaHecho, fechaIngreso: r.fechaIngreso, causa: r.causa,
        aparato: r.aparato, imei: r.imei, estadoLegajo: r.estadoLegajo, asignadoA: r.asignadoA,
        visto: r.visto, createdAt: r.createdAt, original: r,
      }));
      const est: RegistroGeneral[] = (jsonE.registros ?? []).map((r: RegistroEstafa) => ({
        id: r.id, tipo: "estafa" as const, victima: r.victima, nroLegajo: r.nroLegajo,
        fiscal: r.fiscal, fechaHecho: r.fechaHecho, ardid: r.ardid, imei: r.imei,
        estadoLegajo: r.estadoLegajo, asignadoA: r.asignadoA, visto: r.visto,
        createdAt: r.createdAt, original: r,
      }));
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
        <p className="text-[var(--text-muted)] text-sm">{total.toLocaleString()} registros totales (telefonía + estafas)</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="relative lg:col-span-2">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)]" />
          <input type="text" placeholder="Buscar en toda la base..." value={busqueda} onChange={e => setBusqueda(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg text-[var(--text-primary)] text-sm placeholder-[var(--text-muted)] focus:outline-none focus:border-blue-500" />
        </div>
        <div className="flex gap-2 items-center">
          <span className="text-[var(--text-muted)] text-sm whitespace-nowrap">Desde</span>
          <input type="date" value={filtroDesde} onChange={e => setFiltroDesde(e.target.value)} className="flex-1 px-3 py-2 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg text-[var(--text-primary)] text-sm focus:outline-none focus:border-blue-500" />
        </div>
        <div className="flex gap-2 items-center">
          <span className="text-[var(--text-muted)] text-sm whitespace-nowrap">Hasta</span>
          <input type="date" value={filtroHasta} onChange={e => setFiltroHasta(e.target.value)} className="flex-1 px-3 py-2 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg text-[var(--text-primary)] text-sm focus:outline-none focus:border-blue-500" />
        </div>
        {(busqueda || filtroDesde || filtroHasta) && (
          <button onClick={() => { setBusqueda(""); setFiltroDesde(""); setFiltroHasta(""); }}
            className="flex items-center gap-1 px-3 py-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] text-sm transition-colors">
            <X className="w-4 h-4" /> Limpiar
          </button>
        )}
      </div>
      <div className="bg-[var(--bg-secondary)] rounded-xl border border-[var(--border)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--bg-primary)]">
                <th className="text-left px-4 py-3 text-[var(--text-muted)] font-medium">Tipo</th>
                <th className="text-left px-4 py-3 text-[var(--text-muted)] font-medium">N° Legajo</th>
                <th className="text-left px-4 py-3 text-[var(--text-muted)] font-medium">Víctima</th>
                <th className="text-left px-4 py-3 text-[var(--text-muted)] font-medium">Causa / Ardid</th>
                <th className="text-left px-4 py-3 text-[var(--text-muted)] font-medium">Aparato / IMEI</th>
                <th className="text-left px-4 py-3 text-[var(--text-muted)] font-medium">Fecha Hecho</th>
                <th className="text-left px-4 py-3 text-[var(--text-muted)] font-medium">Fiscal</th>
                <th className="text-left px-4 py-3 text-[var(--text-muted)] font-medium">Estado</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {cargando ? (
                <tr><td colSpan={9} className="text-center py-12 text-[var(--text-muted)]">Cargando...</td></tr>
              ) : registros.length === 0 ? (
                <tr><td colSpan={9} className="text-center py-12 text-[var(--text-muted)]">Sin resultados.</td></tr>
              ) : registros.map(r => (
                <tr key={`${r.tipo}-${r.id}`}
                  className={`border-b border-[var(--border)] transition-colors ${
                    !r.visto && r.asignadoA
                      ? "bg-blue-900/30 border-l-2 border-l-blue-500 hover:bg-blue-900/40"
                      : "hover:bg-[var(--bg-tertiary)]"
                  }`}>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${r.tipo === "telefonia" ? "bg-blue-500/20 text-blue-400" : "bg-orange-500/20 text-orange-400"}`}>
                      {r.tipo === "telefonia" ? "📱 Tel." : "⚠️ Estafa"}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-blue-400 font-medium whitespace-nowrap">{r.nroLegajo ?? "—"}</td>
                  <td className="px-4 py-3 font-medium">
                    <span className={!r.visto && r.asignadoA ? "text-[var(--text-primary)] font-semibold" : "text-[var(--text-primary)]"}>{r.victima ?? "—"}</span>
                    {!r.visto && r.asignadoA && <span className="ml-2 px-1.5 py-0.5 rounded text-xs bg-blue-500 text-[var(--text-primary)]">Nuevo</span>}
                  </td>
                  <td className="px-4 py-3 text-[var(--text-secondary)]">{r.causa ?? r.ardid ?? "—"}</td>
                  <td className="px-4 py-3 text-[var(--text-secondary)] font-mono text-xs whitespace-nowrap">{r.aparato ? `${r.aparato}${r.imei ? ` · ${r.imei}` : ""}` : (r.imei ?? "—")}</td>
                  <td className="px-4 py-3 text-[var(--text-secondary)] whitespace-nowrap">{formatFecha(r.fechaHecho)}</td>
                  <td className="px-4 py-3 text-[var(--text-secondary)] whitespace-nowrap">{r.fiscal ?? "—"}</td>
                  <td className="px-4 py-3">{r.estadoLegajo ? <span className="px-2 py-1 rounded-full text-xs bg-[var(--bg-tertiary)] text-[var(--text-secondary)]">{r.estadoLegajo}</span> : "—"}</td>
                  <td className="px-4 py-3">
                    <button onClick={() => { setDetalle(r); if (!r.visto && r.asignadoA) marcarVisto(r.tipo, r.id); }}
                      className="p-1.5 text-[var(--text-muted)] hover:text-blue-400 transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {totalPages > 1 && (
          <div className="flex items-center justify-between px-4 py-3 border-t border-[var(--border)]">
            <span className="text-[var(--text-muted)] text-sm">Página {page} de {totalPages} — {total.toLocaleString()} registros</span>
            <div className="flex gap-2">
              <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1} className="p-2 rounded-lg bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)] disabled:opacity-40 transition-colors"><ChevronLeft className="w-4 h-4" /></button>
              <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages} className="p-2 rounded-lg bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)] disabled:opacity-40 transition-colors"><ChevronRight className="w-4 h-4" /></button>
            </div>
          </div>
        )}
      </div>
      {detalle && (
        detalle.tipo === "telefonia"
          ? <ModalDetalleTelefonia registro={detalle.original as RegistroTelefonia} onCerrar={() => setDetalle(null)} usuarios={usuarios} />
          : <ModalDetalleEstafa registro={detalle.original as RegistroEstafa} onCerrar={() => setDetalle(null)} usuarios={usuarios} />
      )}
    </div>
  );
}

