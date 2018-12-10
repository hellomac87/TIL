# Redux

상태 관리 라이브러리

(React 내장 상태 관리 기법(state, context API 등)을 잘 다룬 후 Redux를 다뤄야 한다.)

## 리덕스가 필요할때?

- Context 기능
- 고급 상태 관리 기법

## `값` <----- `상태변화`

상태 변화를 값으로 만들어서 여러가지 일을 가능하게 한다.

- 상태 변화 logging
- undo / redo 가 쉬워짐
- 시간여행

## 오늘의 목표

`store, action, dispatch, subscribe, reducer` 를 이해해보자.

### store

store - state 를 담는 저장소, 여러 기능을 갖추고 있는 상태 저장소
기능 - 상태 변화를 나타내는 값(action(객체))을 투입하면, 상태가 바뀐다.
dispatch - action 을 넣는 행위

### dispatch

action을 store에 dispatch 하면 state 가 변화

### subscribe

subscribe - 상태가 바뀔 때 마다 (action 이 dispatch 될 때 마다), 실행할 함수를 등록하는 절차
react세계는 store를 subscribe 하여 react 세계와 redux 세계가 연결

### reducer

reducer - 이전 상태와 action을 받아서, 다음 상태를 반환하는

```js
const { combineReducers, createStore } = require("redux");

// 리듀서에 액션과 이전 상태를 넣어서 다음 상태를 계산해보자!

// Counter 상태 저장소
// '증가'를 나타내는 action이 dispatch 되었을 때
// counter 상태를  1증가시키고 싶다.

// INCREASE 액션 creator: INCREASE 액션을 반환하는 함수
function increase(amount) {
  return {
    type: "INCREASE",
    amount
  };
}

// INCREASE 액션 creator: INCREASE 액션을 반환하는 함수
function decrease(amount) {
  return {
    type: "DECREASE",
    amount
  };
}

// ZERO 액션
function zero() {
  return {
    type: "ZERO"
  };
}

// Rudux에서 초기 상태를 지정해 주는 방법
// 1. state 매개변수의 기본값에 초기 상태를 지정해 준다.
// 2. default 케이스에서 state를 반환한다.
// why? Redux store 는 초기상태를 계산하기 위해
// state에 undefined, action에 빈 객체를 넣는다.

const initialState = {
  counter: 0
};

function counter(state = initialState, action) {
  switch (action.type) {
    case "INCREASE":
      return {
        counter: state.counter + action.amount
      };
    case "DECREASE":
      return {
        counter: state.counter - action.amount
      };
    case "ZERO":
      return {
        counter: 0
      };
    // Reducer 안에서는 default 케이스를 빠뜨리면 안된다!
    // why?
    // 1. 초기 상태의 계산을 위해
    // 2. 알수 없는 타입의 액션이 들어와도, 다음 상태를 잘 반환하기 위해
    default:
      return state;
  }
}

let count = 1;

// 할 일 목록 상태를 나타내는 리듀서와 액션
const initialTodoState = {
  todos: [
    {
      id: count++,
      title: "Redux 공부",
      complete: false
    }
  ]
};

// 할일 추가 액션
function addTodo(title) {
  return {
    type: "ADD_TODO",
    title
  };
}

// 할일 완료 표시 액션
function completeTodo(id) {
  return {
    type: "COMPLETE_TODO",
    id
  };
}

// 할일 수정 액션
function updateTodoTitle(id, title) {
  return {
    type: "UPDATE_TODO_TITLE",
    id,
    title
  };
}

function todo(state = initialTodoState, action) {
  switch (action.type) {
    // 할일 추가
    case "ADD_TODO":
      return {
        todos: [
          ...state.todos,
          {
            id: count++,
            title: action.title,
            complete: false
          }
        ]
      };
    // 할일 완료 표시
    case "COMPLETE_TODO":
      const index = state.todos.findIndex(item => item.id === action.id);
      if (index === -1) {
        return state;
      } else {
        const todo = state.todos[index];
        const newTodo = {
          ...todo,
          complete: true
        };
        const newTodos = state.todos.slice();
        newTodos.splice(index, 1, newTodo);
        return {
          todos: newTodos
        };
      }
    // 할일 제목 수정

    default:
      return state;
  }
}
// 여러 리듀서를 하나로 합치기
// function rootReducer(state = {}, action){
//   return {
//     counter: counterReducer(state.counter, action),
//     todos: todoReducer(state.todos, action)
//   }
// }

// 위에서 했던 일을 combineReducers를 통해 편하게 할 수 있다.
// 리듀서 이름은 상태 이름과 똑같이 짓는 것이 관례
const rootReducer = combineReducers({
  counter,
  todos
});
const store = createStore(rootReducer);
store.subscribe(() => console.log(store.getState()));
```
