const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js"
  },
  output: {
    filename: "[name].bundle.js",
    chunkFilename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: "graphql-tag/loader"
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.yaml$/,
        use: [{ loader: "json-loader" }, { loader: "yaml-loader" }]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto"
      },
      {
        test: /\.(ts|tsx)$/,
        loader: require.resolve("babel-loader"),
        options: {
          presets: [["react-app", { flow: false, typescript: true }]]
        }
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-url-loader",
            options: {}
          }
        ]
      }
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, "./src"), "node_modules"],
    extensions: [".js", ".ts", ".tsx", ".json", ".mjs", ".graphql"],
    alias: {
      hooks: path.resolve(__dirname, "./src/hooks"),
      enums: path.resolve(__dirname, "./src/enums"),
      helpers: path.resolve(__dirname, "./src/helpers"),
      themes: path.resolve(__dirname, "./src/themes")
    }
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new CopyWebpackPlugin([{ from: "src/assets/fonts", to: "fonts/" }]),
    new HtmlWebPackPlugin({
      title: "Offcourse",
      baseHref: "/",
      filename: "index.html",
      googleAnalytics: {
        trackingId: "UA-113174828-1",
        pageViewOnLoad: true
      },
      inject: false,
      links: [
        {
          rel: "preload",
          as: "font",
          crossorigin: true,
          href: "fonts/NGB.woff"
        },
        {
          rel: "preload",
          as: "font",
          crossorigin: true,
          href: "fonts/NGN.woff"
        }
      ],
      mobile: true,
      template: require("html-webpack-template"),
      appMountIds: ["main", "navbar", "backdrop", "sidebar", "overlay"]
    }),
    new WebpackPwaManifest({
      name: "Offcourse",
      short_name: "Offcourse",
      display: "fullscreen",
      description: "Open Source Platform for Crowdlearning",
      background_color: "#658f7b",
      icons: [
        {
          src: path.resolve("src/assets/logo.png"),
          sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
        },
        {
          src: path.resolve("src/assets/logo.png"),
          size: "1024x1024" // you can also use the specifications pattern
        }
      ]
    })
  ]
};
