import { z } from 'zod'

// ── Victima ──
export const VictimaSchema = z.object({
  nombre:   z.string().min(1, 'El nombre es requerido').max(100),
  dni:      z.string().max(20).optional().or(z.literal('')),
  telefono: z.string().max(30).optional().or(z.literal('')),
  email:    z.string().email('Email inválido').optional().or(z.literal('')),
})

// ── Dispositivo ──
export const DispositivoSchema = z.object({
  tipo:        z.string().max(50).default('Celular'),
  marca:       z.string().max(50).optional().or(z.literal('')),
  modelo:      z.string().max(50).optional().or(z.literal('')),
  imei:        z.string().max(20).optional().or(z.literal('')),
  color:       z.string().max(30).optional().or(z.literal('')),
  numeroLinea: z.string().max(20).optional().or(z.literal('')),
})

// ── Legajo ──
export const LegajoSchema = z.object({
  numero:        z.string().min(1, 'El número es requerido').max(50),
  caratula:      z.string().min(1, 'La carátula es requerida').max(500),
  cuij:          z.string().max(50).optional().or(z.literal('')),
  delito:        z.string().min(1, 'El delito es requerido').max(200),
  fechaHecho:    z.string().min(1, 'La fecha es requerida'),
  estado:        z.enum(['Activo', 'Inactivo', 'Cerrado', 'En seguimiento']).default('Activo'),
  observaciones: z.string().max(2000).optional().or(z.literal('')),
  fiscal:        z.string().max(200).optional().or(z.literal('')),
  emailRespuesta:z.string().email('Email inválido').optional().or(z.literal('')),
  victimas:      z.array(VictimaSchema).default([]),
  dispositivos:  z.array(DispositivoSchema).default([]),
})

// ── Oficio ──
export const OficioSchema = z.object({
  legajoId:         z.string().min(1, 'El legajo es requerido'),
  operadora:        z.string().min(1, 'La operadora es requerida').max(50),
  tipo:             z.string().min(1, 'El tipo es requerido').max(100),
  urgencia:         z.string().max(50).default('48 horas'),
  numero:           z.string().max(50).optional().or(z.literal('')),
  observaciones:    z.string().max(2000).optional().or(z.literal('')),
  columnas:         z.string().optional().or(z.literal('')),
  tipoConsulta:     z.enum(['imei', 'linea']).default('imei'),
  numeroLinea:      z.string().max(30).optional().or(z.literal('')),
  imeiSeleccionado: z.string().max(20).optional().or(z.literal('')),
  fechaEnvio:       z.string().optional().or(z.literal('')),
  estado:           z.enum(['Pendiente', 'Enviado', 'Respondido', 'Vencido']).optional(),
  fechaRespuesta:   z.string().optional().or(z.literal('')),
})

// ── Fiscal ──
export const FiscalSchema = z.object({
  nombre:          z.string().min(1, 'El nombre es requerido').max(100),
  cargo:           z.string().max(100).optional().or(z.literal('')),
  fiscalia:        z.string().max(100).optional().or(z.literal('')),
  secretario:      z.string().max(100).optional().or(z.literal('')),
  dniSecretario:   z.string().max(20).optional().or(z.literal('')),
  dni:             z.string().max(20).optional().or(z.literal('')),
  email:           z.string().email('Email inválido').optional().or(z.literal('')),
  emailSecretario: z.string().email('Email inválido').optional().or(z.literal('')),
  direccion:       z.string().max(200).optional().or(z.literal('')),
  telefono:        z.string().max(30).optional().or(z.literal('')),
  telefonoMovil:   z.string().max(30).optional().or(z.literal('')),
})

// ── Usuario ──
export const UsuarioSchema = z.object({
  nombre:   z.string().min(1, 'El nombre es requerido').max(100),
  usuario:  z.string().min(3, 'Mínimo 3 caracteres').max(50),
  password: z.string().min(6, 'Mínimo 6 caracteres').max(100),
  rol:      z.enum(['admin', 'usuario']).default('usuario'),
  activo:   z.boolean().default(true),
  
})
// ── Manejo de errores de Prisma ──
import { Prisma } from '@/lib/generated/prisma'

export function handlePrismaError(error: unknown): { message: string; status: number } {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    switch (error.code) {
      case 'P2002':
        return { message: `Ya existe un registro con ese valor (${(error.meta?.target as string[])?.join(', ') ?? 'campo único'})`, status: 400 }
      case 'P2025':
        return { message: 'El registro no existe o fue eliminado', status: 404 }
      case 'P2003':
        return { message: 'No se puede completar la operación por dependencias existentes', status: 400 }
      case 'P2014':
        return { message: 'La operación violaría una relación requerida', status: 400 }
    }
  }
  if (error instanceof Prisma.PrismaClientValidationError) {
    return { message: 'Datos inválidos enviados a la base de datos', status: 400 }
  }
  return { message: 'Error interno del servidor', status: 500 }
}