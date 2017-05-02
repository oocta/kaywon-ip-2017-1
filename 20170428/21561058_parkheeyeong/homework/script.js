//쓸수있도록 가져오기~
var counter = document.getElementsByClassName('counter')[0];
var buttonList = document.getElementsByClassName('buttonList');
var plusbtn = buttonList[0].childNodes[1];
var minusbtn = buttonList[0].childNodes[2];

var num = 0;
//숫자를 증가시키는 함수선언
function plusNum(){
  counter.innerHTML = '';
  num =num+1;
  counter.innerHTML += [num];
}

plusbtn.addEventListener('click', plusNum)
