import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Drop a licensed MP3 at public/audio/theme-song.mp3 (see the README in
// that folder). Nothing else needs to change — this component detects it
// automatically and stays hidden if the file isn't there yet.
const AUDIO_SRC = "/audio/theme-song.mp3";

export default function SiteAudio({ active }) {
  const audioRef = useRef(null);
  const [available, setAvailable] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    if (!active || !available) return;
    const a = audioRef.current;
    if (!a) return;
    a.volume = 0.5;
    a.play()
      .then(() => {
        setPlaying(true);
        setBlocked(false);
      })
      .catch(() => setBlocked(true));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, available]);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) {
      a.play()
        .then(() => {
          setPlaying(true);
          setBlocked(false);
        })
        .catch(() => setBlocked(true));
    } else {
      a.pause();
      setPlaying(false);
    }
  };

  if (!available) return null;

  return (
    <>
      <audio
        ref={audioRef}
        src={AUDIO_SRC}
        loop
        preload="auto"
        onError={() => setAvailable(false)}
      />

      <AnimatePresence>
        {active && (
          <motion.button
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{
              opacity: 1,
              scale: 1,
              boxShadow: blocked
                ? [
                    "0 0 12px rgba(211,169,74,0.35)",
                    "0 0 26px rgba(211,169,74,0.7)",
                    "0 0 12px rgba(211,169,74,0.35)",
                  ]
                : "0 0 0px rgba(211,169,74,0)",
            }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={
              blocked
                ? { boxShadow: { duration: 1.8, repeat: Infinity } }
                : { duration: 0.3 }
            }
            onClick={toggle}
            data-magnify
            aria-label={playing ? "Pause theme music" : "Play theme music"}
            className="fixed bottom-6 left-6 z-40 flex h-12 w-12 items-center justify-center border border-gold-500/60 bg-ink/80 text-gold-300 backdrop-blur-sm transition-shadow hover:shadow-gold-lg sm:bottom-8 sm:left-8"
          >
            {playing ? (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="3" y="2" width="3.4" height="12" fill="currentColor" />
                <rect x="9.6" y="2" width="3.4" height="12" fill="currentColor" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 2.5l10 5.5-10 5.5z" fill="currentColor" />
              </svg>
            )}
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
