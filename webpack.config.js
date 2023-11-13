const path = require("path")
production = {
    mode: 'production',
    target: "web",
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "lobbyturkeysite.bundle.js"

    },
    module: {
      rules: [
          {
            test: /\.jsx$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader'
          }
        }
      ]
  }
}

development = {
  mode: 'development',
  target: "node",
  entry: './src/index.jsx',
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: "tests.bundle.js"
  },
  module: {
    rules: [
        {
          test: /\.jsx$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            }
          }
    ]
   }
    
  
}

module.exports = [production, development]