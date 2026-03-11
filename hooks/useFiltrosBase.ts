import { useState, useEffect, useCallback } from 'react';

export function useFiltrosBase<T extends Record<string, string>>(filtrosAdicionalesIniciales: T) {
  const [page, setPage] = useState(1);
  const [busqueda, setBusqueda] = useState("");
  const [filtroDesde, setFiltroDesde] = useState("");
  const [filtroHasta, setFiltroHasta] = useState("");
  const [filtrosAdicionales, setFiltrosAdicionales] = useState<T>(filtrosAdicionalesIniciales);
  const [recargar, setRecargar] = useState(0);

  // Set timeout to debounce and reset page to 1 when filters change
  useEffect(() => {
    const t = setTimeout(() => { 
      setPage(1); 
      setRecargar(r => r + 1); 
    }, 400);
    return () => clearTimeout(t);
  }, [busqueda, filtroDesde, filtroHasta, ...Object.values(filtrosAdicionales)]);

  const limpiarFiltros = useCallback(() => {
    setBusqueda("");
    setFiltroDesde("");
    setFiltroHasta("");
    setFiltrosAdicionales(filtrosAdicionalesIniciales);
  }, [filtrosAdicionalesIniciales]);

  const hayFiltrosActivos = Boolean(
    busqueda || filtroDesde || filtroHasta || Object.values(filtrosAdicionales).some(v => v !== "")
  );

  return {
    page, setPage,
    busqueda, setBusqueda,
    filtroDesde, setFiltroDesde,
    filtroHasta, setFiltroHasta,
    filtrosAdicionales, setFiltrosAdicionales,
    recargar, setRecargar,
    limpiarFiltros,
    hayFiltrosActivos
  };
}
