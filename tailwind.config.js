/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.jsx', './pages/**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        ubmono: ["UB-MONO", "monospace"]
      },
      spacing: {
        "1/8": "12.5%",
        "1/2": "50%",
        "1/4": "25%",
        "3/4": "75%"
      }
    },
    minWidth: {
      '1/6': '33.333334%'
    }
  },
  plugins: []
}
