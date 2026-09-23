import React from "react";
import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}) {
  const alignment =
    align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`flex flex-col gap-4 ${alignment}`}
    >
      {eyebrow && (
        <span className="font-type text-xs tracking-[0.3em] text-gold-400/80">
          {eyebrow}
        </span>
      )}
      <h2 className="font-heading text-3xl text-parchment-100 sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {align === "center" && <div className="ornate-divider w-40 sm:w-56" />}
      {subtitle && (
        <p className="max-w-2xl font-serif text-base leading-relaxed text-parchment-300/85 sm:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
