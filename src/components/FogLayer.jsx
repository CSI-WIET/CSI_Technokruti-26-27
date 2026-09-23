import React from "react";

/**
 * Purely decorative, GPU-cheap fog: a couple of huge blurred radial blobs
 * drifting slowly. No JS animation loop — keeps scroll perf smooth.
 */
export default function FogLayer({ className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div
        className="absolute -left-1/4 top-1/3 h-[70vh] w-[70vh] rounded-full opacity-40 blur-3xl animate-drift"
        style={{
          background:
            "radial-gradient(circle, rgba(190,160,110,0.16) 0%, rgba(190,160,110,0) 70%)",
        }}
      />
      <div
        className="absolute -right-1/4 top-0 h-[60vh] w-[60vh] rounded-full opacity-30 blur-3xl animate-drift-reverse"
        style={{
          background:
            "radial-gradient(circle, rgba(120,90,50,0.18) 0%, rgba(120,90,50,0) 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[50vh] w-[80vh] rounded-full opacity-30 blur-3xl animate-drift"
        style={{
          animationDuration: "40s",
          background:
            "radial-gradient(circle, rgba(211,169,74,0.10) 0%, rgba(211,169,74,0) 70%)",
        }}
      />
    </div>
  );
}
