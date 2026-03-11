"use client"
import { useState, useEffect, useCallback } from "react"
import { Shield, RefreshCw, Search, Filter, ChevronLeft, ChevronRight, AlertTriangle, Info, CheckCircle, XCircle } from "lucide-react"

interface LogEntry {
  id: string
  nivel: string
  accion: string
  usuarioId?: string
  ip?: string
  recurso?: string
  detalles?: string
  error?: string
  createdAt: string
}

interface DatosLogs {
  logs: LogEntry[]
  total: number
  page: number
  totalPages: number
}

const NIVELES = ['', 'AUDIT', 'ERROR', 'WARN', 'INFO']

function badgeNivel(nivel: string) {
  const map: Record<string, { bg: string; color: string; icon: React.ReactNode }> = {
    AUDIT: { bg: 'rgba(59,130,246,0.15)', color: '#3b82f6', icon: <Shield size={11} /> },
    ERROR: { bg: 'rgba(239,68,68,0.15)',  color: '#ef4444', icon: <XCircle size={11} /> },
    WARN:  { bg: 'rgba(245,158,11,0.15)', color: '#f59e0b', icon: <AlertTriangle size={11} /> },
    INFO:  { bg: 'rgba(34,197,94,0.15)',  color: '#22c55e', icon: <Info size={11} /> },
  }
  const s = map[nivel] ?? map['INFO']
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium"
      style={{ background: s.bg, color: s.color }}>
      {s.icon}{nivel}
    </span>
  )
}

function formatFecha(fecha: string) {
  return new Date(fecha).toLocaleString('es-AR', {
    day: '2-digit', month: '2-digit', year: 'numeric',
    hour: '2-digit', minute: '2-digit', second: '2-digit'
  })
}

