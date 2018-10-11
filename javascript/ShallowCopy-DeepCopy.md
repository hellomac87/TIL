## 얕은 복사(Shallow Copy) & 깊은 복사(Deep Copy)
Object.assign 정적 메소드는 인수로 받은 객체들의 모든 열거 가능한 속성을 대상 객체에 복사합니다.
```js
const obj = {};
Object.assign(obj, {a: 1}, {b: 2});

console.log(obj); // { a: 1, b: 2 }
```

Object.assign은 객체를 복제하는 수단으로도 사용됩니다.

```js
const obj = {
  a: 1,
  b: 2
};

// 빈 객체를 대상으로 `Object.assign`을 사용하면, 객체를 간단히 복제할 수 있습니다.
const obj2 = Object.assign({}, obj);
console.log(obj2); // { a: 1, b: 2 }
```

다만, 여기서 주의해야 할 점이 있습니다. 객체가 중첩되어 있다면, 내부에 있는 객체는 복제되지 않습니다. Object.assign을 통해 속성이 값이 복사될 때, 실제로 복사되는 것은 중첩된 객체라 아니라 그에 대한 참조이기 때문입니다.

```js
const obj = {
  innerObj: {
    a: 1,
    b: 2
  }
};

const obj2 = Object.assign({}, obj);

// `innerObj`는 복제되지 않았습니다.
obj.innerObj === obj2.innerObj;
obj.innerObj.a = 3;
obj2.innerObj.a; // 3
```

프로그래밍 분야에서는 중첩된 자료구조까지 모두 복사하는 것을 가지고 깊은 복사(deep copy)라고 합니다. JavaScript에는 깊은 복사를 위한 기능이 내장되어 있기 않기 때문에, 직접 구현을 해서 사용해야 합니다. 그런데 깊을 복사를 할 때 고려해야 할 것들이 많아서 (순환참조, 프로토타입, 열거 불가능한 속성, getter/setter 등) 정말로 직접 구현하기는 어렵고, 관련 라이브러리를 사용하는 것을 추천합니다.

비슷한 객체의 복제가 빈번하게 이루어져야 하는 경우에는 Immutable.js와 같은 라이브러리의 사용도 고려해 보시길 바랍니다.