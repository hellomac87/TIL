# List and key
리액트에서 리스트 컴포넌트를 작성하면 다음과 같은 에러메세지는 한번쯤 만나보게 된다.

`Warning: Each child in an array or iterator should have a unique "key" prop.`

배열의 각 자식은 특별한 key prop을 가져야 한다는 내용이다.

## note

리액트는 리스트를 렌더링 하는 것에 매우 유능하당. 어찌보면 과하게 유능하당.
배열 아이템들을 렌더링 할 때마다, 리액트는 리스트를 만드는 것이라 가정한다.(먼소리?)
리액트는 리스트를 렌더링하는 프로세스를 최대한 최적화하여 만들 것임.
수많은 값을 가진 배열이 있고, 그중 하나의 정보를 업데이트 해야한다고 가정하자.
그 중에 업데이트 해야할 값이 무엇인지 정확히 알지 못한다묜?
모든 값을 재생성하여 업데이트 할 것인가?
아니면 업데이트가 필요한 특정 값만을 업데이트 할 것인가?
뭐가빠를까용?

리스트를 만들면서 특별한 요소를 위한 ID를 가지고 있다면 요소가 바뀔 때, 어떤 요소인지 알아채고 업데이트 한다.

리스트 데이터를 렌더링하는 보편적 접근은 데이터의 id를 사용하는 것임.

```js
array.map((some) => {
    return <ListComponent key={some.UniqueValue} />
});

```
일관성을 갖고 있으면서, 대충 요로코롬 넣어주면 댐
## ref

리액트 공식문서 List and Keys

[https://reactjs.org/docs/lists-and-keys.html](https://reactjs.org/docs/lists-and-keys.html)