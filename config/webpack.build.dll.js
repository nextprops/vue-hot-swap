const webpack = require("webpack");
const path = require("path");

// clear
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: {
    core: [
      "vue/dist/vue.esm.js",
      "vue-router",
      "vuex",

      "axios",
      "loadjs"
    ],
    // frame: [""],
    material: ["moment"]
  },
  output: {
    filename: "[name].[chunkhash].dll.js",
    path: path.join(__dirname, "../static/dll"),
    library: "[name]_[chunkhash]"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DllPlugin({
      path: path.join(__dirname, "../static/dll", "[name].manifest.json"),
      name: "[name]_[chunkhash]"
    })
  ]
};
