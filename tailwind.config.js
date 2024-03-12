/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      colors:{
        'Soft-orange': '#e9ab53',
        'Soft-red': '#f15e50',
        'Off-white': '#fffdfa',
        'Grayish-blue': '#c5c6ce', 
        'Dark-grayish-blue': '#5d5f79', 
        'Very-dark-blue': '#00001a', 
      }
    },
  },
  plugins: [],
}
