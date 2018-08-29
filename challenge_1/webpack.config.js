const path = require("path");

const ENTRY_POINT = path.resolve(__dirname, "client/app.jsx");
const OUTPUT_PATH = path.resolve(__dirname, "public");
const RULES = [
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/react", "@babel/preset-env"]
      }
    }
  }
];

module.exports = {
  entry: ENTRY_POINT,
  output: {
    filename: "app.js",
    path: OUTPUT_PATH
  },
  module: {
    rules: RULES
  },
  devtool: "source-map",
  mode: "development",
  watch: true
};
