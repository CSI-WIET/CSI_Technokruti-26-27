import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ParticleField from "./ParticleField";
import FogLayer from "./FogLayer";
import Typewriter from "./Typewriter";
import { SITE } from "../data/siteData";
import heroCrowd from "../assets/images/hero-crowd.jpg";

function SherlockMark({ className = "" }) {
  // A minimal, original line-art silhouette: deerstalker hat + pipe curl.
  // Not a reproduction of any copyrighted artwork — built from simple
  // geometric strokes evoking the silhouette.
  return (
    <svg
      viewBox="0 0 400 480"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.9" stroke="url(#goldGrad)" strokeWidth="2.5">
        <path d="M120 210 C110 150 150 90 210 85 C270 80 320 120 322 180 C324 210 312 225 300 228 L300 250 C300 250 260 235 210 235 C160 235 118 252 118 252 L120 210 Z" />
        <path d="M118 252 C90 258 70 262 46 258" strokeLinecap="round" />
        <path d="M322 180 C348 176 368 180 386 190" strokeLinecap="round" />
        <path d="M198 236 L192 420 C192 440 206 452 222 452 C238 452 250 440 250 420 L246 238" />
        <path
          d="M250 300 C280 300 300 320 296 345 C293 366 270 372 268 388 C266 400 276 406 284 402"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <linearGradient id="goldGrad" x1="0" y1="0" x2="400" y2="480">
          <stop offset="0%" stopColor="#f0deA0" />
          <stop offset="100%" stopColor="#7c5d1e" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const markY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink"
    >
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.12, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.6, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <motion.img
            src={heroCrowd}
            alt="Technokruti festival crowd beneath a lit stage"
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
            className="h-full w-full object-cover"
            style={{ filter: "sepia(0.3) saturate(1.15) contrast(1.05) brightness(0.5)" }}
          />
        </motion.div>
        <div className="absolute inset-0 bg-ink/40" />
        <FogLayer />
        <ParticleField className="opacity-70" />
        <div className="absolute inset-0 bg-vignette" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(115deg, transparent 0 3px, rgba(0,0,0,0.35) 3px 4px)",
          }}
        />
      </motion.div>

      <motion.div
        style={{ y: markY }}
        className="pointer-events-none absolute -right-16 top-1/2 hidden w-[380px] -translate-y-1/2 opacity-[0.14] sm:block lg:w-[460px]"
      >
        <SherlockMark className="animate-floaty" />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-7 px-6 pt-24 sm:px-10 lg:px-14"
      >
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.15, duration: 0.7 }}
          className="flex items-center gap-3 font-type text-xs tracking-[0.3em] text-gold-400/90"
        >
          <span className="h-px w-8 bg-gold-500/60" />
          CASE FILE NO. 2026 &middot; {SITE.dates}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.3, duration: 0.9, ease: "easeOut" }}
          className="font-display text-5xl leading-[1.05] text-parchment-100 text-glow sm:text-7xl lg:text-[6.2rem]"
        >
          {SITE.name}
        </motion.h1>

        <div className="font-heading text-xl text-gold-300 sm:text-3xl">
          <Typewriter text={SITE.tagline} startDelay={3900} speed={55} />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4.2, duration: 0.8 }}
          className="max-w-xl font-serif text-base leading-relaxed text-parchment-300/85 sm:text-lg"
        >
          {SITE.blurb}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4.4, duration: 0.7 }}
          className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center"
        >
          <button
            data-magnify
            onClick={() =>
              document.getElementById("events")?.scrollIntoView({ behavior: "smooth" })
            }
            className="group relative overflow-hidden border border-gold-400/80 bg-gold-400/10 px-7 py-3.5 font-type text-sm tracking-wide text-gold-100 shadow-gold transition-shadow hover:shadow-gold-lg"
          >
            Investigate the Events
          </button>
          <button
            data-magnify
            onClick={() =>
              document.getElementById("schedule")?.scrollIntoView({ behavior: "smooth" })
            }
            className="gold-underline px-1 py-3.5 text-left font-type text-sm tracking-wide text-parchment-200/90 hover:text-gold-200"
          >
            View the Schedule &rarr;
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.7, duration: 0.8 }}
          className="mt-6 flex flex-wrap gap-x-8 gap-y-3 border-t border-gold-700/25 pt-6 font-type text-xs tracking-wide text-parchment-300/70"
        >
          <span>&#128205; {SITE.venue}</span>
          <span>&#128198; {SITE.dates}</span>
          <span>40+ Teams Expected</span>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-gold-400/70">
          <span className="font-type text-[10px] tracking-[0.25em]">SCROLL</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-8 w-px bg-gradient-to-b from-gold-400 to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}
