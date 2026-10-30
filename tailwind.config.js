/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#fbf8f2',
        ink: {
          DEFAULT: '#2e2320',
          soft: '#5a4a42',
        },
        cream: {
          100: '#f5efe3',
          200: '#ebe1cc',
        },
        olive: {
          100: '#e5e8d2',
          300: '#a9b07e',
          500: '#6e7444',
          600: '#5a6038',
        },
        terracotta: {
          100: '#f2dcd2',
          300: '#e0a18a',
          500: '#b5654a',
          600: '#9c5239',
        },
        foliage: {
          100: '#dde8d6',
          500: '#3f6b4e',
        },
        mustard: {
          100: '#f7e7b8',
          500: '#e2ae3a',
        },
        rose: {
          200: '#f3d3cb',
        },
        sky: {
          100: '#dce9f3',
          500: '#6d9ac0',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          'to': { opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.4s ease-out both',
      },
    },
  },
  plugins: [],
};

