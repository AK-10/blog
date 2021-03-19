module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', '/src/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: theme => theme('colors'),
    extend: {
      backgroundColor: {
        'navy': {
          100: '#b7b9c7',
          300: '#9597ab',
          500: '#535977',
          700: '#333c5e',
          900: '#2c334e'
        }
      },
      textColor: {
        'navy': {
          100: '#b7b9c7',
          300: '#9597ab',
          500: '#535977',
          700: '#333c5e',
          900: '#2c334e'
        }
      },
      maxWidth: {
        '1/2': '50%',
        '1/4': '25%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
