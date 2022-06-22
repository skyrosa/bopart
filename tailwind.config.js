/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    colors:{
      bobRed:    '#ED155D',
      bobRedd:   '#ED155D',
      bobYellow: '#F8D210',
      bobTourq:  '#2FF3E0',
      bobWhite:  '#FFFFFF',
      bobBlack:  '#222222',

    },

    extend: {},
  },
  plugins: [],
}