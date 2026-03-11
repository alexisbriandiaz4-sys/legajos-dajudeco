"use client"
import { motion } from "framer-motion"

interface SkeletonLoaderProps {
  width?: string | number
  height?: string | number
  borderRadius?: string | number
  className?: string
}

export function SkeletonLoader({ 
  width = '100%', 
  height = '20px', 
  borderRadius = '8px', 
  className = '' 
}: SkeletonLoaderProps) {
  return (
    <motion.div
      className={`glass-panel overflow-hidden relative ${className}`}
      style={{ width, height, borderRadius }}
    >
      <motion.div
        className="absolute inset-0 z-10"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)',
        }}
        animate={{ x: ['-100%', '100%'] }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "linear"
        }}
      />
    </motion.div>
  )
}
