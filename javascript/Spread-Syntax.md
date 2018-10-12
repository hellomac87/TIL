# Spread Syntax

Spread 문법을 사용하면 배열(혹은 객체)을 다른 배열(혹은 객체)에 쉽게 삽입할 수 있습니다. 나머지 매개변수(rest parameters) 문법과 같은 기호인 ...가 사용되지만, 그 의미는 다릅니다.

## 배열

Spread 문법을 통해 배열 리터럴의 중간에 다른 배열을 이어붙일 수 있습니다. 이 때, arr1 안에 있는 요소들이 arr2 안으로 복사됩니다.

```js
const arr1 = [3, 4];
const arr2 = [1, 2, ...arr1, 5]; // [1, 2, 3, 4, 5]

// 이전에는 같은 작업을 하기 위해 `Array.prototype.concat` 메소드를 사용했습니다.
[1, 2].concat(arr1).concat([5]) // [1, 2, 3, 4, 5]
```
또한 배열 리터럴 안에 다른 요소를 써주지 않음으로써, 배열 전체를 쉽게 복사할 수 있습니다.
```js
const arr1 = [1, 2, 3];
const arr2 = [...arr1];

// 이전에는 같은 작업을 하기 위해 `Array.prototype.slice` 메소드를 사용했습니다.
arr1.slice();
```
다만, 이 때 역시 깊은 복사가 아니라 `얕은 복사`를 한다는 점을 기억하세요.

Spread 문법은 함수 호출 시에도 사용할 수 있습니다. 이 때 배열의 모든 요소를 함수의 인수로 넘깁니다.

```js
const arr = [1, 2, 3, 4, 5];

// 아래 코드는 `Math.max(1, 2, 3, 4, 5)`와 동일합니다.
Math.max(...arr); // 5

// 이전에는 같은 작업을 하기 위해 `Function.prototype.apply` 메소드를 사용했습니다.
Math.max.apply(null, arr); 
```

## 객체

객체에 대해서도 spread 문법을 사용할 수 있습니다. 이 때 자기 자신의(own) 열거 가능한(enumerable) 속성만을 복사합니다.

```js
const obj1 = {prop: 1};
const obj2 = {...obj1};

// 이전에는 같은 작업을 하기 위해 `Object.assign` 정적 메소드를 사용했습니다.
Object.assign({}, obj1);
```
아직 몇몇 브라우저에 이 문법이 구현되어 있지 않기 때문에, 이 문법을 사용하려면 Babel 플러그인 혹은 TypeScript 등의 트랜스파일러를 사용해야 합니다.