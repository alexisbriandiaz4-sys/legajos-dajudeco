"use client";

import { useState } from "react";
import { useAuth } from "@/lib/auth-context";
import { useTheme } from "@/lib/theme-context";
import { LogOut, FolderOpen, FileText, Bell, User, Sun, Moon, Monitor, Settings } from "lucide-react";
import ModuloLegajos from "@/components/ModuloLegajos";
import ModuloOficios from "@/components/ModuloOficios";
import ModuloConfiguracion from "@/components/ModuloConfiguracion";


type Vista = 'legajos' | 'oficios' | 'alertas' | 'configuracion';

export default function Home() {
  const { usuario, cargando, logout } = useAuth();
  const { tema, setTema } = useTheme();
  const [vista, setVista] = useState<Vista>('legajos');

  if (cargando) {
    return (
      <div style={{ background: 'var(--bg-primary)' }} className="flex items-center justify-center h-screen">
        <p style={{ color: 'var(--text-secondary)' }}>Cargando...</p>
      </div>
    );
  }

  const navegacion = [
  { id: 'legajos', label: 'Legajos', icono: FolderOpen },
  { id: 'oficios', label: 'Oficios', icono: FileText },
  { id: 'alertas', label: 'Alertas', icono: Bell },
  { id: 'configuracion', label: 'Configuración', icono: Settings },
];

  const temas = [
    { id: 'dark-blue', label: 'Azul oscuro', icono: Monitor },
    { id: 'dark', label: 'Oscuro', icono: Moon },
    { id: 'light', label: 'Claro', icono: Sun },
  ];

  return (
    <div style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }} className="flex h-screen">
      <aside style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border)' }} className="w-16 md:w-56 border-r flex flex-col">
        
        {/* Logo */}
        <div style={{ borderColor: 'var(--border)' }} className="p-4 border-b">
          <h1 style={{ color: 'var(--text-primary)' }} className="hidden md:block text-sm font-bold">Sistema de Legajos</h1>
          <p style={{ color: 'var(--text-muted)' }} className="hidden md:block text-xs mt-0.5">Delitos Complejos</p>
          <span className="md:hidden text-xl">🔍</span>
        </div>

        {/* Navegación */}
        <nav className="flex-1 p-2 space-y-1">
          {navegacion.map(({ id, label, icono: Icono }) => (
            <button
              key={id}
              onClick={() => setVista(id as Vista)}
              style={{
                background: vista === id ? 'var(--accent)' : 'transparent',
                color: vista === id ? '#fff' : 'var(--text-secondary)',
              }}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors hover:opacity-90"
            >
              <Icono size={18} />
              <span className="hidden md:block">{label}</span>
            </button>
          ))}
        </nav>

        {/* Selector de tema */}
        <div style={{ borderColor: 'var(--border)' }} className="p-2 border-t">
          <p style={{ color: 'var(--text-muted)' }} className="hidden md:block text-xs px-2 mb-1">Tema</p>
          <div className="flex flex-col gap-1">
            {temas.map(({ id, label, icono: Icono }) => (
              <button
                key={id}
                onClick={() => setTema(id as any)}
                style={{
                  background: tema === id ? 'var(--bg-tertiary)' : 'transparent',
                  color: tema === id ? 'var(--text-primary)' : 'var(--text-muted)',
                  borderColor: tema === id ? 'var(--accent)' : 'transparent',
                }}
                className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs transition border"
              >
                <Icono size={13} />
                <span className="hidden md:block">{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Usuario y logout */}
        <div style={{ borderColor: 'var(--border)' }} className="p-3 border-t space-y-2">
          <div className="hidden md:flex items-center gap-2 px-2 py-1">
            <User size={14} style={{ color: 'var(--text-muted)' }} className="shrink-0" />
            <div className="min-w-0">
              <p style={{ color: 'var(--text-primary)' }} className="text-xs font-medium truncate">{usuario?.nombre}</p>
              <p style={{ color: 'var(--text-muted)' }} className="text-xs capitalize">{usuario?.rol}</p>
            </div>
          </div>
          <button
            onClick={logout}
            style={{ color: 'var(--text-muted)' }}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm hover:opacity-80 transition"
          >
            <LogOut size={16} />
            <span className="hidden md:block">Cerrar sesión</span>
          </button>
        </div>
      </aside>

      {/* Contenido principal */}
      <main className="flex-1 overflow-auto p-6">
        {vista === 'legajos' && <ModuloLegajos />}
        {vista === 'oficios' && <ModuloOficios />}
        {vista === 'alertas' && <p style={{ color: 'var(--text-secondary)' }}>Módulo Alertas — próximamente</p>}
{vista === 'configuracion' && <ModuloConfiguracion />}
      </main>
    </div>
  );
}
