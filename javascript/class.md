# Class

JavaScript class는 ECMAScript 6을 통해 소개되었으며, 기존 prototype 기반의 상속 보다 명료하게 사용할 수 있다.

# 정의

Class는 사실 함수이다. 함수를 함수 표현식과 함수 선언으로 정의할 수 있듯이 class 문법도 class 표현식과 class 선언 두 가지 방법을 제공한다.

## Class 선언

## Constructor (생성자)

constructor 메소드는 class 로 생성된 객체를 생성하고 초기화하기 위한 특수한 메소드입니다.  

"constructor" 라는 이름을 가진 특수한 메소드는 클래스 안에 한 개만 존재할 수 있습니다. 
(만약 클래스에 한 개를 초과하는 constructor 메소드를 포함한다면, SyntaxError 가 발생할 것입니다.)

constructor는 부모 클래스의 constructor 를 호출하기 위해 super 키워드를 사용할 수 있습니다.

## class field

클래스 블록 안에서 할당 연산자(=)를 이용해 인스턴스 속성을 지정할 수 있는 문법을 클래스 필드(class field)라고 합니다.


```js
class Myclass{
  someFunc(){
    // ... es6에서는 클래스 안의 메서드를 함수 리터럴로 작성합니다.
  }

  someFunc = () => {
    // ... 이와같은 화살표 함수는 문법에러가 발생합니다.
  }
}
```
하지만 babel을 활용하여 클래스 필드 문법을 사용하면
```js
class Myclass{
  someFunc = () => {
    // ... 가능? 응 가능.
  }
  a = 1; // ... 이것도 가능? 응 가능
}
```
왜냐면 `=`할당 문법을 사용할 수 있기 때문이죠.

### 클래스 필드와 this
class 블록은 새로운 블록 스코프를 형성하고, 이 내부에서 사용된 this는 인스턴스 객체를 가리키게 됩니다.
```js
class Myclass{
  someFunc = () => {
    // ... 찍어봐야 암? 응 찍어봐야 암
    console.log(this);
  }
}

new Myclass().someFunc();
// Myclass { someFunc: [Function] } 
```
화살표 함수로 사용할 수 있다는 것이 중요한데, 화살표 함수는 this의 동작 방식이 일반적인 메소드와는 다르기 때문입니다.
일반적인 메소드는 클래스의 prototype 속성에 저장되는 반면, 클래스 필드는 인스턴스 객체에 저장됩니다.
화살표 함수의 this는 호출 형태에 관계없이 항상 인스턴스 객체를 가리키게 됩니다.

이러한 성질은 react class component를 다룰때 활용 할 수 있습니다.

```js
import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      foo: 'bar'
    }
  }
  handleClick = () => {
    alert(this.state.foo)
  }
//   handleClick (){
//     alert(this.state.foo)
//   } 
// 요로코롬 일반적인 메서드로 선언을 하면
// <h1 onClick={this.handleClick.bind(this)}>Hello CodeSandbox</h1>
// 요렇게 인스턴스랑 묶어줘야 작동합니다.
  render() {
    return (
      <div className="App">
        <h1 onClick={this.handleClick}>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

this의 작동방식 때문에 암튼 알아둬야할 개념입니다. 그냥 한번 써보면 이해가 될것입니당.

## ref

- [MDN-Class](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes)
- [hellojavascript-Class](https://helloworldjavascript.net/pages/270-class.html)

- [https://www.zerocho.com/category/ECMAScript/post/5759cd68b15f881700c32592](https://www.zerocho.com/category/ECMAScript/post/5759cd68b15f881700c32592)
- [https://poiemaweb.com/es6-class](https://poiemaweb.com/es6-class)