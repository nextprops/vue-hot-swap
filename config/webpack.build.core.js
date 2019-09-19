const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { resolve, getDlls } = require("./utils");

const webpackConfig = {
  mode: "production",
  entry: {
    core: "./src/core/"
  },
  output: {
    path: resolve("dist/core"),
    publicPath: "./core/",
    filename: "[name].[contenthash].js",
    libraryTarget: "var"
  },
  // devtool: "source-map",
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "public/index.html",
      filename: "../index.html",
      dlls: getDlls()
    }),
    new CopyWebpackPlugin([
      {
        from: resolve("static"),
        to: resolve("dist/static"),
        ignore: [".*"]
      },
      {
        from: resolve("public/config.js"),
        to: resolve("dist/config.js")
      },
      {
        from: resolve("public/favicon.ico"),
        to: resolve("dist/favicon.ico")
      }
    ])
  ]
};

module.exports = merge(common, webpackConfig);
