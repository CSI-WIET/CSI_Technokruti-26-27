import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Replaces the default cursor with a brass magnifying glass on fine-pointer
 * devices. Scales up slightly over anything tagged data-magnify.
 */
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  useEffect(() => {
    const isFine = window.matchMedia?.("(pointer: fine)").matches;
    const prefersReduced = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!isFine || prefersReduced) return;

    setEnabled(true);
    document.documentElement.classList.add("magnify-cursor-active");

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
      const target = e.target;
      setHovering(Boolean(target.closest?.("[data-magnify]")));
    };
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseleave", leave);

    return () => {
      document.documentElement.classList.remove("magnify-cursor-active");
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!enabled) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[999] mix-blend-difference"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
        opacity: visible ? 1 : 0,
      }}
    >
      <motion.svg
        width="46"
        height="46"
        viewBox="0 0 46 46"
        animate={{ scale: hovering ? 1.35 : 1, rotate: hovering ? -12 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 18 }}
      >
        <circle
          cx="19"
          cy="19"
          r="13"
          fill="rgba(211,169,74,0.06)"
          stroke="#e3c574"
          strokeWidth="2.5"
        />
        <line
          x1="28"
          y1="28"
          x2="41"
          y2="41"
          stroke="#e3c574"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      </motion.svg>
    </motion.div>
  );
}
