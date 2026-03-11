"use client"
import { Loader2 } from "lucide-react"
import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variante?: 'primario' | 'secundario' | 'peligro' | 'exito' | 'ghost'
  tamanio?: 'sm' | 'md' | 'lg'
  cargando?: boolean
  icono?: React.ReactNode
}

const estilosVariante = {
  primario:   'bg-blue-600 hover:bg-blue-700 text-white',
  secundario: 'bg-[var(--bg-tertiary)] hover:opacity-80 text-[var(--text-primary)] border border-[var(--border)]',
  peligro:    'bg-red-600 hover:bg-red-700 text-white',
  exito:      'bg-green-600 hover:bg-green-700 text-white',
  ghost:      'bg-transparent hover:bg-[var(--bg-tertiary)] text-[var(--text-secondary)]',
}

const estilosTamanio = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-4 py-2 text-sm',
  lg: 'px-5 py-2.5 text-base',
}

export function Button({
  variante = 'primario',
  tamanio = 'md',
  cargando = false,
  icono,
  children,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled || cargando}
      className={`
        inline-flex items-center gap-2 rounded-lg font-medium
        transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed
        ${estilosVariante[variante]}
        ${estilosTamanio[tamanio]}
        ${className}
      `}
    >
      {cargando ? <Loader2 size={14} className="animate-spin" /> : icono}
      {children}
    </button>
  )
}