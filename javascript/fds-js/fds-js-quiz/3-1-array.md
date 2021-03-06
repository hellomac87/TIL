문제 1. 배열을 입력받아, 해당 배열에 들어있는 요소들 중 최대값을 찾는 함수를 작성하세요. (루프를 이용하세요)

예:

```js
max([3, 1, 4, 5, 2]) // -> 5
```

---

문제 2. 배열을 입력받아, 해당 배열에 들어있는 요소들 중 최대값을 찾는 함수를 작성하세요. (`Array.prototype.reduce`를 이용하세요)

```js
function max(arr){
  // reduce를 쓸 때
  // acc '누적값의 역할'이 무엇인지를 잘 정하는 것이 중요하다.

  return arr.reduce((acc, item) => {
    if(acc > item){
      return acc;
    }else{
      return item;
    }
  },0);
}
```
```js
function max(arr){
  return arr.reduce((acc, item) =>  acc > item ? acc : item, -Infinity);
}
```
---

문제 3. 2차원 배열을 입력받아 1차원 배열로 바꾸는 함수를 작성하세요. (루프를 이용하세요)

예:

```js
flatten([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]) // -> [1, 2, 3, 4, 5, 6, 7, 8, 9]
```
```js
function flatten(arr) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      newArr.push(arr[i][j]);
    }
  }
  return newArr;
}

flatten([[1, 2, 3],[4, 5, 6],[7, 8, 9]]);
```
---

문제 4. 2차원 배열을 입력받아 1차원 배열로 바꾸는 함수를 작성하세요. (`Array.prototype.reduce`를 이용하세요)

```js
function flatten(arr) {
  const newArr = arr.reduce((acc, item, index) => {
    item.map(item => acc.push(item));
    return acc;
  },[]);

  return newArr;
}

flatten(
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]
)
```
```js
function flatten(arr) {
  return arr.reduce((acc, item) => {
    return acc.concat(item);
  },[]);
}
```

---

문제 5. (3 * 3) 빙고 판이 배열에 저장되어 있습니다. 빙고인 경우 `true`, 아니면 `false`를 반환하는 함수를 작성하세요. (단, 칸이 비어있는 경우는 0, 칸이 채워져 있는 경우는 1로 표현합니다.)

예:

```js
bingo([
  [0, 1, 0],
  [0, 1, 1],
  [0, 0, 1]
]) // -> false

bingo([
  [1, 1, 0],
  [0, 1, 1],
  [0, 0, 1]
]) // -> true

bingo([
  [0, 1, 0],
  [0, 1, 1],
  [0, 1, 1]
]) // -> true
```

```js
function bingo(arr) {
  let colBool = false;
  let rowBool = false;
  let crossLeftBool = false;
  let crossRightBool = false;

  // 가로빙고
  arr.map((item,index) => {
    if(item.every(item => item === 1)){
      colBool = true;
    }
    return item;
  },[]);

  // 세로빙고
  let counter = 0;
  for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length; j++){
      if(arr[j][i] === 1){
        counter++;
      }    
    }
    
    if(counter === 3){
      rowBool = true;
    }else{
      counter = 0;
    }
  }
  
    
  // 대각선
  const crossArr = [];
  arr.map((item, index) => {
    crossArr.push(item[index]);
  });
  if(crossArr.every(item => item === 1)){
    crossLeftBool = true;
  }

  // 리버스 대각선
  const crossReverseArr = [];
  arr.reverse().map((item, index) => {
    crossReverseArr.push(item[index]);
  });
  if(crossReverseArr.every(item => item === 1)){
    crossRightBool = true;
  }
  
  if(colBool || crossLeftBool || rowBool || crossRightBool){
    console.log('bingo')
  }else{
    console.log('not bingo')
  }
}

bingo([
  [1, 1, 0],
  [0, 0, 1],
  [1, 0, 1]
]);
```


```js
//가로
function bingo(arr){
  // 한줄루프
  for(let i=0; i<arr.length; i++){
    let checked = true;
    //한칸루프
    for(let j=0; j<arr.length; j++){
      if(arr[i][j] === 0){
        checked = false;
      }
    }
    if(checked){
      return true;
    }
  }
}
// 세로
function bingo(arr){
  for(let i=0; i<arr.length; i++){
    let checked = true;
    for(let j=0; j<arr.length; j++){
      if(arr[j][i] === 0){
        checked = false;
      }
    }
    if(checked){
      return true;
    }
  }
}
// 대각선
function bingo(arr){
  for(let i=0; i<arr.length; i++){
    let checked = true;
    
    if(arr[i][i] === 0){
      checked = false;
    }
    
    if(checked){
      return true;
    }
    return false;
  }
}

// 리버스대각선
function bingo(arr){
  for(let i=0; i<arr.length; i++){
    
    let checked = true;
    
    if(arr[i][2 - i] === 0){
      checked = false;
    }
    
    if(checked){
      return true;
    }
    return false;
  }
}
```
---

