"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Tema = "dark-blue" | "dark" | "light";

interface ThemeContextType {
  tema: Tema;
  setTema: (t: Tema) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  tema: "dark-blue",
  setTema: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [tema, setTemaState] = useState<Tema>("dark-blue");

  useEffect(() => {
    const guardado = localStorage.getItem("tema") as Tema;
    if (guardado) aplicarTema(guardado);
  }, []);

  function aplicarTema(t: Tema) {
    document.documentElement.classList.remove("theme-dark", "theme-light");
    if (t === "dark") document.documentElement.classList.add("theme-dark");
    if (t === "light") document.documentElement.classList.add("theme-light");
    localStorage.setItem("tema", t);
    setTemaState(t);
  }

  return (
    <ThemeContext.Provider value={{ tema, setTema: aplicarTema }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
