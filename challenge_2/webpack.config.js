const path = require("path");

const ENTRY = path.resolve(__dirname, "client/index.jsx");
const OUTPUT = { path: path.resolve(__dirname, "public"), filename: "app.js" };

const MODULE = {
  rules: [
    {
      test: /\.jsx?$/,
      use: {
        loader: "babel-loader",
        options: { presets: ["@babel/react", "@babel/env"] }
      }
    },
    {
      test: /\.css$/,
      use: [{ loader: "style-loader" }, { loader: "css-loader" }]
    }
  ]
};

module.exports = {
  entry: ENTRY,
  output: OUTPUT,
  module: MODULE,
  devtool: "source-map",
  watch: true
};
