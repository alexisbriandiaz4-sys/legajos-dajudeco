"use client";
import { Search, X } from 'lucide-react';

interface FiltrosBaseProps {
  busqueda: string;
  setBusqueda: (v: string) => void;
  filtroDesde: string;
  setFiltroDesde: (v: string) => void;
  filtroHasta: string;
  setFiltroHasta: (v: string) => void;
  limpiarFiltros: () => void;
  hayFiltrosActivos: boolean;
  placeholderBusqueda: string;
  children?: React.ReactNode; // para filtros extra de fecha/año
}

export function FiltrosBase({
  busqueda, setBusqueda,
  filtroDesde, setFiltroDesde,
  filtroHasta, setFiltroHasta,
  limpiarFiltros, hayFiltrosActivos,
  placeholderBusqueda,
  children
}: FiltrosBaseProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
      <div className="relative lg:col-span-2">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)]" />
        <input 
          type="text" 
          placeholder={placeholderBusqueda} 
          value={busqueda} 
          onChange={e => setBusqueda(e.target.value)}
          className="w-full pl-9 pr-4 py-2 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg text-[var(--text-primary)] text-sm placeholder-[var(--text-muted)] focus:outline-none focus:border-blue-500" 
        />
      </div>
      
      {children}
      
      <div className="flex gap-2 items-center">
        <span className="text-[var(--text-muted)] text-sm whitespace-nowrap">Desde</span>
        <input type="date" value={filtroDesde} onChange={e => setFiltroDesde(e.target.value)} className="flex-1 px-3 py-2 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg text-[var(--text-primary)] text-sm focus:outline-none focus:border-blue-500" />
      </div>
      <div className="flex gap-2 items-center">
        <span className="text-[var(--text-muted)] text-sm whitespace-nowrap">Hasta</span>
        <input type="date" value={filtroHasta} onChange={e => setFiltroHasta(e.target.value)} className="flex-1 px-3 py-2 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg text-[var(--text-primary)] text-sm focus:outline-none focus:border-blue-500" />
      </div>
      
      {hayFiltrosActivos && (
        <button onClick={limpiarFiltros}
          className="flex items-center gap-1 px-3 py-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] text-sm transition-colors">
          <X className="w-4 h-4" /> Limpiar
        </button>
      )}
    </div>
  );
}
