/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        luxuryBg: "#0b0b0f",
        luxurySurface: "#14141a",
        luxuryGold: "#d4af37",
        luxuryMuted: "#9aa0a6",
      },
      boxShadow: {
        glow: "0 0 40px rgba(212,175,55,0.15)",
      },
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
