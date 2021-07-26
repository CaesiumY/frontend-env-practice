const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: { index: "./src/index.js", print: "./src/print.js" },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    // assetModuleFilename: "images/[hash][ext][query]", // asset 타입을 통해 만들어진 파일들을 모두 모아두는 곳을 설정합니다.
    clean: true, // dist의 폴더 내용을 제거하고 다시 설치
    publicPath: "/", // 서버에서 파일이 올바르게 제공되는지 확인하기 위해 요청할 주소
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource", // 기존의 file-loader를 대체합니다.
        generator: {
          filename: "static/[hash][ext][query]", // 생성되는 파일의 경로 및 이름을 정합니다.
        },
      },
      {
        test: /\.html/,
        type: "asset/resource",
        generator: {
          filename: "static/[hash][ext][query]",
        },
      },
      {
        test: /.svg$/i, // 모든 svg 파일들은 data URI로 번들됩니다. 용량이 작으면 data URI가 효율이 좋습니다.
        type: "asset/inline", // 기존의 url-loader를 대체합니다.
        generator: {
          filename: "static/[hash][ext][query]",
        },
      },
      {
        test: /\.txt/, // 파일 그대로 번들됩니다.
        type: "asset/source", // 기존의 raw-loader를 대체합니다.
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: "asset", // 8kb를 경계로 resource와 inline 중 알아서 선택합니다. 가능하면 이게 편합니다.
        generator: {
          filename: "static/[hash][ext][query]",
        },
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024, // 함수를 통해 4kb로 바꿔줄 수도 있습니다.
          },
        },
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      title: "Caching",
    }), // html 파일을 동적으로 다시 생성
    new MiniCssExtractPlugin(), // css 파일을 따로 생성해 최적화
  ],
  optimization: {
    moduleIds: 'deterministic',

    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    }, // 중복된 부분을 분할해준다.
    runtimeChunk: "single", // 런타임 번들을 분할해준다.
  },
};
