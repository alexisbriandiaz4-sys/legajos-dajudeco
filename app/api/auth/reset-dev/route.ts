import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import bcrypt from 'bcryptjs'

// Endpoint de un solo uso para resetear la contraseña del admin en producción.
// GET /api/auth/reset-dev
export async function GET() {
  try {
    const password = await bcrypt.hash('admin', 12)
    
    // Forzamos la actualización o creación del usuario admin con 5 caracteres
    const usuario = await prisma.usuario.upsert({
      where:  { usuario: 'admin' },
      update: { password, rol: 'admin', activo: true },
      create: { 
        nombre: 'Administrador', 
        usuario: 'admin', 
        password, 
        rol: 'admin',
        activo: true
      },
    })

    return NextResponse.json({ 
      success: true, 
      mensaje: 'Contraseña del admin reseteada correctamente a: admin',
      usuario: usuario.usuario
    })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
