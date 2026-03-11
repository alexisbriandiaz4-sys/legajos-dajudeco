import { useState } from 'react'

export function useModal<T = boolean>() {
  const [abierto, setAbierto] = useState(false)
  const [dato, setDato] = useState<T | null>(null)

  function abrir(d?: T) {
    setDato(d ?? null)
    setAbierto(true)
  }

  function cerrar() {
    setAbierto(false)
    setDato(null)
  }

  return { abierto, dato, abrir, cerrar }
}