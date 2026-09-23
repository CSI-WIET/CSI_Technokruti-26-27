import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { SCHEDULE } from "../data/siteData";

export default function Schedule() {
  const [dayIndex, setDayIndex] = useState(0);
  const day = SCHEDULE[dayIndex];

  return (
    <section id="schedule" className="relative bg-brown-950 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] paper-grain" />
      <div className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-14">
        <SectionHeading
          eyebrow="The Timeline"
          title="Three Days, In Order"
          subtitle="A minute-by-minute account of the investigation, from opening statements to the final reveal."
        />

        <div className="mt-12 flex justify-center gap-3">
          {SCHEDULE.map((d, i) => (
            <button
              key={d.day}
              onClick={() => setDayIndex(i)}
              data-magnify
              className={`flex flex-col items-center gap-1 border px-5 py-3 transition-colors sm:px-7 ${
                dayIndex === i
                  ? "border-gold-400 bg-gold-400/10"
                  : "border-brown-600 hover:border-gold-500/50"
              }`}
            >
              <span
                className={`font-heading text-sm sm:text-base ${
                  dayIndex === i ? "text-gold-200" : "text-parchment-300/70"
                }`}
              >
                {d.day}
              </span>
              <span className="font-type text-[10px] text-parchment-400/60">
                {d.date}
              </span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={day.day}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4 }}
            className="mt-14"
          >
            <p className="mb-8 text-center font-serif italic text-parchment-300/70">
              &ldquo;{day.subtitle}&rdquo;
            </p>

            <ol className="relative flex flex-col gap-8 border-l border-gold-700/30 pl-8 sm:pl-10">
              {day.items.map((item, i) => (
                <motion.li
                  key={item.title}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  className="relative"
                >
                  <span className="absolute -left-[2.35rem] top-1 h-3 w-3 rounded-full border-2 border-gold-400 bg-ink sm:-left-[2.65rem]" />
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
                    <span className="font-type text-sm text-gold-400">
                      {item.time}
                    </span>
                    <span className="font-heading text-base text-parchment-100 sm:text-lg">
                      {item.title}
                    </span>
                  </div>
                  <span className="font-serif text-sm text-parchment-300/60">
                    {item.place}
                  </span>
                </motion.li>
              ))}
            </ol>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
