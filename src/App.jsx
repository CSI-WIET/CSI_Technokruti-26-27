import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IntroVideo from "./components/IntroVideo";
import SiteAudio from "./components/SiteAudio";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Events from "./components/Events";
import Schedule from "./components/Schedule";
import Team from "./components/Team";
import Sponsors from "./components/Sponsors";
import ClosingCTA from "./components/ClosingCTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 900);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = loaded ? "" : "hidden";
  }, [loaded]);

  return (
    <>
      <IntroVideo onFinish={() => setLoaded(true)} />
      <CustomCursor />
      <SiteAudio active={loaded} />

      <div style={{ visibility: loaded ? "visible" : "hidden" }}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Events />
          <Schedule />
          <Team />
          <Sponsors />
          <ClosingCTA />
          <Contact />
        </main>
        <Footer />
      </div>

      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            data-magnify
            aria-label="Back to top"
            className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center border border-gold-500/60 bg-ink/80 text-gold-300 shadow-gold backdrop-blur-sm transition-shadow hover:shadow-gold-lg sm:bottom-8 sm:right-8"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M9 14V3M9 3L3.5 8.5M9 3l5.5 5.5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
