/** @preserve
 * Copyright 2023 Declan Fodor
 */
const path = require('path')
const webpack = require('webpack')
const LicensePlugin = require('webpack-license-plugin')

const production = {
  mode: 'production',
  target: 'web',
  // Entry points are split into renderers for specific pages which use a shared library consisting of preact components.
  entry: {
    sharedElements: './src/index.jsx',
    // name: { import: '...', dependOn: 'sharedElements' },
    frontrenderer: { import: './src/renderers/frontpage.jsx', dependOn: 'sharedElements' },
    aboutusrenderer: { import: './src/renderers/aboutus.jsx', dependOn: 'sharedElements' }
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
        test: /(\.jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
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
  ]
}

module.exports = [production]
