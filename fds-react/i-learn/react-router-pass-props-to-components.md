# react-router-pass-props-to-components

리액트 라우터 사용시 props를 자식 컴포넌트로 전달하는 방법

예시
```js
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      menuActive : false,
    }
  }

  handleMenuActive = () => {
    this.setState({
      menuActive: !this.state.menuActive,
    })
  }

  render() {
    const {menuActive} = this.state;
    return (
      <Router>
        <div className="App">
          <Route path="/" exact render={() => <Main menuActive={menuActive} onMenuActive={this.handleMenuActive}/>}/>
          <Route path="/stores" component={Stores} />
          <Menu active={this.state.menuActive} onMenuActive={this.handleMenuActive}/>
        </div>
      </Router>
    );
  }
}
```

```js
<Route path="/" exact render={() => <Main menuActive={menuActive} onMenuActive={this.handleMenuActive}/>}/>
<Route path="/stores" component={Stores} />

// component 대신에 render 메소드? 활용해서 전달
<Route
  path='/dashboard'
  component={() => <Dashboard isAuthed={true} />}
/>

//이와같이 컴포넌트 자체를 전달하는 방법도 있지만, 성능상의 이슈가 있다고 함
```

첨부한 포스트에 따르면
> 구성 요소 소품을 사용하면 라우터는 React.createElement를 사용하여 지정된 구성 요소에서 새로운 React 요소를 만듭니다
> 즉, 구성 요소 속성에 인라인 함수를 제공하면 모든 렌더마다 새 구성 요소가 만들어집니다.
> 그 결과 기존 구성 요소가 마운트 해제되고 기존 구성 요소를 업데이트하는 대신 새 구성 요소가 마운트됩니다

요약인 즉슨 새 인스턴스가 계속 생성되니까 성능이슈가 발생할수 있다는 것으로 보임 - 내뇌피셜

[https://tylermcginnis.com/react-router-pass-props-to-components/](https://tylermcginnis.com/react-router-pass-props-to-components/)