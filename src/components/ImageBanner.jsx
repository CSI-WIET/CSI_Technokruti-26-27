import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * A full-width photographic "break" between blocks of a section —
 * the image drifts (parallax) and scales in slightly as it enters
 * view, with a caption pinned to the bottom edge.
 */
export default function ImageBanner({
  src,
  alt,
  caption,
  eyebrow,
  height = "h-[42vh] sm:h-[50vh] lg:h-[56vh]",
  className = "",
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.08]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`relative isolate overflow-hidden border border-gold-700/25 ${height} ${className}`}
    >
      <motion.img
        src={src}
        alt={alt}
        style={{ y, scale }}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-ink/10" />
      <div className="absolute inset-0 bg-ink/25" />
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "linear-gradient(180deg, rgba(7,7,10,0.55) 0%, rgba(7,7,10,0) 30%, rgba(7,7,10,0) 60%, rgba(7,7,10,0.75) 100%)",
        }}
      />

      {(eyebrow || caption) && (
        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1.5 p-6 sm:p-8">
          {eyebrow && (
            <span className="font-type text-xs tracking-[0.25em] text-gold-400">
              {eyebrow}
            </span>
          )}
          {caption && (
            <p className="max-w-xl font-serif text-lg italic text-parchment-100 text-glow sm:text-xl">
              {caption}
            </p>
          )}
        </div>
      )}
    </motion.div>
  );
}
