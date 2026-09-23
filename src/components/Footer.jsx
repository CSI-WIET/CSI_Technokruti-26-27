import React from "react";
import { NAV_LINKS, SITE } from "../data/siteData";

export default function Footer() {
  const goTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="relative border-t border-gold-700/20 bg-brown-950 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 text-center sm:px-10">
        <div className="flex items-center gap-2.5 font-heading text-base text-parchment-100">
          <svg width="20" height="20" viewBox="0 0 26 26">
            <circle cx="10" cy="10" r="7.5" fill="none" stroke="#d1a94a" strokeWidth="2" />
            <line x1="15.5" y1="15.5" x2="23" y2="23" stroke="#d1a94a" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
          {SITE.name}
        </div>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => goTo(link.id)}
              data-magnify
              className="font-type text-[11px] tracking-wide text-parchment-400/60 hover:text-gold-300"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <p className="font-serif italic text-sm text-parchment-400/50">
          &ldquo;{SITE.tagline}&rdquo;
        </p>

        <p className="font-type text-[10px] tracking-wide text-parchment-500/40">
          &copy; {new Date().getFullYear()} {SITE.name}. Case file closed, until next year.
        </p>
      </div>
    </footer>
  );
}
