/*
//불러오기
var counter = document.getElementsByClassName('counter');
var increment = document.getElementsByClassName('increment');
var buttonList = document.getElementsByClassName('buttonList');
var counter = document.getElementsByClassName('plusbt');
var minubt = document.getElementsByClassName('minubt');

//에러가나는데 왜 나는지 모르겠습니다 ㅠㅠ...
var radio1 = increment[0].childNodes[1];
var radio2 = increment[0].childNodes[3];
var radio3 = increment[0].childNodes[5];
var radio4 = increment[0].childNodes[7];
var radio5 = increment[0].childNodes[9];

//카운트 값
var count = 0;
//라디오 체크 값
var radiock = 0;

//+를 누르면 늘어나는 함수 시작
plusbt.addEventListener('click', function(){
  if (radiock === 1) {
    count = ++count;
    counter.innerHTML = count;
  }
  else if (radiock === 2){
    count = count + 2;
    counter.innerHTML = count;
  }
  else if (radiock === 3){
    count = count + 3;
    counter.innerHTML = count;
  }
  else if (radiock === 4){
    count = count + 4;
    counter.innerHTML = count;
  }
  else if (radiock === 5){
    count = count + 5;
    counter.innerHTML = count;
  }
})

//-를 누르면 줄어드는 함수 시작
minubt.addEventListener('click', function(){
  if (radiock === 1) {
    count = --count;
    counter.innerHTML = count;
  }
  else if (radiock === 2){
    count = count - 2;
    counter.innerHTML = count;
  }
  else if (radiock === 3){
    count = count - 3;
    counter.innerHTML = count;
  }
  else if (radiock === 4){
    count = count - 4;
    counter.innerHTML = count;
  }
  else if (radiock === 5){
    count = count - 5;
    counter.innerHTML = count;
  }
})

//라디오체크 값
var check1 = function() {
  radiock = 1;
  return radiock;
}
var check2 = function() {
  radiock = 2;
  return radiock;
}
var check3 = function() {
  radiock = 3;
  return radiock;
}
var check4 = function() {
  radiock = 4;
  return radiock;
}
var check5 = function() {
  radiock = 5;
  return radiock;
}

//클릭시 값 전환
radio1.addEventListener('click', checking1);
radio2.addEventListener('click', checking2);
radio3.addEventListener('click', checking3);
radio4.addEventListener('click', checking4);
radio5.addEventListener('click', checking5);
*/
//1. element 찾기
var init = function () {
  //code here 함수를 이용하여 코드를 작성하라고 할때 제일 기본 코드.
  var counter = document.getElementById('counter');
  var plusbt = document.getElementById('plusbt');
  var minubt = document.getElementById('minubt');
  var multibt = document.getElementById('multi');
  var divisionbt = document.getElementById('division');
  var counterNumber = 0;

//카운터를 제어하는 함수
function counterHandler(num) {
  counter.innerHTML = num;
}

//플러스 버튼 클릭시 실행되는 함수
function clickplusbt() {
  //숫자 10진수로 반환, parseInt는 문자를 숫자로 변환
  counterNumber = counterNumber + parseInt(getRadioValue(), 10);
  counterHandler(counterNumber);
}

//마이너스 버튼 클릭시 실행되는 함수
function clickminubt() {
  counterNumber = counterNumber - parseInt(getRadioValue(), 10);
  counterHandler(counterNumber);
}

//곱하기 버튼 클릭시 실행되는 함수
function clickmultibt() {
  counterNumber = counterNumber * parseInt(getRadioValue(), 10);
  counterHandler(counterNumber);
}

//나누기 버튼 클릭시 실행되는 함수
function clickdivisionbt() {
  counterNumber = counterNumber % parseInt(getRadioValue(), 10);
  counterHandler(counterNumber);
}

//라디오버튼의 선택된 값을 찾는 기능
function getRadioValue() {
  //함수 내부의 우리가 접근해야하는 라이오 값을 세팅해주어야 한다.
  var radios = document.getElementsByName('increment');
for(var i = 0; i < radios.length; ++i) {
    var radio = radios[i];
    if (radio.checked === true){
      return radio.value;
    }
  }
}

plusbt.addEventListener('click', clickplusbt);
minubt.addEventListener('click', clickminubt);
multibt.addEventListener('click', clickmultibt);
divisionbt.addEventListener('click', clickdivisionbt);
};
document.addEventListener('DOMContentLoaded', init);
/*document.body.addEventListener('DOMContentLoaded', function (){
var counter = document.getElementById('counter');
console.log(counter);
});*/
