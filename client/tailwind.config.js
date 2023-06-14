/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F5385D',
        darkPrimary: '#121212',
        darkSecondary: '#1f1f1f',
        darkAccent: '#00000',
      }
    },
  },
  plugins: [],
}

