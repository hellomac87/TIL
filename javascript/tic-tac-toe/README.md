# TIC-TAC-TOE 게임 만들기

## 2018-09-28

강사님과 상담후에 틱택도 게임을 바닐라 자바스크립트만을 이용해 만들어보기로 했다.

1. 게임 룰만 대충 이해
1. 뷰 만들고 O,X 가 번갈아가며 찍히는 것 까지만 만들어봤다.
1. 쉬운편에 속한대서 만만하게 봤는데, 역시나 나에게는 만만하지 않다는 것을 깨달았다.
1. 설계부터 다시 해야겠다는 생각이 든다.
1. ㅎㅎ;;
1. 리액트 예습해서 앞서가야지~ 하는 오만함을 버려야겠다.
1. 자바스크립트도 제대로 못하믄서 ㅎㅎ;

---

## 2018-09-29

### javascript.js

1. 어제 설계부터 다시 해봐야겠다고 생각해서 나름 설계하면서 해봄
1. 기본 state 객체를 만들어서 게임 초기 상태를 세팅해봄
1. 상수, 변수, 필요한 함수 등을 생각해서 만들어봄
1. 만들면서 점점 혼란에 빠짐, 함수 호이스팅? 순서 등에 대해 다시 공부해야겟다고 생각함
1. 불필요한 변수를 만들기도 함
1. 상태값을 어떻게 설정해야 할지 감이 잘 안잡힘
1. 승리 조건을 체크하는 함수를 생각해서 만들어봄
1. 잘 생각이 안나서 전부다 나열해봄
1. 패턴을 파악해서 반복문으로 만들어봄
1. 이리저리 테스트하던 중 잘못 만들었다는 것을 깨달음
1. 생각의 흐름이 끊겨서 처음부터 다시 생각해보기로 함
1. 아예 자바스크립트 다시 생성

### js.js

1. 기본 state 를 다시 생각해서 작성해봄
1. 승리 조건 이외에 대부분 다 작성한거같음
1. 승리 조건을 어떤식으로 체크해야할지 생각해봐야함
1. 이전에 작성했던 코드보다 간결해진 느낌
1. 조건식이 빠졌기 때문인거같음
1. 데이터 배열 방식도 조금 바꿔봄
1. 조금 더 생각해보자

## 2018-09-29 - 2
```js
const state = {
    user: 'O',
    boxes: [],
};

const boxes = document.querySelectorAll('.box'); // box dom node array

state.boxes = Array.from(boxes).map(function(box, index){
    return box.getAttribute('data');
}); 
// or
state.boxes = [...boxes].map(function(box, index){
    return box.getAttribute('data');
}); 
// save state boxes array;
// 쿼리 셀렉터 올은 반환값이 NodeList임
// NodeList는 Array 객체가 아님
// 따라서 위에처럼 변환해줘야 map 메서드를 쓸 수 있음
```
[https://stackoverflow.com/questions/32765157/filter-or-map-nodelists-in-es6](https://stackoverflow.com/questions/32765157/filter-or-map-nodelists-in-es6)

## 2018-09-30

1. 승리 조건을 어떤식으로 구성할지 생각중
2. 유투브에서 zerocho님 영상 시청
3. 영상초반 순서도 작성이 알고리즘 연습에 좋다고 해서
4. 틱택토 순서도를 그려보기 시작
