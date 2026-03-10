"use client";
import { useState, useEffect, useCallback } from "react";
import {
  BarChart3, TrendingUp, FolderOpen, FileText, AlertCircle,
  CheckCircle, Clock, XCircle, RefreshCw, Database, Users,
  Phone, ShieldAlert, Activity, ChevronRight
} from "lucide-react";

interface EstadisticasData {
  legajos: {
    total: number;
    porEstado: { estado: string; total: number }[];
    ultimos: { id: string; numero: string; caratula: string; delito: string; estado: string; createdAt: string; fiscal?: string }[];
    porMes: { mes: string; total: number }[];
    topDelitos: { delito: string; total: number }[];
  };
  oficios: {
    total: number;
    porEstado: { estado: string; total: number }[];
    vencidos: number;
    porOperadora: { operadora: string; total: number }[];
  };
  baseGeneral: {
    totalTelefonia: number;
    totalEstafas: number;
    topCausasTelefonia: { causa: string; total: number }[];
    topArdidEstafas: { ardid: string; total: number }[];
    topEmpresasTelefonia: { empresa: string; total: number }[];
  };
}

// Colores para los gráficos
const COLORES_ESTADO = {
  Activo: '#22c55e',
  'En seguimiento': '#3b82f6',
  Cerrado: '#94a3b8',
  Inactivo: '#475569',
  Pendiente: '#f59e0b',
  Enviado: '#3b82f6',
  Respondido: '#22c55e',
  Vencido: '#ef4444',
};

const COLORES_PALETTE = [
  '#3b82f6', '#22c55e', '#f59e0b', '#ef4444', '#8b5cf6',
  '#06b6d4', '#f97316', '#ec4899', '#14b8a6', '#a855f7'
];

