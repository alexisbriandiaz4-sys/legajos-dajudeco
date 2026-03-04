"use client";

import { useState } from "react";

export default function LoginPage() {
  const [form, setForm] = useState({ usuario: "", password: "" });
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(false);

  async function handleLogin() {
    if (!form.usuario || !form.password) { setError("Completá todos los campos"); return; }
    setCargando(true);
    setError("");
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error); return; }
      window.location.href = "/";
    } catch {
      setError("Error al conectar con el servidor");
    } finally {
      setCargando(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <span className="text-5xl mb-4 block">🔍</span>
          <h1 className="text-2xl font-bold text-white">Sistema de Legajos</h1>
          <p className="text-slate-400 text-sm mt-1">Departamento de Delitos Complejos</p>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 space-y-4">
          <div>
            <label className="text-sm text-slate-400 mb-1 block">Usuario</label>
            <input
              value={form.usuario}
              onChange={e => setForm({ ...form, usuario: e.target.value })}
              onKeyDown={e => e.key === "Enter" && handleLogin()}
              className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-slate-400"
              placeholder="tu usuario"
              autoComplete="username"
            />
          </div>
          <div>
            <label className="text-sm text-slate-400 mb-1 block">Contraseña</label>
            <input
              type="password"
              value={form.password}
              onChange={e => setForm({ ...form, password: e.target.value })}
              onKeyDown={e => e.key === "Enter" && handleLogin()}
              className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-slate-400"
              placeholder="••••••••"
              autoComplete="current-password"
            />
          </div>

          {error && <p className="text-red-400 text-sm text-center">{error}</p>}

          <button
            onClick={handleLogin}
            disabled={cargando}
            className="w-full bg-blue-600 text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-700 transition disabled:opacity-50"
          >
            {cargando ? "Ingresando..." : "Ingresar"}
          </button>
        </div>

        <p className="text-center text-slate-600 text-xs mt-6">
          Policía de Investigaciones · Uso exclusivo interno
        </p>
      </div>
    </div>
  );
}