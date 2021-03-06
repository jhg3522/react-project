module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      textColor: ['hover','focus'],
      backgroundColor: ['hover'],
      ringColor : ['hover', 'focus'],
    },

  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}