import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Typewriter from "./Typewriter";
import { SITE } from "../data/siteData";
import foggyAlley from "../assets/images/foggy-alley.jpg";

export default function ClosingCTA() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.18, 1.1, 1.18]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);

  return (
    <section
      ref={ref}
      className="relative isolate flex min-h-[70vh] items-center overflow-hidden bg-ink"
      aria-label="Closing statement"
    >
      <motion.img
        src={foggyAlley}
        alt="A detective crouched in a foggy cobblestone alley, tracing glowing footprints"
        style={{ y: imgY, scale: imgScale }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/55" />
      <div className="absolute inset-0 bg-vignette" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/40" />

      <motion.div
        style={{ y: contentY }}
        className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center gap-6 px-6 py-24 text-center sm:px-10"
      >
        <span className="font-type text-xs tracking-[0.3em] text-gold-400/90">
          ONE LAST CLUE
        </span>

        <h2 className="font-heading text-3xl text-parchment-100 text-glow sm:text-4xl md:text-5xl">
          <Typewriter text={`${SITE.name} — ${SITE.tagline}`} speed={40} />
        </h2>

        <p className="max-w-xl font-serif text-base leading-relaxed text-parchment-300/85 sm:text-lg">
          The trail ends where you decide to start. Register a case, bring your
          team, and see how far the evidence takes you.
        </p>

        <button
          data-magnify
          onClick={() =>
            document.getElementById("events")?.scrollIntoView({ behavior: "smooth" })
          }
          className="mt-2 border border-gold-400/80 bg-gold-400/10 px-8 py-3.5 font-type text-sm tracking-wide text-gold-100 shadow-gold transition-shadow hover:shadow-gold-lg"
        >
          Choose Your Case
        </button>
      </motion.div>
    </section>
  );
}
