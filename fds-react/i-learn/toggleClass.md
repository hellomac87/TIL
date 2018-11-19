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

## 김승하 강사님 토글 클래스 예제

```js
import React from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Board />
    </div>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: [
        {
          active: false
        },
        {
          active: false
        },
        {
          active: false
        }
      ]
    };
  }

  handleClick(index) {
    const newButtons = this.state.buttons.map((b, buttonIndex) => ({
      active: buttonIndex === index ? true : false
    }));
    this.setState({
      buttons: newButtons
    });
  }

  render() {
    return (
      <div>
        {this.state.buttons.map((b, index) => {
          const className = classNames({ active: b.active });
          return (
            <div
              className={className}
              key={index}
              onClick={() => this.handleClick(index)}
            >
              {index}
            </div>
          );
        })}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

```