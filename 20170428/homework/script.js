//6. 라디오버튼의 선택된 값 찾기
var init = function () {
  var counter = document.getElementById('counter');
  var plusButton = document.getElementById('plusButton');
  var minusButton = document.getElementById('minusButton');
  var counterNumber = 0;

  //카운터를 제어하는 함수
  function counterHandler(num) {
    counter.innerHTML = num;
    console.log('counterHandler');
  }

  //플러스 버튼 클릭시 실행되는 함수
  function clickPlusButton() {
    counterNumber = counterNumber + 1;
    counterHandler(counterNumber);
  }

  //마이너스버튼 클릭시 실행되는 함수
  function clickMinusButton() {
    counterNumber = counterNumber - 1;
    counterHandler(counterNumber);
  }

  //라디오버튼의 선택된 값을 찾는 기능
  function getRadioValue() {
    var radios = document.getElementsByName('increment');
    for(var i = 0; i < radios.length; ++i) {
      var radio = radios[i];
      if (radio.checked === true) {
        return radio.value;
      }
    }
  }
  console.log(getRadioValue());

  plusButton.addEventListener('click', clickPlusButton);
  minusButton.addEventListener('click', clickMinusButton);

};
document.addEventListener('DOMContentLoaded', init);
