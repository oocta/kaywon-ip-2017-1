# 인터랙션 프로그래밍 4주차 : 자바스크립트의 기초 요소 2

## 코드리뷰

```javascript

// #1
for(var i = 1; i<=50; i++){

  //여기서 %=로 처리하면 컴퓨터가 많이 힘들어하는데 이유를 잘 모르겠습니다
  var s = i % 2;

  if(s<1){
    console.log(i+'짝수입니다!');
  }else{
    console.log(i+'홀수입니다~');
  }
}

```

## 다시보기

- 논리연산자 그리고 작동원리
- 조건문 : if ...else
- 배열 : [1, 2, 3, 4]
- 반복문 : for

## 함수(Function)

### 함수의 정의

> 재사용을 위해 코드 블록을 감싸는 방법. 작업을 수행하거나 값을 계산하는 등의 역할을 수행하는 코드를 포한한다. 호출을 통해 내부의 코드를 동작한다. 유효범위(Scope)를 가지고 있으며, 또한 실행시 값을 반환하도록 되어 있다.

### 유효범위(Scope)

> 코드의 참조 범위. 변수와 매개변수의 접근성과 생존 기간을 의미. 전역 스코프와 지역 스코프로 구분. 전역 스코프는 스크립트내의 모든 곳이 참조 가능. 지역 스코프는 지정된 함수 내부에서만 참조 가능.

### 메서드(Method)

> 작업을 수행하거나 값을 연산하는 등의 역할을 수행하는 코드를 포함하고 있는 블럭단위 뭉치. 함수와 의미적으로 동일하나, 객체에 의존되어 있는 함수를 메서드로 칭한다.

### 함수의 종류

* 명시적 함수
* 익명 함수
* 함수 리터럴

### 함수 작성

> 함수를 작성하는 방법은 선언식, 표현식. 일반적으로 함수는 선언식으로, 메서드는 표현식으로 작성.

### 함수 호출

```javascript

function func(num) {
  console.log(num);
}

func(1);

```

### 매개변수(Parameter)

> 변수의 한 종류로, 함수에 전달되는 여러 데이터 중 하나를 의미. 매개변수의 목록은 함수를 정의하는 부분에 포함되며, 매 함수 호출시 함수에 주입된다.

```javascript

// 여기서 num 이 매개변수.
function func(num) {
  console.log(num);
}

func(1);

```

### 전달인자(Argument)

```javascript

function func(num) {
  console.log(num);
}

// 여기서 1이 전달인자(argument)
func(1);

```

### 매개변수 유효성

> 함수에 전달시 사용되는 매개변수는 실행시점에 유효할 수도 유효하지 않을 수도 있다. 따라서 코드 실행시 그 유효성을 검증할 필요가 있다.

### 매개변수 활용

> 매개변수로는어떠한 값도 전달인자로 대입될 수 있으며, 전달할 수 있는 매개변수는 다수로 사용이 가능하다. 정의된 매개변수의 수보다 많은 수의 값을 전달할 경우도 문제없이 실행되며, 정의된 그 수보다 적을 경우 값이 없는 매개변수는 undefined가 할당된다.

### 함수 실행결과 반환

```javascript

function helloMan(name) {
  return 'Hello, ' + name + '!';
}

// 여기서 1이 전달인자(argument)
var helloTony = helloMan('tony'); // 'Hello, tony!'
console.log(helloTony);

```
