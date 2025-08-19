/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: "#023047",   // dark blue for navbar
        secondary: "#FB8500", // orange (buttons)
        accent: "#219EBC",    // light blue (tagline)
        highlight: "#FFB703", // yellow (tagline)
      }
    },
  },
  plugins: [],
}

