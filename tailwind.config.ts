import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1rem", // Mobil qurilma uchun padding 1rem bo'ladi
          lg: "2rem", // Planshet uchun padding
          xl: "2rem", // Katta ekranlar uchun padding
        },
        screens: {
          sm: "375px", // Mobil ekran
          md: "600px", // Planshet ekran
          lg: "1300px", // Katta ekran
          xl: "1300px",
          "2xl": "1436px",
        },
      },
      margin: {
        "container-x": "2rem",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      // Chaqnash animatsiyasini qo'shamiz
      keyframes: {
        flash: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.5)", opacity: "0.5" },
        },
      },
      animation: {
        flash: "flash 0.5s ease-in-out", // Chaqnash animatsiyasi 0.5s davom etadi
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
