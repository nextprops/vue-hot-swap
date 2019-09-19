const webpack = require("webpack");
// Vue编译用
const VueLoaderPlugin = require("vue-loader/lib/plugin");
// 路径获取
const resolve = require("./utils").resolve;

module.exports = {
  output: {
    filename: "[name].bundle.[hash].js",
    path: resolve("dist/frame")
  },
  resolve: {
    extensions: ["*", ".js", ".vue", ".json"],
    alias: {
      vue$: "vue/dist/vue.esm.js",
      "@": resolve("src"),
      "@core": resolve("src/core"),
      "@frames": resolve("src/frames"),
      "@materials": resolve("src/materials")
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      },
      {
        test: /\.(sass|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: { outputPath: "img" }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: "file-loader",
            options: { outputPath: "font" }
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    // dll
    new webpack.DllReferencePlugin({
      manifest: require("../static/dll/core.manifest.json")
    }),
    new webpack.DllReferencePlugin({
      manifest: require("../static/dll/material.manifest.json")
    })
  ]
};
