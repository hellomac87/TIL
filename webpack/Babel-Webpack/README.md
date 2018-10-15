# Babel + Webpack 을 사용하여 es6 환경 구축하기

현재 브라우저는 ES6를 완전하게 지원하지 않는다.

ES6를 사용하여 프로젝트를 진행하려면 ES6로 작성된 코드를 IE를 포함한 모든 브라우저에서 문제 없이 동작시키기 위한 개발환경을 구축하는 것이 필요하다. 특히 모듈의 경우, 모듈 로더가 필요하다. `트랜스파일러(Transpiler) Babel`과 `모듈 번들러(Module bundler) Webpack`을 이용하여 ES6 개발환경을 구축하여 보자

## 1. Babel CLI 설치

Babel은 트랜스파일러(Transpiler)로서 ES6를 ES5 이하의 버전으로 트랜스파일링한다.

`npm`을 사용하여 `Babel CLI`을 설치한다. 프로젝트별로 설정이 다를 수 있으므로 전역으로 설치하지 말고 `로컬로 설치`하도록 하자.



```bash
$ mkdir es6-project && cd es6-project
$ npm init -y
$ npm install babel-cli --save-dev
# babel 7
$ npm install @babel/cli --save-dev
```

## babelrc 설정 파일 작성