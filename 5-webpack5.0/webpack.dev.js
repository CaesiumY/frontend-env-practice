const { merge } = require("webpack-merge");
const common = require("./webpack.common"); // 웹팩을 환경별로 정해줍니다.(packages.json에서 run scripts 세팅 필요)

module.exports = merge(common, {
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  devServer: {
    contentBase: "/dist",
    hot: true,
  },
});
