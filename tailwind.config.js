module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '1.2': '12%',
        '8.8': '88%'
      },
      colors: {
        'defbg': '#f5f5f5'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
