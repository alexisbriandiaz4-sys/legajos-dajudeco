"use client";
import { useState } from 'react';
import { Phone, AlertTriangle, Database } from 'lucide-react';
import { useAuth } from '@/lib/auth-context';
import { Pestana } from './vistas/types';
import dynamic from 'next/dynamic';

const TabTelefonia = dynamic(() => import('./vistas/TabTelefonia'), { ssr: false, loading: () => <div className="p-4 text-gray-500">Cargando telefonía...</div> });
const TabEstafas = dynamic(() => import('./vistas/TabEstafas'), { ssr: false, loading: () => <div className="p-4 text-gray-500">Cargando estafas...</div> });
const TabGeneral = dynamic(() => import('./vistas/TabGeneral'), { ssr: false, loading: () => <div className="p-4 text-gray-500">Cargando general...</div> });



export default function ModuloBaseGeneral() {
  const [pestana, setPestana] = useState<Pestana>("telefonia");
  const { usuario } = useAuth();
  const esAdmin = usuario?.rol === 'admin';

  return (
    <div className="p-6 space-y-4">
      <div>
        <h1 className="text-2xl font-bold text-[var(--text-primary)] flex items-center gap-2">
          <Database className="w-6 h-6 text-blue-400" />
          Base General
        </h1>
        <p className="text-[var(--text-muted)] text-sm mt-1">Registros unificados de telefonía y estafas</p>
      </div>

      <div className="flex gap-1 bg-[var(--bg-tertiary)] p-1 rounded-xl w-fit">
        {([
          { id: "telefonia", label: "Telefonía", icon: Phone },
          { id: "estafas",   label: "Estafas",   icon: AlertTriangle },
          { id: "general",   label: "General",   icon: Database },
        ] as { id: Pestana; label: string; icon: any }[]).map(({ id, label, icon: Icon }) => (
          <button key={id} onClick={() => setPestana(id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              pestana === id ? "bg-blue-600 text-white" : "text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]"
            }`}>
            <Icon className="w-4 h-4" />{label}
          </button>
        ))}
      </div>

      {pestana === "telefonia" && <TabTelefonia esAdmin={esAdmin} />}
      {pestana === "estafas"   && <TabEstafas esAdmin={esAdmin} />}
      {pestana === "general"   && <TabGeneral esAdmin={esAdmin} />}
    </div>
  );
}

