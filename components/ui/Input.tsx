"use client"
import { InputHTMLAttributes, forwardRef, useState } from "react"
import { motion } from "framer-motion"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  icono?: React.ReactNode
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  label, error, icono, className = '', ...props
}, ref) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className="space-y-1.5 w-full">
      {label && (
        <label className="block text-xs font-semibold tracking-wide text-[var(--text-secondary)] uppercase">
          {label}
        </label>
      )}
      <motion.div 
        animate={{ scale: isFocused ? 1.01 : 1 }}
        transition={{ duration: 0.2 }}
        className="relative group"
      >
        {icono && (
          <span className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors duration-200 ${isFocused ? 'text-blue-400' : 'text-[var(--text-muted)]'}`}>
            {icono}
          </span>
        )}
        <input
          ref={ref}
          {...props}
          onFocus={(e) => { setIsFocused(true); props.onFocus?.(e) }}
          onBlur={(e) => { setIsFocused(false); props.onBlur?.(e) }}
          className={`
            w-full rounded-xl border px-3 py-2.5 text-sm
            bg-[var(--bg-secondary)] border-[var(--border)]
            text-[var(--text-primary)] placeholder-[var(--text-muted)]
            focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50
            transition-all duration-200 disabled:opacity-50
            hover:border-[var(--border-focus)]
            shadow-inner
            ${icono ? 'pl-10' : ''}
            ${error ? 'border-red-500/80 focus:ring-red-500/50 focus:border-red-500/80' : ''}
            ${className}
          `}
        />
      </motion.div>
      {error && (
        <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="text-xs text-red-400 font-medium">
          {error}
        </motion.p>
      )}
    </div>
  )
})
Input.displayName = 'Input'