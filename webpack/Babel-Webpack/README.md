# Babel + Webpack 을 사용하여 es6 환경 구축하기

대부분의 브라우저는 ES6를 완전하게 지원하지 않는다고한다.

- ES6를 사용하여 프로젝트를 진행하려면 ES6로 작성된 코드를 IE를 포함한 모든 브라우저에서 문제 없이 동작시키기 위한 개발환경을 구축하는 것이 필요.

- `트랜스파일러(Transpiler) Babel`과 `모듈 번들러(Module bundler) Webpack`을 이용하여 ES6 개발환경을 구축

## Babel

Babel은 트랜스파일러(Transpiler)로서 ES6를 ES5 이하의 버전으로 트랜스파일링한다.

### devDependencies
```bash
$ npm install babel-cli --save-dev
$ npm install babel-preset-es2015 --save-dev
$ npm install babel-preset-env --save-dev
```

### babelrc 설정 파일 작성
```json
{
  "presets": ["env"]
}
```

### build

```json
{
  //...
  "scripts": {
    "build": "babel src/js -w -d dist/js"
  },
  // ...
}
```
src/js 폴더의 ES6 파일을 트랜스파일링한 후, 결과물을 dist/js 폴더에 저장.

> -w
파일 변경을 감지하여 자동으로 트랜스파일한다. (--watch 옵션의 축약형)

> -d 
결과물이 저장될 폴더를 지정한다. (--out-dir 옵션의 축약형)

```bash
$ npm run build

> es6-project@1.0.0 build /Users/leeungmo/Desktop/es6-project
> babel src/js -w -d dist/js

src/js/lib.js -> dist/js/lib.js
src/js/main.js -> dist/js/main.js
```