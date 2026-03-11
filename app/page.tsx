"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/lib/auth-context";
import { useTheme } from "@/lib/theme-context";
import {
  LogOut, FolderOpen, FileText, Bell, User, Sun, Moon,
  Monitor, Settings, Database, BarChart3, ChevronLeft, ChevronRight, Shield
} from "lucide-react";
import ModuloLegajos from "@/components/ModuloLegajos";
import ModuloOficios from "@/components/ModuloOficios";
import ModuloConfiguracion from "@/components/ModuloConfiguracion";
import ModuloAlertas from "@/components/ModuloAlertas";
import ModuloBaseGeneral from "@/components/ModuloBaseGeneral";
import ModuloEstadisticas from "@/components/ModuloEstadisticas";
import ModuloAuditoria from "@/components/ModuloAuditoria";
import { fetchConCache, cache, TTL } from "@/lib/cache";

type Vista = 'legajos' | 'oficios' | 'alertas' | 'configuracion' | 'telefonia' | 'estadisticas' | 'auditoria';

export default function Home() {
  const { usuario, cargando, logout } = useAuth();
  const { tema, setTema } = useTheme();
  const [vista, setVista] = useState<Vista>('legajos');
  const [novedades, setNovedades] = useState(0);
  const [sidebarAbierto, setSidebarAbierto] = useState(true);

  useEffect(() => {
    const guardado = localStorage.getItem('sidebar-abierto');
    if (guardado !== null) setSidebarAbierto(guardado === 'true');
  }, []);

  const toggleSidebar = () => {
    const nuevo = !sidebarAbierto;
    setSidebarAbierto(nuevo);
    localStorage.setItem('sidebar-abierto', String(nuevo));
  };

  useEffect(() => {
    if (!usuario || usuario.rol === 'admin') return;
    const cargarNovedades = async () => {
      try {
        const data = await fetchConCache<any>('/api/novedades', TTL.NOVEDADES);
        setNovedades(data.total ?? 0);
      } catch {}
    };
    cargarNovedades();
    const interval = setInterval(cargarNovedades, 60000);
    return () => clearInterval(interval);
  }, [usuario]);

  const handleNavegar = (id: Vista) => {
    setVista(id);
    if (id === 'telefonia') {
      setNovedades(0);
      cache.invalidar('/api/novedades');
    }
  };

  if (cargando) {
    return (
      <div style={{ background: 'var(--bg-primary)' }} className="flex items-center justify-center h-screen">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
          <p style={{ color: 'var(--text-secondary)' }} className="text-sm">Cargando sistema...</p>
        </div>
      </div>
    );
  }

  if (!usuario) {
    if (typeof window !== 'undefined') window.location.href = '/login';
    return null;
  }

  const navegacion: { id: Vista; label: string; icono: any; badge?: number }[] = [
    { id: 'legajos',       label: 'Legajos',       icono: FolderOpen },
    { id: 'oficios',       label: 'Oficios',        icono: FileText },
    { id: 'alertas',       label: 'Alertas',        icono: Bell },
    { id: 'telefonia',     label: 'Base General',   icono: Database, badge: novedades },
    { id: 'estadisticas',  label: 'Estadísticas',   icono: BarChart3 },
    { id: 'configuracion', label: 'Configuración',  icono: Settings },
    ...(usuario?.rol === 'admin' ? [{ id: 'auditoria' as Vista, label: 'Auditoría', icono: Shield }] : []),
  ];

  const temas = [
    { id: 'dark-blue', label: 'Azul oscuro', icono: Monitor },
    { id: 'dark',      label: 'Oscuro',      icono: Moon },
    { id: 'light',     label: 'Claro',       icono: Sun },
  ];

  return (
    <div style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }} className="flex h-screen overflow-hidden">

      <aside
        style={{
          background: 'var(--bg-secondary)',
          borderColor: 'var(--border)',
          width: sidebarAbierto ? '270px' : '72px',
          transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          flexShrink: 0,
        }}
        className="border-r flex flex-col overflow-hidden"
      >
       {/* Header / Logo */}
<div
  style={{ borderColor: 'var(--border)' }}
  className="border-b flex items-center justify-center relative"
>

  {/* Botón contraer */}
  <button
    onClick={toggleSidebar}
    className="absolute top-3 right-3 w-6 h-6 rounded-md flex items-center justify-center hover:opacity-80"
    style={{ background: 'var(--bg-tertiary)', color: 'var(--text-muted)' }}
  >
    {sidebarAbierto ? <ChevronLeft size={14} /> : <ChevronRight size={14} />}
  </button>

  <img
    src="/logo-texto.png"
    alt="SAP"
    className="object-contain transition-all duration-300"
    style={{
      width: sidebarAbierto ? '150px' : '40px',
      height: sidebarAbierto ? '120px' : '40px',
      padding: sidebarAbierto ? '10px' : '0'
    }}
  />

