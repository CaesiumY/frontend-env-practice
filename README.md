# 프론트엔드 개발환경의 이해와 실습

![강의 썸네일](https://cdn.inflearn.com/public/courses/324671/course_cover/638eee1a-6381-402d-a17b-3724751414f1/frontend-env-eng.png)

[강의 링크](https://www.inflearn.com/course/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EA%B0%9C%EB%B0%9C%ED%99%98%EA%B2%BD)
# 목차

0. 매 챕터 튜토리얼
1. [`webpack`](./1-webpack)
   1. entry
   2. loader
   3. plugin
2. [`babel`](./2-babel)
   1. babel
   2. scss
3. [`lint`](./3-lint)
   1. eslint
   2. prettier
4. [`webpack-advanced`](./4-webpack-advanced)
   1. dev-server
   2. HMR(Hot Module Reloading)
   3. optimaization
5. [`webpack 5.0`](./5-webpack5.0)

# 5 - webpack 5.0

기존 강의는 `4.0`기반이므로, `5.0` 트렌드에 맞춰 개인적으로 공부 및 실습

> 5.0 공부 참고자료
> - [웹팩 핸드북](https://joshua1988.github.io/webpack-guide/)
> - [웹팩 공식문서(한글화)](https://webpack.kr/)

## 겪은 문제들

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
