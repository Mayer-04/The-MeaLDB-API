/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        darkBrown: "#23180d",
        orange: "#d57d1f",
        main: "#2d2013",
      }
    },
  },
  plugins: [],
}

