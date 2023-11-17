/** @preserve
 * Copyright 2023 Declan Fodor
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
    // name: { import: '...', dependOn: 'sharedElements' },
    frontrenderer: { import: './src/renderers/frontpage.jsx', dependOn: 'sharedElements' }
  },
  output: {
    path: path.resolve(__dirname, "pages/dist/"),
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
            loader: "postcss-loader",
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
        console.log(percentage, message, ...args);
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
