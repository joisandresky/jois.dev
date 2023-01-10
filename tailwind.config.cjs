const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Chivo', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'my-bg': "url('/src/assets/IMG_0006.JPG')"
      }
    },
  },
  plugins: [],
}
