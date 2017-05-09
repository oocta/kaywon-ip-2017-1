//함수 표현식(무명 함수 표현식), 익명 함수
var sum = function (a, b) {
  return a + b;
};

//기명 함수 표현식 - 패턴 1
var sum = function sum(a, b) {
  return a + b;
};

//기명 함수 표현식 - 패턴 2
var sum = function MathSum(a, b) {
  return a + b;
};

//함수 선언식
function sum(a, b) {
  return a + b;
}

// 되도록 stack trace 를 위해 기명 함수 표현식을 사용하는 것을 추천.
