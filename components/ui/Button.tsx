"use client"
import { Loader2 } from "lucide-react"
import { ButtonHTMLAttributes } from "react"
import { motion } from "framer-motion"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variante?: 'primario' | 'secundario' | 'peligro' | 'exito' | 'ghost'
  tamanio?: 'sm' | 'md' | 'lg'
  cargando?: boolean
  icono?: React.ReactNode
}

const estilosVariante = {
  primario:   'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/25 border border-blue-500/50',
  secundario: 'glass-panel glass-panel-hover text-[var(--text-primary)]',
  peligro:    'bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-500/25 border border-red-500/50',
  exito:      'bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-500/25 border border-emerald-500/50',
  ghost:      'bg-transparent hover:bg-white/5 text-[var(--text-secondary)]',
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
    <motion.button
      whileHover={{ scale: disabled || cargando ? 1 : 1.02 }}
      whileTap={{ scale: disabled || cargando ? 1 : 0.98 }}
      {...props as any}
      disabled={disabled || cargando}
      className={`
        inline-flex items-center justify-center gap-2 rounded-xl font-medium
        transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed
        ${estilosVariante[variante]}
        ${estilosTamanio[tamanio]}
        ${className}
      `}
    >
      {cargando ? <Loader2 size={16} className="animate-spin" /> : icono}
      {children}
    </motion.button>
  )
}