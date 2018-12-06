# 정규표현식

[https://regexr.com/](https://regexr.com/)

[https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/%EC%A0%95%EA%B7%9C%EC%8B%9D](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/%EC%A0%95%EA%B7%9C%EC%8B%9D)

```js
// // 예제: 전화번호 형식 검사
const input = "010-4010-2678";

// 맨 앞에는 010,011,016,017,018 등의 번호가 올 수 있다.
// 중간에는 세자리 숫자 이거나, 네자리 숫자이다.
// 맨 뒤에는 네자리 숫자이다.
const pattern = /^(010|011|016|017|018)-\d{3,4}-\d{4}$/;
if (!input.match(pattern)) {
  alert("형식에 맞지않는 전화번호");
} else {
  alert("gd");
}
```
