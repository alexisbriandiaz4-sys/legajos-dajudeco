import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { getUsuarioId } from '@/lib/server-auth'
import { handlePrismaError } from '@/lib/validators'
import { z } from 'zod'

const DispositivoSchema = z.object({
  tipo: z.string().min(1, 'Tipo requerido'),
  marca: z.string().optional().nullable(),
  modelo: z.string().optional().nullable(),
  imei: z.string().optional().nullable(),
  color: z.string().optional().nullable(),
  numeroLinea: z.string().optional().nullable(),
  legajoId: z.string().min(1, 'LegajoId requerido'),
})

export async function POST(request: Request) {
  try {
    const usuarioId = await getUsuarioId()
    if (!usuarioId) return NextResponse.json({ error: 'No autenticado' }, { status: 401 })

    const body = await request.json()
    const parsed = DispositivoSchema.safeParse(body)
    if (!parsed.success) return NextResponse.json({ error: parsed.error.issues[0].message }, { status: 400 })

    const legajo = await prisma.legajo.findFirst({ where: { id: parsed.data.legajoId, usuarioId } })
    if (!legajo) return NextResponse.json({ error: 'Legajo no encontrado' }, { status: 404 })

    const dispositivo = await prisma.dispositivo.create({ data: parsed.data })
    return NextResponse.json(dispositivo)
  } catch (error) {
    console.error(error)
    const { message, status } = handlePrismaError(error)
    return NextResponse.json({ error: message }, { status })
  }
}