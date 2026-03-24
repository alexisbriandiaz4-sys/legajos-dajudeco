"use client";

import { useState } from "react";
import { Users, Scale, Download, Settings } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SeccionGeneral from "./configuracion/SeccionGeneral";
import SeccionFiscales from "./configuracion/SeccionFiscales";
import SeccionUsuarios from "./configuracion/SeccionUsuarios";
import SeccionBackup from "./configuracion/SeccionBackup";

type Seccion = "general" | "fiscales" | "usuarios" | "backup";

export default function ModuloConfiguracion() {
  const [seccion, setSeccion] = useState<Seccion>("general");

  const tabs = [
    { key: "general" as Seccion, label: "Ajustes Generales", icon: <Settings size={16} /> },
    { key: "fiscales" as Seccion, label: "Fiscales MPA", icon: <Scale size={16} /> },
    { key: "usuarios" as Seccion, label: "Usuarios S.A.P.", icon: <Users size={16} /> },
    { key: "backup" as Seccion, label: "Exportar Datos", icon: <Download size={16} /> },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 style={{ color: "var(--text-primary)" }} className="text-3xl font-extrabold tracking-tight">CPanel de Configuración</h2>
          <p style={{ color: "var(--text-muted)" }} className="text-sm mt-1">Gestión general, directorio judicial, usuarios del sistema y backups seguros.</p>
        </div>
      </div>

      <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)" }} className="flex overflow-x-auto rounded-xl p-1.5 gap-1.5 shadow-sm scrollbar-hide">
        {tabs.map(({ key, label, icon }) => (
          <button key={key} onClick={() => setSeccion(key)}
            style={seccion === key ? { background: "var(--accent)", color: "#fff", border: "1px solid var(--accent)" } : { color: "var(--text-secondary)", border: "1px solid transparent" }}
            className={`flex-1 flex items-center justify-center min-w-fit gap-2.5 px-6 py-2.5 rounded-lg text-sm font-bold tracking-wide transition-all ${seccion !== key ? 'hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-primary)]' : 'shadow-md shadow-[var(--accent)]/20'}`}>
            {icon} {label}
          </button>
        ))}
      </div>

      <div className="mt-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={seccion}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
          >
            {seccion === "general" && <SeccionGeneral />}
            {seccion === "fiscales" && <SeccionFiscales />}
            {seccion === "usuarios" && <SeccionUsuarios />}
            {seccion === "backup" && <SeccionBackup />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}