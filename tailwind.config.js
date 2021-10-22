module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: 'postcss-loader',
        options: {
          ident: 'postcss',
          syntax: 'postcss-scss',
          plugins: () => [
            require('postcss-import'),
            require('tailwindcss'),
            require('autoprefixer'),
          ]
        }
      }
    ]
  },
  purge: ['./apps/eduu/src/**/*.html',],
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
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
