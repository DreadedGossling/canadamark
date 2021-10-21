const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cmBlack: "#191F1E",
        cmBlue: "#677F91",
        cmDarkBlue: "#121C37"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
