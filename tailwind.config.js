/**
 *  @version 0.0.3
 *  @author Declan Fodor
 *  @license MIT
 *
 *  MIT License
 *
 * Copyright (c) 2023 Declan Fodor
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
/* eslint-disable max-len */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.jsx', './pages/**/*.html'],
  safelist: ['opacity-0', 'opacity-100'],
  theme: {
    extend: {
      fontFamily: {
        ubmono: ['UB-MONO', 'monospace']
      },
      spacing: {
        '1/8': '12.5%',
        '1/2': '50%',
        '1/4': '25%',
        '3/4': '75%',
        '1/16': '6.25%',
        '1/2vh': '50vh'
      },
      minWidth: {
        '1/6': '33.333334%'
      },
      maxHeight: {
        '1/2vh': '50vh'
      },
      maxWidth: {
        '1/4vw': '25vw'
      },
      boxShadow: {
        custom1: '0 15px 120px -50px rgba(0, 0, 0, 0.3)',
        custom2: '0 15px 120px 0px rgba(0, 0, 0, 0.3)'
      },
      colors: {
        'blue-max': 'rgb(0, 0, 30)'
      },
      transitionProperty: {
        nocolor: 'opacity, transform, box-shadow, fill, stroke, filter, backdrop-filter'
      }
    }
  },
  plugins: []
}
