/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        BebasNeue: ["Bebas Neue", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-primeui")],
};
