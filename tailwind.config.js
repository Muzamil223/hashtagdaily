/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "slide-top": "slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both",
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        "slide-top": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Diastema: ["Diastema Regular", "serif"],
        Hanken: ["Hanken Grotesk", "sans-serif"],
        Schibsted: ["Schibsted Grotesk", "sans-serif"],
        Space: ["Space Grotesk", "sans-serif"],
        Forum: ["Forum", "serif"],
        Roboto: ["Roboto", "sans-serif"],
        Palanquin: ["Palanquin", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        Lato: ["Lato", "sans-serif"],
        Bodoni: ["Bodoni Moda SC", "serif"],
        Playfair: ["Playfair Display", "serif"],
        Cormorant: ["Cormorant Garamond", "serif"],
      },
      colors: {
        // Primary colors (blue theme)
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        // Secondary colors (purple theme)
        secondary: {
          50: "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#a855f7",
          600: "#9333ea",
          700: "#7e22ce",
          800: "#6b21a5",
          900: "#581c87",
        },
        // Neutral colors (grays)
        neutral: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
        // Brown colors (keep your existing)
        brown: {
          400: "#7C3030",
          500: "#4A0404",
          600: "#7B3F00",
          700: "#6D4C41",
          800: "#3E2723",
          900: "#6E260E",
        },
        // Individual colors
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "navy-900": "#00001f",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)",
      },
      spacing: {
        16: "4rem",
        12: "3rem",
        18: "4.5rem",
        22: "5.5rem",
      },
      screens: {
        xs: "480px",
        ss: "580px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      boxShadow: {
        soft: "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
        medium: "0 4px 20px -2px rgba(0, 0, 0, 0.1)",
        hard: "0 10px 40px -3px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
};
