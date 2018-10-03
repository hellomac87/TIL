### 문제 1

두 문자열을 입력받아, 대소문자를 구분하지 않고(case insensitive) 두 문자열이 동일한지를 반환하는 함수를 작성하세요.

예:
```
insensitiveEqual('hello', 'hello'); -> true
insensitiveEqual('hello', 'Hello'); -> true
insensitiveEqual('hello', 'world'); -> false
```
#### my answer
```js
function insensitiveEqual(str1, str2){

  return str1.toUpperCase() === str2.toUpperCase() ? true : false;

}

insensitiveEqual('hello', 'helLO');
```
---
### 문제 2

문자열 `s`와 자연수 `n`을 입력받아, 만약 `s`의 길이가 `n`보다 작으면 `s`의 왼쪽에 공백으로 추가해서 길이가 `n`이 되게 만든 후 반환하고, 아니면 `s`를 그대로 반환하는 함수를 작성해보세요.

예:
```
leftPad('hello', 8); -> '   hello'
leftPad('hello', 3); -> 'hello'
```

#### my answer
```js
function leftPad(s, n){
  const empty = ' '.repeat(n - s.length);

  if(s.length < n){
    return s = empty + s;
  }
  return s;
  
}
```

---
### 문제 3

문자열을 입력받아, 문자열 안에 들어있는 모든 모음(a, e, i, o, u)의 갯수를 반환하는 함수를 작성하세요.

#### my answer
```js
function aeiou(str){
  const arr = [...str];
  const result = [];
  arr.map((ar) => {
    if(ar === "a" || ar === "e" || ar === "i" || ar === "o" || ar === "u"){
      result.push(ar);
    }
  });
  console.log(result.length);
}

aeiou('heelloo');
```

```js
function count(str){
  let strLegnth = null;

  for(let i=0; i<str.length; i++){  
    if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
      strLegnth += 1;
    }
  }
  console.log(strLegnth);
}

count('heellllloooooo');
```

#### 강사님과 함께 풀어보기
```js

```

---
### 문제 4

문자열을 입력받아, 해당 문자열에 포함된 문자의 종류와 갯수를 나타내는 객체를 반환하는 함수를 작성하세요.

예:
```
countChar('tomato'); -> {t: 2, o: 2, m: 1, a: 1}
```

#### my answer

```js
function countChar(str){
  const obj = {}; // 객체 선언

  // 반복문으로 배열의 값들을 객체의 초기 key로 추가한다. value 는 null 로
  for(let i=0; i<str.length; i++){
    obj[str[i]] = null;
  }
  // 반복문으로 객체의 키 값과 문자열의 값이 일치하면 해당 키 값에 1을 추가한다.
  for(let i=0; i<str.length; i++){
    obj[str[i]] += 1;
  }
  return obj;
}

countChar('aaaabbbqqzz');
```
#### 강사님과 함께 풀어보기

```JS
function countChar(str){
  const obj = {}; // 객체 선언

  for(let i=0; i<str.length; i++){    
    if( !(str[i] in obj)){
      // 글자를 본적이 없다면 "글자": 1을 적어준다.
      obj[str[i]] = 1;
    }else{
      // 글자를 본적이 있다면 횧수를 1 증가시켜준다.
      obj[str[i]] += 1;
    }    
  }

  return obj;
}

countChar('aaaabbbqqzz');
```
---
### 문제 5

문자열을 입력받아 그 문자열이 회문(palindrome)인지 판별하는 함수를 작성하세요. (회문이란, '토마토', 'never odd or even'과 같이 뒤에서부터 읽어도 똑같이 읽히는 문자열을 말합니다.)

#### my answer

```js
function check(str){
  const normal = [...str].filter(function(n){ return n !== ' '}).join('');
  const reverse = [...str].reverse().filter(function(n){ return n !== ' '}).join(''); // 배열로 만들었다 거꾸로해서 합치기

  return normal === reverse ? true : false ;
}

check('never odd or even');
```

```js
function check(str){
  for(let i=0; i<str.length; i++){
    const n = i + 1;
    if(str[i] !== str[str.length - n]){
      return false;
    }
  }
  return true;
}

check('토마토마토');
```
```js

```
---
### 문제 6

문자열을 입력받아, 그 문자열의 모든 '부분 문자열'로 이루어진 배열을 반환하는 함수를 작성하세요.

예:
```
subString('햄버거');
// 결과: ['햄', '햄버', '햄버거', '버', '버거', '거']
```

#### my answer
```js
```

---

### 문제 7

문자열을 입력받아, 해당 문자열에서 중복된 문자가 제거된 새로운 문자열을 반환하는 함수를 작성하세요.

예:
```
removeDuplicates('tomato'); -> 'toma'
removeDuplicates('bartender'); -> 'bartend'
```

#### my answer

```js
function removeDuplicates(str){
  let memory = '';
  
  for(let i = 0; i < str.length; i++){
    if(memory.includes(str[i])){
      // 이전에 본적이 있으면 추가하지앟는다
      continue;
    }else{
      // 이전에 본적이 없으면 추가한다.
      memory += str[i];
    }
  }
  return memory;
}

removeDuplicates('bartender');
```
---

