# js quiz
### 문제 1 

두 수를 입력받아 큰 수를 반환하는 함수를 작성하세요.

#### my answer
```js

function larger(a, b){
  return Math.max(a, b);
}

larger(5,2);

```
#### 강사님과 함께 풀어보기

시험적으로 코드를 만들어보고, 나중에 함수로 만들어보기

```js

function larger(x, y){
  // a 가 크면 a를 c에 넣고, 아니면 b를 c에 넣는다

  if(x > y){
    return x;
  }else{
    return y;
  }
}

larger(10, 15);

```

```js

// 삼항연산자
function larger(x, y){
  return x > y ? x : y;
}

```
---
### 문제 2

세 수를 입력받아 그 곱이 양수이면 `true`, 0 혹은 음수이면 `false`, 둘 다 아니면 에러를 발생시키는 함수를 작성하세요.

에러를 발생시키는 코드는 다음과 같습니다.

```js

throw new Error('입력값이 잘못되었습니다.');

```

#### my answer
```js

function whatTheFunc (a, b, c){
  const multiply = a * b * c;
  
  if(multiply > 0){
    return true;
  }else if(multiply <= 0){
    return false;
  }
  
  throw new Error('입력값이 잘못되었습니다');
}

whatTheFunc('ㅁ',2,3);

```
#### 강사님과 함께 풀어보기
```js

function isPositive(x, y, z){
  const multiply = x * y * z;

  if(multiply > 0){
    return true;
  }else if(multiply <= 0){
    return false;
  }else{
    throw new Error('입력값이 잘못되었습니다.');
  }
}

```
---
### 문제 3

세 수 `min`, `max`, `input`을 입력받아, 다음과 같이 동작하는 함수를 작성하세요.
- `min`보다 `input`이 작으면, `min`을 반환합니다.
- `max`보다 `input`이 크면, `max`를 반환합니다.
- 아니면 `input`을 반환합니다.

예:
```
limit(3, 7, 5); -> 5
limit(3, 7, 11); -> 7
limit(3, 7, 0); -> 3
```

#### my answer
```js

function limit (min, max, input){
  if(min > input){
    return min;
  }else if(max > input){
    return max;
  }
  return input;
}

limit(7,5,3);

```
#### 강사님과 함께 풀어보기
```js

function limit (min, max, input){
  if(min > input){
    return min;
  }else if(max > input){
    return max;
  }else{
    return input;
  }
}

```
---
### 문제 4

어떤 정수가 짝수인지 홀수인지 출력하는 함수를 작성하세요. 이를 이용해서, 1부터 20까지의 수가 각각 짝수인지 홀수인지 출력하는 프로그램을 작성하세요.

#### my answer
```js

for (let i = 1; i < 21; i++){
  if(i % 2 === 0){
    console.log(`${i} 짝수`);
  }else{
    console.log(`${i} 홀수`);
  }
}

```

#### 강사님과 함께 풀어보기

```js

function evenOrOdd(x){
  if(x % 2 === 0){
    console.log(`${x} 짝수`);
  }else{
    console.log(`${x} 홀수`);
  }
}

for(let i = 0; i < 20; i++){
  evenOrOdd(i + 1);
}

```
---
### 문제 5

100 이하의 자연수 중 3과 5의 공배수를 모두 출력하는 프로그램을 작성하세요.

#### my answer
```js
for (let i = 1; i < 101; i++){
  if(i % 15 === 0){
    console.log(`${i}`);
  }
}
```

#### 강사님과 함께 풀어보기
```js
for(let i = 0; i < 100; i++){
  const num = i+1;
  if((num % 3 === 0) && (num % 5 === 0)){
    console.log(`${num} : 공배수`);
  }else{
    console.log(`${num} : 공배수 아님`);
  }
}
```
---
### 문제 6

자연수를 입력받아, 그 수의 모든 약수를 출력하는 함수를 작성하세요.

#### my answer

```js

function divisor(num){
  for(let i = 0; i <= num; i++){
    if( num%i === 0){
      console.log(`${i} 약수`);
    }else{
      console.log(`${i} 약수 아님`);
    }  
  }
}

divisor(33);

```

#### 강사님과 함께 풀어보기
```js
function print(x){
  for(let i = 0; i < x; i++){
    const num = i + 1;

    if(x%num === 0){
      console.log(`${num}은 약수`);
    }else{
      console.log(`${num}은 약수 아님`);
    }
    
  }
}

print(10);
```

