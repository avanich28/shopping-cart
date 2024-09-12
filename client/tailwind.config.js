/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        grandstander: 'Grandstander, sans',
        rocksalt: 'Rock Salt, sans',
        mansalva: 'Mansalva, sans-serif',
        emoji: 'Noto Color Emoji, sans-serif',
      },
      keyframes: {
        fadeOut: {
          '0%': { opacity: 0, transform: 'translateX(-20px)' },
          '100%': { opacity: 1, transform: 'translateX(0px)' },
        },
        slideLeft: {
          '0%': {
            opacity: 0,
            transform: 'translateX(-10px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0px)',
          },
        },
        slideRight: {
          '0%': {
            opacity: 0,
            transform: 'translateX(10px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0px)',
          },
        },
        slideDown: {
          '0%': {
            opacity: 0,
            transform: 'translateY(-10px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0px)',
          },
        },
      },
      animation: {
        fade: 'fadeOut 0.8s ease-in-out 0.2s forwards',
        slideL: 'slideLeft 1s ease-in-out forwards',
        slideR: 'slideRight 1s ease-in-out forwards',
        slideD: 'slideDown 0.5s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
