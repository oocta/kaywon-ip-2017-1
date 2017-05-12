//3. 버튼 제어 기능 만들기
var init = function () {
  var counter = document.getElementById('counter');
  var plusButton = document.getElementById('plusButton');
  var minusButton = document.getElementById('minusButton');

  //카운터를 제어하는 함수
  function counterHandler() {
    counter.innerHTML = '1';
    console.log('counterHandler');
  }

  //플러스 버튼 클릭시 실행되는 함수
  function clickPlusButton() {
    counterHandler();
  }

  //마이너스버튼 클릭시 실행되는 함수
  function clickMinusButton() {
    counterHandler();
  }

  console.log(plusButton, minusButton);
};
document.addEventListener('DOMContentLoaded', init);
