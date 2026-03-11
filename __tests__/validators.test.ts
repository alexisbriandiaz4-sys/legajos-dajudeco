import { 
  LegajoSchema, OficioSchema, UsuarioSchema, 
  VictimaSchema, DispositivoSchema, FiscalSchema 
} from '@/lib/validators'

// ── LegajoSchema ───────────────────────────────────────────
describe('LegajoSchema', () => {
  const legajoValido = {
    numero: 'MP-001/2026',
    caratula: 'Test c/ Imputado',
    delito: 'Estafa',
    fechaHecho: '2026-01-01',
    estado: 'Activo' as const,
  }

  it('acepta un legajo válido', () => {
    const result = LegajoSchema.safeParse(legajoValido)
    expect(result.success).toBe(true)
  })

  it('rechaza sin número', () => {
    const result = LegajoSchema.safeParse({ ...legajoValido, numero: '' })
    expect(result.success).toBe(false)
  })

  it('rechaza sin carátula', () => {
    const result = LegajoSchema.safeParse({ ...legajoValido, caratula: '' })
    expect(result.success).toBe(false)
  })

  it('rechaza sin delito', () => {
    const result = LegajoSchema.safeParse({ ...legajoValido, delito: '' })
    expect(result.success).toBe(false)
  })

  it('acepta todos los estados válidos', () => {
    const estados = ['Activo', 'Inactivo', 'Cerrado', 'En seguimiento']
    estados.forEach(estado => {
      const result = LegajoSchema.safeParse({ ...legajoValido, estado })
      expect(result.success).toBe(true)
    })
  })

  it('rechaza estado inválido', () => {
    const result = LegajoSchema.safeParse({ ...legajoValido, estado: 'Inexistente' })
    expect(result.success).toBe(false)
  })

  it('acepta email de respuesta válido', () => {
    const result = LegajoSchema.safeParse({ ...legajoValido, emailRespuesta: 'fiscal@mpf.gov.ar' })
    expect(result.success).toBe(true)
  })

  it('rechaza email de respuesta inválido', () => {
    const result = LegajoSchema.safeParse({ ...legajoValido, emailRespuesta: 'no-es-un-email' })
    expect(result.success).toBe(false)
  })

  it('acepta email de respuesta vacío', () => {
    const result = LegajoSchema.safeParse({ ...legajoValido, emailRespuesta: '' })
    expect(result.success).toBe(true)
  })

  it('acepta victimas y dispositivos vacíos por defecto', () => {
    const result = LegajoSchema.safeParse(legajoValido)
    expect(result.success).toBe(true)
    if (result.success) {
      expect(result.data.victimas).toEqual([])
      expect(result.data.dispositivos).toEqual([])
    }
  })
})

// ── OficioSchema ───────────────────────────────────────────
describe('OficioSchema', () => {
  const oficioValido = {
    legajoId: 'cuid123',
    operadora: 'Claro',
    tipo: 'IMEI',
    urgencia: '48 horas',
  }

  it('acepta un oficio válido', () => {
    const result = OficioSchema.safeParse(oficioValido)
    expect(result.success).toBe(true)
  })

  it('rechaza sin legajoId', () => {
    const result = OficioSchema.safeParse({ ...oficioValido, legajoId: '' })
    expect(result.success).toBe(false)
  })

  it('rechaza sin operadora', () => {
    const result = OficioSchema.safeParse({ ...oficioValido, operadora: '' })
    expect(result.success).toBe(false)
  })

  it('acepta estado Sin respuesta', () => {
    const result = OficioSchema.safeParse({ ...oficioValido, estado: 'Sin respuesta' })
    expect(result.success).toBe(true)
  })

  it('acepta todos los estados válidos', () => {
    const estados = ['Pendiente', 'Enviado', 'Respondido', 'Vencido', 'Sin respuesta']
    estados.forEach(estado => {
      const result = OficioSchema.safeParse({ ...oficioValido, estado })
      expect(result.success).toBe(true)
    })
  })

  it('rechaza estado inexistente', () => {
    const result = OficioSchema.safeParse({ ...oficioValido, estado: 'Inventado' })
    expect(result.success).toBe(false)
  })

  it('acepta tipoConsulta imei y linea', () => {
    ['imei', 'linea'].forEach(tipo => {
      const result = OficioSchema.safeParse({ ...oficioValido, tipoConsulta: tipo })
      expect(result.success).toBe(true)
    })
  })
})

// ── UsuarioSchema ──────────────────────────────────────────
describe('UsuarioSchema', () => {
  const usuarioValido = {
    nombre: 'Juan Pérez',
    usuario: 'jperez',
    password: 'password123',
    rol: 'investigador' as const,
  }

  it('acepta un usuario válido', () => {
    const result = UsuarioSchema.safeParse(usuarioValido)
    expect(result.success).toBe(true)
  })

  it('rechaza usuario con menos de 3 caracteres', () => {
    const result = UsuarioSchema.safeParse({ ...usuarioValido, usuario: 'ab' })
    expect(result.success).toBe(false)
  })

  it('rechaza password con menos de 6 caracteres', () => {
    const result = UsuarioSchema.safeParse({ ...usuarioValido, password: '123' })
    expect(result.success).toBe(false)
  })

  it('acepta roles admin e investigador', () => {
    ['admin', 'investigador'].forEach(rol => {
      const result = UsuarioSchema.safeParse({ ...usuarioValido, rol })
      expect(result.success).toBe(true)
    })
  })

  it('rechaza rol usuario (obsoleto)', () => {
    const result = UsuarioSchema.safeParse({ ...usuarioValido, rol: 'usuario' })
    expect(result.success).toBe(false)
  })

  it('rol por defecto es investigador', () => {
    const { rol, ...sinRol } = usuarioValido
    const result = UsuarioSchema.safeParse(sinRol)
    expect(result.success).toBe(true)
    if (result.success) expect(result.data.rol).toBe('investigador')
  })
})

// ── VictimaSchema ──────────────────────────────────────────
describe('VictimaSchema', () => {
  it('acepta víctima con solo nombre', () => {
    const result = VictimaSchema.safeParse({ nombre: 'María García' })
    expect(result.success).toBe(true)
  })

  it('rechaza víctima sin nombre', () => {
    const result = VictimaSchema.safeParse({ nombre: '' })
    expect(result.success).toBe(false)
  })

  it('rechaza email inválido', () => {
    const result = VictimaSchema.safeParse({ nombre: 'Test', email: 'no-email' })
    expect(result.success).toBe(false)
  })

  it('acepta email vacío', () => {
    const result = VictimaSchema.safeParse({ nombre: 'Test', email: '' })
    expect(result.success).toBe(true)
  })
})

// ── DispositivoSchema ──────────────────────────────────────
describe('DispositivoSchema', () => {
  it('acepta dispositivo vacío (todos opcionales)', () => {
    const result = DispositivoSchema.safeParse({})
    expect(result.success).toBe(true)
  })

  it('tipo por defecto es Celular', () => {
    const result = DispositivoSchema.safeParse({})
    expect(result.success).toBe(true)
    if (result.success) expect(result.data.tipo).toBe('Celular')
  })

  it('acepta dispositivo completo', () => {
    const result = DispositivoSchema.safeParse({
      tipo: 'Celular', marca: 'Samsung', modelo: 'A50',
      imei: '123456789012345', color: 'Negro', numeroLinea: '3492000000'
    })
    expect(result.success).toBe(true)
  })
})