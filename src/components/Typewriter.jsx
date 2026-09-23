import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

/**
 * Types out `text` character by character once it scrolls into view.
 * Respects prefers-reduced-motion by rendering instantly.
 */
export default function Typewriter({
  text,
  as: Tag = "span",
  className = "",
  speed = 28,
  startDelay = 0,
  cursor = true,
  once = true,
  onDone,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-10% 0px -10% 0px" });
  const [shown, setShown] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!inView) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setShown(text);
      setDone(true);
      onDone?.();
      return;
    }

    let i = 0;
    let raf;
    const startTimer = setTimeout(() => {
      const tick = () => {
        i += 1;
        setShown(text.slice(0, i));
        if (i < text.length) {
          raf = setTimeout(tick, speed + Math.random() * 22);
        } else {
          setDone(true);
          onDone?.();
        }
      };
      tick();
    }, startDelay);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, text]);

  return (
    <Tag ref={ref} className={className}>
      <span aria-hidden="true">{shown}</span>
      {cursor && (
        <span
          aria-hidden="true"
          className={`inline-block w-[0.5ch] ${
            done ? "animate-blink" : "opacity-100"
          } text-gold-400`}
        >
          ▌
        </span>
      )}
      <span className="sr-only">{text}</span>
    </Tag>
  );
}
