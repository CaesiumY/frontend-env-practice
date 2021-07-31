const { merge } = require("webpack-merge");
const common = require("./webpack.common"); // 웹팩을 환경별로 정해줍니다.(packages.json에서 run scripts 세팅 필요)
// const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map", // 성능 우선 소스맵
  // optimization: {
  //   minimizer: [
  //     ...[
  //       new CssMinimizerPlugin({
  //         test: /\.css$/i,
  //       }),
  //     ],
  //   ],
  // },
});
