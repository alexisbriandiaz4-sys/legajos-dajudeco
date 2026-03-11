"use client"
import { motion } from "framer-motion"

interface CardProps {
  children: React.ReactNode
  className?: string
  padding?: boolean
  hoverEffect?: boolean
}

export function Card({ children, className = '', padding = true, hoverEffect = false }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`rounded-2xl glass-panel ${hoverEffect ? 'glass-panel-hover transition-colors' : ''} ${padding ? 'p-5' : ''} ${className}`}
    >
      {children}
    </motion.div>
  )
}