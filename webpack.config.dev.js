const merge = require("webpack-merge");
const webpackConfig = require("./webpack.config");
const path = require("path");

module.exports = merge(webpackConfig, {
  devtool: "eval-source-map",

  output: {
    pathinfo: true,
    publicPath: "/",
    filename: "[name].js"
  },

  devServer: {
    host: "0.0.0.0",
    port: 8080,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  }
});
