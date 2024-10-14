/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5156be',
        secondary: '#c8c9ee',
        tertiary: '#da123b',
        text: '#172b4c'
      }
    },
  },
  plugins: [],
}

