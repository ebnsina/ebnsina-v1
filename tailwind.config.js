const colors = require('tailwindcss/colors');

module.exports = {
  // mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
        rose: colors.rose,
        orange: colors.orange,
        yellow: colors.yellow,
        pink: colors.pink,
      },
      fontFamily: {
        sans: 'Epilogue',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
