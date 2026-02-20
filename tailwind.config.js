/* @type {import('tailwindcss').Config} */ 
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./assets/**/*.{js,css}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dana: ['"Dana"'],
        'dana-medium': ['"Dana Medium"'],
        'dana-demibold': ['"Dana DemiBold"'],
        morabba: ['"Morabba"'],
        'morabba-light': ['"Morabba Light"'],
        'morabba-bold': ['"Morabba Bold"'],
      },
    },
  },
  plugins: [],
}
