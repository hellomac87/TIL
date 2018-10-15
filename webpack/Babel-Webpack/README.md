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
```

## 2. babelrc 설정 파일 작성
Babel을 사용하려면 먼저 `env preset`을 설치해야 한다. `env preset`은 설정된 환경에 적합한 플러그인을 자동으로 설정해준다.
```bash
$ npm install babel-preset-env --save-dev
```
설치 완료 후 package.json
```json
{
  "name": "es6-project",
  "version": "1.0.0",
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-env": "^1.6.1"
  }
}
```
설치가 완료되었으면 프로젝트 루트에 .babelrc 파일을 생성하고 아래와 같이 작성한다.
```json
{
  "presets": ["env"]
}
```

## 3. 트랜스파일링

ES6를 ES5 이하로 트랜스파일링하기 위해 Babel CLI 명령어를 사용할 수도 있으나 npm scripts를 사용하여 트랜스파일링하는 방법에 대해 알아보도록 하자.

package.json 파일에 scripts를 추가한다. 완성된 package.json 파일은 아래와 같다.

```json
{
  "name": "es6-project",
  "version": "1.0.0",
  "scripts": {
    "build": "babel src/js -w -d dist/js"
  },
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-env": "^1.6.1"
  }
}
```

위 npm scripts는 src/js 폴더의 ES6 파일을 트랜스파일링한 후, 결과물을 dist/js 폴더에 저장한다. 사용한 옵션의 의미는 아래와 같다.

> -w
파일 변경을 감지하여 자동으로 트랜스파일한다. (--watch 옵션의 축약형)

> -d 
결과물이 저장될 폴더를 지정한다. (--out-dir 옵션의 축약형)


이제 트랜스파일링을 실행하기 위해 ES6 파일을 작성해 보자. 프로젝트 루트에 src/js 폴더를 생성한 후 main.js와 lib.js를 추가한다.

```js
// src/js/main.js
import { pi, square, Person } from './lib';

console.log(pi);
console.log(square(10));
console.log(new Person('Lee'));
```

```js
// src/js/lib.js
export const pi = Math.PI;

export function square(x) {
  return x * x;
}

export class Person {
  constructor(name) {
    this.name = name;
  }
}
```

터미널에서 아래 명령으로 트랜스파일링을 실행한다.

```bash
$ npm run build

> es6-project@1.0.0 build /Users/leeungmo/Desktop/es6-project
> babel src/js -w -d dist/js

src/js/lib.js -> dist/js/lib.js
src/js/main.js -> dist/js/main.js
```