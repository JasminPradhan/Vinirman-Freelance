/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '1020px',
      // => @media (min-width: 576px) { ... }

      'md': '1150px',
      // => @media (min-width: 960px) { ... }
      'lg':'1260px',
      'xl':'1400px'
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      fontFamily:{
        'outfit':['"Outfit"','cursive'],
        
      }
    },
  },
  plugins: [],
}
