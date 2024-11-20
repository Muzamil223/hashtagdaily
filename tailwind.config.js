export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    animation: {
      "slide-top": "slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both",
    },
    keyframes: {
      "slide-top": {
        "0%": { transform: "translateY(100%)" },
        "100%": { transform: "translateY(0)" },
      },
    },
    fontFamily: {
      Montserrat: ["Montserrat", "sans-serif"],
      Diastema: ["Diastema Regular"],
      Hanken: ["Hanken Grotesk", "sans-serif"],
      Schibsted: ["Schibsted Grotesk"],
      Space: ["Space Grotesk"],
      Forum: ["Forum"],
      Roboto: ["Roboto"],
      Palanquin: ["Palanquin", "sans-serif"],
      Inter: ["Inter", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      Lato: ["Lato", "sans-serif"],
      Bodoni: ["Bodoni Moda SC", "sans-serif"],
      Playfair: ["Playfair Display"],
      Cormorant: ["Cormorant Garamond", "sans-serif"],
    },
    colors: {
      brown: {
        400: "#7C3030		", // Example even darker brown color
        500: "#4A0404		", // Example even darker brown color
        600: "#7B3F00	", // Example even darker brown color
        700: "#6D4C41", // Example dark brown color
        800: "#3E2723", // Example even darker brown color
        900: "#6E260E		", // Example even darker brown color
      },

      primary: "#ECEEFF",
      secondary: "#6C5B7B", // Example secondary color
      light: "#F9F9F9", // Example light color
      dark: "#333333", // Example dark color
      "coral-red": "#FF6452",
      "slate-gray": "#6D6D6D",
      "navy-900": "#00001f",
      "pale-blue": "#F5F6FF",
      "white-400": "rgba(255, 255, 255, 0.80)",
    },
    spacing: {
      16: "4rem", // Custom spacing
      12: "3rem",
    },
    screens: {
      xs: "480px",
      ss: "580px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
};
export const plugins = [];
