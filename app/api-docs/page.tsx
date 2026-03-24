"use client";

import dynamic from 'next/dynamic';
import 'swagger-ui-react/swagger-ui.css';

// Usamos importación dinámica con SSR desactivado para evitar conflictos de React Server Components con Swagger-UI
const SwaggerUI = dynamic(() => import('swagger-ui-react'), { ssr: false });

export default function ApiDocs() {
  return (
    <div className="bg-white min-h-screen text-black">
      <div className="p-4 bg-slate-100 border-b shadow-sm flex items-center justify-between">
         <h1 className="text-xl font-bold text-slate-800">S.A.P Developer Portal</h1>
         <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full border border-blue-200">Uso Restringido</span>
      </div>
      <SwaggerUI url="/openapi.json" />
    </div>
  );
}
