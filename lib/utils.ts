/**
 * utils.ts — Funciones utilitarias compartidas entre componentes
 * Elimina duplicación de colorEstado, formatFecha, etc.
 */

// ── Formato de fechas ──
export function formatFecha(fecha: string | Date | null | undefined): string {
  if (!fecha) return '—'
  try {
    return new Date(fecha).toLocaleDateString('es-AR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    })
  } catch {
    return '—'
  }
}

export function formatFechaCorta(fecha: string | Date | null | undefined): string {
  if (!fecha) return '—'
  try {
    return new Date(fecha).toLocaleDateString('es-AR', {
      day: '2-digit',
      month: 'short',
    })
  } catch {
    return '—'
  }
}

// ── Colores por estado de legajo ──
export function colorEstadoLegajo(estado: string): string {
  const map: Record<string, string> = {
    'Activo':          '#22c55e',
    'En seguimiento':  '#3b82f6',
    'Cerrado':         '#94a3b8',
    'Inactivo':        '#475569',
  }
  return map[estado] ?? '#94a3b8'
}

// ── Colores por estado de oficio ──
export function colorEstadoOficio(estado: string): { background: string; color: string } {
  const map: Record<string, { background: string; color: string }> = {
    'Respondido':    { background: 'rgba(34,197,94,0.15)',  color: 'var(--success)' },
    'Sin respuesta': { background: 'rgba(239,68,68,0.15)',  color: 'var(--danger)'  },
    'Enviado':       { background: 'rgba(59,130,246,0.15)', color: 'var(--accent)'  },
    'Pendiente':     { background: 'rgba(245,158,11,0.15)', color: 'var(--warning)' },
    'Vencido':       { background: 'rgba(239,68,68,0.15)',  color: 'var(--danger)'  },
  }
  return map[estado] ?? { background: 'var(--bg-tertiary)', color: 'var(--text-muted)' }
}

// ── Truncar texto ──
export function truncar(texto: string, maxCaracteres: number): string {
  if (!texto) return '—'
  if (texto.length <= maxCaracteres) return texto
  return texto.slice(0, maxCaracteres) + '…'
}

// ── Formatear número con separador de miles ──
export function formatNumero(n: number): string {
  return n.toLocaleString('es-AR')
}