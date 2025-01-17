/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", // Adjust based on where your HTML/JS files are
  ],
  theme: {
    extend: {
      colors: {
        dark: '#323232',
        light: '#FFF7EC',
        cWhite: '#FFFFFF',
        cGray: '#C6C6C6'
      },
      fontFamily: {
        'montserrat': '"Montserrat", serif',
        'manrope': '"Manrope", serif'
      },
      fontSize: {
        navigation: '16px',
        navigation_m: '16px',
        h1: '45px',
        h1_m: '31px',
        h2: '40px',
        h2_m: '29px',
        h3: '32px',
        h3_m: '25px',
        h4: '26px',
        h4_m: '22px',
        big: '16px',
        big_m: '14px',
        middle: '14px',
        middle_m: '12px',
        small: '12px',
        small_m: '12px'
      },
    },
  },
  plugins: [],
}