문제 6. (9 * 9) 오목 판이 배열에 저장되어 있습니다. 흑이 이긴 경우 1, 백이 이긴 경우 2, 아무도 이기지 않은 경우 0을 반환하는 함수를 작성하세요. (단, 칸이 비어있는 경우는 0, 흑은 1, 백은 2로 표현합니다.)

> 가로방향 오목만 판별해보쟈 

- 한칸한칸 보면서 판별하기
- 한칸한칸 보면서 지금까지 본 x or o 의 갯수를 기억한다.
- x or o 의 갯수를 기억하다가
- x or o 가 다섯개 연속이면!
- `내가 본 플레이어가 몇번 연속?`

예:

```js
omok([
  [0, 0, 0, 0, 0, 0, 0, 0, 0,]
  [0, 0, 0, 0, 0, 0, 0, 0, 0,]
  [0, 0, 1, 0, 0, 0, 2, 0, 0,]
  [0, 0, 0, 1, 0, 0, 2, 0, 0,]
  [0, 0, 0, 0, 1, 0, 2, 0, 0,]
  [0, 0, 0, 0, 0, 1, 2, 0, 0,]
  [0, 0, 0, 0, 0, 0, 0, 0, 0,]
  [0, 0, 0, 0, 0, 0, 0, 0, 0,]
  [0, 0, 0, 0, 0, 0, 0, 0, 0,]
]) // -> 0

omok([
  [0, 0, 0, 0, 0, 0, 0, 0, 0,]
  [0, 0, 0, 0, 0, 0, 0, 0, 0,]
  [0, 0, 1, 0, 0, 0, 2, 0, 0,]
  [0, 0, 0, 1, 0, 0, 2, 0, 0,]
  [0, 0, 0, 0, 1, 0, 2, 0, 0,]
  [0, 0, 0, 0, 0, 1, 2, 0, 0,]
  [0, 0, 0, 0, 0, 0, 1, 0, 0,]
  [0, 0, 0, 0, 0, 0, 0, 0, 0,]
  [0, 0, 0, 0, 0, 0, 0, 0, 0,]
]) // -> 1

omok([
  [0, 0, 0, 0, 0, 0, 0, 0, 0,]
  [0, 0, 0, 0, 0, 0, 0, 0, 0,]
  [0, 0, 1, 0, 0, 0, 2, 0, 0,]
  [0, 0, 0, 1, 0, 0, 2, 0, 0,]
  [0, 0, 0, 0, 1, 0, 2, 0, 0,]
  [0, 0, 0, 0, 0, 1, 2, 0, 0,]
  [0, 0, 0, 0, 0, 0, 2, 0, 0,]
  [0, 0, 0, 0, 0, 0, 0, 0, 0,]
  [0, 0, 0, 0, 0, 0, 0, 0, 0,]
]) // -> 2
```
```js
// 흑이 이긴 경우 1, 백이 이긴 경우 2, 아무도 이기지 않은 경우 0을 반환
// (단, 칸이 비어있는 경우는 0, 흑은 1, 백은 2로 표현합니다.)

// > 가로방향 오목만 판별해보쟈 

// - 한칸한칸 보면서 판별하기
// - 한칸한칸 보면서 지금까지 본 x or o 의 갯수를 기억한다.
// - x or o 의 갯수를 기억하다가
// - x or o 가 다섯개 연속이면!
// - `내가 본 플레이어가 몇번 연속?`
function omok(arr){
  for(let i=0; i<arr.length; i++){
    let player1 = 0;
    let player2 = 0;

    for(let j=0; j<arr.length; j++){
      if(arr[j][i] === 1){
        player1++;
        player2 = 0;
      }else if(arr[j][i] === 2){
        player2++;
        player1 = 0;
      }
    }

    if(player1 === 5){
      return 'player1';
    }else if(player2 === 5){
      return 'player2';
    }
  }
  
}

function omok(arr){
  for(let i=0; i<arr.length; i++){
    let player1 = 0;
    let player2 = 0;

    for(let j=0; j<arr.length; j++){
      if(arr[j][j+i] === 1){
        player1++;
        player2 = 0;
      }
      if(arr[j][j+i] === 2){
        player2++; 
        player1 = 0;
      }
    }

    if(player1 === 5){
      return 'player1';
    }
    if(player2 === 5){
      return 'player2';
    }

  }
}

omok([
  [0, 0, 1, 2, 2, 1, 1, 2, 0,],
  [0, 0, 0, 0, 2, 0, 0, 0, 0,],
  [0, 0, 1, 0, 2, 0, 2, 0, 0,],
  [0, 0, 0, 0, 2, 0, 2, 0, 0,],
  [0, 0, 0, 1, 2, 0, 2, 0, 0,],
  [0, 0, 0, 1, 0, 1, 2, 0, 0,],
  [0, 0, 0, 1, 0, 0, 0, 0, 0,],
  [0, 0, 0, 1, 0, 0, 0, 0, 0,],
  [2, 2, 2, 2, 0, 0, 0, 0, 0,]
]) // -> 0

```
```js
// 흑이 이긴 경우 1, 백이 이긴 경우 2, 아무도 이기지 않은 경우 0을 반환
// (단, 칸이 비어있는 경우는 0, 흑은 1, 백은 2로 표현합니다.)

// > 가로방향 오목만 판별해보쟈 

// - 한칸한칸 보면서 판별하기
// - 한칸한칸 보면서 지금까지 본 x or o 의 갯수를 기억한다.
// - x or o 의 갯수를 기억하다가
// - x or o 가 다섯개 연속이면!
// - `내가 본 플레이어가 몇번 연속?`
function omok(arr){
  // 가로
  for(let i=0; i<arr.length; i++){
    let currentPlayer;
    let count;

    for(let j=0; j<arr.length; j++){
      if(currentPlayer !== arr[i][j]){
        currentPlayer = arr[i][j];
        count = 1;
      }else{
        count++;
      }

      if((currentPlayer === 1 || currentPlayer === 2 ) && count === 5){
        return currentPlayer;
      }
    }
  }

  // 세로
  for(let i=0; i<arr.length; i++){
    let currentPlayer;
    let count;

    for(let j=0; j<arr.length; j++){
      if(currentPlayer !== arr[j][i]){
        currentPlayer = arr[j][i];
        count = 1;
      }else{
        count++;
      }

      if((currentPlayer === 1 || currentPlayer === 2 ) && count === 5){
        return currentPlayer;
      }
    }
  }

  // 대각선
  for(let i=0; i<arr.length; i++){
    let currentPlayer;
    let count;

    for(let j=0; j<arr.length; j++){
      if(currentPlayer !== arr[j][j+i]){
        currentPlayer = arr[j][j+i];
        count = 1;
      }else{
        count++;
      }

      if((currentPlayer === 1 || currentPlayer === 2 ) && count === 5){
        return currentPlayer;
      }
    }
  }

  for(let i=0; i<arr.length; i++){
    let currentPlayer;
    let count;

    for(let j=0; j<arr.length; j++){
      if(currentPlayer !== arr[j][j-i]){
        currentPlayer = arr[j][j-i];
        count = 1;
      }else{
        count++;
      }

      if((currentPlayer === 1 || currentPlayer === 2 ) && count === 5){
        return currentPlayer;
      }
    }
  }
  
}

omok([
  [1, 1, 1, 1, 1, 2, 1, 2, 0],
  [0, 0, 0, 0, 1, 2, 0, 0, 0],
  [0, 0, 1, 0, 2, 1, 2, 0, 0],
  [0, 0, 0, 0, 2, 0, 1, 2, 0],
  [0, 0, 0, 1, 2, 0, 2, 2, 2],
  [1, 0, 1, 1, 1, 1, 2, 0, 1],
  [0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0],
  [2, 2, 2, 2, 0, 0, 0, 0, 0]
]) // -> 0

```
---

문제 7. 배열을 입력받아 있는 요소 중 아무거나 하나를 골라서 반환하는 함수를 작성하세요.

예:

```js
randomItem([1, 2, 3, 4, 5]) // 1, 2, 3, 4, 5 중 아무거나 반환
```

```js
function randomItem(arr){
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
}
```

---

문제 8. 배열을 입력받아, 요소들의 순서를 뒤섞은 새 배열을 반환하는 함수를 작성하세요. (단, 원본 배열이 변경되어서는 안 됩니다.)

예:

```js
shuffle([1, 2, 3, 4, 5]) // [3, 1, 4, 5, 2] 와 같이 순서가 뒤섞인 새 배열 반환
```
```js
function shuffle(arr){
  const newArr = [];
  const indexArr = [];

  for(let i=0; i<arr.length; i++){
    let index = Math.floor(Math.random() * arr.length);
    if(indexArr.includes(index)){
      i--
    }else{
      indexArr.push(index);
      newArr.push(arr[index])
    }
  }
  return newArr;
}
```