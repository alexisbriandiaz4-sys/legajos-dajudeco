import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import bcrypt from 'bcryptjs'
import { z } from 'zod'
import { getUsuario } from '@/lib/server-auth'
import { handlePrismaError } from '@/lib/validators'
import { logger } from '@/lib/logger'

const UsuarioUpdateSchema = z.object({
  nombre:   z.string().min(1).max(100).optional(),
  usuario:  z.string().min(3).max(50).optional(),
  password: z.string().min(5).max(100).optional(),
  rol:      z.enum(['admin', 'investigador']).optional(),
  activo:   z.boolean().optional(),
})

export async function PUT(request: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params
    const usuario = await getUsuario()
    if (!usuario) return NextResponse.json({ error: 'No autenticado' }, { status: 401 })

    if (usuario.rol !== 'admin' && usuario.id !== id) {
      return NextResponse.json({ error: 'Sin permisos' }, { status: 403 })
    }

    const body = await request.json()
    const parsed = UsuarioUpdateSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.issues[0].message }, { status: 400 })
    }

    const data: any = {}

    if (parsed.data.nombre) data.nombre = parsed.data.nombre
    if (parsed.data.usuario) {
      const existe = await prisma.usuario.findFirst({
        where: { usuario: parsed.data.usuario, NOT: { id } }
      })
      if (existe) return NextResponse.json({ error: 'El nombre de usuario ya existe' }, { status: 400 })
      data.usuario = parsed.data.usuario
    }
    if (parsed.data.password) {
      data.password = await bcrypt.hash(parsed.data.password, 12)
    }
    if (usuario.rol === 'admin') {
      if (parsed.data.rol     !== undefined) data.rol    = parsed.data.rol
      if (parsed.data.activo  !== undefined) data.activo = parsed.data.activo
    }

    const actualizado = await prisma.usuario.update({
      where: { id },
      data,
      select: { id: true, nombre: true, usuario: true, rol: true, activo: true, createdAt: true }
    })

    logger.audit('USUARIO_ACTUALIZADO', usuario.id, `usuario:${id}`, { campos: Object.keys(data) })
    return NextResponse.json(actualizado)
  } catch (error) {
    logger.error('[PUT /api/usuarios/[id]]', error)
    const { message, status } = handlePrismaError(error)
    return NextResponse.json({ error: message }, { status })
  }
}

export async function DELETE(_: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params
    const usuario = await getUsuario()
    if (!usuario) return NextResponse.json({ error: 'No autenticado' }, { status: 401 })
    if (usuario.rol !== 'admin') return NextResponse.json({ error: 'Sin permisos' }, { status: 403 })
    if (usuario.id === id) return NextResponse.json({ error: 'No podés eliminarte a vos mismo' }, { status: 400 })

    await prisma.usuario.delete({ where: { id } })
    logger.audit('USUARIO_ELIMINADO', usuario.id, `usuario:${id}`)
    return NextResponse.json({ ok: true })
  } catch (error) {
    logger.error('[DELETE /api/usuarios/[id]]', error)
    const { message, status } = handlePrismaError(error)
    return NextResponse.json({ error: message }, { status })
  }
}