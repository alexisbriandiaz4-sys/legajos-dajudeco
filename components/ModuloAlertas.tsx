"use client";

import { useState, useEffect } from "react";
import { Bell, Clock, AlertTriangle, AlertCircle, CheckCircle, RefreshCw, FileText, Send } from "lucide-react";

interface Legajo {
  id: string;
  numero: string;
  caratula: string;
}

interface Oficio {
  id: string;
  operadora: string;
  tipo: string;
  urgencia: string;
  estado: string;
  fechaEnvio: string | null;
  fechaRespuesta: string | null;
  observaciones: string | null;
  createdAt: string;
  legajo: Legajo;
}

type NivelAlerta = 'critica' | 'alta' | 'media' | 'pendiente';

interface Alerta {
  oficio: Oficio;
  nivel: NivelAlerta;
  mensaje: string;
  diasSinRespuesta?: number;
}

interface ConfigAlertas {
  diasAlertaMedia: number;
  diasAlertaAlta: number;
  diasAlertaCritica: number;
}

function calcularAlertas(oficios: Oficio[], diasMedia = 2, diasAlta = 3, diasCritica = 7): Alerta[] {
  const alertas: Alerta[] = [];
  const ahora = new Date();

  for (const oficio of oficios) {
    if (oficio.estado === 'Enviado' && oficio.fechaEnvio && !oficio.fechaRespuesta) {
      const fechaEnvio = new Date(oficio.fechaEnvio);
      const dias = Math.floor((ahora.getTime() - fechaEnvio.getTime()) / (1000 * 60 * 60 * 24));

      if (dias >= diasCritica) {
        alertas.push({ oficio, nivel: 'critica', mensaje: `Sin respuesta hace ${dias} días`, diasSinRespuesta: dias });
      } else if (dias >= diasAlta) {
        alertas.push({ oficio, nivel: 'alta', mensaje: `Sin respuesta hace ${dias} días`, diasSinRespuesta: dias });
      } else if (dias >= diasMedia) {
        alertas.push({ oficio, nivel: 'media', mensaje: `Sin respuesta hace ${dias} días`, diasSinRespuesta: dias });
      }
    }

    if (oficio.estado === 'Pendiente' && !oficio.fechaEnvio) {
      const fechaCreacion = new Date(oficio.createdAt);
      const dias = Math.floor((ahora.getTime() - fechaCreacion.getTime()) / (1000 * 60 * 60 * 24));
      if (dias >= 1) {
        alertas.push({ oficio, nivel: 'pendiente', mensaje: `Pendiente de envío hace ${dias} día${dias > 1 ? 's' : ''}` });
      }
    }
  }

  const orden: Record<NivelAlerta, number> = { critica: 0, alta: 1, media: 2, pendiente: 3 };
  return alertas.sort((a, b) => orden[a.nivel] - orden[b.nivel]);
}

const CONFIG_NIVEL: Record<NivelAlerta, { label: string; color: string; bg: string; icono: any }> = {
  critica:  { label: 'Crítica',   color: '#ef4444', bg: 'rgba(239,68,68,0.08)',   icono: AlertCircle },
  alta:     { label: 'Alta',      color: '#f97316', bg: 'rgba(249,115,22,0.08)',  icono: AlertTriangle },
  media:    { label: 'Media',     color: '#eab308', bg: 'rgba(234,179,8,0.08)',   icono: Clock },
  pendiente:{ label: 'Pendiente', color: '#6b7280', bg: 'rgba(107,114,128,0.08)', icono: Send },
};

