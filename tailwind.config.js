/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.jsx', './pages/**/*.html'],
  safelist: ['opacity-0', 'opacity-100'],
  theme: {
    extend: {
      fontFamily: {
        ubmono: ["UB-MONO", "monospace"]
      },
      spacing: {
        "1/8": "12.5%",
        "1/2": "50%",
        "1/4": "25%",
        "3/4": "75%",
        "1/16": "6.25%",
        "1/2vh": "50vh"
      },
      minWidth: {
        '1/6': '33.333334%'
      },
      boxShadow: {
        '3xl': '0 15px 120px -30px rgba(0, 0, 0, 0.3)'
      },
      colors: {
        "blue-max": 'rgb(0, 0, 30)'
      },
      transitionProperty: {
        nocolor: 'fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter'
      }
    }
  },
  plugins: []
}
