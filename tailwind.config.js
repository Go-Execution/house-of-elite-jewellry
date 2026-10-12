/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
      colors: {
        crimson: {
          DEFAULT: '#7B1515',
          dark: '#5A0E0E',
          light: '#9B2020',
        },
        gold: {
          DEFAULT: '#C9A96E',
          light: '#E5C9A0',
        },
        cream: {
          DEFAULT: '#FAF8F4',
          dark: '#F0EBE3',
        },
        charcoal: {
          DEFAULT: '#1A1A1A',
          soft: '#2D2D2D',
        },
      },
    },
  },
  plugins: [],
};
