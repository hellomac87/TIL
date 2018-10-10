### 문제 1

양수를 입력받아 이 수를 반지름으로 하는 원의 넓이를 반환하는 함수를 작성하세요.

```js
// 넓이 = π x 반지름^2 (넓이=파이 x 반지름 제곱)
function circle(num){
  const result = 3.14 * (num ** 2);

  return result;
}

circle(5);
```

### 문제 2

두 정수 `min`, `max` 를 입력받아, `min` 이상 `max` 미만인 임의의 정수를 반환하는 함수를 작성하세요.

```js
function random(min, max){
  return Math.floor(Math.random() * (max - min)) + min;
}

random(-10, 10);
```
### 문제 3

정수를 입력받아, 5 단위로 올림한 수를 반환하는 함수를 작성하세요.

예:
```
ceilBy5(32); -> 35
ceilBy5(37); -> 40
```
```js
function ceilBy5(num){
  let result = Math.ceil(num / 5) * 5;
  return result;
}
ceilBy5(32); // 35
//ceilBy5(37); // 40
```
#### 강사님과 함께 풀어보기
```js
// 같다
```
### 문제 4

배열을 입력받아, 요소들의 순서를 뒤섞은 새 배열을 반환하는 함수를 작성하세요.
```js
function shuffle(arr) {
  const newArr = [];
  const memory = [];
  let index;

  for(let i=0; i<arr.length; i++){
    index = Math.floor(Math.random() * arr.length);
    
    if(!memory.includes(index)){ 
      memory.push(index);
      newArr.push(arr[index]);
    }else{
      i--  
    }      
  }
  
  return newArr;
}
shuffle([1,2,3,4,5,6,7,8,9,10]);
```
#### 강사님과 함께 풀어보기
```js
```

### 문제 5

임의의 HTML 색상 코드를 반환하는 함수를 작성하세요.
```js
function makeColor(){
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const a = (Math.random()).toFixed(2);

  return rgb = `rgb(${r}, ${g}, ${b}, ${a})`;
}

makeColor();
```
#### 강사님과 함께 풀어보기
```js
function randomColor(){
  const cadidate = '0123456789ABCDEF';
  let colorCode = '#'

  for(let i=0; i<6; i++){
    const index = Math.floor(Math.random() * cadidate.length);;
    colorCode += cadidate[index];
  }

  return colorCode;
}
randomColor();
```
### 문제 6

양수를 입력받아, 그 수만큼의 길이를 갖는 임의의 문자열을 반환하는 함수를 작성하세요.

```js
function handleString(num){
  const storage = 'abcdefghijklmnopqrstuvwnzyx1234567890';
  let newStr = '';

  for(let i=0; i < num; i++){
    let index = Math.floor(Math.random() * storage.length);
    newStr += storage[index];
  }

  return newStr;
}

handleString(5);
```
#### 강사님과 함께 풀어보기
```js
function handleString(num){
  let newStr = '';

  for(let i=0; i < num; i++){
    let index = Math.floor(Math.random() * 65535);
    newStr += String.fromCodePoint(index);
  }

  console.log(newStr);
}

handleString(5);
```
### 문제 7

수 타입의 값으로만 이루어진 배열을 입력받아, 그 값들의 표준편차를 구하는 함수를 작성하세요.
```js
// 수 타입의 값으로만 이루어진 배열을 입력받아, 그 값들의 표준편차를 구하는 함수를 작성하세요.

function standard(arr){
  // arr 의 평균 구하기
  let avg = arr.reduce((acc, item) => acc + item, 0) / arr.length;
  console.log(avg);
  // 각 요소의 편차 구하기,  각 요소에 제곱하기
  let deviation = arr.map((item) => (item - avg) ** 2); 
  // 위 제곱한 배열의 평균 구하기
  console.log(deviation);
  let result = deviation.reduce((a,b) => a + b,0) / deviation.length;
  // 루트 씌우기
  result = Math.sqrt(result);

  return result;
}

standard([1,2,3,4,5]);
```