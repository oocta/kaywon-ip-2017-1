//1.element찾기
/*var init= function(){
  시작코드
};
document.body.addEventListener('DOMContentLoded', init);*/
var init= function(){
  var counter = document.getElementById('counter');
  var plusbutton =document.getElementById('plusbutton');
  var minusbutton =document.getElementById('minusbutton');
  var counterNumber = 0;

  //카운터를 제어하는 함수
  function counterHandler(num) {
    counter.innerHTML = num;
  }
  //플러스 버튼 제어
  function clickPlusbutton(){
    counterNumber = counterNumber+ parseInt(getRadioValue(),10);
    counterHandler(counterNumber);
  }
  //마이너스버튼제어
  function clickMinusbutton(){
    counterNumber = counterNumber-getRadioValue();
    counterHandler(counterNumber);
  }
  //라디오버튼의 선택된 값을 찾는 기능
  function getRadioValue(){
    var radios = document.getElementsByName('increment');
    for (var i = 0; i < radios.length; ++i) {
      var radio = radios[i];
      if (radio.checked ===true){
        return parseInt(radio.value,10);
      }
    }
  }
  console.log(getRadioValue());

  plusbutton.addEventListener('click', clickPlusbutton);
  minusbutton.addEventListener('click', clickMinusbutton);
};
  document.addEventListener('DOMContentLoaded', init);
