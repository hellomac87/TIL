# toggle class

- 리액트에서 css class toggle 하는방법
- 리액트에서 특정 element 만 class 토글하기 (ex/ list에서 특정 아이템만 활성화)

## 프로젝트

- github : [https://github.com/hellomac87/rgb-challeng-react](https://github.com/hellomac87/rgb-challeng-react)
- 배포 : [https://hardcore-johnson-2dfb4b.netlify.com/](https://hardcore-johnson-2dfb4b.netlify.com/)

## css 클래스도 상태로 관리한다.

```js
this.state = {
    // ...
    activeItem: {},
    // ...
}
// ...
handleClick(i){
    // ...
    this.setState({
      activeItem: { [i]: true }
    });
    // ...
  }
// ...
const circles = problems.map((problem, index) => {
      return (
        <Circle 
        key={index} 
        onClick={() => this.handleClick(index)} 
        style={problem}
        toggleClass={activeItem[index] ? 'circle active' : 'circle'}
        />
      )
    })
```

react 엘리먼트를 생성할때 인자로 인덱스 값을 넘김