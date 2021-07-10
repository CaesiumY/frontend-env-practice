module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  // TODO: 프리티어 설정을 추가하세요.
  //   plugins: ["prettier"],
  //   rules: {
  //     "prettier/prettier": "error",
  //   },
};
