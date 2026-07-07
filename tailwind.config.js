/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A', // Deep Blue
        secondary: '#3B82F6', // Blue 500
        dark: '#111827',
        light: '#F3F4F6'
      },
      fontFamily: {
        arabic: ['"Tajawal"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
