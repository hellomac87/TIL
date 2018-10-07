# Class

JavaScript class는 ECMAScript 6을 통해 소개되었으며, 기존 prototype 기반의 상속 보다 명료하게 사용할 수 있다.

# 정의


Class는 사실 함수이다. 함수를 함수 표현식과 함수 선언으로 정의할 수 있듯이 class 문법도 class 표현식과 class 선언 두 가지 방법을 제공한다.

## Class 선언

## Constructor (생성자)

constructor 메소드는 class 로 생성된 객체를 생성하고 초기화하기 위한 특수한 메소드입니다.  "constructor" 라는 이름을 가진 특수한 메소드는 클래스 안에 한 개만 존재할 수 있습니다. 만약 클래스에 한 개를 초과하는 constructor 메소드를 포함한다면, SyntaxError 가 발생할 것입니다.

constructor는 부모 클래스의 constructor 를 호출하기 위해 super 키워드를 사용할 수 있습니다.

## ref

- [MDN-Class](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes)
- [hellojavascript-Class](https://helloworldjavascript.net/pages/270-class.html)

- [https://www.zerocho.com/category/ECMAScript/post/5759cd68b15f881700c32592](https://www.zerocho.com/category/ECMAScript/post/5759cd68b15f881700c32592)
- [https://poiemaweb.com/es6-class](https://poiemaweb.com/es6-class)