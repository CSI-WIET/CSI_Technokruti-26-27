import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const posterModules = import.meta.glob("../assets/images/events/*.{jpg,jpeg,png}", {
  eager: true,
  import: "default",
});

function getPoster(filename) {
  const entry = Object.entries(posterModules).find(([path]) => path.endsWith(`/${filename}`));
  return entry ? entry[1] : null;
}

export default function EventModal({ event, onClose }) {
  useEffect(() => {
    if (!event) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [event, onClose]);

  const posterSrc = event?.poster ? getPoster(event.poster) : null;

  return (
    <AnimatePresence>
      {event && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <motion.div
            className="absolute inset-0 bg-ink/85 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="event-modal-title"
            initial={{ opacity: 0, scale: 0.9, rotateX: -8, y: 30 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 16 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformPerspective: 1200 }}
            className="card-frame paper-grain relative z-10 grid max-h-[85vh] w-full max-w-3xl grid-cols-1 overflow-y-auto border-2 border-gold-600/40 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]"
          >
            <button
              onClick={onClose}
              data-magnify
              aria-label="Close dossier"
              className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center border border-gold-500/50 bg-ink/70 text-gold-300 transition-colors hover:bg-gold-500/10"
            >
              &#10005;
            </button>

            {posterSrc && (
              <div className="max-h-64 overflow-hidden sm:max-h-none">
                <img
                  src={posterSrc}
                  alt={`${event.title} poster`}
                  className="h-full w-full object-cover object-top"
                />
              </div>
            )}

            <div className="p-7 sm:p-8">
              <div className="absolute left-0 top-10 hidden h-px w-10 bg-blood-500/70 sm:top-14" />

              <span className="font-type text-xs tracking-[0.25em] text-gold-500/80">
                {event.date}
              </span>

              <h3
                id="event-modal-title"
                className="mt-3 font-heading text-2xl text-parchment-100 sm:text-3xl"
              >
                {event.title}
              </h3>

              <div className="mt-6 grid grid-cols-2 gap-3 border-y border-gold-700/25 py-5">
                {[
                  ["Prize Pool", event.prizePool],
                  ["Entry Fee", event.entryFee],
                ].map(([label, value]) => (
                  <div key={label} className="flex flex-col gap-1">
                    <span className="font-type text-[10px] tracking-wide text-parchment-400/60">
                      {label}
                    </span>
                    <span className="font-heading text-sm text-gold-300 sm:text-base">
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              {event.coordinators?.length > 0 && (
                <div className="mt-6">
                  <span className="font-type text-xs tracking-[0.25em] text-gold-400/80">
                    For Queries
                  </span>
                  <ul className="mt-3 flex flex-col gap-2.5">
                    {event.coordinators.map((c) => (
                      <li
                        key={c.name}
                        className="flex items-center justify-between gap-3 font-serif text-sm leading-relaxed text-parchment-300/80"
                      >
                        <span>{c.name}</span>
                        <a
                          href={`tel:${c.phone}`}
                          data-magnify
                          className="font-type text-xs tracking-wide text-gold-300 hover:text-gold-100"
                        >
                          {c.phone}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {event.registrationLink && (
                  <a
                    href={event.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-magnify
                    className="border border-gold-400/80 bg-gold-400/10 px-6 py-3 text-center font-type text-sm tracking-wide text-gold-100 shadow-gold transition-shadow hover:shadow-gold-lg"
                  >
                    Register Now
                  </a>
                )}
                <button
                  onClick={onClose}
                  data-magnify
                  className="gold-underline px-1 py-3 font-type text-sm tracking-wide text-parchment-300/80 hover:text-gold-200"
                >
                  Back to All Cases
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
