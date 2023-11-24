/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './pages/**/*.{html,js}',
  './components/**/*.{html,js}',
  './index.html',
  './index2.html',
  './test.html',
  './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

