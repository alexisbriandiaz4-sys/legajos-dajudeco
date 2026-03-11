import { ClientCache, TTL, fetchConCache } from '@/lib/cache'

// ── ClientCache ────────────────────────────────────────────
describe('ClientCache', () => {
  let cache: ClientCache

  beforeEach(() => {
    cache = new ClientCache()
  })

  it('guarda y recupera un valor', () => {
    cache.set('key1', { dato: 'valor' }, 60)
    const result = cache.get('key1')
    expect(result).toEqual({ dato: 'valor' })
  })

  it('retorna null para clave inexistente', () => {
    expect(cache.get('no-existe')).toBeNull()
  })

  it('retorna null después de que expira el TTL', () => {
    jest.useFakeTimers()
    cache.set('expira', 'dato', 1) // 1 segundo
    jest.advanceTimersByTime(2000)  // avanzar 2 segundos
    expect(cache.get('expira')).toBeNull()
    jest.useRealTimers()
  })

  it('no expira antes del TTL', () => {
    jest.useFakeTimers()
    cache.set('no-expira', 'dato', 10) // 10 segundos
    jest.advanceTimersByTime(5000)      // avanzar 5 segundos
    expect(cache.get('no-expira')).toBe('dato')
    jest.useRealTimers()
  })

  it('invalida una clave específica', () => {
    cache.set('key1', 'valor1', 60)
    cache.set('key2', 'valor2', 60)
    cache.invalidar('key1')
    expect(cache.get('key1')).toBeNull()
    expect(cache.get('key2')).toBe('valor2')
  })

  it('invalida por prefijo', () => {
    cache.set('/api/legajos?page=1', 'datos1', 60)
    cache.set('/api/legajos?page=2', 'datos2', 60)
    cache.set('/api/oficios', 'oficios', 60)
    cache.invalidarPrefijo('/api/legajos')
    expect(cache.get('/api/legajos?page=1')).toBeNull()
    expect(cache.get('/api/legajos?page=2')).toBeNull()
    expect(cache.get('/api/oficios')).toBe('oficios')
  })

  it('limpia todo el caché', () => {
    cache.set('a', 1, 60)
    cache.set('b', 2, 60)
    cache.set('c', 3, 60)
    cache.limpiar()
    expect(cache.get('a')).toBeNull()
    expect(cache.get('b')).toBeNull()
    expect(cache.get('c')).toBeNull()
  })

  it('sobreescribe un valor existente', () => {
    cache.set('key', 'original', 60)
    cache.set('key', 'actualizado', 60)
    expect(cache.get('key')).toBe('actualizado')
  })

  it('acepta distintos tipos de datos', () => {
    cache.set('string', 'texto', 60)
    cache.set('number', 42, 60)
    cache.set('array', [1, 2, 3], 60)
    cache.set('object', { a: 1 }, 60)
    cache.set('null-val', null, 60)

    expect(cache.get('string')).toBe('texto')
    expect(cache.get('number')).toBe(42)
    expect(cache.get('array')).toEqual([1, 2, 3])
    expect(cache.get('object')).toEqual({ a: 1 })
  })
})

// ── TTL constants ──────────────────────────────────────────
describe('TTL constants', () => {
  it('USUARIOS tiene TTL alto (>= 5 minutos)', () => {
    expect(TTL.USUARIOS).toBeGreaterThanOrEqual(300)
  })

  it('LEGAJOS tiene TTL razonable (>= 30 segundos)', () => {
    expect(TTL.LEGAJOS).toBeGreaterThanOrEqual(30)
  })

  it('ESTADISTICAS tiene TTL alto que LEGAJOS', () => {
    expect(TTL.ESTADISTICAS).toBeGreaterThanOrEqual(TTL.LEGAJOS)
  })

  it('todos los TTL son positivos', () => {
    Object.values(TTL).forEach(val => {
      expect(val).toBeGreaterThan(0)
    })
  })
})