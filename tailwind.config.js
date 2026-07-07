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
        secondary: '#D97706', // Gold / Amber
        dark: '#111827',
        light: '#F9FAFB'
      },
      fontFamily: {
        arabic: ['"Tajawal"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
