const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = env => {
  const plugins = [
    new MiniCssExtractPlugin({
      filename: "css/[name].[hash].css"
    })
  ];
  if (env.NODE_ENV === "production") {
    plugins.push(new CleanWebpackPlugin());
  }
  return {
    mode: "production",
    optimization: {
      minimizer: [
        new OptimizeCSSAssetsPlugin(),
        new UglifyJsPlugin(),
        new HtmlWebpackPlugin({
          title: "Invie",
          template: path.resolve(__dirname, "index.html"),
          filename: path.resolve(__dirname, "index.html"),
          minify: {
            collapseWhitespace: true,
            removeComments: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            useShortDoctype: true
          }
        })
      ]
    },
    entry: {
      invie: path.resolve(__dirname, "./src/index.js")
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "js/[name].[hash].js",
      publicPath: "dist",
      chunkFilename: "js/[id].[chunkhash].js"
    },
    module: {
      rules: [
        {
          test: /\.(css)$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            "css-loader"
          ]
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          use: [
            {
              loader: "babel-loader"
            }
          ]
        },
        {
          test: /\.(jpg|png|gif|svg)$/,
          use: {
            loader: "url-loader",
            options: {
              limit: 100000000,
              fallback: "file-loader",
              name: "/images/[name].[ext]"
            }
          }
        },
        {
          test: /\.(|woff|eot|ttf|)$/,
          use: {
            loader: "url-loader",
            options: {
              limit: 100000000,
              fallback: "file-loader",
              name: "/fonts/[name].[hash].[ext]"
            }
          }
        }
      ]
    },
    plugins
  };
};
