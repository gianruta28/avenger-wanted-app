/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  purge: {
    enabled: true,
    content: [
    './src/**/*.html',
    './src/**/*.scss'],
  },
  theme: {
    extend: {},
  },
  plugins: [],
}

