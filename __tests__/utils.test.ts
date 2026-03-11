import { 
  formatFecha, formatFechaCorta, colorEstadoLegajo, 
  colorEstadoOficio, truncar, formatNumero 
} from '@/lib/utils'

// ── formatFecha ────────────────────────────────────────────
describe('formatFecha', () => {
  it('formatea una fecha ISO correctamente', () => {
    const result = formatFecha('2026-03-11T00:00:00.000Z')
    expect(result).toMatch(/\d{2}\/\d{2}\/\d{4}/)
  })

  it('retorna — para null', () => {
    expect(formatFecha(null)).toBe('—')
  })

  it('retorna — para undefined', () => {
    expect(formatFecha(undefined)).toBe('—')
  })

  it('retorna — para string vacío', () => {
    expect(formatFecha('')).toBe('—')
  })

  it('acepta un objeto Date', () => {
    const result = formatFecha(new Date('2026-01-15'))
    expect(result).toMatch(/\d{2}\/\d{2}\/\d{4}/)
  })
})

// ── formatFechaCorta ────────────────────────────────────────
describe('formatFechaCorta', () => {
  it('formatea fecha corta', () => {
    const result = formatFechaCorta('2026-03-11')
    expect(result).toBeTruthy()
    expect(result).not.toBe('—')
  })

  it('retorna — para null', () => {
    expect(formatFechaCorta(null)).toBe('—')
  })
})

// ── colorEstadoLegajo ──────────────────────────────────────
describe('colorEstadoLegajo', () => {
  it('retorna verde para Activo', () => {
    expect(colorEstadoLegajo('Activo')).toBe('#22c55e')
  })

  it('retorna azul para En seguimiento', () => {
    expect(colorEstadoLegajo('En seguimiento')).toBe('#3b82f6')
  })

  it('retorna gris para Cerrado', () => {
    expect(colorEstadoLegajo('Cerrado')).toBe('#94a3b8')
  })

  it('retorna gris oscuro para Inactivo', () => {
    expect(colorEstadoLegajo('Inactivo')).toBe('#475569')
  })

  it('retorna color por defecto para estado desconocido', () => {
    expect(colorEstadoLegajo('Desconocido')).toBe('#94a3b8')
  })
})

// ── colorEstadoOficio ──────────────────────────────────────
describe('colorEstadoOficio', () => {
  const estados = ['Respondido', 'Sin respuesta', 'Enviado', 'Pendiente', 'Vencido']

  it.each(estados)('retorna colores para estado %s', (estado) => {
    const result = colorEstadoOficio(estado)
    expect(result).toHaveProperty('background')
    expect(result).toHaveProperty('color')
    expect(result.background).toBeTruthy()
    expect(result.color).toBeTruthy()
  })

  it('retorna color por defecto para estado desconocido', () => {
    const result = colorEstadoOficio('Inventado')
    expect(result).toHaveProperty('background')
    expect(result).toHaveProperty('color')
  })

  it('Sin respuesta tiene color rojo (danger)', () => {
    const result = colorEstadoOficio('Sin respuesta')
    expect(result.color).toBe('var(--danger)')
  })

  it('Respondido tiene color verde (success)', () => {
    const result = colorEstadoOficio('Respondido')
    expect(result.color).toBe('var(--success)')
  })
})

// ── truncar ────────────────────────────────────────────────
describe('truncar', () => {
  it('no trunca texto corto', () => {
    expect(truncar('Hola mundo', 20)).toBe('Hola mundo')
  })

  it('trunca texto largo', () => {
    const result = truncar('Este es un texto muy largo que debe ser truncado', 10)
    expect(result).toBe('Este es un…')
    expect(result.length).toBe(11)
  })

  it('retorna — para string vacío', () => {
    expect(truncar('', 10)).toBe('—')
  })

  it('no trunca cuando tiene exactamente el límite', () => {
    expect(truncar('12345', 5)).toBe('12345')
  })

  it('agrega … al truncar', () => {
    const result = truncar('abcdef', 3)
    expect(result.endsWith('…')).toBe(true)
  })
})

// ── formatNumero ───────────────────────────────────────────
describe('formatNumero', () => {
  it('formatea números con separador de miles', () => {
    const result = formatNumero(1000)
    expect(result).toContain('.')
  })

  it('formatea cero', () => {
    expect(formatNumero(0)).toBe('0')
  })

  it('formatea número grande', () => {
    const result = formatNumero(8400)
    expect(result).toBeTruthy()
  })
})