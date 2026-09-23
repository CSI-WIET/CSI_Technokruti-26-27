import React, { useRef } from "react";

/**
 * Renders the same text twice: a blurred/faded base layer and a sharp,
 * gold-lit layer clipped to a circle that tracks the pointer — a literal
 * magnifying-glass reveal. Falls back to fully-visible text on touch.
 */
export default function MagnifyReveal({ text, className = "" }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      data-magnify
      className={`magnify-reveal relative cursor-none select-none ${className}`}
    >
      <p className="font-type text-sm leading-relaxed text-parchment-300/40 blur-[1.5px] sm:text-base">
        {text}
      </p>
      <p
        aria-hidden="true"
        className="clue-sharp absolute inset-0 font-type text-sm leading-relaxed text-gold-200 text-glow sm:text-base"
      >
        {text}
      </p>
    </div>
  );
}
