"use client"
import { X } from "lucide-react"
import { useEffect } from "react"

interface ModalProps {
  abierto: boolean
  onCerrar: () => void
  titulo: string
  children: React.ReactNode
  ancho?: 'sm' | 'md' | 'lg' | 'xl'
}

const anchos = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-2xl',
}

export function Modal({ abierto, onCerrar, titulo, children, ancho = 'md' }: ModalProps) {
  useEffect(() => {
    if (!abierto) return
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onCerrar() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [abierto, onCerrar])

  if (!abierto) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.6)', animation: 'fadeIn 0.15s ease' }}
      onClick={onCerrar}
    >
      <div
        className={`w-full ${anchos[ancho]} rounded-2xl p-5 shadow-2xl`}
        style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)', animation: 'scaleIn 0.15s ease' }}
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-base" style={{ color: 'var(--text-primary)' }}>{titulo}</h3>
          <button onClick={onCerrar} className="p-1 rounded-lg hover:opacity-70 transition-opacity" style={{ color: 'var(--text-muted)' }}>
            <X size={16} />
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}