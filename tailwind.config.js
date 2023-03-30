/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "accent-color": "#4790C0",
        "bg-color": "#EBF1F9",
        "main-text-invert-color": "#1D1D1B",
        "card-color": "#FEFEFE",
      },
      fontFamily: {
        jura: "Jura",
      },
    },
  },
  plugins: [],
};
