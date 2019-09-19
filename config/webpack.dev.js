const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { resolve, getDlls } = require("./utils");

module.exports = merge(common, {
  mode: "development",
  entry: {
    app: "./src/core/"
  },
  output: {
    publicPath: "/"
  },
  devtool: "inline-source-map",
  devServer: {
    hot: true,
    overlay: true,
    stats: "errors-only",
    open: false,
    proxy: {
      "/api": "http://localhost:8888"
    }
    // historyApiFallback: {
    //   index: "src/index.html"
    // }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      dlls: getDlls()
    }),
    new CopyWebpackPlugin([
      {
        from: resolve("static"),
        to: "static",
        ignore: [".*"]
      },
      {
        from: resolve("public/config.js"),
        to: "config.js"
      },
      {
        from: resolve("public/favicon.ico"),
        to: "favicon.ico"
      }
    ])
  ]
});