### 문제 8

이메일 주소를 입력받아, 아이디 부분을 별표(`*`)로 가린 새 문자열을 반환하는 함수를 작성하세요.

- 루프로 먼저 풀어보세요.
- `split` 메소드를 이용해서 풀어보세요.

#### my answer
```js
function masking(email){
  let memory = '';
  let seen = false;

  for(let i=0; i < email.length; i++){
    if(email[i] === '@'){
      seen = true;   
    }
    if(!seen){
      // @ 을 본적이 없다 => 별을 저장  
      memory += '*';
    }else{
      // @ 을 봤다 => 고대로저장
      memory += email[i];
    }
  }

  return memory;
}

masking('hellomac87@gmail.com');
```

```js
function masking(email){
  email = email.split('@');
  email[0] = '*'.repeat(email[0].length);
  email = email[0].concat('@', email[1]);

  return email;
}

masking('hellomac87@gmail.com');
```
---

### 문제 9

문자열을 입력받아, 대문자는 소문자로, 소문자는 대문자로 바꾼 결과를 반환하는 함수를 작성하세요.

#### my answer

```js
function change(str){
  let result = '';
  
  for(let i=0; i<str.length; i++){
    let upper = str[i].toUpperCase();
    let lower = str[i].toLowerCase();
    if(str[i] === upper){
      result += lower;
    }else{
      result += upper;
    }
  }
  return result;
}

change('Hello World');
```

```js
function change(str){
  return str = str.split('').map(item => item === item.toLowerCase() ? item.toUpperCase() : item.toLowerCase()).join('');
}

change('String RIng ArRAy');
```
### 문제 10

문자열을 입력받아, 각 단어의 첫 글자를 대문자로 바꾼 결과를 반환하는 함수를 작성하세요. (문자열에 개행이 없다고 가정합니다.)

#### my answer

```js
function changeStr(str){
  let result = '';
  
  for(let i=0; i<str.length; i++){
    if(str[i-1] === ' ' || str[i] === str[0]){
      result += str[i].toUpperCase();
    }else{
      result += str[i]
    }
  }
  return result;
}

changeStr('hello javascript and react');
```

### 문제 11

문자열을 입력받아, 문자열 안에 들어있는 단어 중 가장 긴 단어를 반환하는 함수를 작성하세요. (문자열에 개행이 없다고 가정합니다.)

#### my answer

```js
function larger(str){
  str = str.split(' ');
  // 배열의 길이를 비교하여 가장 큰 배열을 리턴한다
  for(let i=0; i<str.length; i++){
    if(str[i].length - str[i+1].length > 0){
      return str[i];
    }
  }
}
```

```js
function campare(str){
  str = str.split(' ').sort((x, y) => y.length - x.length);

  return str[0];
}
```

### 문제 12

문자열 `s`과 자연수 `n`을 입력받아, `s`의 첫 `n`개의 문자만으로 이루어진 새 문자열을 반환하는 함수를 작성하세요.

#### my answer

```js
function handleStr(str, n){
  let newStr = '';

  for(let i=0; i<n; i++){
    newStr += str[i];
  }
  return newStr;
}

handleStr('hello', 3);
```

### 문제 13

Camel case의 문자열을 입력받아, snake case로 바꾼 새 문자열을 반환하는 함수를 작성하세요.

#### my answer

```js
function snakeCase(str){
  let snake = '';
  
  for(let i=0; i<str.length; i++){
    if(str[i] === str[i].toUpperCase()){
        snake += '_' + str[i].toLowerCase();
    }else{
      snake += str[i];
    }
  }
  return snake;
}

snakeCase('camelCaseString');
```

### 문제 14

Snake case의 문자열을 입력받아, camel case로 바꾼 새 문자열을 반환하는 함수를 작성하세요.

```js
function makeCamel(str){
  let result ='';
  for(let i=0; i<str.length; i++){
    if(str[i] === '_'){
      result += '';
    }else if(str[i-1] === '_'){
      result += str[i].toUpperCase();
    }else{
      result += str[i];
    }
  }

  return result;
}

makeCamel('snake_case_is_good');
```

### 문제 15

`String.prototype.split`과 똑같이 동작하는 함수를 작성하세요.

예:
```
split('Hello World'); -> ['Hello World']
split('Hello World', ' '); -> ['Hello', 'World']
split('let,const,var', ',') -> ['let', 'const', 'var']
```

### 문제 16

2진수를 표현하는 문자열을 입력받아, 그 문자열이 나타내는 수 타입의 값을 반환하는 함수를 작성하세요. (`parseInt`를 사용하지 말고 작성해보세요.)

예:
```
convertBinary('1101'); -> 13
```

### 문제 17

숫자로만 이루어진 문자열을 입력받아, 연속된 두 짝수 사이에 하이픈(-)을 끼워넣은 문자열을 반환하는 함수를 작성하세요.

예:
```
insertHyphen('437027423'); -> '4370-274-23'
```