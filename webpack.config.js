var webpack = require("webpack");
var path = require("path");
var package = require("./package.json");

// variables
var isProduction = process.argv.indexOf("-p") >= 0 || process.env.NODE_ENV === "production";
var sourcePath = path.join(__dirname, "./src");
var outPath = path.join(__dirname, "./build");

// plugins
var HtmlWebpackPlugin = require("html-webpack-plugin");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var WebpackCleanupPlugin = require("webpack-cleanup-plugin");

module.exports = {
  entry: {
    app: ["./src/main.tsx"],
    vendor: ["react", "react-dom"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].bundle.js"
  },
  optimization: {
    splitChunks: {
      name: true,
      cacheGroups: {
        commons: {
          chunks: "initial",
          minChunks: 2
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: "all",
          filename: isProduction ? "vendor.[contenthash].js" : "vendor.[hash].js",
          priority: -10
        }
      }
    },
    runtimeChunk: true
  },
  devtool: isProduction ? "hidden-source-map" : "cheap-module-eval-source-map",
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
    mainFields: ["module", "browser", "main"],
    alias: {
      "@actions": path.resolve(__dirname, "src/actions"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@components": path.resolve(__dirname, "src/components"),
      "@constants": path.resolve(__dirname, "src/constants"),
      "@middleware": path.resolve(__dirname, "src/middleware"),
      "@models": path.resolve(__dirname, "src/models"),
      "@reducers": path.resolve(__dirname, "src/reducers"),
      "@services": path.resolve(__dirname, "src/services"),
      "@store": path.resolve(__dirname, "src/store"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@views": path.resolve(__dirname, "src/views"),
      "@utils": path.resolve(__dirname, "src/utils")
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader"
      },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        test: /\.scss$|.css$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader?limit=15000&name=images/[name].[ext]"
          }
        ]
      },
      {
        test: /\.mp3$/,
        use: [
          {
            loader: "url-loader?limit=15000&name=media/[hash].[ext]"
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "url-loader?limit=15000&name=fonts/[hash].[ext]"
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: "development", // use 'development' unless process.env.NODE_ENV is defined
      DEBUG: false
    }),
    new WebpackCleanupPlugin(),
    new MiniCssExtractPlugin({
      filename: "[hash].css",
      disable: !isProduction
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/assets", "index.html"),
      minify: {
        minifyJS: true,
        minifyCSS: true,
        removeComments: true,
        useShortDoctype: true,
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true
      },
      append: {
        head: `<script src="//cdn.polyfill.io/v3/polyfill.min.js"></script>`
      },
      meta: {
        title: package.name,
        description: package.description,
        keywords: Array.isArray(package.keywords) ? package.keywords.join(",") : undefined
      }
      // favicon: "./src/assets/favicon.png"
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
      options: {
        publicPath: "/"
      }
    })
  ]
};
