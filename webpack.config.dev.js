const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    invie: path.resolve(__dirname, "./src/index.js")
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "js/[name].js",
    publicPath: "./dist"
  },
  devServer: {
    //
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
          },
          {
            presets: ["@babel/preset-env", "@babel/react"]
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
            name: "/images/[name].[hash].[ext]"
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
  plugins: [
    new MiniCssExtractPlugin({
      filename: "/css/[name].css"
    })
  ]
};
