/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "brutal-lime": "#c0ff00",
        "brutal-cyan": "#00ffff",
        "brutal-pink": "#ff83f7",
        "brutal-light-green": "#a2e200",
        "brutal-green": "#84c600",
        "brutal-dark-green": "#66aa00"
      },
      boxShadow: {
        "3xl": "2px 2px 15px 0 rgba(0, 0, 0, 0.1);",
      },
      screens: {
        xl: "1400px",
      },
    },
  },
  plugins: [],
};
