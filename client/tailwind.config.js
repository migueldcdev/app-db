module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      'header':['Rock Salt', 'cursive']
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
  darkMode:'class',
}
