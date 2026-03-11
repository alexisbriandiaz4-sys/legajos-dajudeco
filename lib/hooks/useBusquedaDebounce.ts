import { useState, useEffect } from 'react'

export function useBusquedaDebounce(delay = 400) {
  const [busquedaInput, setBusquedaInput] = useState('')
  const [busqueda, setBusqueda] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setBusqueda(busquedaInput)
    }, delay)
    return () => clearTimeout(timer)
  }, [busquedaInput, delay])

  function limpiar() {
    setBusquedaInput('')
    setBusqueda('')
  }

  return { busquedaInput, setBusquedaInput, busqueda, limpiar }
}