/**
 * logger.ts — Sistema de logging estructurado para auditoría
 * Registra acciones críticas con usuario, IP, timestamp y detalles.
 */

type NivelLog = 'INFO' | 'WARN' | 'ERROR' | 'AUDIT'

interface EntradaLog {
  nivel: NivelLog
  accion: string
  usuarioId?: string
  ip?: string
  recurso?: string
  detalles?: Record<string, any>
  error?: string
  timestamp: string
}

function formatearLog(entrada: EntradaLog): string {
  return JSON.stringify(entrada)
}

export const logger = {
  info(accion: string, detalles?: Record<string, any>) {
    const entrada: EntradaLog = {
      nivel: 'INFO',
      accion,
      detalles,
      timestamp: new Date().toISOString(),
    }
    console.log(formatearLog(entrada))
  },

  warn(accion: string, detalles?: Record<string, any>) {
    const entrada: EntradaLog = {
      nivel: 'WARN',
      accion,
      detalles,
      timestamp: new Date().toISOString(),
    }
    console.warn(formatearLog(entrada))
  },

  error(accion: string, error: unknown, detalles?: Record<string, any>) {
    const entrada: EntradaLog = {
      nivel: 'ERROR',
      accion,
      error: error instanceof Error ? error.message : String(error),
      detalles,
      timestamp: new Date().toISOString(),
    }
    console.error(formatearLog(entrada))
  },

  audit(accion: string, usuarioId: string, recurso: string, detalles?: Record<string, any>, ip?: string) {
    const entrada: EntradaLog = {
      nivel: 'AUDIT',
      accion,
      usuarioId,
      ip,
      recurso,
      detalles,
      timestamp: new Date().toISOString(),
    }
    console.log(formatearLog(entrada))
  },
}