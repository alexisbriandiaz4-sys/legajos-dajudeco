const { PrismaClient } = require('../lib/generated/prisma')
const bcrypt = require('bcryptjs')
const prisma = new PrismaClient()

async function main() {
  const password = await bcrypt.hash('admin123', 10)
  const usuario = await prisma.usuario.upsert({
    where: { usuario: 'admin' },
    update: {},
    create: {
      nombre: 'Administrador',
      usuario: 'admin',
      password,
      rol: 'admin',
    }
  })
  console.log('✓ Usuario admin creado:', usuario.usuario)
  console.log('  Contraseña: admin123')
  console.log('  (Cambiala después)')
}

main().catch(console.error).finally(() => prisma.$disconnect())