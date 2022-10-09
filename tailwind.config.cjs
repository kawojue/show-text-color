/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.jsx'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'san-serif']
      },
      colors: {
        "pry-clr-0": "rgb(245, 245, 245)"
      }
    },
  },
  plugins: [],
}