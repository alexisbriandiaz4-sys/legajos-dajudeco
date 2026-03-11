import { useState, useEffect } from 'react';
import { fetchConCache, TTL } from '@/lib/cache';

export interface UsuarioSimple { id: string; nombre: string; }

export interface RegistroTelefonia {
  id: string; anio?: number; nroLegajo?: string; nroInterno?: number; cuij?: string;
  fechaHecho?: string; fechaIngreso?: string; lugarHecho?: string; barrio?: string;
  victima?: string; causa?: string; aparato?: string; empresa?: string; abonado?: string;
  imei?: string; color?: string; correo?: string; clave?: string; fiscal?: string;
  depOrigen?: string; nroCom?: string; rpiComisaria?: string; rpiCompleja?: string;
  observaciones?: string; estadoLegajo?: string; elevaciones?: string; imputados?: string;
  requisa?: string; procedimientos?: string; asignadoA?: string | null; visto?: boolean;
  createdAt: string;
}

export interface RegistroEstafa {
  id: string; nroInterno?: number; cuij?: string; fechaHecho?: string; fechaDenuncia?: string;
  dependencia?: string; nroLegajo?: string; recibido?: string | null; victima?: string;
  telefonoVictima?: string; caratula?: string; fiscal?: string; ardid?: string; seudonimo?: string;
  telefonoReferencia?: string; nombreReferencia?: string; imei?: string; otrosTelefonos?: string;
  cbu?: string; titulares?: string; otrosCbu?: string; estadoLegajo?: string; complementos?: string;
  asignadoA?: string | null; visto?: boolean; createdAt: string;
}

export interface RegistroGeneral {
  id: string; tipo: "telefonia" | "estafa"; victima?: string; nroLegajo?: string;
  fiscal?: string; fechaHecho?: string; fechaIngreso?: string; causa?: string;
  ardid?: string; aparato?: string; imei?: string; estadoLegajo?: string;
  causaOcaratula?: string; datoClave?: string;
  asignadoA?: string | null; visto?: boolean; createdAt: string;
  original: RegistroTelefonia | RegistroEstafa;
}

export type Pestana = "telefonia" | "estafas" | "general";
export const LIMIT = 20;
export const DATOS_INICIALES = { registros: [] as any[], total: 0, page: 1, totalPages: 0 };

export const formatFecha = (f?: string | null) => {
  if (!f) return "—";
  try { return new Date(f).toLocaleDateString("es-AR"); } catch { return f; }
};

export function useUsuarios() {
  const [usuarios, setUsuarios] = useState<UsuarioSimple[]>([]);
  useEffect(() => {
    fetchConCache<any[]>('/api/usuarios', TTL.USUARIOS)
      .then(data => setUsuarios(data.filter((u: any) => u.rol !== 'admin')))
      .catch(() => {});
  }, []);
  return usuarios;
}
