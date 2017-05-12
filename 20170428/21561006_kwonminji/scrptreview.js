var init = function () {
    var counter = document.getElementById('counter');
    var plusButton = document.getElementById('plusButton');
    var minusButton = document.getElementById('minusButton');
    var counterNumber = 0;

   //카운터를 제어하는 함수
   function counterHandler() {
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

  function getRadioValue() {
    var radios = radios[i];
    if (radio.checked === true) {
      return parseInt(radio.value, 10);
    }
  }
};


document.addEventListener('DOMContentLoaded', init);
};
