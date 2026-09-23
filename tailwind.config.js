/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#07070a",
          900: "#0b0a0d",
          800: "#121014",
          700: "#1a171c",
        },
        brown: {
          950: "#160f09",
          900: "#20150d",
          800: "#2c1e12",
          700: "#3c2a18",
          600: "#4e3820",
          500: "#654a2c",
        },
        gold: {
          100: "#f8edc9",
          200: "#f0deA0",
          300: "#e3c574",
          400: "#d1a94a",
          500: "#c39a3a",
          600: "#a37c29",
          700: "#7c5d1e",
        },
        parchment: {
          50: "#faf5e6",
          100: "#f2e8cb",
          200: "#e8d8ab",
          300: "#dcc689",
          400: "#b7a066",
          500: "#8c7a4e",
        },
        blood: {
          500: "#7a2020",
          600: "#5c1717",
        },
      },
      fontFamily: {
        display: ['"Cinzel Decorative"', "serif"],
        heading: ["Cinzel", "serif"],
        serif: ['"Playfair Display"', "serif"],
        type: ['"Special Elite"', '"Courier New"', "monospace"],
      },
      backgroundImage: {
        "radial-fade":
          "radial-gradient(circle at center, rgba(211,169,74,0.14) 0%, rgba(0,0,0,0) 70%)",
        "vignette":
          "radial-gradient(ellipse at center, rgba(0,0,0,0) 40%, rgba(0,0,0,0.85) 100%)",
      },
      boxShadow: {
        gold: "0 0 25px rgba(211, 169, 74, 0.35)",
        "gold-lg": "0 0 60px rgba(211, 169, 74, 0.25)",
        "inset-paper": "inset 0 0 60px rgba(60, 42, 24, 0.5)",
      },
      keyframes: {
        drift: {
          "0%": { transform: "translate3d(-6%, 0, 0) scale(1.15)" },
          "50%": { transform: "translate3d(4%, -3%, 0) scale(1.25)" },
          "100%": { transform: "translate3d(-6%, 0, 0) scale(1.15)" },
        },
        driftReverse: {
          "0%": { transform: "translate3d(5%, -2%, 0) scale(1.2)" },
          "50%": { transform: "translate3d(-5%, 2%, 0) scale(1.05)" },
          "100%": { transform: "translate3d(5%, -2%, 0) scale(1.2)" },
        },
        flicker: {
          "0%, 100%": { opacity: 1 },
          "8%": { opacity: 0.85 },
          "12%": { opacity: 1 },
          "20%": { opacity: 0.7 },
          "24%": { opacity: 1 },
          "55%": { opacity: 0.92 },
          "60%": { opacity: 1 },
        },
        blink: {
          "0%, 45%": { opacity: 1 },
          "50%, 95%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "pulse-gold": {
          "0%, 100%": { boxShadow: "0 0 12px rgba(211,169,74,0.35)" },
          "50%": { boxShadow: "0 0 30px rgba(211,169,74,0.7)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        drift: "drift 26s ease-in-out infinite",
        "drift-reverse": "driftReverse 32s ease-in-out infinite",
        flicker: "flicker 6s linear infinite",
        blink: "blink 1.1s steps(1) infinite",
        floaty: "floaty 6s ease-in-out infinite",
        "spin-slow": "spin-slow 18s linear infinite",
        "pulse-gold": "pulse-gold 3s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};
