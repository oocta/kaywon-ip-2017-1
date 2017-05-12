//전체값
var init = function(){
  //선택
  var counter = document.getElementById('counter');
  var plusBtn = document.getElementById('plus');
  var minusBtn = document.getElementById('minus');
  var multiBtn = document.getElementById('multi');
  var percentBtn = document.getElementById('percent');
  //카운트 값
  var counterNumber = 0;
  //플러스 버튼 클릭시 실행되는 함수
  function clickPlusBtn(){
    counterNumber = counterNumber + getRadioValue();
    counterHandler(counterNumber);
  }
  //마이너스 버튼 클릭시 실행되는 함수
  function clickMinusBtn(){
    counterNumber = counterNumber - getRadioValue();
    counterHandler(counterNumber);
  }
  //곱하기 버튼 클릭시 실행되는 함수
  function clickMultiBtn(){
    counterNumber = counterNumber * getRadioValue();
    counterHandler(counterNumber);
  }
  //퍼센트 버튼 클릭시 실행되는 함수
  function clickPercentBtn(){
    counterNumber = counterNumber % getRadioValue();
    counterHandler(counterNumber);
  }
  //버튼 클릭시 넘어오는 값을 매개변수로 바꿔서 innerHTML로 넣어줌
  function counterHandler(num){
    counter.innerHTML = num;
    console.log('counterHandler');
  }
  //라디오 버튼의 선택된 값을 찾는 기능
  function getRadioValue(){
    var radios = document.getElementsByName('increment');
    for(var i = 0; i< radios.length; ++i){
      var radio = radios[i];
      if(radio.checked === true){
        return parseInt(radio.value,10);
      }
      console.log(i);
    }
  }
  //버튼을 누르면 버튼을 눌렀을때 실행하고 싶은 함수실행
  plusBtn.addEventListener('click',clickPlusBtn);
  minusBtn.addEventListener('click',clickMinusBtn);
  multiBtn.addEventListener('click',clickMultiBtn);
  percentBtn.addEventListener('click',clickPercentBtn);
}
// 전체값 실행.
document.addEventListener('DOMContentLoaded', init);
