### 1번

1) 킬로미터를 미터로 바꾸는 프로그램을 만들어 보세요.
```js
function kmToMeter(number){

  number = number * 1000;
  
  return `${number}m`;
}

kmToMeter(10);
````
---
2) 인치를 센티미터로 변환하는 프로그램을 만들어 보세요.

```js
function inchToCenti(number){

  number = (number * 2.54).toFixed(2);
  return `${number}cm`;
}

inchToCenti(13);
```
---
3) 섭씨(C)를 화씨(F)로 변환하는 프로그램을 만들어 보세요.
```js
function subToHwa(number){

  number = ((number * 1.8) + 32).toFixed(2);
  return `${number}(F)`;
}

subToHwa(13);
```
---
4) 평을 제곱미터로 변환하는 프로그램을 만들어 보세요.
```js
function pyungToZegop(number){
  number = (number*3.3058).toFixed(2);
  return `${number}(m2)`;
}

pyungToZegop(13);
```
---
### 2번

오늘 가진 돈에 따라서 점심 메뉴를 선택하는 프로그램을 만들기로 했습니다. 1만원 이상이면 “에머이에서 쌀국수”를, 5천원에서 1만원 사이이면 “서브웨이에서 샌드위치”를, 5천원 이하이면 “편의점에서 삼각김밥과 라면”을 먹으라고 출력해 주는 프로그램을 만들어 보세요.

```js
function imPoorMan(money){
  if(money >= 10000){
    console.log('에머이에서 쌀국수를!');
  }else if(money > 5000 && money < 10000){
    console.log('서브웨이에서 샌드위치를!');
  }else if(money <= 5000){
    console.log('“편의점에서 삼각김밥과 라면을!');
  }
}

imPoorMan(10000);
```

### 3번

1) 1004를 10번 출력하는 프로그램을 만들어 보세요.
```js
for(let i = 0; i < 10; i++){
    console.log(1004);
}
```
2) 입력된 수를 10번 출력하는 프로그램을 만들어 보세요.
```js
const num = 10;
for(let i = 0; i < 10; i++){
    console.log(num);
}
```
3) 1부터 20까지의 수를 출력하는 프로그램을 만들어보세요.
```js
for(let i = 0; i < 20; i++){
    console.log(i + 1);
}
```
4) 1부터 입력된 수까지 출력하는 프로그램을 만들어 보세요. (단, 입력된 수는 1보다 큰 정수입니다.)
```js
const num = 10
if(num > 1){
    for(let i = 0; i < num; i++){
        console.log(i + 1);
    }
}

```
5) 1부터 20까지의 수가 짝수인지 홀수인지를 출력하는 프로그램을 만들어보세요.


6) 1부터 입력된 수까지의 수가 짝수인지 홀수인지를 출력하는 프로그램을 만들어 보세요. (단, 입력된 수는 1보다 큰 정수입니다.)