# Promise

`Promise는` '언젠가 끝나는 작업'의 결과값을 담는 통과 같은 객체입니다.

> then 메소드에 넘겨준 콜백에서 Promise 객체를 반환하면, then 메소드가 반환한 Promise 객체는 앞의 Promise 객체의 결과를 따르게 됩니다
? 

```js
function delay(ms, value) {
  return new Promise(resolve => {
    setTimeout(() => {
      // console.log(`${ms} 밀리초가 지났습니다.`);
      resolve(value);
    }, ms);
  });
}

delay(1000, 'hello')
  .then(str => {
    return delay(2000, str + 'world');
  })
  .then(str => {
    console.log(str);
  });

setTimeout(() => {
  let str = 'hello';
  setTimeout(() => {
    let str2 = 'hello' + 'world'
    console.log(str2);
  },2000);
}, 1000);
```

```js
async function func1() {
  return 1;
}

async function func2() {
  return Promise.resolve(2);
}

func1().then(p => {
  return p + 1;
})
.then(p => {
  console.log(p);
}); // 1

func2().then(console.log); // 2

console.log('시작')

```

비동기 코드를 둘러싸고 있는 코드가 비동기함수여야함
바로위스코프

```js
function delay(ms, msg) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(`${ms} 밀리초가 지났습니다. 나는 비동기함수입니다.`);
      resolve(msg)
    }, ms);
  });
}

async function main() {
  // 함수 자체가 비동기는 아니고, 함수 안에서 비동기 문법을 사용 할수 있게해줌

  console.log('나는 async 함수 안에 있지만 동기적으로 작동합니다.');
  await setTimeout(() => {
    console.log('나는 async 함수 안에 있고 비동기적으로 작동합니다.');
  },0);
  const str1 = await delay(3000, 'hello');
  console.log(str1);
  const str2 = await delay(4000, 'bye');
  console.log(str2);
}

main();
console.log('나는 동기함수입니다');
```