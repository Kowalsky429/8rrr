/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '0rem',
    },
    colors: {
      transparent: 'transparent',
      white: '#FFFFFF',
      black: '#000000',
      grey: '#161616',
      active: '#EEBC7F',
      light: '#F5D9B6',
      menuCover: 'rgba(0,0,0,0.9)',
      cardCover: 'rgba(0,0,0,0.38)',
    },
    fontFamily: {
      kalam: ['Kalam', 'cursive'],
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
        my_bg_image: "url('/header.jpg')",
      },
    },
  },
  plugins: [],
};
