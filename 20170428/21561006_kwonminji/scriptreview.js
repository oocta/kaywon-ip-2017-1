var init = function () {
  var counter = document.getElementById('counter');
  var plusButton = document.getElementById('plusButton');
  var minusButton = document.getElementById('minusButton');
  var multipleButton = document.getElementById('multipleButton');
  var remainderButton = document.getElementById('remainderButton');
  var counterNumber = 0;

  //카운터를 제어하는 함수
  function counterHandler(num) {
    counter.innerHTML = num;
  }

  //플러스 버튼 클릭시 실행되는 함수
  function clickPlusButton() {
    counterNumber = counterNumber + getRadioValue();
    counterHandler(counterNumber);
  }

  //마이너스버튼 클릭시 실행되는 함수
  function clickMinusButton() {
    counterNumber = counterNumber - getRadioValue();
    counterHandler(counterNumber);
  }

  function clickMultipleButton() {
    counterNumber = counterNumber * getRadioValue();
    counterHandler(counterNumber);
  }

  function clickRemainderButton() {
    counterNumber = counterNumber % getRadioValue();
    counterHandler(counterNumber);
  }

  //라디오버튼의 선택된 값을 찾는 기능
  function getRadioValue() {
    var radios = document.getElementsByName('increment');
    for(var i = 0; i < radios.length; ++i) {
      var radio = radios[i];
      if (radio.checked === true) {
        return parseInt(radio.value, 10);
      }
    }
  }

  plusButton.addEventListener('click', clickPlusButton);
  minusButton.addEventListener('click', clickMinusButton);
  multipleButton.addEventListener('click', clickMultipleButton);
  remainderButton.addEventListener('click', clickRemainderButton);


};
document.addEventListener('DOMContentLoaded', init);
