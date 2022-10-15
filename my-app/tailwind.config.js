/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '0rem',
    },
    colors: {
      transparent: 'transparent',
      white: '#FFF',
      black: '#000',
      grey: '#161616',
      active: '#EEBC7F',
      light: '#F5D9B6',
      warn: 'crimson',
      lightModeBackground: '#524f48',
      darkModeBackground: '#161616',
    },
    fontFamily: {
      ubuntu: ['Montserrat', 'sans-serif'],
    },
    borderWidth: {
      2: '2px',
      3: '3px',
      4: '4px',
    },
    extend: {
      lineHeight: {
        12: '3rem',
        14: '4rem',
        16: '5rem',
      },
      backgroundImage: {
        my_bg_image: "url('/header.jpeg')",
      },
    },
  },
  plugins: [],
};
