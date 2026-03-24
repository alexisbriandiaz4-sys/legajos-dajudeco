export interface Fiscal {
  id: string; nombre: string; cargo?: string; fiscalia?: string;
  secretario?: string; dniSecretario?: string; dni?: string;
  email?: string; emailSecretario?: string; direccion?: string;
  telefono?: string; telefonoMovil?: string; activo: boolean;
}

export interface Usuario {
  id: string; nombre: string; usuario: string;
  rol: string; activo: boolean; createdAt: string;
}
