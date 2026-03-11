"use client";
import { useEffect, useRef, useState } from "react";
import ForceGraph2D from "react-force-graph-2d";

interface GrafoProps {
  legajoId: string;
}

export default function GrafoDinamico({ legajoId }: GrafoProps) {
  const [data, setData] = useState({ nodes: [], links: [] });
  const [cargando, setCargando] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const graphRef = useRef<any>(null);

  useEffect(() => {
    const fetchGrafo = async () => {
      try {
        const res = await fetch(`/api/legajos/${legajoId}/grafo`);
        if (res.ok) {
          const grafoData = await res.json();
          setData(grafoData);
        }
      } catch (e) {
        console.error("Error al cargar grafo", e);
      } finally {
        setCargando(false);
      }
    };
    fetchGrafo();
  }, [legajoId]);

  useEffect(() => {
    if (graphRef.current && data.nodes.length > 0) {
      // Ajustar cámara para que quepan todos los nodos iterando luego de render
      setTimeout(() => {
        graphRef.current?.zoomToFit(400, 50);
      }, 500);
    }
  }, [data]);

  if (cargando) {
    return (
      <div className="w-full h-96 flex flex-col items-center justify-center bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl mt-4">
        <span className="relative flex h-10 w-10">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-10 w-10 bg-purple-500"></span>
        </span>
        <p className="mt-4 text-gray-400 text-sm font-medium tracking-widest uppercase">Inicializando Motor de Grafos</p>
      </div>
    );
  }

  if (data.nodes.length === 0) {
    return (
      <div className="w-full h-96 flex flex-col items-center justify-center bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl mt-4">
        <div className="text-gray-600 mb-2">
          <svg className="w-12 h-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
        </div>
        <p className="text-gray-400 text-sm">No hay suficientes conexiones NPL detectadas.</p>
        <p className="text-gray-500 text-xs mt-1">Sube documentos para que la IA extraiga entidades y relaciones.</p>
      </div>
    );
  }

  return (
    <div className="w-full h-[500px] mt-4 border border-[var(--border)] rounded-xl overflow-hidden glass-panel relative" ref={containerRef}>
      <div className="absolute top-4 left-4 z-10 bg-black/50 backdrop-blur border border-gray-700 p-3 rounded-lg pointer-events-none">
        <h4 className="text-white font-semibold text-sm">Red Criminológica IA</h4>
        <p className="text-gray-400 text-xs mt-1">Nodos interconectados descubiertos en la evidencia</p>
      </div>
      <ForceGraph2D
        ref={graphRef}
        graphData={data}
        width={containerRef.current?.offsetWidth || 800}
        height={500}
        backgroundColor="#050510" // Dark aesthetic for SAP
        nodeLabel="label"
        nodeColor={(node: any) => {
          switch (node.tipo) {
            case "PERSONA": return "#ef4444"; // Red
            case "TELEFONO": return "#3b82f6"; // Blue
            case "UBICACION": return "#10b981"; // Green
            case "ORGANIZACION": return "#8b5cf6"; // Purple
            case "CBU": return "#f59e0b"; // Amber
            default: return "#9ca3af"; // Gray
          }
        }}
        nodeRelSize={6}
        linkColor={() => "rgba(255,255,255,0.2)"}
        linkWidth={1.5}
        linkDirectionalParticles={2}
        linkDirectionalParticleSpeed={0.005}
      />
    </div>
  );
}
