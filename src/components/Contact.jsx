import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { CONTACT } from "../data/siteData";

const { lat, lng, zoom } = CONTACT.map;

// OpenStreetMap embed — no API key, no billing account, works offline-free.
const BBOX_PAD = 0.006;
const OSM_EMBED = `https://www.openstreetmap.org/export/embed.html?bbox=${
  lng - BBOX_PAD
}%2C${lat - BBOX_PAD / 2}%2C${lng + BBOX_PAD}%2C${
  lat + BBOX_PAD / 2
}&layer=mapnik&marker=${lat}%2C${lng}`;

// Points straight at the venue's verified Google Maps listing.
const DIRECTIONS_URL = "https://maps.app.goo.gl/o698wcTW4xfQopan7";
const LARGER_MAP_URL = `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=${zoom}/${lat}/${lng}`;

export default function Contact() {
  return (
    <section id="contact" className="relative bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-14">
        <SectionHeading
          eyebrow="The Last Known Address"
          title="Find Us Here"
          subtitle="Questions about registration, events, or sponsorship? Reach us directly — or follow the map to the scene."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Live map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative overflow-hidden border border-gold-700/30 lg:col-span-3"
          >
            <div className="flex items-center justify-between border-b border-gold-700/25 bg-brown-950/60 px-5 py-3">
              <span className="font-type text-xs tracking-[0.25em] text-gold-400/80">
                Scene of the Case
              </span>
              <span className="flex items-center gap-2 font-type text-[10px] tracking-wide text-parchment-300/60">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-400" />
                </span>
                LIVE
              </span>
            </div>

            <div className="relative h-[340px] sm:h-[420px]">
              <iframe
                title={`Map showing ${CONTACT.venueName}`}
                src={OSM_EMBED}
                className="absolute inset-0 h-full w-full"
                style={{ border: 0, filter: "grayscale(0.35) sepia(0.45) contrast(1.05) brightness(0.88)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              {/* Gold vignette so the map sits inside the Victorian palette */}
              <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_70px_rgba(7,7,10,0.75)]" />
            </div>

            <div className="flex flex-col gap-3 border-t border-gold-700/25 bg-brown-950/60 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-serif text-sm text-parchment-200/85">
                {CONTACT.venueName}
              </p>
              <div className="flex gap-4">
                <a
                  href={DIRECTIONS_URL}
                  target="_blank"
                  rel="noreferrer"
                  data-magnify
                  className="gold-underline whitespace-nowrap font-type text-[11px] tracking-wide text-gold-300"
                >
                  Get Directions &rarr;
                </a>
                <a
                  href={LARGER_MAP_URL}
                  target="_blank"
                  rel="noreferrer"
                  data-magnify
                  className="gold-underline whitespace-nowrap font-type text-[11px] tracking-wide text-parchment-300/75"
                >
                  Larger Map
                </a>
              </div>
            </div>
          </motion.div>

          {/* Details */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="card-frame flex flex-col gap-4 p-7"
            >
              <span className="font-type text-xs tracking-[0.25em] text-gold-400/80">
                Direct Lines
              </span>
              <a
                href={`mailto:${CONTACT.email}`}
                data-magnify
                className="font-serif text-parchment-100 hover:text-gold-200"
              >
                {CONTACT.email}
              </a>
              <a
                href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                data-magnify
                className="font-serif text-parchment-100 hover:text-gold-200"
              >
                {CONTACT.phone}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="card-frame flex flex-col gap-3 p-7"
            >
              <span className="font-type text-xs tracking-[0.25em] text-gold-400/80">
                The Venue
              </span>
              <p className="font-heading text-base text-parchment-100">
                {CONTACT.venueName}
              </p>
              <p className="font-serif text-sm leading-relaxed text-parchment-300/75">
                {CONTACT.address}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="card-frame flex flex-col gap-4 p-7"
            >
              <span className="font-type text-xs tracking-[0.25em] text-gold-400/80">
                Follow the Trail
              </span>
              <div className="flex flex-wrap gap-3">
                {CONTACT.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    data-magnify
                    className="gold-underline font-type text-xs tracking-wide text-parchment-300/80 hover:text-gold-200"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
