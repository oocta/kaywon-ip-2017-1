
//항상 시작할때 init라는 함수를 호출시킨뒤 시작하자! github에 기본작성 코드
//console.log 항상 찍어서 테스트해보면서 하기
var init = function(){
  //code here
  var counter = document.getElementById('counter');
  var plusButton = document.getElementById('plusButton');
  var minusButton = document.getElementById('minusButton');
  var counterNumber = 0;

  //카운터를 제어하는 함수
  function counterHandler(num){
    counter.innerHTML = num;
    console.log('counterHandler');
  }

  //플러스 버튼 클릭시 실행되는 함수
  function clickPlusButton(){
    //숫자로 바꿔 버리기 parseInt 10진수로
    //getRadioValue 만하면 문자로 인식
    counterNumber = counterNumber + parseInt(getRadioValue(), 10);
    counterHandler(counterNumber);
  }
  //마이너스 버튼 클릭시 실행되는 함수
  function clickMinusButton(){
    counterNumber = counterNumber - parseInt(getRadioValue(), 10);
    counterHandler(counterNumber);
  }

  function getRadioValue(){
    var radios = document.getElementsByName('increment');
    for(var i = 0; i < radios.length; ++i){
      var radio = radios[i];
      if(radio.checked === true){
        return parseInt(radio.value, 10);
      }
    }
    return 0;
  }
  getRadioValue();

plusButton.addEventListener('click', clickPlusButton);
minusButton.addEventListener('click', clickMinusButton);
};

document.addEventListener('DOMContentLoaded', init);
