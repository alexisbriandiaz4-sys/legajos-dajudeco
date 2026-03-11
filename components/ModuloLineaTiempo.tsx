"use client";
import { Clock, Calendar, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

interface TimelineEvent {
  id: string;
  fecha: string;
  titulo: string;
  descripcion: string;
  tipo: "hecho" | "oficio" | "ia_inferencia";
}

interface ModuloLineaTiempoProps {
  legajoId: string;
  fechaHechoBase: string;
}

export default function ModuloLineaTiempo({ legajoId, fechaHechoBase }: ModuloLineaTiempoProps) {
  // Simulación temporal - En el futuro estos eventos se poblarán automáticamente 
  // mediante inferencias LLM o eventos del sistema Prisma.
  const eventos: TimelineEvent[] = [
    {
      id: "1",
      fecha: new Date(fechaHechoBase).toISOString(),
      titulo: "Hecho Informado",
      descripcion: "Fecha base establecida según la carátula principal del Legajo.",
      tipo: "hecho"
    },
    {
      id: "2",
      fecha: new Date().toISOString(),
      titulo: "Apertura del Expediente Digital",
      descripcion: "El legajo fue ingresado al sistema S.A.P. y se iniciaron las primeras diligencias.",
      tipo: "oficio"
    }
  ];

  return (
    <div className="w-full mt-4 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-6 glass-panel">
      <div className="flex items-center gap-2 mb-6">
        <Clock className="w-5 h-5 text-blue-400" />
        <h4 className="text-white font-semibold text-lg tracking-wide">Línea de Tiempo del Expediente</h4>
      </div>

      <div className="relative border-l border-gray-700 ml-3 space-y-6">
        {eventos.map((evento, index) => (
          <motion.div 
            key={evento.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15 }}
            className="mb-8 ml-6 relative"
          >
            <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-[35px] ring-4 ring-[var(--bg-secondary)] bg-gray-800">
              {evento.tipo === 'hecho' && <AlertCircle className="w-3 h-3 text-red-400" />}
              {evento.tipo === 'oficio' && <Calendar className="w-3 h-3 text-blue-400" />}
            </span>
            <div className="p-4 bg-[var(--bg-tertiary)] border border-[var(--border)] rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-1">
                <h5 className="text-sm font-semibold text-white">{evento.titulo}</h5>
                <time className="text-xs font-mono text-gray-500 bg-black/20 px-2 py-0.5 rounded">
                  {new Date(evento.fecha).toLocaleDateString("es-AR")}
                </time>
              </div>
              <p className="text-sm text-gray-400 mt-2">{evento.descripcion}</p>
            </div>
          </motion.div>
        ))}

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-8 ml-6 relative"
        >
          <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-[35px] ring-4 ring-[var(--bg-secondary)] bg-gray-800 border border-dashed border-gray-600">
             <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-ping"></div>
          </span>
          <div className="p-4 border border-dashed border-gray-700 rounded-lg bg-gray-900/30">
            <h5 className="text-sm font-semibold text-gray-500 mb-1">Motor de Inferencias Temporales (Próximamente)</h5>
            <p className="text-xs text-gray-600">La Inteligencia Artificial poblará automáticamente esta cronología a medida que procese declaraciones, oficios y metadatos de los archivos del Legajo.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
