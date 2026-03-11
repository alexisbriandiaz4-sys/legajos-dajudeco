import { useState } from 'react'

export function usePaginacion(paginaInicial = 1) {
  const [page, setPage] = useState(paginaInicial)

  function irAPagina(p: number) { setPage(p) }
  function siguiente(totalPages: number) { setPage(p => Math.min(p + 1, totalPages)) }
  function anterior() { setPage(p => Math.max(p - 1, 1)) }
  function resetear() { setPage(1) }

  return { page, setPage, irAPagina, siguiente, anterior, resetear }
}