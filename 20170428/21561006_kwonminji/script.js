var count = 0;

//getElementsByClassName('counter')[0]클래스 순서 정해주지않으면 지정이 안됩니다...
var input = document.getElementsByClassName('counter')[0];
var radio = document.getElementsByClassName('increment');

// 하나하나 변수를 지정해 주지 않으면 제가 체크한 버튼을 인식하지 못하는 것 같습니다.
// value값을 이용해서 if문을 써보고 싶었는데...그건 안되는건가봐요ㅠㅠ
// 그래서 이렇게 하나하나 변수를 지정해주고 숫자를 변환할 수 있도록 지정해주는 것 같은데...맞나요?ㅠㅠ


//chlldNode list가 text, label, text, label 순서라 1,3,5,7,9..

var num1 = radio[0].childNodes[1];
var num2 = radio[0].childNodes[3];
var num3 = radio[0].childNodes[5];
var num4 = radio[0].childNodes[7];
var num5 = radio[0].childNodes[9];

function plus () {
  if (radioNum == 1){
    count = ++count;
    input.innerHTML = count;
  }

  else if(radioNum == 2){
    count = count + 2;
    input.innerHTML = count;
  }

  else if(radioNum == 3){
    count = count + 3;
    input.innerHTML = count;
  }


  else if(radioNum == 4){
    count = count + 4;
    input.innerHTML = count;
  }

  else if(radioNum == 5){
    count = count + 5;
    input.innerHTML = count;
  }
}

function minus () {
  if (radioNum == 1){
  count = --count;
  input.innerHTML = count;
  }

  else if(radioNum == 2){
  count = count - 2;
  input.innerHTML = count;
  }

  else if(radioNum == 3){
  count = count - 3;
  input.innerHTML = count;
  }

  else if(radioNum == 4){
  count = count - 4;
  input.innerHTML = count;
  }

  else if(radioNum == 5){
  count = count - 5;
  input.innerHTML = count;
  }
}

var turnNum1 = function () {
  radioNum = 1;
  return radioNum;
}

var turnNum2 = function () {
  radioNum = 2;
  return radioNum;
}

var turnNum3 = function () {
  radioNum = 3;
  return radioNum;
}

var turnNum4 = function () {
  radioNum = 4;
  return radioNum;
}

var turnNum5 = function () {
  radioNum = 5;
  return radioNum;
}

num1.addEventListener('click', turnNum1);
num2.addEventListener('click', turnNum2);
num3.addEventListener('click', turnNum3);
num4.addEventListener('click', turnNum4);
num5.addEventListener('click', turnNum5);

var plusNum = document.getElementById('plusbtn');
var minusNum = document.getElementById('minusbtn');

plusNum.addEventListener('click', plus);
minusNum.addEventListener('click', minus);
