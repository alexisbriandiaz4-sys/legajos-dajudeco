const fs = require('fs');
const path = require('path');

const code = fs.readFileSync('./components/ModuloBaseGeneral.tsx', 'utf8');
const sections = code.split(/\/\/\s+───\s+(.*?)\s+──+/g);

const typesCode = "import { useState, useEffect } from 'react';\n" +
  "import { fetchConCache, TTL } from '@/lib/cache';\n\n" +
  sections[2].trim() + "\n" + sections[4].trim() + "\n" +
  "export type { UsuarioSimple, RegistroTelefonia, RegistroEstafa, RegistroGeneral, Pestana };\n" +
  "export { LIMIT, DATOS_INICIALES, formatFecha, useUsuarios };\n";

const typesCodeFinal = typesCode
  .replace(/interface /g, 'export interface ')
  .replace(/type Pestana/g, 'export type Pestana')
  .replace(/const LIMIT/g, 'export const LIMIT')
  .replace(/const DATOS_INICIALES/g, 'export const DATOS_INICIALES')
  .replace(/const formatFecha/g, 'export const formatFecha')
  .replace(/function useUsuarios/g, 'export function useUsuarios');

const sharedCode = '"use client";\n' +
  "import { ChevronLeft, ChevronRight, Eye, Trash2, X } from 'lucide-react';\n" +
  "import { DATOS_INICIALES, UsuarioSimple, RegistroTelefonia, RegistroEstafa, formatFecha } from './types';\n\n" +
  sections[14].replace(/function /g, 'export function ');

const formsCode = '"use client";\n' +
  "import { useState } from 'react';\n" +
  "import { X } from 'lucide-react';\n" +
  "import { toast } from 'sonner';\n" +
  "import { UsuarioSimple } from './types';\n" +
  "import { SelectorUsuario } from './SharedComponents';\n\n" +
  sections[16].replace(/function /g, 'export function ');

const telefoniaCode = '"use client";\n' +
  "import { useState, useEffect, useCallback } from 'react';\n" +
  "import { Search, Upload, Plus, X } from 'lucide-react';\n" +
  "import { toast } from 'sonner';\n" +
  "import * as XLSX from 'xlsx';\n" +
  "import { cache } from '@/lib/cache';\n" +
  "import { LIMIT, DATOS_INICIALES, formatFecha, useUsuarios, RegistroTelefonia } from './types';\n" +
  "import { TablaConPaginacion, ModalEliminar, ModalDetalleTelefonia } from './SharedComponents';\n" +
  "import { FormularioTelefonia } from './Formularios';\n\n" +
  sections[8].replace(/function TabTelefonia/, 'export default function TabTelefonia');

const estafasCode = '"use client";\n' +
  "import { useState, useEffect, useCallback } from 'react';\n" +
  "import { Search, Upload, Plus, X } from 'lucide-react';\n" +
  "import { toast } from 'sonner';\n" +
  "import * as XLSX from 'xlsx';\n" +
  "import { cache } from '@/lib/cache';\n" +
  "import { LIMIT, DATOS_INICIALES, formatFecha, useUsuarios, RegistroEstafa } from './types';\n" +
  "import { TablaConPaginacion, ModalEliminar, ModalDetalleEstafa } from './SharedComponents';\n" +
  "import { FormularioEstafa } from './Formularios';\n\n" +
  sections[10].replace(/function TabEstafas/, 'export default function TabEstafas');

const generalCode = '"use client";\n' +
  "import { useState, useEffect, useCallback } from 'react';\n" +
  "import { Search, X, Eye } from 'lucide-react';\n" +
  "import { toast } from 'sonner';\n" +
  "import { LIMIT, RegistroGeneral, RegistroTelefonia, RegistroEstafa, formatFecha, useUsuarios } from './types';\n" +
  "import { ChevronLeft, ChevronRight } from 'lucide-react';\n" +
  "import { ModalDetalleTelefonia, ModalDetalleEstafa } from './SharedComponents';\n\n" +
  sections[12].replace(/function TabGeneral/, 'export default function TabGeneral');

const mainCode = '"use client";\n' +
  "import { useState } from 'react';\n" +
  "import { Phone, AlertTriangle, Database } from 'lucide-react';\n" +
  "import { useAuth } from '@/lib/auth-context';\n" +
  "import { Pestana } from './vistas/types';\n" +
  "import dynamic from 'next/dynamic';\n\n" +
  "const TabTelefonia = dynamic(() => import('./vistas/TabTelefonia'), { ssr: false, loading: () => <div className=\"p-4 text-gray-500\">Cargando telefonía...</div> });\n" +
  "const TabEstafas = dynamic(() => import('./vistas/TabEstafas'), { ssr: false, loading: () => <div className=\"p-4 text-gray-500\">Cargando estafas...</div> });\n" +
  "const TabGeneral = dynamic(() => import('./vistas/TabGeneral'), { ssr: false, loading: () => <div className=\"p-4 text-gray-500\">Cargando general...</div> });\n\n" +
  sections[6].replace(/export default function ModuloBaseGeneral/, 'export default function ModuloBaseGeneral');

fs.writeFileSync('./components/vistas/types.ts', typesCodeFinal);
fs.writeFileSync('./components/vistas/SharedComponents.tsx', sharedCode);
fs.writeFileSync('./components/vistas/Formularios.tsx', formsCode);
fs.writeFileSync('./components/vistas/TabTelefonia.tsx', telefoniaCode);
fs.writeFileSync('./components/vistas/TabEstafas.tsx', estafasCode);
fs.writeFileSync('./components/vistas/TabGeneral.tsx', generalCode);
fs.writeFileSync('./components/ModuloBaseGeneral.tsx', mainCode);

console.log('Successfully refactored ModuloBaseGeneral');
