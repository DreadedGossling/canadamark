const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        'h-700px': '700px'
      },  
      colors: {
        'cm-pantone': '#BAC7C3',
        'cm-black': "#191F1E",
        'cm-blue': "#677F91",
        'cm-dark-blue': "#121C37",
        'cm-green': "#758E87",
        'cm-grey': "#BFBFBF",
      },
      fontFamily: {
        sanomat: 'Sanomat Web',
        ddin: 'D-Din'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
