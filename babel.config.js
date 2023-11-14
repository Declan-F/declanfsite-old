/** @preserve
 * Copyright 2023 Declan Fodor
 */
module.exports = api => {
  return {
    presets: [["@babel/preset-env", { debug: false }], "@babel/preset-react"],
    plugins: [
      ["@babel/plugin-transform-react-jsx", {
        // Jest needs to be able to use babel as well, but we need different targets since jest only supports commonjs
        targets: api.env('test') ? {node: "current"} : "defaults",
        // Allows babel to change jsx into preact code
        pragma: "h",
        pragmaFrag: "Fragment"
      }
      ],
      "@babel/plugin-transform-class-properties",
      "@babel/plugin-transform-private-methods"
    ],
    // Jest might need to convert preact to commonjs
    ignore: api.env('test') ? [] : ["./node_modules/"],
    targets: api.env('test') ? {node: "current"} : "cover 95%, not dead"
  }
}
