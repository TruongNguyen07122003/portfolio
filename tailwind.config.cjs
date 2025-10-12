/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1",
        accent: "#06b6d4",
      },
      keyframes: {
        "fade-glow": {
          "0%, 100%": { opacity: "0.2", transform: "scale(1)" },
          "50%": { opacity: "0.6", transform: "scale(1.05)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "heart-pulse": {
          "0%, 100%": {
            transform: "translate(-50%, -50%) rotate(45deg) scale(1)",
          },
          "50%": {
            transform: "translate(-50%, -50%) rotate(45deg) scale(1.3)",
          },
        },
        "wave-expand": {
          "0%": { transform: "scale(0.8)", opacity: "0.4" },
          "50%": { transform: "scale(1.1)", opacity: "0.7" },
          "100%": { transform: "scale(0.9)", opacity: "0.4" },
        },
        "gradient-move": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        shine: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-glow": "fade-glow 3s ease-in-out infinite",
        "spin-slow": "spin-slow 10s linear infinite",
        "heart-pulse": "heart-pulse 1.2s ease-in-out infinite",
        "wave-expand": "wave-expand 3s ease-in-out infinite",
        "gradient-move": "gradient-move 6s ease infinite",
        shine: "shine 2.5s linear infinite",
      },
    },
  },
  plugins: [],
};
