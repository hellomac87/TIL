# Iterable

## 대체 어디에 쓰이는가?
```js
function* genCoroutine() {
  console.log('hello')
  yield {
    type: 'delay',
    delay: 1000
  }
  console.log('bye')
  yield {
    type: 'delay',
    delay: 2000
  }
  console.log('last')
}

function runCoroutine(co) {
  const value = co.next().value
  if (value.type === 'delay') {
    setTimeout(() => {
      runCoroutine(co)
    }, value.delay)
  }
}

runCoroutine(genCoroutine())

```
## 다시보기
- Map, Set;
