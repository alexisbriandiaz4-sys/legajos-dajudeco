"use client";

import { createContext, useContext, useEffect, useState, useRef, useCallback } from "react";

const INACTIVIDAD_MS = 30 * 60 * 1000; // 30 minutos

interface Usuario {
  id: string;
  nombre: string;
  usuario: string;
  rol: string;
}

interface AuthContextType {
  usuario: Usuario | null;
  cargando: boolean;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  usuario: null,
  cargando: true,
  logout: async () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [cargando, setCargando] = useState(true);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const logout = useCallback(async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    setUsuario(null);
    window.location.href = "/login";
  }, []);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      logout();
    }, INACTIVIDAD_MS);
  }, [logout]);

  useEffect(() => { cargarUsuario(); }, []);

  async function cargarUsuario() {
    try {
      const res = await fetch("/api/auth/me");
      if (res.ok) {
        const data = await res.json();
        setUsuario(data);
      }
    } catch {}
    finally { setCargando(false); }
  }

  // Registrar actividad del usuario para resetear el timer
  useEffect(() => {
    if (!usuario) return;

    const eventos = ["mousemove", "keydown", "click", "scroll", "touchstart"];
    eventos.forEach(e => window.addEventListener(e, resetTimer, { passive: true }));
    resetTimer(); // iniciar el timer al loguear

    return () => {
      eventos.forEach(e => window.removeEventListener(e, resetTimer));
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [usuario, resetTimer]);

  return (
    <AuthContext.Provider value={{ usuario, cargando, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}