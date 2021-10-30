module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: [
      './apps/**/*.{html,ts}',
      './libs/**/*.{html,ts}',
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': {

        },
        'secondary': {

        },
        'accent': {

        }
      },
      fontFamily: {
        'nunito': ["'Nunito', 'sans-serif'"],
        'montserrat': ["'Montserrat', 'sans-serif'"],
      },
      width: {
        '600': '600px',
        'fit-content': 'fit-content'
      },
      height: {
        'fit-content': 'fit-content'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'), require('@tailwindcss/aspect-ratio')]
}
