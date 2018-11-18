const path = require('path');
const mvcAppPath = path.resolve(
  __dirname,
  "../MVCAngular6"
);
module.exports = {
    module: {
        rules: [
          {
              test: /\.cool$/,
              use: 'cool-loader'
          }
        ]
    },
    "entry": {
        "main-app": [
          "./src\\modules\\app\\main.ts"
        ],
        "main-lazy": [
          "./src\\modules\\lazy-load\\main.ts"
        ],
        "polyfills": [
          "./src\\polyfills.ts"
        ],
        "styles": [
          "./src\\styles.scss"
        ],

    },
    "output": {
        "path": path.join(mvcAppPath, "dist"),
        "publicPath": "./dist/",
        "filename": "[name].bundle.js",
        //"chunkFilename": "[id].chunk.js",  .[hash]
        "chunkFilename": "[name].chunk.js",
        "crossOriginLoading": false
    },
};