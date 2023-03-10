/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'salmon': '#ff9e6e',
      'blue-parrot': '#7e7cf8'
    },
    extend: {
      boxShadow: {
        'right': '-15px 0 15px -5px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}
