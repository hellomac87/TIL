# array.findIndex

## Note
react todolist 를 만들고 있었다. 
리스트 아이템 삭제 함수를 구현하는 도중.
벽에 부딪혔다.
내가 선택한 리스트 아이템 컴포넌트를 어떻게 선택할 수 있느냐 하는 것이었다.

> 제거시 구현하는 함수
```js
// 호출하는 함수 (하위 컴포넌트에 위치)
handleRemove = () => props.handleRemove(todoObj.id);

// 함수선언
handleRemove = (id) => {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);

    // slice 전후로 데이터들을 복사하고, 우리가 찾은 index는 제외시킵니다.
    this.setState({
      todos: [
        ...todos.slice(0, index),
        ...todos.slice(index + 1, todos.length)
      ]
    });
  }
```
```js
const index = todos.findIndex(todo => todo.id === id);
// 이 부분이 잘 이해되지 않음
```

## findIndex 메서드(Array)(JavaScript)

호출 함수에 지정된 테스트 조건을 충족하는 첫 번째 배열 요소의 인덱스 값을 반환합니다.

### 구문
arrayObj.findIndex(callbackfn [, thisArg]);

### 매개변수 
- arrayObj
    - 필수 요소.Array 개체입니다.

- callbackfn
    - 필수 요소.배열의 각 요소를 테스트하는 호출 함수입니다.

- thisArg
    - 선택적 요소.호출 함수에서 this 개체를 지정합니다.지정하지 않으면 this 개체가 정의되지 않습니다.

### 설명
findIndex는 요소가 true를 반환할 때까지 배열의 각 요소에 대해 한 번씩 오름차순으로 호출 함수를 호출합니다.요소가 true를 반환하는 즉시 findIndex에서 true를 반환하는 요소의 인덱스 값을 반환합니다.true를 반환하는 배열의 요소가 없는 경우 findIndex에서 -1을 반환합니다.

## 이해했는가?
```js
// 함수선언
handleRemove = (id) => {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);
    // todo.id 가 id 와 일치 할 때 까지 오름차순으로 배열을 돌려서 id 인자로 전한 id 값이 state의 해당 객체의 id 값과 일치 할때, true가 되고 그 인덱스 값을 반환한다.

    // 그 인덱스 값을 사용하여 밑에처럼 setState 를 처리한다.

    // slice 전후로 데이터들을 복사하고, 우리가 찾은 index는 제외시킵니다.
    this.setState({
      todos: [
        ...todos.slice(0, index),
        ...todos.slice(index + 1, todos.length)
      ]
    });
  }
```


## ref
- [https://msdn.microsoft.com/ko-kr/library/dn858235(v=vs.94).aspx](https://msdn.microsoft.com/ko-kr/library/dn858235(v=vs.94).aspx)

- [https://devdocs.io/javascript/global_objects/array/findindex](https://devdocs.io/javascript/global_objects/array/findindex)
- [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)