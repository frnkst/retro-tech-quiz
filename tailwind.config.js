module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        retro: "'Press Start 2P', cursive",
        handwrite: "'Handlee', cursive",
        other: "'Advent Pro', cursive"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
