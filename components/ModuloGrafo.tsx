"use client";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { SkeletonLoader } from "./ui/SkeletonLoader";

const GrafoDinamico = dynamic(() => import("./GrafoDinamico"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] mt-4 border border-[var(--border)] rounded-xl overflow-hidden glass-panel p-6 flex flex-col gap-4">
      <SkeletonLoader height="30px" width="200px" borderRadius="8px" />
      <SkeletonLoader height="100%" borderRadius="12px" />
    </div>
  ),
});

interface ModuloGrafoProps {
  legajoId: string;
}

export default function ModuloGrafo({ legajoId }: ModuloGrafoProps) {
  return (
    <div className="w-full">
      <Suspense fallback={<SkeletonLoader height="500px" borderRadius="12px" />}>
        <GrafoDinamico legajoId={legajoId} />
      </Suspense>
    </div>
  );
}
