/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Inter", "sans-serif"],
        body: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        // 🎨 Single source of truth for the brand gradient.
        // Change these 3 values and the whole UI re-themes:
        // brand name, hero highlight text, and primary buttons.
        // Used via Tailwind's own gradient utilities, e.g.
        // "bg-gradient-to-r from-brand-start via-brand-mid to-brand-end".
        brand: {
          start: "#ff5722", // orange
          mid: "#d81b7e", // pink
          end: "#7c3aed", // violet
        },
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: 0, transform: "translateY(6px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.35s ease-out both",
      },
    },
  },
  plugins: [],
};
