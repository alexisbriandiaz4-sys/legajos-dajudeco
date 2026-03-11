"use client"
import { motion } from "framer-motion"

interface BadgeProps {
  texto: string
  color?: string
  bg?: string
  animate?: boolean
}

export function Badge({ texto, color, bg, animate = false }: BadgeProps) {
  const content = (
    <span
      className="px-2.5 py-1 rounded-full text-xs font-semibold tracking-wide border shadow-sm backdrop-blur-md"
      style={{ 
        color: color ?? 'var(--text-primary)', 
        background: bg ? `${bg}20` : 'var(--bg-tertiary)', /* 20% alpha background */
        borderColor: bg ? `${bg}40` : 'var(--border)'
      }}
    >
      {texto}
    </span>
  )
  
  if (animate) {
    return (
      <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
        {content}
      </motion.div>
    )
  }

  return content;
}