"use client"

interface BadgeProps {
  texto: string
  color?: string
  bg?: string
}

export function Badge({ texto, color, bg }: BadgeProps) {
  return (
    <span
      className="px-2 py-0.5 rounded-full text-xs font-medium"
      style={{ color: color ?? 'var(--text-primary)', background: bg ?? 'var(--bg-tertiary)' }}
    >
      {texto}
    </span>
  )
}