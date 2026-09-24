import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import MagnifyReveal from "./MagnifyReveal";
import ImageBanner from "./ImageBanner";
import { ABOUT_CLUES } from "../data/siteData";
import magnifyingMap from "../assets/images/magnifying-map.jpg";

const LEDGER = [
  { label: "Editions Held", value: "III" },
  { label: "Investigators Last Year", value: "1,200+" },
  { label: "Open Cases", value: "13" },
  { label: "Prize Pool", value: "Upto to ₹25,000" },
];

export default function About() {
  return (
    <section id="about" className="relative bg-brown-950 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] paper-grain" />
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
        <SectionHeading
          eyebrow="Dossier / Opened 2026"
          title="Every Festival Needs a Motive"
          subtitle="Read the file below. It explains, in brief, what Technokruti is, who it's for, and why we built it this way."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {ABOUT_CLUES.map((clue, i) => (
            <motion.article
              key={clue.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="card-frame paper-grain relative flex flex-col gap-4 p-7"
            >
              <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-blood-500/70 font-type text-[9px] text-blood-500/90 rotate-[-14deg]">
                FILED
              </div>
              <span className="font-type text-xs tracking-[0.25em] text-gold-400/80">
                {clue.label}
              </span>
              <h3 className="font-heading text-xl text-parchment-100">
                {clue.title}
              </h3>
              <p className="font-serif text-sm leading-relaxed text-parchment-300/80">
                {clue.text}
              </p>
            </motion.article>
          ))}
        </div>

        <ImageBanner
          src={magnifyingMap}
          alt="A hand holding a brass magnifying glass over an inked map of London and a case file"
          eyebrow="Exhibit D"
          caption="It is a capital mistake to theorise before one has data — so we start every case the same way."
          className="mt-16"
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="card-frame lg:col-span-2"
          >
            <div className="border-b border-gold-700/25 px-6 py-4">
              <span className="font-type text-xs tracking-[0.25em] text-gold-400/80">
                Case Ledger
              </span>
            </div>
            <dl className="divide-y divide-gold-700/15">
              {LEDGER.map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between px-6 py-4"
                >
                  <dt className="font-serif text-sm text-parchment-300/75">
                    {row.label}
                  </dt>
                  <dd className="font-heading text-lg text-gold-300">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="card-frame relative flex flex-col justify-center gap-4 p-7 lg:col-span-3"
          >
            <span className="font-type text-xs tracking-[0.25em] text-gold-400/80">
              Examiner's Note &mdash; hover to read
            </span>
            <MagnifyReveal text="It is a capital mistake to theorise before one has data. We built every round of Technokruti the same way we'd approach a case: gather the evidence, question the obvious answer, and only then present a solution. Bring a team, bring a hypothesis, and let the judges poke holes in it." />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
