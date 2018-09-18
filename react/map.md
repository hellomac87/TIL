# map

## note
리액트 쓸때는 for 문과 멀어져있자.

map 같은 이터레이터를 쓰쟈.

자바스크립트로 구문을 쓴다면, 배열을 반복하기 위해 이렇게 쓸꺼임
```js
var array = [1, 2, 3];
for(var i=0; i < array.length; i++){
    ...some func
}
```

대신 빌트인 헬퍼(?)인 map을 쓴다묜?

map은 array의 프로퍼티임
```js
var array = [1, 2, 3];
array.map(function(number){
    return number * 2;
});

// 결과 [2, 4, 6]
```
배열의 각 요소는 함수를 하나씩 통과한다. 즉, 이 함수는 세번 실행됨.

> map 을 통해 새로운 배열이 반환되는데, 이 새로울 배열의 각 값은 함수를 통해 새로 반환되는 것임.

그래서 리액트에서 map을 사용하는건 리스트를 만들기 위한 매우 편리한 방법임.

ㄷㅏ른것을 시도해 볼까

```js
array.map(function(number){
    return '<div>' + number + '</div>'
});

// 결과 ["<div>1</div>","<div>3</div>","<div>3</div>"]
```
요런식으로 JSX 를 활용하면 JSX의 배열이니까 ㄹㅣ액트로 렌더링이 가능함

## ref
[MDN - Array.prototype.map](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map)