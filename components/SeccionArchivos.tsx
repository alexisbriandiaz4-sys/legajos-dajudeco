"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import {
  Upload, FileText, Image, File, Trash2, Eye, Zap,
  X, Loader2, Download, FolderOpen, ChevronDown, ChevronUp, CheckCircle, AlertTriangle
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

function getIcono(tipo: string) {
  if (tipo.includes("image")) return <Image className="w-5 h-5 text-blue-400" />;
  if (tipo.includes("pdf")) return <FileText className="w-5 h-5 text-red-400" />;
  return <File className="w-5 h-5 text-gray-400" />;
}

function AnalisisModal({ analisis, onClose, cached }: { analisis: string; onClose: () => void; cached?: boolean }) {
  const lines = analisis.split("\n");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="bg-gray-900 border border-gray-700 rounded-2xl w-full max-w-3xl max-h-[85vh] flex flex-col shadow-2xl">
        <div className="flex items-center justify-between p-5 border-b border-gray-700">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
              <Zap className="w-4 h-4 text-purple-400" />
            </div>
            <div>
              <h2 className="text-white font-semibold">Análisis de respuesta</h2>
              <p className="text-gray-400 text-xs">
                {cached ? "Análisis guardado · Gemini AI" : "Generado con Gemini AI"}
              </p>
            </div>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="overflow-y-auto p-5 flex-1">
          <div className="prose prose-invert prose-sm max-w-none">
            {lines.map((line, i) => {
              if (line.startsWith("## ")) {
                return (
                  <h3 key={i} className="text-purple-300 font-semibold text-sm mt-5 mb-2 flex items-center gap-2">
                    {line.replace("## ", "")}
                  </h3>
                );
              }
              if (line.startsWith("- ")) {
                return (
                  <div key={i} className="flex gap-2 text-gray-300 text-sm mb-1">
                    <span className="text-purple-400 mt-0.5">•</span>
                    <span>{line.replace("- ", "")}</span>
                  </div>
                );
              }
              if (line.startsWith("**") && line.endsWith("**")) {
                return <p key={i} className="text-white font-semibold text-sm mb-1">{line.replace(/\*\*/g, "")}</p>;
              }
              if (line.trim() === "") return <div key={i} className="h-1" />;
              return <p key={i} className="text-gray-300 text-sm mb-1">{line}</p>;
            })}
          </div>
        </div>
        <div className="p-4 border-t border-gray-700">
          <button
            onClick={onClose}
            className="w-full py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-white text-sm transition-colors"
          >
            Cerrar
          </button>
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


export default function SeccionArchivos({ legajoId, nroLegajo }: SeccionArchivosProps) {
  const [archivos, setArchivos] = useState<Archivo[]>([]);
  const [cargando, setCargando] = useState(false);
  const [subiendo, setSubiendo] = useState(false);
  const [progreso, setProgreso] = useState(0);
  const [analizando, setAnalizando] = useState<string | null>(null);
  const [analisisActual, setAnalisisActual] = useState<{ texto: string; cached: boolean } | null>(null);
  const [expandido, setExpandido] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [confirmarEliminar, setConfirmarEliminar] = useState<Archivo | null>(null);
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

  const subirArchivo = async (file: File) => {
    if (file.size > 20 * 1024 * 1024) {
      toast.error("El archivo no puede superar 20MB");
      return;
    }
    setSubiendo(true);
    setProgreso(0);

    // Simular progreso mientras sube
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

  const analizarArchivo = async (archivo: Archivo) => {
    // Si ya tiene análisis guardado, mostrarlo directamente sin llamar a Gemini
    if (archivo.analisis) {
      setAnalisisActual({ texto: archivo.analisis, cached: true });
      return;
    }

    setAnalizando(archivo.id);
    toast.info("Analizando con Gemini AI...");
    try {
      const res = await fetch(`/api/legajos/${legajoId}/analizar`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          url: archivo.url,
          nombre: archivo.nombre,
          archivoId: archivo.id,
        }),
      });
      if (res.ok) {
        const data = await res.json();
        // Actualizar el archivo en el estado local con el análisis guardado
        setArchivos(prev =>
          prev.map(a => a.id === archivo.id ? { ...a, analisis: data.analisis } : a)
        );
        setAnalisisActual({ texto: data.analisis, cached: data.cached });
        if (!data.cached) toast.success("Análisis completado y guardado");
      } else {
        const err = await res.json();
        toast.error(err.error || "Error al analizar");
      }
    } catch {
      toast.error("Error al analizar");
    } finally {
      setAnalizando(null);
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
      {analisisActual && (
        <AnalisisModal
          analisis={analisisActual.texto}
          cached={analisisActual.cached}
          onClose={() => setAnalisisActual(null)}
        />
      )}

      <div className="mt-4 border border-gray-700 rounded-xl overflow-hidden">
        {/* Header colapsable */}
        <button
          onClick={() => setExpandido(!expandido)}
          className="w-full flex items-center justify-between px-4 py-3 bg-gray-800/50 hover:bg-gray-800 transition-colors"
        >
          <div className="flex items-center gap-2">
            <FolderOpen className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-gray-200">
              Carpeta del legajo
            </span>
            {archivos.length > 0 && (
              <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 text-xs">
                {archivos.length} archivo{archivos.length !== 1 ? "s" : ""}
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
            {/* Zona de drop */}
            <div
              onDragOver={e => { e.preventDefault(); setDragOver(true); }}
              onDragLeave={() => setDragOver(false)}
              onDrop={e => { e.preventDefault(); setDragOver(false); handleFiles(e.dataTransfer.files); }}
              onClick={() => inputRef.current?.click()}
              className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all ${
                dragOver
                  ? "border-blue-500 bg-blue-500/10"
                  : "border-gray-600 hover:border-gray-500 hover:bg-gray-800/50"
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
                    <div
                      className="bg-blue-500 h-full rounded-full transition-all duration-300"
                      style={{ width: `${progreso}%` }}
                    />
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

            {/* Lista de archivos */}
            {cargando ? (
              <div className="flex justify-center py-4">
                <Loader2 className="w-5 h-5 text-gray-500 animate-spin" />
              </div>
            ) : archivos.length === 0 ? (
              <p className="text-center text-gray-600 text-sm py-2">
                No hay archivos en esta carpeta
              </p>
            ) : (
              <div className="space-y-2">
                {archivos.map(archivo => (
                  <div
                    key={archivo.id}
                    className="flex items-center gap-3 p-3 rounded-lg bg-gray-800 border border-gray-700 group"
                  >
                    <div className="flex-shrink-0">
                      {getIcono(archivo.tipo)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm font-medium truncate">{archivo.nombre}</p>
                      <p className="text-gray-500 text-xs">
                        {formatBytes(archivo.tamano)} · {new Date(archivo.createdAt).toLocaleDateString("es-AR")}
                        {archivo.esAnalizable && !archivo.analisis && (
                          <span className="ml-2 text-purple-400">· Analizable con IA</span>
                        )}
                        {archivo.analisis && (
                          <span className="ml-2 text-green-400">· Análisis guardado</span>
                        )}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 flex-shrink-0">
                      {archivo.esAnalizable && (
                        <button
                          onClick={() => analizarArchivo(archivo)}
                          disabled={!!analizando}
                          title={archivo.analisis ? "Ver análisis guardado" : "Analizar con IA"}
                          className={`p-1.5 rounded-lg transition-colors disabled:opacity-50 ${
                            archivo.analisis
                              ? "text-green-400 hover:bg-green-500/20"
                              : "text-purple-400 hover:bg-purple-500/20"
                          }`}
                        >
                          {analizando === archivo.id ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                          ) : archivo.analisis ? (
                            <CheckCircle className="w-4 h-4" />
                          ) : (
                            <Zap className="w-4 h-4" />
                          )}
                        </button>
                      )}
                      <a
                        href={archivo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Ver archivo"
                        className="p-1.5 rounded-lg text-gray-400 hover:bg-gray-700 transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                      </a>
                      <a
                        href={archivo.url}
                        download={archivo.nombre}
                        title="Descargar"
                        className="p-1.5 rounded-lg text-gray-400 hover:bg-gray-700 transition-colors"
                      >
                        <Download className="w-4 h-4" />
                      </a>
                      <button
                        onClick={() => setConfirmarEliminar(archivo)}
                        title="Eliminar"
                        className="p-1.5 rounded-lg text-gray-400 hover:bg-red-500/20 hover:text-red-400 transition-colors"
                      >
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