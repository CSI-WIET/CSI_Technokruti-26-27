import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import ImageBanner from "./ImageBanner";
import { FACULTY, CORE_COMMITTEE } from "../data/siteData";
import workshop from "../assets/images/workshop.jpg";

// Pull in every bureau photo so Vite bundles + hashes them, then look each
// one up by filename (as referenced in FACULTY/CORE_COMMITTEE in siteData.js).
const photoModules = import.meta.glob("../assets/images/bureau/*.{jpg,jpeg,png}", {
  eager: true,
  import: "default",
});

function getPhoto(filename) {
  const entry = Object.entries(photoModules).find(([path]) => path.endsWith(`/${filename}`));
  return entry ? entry[1] : null;
}

function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

function GitHubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2C6.48 2 2 6.58 2 12.2c0 4.49 2.87 8.3 6.84 9.64.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.37-3.37-1.37-.46-1.2-1.11-1.52-1.11-1.52-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.9 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.74 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.9-1.33 2.74-1.05 2.74-1.05.56 1.43.21 2.48.1 2.74.64.72 1.03 1.63 1.03 2.75 0 3.93-2.35 4.79-4.58 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.03 10.03 0 0 0 22 12.2C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6 8.5 7 8.5-7" />
    </svg>
  );
}

const ACCENTS = {
  gold: {
    cardFrame: "border border-gold-400/25 bg-gradient-to-br from-[rgba(32,21,13,0.9)] to-[rgba(11,10,13,0.94)]",
    ring: "border-gold-400/60",
    role: "text-gold-400",
    tag: "text-gold-500/80",
    linkBorder: "border-gold-400/40 text-gold-300 hover:border-gold-300 hover:text-gold-100",
  },
  blood: {
    cardFrame: "border border-blood-500/35 bg-gradient-to-br from-[rgba(37,15,15,0.92)] to-[rgba(11,10,13,0.94)]",
    ring: "border-blood-500/70",
    role: "text-parchment-100/90",
    tag: "text-blood-500/90",
    linkBorder: "border-blood-500/45 text-parchment-200 hover:border-blood-500 hover:text-parchment-50",
  },
};

function GroupHeading({ eyebrow, title, subtitle }) {
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
      {subtitle && (
        <p className="max-w-xl font-serif text-sm text-parchment-300/75 sm:text-base">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

function TeamCard({ member, index, accent = "gold" }) {
  const theme = ACCENTS[accent];
  const photoSrc = member.photo ? getPhoto(member.photo) : null;
  const links = [
    member.linkedin && { href: member.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
    member.github && { href: member.github, label: "GitHub", Icon: GitHubIcon },
    member.email && { href: `mailto:${member.email}`, label: "Email", Icon: MailIcon },
  ].filter(Boolean);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group [perspective:1200px]"
      data-magnify
      tabIndex={0}
    >
      <div className="relative h-64 w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus-visible:[transform:rotateY(180deg)]">
        {/* Front */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-sm p-6 text-center [backface-visibility:hidden] ${theme.cardFrame}`}>
          {photoSrc ? (
            <img
              src={photoSrc}
              alt={member.name}
              className={`h-20 w-20 rounded-full border-2 object-cover object-top ${theme.ring}`}
            />
          ) : (
            <Silhouette />
          )}
          <h3 className="font-heading text-lg text-parchment-100">
            {member.name}
          </h3>
          <span className={`font-type text-xs tracking-wide ${theme.role}`}>
            {member.role}
          </span>
        </div>

        {/* Back */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-sm p-6 text-center [backface-visibility:hidden] [transform:rotateY(180deg)] ${theme.cardFrame}`}>
          <span className={`font-type text-[10px] tracking-[0.2em] ${theme.tag}`}>
            {member.role}
          </span>
          {links.length > 0 ? (
            <div className="flex items-center gap-4">
              {links.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={label === "Email" ? undefined : "_blank"}
                  rel={label === "Email" ? undefined : "noopener noreferrer"}
                  aria-label={`${member.name} on ${label}`}
                  onClick={(e) => e.stopPropagation()}
                  className={`rounded-full border p-2.5 transition-colors ${theme.linkBorder}`}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          ) : (
            <p className="font-serif text-sm italic leading-relaxed text-parchment-200/60">
              Contact details coming soon.
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Team() {
  return (
    <section id="team" className="relative bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
        <SectionHeading
          eyebrow="The Investigators"
          title="Meet the Bureau"
          subtitle="The mentors who guide the case and the students who build it. Hover a card to see contact details."
        />

        <ImageBanner
          src={workshop}
          alt="Students in a lamplit workshop assembling a mechanical, glowing-eyed automaton"
          eyebrow="Behind the Scenes"
          caption="Every fixture on this page was wired, tested and re-wired by the Bureau."
          className="mt-14"
        />

        {/* Faculty */}
        <div className="mt-20">
          <GroupHeading
            eyebrow="Case Advisors"
            title="Faculty Coordinators"
            subtitle="The professors who oversee every case file before it reaches the floor."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FACULTY.map((member, i) => (
              <TeamCard member={member} index={i} accent="blood" key={member.name} />
            ))}
          </div>
        </div>

        {/* Core Committee */}
        <div className="mt-20">
          <GroupHeading
            eyebrow="The Investigators"
            title="Core Committee"
            subtitle="The students who spent the year building the puzzles you're about to solve."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CORE_COMMITTEE.map((member, i) => (
              <TeamCard member={member} index={i} accent="gold" key={member.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
