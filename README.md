# 🔍 Sistema de Gestión de Legajos — DAJUDECO
### Departamento de Delitos Complejos — Fiscalía de Rafaela, Santa Fe

Sistema web para la gestión digital de expedientes judiciales, control de oficios a compañías telefónicas, alertas de vencimiento y base de datos histórica de telefonía y estafas.

---

## 📋 Índice

1. [¿Qué hace esta app?](#qué-hace-esta-app)
2. [Stack tecnológico](#stack-tecnológico)
3. [Requisitos previos](#requisitos-previos)
4. [Instalación desde cero](#instalación-desde-cero)
5. [Variables de entorno](#variables-de-entorno)
6. [Base de datos](#base-de-datos)
7. [Crear usuario administrador](#crear-usuario-administrador)
8. [Estructura del proyecto](#estructura-del-proyecto)
9. [Módulos y funcionalidades](#módulos-y-funcionalidades)
10. [APIs disponibles](#apis-disponibles)
11. [Importación de Excel](#importación-de-excel)
12. [Generación de documentos](#generación-de-documentos)
13. [Sistema de temas](#sistema-de-temas)
14. [Deploy a producción](#deploy-a-producción)
15. [Seguridad](#seguridad)
16. [Solución de problemas frecuentes](#solución-de-problemas-frecuentes)
17. [Contacto y mantenimiento](#contacto-y-mantenimiento)

---

## ¿Qué hace esta app?

El sistema digitaliza y centraliza el trabajo que anteriormente se realizaba en papel y archivos Excel dispersos. Permite a investigadores, fiscales y personal de fiscalía:

- **Gestionar legajos** de investigaciones criminales con toda su información asociada
- **Controlar oficios** enviados a compañías telefónicas (Claro, Movistar, Personal, etc.)
- **Recibir alertas automáticas** cuando un oficio está por vencer
- **Consultar bases históricas** de telefonía y estafas para cruzar datos entre investigaciones
- **Generar documentos oficiales** en Word y PDF listos para imprimir o enviar
- **Administrar usuarios** con diferentes niveles de acceso

---

## Stack tecnológico

| Tecnología | Versión | Uso |
|---|---|---|
| Next.js | 16.1.6 | Framework full-stack (frontend + backend) |
| React | 19.2.3 | Biblioteca de UI |
| TypeScript | 5.x | Tipado estático |
| Tailwind CSS | 4.x | Estilos |
| Prisma ORM | 5.22.0 | Capa de base de datos |
| PostgreSQL | - | Base de datos principal (Neon) |
| JWT | 9.0.3 | Autenticación |
| bcryptjs | 3.0.3 | Hash de contraseñas |
| Zod | 4.3.6 | Validación de datos |
| Sonner | 2.0.7 | Notificaciones toast |
| Lucide React | 0.577.0 | Iconos |
| docx | 9.6.0 | Generación de documentos Word |
| jsPDF | 4.2.0 | Generación de PDFs |
| xlsx | 0.18.5 | Importación/exportación de Excel |

---

## Requisitos previos

Antes de instalar, necesitás tener instalado en tu computadora:

- **Node.js** v18 o superior → [descargar](https://nodejs.org)
- **npm** v9 o superior (viene con Node.js)
- **Git** → [descargar](https://git-scm.com)
- Una cuenta en **Neon** (base de datos PostgreSQL gratuita) → [neon.tech](https://neon.tech)
- **VS Code** (recomendado) → [descargar](https://code.visualstudio.com)

Verificar instalaciones:
```bash
node --version    # debe mostrar v18.x.x o superior
npm --version     # debe mostrar 9.x.x o superior
git --version     # debe mostrar git version x.x.x
```

---

## Instalación desde cero

### 1. Clonar el repositorio

```bash
git clone https://github.com/alexisbriandiaz4-sys/legajos-dajudeco.git
cd legajos-dajudeco
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Crear el archivo `.env.local` en la raíz del proyecto (ver sección [Variables de entorno](#variables-de-entorno)).

### 4. Configurar base de datos

```bash
npx prisma migrate dev --name init
```

### 5. Crear usuario administrador

```bash
node scripts/crear-admin.js
```

### 6. Iniciar el servidor de desarrollo

```bash
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

**Credenciales iniciales:**
- Usuario: `admin`
- Contraseña: `admin123`

> ⚠️ **Importante:** Cambiar la contraseña del admin inmediatamente después del primer login.

---

## Variables de entorno

Crear un archivo `.env.local` en la raíz del proyecto con el siguiente contenido:

```env
# Base de datos PostgreSQL (Neon)
DATABASE_URL="postgresql://usuario:password@host/database?sslmode=require"

# Secreto para JWT — usar una cadena larga y aleatoria
JWT_SECRET="tu-secreto-super-largo-y-aleatorio-aqui-minimo-32-caracteres"

# Entorno
NODE_ENV="development"
```

También crear un archivo `.env` en la raíz (Prisma lo lee para migraciones):

```env
DATABASE_URL="postgresql://usuario:password@host/database?sslmode=require"
```

### Cómo obtener la DATABASE_URL de Neon

1. Ir a [neon.tech](https://neon.tech) y crear una cuenta
2. Crear un nuevo proyecto
3. En el dashboard, ir a **Connection Details**
4. Copiar la **Connection string** con pooling habilitado
5. Agregar `&channel_binding=require` al final si lo pide

### Cómo generar un JWT_SECRET seguro

En la terminal de Node.js:
```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

---

## Base de datos

### Modelos principales

| Modelo | Descripción | Relaciones |
|---|---|---|
| `Usuario` | Usuarios del sistema | Tiene muchos Legajos y Fiscales |
| `Legajo` | Expediente principal | Tiene Víctimas, Dispositivos, Oficios |
| `Victima` | Víctimas del caso | Pertenece a Legajo (cascade delete) |
| `Dispositivo` | Celulares/dispositivos | Pertenece a Legajo (cascade delete) |
| `Oficio` | Documentos oficiales | Tiene Respuestas |
| `Respuesta` | Respuestas de oficios | Pertenece a Oficio (cascade delete) |
| `Fiscal` | Fiscales asignados | Pertenece a Usuario |
| `Configuracion` | Configuración global | Singleton (id = "global") |
| `RegistroTelefonia` | Base histórica telefonía | Independiente |
| `RegistroEstafa` | Base histórica estafas | Independiente |

### Comandos útiles de base de datos

```bash
# Crear nueva migración después de cambiar el schema
npx prisma migrate dev --name nombre_descripcion

# Regenerar el cliente de Prisma
npx prisma generate

# Ver la base de datos en interfaz visual
npx prisma studio

# Resetear toda la base de datos (⚠️ borra todos los datos)
npx prisma migrate reset
```

### Migraciones en producción

```bash
npx prisma migrate deploy
```

---

## Crear usuario administrador

El script `scripts/crear-admin.js` crea el usuario admin con contraseña hasheada:

```bash
node scripts/crear-admin.js
```

Esto crea:
- **Usuario:** `admin`
- **Contraseña:** `admin123`
- **Rol:** `admin`

Para crear usuarios adicionales, usar el panel de **Configuración → Usuarios** dentro de la app.

### Roles disponibles

| Rol | Permisos |
|---|---|
| `admin` | Acceso completo, gestión de usuarios |
| `investigador` | Acceso a legajos, oficios y base general |

---

## Estructura del proyecto

```
legajos-dajudeco/
│
├── app/                          # Next.js App Router
│   ├── api/                      # Backend — API Routes
│   │   ├── auth/                 # Autenticación (login, logout, me)
│   │   ├── legajos/              # CRUD de legajos
│   │   │   └── [id]/             # Operaciones por ID
│   │   ├── oficios/              # CRUD de oficios
│   │   │   └── [id]/             # Operaciones por ID
│   │   ├── victimas/             # CRUD de víctimas
│   │   │   └── [id]/             # DELETE por ID
│   │   ├── dispositivos/         # CRUD de dispositivos
│   │   │   └── [id]/             # DELETE por ID
│   │   ├── fiscales/             # CRUD de fiscales
│   │   │   └── [id]/             # Operaciones por ID
│   │   ├── usuarios/             # CRUD de usuarios
│   │   │   └── [id]/             # Operaciones por ID
│   │   ├── configuracion/        # Configuración global
│   │   ├── telefonia/            # Base histórica telefonía
│   │   │   ├── [id]/             # Operaciones por ID
│   │   │   └── importar/         # Importación masiva Excel
│   │   └── estafas/              # Base histórica estafas
│   │       ├── [id]/             # Operaciones por ID
│   │       └── importar/         # Importación masiva Excel
│   ├── login/                    # Página de login
│   ├── layout.tsx                # Layout principal
│   ├── page.tsx                  # Página principal (app)
│   └── globals.css               # Variables CSS y estilos globales
│
├── components/                   # Componentes React
│   ├── ModuloLegajos.tsx         # Gestión de legajos (~28KB)
│   ├── ModuloOficios.tsx         # Gestión de oficios (~17KB)
│   ├── ModuloAlertas.tsx         # Sistema de alertas (~11KB)
│   ├── ModuloBaseGeneral.tsx     # Base telefonía + estafas (~48KB)
│   ├── ModuloConfiguracion.tsx   # Panel de administración (~38KB)
│   ├── FormularioLegajo.tsx      # Formulario de legajo (~16KB)
│   └── FormularioOficio.tsx      # Formulario de oficio
│
├── lib/                          # Utilidades
│   ├── db.ts                     # Singleton de Prisma Client
│   ├── auth-context.tsx          # Context de autenticación
│   ├── theme-context.tsx         # Context de temas
│   ├── server-auth.ts            # Funciones de auth server-side
│   └── validators.ts             # Schemas Zod + handlePrismaError
│
├── prisma/                       # Base de datos
│   ├── schema.prisma             # Schema de modelos
│   └── migrations/               # Historial de migraciones
│
├── scripts/                      # Scripts de utilidad
│   └── crear-admin.js            # Crear usuario administrador
│
├── proxy.ts                      # Middleware de autenticación (Next.js 16)
├── .env                          # Variables para Prisma (no commitear)
├── .env.local                    # Variables para Next.js (no commitear)
├── .gitignore                    # Archivos ignorados por Git
├── next.config.ts                # Configuración de Next.js
├── tailwind.config.ts            # Configuración de Tailwind
├── tsconfig.json                 # Configuración de TypeScript
└── package.json                  # Dependencias del proyecto
```

---

## Módulos y funcionalidades

### 📁 Módulo de Legajos

Gestión completa de expedientes judiciales.

**Funcionalidades:**
- Listado paginado (20 por página) con búsqueda en tiempo real
- Búsqueda por número, carátula, delito, fiscal, CUIJ, víctima
- Filtros por estado y rango de fechas
- Crear, editar y eliminar legajos
- Cambio de estado rápido: Activo / En seguimiento / Cerrado / Inactivo
- Gestión de víctimas asociadas al legajo
- Gestión de dispositivos (celulares) asociados

**Campos del legajo:**
- Número de legajo (único por usuario)
- Carátula, CUIJ, delito
- Fecha del hecho
- Fiscal asignado, email de respuesta
- Estado, observaciones

---

### 📄 Módulo de Oficios

Gestión de comunicaciones oficiales con compañías telefónicas.

**Funcionalidades:**
- Crear oficios para: Claro, Movistar, Personal, Telecom y otras
- Tipos de consulta: IMEI (rastreo de equipo) y Línea (número telefónico)
- Niveles de urgencia: 48 horas, 72 horas, 5 días, 10 días
- Estados: Pendiente → Enviado → Respondido / Vencido
- Registro de fecha de envío y fecha de respuesta
- Almacenamiento de respuestas recibidas
- Generación automática de documentos Word y PDF

---

### 🔔 Módulo de Alertas

Sistema de notificaciones por vencimiento de oficios.

**Funcionalidades:**
- Monitoreo automático de oficios en estado "Enviado"
- Cálculo de urgencia basado en días transcurridos desde el envío
- Niveles de alerta configurables:
  - **Media:** X días sin respuesta
  - **Alta:** Y días sin respuesta
  - **Crítica:** Z días sin respuesta
- Filtros por nivel de urgencia y operadora
- Los umbrales se configuran en Configuración → Sistema

---

### 🗃️ Base General (Telefonía + Estafas)

Repositorio histórico de casos para cruzar datos en investigaciones.

**Tres pestañas:**

#### 📱 Telefonía
- Base de datos histórica de casos de robo/hurto de dispositivos
- Importación masiva desde Excel (.xlsx)
- Más de 3.500 registros históricos desde 2017
- Búsqueda por víctima, IMEI, causa, N° legajo
- Filtros por año (2015-2026), causa y rango de fechas

#### ⚠️ Estafas
- Base de datos histórica de estafas y fraudes
- Importación masiva desde Excel (.xlsx)
- Más de 4.900 registros históricos
- Búsqueda por víctima, CBU, ardid, legajo, IMEI
- Ordenados por fecha de ingreso (campo "Recibido") descendente

#### 🔍 General (Unificado)
- Muestra ambas bases unificadas en una sola tabla
- Ordenado por fecha del hecho descendente
- Búsqueda simultánea en telefonía y estafas
- Identificación visual por tipo (📱 Tel. / ⚠️ Estafa)

---

### ⚙️ Módulo de Configuración

Panel de administración del sistema.

**Secciones:**
- **Usuarios:** Crear, editar, activar/desactivar usuarios
- **Fiscales:** Gestión del padrón de fiscales
- **Sistema:** Email de respuesta por defecto, umbrales de alertas

---

## APIs disponibles

### Autenticación

| Método | Endpoint | Descripción |
|---|---|---|
| POST | `/api/auth/login` | Login con usuario y contraseña |
| POST | `/api/auth/logout` | Cerrar sesión |
| GET | `/api/auth/me` | Obtener usuario autenticado |

### Legajos

| Método | Endpoint | Descripción |
|---|---|---|
| GET | `/api/legajos` | Listar legajos (paginado, filtros) |
| POST | `/api/legajos` | Crear legajo |
| PUT | `/api/legajos/[id]` | Actualizar legajo |
| DELETE | `/api/legajos/[id]` | Eliminar legajo |

**Parámetros de GET /api/legajos:**
```
?page=1&limit=20&q=busqueda&estado=Activo&desde=2024-01-01&hasta=2024-12-31
```

### Oficios

| Método | Endpoint | Descripción |
|---|---|---|
| GET | `/api/oficios` | Listar oficios (paginado, filtros) |
| POST | `/api/oficios` | Crear oficio |
| PUT | `/api/oficios/[id]` | Actualizar oficio completo |
| PATCH | `/api/oficios/[id]` | Actualizar oficio parcial |
| DELETE | `/api/oficios/[id]` | Eliminar oficio |

### Víctimas y Dispositivos

| Método | Endpoint | Descripción |
|---|---|---|
| POST | `/api/victimas` | Crear víctima |
| DELETE | `/api/victimas/[id]` | Eliminar víctima |
| POST | `/api/dispositivos` | Crear dispositivo |
| DELETE | `/api/dispositivos/[id]` | Eliminar dispositivo |

### Fiscales

| Método | Endpoint | Descripción |
|---|---|---|
| GET | `/api/fiscales` | Listar fiscales |
| POST | `/api/fiscales` | Crear fiscal |
| PUT | `/api/fiscales/[id]` | Actualizar fiscal |
| DELETE | `/api/fiscales/[id]` | Eliminar fiscal |

### Usuarios

| Método | Endpoint | Descripción |
|---|---|---|
| GET | `/api/usuarios` | Listar usuarios |
| POST | `/api/usuarios` | Crear usuario |
| PUT | `/api/usuarios/[id]` | Actualizar usuario |
| DELETE | `/api/usuarios/[id]` | Eliminar usuario |

### Telefonía y Estafas

| Método | Endpoint | Descripción |
|---|---|---|
| GET | `/api/telefonia` | Listar registros de telefonía |
| POST | `/api/telefonia` | Crear registro manual |
| DELETE | `/api/telefonia/[id]` | Eliminar registro |
| POST | `/api/telefonia/importar` | Importar Excel masivo |
| GET | `/api/estafas` | Listar registros de estafas |
| POST | `/api/estafas` | Crear registro manual |
| DELETE | `/api/estafas/[id]` | Eliminar registro |
| POST | `/api/estafas/importar` | Importar Excel masivo |

---

## Importación de Excel

### Base de Telefonía

**Archivo esperado:** `Base de datos telefonia.xlsx`
**Hoja:** `TODOS TELEFONIA` (primera hoja)

| Columna | Campo | Tipo |
|---|---|---|
| A (0) | Año | Número |
| B (1) | N° Legajo | Texto |
| C (2) | N° Interno | Número |
| D (3) | CUIJ | Texto |
| E (4) | Fecha Hecho | Fecha |
| F (5) | Fecha Ingreso | Fecha |
| G (6) | Lugar del Hecho | Texto |
| H (7) | Barrio | Texto |
| I (8) | Víctima | Texto |
| J (9) | Causa | Texto |
| K (10) | Aparato | Texto |
| L (11) | Empresa | Texto |
| M (12) | Abonado | Texto |
| N (13) | IMEI | Número → se convierte a texto |
| O (14) | Color | Texto |
| P (15) | Correo | Texto |
| Q (16) | Clave | Texto |
| R (17) | Fiscal | Texto |
| ... | ... | ... |

> ⚠️ **Fila 1:** Encabezados — se salta automáticamente
> ⚠️ **Fila 2:** Datos de prueba/basura — se salta automáticamente
> ✅ **Desde fila 3:** Datos reales

### Base de Estafas

**Archivo esperado:** `ESTAFAS_Y_OTROS.xlsx`
**Hoja:** `COMPLEJA` (primera hoja)

| Columna | Campo | Tipo |
|---|---|---|
| A (0) | N° Interno | Número |
| C (2) | CUIJ | Texto |
| D (3) | Fecha Hecho | Fecha |
| E (4) | Fecha Denuncia | Fecha |
| F (5) | Dependencia | Texto |
| G (6) | N° Legajo | Texto |
| H (7) | Recibido | Fecha |
| I (8) | Víctima | Texto |
| J (9) | Teléfono Víctima | Texto |
| K (10) | Carátula | Texto |
| L (11) | Fiscal | Texto |
| M (12) | Ardid | Texto |
| N (13) | Seudónimo | Texto |
| O (14) | Teléfono Referencia | Texto |
| P (15) | Nombre Referencia | Texto |
| Q (16) | IMEI | Texto |
| R (17) | Otros Teléfonos/IMEI | Texto |
| S (18) | CBU/Cuenta | Texto |
| T (19) | Titulares | Texto |
| U (20) | Otros CBU | Texto |
| V (21) | Estado Legajo | Texto |
| W (22) | Complementos | Texto |

> ⚠️ **Fila 1:** Encabezados — se salta automáticamente
> ✅ **Desde fila 2:** Datos reales

> ⚠️ **Nota sobre fechas corruptas:** Algunas celdas del Excel tienen fechas con valores numéricos inválidos (ej: año 20231). El sistema las descarta automáticamente y guarda `null` en esos campos.

> ⚠️ **Nota sobre reimportación:** Cada vez que se importa un Excel, se borran TODOS los registros anteriores de esa base y se reemplazan con los nuevos. No genera duplicados.

---

## Generación de documentos

El sistema puede generar documentos oficiales en dos formatos:

### Word (.docx)
- Generado con la librería `docx`
- Incluye encabezado oficial, datos del oficio, datos del legajo
- Se descarga automáticamente al hacer click en el botón correspondiente

### PDF (.pdf)
- Generado con `jsPDF`
- Mismo contenido que el Word
- Útil para envío por email o impresión directa

---

## Sistema de temas

La app incluye 3 temas visuales seleccionables desde el sidebar:

| Tema | Descripción | Colores |
|---|---|---|
| **Azul oscuro** (default) | Tema principal profesional | Fondo: `#0f172a`, Acento: `#3b82f6` |
| **Oscuro** | Modo oscuro clásico | Fondo: `#09090b`, Acento: `#3b82f6` |
| **Claro** | Modo claro | Fondo: `#f8fafc`, Acento: `#2563eb` |

Las variables CSS se definen en `app/globals.css` y se aplican globalmente.

---

## Deploy a producción

### Opción recomendada: Vercel + Neon

#### 1. Preparar el repositorio
```bash
# Asegurarse que .gitignore incluye:
# .env
# .env.local
# prisma/dev.db
# .next
# node_modules
```

#### 2. Deploy en Vercel
1. Ir a [vercel.com](https://vercel.com) y crear cuenta
2. Importar el repositorio de GitHub
3. En **Environment Variables**, agregar:
   - `DATABASE_URL` → la URL de Neon con pooling
   - `JWT_SECRET` → el secreto generado
4. Click en **Deploy**

#### 3. Correr migraciones en producción
```bash
npx prisma migrate deploy
```

O configurar en Vercel el comando de build:
```
prisma migrate deploy && next build
```

#### 4. Crear usuario admin en producción
Conectarse a la base de datos de producción y correr el script, o usar Prisma Studio:
```bash
DATABASE_URL="url-de-produccion" node scripts/crear-admin.js
```

### Variables de entorno en producción

| Variable | Descripción | Ejemplo |
|---|---|---|
| `DATABASE_URL` | URL de PostgreSQL con pooling | `postgresql://...` |
| `JWT_SECRET` | Secreto para JWT (mín. 32 chars) | `abc123...xyz` |
| `NODE_ENV` | Entorno | `production` |

---

## Seguridad

### Medidas implementadas

- ✅ **Contraseñas hasheadas** con bcryptjs (salt rounds: 10)
- ✅ **JWT en cookies HTTP-only** — inaccesibles desde JavaScript
- ✅ **Rate limiting** — 10 intentos de login por IP cada 15 minutos
- ✅ **Validación con Zod** en todos los endpoints del backend
- ✅ **Autenticación en todas las APIs** — cada ruta verifica el token
- ✅ **Proxy de autenticación** — `proxy.ts` protege todas las rutas
- ✅ **Cascade delete** — eliminar un legajo elimina sus datos relacionados
- ✅ **Separación de roles** — admin e investigador

### Vulnerabilidades conocidas y estado

| Vulnerabilidad | Severidad | Estado |
|---|---|---|
| Rate limiting en memoria | Media | ⚠️ Pendiente — usar Redis en producción multi-instancia |
| Sin refresh tokens | Media | ⚠️ Pendiente — tokens duran 7 días |
| Sin 2FA | Media | ⚠️ Pendiente — mejora futura |
| Sin audit log | Media | ⚠️ Pendiente — mejora futura |
| Sin tests automatizados | Baja | ⚠️ Pendiente |

### Recomendaciones de seguridad operacional

1. **Cambiar la contraseña de admin** inmediatamente después de instalar
2. **No compartir el archivo `.env`** ni `.env.local` — nunca subirlos a Git
3. **Hacer el repositorio privado** en GitHub
4. **Hacer backups periódicos** de la base de datos en Neon
5. **Cambiar el JWT_SECRET** si se sospecha que fue comprometido (invalida todas las sesiones)

---

## Solución de problemas frecuentes

### ❌ Error: "Argument url is missing in data source block"

**Causa:** El `schema.prisma` no tiene la línea `url = env("DATABASE_URL")` o el `.env` no tiene la variable.

**Solución:**
```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

---

### ❌ Error: "The datasource property url is no longer supported"

**Causa:** Tenés Prisma 7 instalado. Este proyecto usa Prisma 5.

**Solución:**
```bash
npm uninstall prisma @prisma/client
npm install prisma@5 @prisma/client@5
```

---

### ❌ Error: "Foreign key constraint violated"

**Causa:** Intentás crear un registro que referencia un usuario que no existe en la base de datos nueva.

**Solución:** Crear el usuario admin primero:
```bash
node scripts/crear-admin.js
```

---

### ❌ Error al importar Excel: "Could not convert argument value"

**Causa:** El Excel tiene celdas con fechas corruptas (valores numéricos fuera de rango).

**Solución:** Ya está manejado automáticamente en el código. Si sigue fallando, verificar que el archivo `app/api/estafas/importar/route.ts` tenga la validación de rango en `parseDate()`.

---

### ❌ El IMEI se muestra como "3.53726E+14"

**Causa:** El Excel convierte números largos a notación científica. Necesitás `raw: true` en la lectura.

**Solución:** Verificar que en `handleImportar` del componente la lectura sea:
```typescript
XLSX.utils.sheet_to_json(ws, { header: 1, raw: true, defval: null })
```

---

### ❌ Error: "params is a Promise and must be unwrapped with await"

**Causa:** Next.js 16 cambió la forma de recibir params en rutas dinámicas.

**Solución:**
```typescript
// Correcto para Next.js 16:
export async function DELETE(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  // ...
}
```

---

### ❌ La app no carga después de cambios en el schema

**Solución:**
```bash
npx prisma generate
# Si persiste:
npx prisma migrate dev
# Si persiste:
rm -rf .next
npm run dev
```

---

### ❌ Warning: "Unknown env config msvs-version"

**Causa:** Configuración de npm en Windows. No afecta el funcionamiento.

**Solución:** Es solo un warning, no un error. Se puede ignorar.

---

## Contacto y mantenimiento

**Proyecto:** Sistema de Gestión de Legajos — DAJUDECO
**Organización:** Departamento de Delitos Complejos, Fiscalía de Rafaela, Santa Fe
**Repositorio:** [github.com/alexisbriandiaz4-sys/legajos-dajudeco](https://github.com/alexisbriandiaz4-sys/legajos-dajudeco)

### Tareas de mantenimiento periódico

| Frecuencia | Tarea |
|---|---|
| Semanal | Verificar alertas de oficios vencidos |
| Mensual | Actualizar base de telefonía y estafas con nuevos Excel |
| Mensual | Revisar usuarios activos e inactivos |
| Trimestral | Backup manual de la base de datos desde Neon |
| Según necesidad | Actualizar dependencias con `npm update` |

### Backups de base de datos

Desde el dashboard de Neon:
1. Ir a [console.neon.tech](https://console.neon.tech)
2. Seleccionar el proyecto
3. Ir a **Branches** → **main**
4. Click en **Restore** para ver opciones de backup

---

## Licencia

Este software es de uso interno exclusivo del Departamento de Delitos Complejos perteneciente a la Policía de Investigaciones Región V - Rafaela, Santa Fe, Argentina. Todos los derechos reservados.

---

*Última actualización: Marzo 2026*
