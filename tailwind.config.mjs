/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,ts,md,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        navy: {
          950: "#061525",
          900: "#0A2037",
          800: "#102D49",
          700: "#174265",
        },
        energy: {
          300: "#5EEAD4",
          400: "#2DD4BF",
          500: "#14B8A6",
          600: "#0D9488",
        },
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(45,212,191,.12), 0 22px 65px rgba(8,30,54,.22)",
        crisp: "0 18px 50px rgba(6,21,37,.12)",
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(94,234,212,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(94,234,212,.08) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
