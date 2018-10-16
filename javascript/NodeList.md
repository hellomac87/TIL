# NodeList

DOM 작업을 하다보면 `document.querySelectorAll`를 다루게 된다.

`document.querySelectorAll`을 통해 반환되는 객체는 `NodeList`인데,

`NodeList객체`는 `element.childNodes 속성` 및 `document.querySelectorAll` 메서드에 의해 반환되는 `노드의 컬렉션`이다.


> NodeList 가 Array 는 아니지만, forEach() 를 사용하여 반복할 수 있습니다. 또한 Array.from() 을 사용하여 Array 로 변환 할 수도 있습니다.

크롬 브라우저 콘솔에서 찍어보면 밑에처럼 나온다.

console
```bash
const testList = document.querySelectorAll('.pinned-repo-item');
testList;
NodeList(6)[...]
```

요것이 `NodeList`

배열이네? 하고 `testList.map(item => console.log(item));` 처럼 맵을 돌려봤다.

```bash
testList.map(item => console.log(item));

VM884:1 Uncaught TypeError: testList.map is not a function
    at <anonymous>:1:10
```
어림없죠? 정체가 뭐죠?

```bash
testList.forEach(item => console.log(item));
// 암튼 됨
```
## 메서드(Methods)

- NodeList.item()
    - 항목(item)의 인덱스를 반환하며 인덱스 범위 외인 경우에는 null을 반환한다. 이는 nodeList[idx]의 대안으로 사용할 수 있다. (nodeList[idx] 는 idx 가 범위를 벗어날 땐 undefined 를 반환한다.)

- NodeList.entries()
    - 이 객체에 포함된 모든 키/값 쌍을 순회하며 처리할 수 있는 iterator 를 반환한다.

- NodeList.forEach()
    - NodeList의 요소마다 한 번씩, 인자로 전달 받은 함수를 실행한다.

- NodeList.keys()
    - 객체에 포함된 키/값 쌍의 모든 키(key)를 처리할 수 있는 iterator를 반환한다.

- NodeList.values()
    - 객체에 포함된 키/값 쌍의 모든 값(value)을 처리할 수 있는 iterator를 반환한다.

이러한 메서드가 있다고 한다.

## 특이점

난 `map`메서드를 죽어도 쓰고싶다?
```js
[...testList].map(item => console.log(item));
```
이르케쓰믄댐 ㅎㅎ

## ref
[MDN - NodeList](https://developer.mozilla.org/ko/docs/Web/API/NodeList)

