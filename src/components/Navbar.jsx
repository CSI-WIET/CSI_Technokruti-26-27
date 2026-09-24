import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, SITE } from "../data/siteData";


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(
      Boolean
    );
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const goTo = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-gold-700/30 bg-ink/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <button
          onClick={() => goTo("hero")}
          className="flex items-center gap-2.5 font-heading text-lg tracking-wide text-parchment-100"
          data-magnify
        >
          <svg width="26" height="26" viewBox="0 0 26 26" className="shrink-0">
            <circle cx="10" cy="10" r="7.5" fill="none" stroke="#d1a94a" strokeWidth="2" />
            <line x1="15.5" y1="15.5" x2="23" y2="23" stroke="#d1a94a" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
          <span className="text-glow">{SITE.name}</span>
        </button>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => goTo(link.id)}
              data-magnify
              className={`gold-underline font-type text-[13px] tracking-wide transition-colors ${
                active === link.id
                  ? "active text-gold-300"
                  : "text-parchment-300/80 hover:text-gold-200"
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => goTo("events")}
            data-magnify
            className="border border-gold-500/60 px-4 py-2 font-type text-[12px] tracking-wide text-gold-200 transition-all hover:bg-gold-500/10 hover:shadow-gold"
          >
            Enroll Now
          </button>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col gap-1.5 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <motion.span
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="h-[2px] w-7 bg-gold-300"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="h-[2px] w-7 bg-gold-300"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="h-[2px] w-7 bg-gold-300"
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden border-t border-gold-700/30 bg-ink/95 backdrop-blur-md lg:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => goTo(link.id)}
                  className={`py-3 text-left font-type text-sm tracking-wide ${
                    active === link.id ? "text-gold-300" : "text-parchment-300/80"
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
              <button
                onClick={() => goTo("contact")}
                className="mt-2 border border-gold-500/60 px-4 py-3 text-center font-type text-[12px] tracking-wide text-gold-200"
              >
                Enroll Now
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
