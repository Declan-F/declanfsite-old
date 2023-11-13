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
              loader: 'babel-loader',
              options: {
                "plugins": [
                  ["@babel/plugin-transform-react-jsx", { 
                          targets: {node: "current"},
                          pragma: "h",
                          pragmaFrag: "Fragment"
                      }
                  ]
                ]
            }
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
      filename: "devturkeysite.bundle.js"
  },
  module: {
    rules: [
        {
          test: /\.jsx$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              "plugins": [
                ["@babel/plugin-transform-react-jsx", { 
                        targets: {node: "current"},
                        pragma: "h",
                        pragmaFrag: "Fragment"
                    }
                ]
              ]
            }
          }
        }
    ]
  }
}

module.exports = [production, development]