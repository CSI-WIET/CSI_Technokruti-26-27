import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Typewriter from "./Typewriter";
import introVideo from "../assets/video/intro.mp4";
import introPoster from "../assets/video/intro-poster.jpg";
import { SITE } from "../data/siteData";

const CORNER_POSITIONS = [
  "top-3 left-3 border-l border-t sm:top-6 sm:left-6",
  "top-3 right-3 border-r border-t sm:top-6 sm:right-6",
  "bottom-3 left-3 border-b border-l sm:bottom-6 sm:left-6",
  "bottom-3 right-3 border-b border-r sm:bottom-6 sm:right-6",
];

export default function IntroVideo({ onFinish }) {
  const videoRef = useRef(null);

  // Resolved synchronously so reduced-motion users never see a single
  // frame of the clip flash before it's skipped.
  const [phase, setPhase] = useState(() =>
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
      ? "done"
      : "playing"
  ); // playing -> wipe -> done

  const [muted, setMuted] = useState(true);
  const [needsTap, setNeedsTap] = useState(false);
  const [showSkip, setShowSkip] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (phase === "done") {
      onFinish?.();
      return;
    }

    const skipTimer = setTimeout(() => setShowSkip(true), 1000);

    const v = videoRef.current;
    if (v) {
      v.muted = true;
      const playPromise = v.play();
      if (playPromise?.catch) {
        playPromise.catch(() => setNeedsTap(true));
      }
    }

    return () => clearTimeout(skipTimer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const finish = () => {
    if (phase !== "playing") return;
    videoRef.current?.pause();
    setPhase("wipe");
    setTimeout(() => {
      setPhase("done");
      onFinish?.();
    }, 900);
  };

  const handleTap = () => {
    setNeedsTap(false);
    videoRef.current?.play().catch(() => {});
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  const handleTimeUpdate = () => {
    const v = videoRef.current;
    if (!v || !v.duration) return;
    setProgress((v.currentTime / v.duration) * 100);
  };

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-[999] overflow-hidden bg-ink"
          initial={{ clipPath: "circle(150% at 50% 50%)" }}
          animate={{
            clipPath:
              phase === "wipe"
                ? "circle(0% at 50% 50%)"
                : "circle(150% at 50% 50%)",
          }}
          exit={{ clipPath: "circle(0% at 50% 50%)" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <video
            ref={videoRef}
            src={introVideo}
            poster={introPoster}
            muted
            playsInline
            preload="auto"
            onEnded={finish}
            onTimeUpdate={handleTimeUpdate}
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Victorian tint so the clip reads as part of the site, not a bolted-on video */}
          <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-transparent to-ink/75" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(211,169,74,0.08) 0%, rgba(0,0,0,0.05) 45%, rgba(0,0,0,0.6) 100%)",
            }}
          />

          {/* Viewfinder frame */}
          <div className="pointer-events-none absolute inset-3 border border-gold-400/25 sm:inset-6" />
          {CORNER_POSITIONS.map((pos) => (
            <div
              key={pos}
              className={`pointer-events-none absolute h-6 w-6 border-gold-400/70 ${pos}`}
            />
          ))}

          {/* Progress line */}
          <div className="absolute inset-x-0 top-0 h-[3px] bg-brown-800/50">
            <div
              className="h-full bg-gradient-to-r from-gold-600 via-gold-300 to-gold-500 transition-[width] duration-150 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Lower-third title card */}
          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent p-6 pt-16 sm:p-10 sm:pt-24">
            <span className="font-type text-[11px] tracking-[0.3em] text-gold-400/90">
              CASE FILE NO. 2026
            </span>
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <h1 className="font-display text-3xl text-parchment-100 text-glow sm:text-4xl">
                {SITE.name}
              </h1>
              <span className="font-heading text-sm text-gold-300 sm:text-base">
                <Typewriter text={SITE.tagline} speed={45} startDelay={350} />
              </span>
            </div>
          </div>

          {/* Skip */}
          <AnimatePresence>
            {showSkip && (
              <motion.button
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                onClick={finish}
                data-magnify
                className="absolute right-4 top-4 z-10 flex items-center gap-2 border border-gold-400/50 bg-ink/50 px-4 py-2 font-type text-[11px] tracking-wide text-gold-200 backdrop-blur-sm transition-colors hover:bg-gold-400/10 sm:right-8 sm:top-8"
              >
                Skip Intro
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M2 1l4.5 5L2 11M6.5 1L11 6l-4.5 5"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.button>
            )}
          </AnimatePresence>

          {/* Mute toggle */}
          <button
            onClick={toggleMute}
            data-magnify
            aria-label={muted ? "Unmute intro" : "Mute intro"}
            className="absolute bottom-24 right-4 z-10 flex h-10 w-10 items-center justify-center border border-gold-400/50 bg-ink/50 text-gold-200 backdrop-blur-sm transition-colors hover:bg-gold-400/10 sm:bottom-28 sm:right-8"
          >
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
              <path
                d="M2 6.2h2.6L8.3 3v11L4.6 10.8H2z"
                fill="currentColor"
                opacity="0.9"
              />
              {muted ? (
                <path
                  d="M11 5.5l4 6M15 5.5l-4 6"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M11 5.3c1.3 1 2 2.1 2 3.4s-.7 2.4-2 3.4M12.7 3.4c2 1.5 3.1 3.3 3.1 5.3s-1.1 3.8-3.1 5.3"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  fill="none"
                />
              )}
            </svg>
          </button>

          {/* Autoplay-blocked fallback */}
          <AnimatePresence>
            {needsTap && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleTap}
                data-magnify
                className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 bg-ink/75 backdrop-blur-sm"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold-400/80">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M7 4.5l11 6.5-11 6.5z" fill="#e3c574" />
                  </svg>
                </span>
                <span className="font-type text-xs tracking-widest text-gold-200">
                  Tap to Begin the Case
                </span>
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
