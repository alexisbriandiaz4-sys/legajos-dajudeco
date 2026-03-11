"use client"

interface CardProps {
  children: React.ReactNode
  className?: string
  padding?: boolean
}

export function Card({ children, className = '', padding = true }: CardProps) {
  return (
    <div
      className={`rounded-2xl ${padding ? 'p-5' : ''} ${className}`}
      style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}
    >
      {children}
    </div>
  )
}