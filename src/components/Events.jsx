import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import EventModal from "./EventModal";
import ImageBanner from "./ImageBanner";
import { EVENTS, EVENT_GROUPS } from "../data/siteData";
import evidenceBoard from "../assets/images/evidence-board.jpg";

// Pull in every event poster so Vite bundles + hashes them, then look each
// one up by filename (as referenced in EVENTS in siteData.js).
const posterModules = import.meta.glob("../assets/images/events/*.{jpg,jpeg,png}", {
  eager: true,
  import: "default",
});

function getPoster(filename) {
  const entry = Object.entries(posterModules).find(([path]) => path.endsWith(`/${filename}`));
  return entry ? entry[1] : null;
}

function GroupHeading({ eyebrow, title, blurb }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col items-center gap-2 text-center"
    >
      <span className="font-type text-[11px] tracking-[0.3em] text-gold-400/70">
        {eyebrow}
      </span>
      <h3 className="font-heading text-2xl text-parchment-100 sm:text-3xl">
        {title}
      </h3>
      <div className="ornate-divider w-28 sm:w-36" />
      {blurb && (
        <p className="max-w-xl font-serif text-sm text-parchment-300/75 sm:text-base">
          {blurb}
        </p>
      )}
    </motion.div>
  );
}

function EventCard({ event, index, onOpen }) {
  const posterSrc = event.poster ? getPoster(event.poster) : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      whileHover={{ y: -8, rotate: -0.4 }}
      onClick={() => onOpen(event)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen(event);
        }
      }}
      role="button"
      tabIndex={0}
      data-magnify
      className="card-frame paper-grain group relative flex cursor-pointer flex-col overflow-hidden text-left shadow-none transition-shadow hover:shadow-gold"
    >
      <div className="absolute right-3 top-3 z-10 rotate-3 border border-blood-500/60 bg-ink/70 px-2 py-0.5 font-type text-[9px] tracking-wider text-blood-500/90 opacity-80 transition-opacity group-hover:opacity-100">
        ACTIVE CASE
      </div>

      <div className="aspect-[3/4] w-full overflow-hidden bg-brown-900">
        {posterSrc && (
          <img
            src={posterSrc}
            alt={`${event.title} poster`}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </div>

      <div className="flex flex-col gap-3 p-5">
        <h3 className="font-heading text-lg text-parchment-100 group-hover:text-gold-200">
          {event.title}
        </h3>

        <div className="flex items-center justify-between border-t border-gold-700/20 pt-3 font-type text-[11px] text-parchment-300/60">
          <span>Entry: {event.entryFee}</span>
          <span className="text-gold-400">{event.prizePool}</span>
        </div>

        <span className="gold-underline w-fit font-type text-[11px] tracking-wide text-gold-300 group-hover:active">
          Open Dossier &rarr;
        </span>
      </div>
    </motion.div>
  );
}

export default function Events() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="events" className="relative bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
        <SectionHeading
          eyebrow="Open Case Files"
          title="Eleven Cases, One Long Weekend"
          subtitle="Each poster below is its own case file. Click one to open the full dossier: dates, fees, prizes and who to contact."
        />

        <ImageBanner
          src={evidenceBoard}
          alt="An investigation corkboard with photos, notes and red string connecting suspects"
          eyebrow="The Board"
          caption="Pin the evidence. Follow the thread. Twelve cases, three tracks."
          className="mt-14"
        />

        {EVENT_GROUPS.map((group) => {
          const groupEvents = EVENTS.filter((e) => e.group === group.id);
          if (groupEvents.length === 0) return null;

          return (
            <div key={group.id} className="mt-20 first:mt-14">
              <GroupHeading
                eyebrow={group.eyebrow}
                title={group.label}
                blurb={group.blurb}
              />
              <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {groupEvents.map((event, i) => (
                  <EventCard
                    event={event}
                    index={i}
                    key={event.id}
                    onOpen={setSelected}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <EventModal event={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
