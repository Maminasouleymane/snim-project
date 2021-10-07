/* eslint-disable max-len */
const path = require("path");

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  // ! help us to locate errors instead of show the error inside bundle.js (witch is a HOT MESS) we're send to the error's component
  devtool: "eval-cheap-module-source-map",
  // ! it's a replacement to the combination of live-server(update the browser) and webpack --watch (watch for changes in our components)
  devServer: {
    contentBase: path.join(__dirname, "public"),
    port: 8099,
    historyApiFallback: true,
  },
};
