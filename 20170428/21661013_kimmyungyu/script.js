var init = function(){
  //code here.
  //1. element 찾기
  var counter = document.getElementById('counter');
  var plus = document.getElementById('plusButton');
  var minus = document.getElementById('minusButton');
  var counterNumber = 0;

  //카운터를 제어하는 함수
  function counterHandler(num){
    counter.innerHTML = num;
  }
  //플러스 버튼 클릭 시 실행
  function clickPlusButton(){
    counterNumber = counterNumber + getRadioValue();
    counterHandler(counterNumber);
  }
  //마이너스 버튼 클릭 시 실행
  function clickMinusButton(){
    counterNumber = counterNumber - getRadioValue();
    counterHandler(counterNumber);
  }
  //라디오 버튼의 선택 된 값을 찾는 기능
  function getRadioValue(){
    var radios = document.getElementsByName('increment');
    for(var i = 0; i < radios.length; ++i){
      var radio = radios[i];
      if(radio.checked === true){
        return parseInt(radio.value, 10);
      }
    }
  }
  plus.addEventListener('click',clickPlusButton);
  minus.addEventListener('click',clickMinusButton);
}
document.addEventListener('DOMContentLoaded', init);
