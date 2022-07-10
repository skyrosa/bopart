/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      setRed:    '#ED155D',
      setYellow: '#F8D210',
      setTourq:  '#2FF3E0',
      setWhite:  '#FFFFFF',
      setBlack:{
        100: '#3D3D3D',
        200: '#222222',
      }  
    },

    extend: {},
  },
  plugins: [],
}

/* v17.9.0  node*/ 