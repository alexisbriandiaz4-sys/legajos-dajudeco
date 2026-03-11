"use client";

import { useState } from "react";

export default function LoginPage() {
  const [form, setForm] = useState({ usuario: "", password: "" });
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(false);

  async function handleLogin() {
    if (!form.usuario || !form.password) { 
      setError("Completá todos los campos"); 
      return; 
    }

    setCargando(true);
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error);
        return;
      }

      window.location.href = "/";
    } catch {
      setError("Error al conectar con el servidor");
    } finally {
      setCargando(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[#020617] relative overflow-hidden">

  {/* grid fondo */}
  <div
    className="absolute inset-0 opacity-[0.05]"
    style={{
      backgroundImage: `
        linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
      `,
      backgroundSize: "40px 40px"
    }}
  />

      {/* luces fondo */}
      <div className="absolute w-[600px] h-[600px] bg-blue-500/20 blur-[140px] rounded-full -top-40 -left-40" />
      <div className="absolute w-[500px] h-[500px] bg-indigo-500/20 blur-[140px] rounded-full -bottom-40 -right-40" />

      <div className="relative w-full max-w-sm">

       {/* Logo */}
<div className="text-center mb-10">
  <img src="/logo.png" alt="S.A.P." className="mx-auto w-32" />
</div>

        {/* Caja login */}
        <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 space-y-4 shadow-2xl">

          <div>
            <label className="text-sm text-slate-300 mb-1 block">
              Usuario
            </label>

            <input
              value={form.usuario}
              onChange={e => setForm({ ...form, usuario: e.target.value })}
              onKeyDown={e => e.key === "Enter" && handleLogin()}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-blue-500"
              placeholder="tu usuario"
              autoComplete="username"
            />
          </div>

          <div>
            <label className="text-sm text-slate-300 mb-1 block">
              Contraseña
            </label>

            <input
              type="password"
              value={form.password}
              onChange={e => setForm({ ...form, password: e.target.value })}
              onKeyDown={e => e.key === "Enter" && handleLogin()}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-blue-500"
              placeholder="••••••••"
              autoComplete="current-password"
            />
          </div>

          {error && (
            <p className="text-red-400 text-sm text-center">
              {error}
            </p>
          )}

          <button
            onClick={handleLogin}
            disabled={cargando}
            className="w-full bg-blue-600 text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-700 transition disabled:opacity-50"
          >
            {cargando ? "Ingresando..." : "Acceder al sistema"}
          </button>
        </div>

        <p className="text-center text-slate-500 text-xs mt-6">
          Policía de Investigaciones · Acceso restringido
        </p>

      </div>
    </div>
  );
}