</div>

        {/* Nav */}
        <nav className="flex-1 p-2 space-y-0.5 overflow-hidden">
          {navegacion.map(({ id, label, icono: Icono, badge }) => {
            const activo = vista === id;
            return (
              <button key={id} onClick={() => handleNavegar(id)} title={!sidebarAbierto ? label : undefined}
                style={{ background: activo ? 'var(--accent)' : 'transparent', color: activo ? '#fff' : 'var(--text-secondary)', transition: 'background 0.15s, color 0.15s' }}
                className="w-full flex items-center gap-3 px-2.5 py-2.5 rounded-lg text-sm hover:opacity-90"
              >
                <div className="relative flex-shrink-0">
                  <Icono size={18} />
                  {/* Mostrar badge sobre ícono SOLO si el menú está contraído */}
                  {(badge ?? 0) > 0 && !sidebarAbierto && (
                    <span className="absolute -top-1.5 -right-1.5 min-w-[16px] h-4 px-1 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center">
                      {(badge ?? 0) > 99 ? '99+' : badge}
                    </span>
                  )}
                </div>
                <span style={{ opacity: sidebarAbierto ? 1 : 0, width: sidebarAbierto ? 'auto' : 0, overflow: 'hidden', whiteSpace: 'nowrap', transition: 'opacity 0.2s, width 0.3s', flex: 1, textAlign: 'left' as const }}>
                  {label}
                </span>
                {/* Mostrar badge al lado del texto SOLO si el menú está expandido */}
                {(badge ?? 0) > 0 && sidebarAbierto && (
                  <span className="ml-auto min-w-[20px] h-5 px-1.5 rounded-full bg-red-500 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                    {(badge ?? 0) > 99 ? '99+' : badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Temas */}
        <div style={{ borderColor: 'var(--border)' }} className="p-2 border-t">
          {sidebarAbierto && <p style={{ color: 'var(--text-muted)' }} className="text-[10px] px-2 mb-1 uppercase tracking-wider">Tema</p>}
          <div className="flex flex-col gap-0.5">
            {temas.map(({ id, label, icono: Icono }) => (
              <button key={id} onClick={() => setTema(id as any)} title={!sidebarAbierto ? label : undefined}
                style={{ background: tema === id ? 'var(--bg-tertiary)' : 'transparent', color: tema === id ? 'var(--text-primary)' : 'var(--text-muted)', borderColor: tema === id ? 'var(--accent)' : 'transparent', transition: 'background 0.15s, color 0.15s' }}
                className="w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs border"
              >
                <Icono size={13} className="flex-shrink-0" />
                <span style={{ opacity: sidebarAbierto ? 1 : 0, width: sidebarAbierto ? 'auto' : 0, overflow: 'hidden', whiteSpace: 'nowrap', transition: 'opacity 0.2s, width 0.3s' }}>{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Usuario */}
        <div style={{ borderColor: 'var(--border)' }} className="p-2 border-t">
          {sidebarAbierto && (
            <div className="flex items-center gap-2 px-2 py-1.5 mb-1 rounded-lg" style={{ background: 'var(--bg-tertiary)' }}>
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'var(--accent)' }}>
                <User size={12} className="text-white" />
              </div>
              <div className="min-w-0">
                <p style={{ color: 'var(--text-primary)' }} className="text-xs font-medium truncate">{usuario?.nombre}</p>
                <p style={{ color: 'var(--text-muted)' }} className="text-[10px] capitalize">{usuario?.rol}</p>
              </div>
            </div>
          )}
          <button onClick={logout} title={!sidebarAbierto ? 'Cerrar sesión' : undefined}
            style={{ color: 'var(--text-muted)', transition: 'color 0.15s' }}
            className="w-full flex items-center gap-3 px-2.5 py-2 rounded-lg text-sm hover:opacity-80"
          >
            <LogOut size={15} className="flex-shrink-0" />
            <span style={{ opacity: sidebarAbierto ? 1 : 0, width: sidebarAbierto ? 'auto' : 0, overflow: 'hidden', whiteSpace: 'nowrap', transition: 'opacity 0.2s, width 0.3s' }}>Cerrar sesión</span>
          </button>
        </div>
      </aside>

      {/* Contenido */}
      <main className="flex-1 overflow-auto flex flex-col">
        <div className="flex-1 overflow-auto p-6">
        <div key={vista} style={{ animation: 'fadeSlideIn 0.25s cubic-bezier(0.4, 0, 0.2, 1)' }}>
          {vista === 'legajos'       && <ModuloLegajos />}
          {vista === 'oficios'       && <ModuloOficios />}
          {vista === 'alertas'       && <ModuloAlertas />}
          {vista === 'telefonia'     && <ModuloBaseGeneral />}
          {vista === 'estadisticas'  && <ModuloEstadisticas />}
          {vista === 'configuracion' && <ModuloConfiguracion />}
          {vista === 'auditoria'      && <ModuloAuditoria />}
        </div>
      </div>
      </main>
    </div>
  );
}