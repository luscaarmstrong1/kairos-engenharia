/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,ts,md,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        cx: {
          void: "#061314",
          abyss: "#081f22",
          deep: "#0b2a2e",
          navy: "#071f3f",
          teal: "#0e7c73",
          "teal-light": "#18b6a6",
          cyan: "#58e0d4",
          gold: "#c9a44e",
          "gold-soft": "#e0c16d",
          text: "#f3f7f6",
          muted: "#9ab1ae",
          "muted-2": "#6f8582",
        },
        navy: {
          950: "#061314",
          900: "#081f22",
          800: "#0b2a2e",
          700: "#071f3f",
        },
        energy: {
          300: "#58e0d4",
          400: "#18b6a6",
          500: "#0e7c73",
          600: "#0a625c",
        },
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(88,224,212,.16), 0 22px 65px rgba(5,19,20,.34)",
        crisp: "0 18px 50px rgba(5,19,20,.16)",
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
