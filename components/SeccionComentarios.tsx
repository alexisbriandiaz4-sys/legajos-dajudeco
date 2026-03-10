"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { MessageSquare, Send, Trash2, Loader2, ChevronDown, ChevronUp, User } from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "@/lib/auth-context";

interface Comentario {
  id: string;
  texto: string;
  createdAt: string;
  usuario: { nombre: string; rol: string };
  usuarioId?: string;
}

interface SeccionComentariosProps {
  legajoId: string;
}

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  const hrs = Math.floor(mins / 60);
  const days = Math.floor(hrs / 24);
  if (mins < 1) return "ahora";
  if (mins < 60) return `hace ${mins} min`;
  if (hrs < 24) return `hace ${hrs}h`;
  if (days === 1) return "ayer";
  return new Date(dateStr).toLocaleDateString("es-AR", { day: "2-digit", month: "short" });
}

// Modal de confirmación de eliminación
function ModalConfirmar({
  onConfirmar,
  onCancelar,
}: {
  onConfirmar: () => void;
  onCancelar: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 w-full max-w-sm shadow-2xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
            <Trash2 className="w-5 h-5 text-red-400" />
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm">Eliminar comentario</h3>
            <p className="text-gray-400 text-xs mt-0.5">Esta acción no se puede deshacer</p>
          </div>
        </div>
        <div className="flex gap-3 mt-5">
          <button
            onClick={onCancelar}
            className="flex-1 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-white text-sm transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={onConfirmar}
            className="flex-1 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm font-semibold transition-colors"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}

export default function SeccionComentarios({ legajoId }: SeccionComentariosProps) {
  const { usuario } = useAuth();
  const [comentarios, setComentarios] = useState<Comentario[]>([]);
  const [cargando, setCargando] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [texto, setTexto] = useState("");
  const [expandido, setExpandido] = useState(false);
  const [confirmarEliminar, setConfirmarEliminar] = useState<string | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const cargarComentarios = useCallback(async () => {
    setCargando(true);
    try {
      const res = await fetch(`/api/legajos/${legajoId}/comentarios`);
      if (res.ok) setComentarios(await res.json());
    } catch {
      // silencioso
    } finally {
      setCargando(false);
    }
  }, [legajoId]);

  useEffect(() => {
    if (expandido) cargarComentarios();
  }, [expandido, cargarComentarios]);

  const enviarComentario = async () => {
    const textoTrim = texto.trim();
    if (!textoTrim) return;
    setEnviando(true);
    try {
      const res = await fetch(`/api/legajos/${legajoId}/comentarios`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ texto: textoTrim }),
      });
      if (res.ok) {
        const nuevo = await res.json();
        setComentarios((prev) => [nuevo, ...prev]);
        setTexto("");
        toast.success("Comentario agregado");
      } else {
        const err = await res.json();
        toast.error(err.error || "Error al agregar comentario");
      }
    } catch {
      toast.error("Error al agregar comentario");
    } finally {
      setEnviando(false);
    }
  };

  const eliminarComentario = async (id: string) => {
    try {
      const res = await fetch(`/api/legajos/${legajoId}/comentarios/${id}`, { method: "DELETE" });
      if (res.ok) {
        setComentarios((prev) => prev.filter((c) => c.id !== id));
        toast.success("Comentario eliminado");
      } else {
        toast.error("Error al eliminar");
      }
    } catch {
      toast.error("Error al eliminar");
    } finally {
      setConfirmarEliminar(null);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      enviarComentario();
    }
  };

  return (
    <>
      {confirmarEliminar && (
        <ModalConfirmar
          onConfirmar={() => eliminarComentario(confirmarEliminar)}
          onCancelar={() => setConfirmarEliminar(null)}
        />
      )}

      <div className="mt-4 border border-gray-700 rounded-xl overflow-hidden">
        {/* Header colapsable */}
        <button
          onClick={() => setExpandido(!expandido)}
          className="w-full flex items-center justify-between px-4 py-3 bg-gray-800/50 hover:bg-gray-800 transition-colors"
        >
          <div className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-medium text-gray-200">Comentarios y notas</span>
            {comentarios.length > 0 && (
              <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 text-xs">
                {comentarios.length}
              </span>
            )}
          </div>
          {expandido ? (
            <ChevronUp className="w-4 h-4 text-gray-400" />
          ) : (
            <ChevronDown className="w-4 h-4 text-gray-400" />
          )}
        </button>

        {expandido && (
          <div className="p-4 bg-gray-900/50 space-y-4">
            {/* Input para nuevo comentario */}
            <div className="space-y-2">
              <textarea
                ref={textareaRef}
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Escribí una nota o comentario... (Ctrl+Enter para enviar)"
                rows={3}
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-3 py-2.5 text-white text-sm resize-none focus:outline-none focus:border-amber-500/50 placeholder-gray-600 transition-colors"
              />
              <div className="flex justify-between items-center">
                <span className="text-gray-600 text-xs">{texto.length}/2000</span>
                <button
                  onClick={enviarComentario}
                  disabled={enviando || !texto.trim()}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-700 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-medium transition-colors"
                >
                  {enviando ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  Agregar
                </button>
              </div>
            </div>

            {/* Lista de comentarios */}
            {cargando ? (
              <div className="flex justify-center py-4">
                <Loader2 className="w-5 h-5 text-gray-500 animate-spin" />
              </div>
            ) : comentarios.length === 0 ? (
              <p className="text-center text-gray-600 text-sm py-2">
                No hay comentarios todavía
              </p>
            ) : (
              <div className="space-y-3">
                {comentarios.map((c) => {
                  const esMio = usuario?.id === (c as any).usuarioId || false;
                  const esAdmin = usuario?.rol === "admin";
                  const puedeEliminar = esMio || esAdmin;

                  return (
                    <div
                      key={c.id}
                      className="flex gap-3 p-3 rounded-xl bg-gray-800 border border-gray-700/50 group"
                    >
                      {/* Avatar */}
                      <div className="w-7 h-7 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <User className="w-3.5 h-3.5 text-amber-400" />
                      </div>

                      {/* Contenido */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-white text-xs font-semibold">{c.usuario.nombre}</span>
                          {c.usuario.rol === "admin" && (
                            <span className="px-1.5 py-0.5 rounded text-[10px] bg-blue-500/20 text-blue-400">
                              admin
                            </span>
                          )}
                          <span className="text-gray-600 text-xs ml-auto">{timeAgo(c.createdAt)}</span>
                        </div>
                        <p className="text-gray-300 text-sm whitespace-pre-wrap break-words">{c.texto}</p>
                      </div>

                      {/* Botón eliminar */}
                      {puedeEliminar && (
                        <button
                          onClick={() => setConfirmarEliminar(c.id)}
                          title="Eliminar comentario"
                          className="p-1.5 rounded-lg text-gray-600 hover:text-red-400 hover:bg-red-500/10 transition-colors opacity-0 group-hover:opacity-100 flex-shrink-0"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}