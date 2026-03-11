import { useState, useCallback } from 'react';
import { toast } from 'sonner';

export interface DatosPaginados<T> {
  registros: T[];
  total: number;
  page: number;
  totalPages: number;
}

export const DATOS_INICIALES_GENERICOS: DatosPaginados<any> = {
  registros: [],
  total: 0,
  page: 1,
  totalPages: 0
};

export function useDatosBase<T extends { id: string }>(endpoint: string, limit: number) {
  const [datos, setDatos] = useState<DatosPaginados<T>>(DATOS_INICIALES_GENERICOS);
  const [cargando, setCargando] = useState(false);
  const [importando, setImportando] = useState(false);
  const [detalle, setDetalle] = useState<T | null>(null);
  const [eliminar, setEliminar] = useState<string | null>(null);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const cargar = useCallback(async (p: number, paramsRecord: Record<string, string>) => {
    setCargando(true);
    try {
      const params = new URLSearchParams({ page: String(p), limit: String(limit) });
      Object.entries(paramsRecord).forEach(([key, value]) => {
        if (value) params.set(key, value);
      });
      
      const res = await fetch(`${endpoint}?${params}`);
      if (res.ok) {
        const json = await res.json();
        setDatos({ 
          registros: json.registros ?? [], 
          total: json.total ?? 0, 
          page: json.page ?? 1, 
          totalPages: json.totalPages ?? 0 
        });
      } else { 
        toast.error("Error al cargar registros"); 
        setDatos(DATOS_INICIALES_GENERICOS); 
      }
    } catch { 
      toast.error("Error de conexión"); 
      setDatos(DATOS_INICIALES_GENERICOS); 
    } finally { 
      setCargando(false); 
    }
  }, [endpoint, limit]);

  const confirmarEliminar = async (onEliminado: () => void) => {
    if (!eliminar) return;
    try {
      const res = await fetch(`${endpoint}/${eliminar}`, { method: "DELETE" });
      if (res.ok) { 
        toast.success("Registro eliminado"); 
        setEliminar(null); 
        onEliminado();
      } else {
        toast.error("Error al eliminar");
      }
    } catch { 
      toast.error("Error de conexión"); 
    }
  };

  const marcarVisto = async (id: string) => {
    try {
      await fetch(`${endpoint}/${id}`, { method: "PATCH" });
      setDatos(prev => ({
        ...prev,
        registros: prev.registros.map(r => r.id === id ? { ...r, visto: true } : r)
      }));
    } catch (error) {
       console.error("Error marcando como visto", error);
    }
  };

  return {
    datos, setDatos,
    cargando, setCargando,
    importando, setImportando,
    detalle, setDetalle,
    eliminar, setEliminar,
    mostrarFormulario, setMostrarFormulario,
    cargar,
    confirmarEliminar,
    marcarVisto
  };
}
