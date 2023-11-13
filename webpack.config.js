const webpack = require('webpack')

const production = {
  mode: 'development',
  target: 'web',
  // Entry points are split into renderers for specific pages which use a shared library consisting of preact components.
  entry: {
    sharedElements: './src/index.jsx',
    frontrenderer: { import: './src/pages/frontpage.jsx', dependOn: 'sharedElements' },
    aboutusrenderer: { import: './src/pages/aboutus.jsx', dependOn: 'sharedElements' }
  },
  output: {
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.module\.js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },

  plugins: [
    new webpack.ProgressPlugin({
      activeModules: true,
      handler: (percentage, message, ...args) => {
        console.log(percentage, message, ...args);
      }
    })
  ]
}

// const development = {
//   mode: 'development',
//   target: 'node',
//   entry: './src/index.jsx',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'tests.bundle.js'
//   },
//   module: {
//     rules: [
//       {
//         test: /\.jsx$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader'
//         }
//       }
//     ]
//   }

// }

module.exports = [production]
