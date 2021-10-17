module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '1.2': '12%',
        '8.8': '88%',
        '94v': '94vh',
        '6v': '6vh'
      },
      colors: {
        'defbg': '#f5f5f5',
        'dark': '#121212',
        'monokai': '#2e2e2e'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
