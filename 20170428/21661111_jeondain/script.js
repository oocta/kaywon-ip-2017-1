//버튼 두 개 제어, 라디오 제어(제어해야 할 엘리먼트 찾기)
/*var init= function(){
  시작코드
};
document.body.addEventListener('DOMContentLoded', init);*/

var init = function(){
var counter = document.getElementById('counter');
var plusButton = document.getElementById('plusButton');
var minusButton = document.getElementById('minusButton');
var counterNumber = 0;

 //카운터를 제어하는 함수
 //실행문이라 생각  counthandler
 function counterHandler(num){
   counter.innerHTML = num;
   console.log(counterHandler);
 }

 //플러스 버튼 클릭시 실행되는 함수
//1씩 증가 시킴
 function clickplusbutton(){
   //숫자와 문자열이 합쳐지면 -문자열로
   //숫자열로 바꿔주기
   counterNumber = counterNumber + parseInt(getRadioValue(), 10);
   counterHandler(counterNumber);
 }

 //마이너스 버튼 클릭시 실행되는 함수
 function clickminusbutton(){
   counterNumber = counterNumber - parseInt(getRadioValue(), 10);
   counterHandler(counterNumber);
 }

//라디오 버튼의 선택되는 값을 찾는 기능
//getElement's'ByName-같은 이름을 가지고 있는개 여러개이기 때문에 복수형으로
function getRadioValue(){
  var radios =document.getElementsByName('increment');
  for (var i = 0; i < radios.length; ++i){
    var radio = radios[i];
    if (radio.checked===true){
      return parseInt(radio.value, 10);
    }
  }
  return 0;
}
getRadioValue();

plusButton.addEventListener('click', clickplusbutton);
minusButton.addEventListener('click', clickminusbutton);
};

document.addEventListener('DOMContentLoaded', init);