// Componente gráfico de dona SVG
function GraficoDona({
  datos,
  titulo,
  total,
}: {
  datos: { label: string; valor: number; color: string }[];
  titulo: string;
  total: number;
}) {
  const [hover, setHover] = useState<number | null>(null);
  const size = 140;
  const radio = 50;
  const radioInterno = 30;
  const cx = size / 2;
  const cy = size / 2;

  let acumulado = 0;
  const segmentos = datos.map((d, i) => {
    const porcentaje = total > 0 ? d.valor / total : 0;
    const angInicio = acumulado * 2 * Math.PI - Math.PI / 2;
    acumulado += porcentaje;
    const angFin = acumulado * 2 * Math.PI - Math.PI / 2;

    const x1 = cx + radio * Math.cos(angInicio);
    const y1 = cy + radio * Math.sin(angInicio);
    const x2 = cx + radio * Math.cos(angFin);
    const y2 = cy + radio * Math.sin(angFin);
    const xi1 = cx + radioInterno * Math.cos(angFin);
    const yi1 = cy + radioInterno * Math.sin(angFin);
    const xi2 = cx + radioInterno * Math.cos(angInicio);
    const yi2 = cy + radioInterno * Math.sin(angInicio);
    const largeArc = porcentaje > 0.5 ? 1 : 0;

    return {
      path: `M ${x1} ${y1} A ${radio} ${radio} 0 ${largeArc} 1 ${x2} ${y2} L ${xi1} ${yi1} A ${radioInterno} ${radioInterno} 0 ${largeArc} 0 ${xi2} ${yi2} Z`,
      color: d.color,
      label: d.label,
      valor: d.valor,
      porcentaje: Math.round(porcentaje * 100),
    };
  });

  return (
    <div className="flex flex-col items-center gap-3">
      <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>{titulo}</p>
      <div className="relative">
        <svg width={size} height={size}>
          {total === 0 ? (
            <circle cx={cx} cy={cy} r={radio} fill="none" stroke="var(--border)" strokeWidth={radio - radioInterno} />
          ) : (
            segmentos.map((seg, i) => (
              <path
                key={i}
                d={seg.path}
                fill={seg.color}
                opacity={hover === null || hover === i ? 1 : 0.4}
                style={{ transition: 'opacity 0.2s', cursor: 'pointer' }}
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
              />
            ))
          )}
          <circle cx={cx} cy={cy} r={radioInterno - 2} fill="var(--bg-secondary)" />
          <text x={cx} y={cy - 6} textAnchor="middle" fill="var(--text-primary)" fontSize="14" fontWeight="bold">
            {hover !== null ? segmentos[hover]?.porcentaje + '%' : total}
          </text>
          <text x={cx} y={cy + 10} textAnchor="middle" fill="var(--text-muted)" fontSize="8">
            {hover !== null ? segmentos[hover]?.label.slice(0, 10) : 'total'}
          </text>
        </svg>
      </div>
      <div className="flex flex-wrap gap-x-3 gap-y-1 justify-center max-w-[200px]">
        {segmentos.map((seg, i) => (
          <div key={i} className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: seg.color }} />
            <span className="text-xs truncate max-w-[80px]" style={{ color: hover === i ? 'var(--text-primary)' : 'var(--text-muted)' }}>
              {seg.label} ({seg.valor})
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Gráfico de barras horizontal
function GraficoBarras({
  datos,
  titulo,
  color = '#3b82f6',
}: {
  datos: { label: string; valor: number }[];
  titulo: string;
  color?: string;
}) {
  const max = Math.max(...datos.map(d => d.valor), 1);
  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>{titulo}</p>
      {datos.length === 0 ? (
        <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Sin datos</p>
      ) : (
        datos.map((d, i) => (
          <div key={i} className="space-y-0.5">
            <div className="flex justify-between items-center">
              <span className="text-xs truncate max-w-[160px]" style={{ color: 'var(--text-secondary)' }} title={d.label}>
                {d.label}
              </span>
              <span className="text-xs font-semibold ml-2 flex-shrink-0" style={{ color: 'var(--text-primary)' }}>{d.valor}</span>
            </div>
            <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--bg-tertiary)' }}>
              <div
                className="h-full rounded-full"
                style={{
                  width: `${(d.valor / max) * 100}%`,
                  background: COLORES_PALETTE[i % COLORES_PALETTE.length],
                  transition: 'width 0.8s cubic-bezier(0.4,0,0.2,1)',
                }}
              />
            </div>
          </div>
        ))
      )}
    </div>
  );
}

// Gráfico de línea simple para tendencia mensual
function GraficoLinea({ datos }: { datos: { mes: string; total: number }[] }) {
  if (datos.length === 0) return <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Sin datos</p>;
  const max = Math.max(...datos.map(d => d.total), 1);
  const w = 280;
  const h = 70;
  const pad = 10;
  const stepX = (w - pad * 2) / Math.max(datos.length - 1, 1);

  const puntos = datos.map((d, i) => ({
    x: pad + i * stepX,
    y: h - pad - ((d.total / max) * (h - pad * 2)),
    label: d.mes,
    total: d.total,
  }));

  const pathD = puntos.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
  const areaD = `${pathD} L ${puntos[puntos.length - 1].x} ${h - pad} L ${puntos[0].x} ${h - pad} Z`;

  return (
    <div className="space-y-1">
      <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Legajos por mes</p>
      <svg width={w} height={h} className="overflow-visible">
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={areaD} fill="url(#lineGrad)" />
        <path d={pathD} fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        {puntos.map((p, i) => (
          <g key={i}>
            <circle cx={p.x} cy={p.y} r={3} fill="#3b82f6" />
            <text x={p.x} y={h} textAnchor="middle" fontSize="7" fill="var(--text-muted)">{p.label.split(' ')[0]}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}

// Tarjeta de métrica
function Metrica({
  icono: Icono,
  label,
  valor,
  color,
  sub,
}: {
  icono: any;
  label: string;
  valor: number | string;
  color: string;
  sub?: string;
}) {
  return (
    <div
      className="rounded-xl p-4 flex items-center gap-3"
      style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}
    >
      <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ background: color + '20' }}>
        <Icono size={18} style={{ color }} />
      </div>
      <div className="min-w-0">
        <p className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>{valor}</p>
        <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{label}</p>
        {sub && <p className="text-xs mt-0.5" style={{ color }}>{sub}</p>}
      </div>
    </div>
  );
}

function colorEstado(estado: string) {
  const map: Record<string, string> = {
    Activo: '#22c55e', 'En seguimiento': '#3b82f6',
    Cerrado: '#94a3b8', Inactivo: '#475569',
  };
  return map[estado] || '#94a3b8';
}

export default function ModuloEstadisticas() {
  const [datos, setDatos] = useState<EstadisticasData | null>(null);
  const [cargando, setCargando] = useState(true);
  const [ultimaActualizacion, setUltimaActualizacion] = useState<Date | null>(null);

  const cargar = useCallback(async () => {
    setCargando(true);
    try {
      const res = await fetch('/api/estadisticas');
      if (res.ok) {
        setDatos(await res.json());
        setUltimaActualizacion(new Date());
      }
    } catch {}
    finally { setCargando(false); }
  }, []);

  useEffect(() => {
    cargar();
    const interval = setInterval(cargar, 60000); // refresco cada 1 minuto
    return () => clearInterval(interval);
  }, [cargar]);

  if (cargando && !datos) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
          <p style={{ color: 'var(--text-muted)' }} className="text-sm">Cargando estadísticas...</p>
        </div>
      </div>
    );
  }

  if (!datos) return null;

  const { legajos, oficios, baseGeneral } = datos;

  // Preparar datos para gráficos
  const donaOficios = oficios.porEstado.map((e, i) => ({
    label: e.estado,
    valor: e.total,
    color: (COLORES_ESTADO as any)[e.estado] || COLORES_PALETTE[i],
  }));

  const donaLegajos = legajos.porEstado.map((e, i) => ({
    label: e.estado,
    valor: e.total,
    color: (COLORES_ESTADO as any)[e.estado] || COLORES_PALETTE[i],
  }));

  const pendientes = oficios.porEstado.find(e => e.estado === 'Pendiente')?.total ?? 0;
  const respondidos = oficios.porEstado.find(e => e.estado === 'Respondido')?.total ?? 0;
  const enviados = oficios.porEstado.find(e => e.estado === 'Enviado')?.total ?? 0;

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
            Estadísticas
          </h1>
          <p className="text-sm mt-0.5" style={{ color: 'var(--text-muted)' }}>
            Panel de control en tiempo real
            {ultimaActualizacion && (
              <span> · Actualizado {ultimaActualizacion.toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' })}</span>
            )}
          </p>
        </div>
        <button
          onClick={cargar}
          disabled={cargando}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition-all"
          style={{ background: 'var(--bg-secondary)', color: 'var(--text-secondary)', border: '1px solid var(--border)' }}
        >
          <RefreshCw size={14} className={cargando ? 'animate-spin' : ''} />
          Actualizar
        </button>
      </div>

      {/* Métricas principales */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <Metrica icono={FolderOpen} label="Total legajos" valor={legajos.total} color="#3b82f6" />
        <Metrica icono={FileText} label="Total oficios" valor={oficios.total} color="#8b5cf6" />
        <Metrica icono={Clock} label="Oficios pendientes" valor={pendientes} color="#f59e0b" />
        <Metrica icono={AlertCircle} label="Oficios vencidos" valor={oficios.vencidos} color="#ef4444" />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <Metrica icono={CheckCircle} label="Oficios respondidos" valor={respondidos} color="#22c55e" />
        <Metrica icono={Activity} label="Oficios enviados" valor={enviados} color="#06b6d4" />
        <Metrica icono={Phone} label="Registros telefonía" valor={baseGeneral.totalTelefonia.toLocaleString()} color="#14b8a6" />
        <Metrica icono={ShieldAlert} label="Registros estafas" valor={baseGeneral.totalEstafas.toLocaleString()} color="#f97316" />
      </div>

      {/* Gráfico de tendencia */}
      <div className="rounded-2xl p-5" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
        <GraficoLinea datos={legajos.porMes} />
      </div>

      {/* Donas y barras */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

        {/* Dona legajos por estado */}
        <div className="rounded-2xl p-5 flex flex-col items-center" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
          <GraficoDona datos={donaLegajos} titulo="Legajos por estado" total={legajos.total} />
        </div>

        {/* Dona oficios por estado */}
        <div className="rounded-2xl p-5 flex flex-col items-center" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
          <GraficoDona datos={donaOficios} titulo="Oficios por estado" total={oficios.total} />
        </div>

        {/* Operadoras */}
        <div className="rounded-2xl p-5" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
          <GraficoBarras datos={oficios.porOperadora.map(o => ({ label: o.operadora, valor: o.total }))} titulo="Oficios por operadora" />
        </div>
      </div>

      {/* Base General — Telefonía y Estafas */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--text-muted)' }}>
          Base General
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

          {/* Causas de telefonía */}
          <div className="rounded-2xl p-5" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
            <GraficoBarras
              datos={baseGeneral.topCausasTelefonia.map(d => ({ label: d.causa, valor: d.total }))}
              titulo="Telefonía — tipo de causa"
              color="#14b8a6"
            />
          </div>

          {/* Modalidades de estafa */}
          <div className="rounded-2xl p-5" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
            <GraficoBarras
              datos={baseGeneral.topArdidEstafas.map(d => ({ label: d.ardid, valor: d.total }))}
              titulo="Estafas — modalidad"
              color="#f97316"
            />
          </div>

          {/* Empresas en telefonía */}
          <div className="rounded-2xl p-5" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
            <GraficoBarras
              datos={baseGeneral.topEmpresasTelefonia.map(d => ({ label: d.empresa, valor: d.total }))}
              titulo="Telefonía — empresa"
              color="#8b5cf6"
            />
          </div>

        </div>
      </div>

      {/* Últimos legajos cargados */}
      <div className="rounded-2xl p-5" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
        <p className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: 'var(--text-muted)' }}>
          Últimos legajos cargados
        </p>
        <div className="space-y-2">
          {legajos.ultimos.length === 0 ? (
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>No hay legajos cargados</p>
          ) : (
            legajos.ultimos.map((l) => (
              <div
                key={l.id}
                className="flex items-center gap-3 p-3 rounded-xl transition-colors"
                style={{ background: 'var(--bg-tertiary)' }}
              >
                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: colorEstado(l.estado) }} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>#{l.numero}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: colorEstado(l.estado) + '20', color: colorEstado(l.estado) }}>
                      {l.estado}
                    </span>
                  </div>
                  <p className="text-xs truncate mt-0.5" style={{ color: 'var(--text-secondary)' }}>{l.caratula}</p>
                  <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                    {l.delito} {l.fiscal ? `· ${l.fiscal}` : ''}
                  </p>
                </div>
                <span className="text-xs flex-shrink-0" style={{ color: 'var(--text-muted)' }}>
                  {new Date(l.createdAt).toLocaleDateString('es-AR', { day: '2-digit', month: 'short' })}
                </span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}