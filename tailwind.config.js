/** @type {import('tailwindcss').Config} */
import motion from "tailwindcss-motion";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        generalsans: ["General Sans", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
        tas: ["Edu TAS Beginner", "sans-serif"],
      },
      colors: {
        black: {
          DEFAULT: "#000",
          100: "#010103",
          200: "#0E0E10",
          300: "#1C1C21",
          500: "#3A3A49",
          600: "#1A1A1A",
        },
        white: {
          DEFAULT: "#FFFFFF",
          800: "#E4E4E6",
          700: "#D6D9E9",
          600: "#AFB0B6",
          500: "#62646C",
        },
        primary: {
          DEFAULT: "#8CED1F",
          900: "#94FC13",
          500: "#A2FF2F",
          300: "#C0FF73",
          200: "#E2FFBF",
          100: "#F4FFE6",
        },
        helper: {
          default: "#3D9561",
        },
      },
    },
  },
  plugins: [motion],
  darkMode: "class",
};
