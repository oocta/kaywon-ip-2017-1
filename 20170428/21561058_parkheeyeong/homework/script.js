//쓸수있도록 가져오기~
var counter = document.getElementsByClassName('counter')[0];
var increment = document.getElementsByClassName('increment');
var buttonList = document.getElementsByClassName('buttonList');
var plusbtn = document.getElementById('plusbtn');
var minusbtn = document.getElementById('minusbtn');
// var plusbtn = buttonList[0].childNodes[1];
// var minusbtn = buttonList[0].childNodes[2];
var radio1 = increment[0].childNodes[1];
var radio2 = increment[0].childNodes[3];
var radio3 = increment[0].childNodes[5];
var radio4 = increment[0].childNodes[7];
var radio5 = increment[0].childNodes[9];

// //라디오체크값 가져오기 - 둘다 실패했습니다..ㅠㅠ
// var count=increment.length;
//
//
// for(var i =0;i<count;i++){
//   if(increment[i].cheked){
//     var value = increment[i].value;
//   }
// }
// //라디오 체크값 검색해본 결과 - 실행안됌
// function plusNum(){
//   var count = 0;
//   if(document.increment.radio1.checked==true)
//   { counter.innerHTML = '';
//   ++count;
//   counter.innerHTML = count;
//   return;}
// }
//
// plusbtn.addEventListener('click', plusNum)

//넣을 숫자와 라디오체크 초기값 주기
var value = 0;
var count = 0;

// //숫자를 증가시키는 함수선언
// function plusNum() {
//   if (value === 1) {
//     count = ++count;
//     counter.innerHTML = count;
//   }
//   else if (value === 2) {
//     count = count + 2;
//     counter.innerHTML = count;
//   }
//   else if (value === 3) {
//     count = count + 3;
//     counter.innerHTML = count;
//   }
//   else if (value === 4) {
//     count = count + 4;
//     counter.innerHTML = count;
//   }
//   else  {
//     count = count + 5;
//     counter.innerHTML = count;
//   }
// }
//숫자를 증가시키는 함수선언
plusbtn.addEventListener('click',function() {
  if (value === 1) {
    count = ++count;
    counter.innerHTML = count;
  }
  else if (value === 2) {
    count = count + 2;
    counter.innerHTML = count;
  }
  else if (value === 3) {
    count = count + 3;
    counter.innerHTML = count;
  }
  else if (value === 4) {
    count = count + 4;
    counter.innerHTML = count;
  }
  else if (value === 5){
    count = count + 5;
    counter.innerHTML = count;
  }
})

minusbtn.addEventListener('click',function() {
  if (value === 1) {
    count = --count;
    counter.innerHTML = count;
  }
  else if (value === 2) {
    count = count - 2;
    counter.innerHTML = count;
  }
  else if (value === 3) {
    count = count - 3;
    counter.innerHTML = count;
  }
  else if (value === 4) {
    count = count - 4;
    counter.innerHTML = count;
  }
  else if (value === 5){
    count = count - 5;
    counter.innerHTML = count;
  }
})

//라디오값 주기
var checking1 = function() {
  value = 1;
  return value;
}
var checking2 = function() {
  value = 2;
  return value;
}
var checking3 = function() {
  value = 3;
  return value;
}
var checking4 = function() {
  value = 4;
  return value;
}
var checking5 = function() {
  value = 5;
  return value;
}

//클릭시 값을 전환
radio1.addEventListener('click', checking1);
radio2.addEventListener('click', checking2);
radio3.addEventListener('click', checking3);
radio4.addEventListener('click', checking4);
radio5.addEventListener('click', checking5);
