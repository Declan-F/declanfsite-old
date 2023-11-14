module.exports = api => {
  return {
    presets: [["@babel/preset-env", { debug: true }], "@babel/preset-react"],
    plugins: [
      ["@babel/plugin-transform-react-jsx", {
        targets: api.env('test') ? {node: "current"} : "defaults",
        pragma: "h",
        pragmaFrag: "Fragment"
      }
      ],
      "@babel/plugin-transform-class-properties",
      "@babel/plugin-transform-private-methods"
    ],
    ignore: api.env('test') ? [] : ["./node_modules/"],
    targets: api.env('test') ? {node: "current"} : "cover 99.5%, not dead"
  }
}
