"use client";
import { useState } from 'react';
import { X } from 'lucide-react';
import { toast } from 'sonner';
import { UsuarioSimple } from './types';

export function SelectorUsuario({ usuarios, value, onChange }: { usuarios: UsuarioSimple[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="col-span-2 space-y-1">
      <label className="text-[var(--text-muted)] text-xs uppercase tracking-wide">Asignar a investigador</label>
      <select value={value} onChange={e => onChange(e.target.value)}
        className="w-full px-3 py-2 bg-[var(--bg-tertiary)] border border-[var(--border)] rounded-lg text-[var(--text-primary)] text-sm focus:outline-none focus:border-blue-500">
        <option value="">Sin asignar</option>
        {usuarios.map(u => <option key={u.id} value={u.id}>{u.nombre}</option>)}
      </select>
    </div>
  );
}

export function FormularioTelefonia({ onCerrar, onGuardado, usuarios }: { onCerrar: () => void; onGuardado: () => void; usuarios: UsuarioSimple[] }) {
  const [form, setForm] = useState<Record<string, string>>({});
  const [guardando, setGuardando] = useState(false);
  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));
  const guardar = async () => {
    if (!form.victima && !form.nroLegajo) { toast.error("Ingresá al menos el N° de legajo o la víctima"); return; }
    setGuardando(true);
    try {
      const res = await fetch("/api/telefonia", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          anio: form.anio ? parseInt(form.anio) : null,
          nroInterno: form.nroInterno ? parseInt(form.nroInterno) : null,
          fechaHecho: form.fechaHecho || null,
          fechaIngreso: form.fechaIngreso || null,
          asignadoA: form.asignadoA || null,
        }),
      });
      if (res.ok) { toast.success("Registro creado"); onGuardado(); }
      else { const err = await res.json(); toast.error(err.error || "Error al guardar"); }
    } catch { toast.error("Error de conexión"); }
    finally { setGuardando(false); }
  };
  const campos: [string, string, string][] = [
    ["anio","Año","number"],["nroLegajo","N° Legajo","text"],["nroInterno","N° Interno","number"],
    ["cuij","CUIJ","text"],["fechaHecho","Fecha Hecho","date"],["fechaIngreso","Fecha Ingreso","date"],
    ["lugarHecho","Lugar del Hecho","text"],["barrio","Barrio","text"],["victima","Víctima","text"],
    ["causa","Causa / Hecho","text"],["aparato","Aparato","text"],["empresa","Empresa","text"],
    ["abonado","Abonado","text"],["imei","IMEI","text"],["color","Color","text"],
    ["fiscal","Fiscal","text"],["depOrigen","Dep. Origen","text"],["nroCom","N° COM","text"],
  ];
  return (
    <ModalFormulario titulo="Nuevo Registro — Telefonía" onCerrar={onCerrar} onGuardar={guardar} guardando={guardando}>
      {campos.map(([key, label, type]) => (
        <div key={key} className="space-y-1">
          <label className="text-[var(--text-muted)] text-xs uppercase tracking-wide">{label}</label>
          <input type={type} value={form[key] ?? ""} onChange={e => set(key, e.target.value)} className="w-full px-3 py-2 bg-[var(--bg-tertiary)] border border-[var(--border)] rounded-lg text-[var(--text-primary)] text-sm focus:outline-none focus:border-blue-500" />
        </div>
      ))}
      <SelectorUsuario usuarios={usuarios} value={form.asignadoA ?? ""} onChange={v => set("asignadoA", v)} />
    </ModalFormulario>
  );
}

