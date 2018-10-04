### 문제 1

두 정수 `start`, `end`를 입력받아, `start`부터 `end`까지의 모든 정수를 배열로 반환하는 함수를 작성하세요.

예:
```
range(3, 6); -> [3, 4, 5, 6]
```

#### my answer
```js
function range(start, end){
  const arr = [];

  for(i=start; i<= end; i++){
    arr.push(i);
  }

  return arr;
}

range(1,10);
```
---
### 문제 2

수 타입의 값으로만 이루어진 배열을 입력받아, 그 값들의 합을 구하는 함수를 작성하세요.

#### my answer
```js
// 수 타입의 값으로만 이루어진 배열을 입력받아, 그 값들의 합을 구하는 함수를 작성하세요.
function checkTypeNum(arr){
  return arr.every(item => typeof item === 'number');
}

function sum(arr){
  let result = '';
  if(!checkTypeNum(arr)){
    throw new Error('수타입의 값만으로 이루어진 배열을 입력해주세요');
  }else{
    result = arr.reduce((a, b) => a + b, 0);
  }
 
  return result;
}

sum([1,2,3,4,5,6,7,8,9,10]);
```
```js
function checkTypeNum(arr){
  return arr.every(item => typeof item === 'number');
}

function sum(arr){
  let result = new Number();

  if(!checkTypeNum(arr)){
    throw new Error('수타입의 값만으로 이루어진 배열을 입력해주세요');
  }else{
    for(let i=0; i<arr.length; i++){
      result += Number(arr[i]);
    }
  }
  
  return result;
}

sum([1,2,3,4,5,6,7,8,9,10]);
```
---
### 문제 3

배열을 입력받아, falsy인 요소가 제거된 새 배열을 반환하는 함수를 작성하세요.

#### my answer
```js

function makeArr(arr){
  const result = [];
  arr.map(function(item){
    if(Boolean(item)){
      result.push(item);
    }
  });
  return result;
}

makeArr([1, '', 2, undefined, 3, null, 4, false, 5]);

```

```js
function makeArr(arr){
  const result = [];
  arr.map(function(item){
    if(item){
      result.push(item);
    }
  });
  return result;
}

makeArr([1, '', 2, undefined, 3, null, 4, false, 5]);
```
---
### 문제 4

배열을 입력받아, 중복된 요소가 제거된 새 배열을 반환하는 함수를 작성하세요.

#### my answer

```js
// 배열을 입력받아, 중복된 요소가 제거된 새 배열을 반환하는 함수를 작성하세요.
function removeDuplicate(arr){
  const newArr = [];

  arr.map(function(item){
    if(!newArr.includes(item)){
      newArr.push(item);
    }
  });

  return newArr;
}
removeDuplicate([1,1,'a',2,2,'b',3,3,'c','c','c']);
```

---
### 문제 5

수 타입의 값으로만 이루어진 두 배열을 입력받아, 다음과 같이 동작하는 함수를 작성하세요.
- 두 배열의 같은 자리에 있는 요소를 더한 결과가 새 배열의 요소가 됩니다.
- 만약 입력받은 두 배열의 길이가 갖지 않다면, 긴 배열에 있는 요소를 새 배열의 같은 위치에 포함시키세요.

예:
```
addArray([1, 2, 3], [4, 5, 6, 7]) -> [5, 7, 9, 7]
```

#### my answer
```js
function addArray(arr1, arr2){
  const newArr = [];
  const longLength = Math.max(arr1.length, arr2.length); // 두 배열 길이 비교, 긴 배열길이를 저장
  
  for(let i=0; i<longLength; i++){
      if(arr1[i] === undefined){
        newArr.push(arr2[i] + 0);
      }else if(arr2[i] === undefined){
        newArr.push(arr1[i] + 0);
      }else{
        newArr.push(arr1[i] + arr2[i]);
      }
  }
  return newArr;
}

addArray([1, 2, 3], [4, 5, 6, 7])
```
---
### 문제 6

배열을 입력받아, 배열의 요소 중 두 개를 선택하는 조합을 모두 포함하는 배열을 작성하세요.

예:
```
combination([1, 2, 3]); -> [[1, 2], [1, 3], [2, 3]]
```

#### my answer

```js
function combination(arr){
  const newArr = [];
  
  for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++ ){
      newArr.push([arr[i], arr[j]]);
    }
  }
  return newArr;
}

combination([1,2,3]);

```
---
### 문제 7

'금액'과 '동전의 종류가 들어있는 배열'를 입력받아, 최소한의 동전을 사용해서 금액을 맞출 수 있는 방법을 출력하는 함수를 작성하세요.
(단, 동전의 종류가 들어있는 배열에는 큰 동전부터 순서대로 들어있다고 가정합니다.)

예:
```
coins(263, [100, 50, 10, 5, 1]);
// 출력
100
50
10
1
1
1
```

#### my answer

---
### 문제 8

수 타입의 값만 들어있는 배열을 입력받아, 해당 배열을 오름차순 정렬하는 함수를 작성하세요. (`Array.prototype.sort`를 사용하지 않고 작성해보세요. [선택 정렬](https://ko.wikipedia.org/wiki/%EC%84%A0%ED%83%9D_%EC%A0%95%EB%A0%AC)을 참고하세요.)

#### my answer

---