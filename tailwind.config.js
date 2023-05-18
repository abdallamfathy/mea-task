/** @type {import ('tailwindcss').Config} */

// eslint-disable-next-line no-undef
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'], // adjust this to match your file extensions (vue for Vue, tsx for React, etc.)
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
