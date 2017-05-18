//유효범위(Scope) - 1
var msg = 'Good bye';
var hello = function () {
  var msg = 'Hello world';
  console.log(msg);
};

console.log(msg);
hello();

//유효범위(Scope) - 2
var msg = 'Good bye';
var hello = function () {
  msg = 'Hello world';
  console.log(msg);
};

//호이스팅 (hoisting) - 1
hi();
var hi = function () {
  console.log(hi);
};
hi();

//호이스팅 (hoisting) - 2
hi();
function hi() {
  console.log(hi);
}
hi();

//this - 1
console.log(this);

//this - 2
var printThis = function printThis() {
  console.log('this', this);
};
printThis();

//this - 3
var printer = {
  printThis: function () {
    console.log('this2', this);
  }
};
printer.printThis();

//this - 3
var printer = {
  printThis: function () {
    console.log('this1', this);
    var innerPrintThis = function () {
      console.log('this2', this);
    };
    innerPrintThis();
    function lastPrintThis() {
      console.log('this3', this);
    }
    lastPrintThis();
  }
};
printer.printThis();

//콜백패턴 - 1
document.body.addEventListener('click', function () {
  console.log('body clicked!');
});

//콜백패턴 - 2
setInterval(function () {
  console.log('callback!!');
}, 2000);

//콜백 - 비동기 이벤트 리스너
var printBody = function () {
  console.log('body');
};
document.body.addEventListener('click', printBody);

//콜백 - 타임아웃
var clbk = function () {
  console.log('callback!!');
};
setTimeout(clbk(), 3000);

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
