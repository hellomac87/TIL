# ir 기법

heading tag를 backgorund-image 로 지정할 시.
image를 불러오지 못했을 경우 대체 텍스트를 표시할 수 있는 방법

html
```html
<body>
    <h1 class="logo">CSS Zen Garden</h1>
</body>
```
css
```css
.logo{
    width:290px;
    height:195px;
    box-sizing: border-box;
    position:relative;
    text-align: center;
    font-size: 12px;
}
.logo::after{
    content:'';
    background: url('../images/title.png') no-repeat;
    position:absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
}
```
가상선택자 속성으로 배경이미지를 heading tag 의 텍스트 위로 덮어쓰게 한다.
배경이미지나 css를 불러오지 못했을 경우에는 기본 text가 제공된다.

## ref

- 다음 - 다룸 - IR 기법
    - [http://ui.daum.net/convention/css/css_ir](http://ui.daum.net/convention/css/css_ir)
