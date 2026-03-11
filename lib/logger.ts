/**
 * logger.ts — Sistema de logging estructurado para auditoría
 * Guarda en consola Y en base de datos PostgreSQL (tabla AuditLog)
 */
import { prisma } from '@/lib/db'

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

async function guardarEnDB(entrada: EntradaLog) {
  try {
    await prisma.auditLog.create({
      data: {
        nivel:     entrada.nivel,
        accion:    entrada.accion,
        usuarioId: entrada.usuarioId,
        ip:        entrada.ip,
        recurso:   entrada.recurso,
        detalles:  entrada.detalles ? JSON.stringify(entrada.detalles) : null,
        error:     entrada.error,
      }
    })
  } catch (err) {
    // Reportar el fallo del AuditLog en la infraestructura para ser levantado por Datadog/Sentry
    console.error(JSON.stringify({
      nivel: 'ERROR',
      accion: 'AUDIT_LOG_FAILURE',
      timestamp: new Date().toISOString(),
      error: err instanceof Error ? err.message : String(err)
    }));
  }
}

export const logger = {
  info(accion: string, detalles?: Record<string, any>) {
    const entrada: EntradaLog = {
      nivel: 'INFO', accion, detalles,
      timestamp: new Date().toISOString(),
    }
    console.log(formatearLog(entrada))
    guardarEnDB(entrada)
  },

  warn(accion: string, detalles?: Record<string, any>) {
    const entrada: EntradaLog = {
      nivel: 'WARN', accion, detalles,
      timestamp: new Date().toISOString(),
    }
    console.warn(formatearLog(entrada))
    guardarEnDB(entrada)
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
    guardarEnDB(entrada)
  },

  /**
   * Registra acciones críticas de auditoría:
   * login, logout, crear/editar/borrar recursos sensibles
   */
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
    guardarEnDB(entrada)
  },
}