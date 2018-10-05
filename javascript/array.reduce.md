# array.reduce();

오늘은 reduce 메소드에 대해 알아보자.

## reduce

reduce 메소드는 모든 요소의 값을 종합해서 하나의 값으로 만드는 계산을 할 때 사용합니다.

```js
const array1 = [1, 2, 3, 4];
//const reducer = (accumulator, currentValue) => accumulator + currentValue;
const reducer = array1.reduce((acc, cur) => acc + cur, 0);
```
## 문법

> arr.reduce(callback[, initialValue])

### callback

배열의 각 (요소) 값에 대해 실행할 함수. 인수(argument) 4개를 취하며, 각 인수는 다음과 같습니다 :
- accumulator
    - accumulator는 콜백의 반환값을 누적합니다. 초기값(initialValue)이 주어진 경우에는 그 값(아래 참조) 또는 콜백의 마지막 호출에서 이전에 반환된 누적값입니다.

- currentValue 
    - 배열 내 현재 처리되고 있는 요소.

- currentIndexOptional
    - 배열 내 현재 처리되고 있는 요소의 인덱스. 초기값(initialValue)이 주어진 경우 0부터, 그렇지 않으면 1부터 시작합니다.

- array(Optional)
    - reduce()가 호출된 배열.

- initialValue(Optional)
    - 콜백(callback)의 첫 번째 호출에서 첫 번째 인수로 사용되는 값. 초기값이 주어지지 않은 경우에는 배열의 첫 번째 요소가 사용됩니다. 빈(empty) 배열에서 초기값 없이 reduce()를 호출하면 에러가 발생합니다.

- 반환 값Section
    - 누적 계산의 결과를 반환 합니다.

## 해봅시다
### map 메소드를 reduce 로 구현하기
```js
// map
const arr = [1,2,3,4,5];
const newArr = arr.map(item => item + 1); // 새 배열 반환

console.log(newArr);

// reduce
const newArr2 = arr.reduce(function(acc, item){
  acc.push(item + 1);
  return acc;
},[]);

console.log(newArr2);
```
### filter 메소드를 reduce 로 구현하기
```js
// map
const arr = [1,2,3,4,5];
const newArr = arr.filter(item => item%2 === 0 ); // 새 배열 반환

console.log(newArr);

// reduce
const newArr2 = arr.reduce(function(acc, item){
  if(item%2 === 0){
    acc.push(item);
  }
  return acc;
  
},[]);

console.log(newArr2);
```
## 배열 예시

문제 2. 배열을 입력받아, 해당 배열에 들어있는 요소들 중 최대값을 찾는 함수를 작성하세요. (`Array.prototype.reduce`를 이용하세요)

```js
function max(arr){
  // reduce를 쓸 때
  // acc '누적값의 역할'이 무엇인지를 잘 정하는 것이 중요하다.
  return arr.reduce((acc, item) => {
    if(acc > item){
      return acc;
    }else{
      return item;
    }
  },0);
}
// ===
function max(arr){
  return arr.reduce((acc, item) =>  acc > item ? acc : item, -Infinity);
}
```
## Ref

- [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
- [https://www.zerocho.com/category/JavaScript/post/5acafb05f24445001b8d796d](https://www.zerocho.com/category/JavaScript/post/5acafb05f24445001b8d796d)
- []()