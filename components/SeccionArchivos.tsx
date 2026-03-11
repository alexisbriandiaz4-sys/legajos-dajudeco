"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import {
  Upload, FileText, Image, File, Trash2, Eye,
  Loader2, Download, FolderOpen, ChevronDown, ChevronUp, AlertTriangle, Brain, X
} from "lucide-react";
import { toast } from "sonner";

interface Archivo {
  id: string;
  nombre: string;
  tipo: string;
  url: string;
  publicId: string;
  tamano?: number;
  esAnalizable: boolean;
  analisis?: string | null;
  createdAt: string;
}

interface SeccionArchivosProps {
  legajoId: string;
  nroLegajo?: string;
}

function formatBytes(bytes?: number) {
  if (!bytes) return "";
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function getIcono(tipo?: string) {
  if (!tipo) return <File className="w-5 h-5 text-gray-400" />;
  if (tipo.includes("image")) return <Image className="w-5 h-5 text-blue-400" />;
  if (tipo.includes("pdf")) return <FileText className="w-5 h-5 text-red-400" />;
  return <File className="w-5 h-5 text-gray-400" />;
}

function ModalAnalisis({ archivo, onCerrar }: { archivo: Archivo; onCerrar: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="bg-gray-900 border border-gray-700 rounded-2xl w-full max-w-2xl max-h-[80vh] flex flex-col shadow-2xl">
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-700">
          <div className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-purple-400" />
            <span className="text-white font-semibold text-sm">Análisis IA</span>
          </div>
          <p className="text-gray-400 text-xs truncate max-w-xs">{archivo.nombre}</p>
          <button onClick={onCerrar} className="p-1.5 rounded-lg hover:bg-gray-700 text-gray-400 transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="overflow-y-auto p-5 flex-1">
          {archivo.analisis ? (
            <div className="text-gray-300 text-sm whitespace-pre-wrap leading-relaxed">
              {archivo.analisis}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-10 gap-3">
              <Loader2 className="w-8 h-8 text-purple-400 animate-spin" />
              <p className="text-gray-400 text-sm">El análisis está siendo procesado...</p>
              <p className="text-gray-600 text-xs">Actualizando automáticamente...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ModalConfirmarEliminar({
  nombre,
  onConfirmar,
  onCancelar,
}: {
  nombre: string;
  onConfirmar: () => void;
  onCancelar: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 w-full max-w-sm shadow-2xl">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
            <AlertTriangle className="w-5 h-5 text-red-400" />
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm">Eliminar archivo</h3>
            <p className="text-gray-400 text-xs mt-0.5">Esta acción no se puede deshacer</p>
          </div>
        </div>
        <p className="text-gray-300 text-sm bg-gray-800 rounded-lg px-3 py-2 truncate mb-5">
          📄 {nombre}
        </p>
        <div className="flex gap-3">
          <button onClick={onCancelar} className="flex-1 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-white text-sm transition-colors">
            Cancelar
          </button>
          <button onClick={onConfirmar} className="flex-1 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm font-semibold transition-colors">
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}

export default function SeccionArchivos({ legajoId, nroLegajo }: SeccionArchivosProps) {
  const [archivos, setArchivos] = useState<Archivo[]>([]);
  const [cargando, setCargando] = useState(false);
  const [subiendo, setSubiendo] = useState(false);
  const [progreso, setProgreso] = useState(0);
  const [expandido, setExpandido] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [confirmarEliminar, setConfirmarEliminar] = useState<Archivo | null>(null);
  const [verAnalisis, setVerAnalisis] = useState<Archivo | null>(null);
  const pollingRef = useRef<NodeJS.Timeout | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const cargarArchivos = useCallback(async () => {
    setCargando(true);
    try {
      const res = await fetch(`/api/legajos/${legajoId}/archivos`);
      if (res.ok) {
        const data = await res.json();
        setArchivos(data);
      }
    } catch {
      // silencioso
    } finally {
      setCargando(false);
    }
  }, [legajoId]);

  useEffect(() => {
    if (expandido) cargarArchivos();
  }, [expandido, cargarArchivos]);

  // Polling: si hay archivos analizables sin análisis, consultar cada 4 segundos
  useEffect(() => {
    const pendientes = archivos.filter(a => a.esAnalizable && !a.analisis);

    if (pendientes.length === 0) {
      if (pollingRef.current) {
        clearInterval(pollingRef.current);
        pollingRef.current = null;
      }
      return;
    }

    if (pollingRef.current) return; // ya hay polling activo

    pollingRef.current = setInterval(async () => {
      const actualizados = await Promise.all(
        pendientes.map(async (archivo) => {
          try {
            const res = await fetch(`/api/legajos/${legajoId}/archivos/${archivo.id}`);
            if (res.ok) {
              const data = await res.json();
              return data;
            }
          } catch {
            // silencioso
          }
          return archivo;
        })
      );

      setArchivos(prev =>
        prev.map(a => {
          const actualizado = actualizados.find(u => u.id === a.id);
          return actualizado ?? a;
        })
      );

      // Si el modal está abierto y llegó el análisis, actualizarlo también
      setVerAnalisis(prev => {
        if (!prev) return prev;
        const actualizado = actualizados.find(u => u.id === prev.id);
        if (actualizado?.analisis && !prev.analisis) {
          toast.success("✅ Análisis IA completado");
          return { ...prev, analisis: actualizado.analisis };
        }
        return prev;
      });
    }, 4000);

    return () => {
      if (pollingRef.current) {
        clearInterval(pollingRef.current);
        pollingRef.current = null;
      }
    };
  }, [archivos, legajoId]);

  const subirArchivo = async (file: File) => {
    if (file.size > 20 * 1024 * 1024) {
      toast.error("El archivo no puede superar 20MB");
      return;
    }
    setSubiendo(true);
    setProgreso(0);

    const intervalo = setInterval(() => {
      setProgreso((prev) => (prev < 85 ? prev + Math.random() * 15 : prev));
    }, 300);

    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch(`/api/legajos/${legajoId}/archivos`, {
        method: "POST",
        body: formData,
      });
      clearInterval(intervalo);
      setProgreso(100);
      if (res.ok) {
        const nuevo = await res.json();
        setArchivos(prev => [nuevo, ...prev]);
        toast.success(`✓ ${file.name} subido correctamente`);
        if (nuevo.esAnalizable) {
          toast.info("🧠 Analizando archivo con IA...", { duration: 4000 });
        }
      } else {
        toast.error("Error al subir el archivo");
      }
    } catch {
      clearInterval(intervalo);
      toast.error("Error al subir el archivo");
    } finally {
      setTimeout(() => { setSubiendo(false); setProgreso(0); }, 400);
    }
  };

  const handleFiles = (files: FileList | null) => {
    if (!files) return;
    Array.from(files).forEach(subirArchivo);
  };

  const eliminarArchivo = async (archivo: Archivo) => {
    try {
      const res = await fetch(`/api/legajos/${legajoId}/archivos/${archivo.id}`, { method: "DELETE" });
      if (res.ok) {
        setArchivos(prev => prev.filter(a => a.id !== archivo.id));
        toast.success("Archivo eliminado");
      } else {
        toast.error("Error al eliminar");
      }
    } catch {
      toast.error("Error al eliminar");
    } finally {
      setConfirmarEliminar(null);
    }
  };

  return (
    <>
      {confirmarEliminar && (
        <ModalConfirmarEliminar
          nombre={confirmarEliminar.nombre}
          onConfirmar={() => eliminarArchivo(confirmarEliminar)}
          onCancelar={() => setConfirmarEliminar(null)}
        />
      )}
      {verAnalisis && (
        <ModalAnalisis
          archivo={verAnalisis}
          onCerrar={() => setVerAnalisis(null)}
        />
      )}

      <div className="mt-4 border border-gray-700 rounded-xl overflow-hidden">
        <button
          onClick={() => setExpandido(!expandido)}
          className="w-full flex items-center justify-between px-4 py-3 bg-gray-800/50 hover:bg-gray-800 transition-colors"
        >
          <div className="flex items-center gap-2">
            <FolderOpen className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-gray-200">Carpeta del legajo</span>
            {archivos.length > 0 && (
              <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 text-xs">
                {archivos.length} archivo{archivos.length !== 1 ? "s" : ""}
              </span>
            )}
          </div>
          {expandido ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
        </button>

        {expandido && (
          <div className="p-4 bg-gray-900/50 space-y-4">
            <div
              onDragOver={e => { e.preventDefault(); setDragOver(true); }}
              onDragLeave={() => setDragOver(false)}
              onDrop={e => { e.preventDefault(); setDragOver(false); handleFiles(e.dataTransfer.files); }}
              onClick={() => inputRef.current?.click()}
              className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all ${
                dragOver ? "border-blue-500 bg-blue-500/10" : "border-gray-600 hover:border-gray-500 hover:bg-gray-800/50"
              }`}
            >
              <input
                ref={inputRef}
                type="file"
                multiple
                className="hidden"
                onChange={e => handleFiles(e.target.files)}
                accept=".pdf,.jpg,.jpeg,.png,.webp,.doc,.docx,.xls,.xlsx,.zip,.rar"
              />
              {subiendo ? (
                <div className="flex flex-col items-center gap-3">
                  <Loader2 className="w-8 h-8 text-blue-400 animate-spin" />
                  <p className="text-gray-400 text-sm">Subiendo archivo...</p>
                  <div className="w-full max-w-xs bg-gray-700 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-blue-500 h-full rounded-full transition-all duration-300" style={{ width: `${progreso}%` }} />
                  </div>
                  <p className="text-gray-600 text-xs">{Math.round(progreso)}%</p>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-2">
                  <Upload className="w-8 h-8 text-gray-500" />
                  <p className="text-gray-400 text-sm">
                    Arrastrá archivos acá o <span className="text-blue-400">hacé click para seleccionar</span>
                  </p>
                  <p className="text-gray-600 text-xs">PDF, imágenes, Word, Excel, ZIP, RAR — máx. 20MB</p>
                </div>
              )}
            </div>

            {cargando ? (
              <div className="flex justify-center py-4">
                <Loader2 className="w-5 h-5 text-gray-500 animate-spin" />
              </div>
            ) : archivos.length === 0 ? (
              <p className="text-center text-gray-600 text-sm py-2">No hay archivos en esta carpeta</p>
            ) : (
              <div className="space-y-2">
                {archivos.map((archivo) => (
                  <div key={archivo.id} className="flex items-center gap-3 p-3 rounded-lg bg-gray-800 border border-gray-700 group">
                    <div className="flex-shrink-0">{getIcono(archivo.tipo)}</div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm font-medium truncate">{archivo.nombre}</p>
                      <div className="flex items-center gap-2">
                        <p className="text-gray-500 text-xs">
                          {formatBytes(archivo.tamano)} · {new Date(archivo.createdAt).toLocaleDateString("es-AR")}
                        </p>
                        {archivo.esAnalizable && (
                          <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                            archivo.analisis
                              ? "bg-purple-500/20 text-purple-400"
                              : "bg-yellow-500/20 text-yellow-400"
                          }`}>
                            {archivo.analisis ? "✓ Analizado" : "⏳ Analizando..."}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 flex-shrink-0">
                      {archivo.esAnalizable && (
                        <button
                          onClick={() => setVerAnalisis(archivo)}
                          title="Ver análisis IA"
                          className="p-1.5 rounded-lg text-purple-400 hover:bg-purple-500/20 transition-colors"
                        >
                          <Brain className="w-4 h-4" />
                        </button>
                      )}
                      <a href={archivo.url} target="_blank" rel="noopener noreferrer" title="Ver archivo" className="p-1.5 rounded-lg text-gray-400 hover:bg-gray-700 transition-colors">
                        <Eye className="w-4 h-4" />
                      </a>
                      <a href={archivo.url} download={archivo.nombre} title="Descargar" className="p-1.5 rounded-lg text-gray-400 hover:bg-gray-700 transition-colors">
                        <Download className="w-4 h-4" />
                      </a>
                      <button onClick={() => setConfirmarEliminar(archivo)} title="Eliminar" className="p-1.5 rounded-lg text-gray-400 hover:bg-red-500/20 hover:text-red-400 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}