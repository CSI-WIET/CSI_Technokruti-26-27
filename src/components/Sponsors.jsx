import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { SPONSORS } from "../data/siteData";

function Plaque({ name, size = "md" }) {
  const sizes = {
    lg: "px-10 py-8 text-xl sm:text-2xl",
    md: "px-8 py-6 text-lg",
    sm: "px-6 py-4 text-sm",
  };
  return (
    <div
      className={`card-frame flex items-center justify-center text-center font-heading text-parchment-100 transition-shadow hover:shadow-gold ${sizes[size]}`}
    >
      {name}
    </div>
  );
}

const ALL_NAMES = [
  ...(SPONSORS.title || []),
  ...(SPONSORS.platinum || []),
  ...(SPONSORS.gold || []),
  ...(SPONSORS.silver || []),
].map((s) => s.name);

export default function Sponsors() {
  return (
    <section id="sponsors" className="relative overflow-hidden bg-brown-950 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] paper-grain" />
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-14">
        <SectionHeading
          eyebrow="Our Patrons"
          title="Backed by Fellow Investigators"
          subtitle="Technokruti runs on the generosity of the organisations below. Interested in joining the list? Write to us from the contact file."
        />

        <div className="mt-14 flex flex-col gap-12">
          {SPONSORS.title && SPONSORS.title.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto w-full max-w-sm"
            >
              <p className="mb-3 text-center font-type text-[11px] tracking-[0.25em] text-gold-400/80">
                Title Sponsor
              </p>
              <Plaque name={SPONSORS.title[0].name} size="lg" />
            </motion.div>
          )}

          {SPONSORS.platinum && SPONSORS.platinum.length > 0 && (
            <div>
              <p className="mb-4 text-center font-type text-[11px] tracking-[0.25em] text-gold-400/80">
                Platinum
              </p>
              <div className="mx-auto grid max-w-2xl gap-5 sm:grid-cols-2">
                {SPONSORS.platinum.map((s) => (
                  <Plaque key={s.name} name={s.name} size="md" />
                ))}
              </div>
            </div>
          )}

          {SPONSORS.gold && SPONSORS.gold.length > 0 && (
            <div>
              <p className="mb-4 text-center font-type text-[11px] tracking-[0.25em] text-gold-400/80">
                Gold
              </p>
              <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-3">
                {SPONSORS.gold.map((s) => (
                  <Plaque key={s.name} name={s.name} size="sm" />
                ))}
              </div>
            </div>
          )}

          {SPONSORS.silver && SPONSORS.silver.length > 0 && (
            <div>
              <p className="mb-4 text-center font-type text-[11px] tracking-[0.25em] text-gold-400/80">
                Silver
              </p>
              <div className="mx-auto grid max-w-4xl gap-3 sm:grid-cols-4">
                {SPONSORS.silver.map((s) => (
                  <Plaque key={s.name} name={s.name} size="sm" />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="relative mt-16 overflow-hidden border-t border-gold-700/20 py-6">
        <div className="flex w-max animate-marquee gap-12">
          {[...ALL_NAMES, ...ALL_NAMES].map((name, i) => (
            <span
              key={i}
              className="whitespace-nowrap font-type text-xs tracking-widest text-parchment-400/50"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
