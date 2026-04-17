"use client";
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Eye, Trash2, X, Pencil } from 'lucide-react';
import { DATOS_INICIALES, UsuarioSimple, RegistroTelefonia, RegistroEstafa, formatFecha } from './types';
import { FormularioEstafa } from './Formularios';

export function TablaConPaginacion({ cargando, datos, page, setPage, columnas, renderFila, onVer, onEliminar, mensajeVacio, esAdmin, usuarios }: {
  cargando: boolean; datos: typeof DATOS_INICIALES; page: number; setPage: (fn: (p: number) => number) => void;
  columnas: string[]; renderFila: (r: any) => React.ReactNode; esAdmin: boolean; usuarios: UsuarioSimple[];
  onVer: (r: any) => void; onEliminar?: (r: any) => void; mensajeVacio: string;
}) {
  return (
    <div className="bg-[var(--bg-secondary)] rounded-xl border border-[var(--border)] overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[var(--border)] bg-[var(--bg-primary)]">
              {columnas.map(c => <th key={c} className="text-left px-4 py-3 text-[var(--text-muted)] font-medium">{c}</th>)}
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {cargando ? (
              <tr><td colSpan={columnas.length + 1} className="text-center py-12 text-[var(--text-muted)]">Cargando...</td></tr>
            ) : datos.registros.length === 0 ? (
              <tr><td colSpan={columnas.length + 1} className="text-center py-12 text-[var(--text-muted)]">
                {datos.total === 0 ? mensajeVacio : "Sin resultados para los filtros aplicados."}
              </td></tr>
            ) : datos.registros.map((r: any) => (
              <tr key={r.id}
                className={`border-b border-[var(--border)] transition-colors ${
                  !r.visto && r.asignadoA
                    ? "bg-blue-900/30 border-l-2 border-l-blue-500 hover:bg-blue-900/40"
                    : "hover:bg-[var(--bg-tertiary)]"
                }`}>
                {renderFila(r)}
                <td className="px-4 py-3">
                  <div className="flex gap-2 justify-end items-center">
                    {!r.visto && r.asignadoA && (
                      <span className="px-1.5 py-0.5 rounded text-xs bg-blue-500 text-[var(--text-primary)]">Nuevo</span>
                    )}
                    <button onClick={() => onVer(r)} className="p-1.5 text-[var(--text-muted)] hover:text-blue-400 transition-colors"><Eye className="w-4 h-4" /></button>
                    {onEliminar && <button onClick={() => onEliminar(r)} className="p-1.5 text-[var(--text-muted)] hover:text-red-400 transition-colors"><Trash2 className="w-4 h-4" /></button>}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {datos.totalPages > 1 && (
        <div className="flex items-center justify-between px-4 py-3 border-t border-[var(--border)]">
          <span className="text-[var(--text-muted)] text-sm">Página {datos.page} de {datos.totalPages} — {datos.total.toLocaleString()} registros</span>
          <div className="flex gap-2">
            <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1} className="p-2 rounded-lg bg-[var(--bg-tertiary)] text-[var(--text-secondary)] disabled:opacity-40 transition-colors"><ChevronLeft className="w-4 h-4" /></button>
            <button onClick={() => setPage(p => Math.min(datos.totalPages, p + 1))} disabled={page === datos.totalPages} className="p-2 rounded-lg bg-[var(--bg-tertiary)] text-[var(--text-secondary)] disabled:opacity-40 transition-colors"><ChevronRight className="w-4 h-4" /></button>
          </div>
        </div>
      )}
    </div>
  );
}

export function ModalEliminar({ onCancelar, onConfirmar }: { onCancelar: () => void; onConfirmar: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-[var(--bg-secondary)] rounded-xl border border-[var(--border)] p-6 w-full max-w-sm mx-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
            <Trash2 className="w-5 h-5 text-red-400" />
          </div>
          <div>
            <h3 className="text-[var(--text-primary)] font-semibold">Eliminar registro</h3>
            <p className="text-[var(--text-muted)] text-sm">Esta acción no se puede deshacer</p>
          </div>
        </div>
        <div className="flex gap-3">
          <button onClick={onCancelar} className="flex-1 px-4 py-2 bg-[var(--bg-tertiary)] text-[var(--text-primary)] rounded-lg text-sm hover:opacity-80 transition-colors">Cancelar</button>
          <button onClick={onConfirmar} className="flex-1 px-4 py-2 bg-red-600 text-[var(--text-primary)] rounded-lg text-sm hover:bg-red-700 transition-colors">Eliminar</button>
        </div>
      </div>
    </div>
  );
}

export function ModalDetalleTelefonia({ registro: r, onCerrar, usuarios }: { registro: RegistroTelefonia; onCerrar: () => void; usuarios: UsuarioSimple[] }) {
  const nombreAsignado = r.asignadoA ? (usuarios.find(u => u.id === r.asignadoA)?.nombre ?? "—") : "Sin asignar";
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-[var(--bg-secondary)] rounded-xl border border-[var(--border)] w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-[var(--border)] sticky top-0 bg-[var(--bg-secondary)]">
          <div>
            <h2 className="text-lg font-bold text-[var(--text-primary)]">Legajo {r.nroLegajo ?? "—"} — Telefonía</h2>
            <p className="text-[var(--text-muted)] text-sm">{r.victima ?? "Sin víctima"} · Asignado a: {nombreAsignado}</p>
          </div>
          <button onClick={onCerrar} className="p-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"><X className="w-5 h-5" /></button>
        </div>
        <div className="p-6 grid grid-cols-2 gap-4">
          {([
            ["Año", r.anio], ["N° Legajo", r.nroLegajo], ["N° Interno", r.nroInterno], ["CUIJ", r.cuij],
            ["Fecha Hecho", formatFecha(r.fechaHecho)], ["Fecha Ingreso", formatFecha(r.fechaIngreso)],
            ["Lugar del Hecho", r.lugarHecho], ["Barrio", r.barrio], ["Víctima", r.victima], ["Causa", r.causa],
            ["Aparato", r.aparato], ["Empresa", r.empresa], ["Abonado", r.abonado], ["IMEI", r.imei],
            ["Color", r.color], ["Correo", r.correo], ["Fiscal", r.fiscal], ["Dep. Origen", r.depOrigen],
            ["N° COM", r.nroCom], ["RPI Comisaría", r.rpiComisaria], ["RPI Compleja", r.rpiCompleja],
            ["Estado Legajo", r.estadoLegajo], ["Imputados", r.imputados], ["Requisa", r.requisa],
          ] as [string, any][]).map(([label, value]) => (
            <div key={label} className="space-y-1">
              <p className="text-[var(--text-muted)] text-xs uppercase tracking-wide">{label}</p>
              <p className="text-[var(--text-primary)] text-sm break-all">{value ? String(value) : "—"}</p>
            </div>
          ))}
          {r.observaciones && <div className="col-span-2 space-y-1"><p className="text-[var(--text-muted)] text-xs uppercase tracking-wide">Observaciones</p><p className="text-[var(--text-primary)] text-sm">{r.observaciones}</p></div>}
          {r.elevaciones && <div className="col-span-2 space-y-1"><p className="text-[var(--text-muted)] text-xs uppercase tracking-wide">Elevaciones</p><p className="text-[var(--text-primary)] text-sm">{r.elevaciones}</p></div>}
          {r.procedimientos && <div className="col-span-2 space-y-1"><p className="text-[var(--text-muted)] text-xs uppercase tracking-wide">Procedimientos</p><p className="text-[var(--text-primary)] text-sm">{r.procedimientos}</p></div>}
        </div>
      </div>
    </div>
  );
}

export function ModalDetalleEstafa({ registro: r, onCerrar, usuarios, esAdmin, onGuardado }: {
  registro: RegistroEstafa;
  onCerrar: () => void;
  usuarios: UsuarioSimple[];
  esAdmin?: boolean;
  onGuardado?: () => void;
}) {
  const [editando, setEditando] = useState(false);
  const nombreAsignado = r.asignadoA ? (usuarios.find(u => u.id === r.asignadoA)?.nombre ?? "—") : "Sin asignar";

  if (editando) {
    return (
      <FormularioEstafa
        usuarios={usuarios}
        registroEditar={r}
        esEdicion={true}
        onCerrar={() => setEditando(false)}
        onGuardado={() => {
          setEditando(false);
          onGuardado?.();
          onCerrar();
        }}
      />
    );
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-[var(--bg-secondary)] rounded-xl border border-[var(--border)] w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-[var(--border)] sticky top-0 bg-[var(--bg-secondary)]">
          <div>
            <h2 className="text-lg font-bold text-[var(--text-primary)]">Legajo {r.nroLegajo ?? "—"} — Estafa</h2>
            <p className="text-[var(--text-muted)] text-sm">{r.victima ?? "Sin víctima"} · Asignado a: {nombreAsignado}</p>
          </div>
          <div className="flex items-center gap-2">
            {esAdmin && (
              <button onClick={() => setEditando(true)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm transition-colors">
                <Pencil className="w-3.5 h-3.5" /> Editar
              </button>
            )}
            <button onClick={onCerrar} className="p-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"><X className="w-5 h-5" /></button>
          </div>
        </div>
        <div className="p-6 grid grid-cols-2 gap-4">
          {([
            ["N° Interno",       r.nroInterno],
            ["N° Legajo",        r.nroLegajo],
            ["CUIJ",             r.cuij],
            ["Fecha Hecho",      formatFecha(r.fechaHecho)],
            ["Fecha Denuncia",   formatFecha(r.fechaDenuncia)],
            ["Dependencia",      r.dependencia],
            ["Recibido",         r.recibido],
            ["Víctima",          r.victima],
            ["Teléfono Víctima", r.telefonoVictima],
            ["Carátula",         r.caratula],
            ["Fiscal",           r.fiscal],
            ["Ardid / Modalidad",r.ardid],
            ["Seudónimo",        r.seudonimo],
            ["Tel. Referencia",  r.telefonoReferencia],
            ["Nombre Referencia",r.nombreReferencia],
            ["IMEI",             r.imei],
            ["Otros Teléfonos",  r.otrosTelefonos],
            ["Estado Legajo",    r.estadoLegajo],
          ] as [string, any][]).map(([label, value]) => (
            <div key={label} className="space-y-1">
              <p className="text-[var(--text-muted)] text-xs uppercase tracking-wide">{label}</p>
              <p className="text-[var(--text-primary)] text-sm break-all">{value ? String(value) : "—"}</p>
            </div>
          ))}

          {/* CBU Víctima */}
          <div className="space-y-1">
            <p className="text-[var(--text-muted)] text-xs uppercase tracking-wide">CBU / Cuenta Víctima</p>
            <p className="text-[var(--text-primary)] text-sm break-all font-mono">{r.cbu ?? "—"}</p>
          </div>

          {/* CBU Imputado */}
          <div className="space-y-1">
            <p className="text-[var(--text-muted)] text-xs uppercase tracking-wide">CBU / Cuenta Imputado</p>
            <p className="text-[var(--text-primary)] text-sm break-all font-mono">{r.otrosCbu ?? "—"}</p>
          </div>

          {r.titulares && <div className="col-span-2 space-y-1"><p className="text-[var(--text-muted)] text-xs uppercase tracking-wide">Titulares</p><p className="text-[var(--text-primary)] text-sm">{r.titulares}</p></div>}
          {r.complementos && <div className="col-span-2 space-y-1"><p className="text-[var(--text-muted)] text-xs uppercase tracking-wide">Complementos</p><p className="text-[var(--text-primary)] text-sm">{r.complementos}</p></div>}
        </div>
      </div>
    </div>
  );
}