---
### 문제 7

2 이상의 자연수를 입력받아, 그 수가 소수인지 아닌지를 판별하는 함수를 작성하세요.

```js

function makeNameHard(num){
  if(num >= 2){
    num = num.toString();

    return num.indexOf(".") == -1 ? `${num} : 소수아님` : `${num} : 소수잖여`;

  }else{
    throw new Error('2이상의 자연수를 입력하세요.');
  }
}

makeNameHard(5);

```
---
### 문제 8

1부터 100까지의 수를 차례대로 출력하되, 자릿수에 3, 6, 9중 하나라도 포함되어 있으면 '짝!'을 대신 출력하는 프로그램을 작성하세요.

#### my answer
```js

function samYukGu(num){
  for(let i = 0; i < num; i++){
    let result = ''; // 문자열 만들기
    result = (i+1).toString(); 
    // i+1(1부터니깐)를 문자열로 변환한 값을 result 에 저장
    let lastString = result[result.length - 1]; 
    // 문자열의 마지막 값 가져오깅

    if(lastString === '3' || lastString === '6' || lastString === '9'){
      console.log('짝'); // 마지막 값이 3,6,9 이면 짝 출력
    }else{
      console.log(Number(result)); // 아니면 그냥 숫자 출력, 문자열 말고 숫자로
    }
  }
}

samYukGu(99);

```

#### 강사님과 함께 풀어보기
```js
function samYookGu(num){
  for(let i=0; i<num; i++){
    const syg = (i+1).toString();
    
    if(syg.includes('3') || syg.includes('6') || syg.includes('9')){
      console.log('짝');
    }else{
      console.log(syg);
    }
  }
}
samYookGu(100);
```
---
### 문제 9

양의 정수를 입력받아, 다음과 같은 패턴의 출력을 하는 함수를 작성하세요.

1을 입력받은 경우:
```
*
```

3을 입력받은 경우:
```
*
* *
* * *
```

5를 입력받은 경우:
```
*
* *
* * *
* * * *
* * * * *
```

#### my answer
```js
function starPrint(num){
  let star = ""; // 빈문자열 만들기, 이걸로 별찍을꺼임 * 랑 \n 조합해서

  for(let i = 0; i < num; i++){
    for(let j = 0; j< i+1; j++){
      star += '* ';
    }
    star += '\n';
  }
  console.log(star);
}

starPrint(15);
```
---
### 문제 10

양의 정수를 입력받아, 다음과 같은 패턴의 출력을 하는 함수를 작성하세요.

1를 입력받은 경우:
```
*
```

3를 입력받은 경우:
```
  *
 * *
* * *
 * *
  *
```

5를 입력받은 경우:
```
    *
   * *
  * * *
 * * * *
* * * * *
 * * * *
  * * *
   * *
    *
```
#### my answer
```js
const num = 5;
let star = '';

for(let i=0; i<num; i++){
  for(let j=num; j>i+1; j--){
    star += ' ';
  }
  for(let c=0; c<i+1; c++){
    star += '* ';
  }
  star += '\n';
}

for(let i=0; i<num-1; i++){

  for(let z=0; z < i+1; z++){
    star += ' ';
  }
  for(let c=num; c > i+1; c--){
    star += '* ';
  }
  star+='\n';
}
console.log(star);
```
---
### 문제 11

두 수를 입력받아서, 두 수의 최대공약수를 반환하는 함수를 작성하세요. ([유클리드 호제법](https://ko.wikipedia.org/wiki/%EC%9C%A0%ED%81%B4%EB%A6%AC%EB%93%9C_%ED%98%B8%EC%A0%9C%EB%B2%95)을 참고하세요.)
```js
// 먼소리인지모르겟음
function gcd(m,n){
  if (m < n){
    m, n = n, m
  }
	if (n == 0){
    if (m % n == 0){
      return n;
    }
	  return m;
  }
	return gcd(n, m%n)
}
gcd(24,11);
```
---
### 문제 12

세 수를 입력받아 큰 것부터 차례대로 출력하는 함수를 작성하세요.
```js
function larger(a, b, c){
  if(a > b && a > c){
    return a;
  }else if(b > a && b > c){
    return b;
  }else if(c > a && c > b){
    return c;
  }
  throw new Error('서로 다른 값을 입력해 주세요.');
}

larger(15, 1, 3);
```
---
### 문제 13

자연수 `n`을 입력받아, `n`번째 피보나치 수를 반환하는 함수를 작성하세요.