const path = require("path");

module.exports = {
  mode: "development",
  entry: { bundle: "./src/index.js" },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    // assetModuleFilename: "images/[hash][ext][query]", // asset 타입을 통해 만들어진 파일들을 모두 모아두는 곳을 설정합니다.
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
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
       type: 'asset/source', // 기존의 raw-loader를 대체합니다.
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: "asset", // 8kb를 경계로 resource와 inline 중 알아서 선택합니다.
        generator: {
          filename: "static/[hash][ext][query]",
        },
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024 // 함수를 통해 4kb로 바꿔줄 수도 있습니다.
          }
        }
       }
    ],
  },
};
