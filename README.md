# 프론트엔드 개발환경의 이해와 실습

## Solutions

#### WSL2에서의 `webpack-dev-server` 오류

1. `webpack-dev-server@3` 를 `WSL` 환경에서 작동할 경우, 파일의 변화를 눈치채지 못함...

2. `webpack -w` 로 변화를 감지하는지 테스트 -> 변화 감지 못 함

3. `webpack.config.js`에 옵션 추가로 해결
  - ```js
    // webpack.config.js
    module.exports = {
      ...
      watchOptions: {
        poll: true,
      },
      ...
    };

    ```
