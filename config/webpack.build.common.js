const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const { generateModulesMap } = require("./utils");

// 构建前清理
const CleanWebpackPlugin = require("clean-webpack-plugin");
// 路径获取
const resolve = require("./utils").resolve;

module.exports = function(type, marial) {
  let entry = {};
  entry[marial] = `./src/${type}/${marial}/`;
  console.log('-------------entry[marial]',entry[marial])
  const webpackConfig = {
    mode: "production",
    entry,
    output: {
      path: resolve(`dist/${type}/${marial}`),
      publicPath: `./${type}/${marial}/`,
      filename: "[name].[contenthash].js",
      library: `${type}_${marial}`,
      libraryTarget: "umd"
    },
    // devtool: "source-map",
    plugins: [
      new CleanWebpackPlugin(),
      // 解决动态模块导入打包重名的问题
      new webpack.NamedChunksPlugin(chunk => marial + "/" + chunk.name)
    ]
  };
  setTimeout(function() {
    generateModulesMap();
  },5000);
  return merge(common, webpackConfig);
};
