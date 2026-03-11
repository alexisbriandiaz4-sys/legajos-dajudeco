"use client";

import { createContext, useContext, useEffect, useState, useRef, useCallback } from "react";

const INACTIVIDAD_MS  = 30 * 60 * 1000;  // 30 minutos sin actividad → logout
const REFRESH_CADA_MS =  6 * 60 * 60 * 1000;  // intentar refresh cada 6 horas

interface Usuario {
  id: string;
  nombre: string;
  usuario: string;
  rol: 'admin' | 'investigador';
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
  const [usuario, setUsuario]   = useState<Usuario | null>(null);
  const [cargando, setCargando] = useState(true);
  const timerInactividad        = useRef<ReturnType<typeof setTimeout> | null>(null);
  const timerRefresh            = useRef<ReturnType<typeof setInterval> | null>(null);

  // ── Logout ──────────────────────────────────────────────────────────────
  const logout = useCallback(async () => {
    if (timerRefresh.current) clearInterval(timerRefresh.current);
    await fetch("/api/auth/logout", { method: "POST" });
    setUsuario(null);
    window.location.href = "/login";
  }, []);

  // ── Reset timer de inactividad ───────────────────────────────────────────
  const resetTimer = useCallback(() => {
    if (timerInactividad.current) clearTimeout(timerInactividad.current);
    timerInactividad.current = setTimeout(() => logout(), INACTIVIDAD_MS);
  }, [logout]);

  // ── Refresh silencioso del token ─────────────────────────────────────────
  const intentarRefresh = useCallback(async () => {
    try {
      const res = await fetch("/api/auth/refresh", { method: "POST" });
      if (!res.ok) {
        // Token inválido o usuario inactivo → logout silencioso
        await logout();
      }
    } catch {
      // Error de red — no cerrar sesión, intentar la próxima vez
    }
  }, [logout]);

  // ── Cargar usuario al iniciar ────────────────────────────────────────────
  useEffect(() => {
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
    cargarUsuario();
  }, []);

  // ── Eventos de actividad + timer de inactividad ──────────────────────────
  useEffect(() => {
    if (!usuario) return;

    const eventos = ["mousemove", "keydown", "click", "scroll", "touchstart"];
    eventos.forEach(e => window.addEventListener(e, resetTimer, { passive: true }));
    resetTimer();

    return () => {
      eventos.forEach(e => window.removeEventListener(e, resetTimer));
      if (timerInactividad.current) clearTimeout(timerInactividad.current);
    };
  }, [usuario, resetTimer]);

  // ── Refresh automático cada 6 horas ─────────────────────────────────────
  useEffect(() => {
    if (!usuario) return;

    // Primer refresh a los 6 horas, luego cada 6 horas
    timerRefresh.current = setInterval(intentarRefresh, REFRESH_CADA_MS);

    return () => {
      if (timerRefresh.current) clearInterval(timerRefresh.current);
    };
  }, [usuario, intentarRefresh]);

  return (
    <AuthContext.Provider value={{ usuario, cargando, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}