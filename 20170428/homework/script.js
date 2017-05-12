//5. 증감기능 추가
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

  plusButton.addEventListener('click', clickPlusButton);
  minusButton.addEventListener('click', clickMinusButton);

};
document.addEventListener('DOMContentLoaded', init);
