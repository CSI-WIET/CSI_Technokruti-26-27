# Technokruti — "The Game Is Afoot."

A premium, fully responsive Sherlock Holmes–themed website for the college
technical festival **Technokruti**. Built with React + Vite, Tailwind CSS,
Framer Motion, and Three.js (via `@react-three/fiber`) for a cinematic,
Victorian-detective atmosphere: drifting fog, ember particles, a magnifying-
glass cursor, typewriter text, animated case-file cards, and gold-on-parchment
styling throughout.

## Sections included

- **Intro** — the uploaded festival teaser plays fullscreen (skippable, with a mute toggle), then iris-wipes into the site
- **Hero** — animated title, typewriter tagline, Three.js particle field, parallax silhouette and a Ken Burns/parallax festival photo
- **About** — "case dossier" with exhibits, a magnifying-map photo break, and an interactive magnifying-glass text reveal
- **Events** — an evidence-board photo break, then a filterable grid of six case-file event cards
- **Event Details** — a dossier modal (rules, format, prizes) opened from any event card
- **Schedule** — tabbed three-day timeline
- **Team ("The Bureau")** — a workshop photo break, then flip cards revealing each member's case notes
- **Sponsors ("Patrons")** — tiered plaques + a scrolling marquee strip
- **Closing statement** — a full-bleed, parallax "one last clue" photo section before the contact form
- **Contact** — an embedded live location map of the venue, plus direct lines and socials

## Getting started

Requires **Node.js 18+**.

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

The production build is written to `dist/` — deploy it to any static host
(Vercel, Netlify, GitHub Pages, etc.).

## Project structure

```
src/
  components/       All UI sections and shared widgets
  data/siteData.js  Every piece of site copy: events, schedule, team, sponsors, contact
  index.css         Tailwind + custom Victorian textures/utilities
  App.jsx           Assembles the page and preloader
  main.jsx          React entry point
tailwind.config.js  Color palette, fonts, custom keyframes
```

## Customizing content

Everything text-based — event details, schedule items, team bios, sponsor
names, contact info — lives in **`src/data/siteData.js`**. Edit that one file
to update the site without touching any component.

## Customizing the look

- **Palette** — `tailwind.config.js` → `theme.extend.colors` (`ink`, `brown`,
  `gold`, `parchment`, `blood`).
- **Fonts** — loaded via Google Fonts in `index.html` (Cinzel, Cinzel
  Decorative, Playfair Display, Special Elite); mapped to `font-heading`,
  `font-display`, `font-serif`, `font-type` in the Tailwind config.
- **Motion** — the one-time load sequence lives in `IntroVideo.jsx`; per-
  section scroll reveals use Framer Motion's `whileInView`; the Three.js
  ember field is in `ParticleField.jsx`.

## Notes

- The intro clip lives at `src/assets/video/intro.mp4` (with a generated
  poster frame alongside it). It autoplays muted (browser policy), is
  skippable, and has its own mute toggle for its audio track. On
  `prefers-reduced-motion` it's skipped entirely and the site loads
  straight away.
- **Background music (optional, off by default):** drop a licensed MP3 at
  `public/audio/theme-song.mp3` and a small music toggle appears bottom-left
  once the site loads, autoplaying the track (looped) the instant the intro
  finishes — with a graceful fallback if the browser blocks autoplay. No
  code changes needed; the control stays hidden until that file exists. See
  `public/audio/README.txt` for licensing notes — this project does **not**
  ship with any commercial track (e.g. it will not include Michael Jackson's
  "Thriller" or similar) since that requires rights you'd need to clear
  yourself.
- Five photographs live in `src/assets/images/` and are woven into Hero,
  About, Events, Team, and a dedicated closing section — each moves with a
  scroll-linked parallax (via `ImageBanner.jsx` and the Hero/`ClosingCTA.jsx`
  scroll transforms) rather than sitting static on the page. Swap any of
  them out by replacing the file and keeping the same filename, or update
  the `import` path in the relevant component.
- Team photos and sponsor logos (as opposed to the five scene photographs
  above) are still rendered as illustrated placeholders (silhouettes /
  typographic plaques) so the project runs with zero extra external image
  assets. Swap in real photos/logos by replacing the relevant markup in
  `Team.jsx` and `Sponsors.jsx`.
- The contact section now shows an embedded OpenStreetMap of the venue
  (Watumull Institute of Engineering and Technology, Ulhasnagar) instead of
  a form. It needs no API key or billing account. Coordinates and the
  address live in `CONTACT.map` / `CONTACT.address` in
  `src/data/siteData.js` — edit there to move the pin. Event registration
  now opens a pre-filled email from each event's dossier modal.
- Respects `prefers-reduced-motion` throughout (cursor, typewriter, marquee,
  parallax, and all transitions degrade gracefully).
"# CSI_Technokruti-26-27" 
