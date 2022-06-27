/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
    "./resources/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      colorRed:    '#ED155D',
      colorRedd:   '#ED155D',
      colorYellow: '#F8D210',
      colorDarkYellow: '#cfb00e',
      colorTourq:  '#2FF3E0',
      colorWhite:  '#FFFFFF',
      colorBlack:  '#222222',

    },

    extend: {},
  },
  plugins: [],
}

/* v17.9.0  node*/ 