module.exports = api => {
    return {
    "presets": ["@babel/preset-env", "@babel/preset-react"],
    "plugins": [
        ["@babel/plugin-transform-react-jsx", { 
                targets: api.env('test') ? {node: "current"} : "defaults",
                pragma: "h",
                pragmaFrag: "Fragment"
            }
        ]
      ],
      "ignore": api.env('test') ? [] : ["./node_modules/"]
    }
}
