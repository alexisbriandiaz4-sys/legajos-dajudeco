"use client"
import { InputHTMLAttributes, forwardRef } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  icono?: React.ReactNode
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  label, error, icono, className = '', ...props
}, ref) => {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>
          {label}
        </label>
      )}
      <div className="relative">
        {icono && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: 'var(--text-muted)' }}>
            {icono}
          </span>
        )}
        <input
          ref={ref}
          {...props}
          className={`
            w-full rounded-lg border px-3 py-2 text-sm
            bg-[var(--bg-secondary)] border-[var(--border)]
            text-[var(--text-primary)] placeholder-[var(--text-muted)]
            focus:outline-none focus:border-blue-500
            transition-colors duration-150 disabled:opacity-50
            ${icono ? 'pl-9' : ''}
            ${error ? 'border-red-500' : ''}
            ${className}
          `}
        />
      </div>
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  )
})
Input.displayName = 'Input'