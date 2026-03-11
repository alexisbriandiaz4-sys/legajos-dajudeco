import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/lib/auth-context";
import { ThemeProvider } from "@/lib/theme-context";
import { Toaster } from "sonner";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "S.A.P. - Análisis Inteligente de Legajos",
  description: "Sistema de Análisis Policial - Departamento de Delitos Complejos - Fiscalía de Rafaela",
};

import { CsrfInterceptor } from "@/components/CsrfInterceptor";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `
          try {
            const t = localStorage.getItem('tema') || 'dark-blue';
            if (t === 'dark') document.documentElement.classList.add('theme-dark');
            if (t === 'light') document.documentElement.classList.add('theme-light');
          } catch(e) {}
        `}} />
      </head>
      <body className={geist.className}>
        <ThemeProvider>
          <CsrfInterceptor>
            <AuthProvider>
              {children}
            </AuthProvider>
          </CsrfInterceptor>
        </ThemeProvider>
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}