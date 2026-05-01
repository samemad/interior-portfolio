/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        luxuryBg: "#FAFAF8",
        luxurySurface: "#F5F0E8",
        luxuryAccent: "#E8DDD0",
        luxuryLine: "#D6C8B8",
        luxuryInk: "#2F241C",
        luxuryMuted: "#7E7266",
      },
      boxShadow: {
        glow: "0 24px 80px rgba(120, 97, 74, 0.12)",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', '"Playfair Display"', "serif"],
        sans: ['"Manrope"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
