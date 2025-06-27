/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './main.js'],
  theme: {
    extend: {
      colors: {
        gold: '#D4AF37',
        'gold-light': '#e8c85a',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in forwards',
      },
    },
  },
  plugins: [],
};
