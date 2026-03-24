import { ReactNode } from "react";

export default function ModalConfirmar({ titulo, mensaje, textoConfirmar = "Confirmar", procesando = false, onCancelar, onConfirmar }: {
  titulo: string; mensaje: string | ReactNode; textoConfirmar?: string; procesando?: boolean; onCancelar: () => void; onConfirmar: () => void;
}) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-sm" style={{ background: "rgba(0,0,0,0.6)" }}>
      <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)" }} className="rounded-xl p-6 max-w-sm w-full space-y-4 shadow-xl">
        <h3 style={{ color: "var(--text-primary)" }} className="font-semibold text-lg">{titulo}</h3>
        <div style={{ color: "var(--text-secondary)" }} className="text-sm">{mensaje}</div>
        <div className="flex gap-3 pt-2">
          <button onClick={onCancelar} disabled={procesando}
            style={{ background: "var(--bg-tertiary)", color: "var(--text-secondary)", border: "1px solid var(--border)" }}
            className="flex-1 py-2 rounded-lg text-sm font-medium hover:opacity-80 transition disabled:opacity-50">
            Cancelar
          </button>
          <button onClick={onConfirmar} disabled={procesando} style={{ background: "var(--danger)" }}
            className="flex-1 py-2 rounded-lg text-sm text-white font-medium hover:opacity-80 transition disabled:opacity-50 shadow-md shadow-red-500/20">
            {procesando ? "Procesando..." : textoConfirmar}
          </button>
        </div>
      </div>
    </div>
  );
}
