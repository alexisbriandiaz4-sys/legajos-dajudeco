import { Calendar, ChevronRight, Pencil, PowerOff, Smartphone, Trash2, User } from "lucide-react";
import { motion } from "framer-motion";

interface TarjetaLegajoProps {
  legajo: any;
  colorEstado: (estado: string) => any;
  btnAccion: (onClick: () => void, icon: React.ReactNode, titulo: string, color?: string) => React.ReactNode;
  onSeleccionar: (legajo: any) => void;
  onEditar: (legajo: any) => void;
  onCambiarEstado: (legajo: any) => void;
  onBorrar: (legajo: any) => void;
}

export default function TarjetaLegajo({
  legajo, colorEstado, btnAccion, onSeleccionar, onEditar, onCambiarEstado, onBorrar
}: TarjetaLegajoProps) {
  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, y: 15 },
        visible: { opacity: 1, y: 0 }
      }}
      style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)", opacity: legajo.estado === "Inactivo" ? 0.5 : 1 }}
      className="rounded-xl glass-panel glass-panel-hover p-4 transition-all group cursor-pointer"
    >
      <div className="flex items-start justify-between">
        <button className="flex-1 min-w-0 text-left outline-none" onClick={() => onSeleccionar(legajo)}>
          <div className="flex items-center gap-2 mb-1">
            {!legajo.visto && legajo.asignadoA && (
              <span className="px-1.5 py-0.5 rounded text-[10px] bg-red-600 text-white font-bold uppercase tracking-wider shadow-sm shadow-red-500/20">Nuevo</span>
            )}
            <span style={{ color: "var(--text-primary)" }} className="text-sm font-bold tracking-wide">LEGAJO #{legajo.numero}</span>
            <span style={colorEstado(legajo.estado)} className="text-[10px] uppercase tracking-widest px-2 py-0.5 rounded border border-current">{legajo.estado}</span>
          </div>
          <p style={{ color: "var(--text-primary)" }} className="text-sm font-semibold truncate leading-relaxed">{legajo.caratula}</p>
          <p style={{ color: "var(--accent)" }} className="text-xs mt-0.5 font-medium">{legajo.delito}</p>
          
          <div className="flex items-center gap-4 mt-3 flex-wrap">
            <span style={{ color: "var(--text-muted)" }} className="text-xs flex items-center gap-1.5 font-medium">
              <User size={13} className="opacity-70" /> {legajo.victimas?.length || 0} {(legajo.victimas?.length !== 1) ? "Víctimas" : "Víctima"}
            </span>
            <span style={{ color: "var(--text-muted)" }} className="text-xs flex items-center gap-1.5 font-medium">
              <Smartphone size={13} className="opacity-70" /> {legajo.dispositivos?.length || 0} {(legajo.dispositivos?.length !== 1) ? "Dispositivos" : "Dispositivo"}
            </span>
            <span style={{ color: "var(--text-muted)" }} className="text-xs flex items-center gap-1.5 font-medium">
              <Calendar size={13} className="opacity-70" /> {new Date(legajo.fechaHecho).toLocaleDateString("es-AR")}
            </span>
            {legajo.fiscal && (
              <span style={{ color: "var(--text-muted)" }} className="text-xs flex items-center gap-1.5 font-medium">
                <User size={13} className="opacity-70" /> {legajo.fiscal}
              </span>
            )}
          </div>
        </button>
        <div className="flex items-center gap-1.5 ml-2 opacity-50 space-x-1 group-hover:opacity-100 transition-opacity">
          {btnAccion(() => onEditar(legajo), <Pencil size={14} />, "Editar", "var(--text-muted)")}
          {btnAccion(
            () => onCambiarEstado(legajo),
            <PowerOff size={14} />,
            legajo.estado === "Inactivo" ? "Activar" : "Desactivar",
            "var(--text-muted)"
          )}
          {btnAccion(() => onBorrar(legajo), <Trash2 size={14} />, "Eliminar", "var(--text-muted)")}
          <ChevronRight size={18} style={{ color: "var(--text-secondary)" }} className="ml-2 group-hover:translate-x-1 group-hover:text-blue-500 transition-all font-bold" />
        </div>
      </div>
    </motion.div>
  );
}
