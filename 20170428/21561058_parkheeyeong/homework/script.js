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

//라디오체크값 가져오기
var count=increment.length;

for(var i =0;i<count;i++){
  if(increment[i].cheked){
    var value = increment[i].value;
  }
}


// //라디오 체크값 검색해본 결과 - 실행안됌
// function plusNum(){
//   var num = 0;
//   if(document.dataForm.radio1.checked==true)
//   { counter.innerHTML = '';
//   ++num;
//   counter.innerHTML = num;
//   return;}
// }
//
// plusbtn.addEventListener('click', plusNum)

var num = 0;
//숫자를 증가시키는 함수선언
function plusNum(){
  if (radiobtn == 1){
      num = ++num;
      counter.innerHTML = [num];
    }
}

plusbtn.addEventListener('click', plusNum)
