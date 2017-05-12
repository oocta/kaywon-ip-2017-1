//1.element찾기
/*var init= function(){
  시작코드
};
document.body.addEventListener('DOMContentLoded', init);*/
var init= function(){
  var counter = document.getElementById('counter');
  var plusbutton =document.getElementById('plusbutton');
  var minusbutton =document.getElementById('minusbutton');
  var multiplybutton =document.getElementById('multiplybutton');
  var divitionbutton =document.getElementById('divitionbutton');
  var resetbutton =document.getElementById('resetbutton');
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
  //곱하기버튼 제어
  function clickMultiplybutton(){
    counterNumber = counterNumber *getRadioValue();
    counterHandler(counterNumber);
  }
  //나머지버튼 제어
  function clickDivitionbutton(){
    counterNumber = counterNumber %getRadioValue();
    counterHandler(counterNumber);
  }
  //리셋버튼 제어
  function clickResetbutton(){
    counterNumber = counterNumber *0;
    counterHandler(counterNumber);
  }
  //라디오버튼의 선택된 값을 찾는 기능
  function getRadioValue(){
    var radios = document.getElementsByName('increment');//increment클레스의 radio들을 불러와
    for (var i = 0; i < radios.length; ++i) {//반복하라(변수i가 0이고,i가 radios보다 작가면 i의 수를 증가시켜라)
      var radio = radios[i];
      if (radio.checked ===true){
        return parseInt(radio.value,10);
      }
    }
  }
  console.log(getRadioValue());

  plusbutton.addEventListener('click', clickPlusbutton);
  minusbutton.addEventListener('click', clickMinusbutton);
  multiplybutton.addEventListener('click', clickMultiplybutton);
  divitionbutton.addEventListener('click', clickDivitionbutton);
  resetbutton.addEventListener('click', clickResetbutton);
};
  document.addEventListener('DOMContentLoaded', init);
