//1. 엘리먼트 요소 추가
//2. 카운터 제어 버튼 생성
//3. +, - 버튼 제어 기능
//4. 증감 기능 추가
//5. 라디오 선택 값
//6. 라디오 밸류 값 어떻게 함수 내에 넣을지...
//7. 체크된 값 확인 위해 checked 확인하는 반복문 추가
//7. 체크된 밸류 값 숫자로 변환

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

  //곱하기버튼 클릭시 실행되는 함수
  function clickMultipleButton() {
    counterNumber = counterNumber * getRadioValue();
    counterHandler(counterNumber);
  }

  //나머지버튼 클릭시 실행되는 함수
  function clickRemainderButton() {
    counterNumber = counterNumber % getRadioValue();
    counterHandler(counterNumber);
  }

  //라디오버튼의 선택된 값을 찾는 기능
  //checked 속성으로 체크 확인
  //반복문 이용해서 체크되어있는지 확인하기
  //parseInt(속성값 , 10) - 10진수로 변환
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
