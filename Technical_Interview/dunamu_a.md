# 기술면접 학습자료

기술면접에서 받은 질문을 정리한다.
면접에서 질문에 제대로 답변하지 못했거나, 답했어도 정확하지 않은 내용들을 다시 정리해보자.

## html

### html5 에서 doctype 작성 변경에 대해 설명해보아라.

- [https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)

- [https://namu.wiki/w/HTML5#s-4](https://namu.wiki/w/HTML5#s-4)

### section, article 태그의 사용법?

### 검색 봇은 section을 우선하는가? article을 우선하는가?

### html, css, image, js는 어떤 순서로 load 되는가?

[https://wikibook.co.kr/article/web-sites-optimization-3/](https://wikibook.co.kr/article/web-sites-optimization-3/)

브라우저는 어떻게 동작하는가?

[https://d2.naver.com/helloworld/59361](https://d2.naver.com/helloworld/59361)

## CSS

## js

- 브라우저에서 최상위 객체는 무엇인가?
- 함수를 선언한다면 함수는 어떤 객체(?)에 추가되는가?

### 자바스크립트 일급객체란 무엇인가?

[https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions)

- 자바스크립트 (?) 메모리 누수(?) 에 대해 설명할 수 있는가?

### '사나','쯔위','모모' 등 한글인 배열이 있을 때, 배열의 정렬을 sort할 수 있는 알고리즘을 설명해보아라.

```js
const arr = [
  "사나",
  "쯔위",
  "모모",
  "나연",
  "채영",
  "정연",
  "지효",
  "미나",
  "다현"
];

// ㄱㄴㄷ
const ascending = (a, b) => {
  return a < b ? -1 : a == b ? 0 : 1;
};
// 역순
const decending = (a, b) => {
  return b < a ? -1 : b == a ? 0 : 1;
};

arr.sort(decending);
```

- VanillaJS, ReactJS 차이점은 무엇이라 생각하는가
- 속도가 빠른 VanillaJS로 서비스 하는 것이, 무거운것으로 알려진 ReactJS로 서비스 하는 것보다 사용자에게 더 좋지 않겠느냐? 어떻게 생각하는가?
- 콜스택, 테스크큐, 비동기 작업에 대해 설명해보아라.
- es5 와 es6의 가장 큰차이점은 무엇인가?

## ReactJS

- 카피 프로젝트 진행시, 원본이 되는 프로젝트와 내 프로젝트의 프론트 단의 성능(속도)차이가 있을 때, 이 이슈를 어떻게 해결할 것인가

## git

- git은 무엇이라 생각하는가? 어떻게 사용하고 있는가?
  - 리누스 토발즈가 개발한 분산형 버전관리(형상관리) 시스템이다.
- git 을 누가만들었는가?
  - 리누스 토발즈 : 리누스 토발즈는 리눅스를 만든 사람이다.
- git flow를 알고있는가? git flow에 대해 설명해보아라.
- hotfix에 대해 설명해보아라
- hotfix branch의 원본 branch는 무엇인가?
- ex) 0.0.1 등 버전의 첫째, 둘째, 셋째자리의 의미를 설명해보아라.

## etc

- 개발 모델? 패턴?에 대해 알고있는 것을 설명해보아라.
- WASS, WEB server의 차이점은 무엇인가?
- SPA, MPA 차이점은 무엇이라 생각하는가?
- SPA는 무엇이고 MPA는 무엇이라 생각하는가?
- 웹의 창시자는 누구인가?
  - 팀 버너스리
- CRUD를 설명해보아라
  - Create(쓰기, 생성), Read(읽기, 가져오기), Update(수정, 업데이트), Delete(삭제)
- oauth2 과정에 대해 설명해달라.
- gulp에 대해 알고있는가?
- 프로젝트에서 bulid tool 을 선택한다면 어떤 tool을 선택할 것인가?
- 개발중 문제 발생시 해결하는 방법, 과정
