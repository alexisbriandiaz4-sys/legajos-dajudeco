/**
 * @jest-environment jsdom
 */
import { renderHook, act } from '@testing-library/react'
import { usePaginacion } from '@/lib/hooks/usePaginacion'
import { useBusquedaDebounce } from '@/lib/hooks/useBusquedaDebounce'
import { useModal } from '@/lib/hooks/useModal'

// ── usePaginacion ──────────────────────────────────────────
describe('usePaginacion', () => {
  it('inicia en página 1 por defecto', () => {
    const { result } = renderHook(() => usePaginacion())
    expect(result.current.page).toBe(1)
  })

  it('inicia en la página especificada', () => {
    const { result } = renderHook(() => usePaginacion(3))
    expect(result.current.page).toBe(3)
  })

  it('va a una página específica', () => {
    const { result } = renderHook(() => usePaginacion())
    act(() => result.current.irAPagina(5))
    expect(result.current.page).toBe(5)
  })

  it('avanza a la siguiente página', () => {
    const { result } = renderHook(() => usePaginacion())
    act(() => result.current.siguiente(10))
    expect(result.current.page).toBe(2)
  })

  it('no pasa el total de páginas', () => {
    const { result } = renderHook(() => usePaginacion(10))
    act(() => result.current.siguiente(10))
    expect(result.current.page).toBe(10)
  })

  it('retrocede a la página anterior', () => {
    const { result } = renderHook(() => usePaginacion(5))
    act(() => result.current.anterior())
    expect(result.current.page).toBe(4)
  })

  it('no baja de página 1', () => {
    const { result } = renderHook(() => usePaginacion(1))
    act(() => result.current.anterior())
    expect(result.current.page).toBe(1)
  })

  it('resetea a página 1', () => {
    const { result } = renderHook(() => usePaginacion(7))
    act(() => result.current.resetear())
    expect(result.current.page).toBe(1)
  })
})

// ── useBusquedaDebounce ────────────────────────────────────
describe('useBusquedaDebounce', () => {
  beforeEach(() => jest.useFakeTimers())
  afterEach(() => jest.useRealTimers())

  it('inicia con strings vacíos', () => {
    const { result } = renderHook(() => useBusquedaDebounce())
    expect(result.current.busquedaInput).toBe('')
    expect(result.current.busqueda).toBe('')
  })

  it('actualiza busquedaInput inmediatamente', () => {
    const { result } = renderHook(() => useBusquedaDebounce())
    act(() => result.current.setBusquedaInput('test'))
    expect(result.current.busquedaInput).toBe('test')
  })

  it('no actualiza busqueda antes del delay', () => {
    const { result } = renderHook(() => useBusquedaDebounce(400))
    act(() => result.current.setBusquedaInput('test'))
    expect(result.current.busqueda).toBe('')
  })

  it('actualiza busqueda después del delay', () => {
    const { result } = renderHook(() => useBusquedaDebounce(400))
    act(() => result.current.setBusquedaInput('test'))
    act(() => jest.advanceTimersByTime(400))
    expect(result.current.busqueda).toBe('test')
  })

  it('limpia ambos valores', () => {
    const { result } = renderHook(() => useBusquedaDebounce())
    act(() => {
      result.current.setBusquedaInput('test')
      jest.advanceTimersByTime(400)
    })
    act(() => result.current.limpiar())
    expect(result.current.busquedaInput).toBe('')
    expect(result.current.busqueda).toBe('')
  })
})

// ── useModal ───────────────────────────────────────────────
describe('useModal', () => {
  it('inicia cerrado', () => {
    const { result } = renderHook(() => useModal())
    expect(result.current.abierto).toBe(false)
    expect(result.current.dato).toBeNull()
  })

  it('abre el modal', () => {
    const { result } = renderHook(() => useModal())
    act(() => result.current.abrir())
    expect(result.current.abierto).toBe(true)
  })

  it('abre el modal con dato', () => {
    const { result } = renderHook(() => useModal<string>())
    act(() => result.current.abrir('legajo-123'))
    expect(result.current.abierto).toBe(true)
    expect(result.current.dato).toBe('legajo-123')
  })

  it('cierra el modal y limpia el dato', () => {
    const { result } = renderHook(() => useModal<string>())
    act(() => result.current.abrir('test'))
    act(() => result.current.cerrar())
    expect(result.current.abierto).toBe(false)
    expect(result.current.dato).toBeNull()
  })

  it('funciona con objetos como dato', () => {
    const { result } = renderHook(() => useModal<{ id: string; nombre: string }>())
    const dato = { id: '1', nombre: 'Legajo Test' }
    act(() => result.current.abrir(dato))
    expect(result.current.dato).toEqual(dato)
  })
})