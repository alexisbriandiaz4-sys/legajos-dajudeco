/**
 * Script para crear el usuario administrador inicial.
 * Uso: node scripts/crear-admin.js
 *
 * Las credenciales se leen de variables de entorno:
 *   ADMIN_USUARIO=admin
 *   ADMIN_PASSWORD=tu_password_seguro
 *   ADMIN_NOMBRE=Administrador
 */
const { PrismaClient } = require('../lib/generated/prisma')
const bcrypt = require('bcryptjs')
const prisma = new PrismaClient()

async function main() {
  const adminUsuario = process.env.ADMIN_USUARIO
  const adminPassword = process.env.ADMIN_PASSWORD
  const adminNombre   = process.env.ADMIN_NOMBRE ?? 'Administrador'

  if (!adminUsuario || !adminPassword) {
    console.error('❌ Error: Se requieren las variables de entorno ADMIN_USUARIO y ADMIN_PASSWORD')
    console.error('   Ejemplo: ADMIN_USUARIO=admin ADMIN_PASSWORD=mipassword node scripts/crear-admin.js')
    process.exit(1)
  }

  if (adminPassword.length < 8) {
    console.error('❌ Error: La contraseña debe tener al menos 8 caracteres')
    process.exit(1)
  }

  const password = await bcrypt.hash(adminPassword, 12)
  const usuario = await prisma.usuario.upsert({
    where:  { usuario: adminUsuario },
    update: { password, nombre: adminNombre },
    create: { nombre: adminNombre, usuario: adminUsuario, password, rol: 'admin' },
  })

  console.log('✓ Usuario admin creado/actualizado:', usuario.usuario)
  console.log('  Nombre:', usuario.nombre)
  console.log('  (Guardá la contraseña en un lugar seguro)')
}

main().catch(console.error).finally(() => prisma.$disconnect())