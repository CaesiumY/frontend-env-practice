const path = require("path");
const MyPlugin = require("./src/plugins/myPlugin");

module.exports = {
  mode: "development",

  entry: {
    main: "./src/app.js",
  },

  output: {
    path: path.resolve("./dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "url-loader",
        options: {
          publicPath: "./dist/",
          name: "[name].[ext]?[hash]",
          limit: 10000,
        },
      },
      {
        test: /\.js$/,
        use: [path.resolve("./src/loader/myLoader.js")],
      },
    ],
  },
  plugins: [new MyPlugin()],
};
