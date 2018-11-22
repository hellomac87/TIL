# Context

## Context를 사용하면 일일이 props를 내려보내주지 않아도 데이터를 컴포넌트 트리 아래쪽으로 전달할 수 있습니다.

전형적인 React 어플리케이션에서, 데이터는 props를 통해 위에서 아래로 (부모에서 자식으로) 전달됩니다.
하지만 이런 방식은 몇몇 유형의 props에 대해서는 굉장히 번거로운 방식일 수 있습니다.
(예를 들어 언어 설정, UI 테마 등) 어플리케이션의 많은 컴포넌트들에서 이를 필요로 하기 때문입니다. 
Contetxt를 사용하면 prop을 통해 트리의 모든 부분에 직접 값을 넘겨주지 않고도, 값을 공유할 수 있습니다.

> **props를 통해 일일이 정보를 내려줘야 하는 불편함을 해결하기 위해 사용**
> *****app 전역에서*** 공유되어야 하는 정보를 다룰 때 사용**

```js
const ThemeContext = React.createContext('light'); // 컨텍스트 객체 만들기
ThemeContext.Provider // 제공 컴포넌트
ThemeContext.Consumer // 소비 컴포넌트
```

정보를 내려주고 싶은 영역을 Provider 로 감싼다.
ThemeContext.Consumer 
Consumer 사용 패턴
```js
<ThemeContext.Provider value="dark">
        <Toolbar />
</ThemeContext.Provider>

// ...
<ThemeContext.Consumer>
    {
        theme => <Button {...props} theme={theme} />
    }
</ThemeContext.Consumer>
```

## React.createContext

Provider, Consumer 컴포넌트를 반환

## 주의
Provider의 자손인 모든 Consumer는 Provider의 value prop이 바뀔 때마다 다시 렌더링됩니다.
이는 shouldComponentUpdate의 영향을 받지 않으므로, 
조상 컴포넌트의 업데이트가 무시된 경우라 할지라도 Consumer는 업데이트될 수 있습니다.

## 값이 변하는 Context

Provider를 가지고 있는(렌더링하고 있는) 컴포넌트의 상태를 Provider에 내려준다.

```js
import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const MenuSelectorContext = React.createContext();

function App() {
  return (
    <div className="App">
      <MenuSelectorProvider>
        <MenuViewer />
        <MenuButton menu="짜장면" />
        <MenuButton menu="짬뽕" />
        <MenuButton menu="탕수육" />
      </MenuSelectorProvider>
    </div>
  );
}

class MenuSelectorProvider extends React.Component {
  constructor(props) {
    super(props);
    this.updateMenu = menu => {
      this.setState({
        menu
      });
    };
    this.state = {
      menu: "짜장면",
      updateMenu: this.updateMenu
    };
  }

  render() {
    return (
      <MenuSelectorContext.Provider value={this.state}>
        {this.props.children}
      </MenuSelectorContext.Provider>
    );
  }
}

const MenuViewer = props => {
  return (
    <MenuSelectorContext.Consumer>
      {({ menu }) => {
        return <div>{menu}</div>;
      }}
    </MenuSelectorContext.Consumer>
  );
};

const MenuButton = props => {
  return (
    <MenuSelectorContext.Consumer>
      {({ updateMenu }) => {
        return (
          <button onClick={() => updateMenu(props.menu)}>{props.menu}</button>
        );
      }}
    </MenuSelectorContext.Consumer>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

```