export function FormularioEstafa({ onCerrar, onGuardado, usuarios, registroEditar, esEdicion }: {
  onCerrar: () => void;
  onGuardado: () => void;
  usuarios: UsuarioSimple[];
  registroEditar?: Record<string, any>;
  esEdicion?: boolean;
}) {
  const [form, setForm] = useState<Record<string, string>>(registroEditar ? {
    nroInterno:         registroEditar.nroInterno         ? String(registroEditar.nroInterno) : "",
    nroLegajo:          registroEditar.nroLegajo          ?? "",
    cuij:               registroEditar.cuij               ?? "",
    fechaHecho:         registroEditar.fechaHecho         ? registroEditar.fechaHecho.split('T')[0] : "",
    fechaDenuncia:      registroEditar.fechaDenuncia      ? registroEditar.fechaDenuncia.split('T')[0] : "",
    dependencia:        registroEditar.dependencia        ?? "",
    victima:            registroEditar.victima            ?? "",
    telefonoVictima:    registroEditar.telefonoVictima    ?? "",
    caratula:           registroEditar.caratula           ?? "",
    fiscal:             registroEditar.fiscal             ?? "",
    ardid:              registroEditar.ardid              ?? "",
    seudonimo:          registroEditar.seudonimo          ?? "",
    telefonoReferencia: registroEditar.telefonoReferencia ?? "",
    nombreReferencia:   registroEditar.nombreReferencia   ?? "",
    imei:               registroEditar.imei               ?? "",
    cbu:                registroEditar.cbu                ?? "",
    otrosCbu:           registroEditar.otrosCbu           ?? "",
    titulares:          registroEditar.titulares          ?? "",
    estadoLegajo:       registroEditar.estadoLegajo       ?? "",
    asignadoA:          registroEditar.asignadoA          ?? "",
  } : {});
  const [guardando, setGuardando] = useState(false);
  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  const guardar = async () => {
    if (!form.victima && !form.nroLegajo) { toast.error("Ingresá al menos el N° de legajo o la víctima"); return; }
    setGuardando(true);
    try {
      const url    = esEdicion ? `/api/estafas/${registroEditar!.id}` : "/api/estafas";
      const method = esEdicion ? "PUT" : "POST";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          nroInterno:    form.nroInterno    ? parseInt(form.nroInterno)    : null,
          fechaHecho:    form.fechaHecho    || null,
          fechaDenuncia: form.fechaDenuncia || null,
          asignadoA:     form.asignadoA     || null,
        }),
      });
      if (res.ok) {
        toast.success(esEdicion ? "Registro actualizado" : "Registro creado");
        onGuardado();
      } else {
        const err = await res.json();
        toast.error(err.error || "Error al guardar");
      }
    } catch { toast.error("Error de conexión"); }
    finally { setGuardando(false); }
  };

  const campos: [string, string, string][] = [
    ["nroInterno",        "N° Interno",           "number"],
    ["nroLegajo",         "N° Legajo",             "text"],
    ["cuij",              "CUIJ",                  "text"],
    ["fechaHecho",        "Fecha Hecho",           "date"],
    ["fechaDenuncia",     "Fecha Denuncia",        "date"],
    ["dependencia",       "Dependencia",           "text"],
    ["victima",           "Víctima",               "text"],
    ["telefonoVictima",   "Teléfono Víctima",      "text"],
    ["caratula",          "Carátula",              "text"],
    ["fiscal",            "Fiscal",                "text"],
    ["ardid",             "Ardid / Modalidad",     "text"],
    ["seudonimo",         "Seudónimo",             "text"],
    ["telefonoReferencia","Tel. Referencia",        "text"],
    ["nombreReferencia",  "Nombre Referencia",     "text"],
    ["imei",              "IMEI",                  "text"],
    ["titulares",         "Titulares",             "text"],
    ["estadoLegajo",      "Estado Legajo",         "text"],
  ];

  return (
    <ModalFormulario
      titulo={esEdicion ? "Editar Registro — Estafa" : "Nuevo Registro — Estafa"}
      onCerrar={onCerrar}
      onGuardar={guardar}
      guardando={guardando}
    >
      {campos.map(([key, label, type]) => (
        <div key={key} className="space-y-1">
          <label className="text-[var(--text-muted)] text-xs uppercase tracking-wide">{label}</label>
          <input
            type={type}
            value={form[key] ?? ""}
            onChange={e => set(key, e.target.value)}
            className="w-full px-3 py-2 bg-[var(--bg-tertiary)] border border-[var(--border)] rounded-lg text-[var(--text-primary)] text-sm focus:outline-none focus:border-blue-500"
          />
        </div>
      ))}

      {/* CBU Víctima */}
      <div className="space-y-1">
        <label className="text-[var(--text-muted)] text-xs uppercase tracking-wide">CBU / Cuenta Víctima</label>
        <input
          type="text"
          value={form.cbu ?? ""}
          onChange={e => set("cbu", e.target.value)}
          className="w-full px-3 py-2 bg-[var(--bg-tertiary)] border border-[var(--border)] rounded-lg text-[var(--text-primary)] text-sm focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* CBU Imputado */}
      <div className="space-y-1">
        <label className="text-[var(--text-muted)] text-xs uppercase tracking-wide">CBU / Cuenta Imputado</label>
        <input
          type="text"
          value={form.otrosCbu ?? ""}
          onChange={e => set("otrosCbu", e.target.value)}
          className="w-full px-3 py-2 bg-[var(--bg-tertiary)] border border-[var(--border)] rounded-lg text-[var(--text-primary)] text-sm focus:outline-none focus:border-blue-500"
        />
      </div>

      <SelectorUsuario usuarios={usuarios} value={form.asignadoA ?? ""} onChange={v => set("asignadoA", v)} />
    </ModalFormulario>
  );
}

export function ModalFormulario({ titulo, onCerrar, onGuardar, guardando, children }: {
  titulo: string; onCerrar: () => void; onGuardar: () => void; guardando: boolean; children: React.ReactNode;
}) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-[var(--bg-secondary)] rounded-xl border border-[var(--border)] w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-[var(--border)] sticky top-0 bg-[var(--bg-secondary)]">
          <h2 className="text-lg font-bold text-[var(--text-primary)]">{titulo}</h2>
          <button onClick={onCerrar} className="p-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"><X className="w-5 h-5" /></button>
        </div>
        <div className="p-6 grid grid-cols-2 gap-4">{children}</div>
        <div className="flex gap-3 p-6 border-t border-[var(--border)]">
          <button onClick={onCerrar} className="flex-1 px-4 py-2 bg-[var(--bg-tertiary)] text-[var(--text-primary)] rounded-lg text-sm hover:opacity-80 transition-colors">Cancelar</button>
          <button onClick={onGuardar} disabled={guardando} className="flex-1 px-4 py-2 bg-blue-600 text-[var(--text-primary)] rounded-lg text-sm hover:bg-blue-700 disabled:opacity-50 transition-colors">
            {guardando ? "Guardando..." : "Guardar registro"}
          </button>
        </div>
      </div>
    </div>
  );
}
