/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      colorGreen:  '#5CBB5A',
      colorTourq:  '#7CC7BF',
      colorWhite:  '#F5F5F5',
      colorYellow: '#F6BD60',
      colorPink:   '#F28482',
      colorBlack:  '#2F2A2A',
      gradient: {
        blue: '#7CC7BF',
        pink: '#F28482',
        yellow: '#F6BD60',
       }
    },

    extend: {
      fontFamily: {
      'sansita': ['Sansita','sans-serif'],
      'inter': ['Inter','sans-serif'],
      'librefranklin': ['Libre Franklin', 'sans-serif'],
    }, 
      
  plugins: [],
      }
    },
  }

/* v17.9.0  node*/ 