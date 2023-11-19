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
const path = require('path')
const webpack = require('webpack')
const LicensePlugin = require('webpack-license-plugin')

const config = {
  mode: 'development',
  target: 'web',
  // Entry points are split into renderers for specific pages which use a shared library consisting of preact components.
  entry: {
    // cssstyles: './src/setupfiles/cssstyles.jsx',
    setup: './src/setupfiles/setup.jsx',
    sharedElements: { import: './src/index.jsx', dependOn: 'setup' },
    // // name: { import: '...', dependOn: 'sharedElements' },
    frontrenderer: { import: './src/renderers/frontpage.jsx', dependOn: 'sharedElements' }
  },
  output: {
    path: path.resolve(__dirname, 'pages/dist/'),
    filename: '[name].bundle.js',
    clean: true
  },
  module: {
    rules: [
      {
        // Runs babel
        test: /(\.jsx|\.js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /(\.css)$/,
        use: ['style-loader', 'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: {
                  'postcss-import': {},
                  tailwindcss: {},
                  autoprefixer: {}
                }
              }
            }
          }
        ]
      },
      {
        test: /(\.ttf)$/,
        type: 'asset/resource'
      }
    ]

  },
  // For debugging
  plugins: [
    new webpack.ProgressPlugin({
      activeModules: true,
      handler: (percentage, message, ...args) => {
        console.log(percentage, message, ...args)
      }
    }),
    new LicensePlugin()
  ],
  watchOptions: {
    aggregateTimeout: 1000,
    poll: 1000,
    stdin: false,
    /**
     * Matches the first character of a file path
     * - Except when /src.+(html|jsx|css)/ matches
     * - Except when /pages.+(html|jsx|css)/ matches
     * - - However, it does match when there is the string "dist" between pages and the file endings
     * // /^[\s\S](?!(.*src.+(html|jsx|css))|(.*pages(?!.*dist.*).+(html|jsx|css)))/ Didn't work, fix later
     */
    ignored: ['**/webpack.config.js', '**/dist/**']
  }
}

module.exports = [config]