export default function ModuloAlertas() {
  const [oficios, setOficios] = useState<Oficio[]>([]);
  const [config, setConfig] = useState<ConfigAlertas>({ diasAlertaMedia: 2, diasAlertaAlta: 3, diasAlertaCritica: 7 });
  const [cargando, setCargando] = useState(true);
  const [filtro, setFiltro] = useState<NivelAlerta | 'todas'>('todas');
  const [ultimaActualizacion, setUltimaActualizacion] = useState<Date>(new Date());

  async function cargarDatos() {
    setCargando(true);
    try {
      const [oficiosRes, configRes] = await Promise.all([
        fetch('/api/oficios'),
        fetch('/api/configuracion'),
      ]);
      if (oficiosRes.ok) {
        setOficios(await oficiosRes.json());
        setUltimaActualizacion(new Date());
      }
      if (configRes.ok) {
        const cfg = await configRes.json();
        setConfig({
          diasAlertaMedia:   cfg.diasAlertaMedia   ?? 2,
          diasAlertaAlta:    cfg.diasAlertaAlta    ?? 3,
          diasAlertaCritica: cfg.diasAlertaCritica ?? 7,
        });
      }
    } catch (e) {
      console.error(e);
    } finally {
      setCargando(false);
    }
  }

  useEffect(() => { cargarDatos(); }, []);

  const alertas = calcularAlertas(oficios, config.diasAlertaMedia, config.diasAlertaAlta, config.diasAlertaCritica);
  const alertasFiltradas = filtro === 'todas' ? alertas : alertas.filter(a => a.nivel === filtro);

  const conteo: Record<NivelAlerta, number> = {
    critica:   alertas.filter(a => a.nivel === 'critica').length,
    alta:      alertas.filter(a => a.nivel === 'alta').length,
    media:     alertas.filter(a => a.nivel === 'media').length,
    pendiente: alertas.filter(a => a.nivel === 'pendiente').length,
  };

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Bell size={22} style={{ color: 'var(--accent)' }} />
          <div>
            <h2 style={{ color: 'var(--text-primary)' }} className="text-xl font-semibold">Alertas</h2>
            <p style={{ color: 'var(--text-muted)' }} className="text-xs mt-0.5">
              Actualizado: {ultimaActualizacion.toLocaleTimeString('es-AR')}
            </p>
          </div>
        </div>
        <button
          onClick={cargarDatos}
          disabled={cargando}
          style={{ color: 'var(--text-secondary)', borderColor: 'var(--border)' }}
          className="flex items-center gap-2 px-3 py-2 rounded-lg border text-sm hover:opacity-80 transition disabled:opacity-50"
        >
          <RefreshCw size={14} className={cargando ? 'animate-spin' : ''} />
          Actualizar
        </button>
      </div>

      {/* Umbrales activos */}
      <div
        style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border)' }}
        className="flex items-center gap-4 px-4 py-2.5 rounded-xl border text-xs flex-wrap"
      >
        <span style={{ color: 'var(--text-muted)' }}>Umbrales activos:</span>
        <span style={{ color: '#eab308' }}>⚠ Media: {config.diasAlertaMedia}d</span>
        <span style={{ color: '#f97316' }}>🔶 Alta: {config.diasAlertaAlta}d</span>
        <span style={{ color: '#ef4444' }}>🔴 Crítica: {config.diasAlertaCritica}d</span>
        <span style={{ color: 'var(--text-muted)' }}>(modificar en Configuración → General)</span>
      </div>

      {/* Tarjetas resumen */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {(Object.entries(CONFIG_NIVEL) as [NivelAlerta, typeof CONFIG_NIVEL[NivelAlerta]][]).map(([nivel, cfg]) => {
          const Icono = cfg.icono;
          return (
            <button
              key={nivel}
              onClick={() => setFiltro(filtro === nivel ? 'todas' : nivel)}
              style={{
                background: filtro === nivel ? cfg.bg : 'var(--bg-secondary)',
                borderColor: filtro === nivel ? cfg.color : 'var(--border)',
                outline: 'none',
              }}
              className="p-4 rounded-xl border text-left transition hover:opacity-90"
            >
              <div className="flex items-center justify-between mb-2">
                <Icono size={16} style={{ color: cfg.color }} />
                <span style={{ color: cfg.color }} className="text-2xl font-bold">{conteo[nivel]}</span>
              </div>
              <p style={{ color: 'var(--text-secondary)' }} className="text-xs">{cfg.label}</p>
            </button>
          );
        })}
      </div>

      {/* Lista */}
      {cargando ? (
        <div className="flex items-center justify-center py-16">
          <RefreshCw size={20} className="animate-spin" style={{ color: 'var(--text-muted)' }} />
          <span style={{ color: 'var(--text-muted)' }} className="ml-3 text-sm">Cargando...</span>
        </div>
      ) : alertasFiltradas.length === 0 ? (
        <div
          style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border)' }}
          className="flex flex-col items-center justify-center py-16 rounded-xl border"
        >
          <CheckCircle size={36} style={{ color: '#22c55e' }} className="mb-3" />
          <p style={{ color: 'var(--text-primary)' }} className="font-medium">Sin alertas</p>
          <p style={{ color: 'var(--text-muted)' }} className="text-sm mt-1">
            {filtro === 'todas'
              ? 'Todos los oficios están al día'
              : `No hay alertas de nivel ${CONFIG_NIVEL[filtro].label.toLowerCase()}`}
          </p>
        </div>
      ) : (
        <div className="space-y-2">
          {alertasFiltradas.map((alerta, i) => {
            const cfg = CONFIG_NIVEL[alerta.nivel];
            const Icono = cfg.icono;
            return (
              <div
                key={`${alerta.oficio.id}-${i}`}
                style={{
                  background: 'var(--bg-secondary)',
                  borderColor: 'var(--border)',
                  borderLeftColor: cfg.color,
                  borderLeftWidth: 3,
                }}
                className="flex items-start gap-4 p-4 rounded-xl border"
              >
                <div style={{ background: cfg.bg }} className="p-2 rounded-lg shrink-0 mt-0.5">
                  <Icono size={16} style={{ color: cfg.color }} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span style={{ color: 'var(--text-primary)' }} className="font-medium text-sm">
                      {alerta.oficio.operadora} — {alerta.oficio.tipo}
                    </span>
                    <span
                      style={{ background: cfg.bg, color: cfg.color }}
                      className="px-2 py-0.5 rounded-full text-xs font-medium"
                    >
                      {cfg.label}
                    </span>
                  </div>
                  <p style={{ color: 'var(--text-muted)' }} className="text-xs mt-1">
                    <FileText size={11} className="inline mr-1" />
                    Legajo {alerta.oficio.legajo.numero} — {alerta.oficio.legajo.caratula}
                  </p>
                  <p style={{ color: cfg.color }} className="text-xs mt-1 font-medium">
                    {alerta.mensaje}
                  </p>
                  {alerta.oficio.observaciones && (
                    <p style={{ color: 'var(--text-muted)' }} className="text-xs mt-1 italic truncate">
                      {alerta.oficio.observaciones}
                    </p>
                  )}
                </div>

                <div className="text-right shrink-0">
                  <p style={{ color: 'var(--text-muted)' }} className="text-xs">
                    {alerta.oficio.fechaEnvio
                      ? new Date(alerta.oficio.fechaEnvio).toLocaleDateString('es-AR')
                      : new Date(alerta.oficio.createdAt).toLocaleDateString('es-AR')}
                  </p>
                  <p style={{ color: 'var(--text-muted)' }} className="text-xs mt-0.5">
                    Urgencia: {alerta.oficio.urgencia}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}