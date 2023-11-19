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
module.exports = api => {
  return {
    presets: [['@babel/preset-env', { debug: false }], '@babel/preset-react'],
    plugins: [
      ['@babel/plugin-transform-react-jsx', {
        // Jest needs to be able to use babel as well,
        // but we need different targets since jest only supports commonjs
        targets: api.env('test') ? { node: 'current' } : 'defaults',
        // Allows babel to change jsx into preact code
        pragma: 'h',
        pragmaFrag: 'Fragment'
      }
      ],
      '@babel/plugin-transform-class-properties',
      '@babel/plugin-transform-private-methods'
    ],
    // Jest might need to convert preact to commonjs
    ignore: api.env('test') ? [] : ['./node_modules/'],
    targets: api.env('test') ? { node: 'current' } : 'cover 95%, not dead'
  }
}
