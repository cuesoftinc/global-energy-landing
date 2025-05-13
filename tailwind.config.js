/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "2xl": { min: "1800px" },
      xl: { max: "1800px" },
      lg: { max: "1024px" },
      md: { max: "912px" },
      sm: { max: "639px" },
    },
    extend: {
      fontSize: {
        12: "12px",
        14: "14px",
        18: "18px",
      },
      colors: {
        primary: "#0E1C4D",
        text: "#606060",
        green: "#069B35",
        blue: "#0E1C4D",
        yellow: "#DCB64E",
      }
    },
  },
  plugins: [],
}