export default function ModuloAuditoria() {
  const [datos, setDatos]         = useState<DatosLogs | null>(null)
  const [cargando, setCargando]   = useState(true)
  const [page, setPage]           = useState(1)
  const [filtroNivel, setFiltroNivel]   = useState('')
  const [filtroAccion, setFiltroAccion] = useState('')
  const [filtroDesde, setFiltroDesde]   = useState('')
  const [filtroHasta, setFiltroHasta]   = useState('')
  const [logSeleccionado, setLogSeleccionado] = useState<LogEntry | null>(null)

  const cargar = useCallback(async () => {
    setCargando(true)
    try {
      const params = new URLSearchParams({ page: String(page) })
      if (filtroNivel)  params.set('nivel',  filtroNivel)
      if (filtroAccion) params.set('accion', filtroAccion)
      if (filtroDesde)  params.set('desde',  filtroDesde)
      if (filtroHasta)  params.set('hasta',  filtroHasta)
      const res = await fetch(`/api/audit?${params}`)
      if (res.ok) setDatos(await res.json())
    } catch {}
    finally { setCargando(false) }
  }, [page, filtroNivel, filtroAccion, filtroDesde, filtroHasta])

  useEffect(() => { cargar() }, [cargar])

  function limpiarFiltros() {
    setFiltroNivel(''); setFiltroAccion('')
    setFiltroDesde(''); setFiltroHasta('')
    setPage(1)
  }

  return (
    <div className="space-y-4">
      {/* Encabezado */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-2">
          <Shield size={20} style={{ color: 'var(--accent)' }} />
          <h2 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
            Registro de Auditoría
          </h2>
          {datos && (
            <span className="text-xs px-2 py-0.5 rounded-full"
              style={{ background: 'var(--bg-tertiary)', color: 'var(--text-muted)' }}>
              {datos.total.toLocaleString('es-AR')} registros
            </span>
          )}
        </div>
        <button onClick={cargar}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm transition hover:opacity-80"
          style={{ background: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }}>
          <RefreshCw size={14} className={cargando ? 'animate-spin' : ''} />
          Actualizar
        </button>
      </div>

      {/* Filtros */}
      <div className="rounded-xl p-4 space-y-3" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
        <div className="flex items-center gap-2 text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
          <Filter size={14} /> Filtros
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <select value={filtroNivel} onChange={e => { setFiltroNivel(e.target.value); setPage(1) }}
            className="rounded-lg border px-3 py-2 text-sm"
            style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}>
            {NIVELES.map(n => <option key={n} value={n}>{n || 'Todos los niveles'}</option>)}
          </select>
          <div className="relative">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: 'var(--text-muted)' }} />
            <input value={filtroAccion} onChange={e => { setFiltroAccion(e.target.value); setPage(1) }}
              placeholder="Buscar acción..."
              className="w-full rounded-lg border pl-8 pr-3 py-2 text-sm"
              style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border)', color: 'var(--text-primary)' }} />
          </div>
          <input type="date" value={filtroDesde} onChange={e => { setFiltroDesde(e.target.value); setPage(1) }}
            className="rounded-lg border px-3 py-2 text-sm"
            style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border)', color: 'var(--text-primary)' }} />
          <input type="date" value={filtroHasta} onChange={e => { setFiltroHasta(e.target.value); setPage(1) }}
            className="rounded-lg border px-3 py-2 text-sm"
            style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border)', color: 'var(--text-primary)' }} />
        </div>
        {(filtroNivel || filtroAccion || filtroDesde || filtroHasta) && (
          <button onClick={limpiarFiltros} className="text-xs hover:underline" style={{ color: 'var(--accent)' }}>
            Limpiar filtros
          </button>
        )}
      </div>

      {/* Tabla */}
      <div className="rounded-xl overflow-hidden" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
        {cargando ? (
          <div className="p-8 text-center" style={{ color: 'var(--text-muted)' }}>Cargando registros...</div>
        ) : !datos?.logs.length ? (
          <div className="p-8 text-center" style={{ color: 'var(--text-muted)' }}>
            <Shield size={32} className="mx-auto mb-2 opacity-30" />
            No hay registros de auditoría
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border)', background: 'var(--bg-tertiary)' }}>
                  {['Fecha', 'Nivel', 'Acción', 'Recurso', 'IP', 'Detalles'].map(h => (
                    <th key={h} className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide"
                      style={{ color: 'var(--text-muted)' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {datos.logs.map((log, i) => (
                  <tr key={log.id}
                    onClick={() => setLogSeleccionado(log)}
                    className="cursor-pointer transition-colors hover:opacity-80"
                    style={{ borderBottom: '1px solid var(--border)', background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)' }}>
                    <td className="px-4 py-3 whitespace-nowrap text-xs" style={{ color: 'var(--text-muted)' }}>
                      {formatFecha(log.createdAt)}
                    </td>
                    <td className="px-4 py-3">{badgeNivel(log.nivel)}</td>
                    <td className="px-4 py-3 font-mono text-xs" style={{ color: 'var(--text-primary)' }}>
                      {log.accion}
                    </td>
                    <td className="px-4 py-3 text-xs" style={{ color: 'var(--text-secondary)' }}>
                      {log.recurso ?? '—'}
                    </td>
                    <td className="px-4 py-3 text-xs" style={{ color: 'var(--text-muted)' }}>
                      {log.ip ?? '—'}
                    </td>
                    <td className="px-4 py-3 text-xs max-w-xs truncate" style={{ color: 'var(--text-muted)' }}>
                      {log.detalles ?? log.error ?? '—'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Paginación */}
        {datos && datos.totalPages > 1 && (
          <div className="flex items-center justify-between px-4 py-3" style={{ borderTop: '1px solid var(--border)' }}>
            <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
              Página {datos.page} de {datos.totalPages}
            </span>
            <div className="flex gap-2">
              <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}
                className="p-1.5 rounded-lg transition hover:opacity-80 disabled:opacity-30"
                style={{ background: 'var(--bg-tertiary)', color: 'var(--text-primary)' }}>
                <ChevronLeft size={14} />
              </button>
              <button onClick={() => setPage(p => Math.min(datos.totalPages, p + 1))} disabled={page === datos.totalPages}
                className="p-1.5 rounded-lg transition hover:opacity-80 disabled:opacity-30"
                style={{ background: 'var(--bg-tertiary)', color: 'var(--text-primary)' }}>
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Modal detalle */}
      {logSeleccionado && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.6)' }}
          onClick={() => setLogSeleccionado(null)}>
          <div className="w-full max-w-lg rounded-2xl p-5 space-y-3"
            style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}
            onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between">
              <h3 className="font-semibold" style={{ color: 'var(--text-primary)' }}>Detalle del registro</h3>
              <button onClick={() => setLogSeleccionado(null)} className="text-xs hover:underline" style={{ color: 'var(--text-muted)' }}>Cerrar</button>
            </div>
            {[
              ['Fecha',   formatFecha(logSeleccionado.createdAt)],
              ['Nivel',   logSeleccionado.nivel],
              ['Acción',  logSeleccionado.accion],
              ['Usuario', logSeleccionado.usuarioId ?? '—'],
              ['IP',      logSeleccionado.ip ?? '—'],
              ['Recurso', logSeleccionado.recurso ?? '—'],
            ].map(([label, val]) => (
              <div key={label} className="flex gap-3 text-sm">
                <span className="w-20 shrink-0 font-medium" style={{ color: 'var(--text-muted)' }}>{label}</span>
                <span style={{ color: 'var(--text-primary)' }}>{val}</span>
              </div>
            ))}
            {logSeleccionado.detalles && (
              <div>
                <p className="text-xs font-medium mb-1" style={{ color: 'var(--text-muted)' }}>Detalles</p>
                <pre className="text-xs p-3 rounded-lg overflow-auto max-h-40"
                  style={{ background: 'var(--bg-tertiary)', color: 'var(--text-primary)' }}>
                  {JSON.stringify(JSON.parse(logSeleccionado.detalles), null, 2)}
                </pre>
              </div>
            )}
            {logSeleccionado.error && (
              <div>
                <p className="text-xs font-medium mb-1" style={{ color: '#ef4444' }}>Error</p>
                <p className="text-xs p-3 rounded-lg" style={{ background: 'rgba(239,68,68,0.1)', color: '#ef4444' }}>
                  {logSeleccionado.error}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}