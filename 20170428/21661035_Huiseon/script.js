/*으아아 어렵다 */

//1.제어해야할 변수 엘리먼트 담기
var init = function () {
  var counter = document.getElementById('counter');
  var plusBt = document.getElementById('plusBt');
  var minusBt = document.getElementById('minusBt');
  var multiplyBt = document.getElementById('multiplyBt');
  var divisionBt = document.getElementById('divisionBt');
  var reset = document.getElementById('reset');
  var counterNumber = 0;

//2. 카운터 제어 기능 만들기
  //카운터를 제어하는 함수
  function counterHandler(num) {
    counter.innerHTML = num;
  }

//3. 버튼제어 기능 만들기
//4. 증감기능 추가
  //플러스버튼 클릭시 실행되는 함수
  function clickPlusBt() {
    counterNumber = counterNumber + getRadioValue();
    counterHandler(counterNumber);
  }
  //마이너스버튼 클릭시 실행되는 함수
  function clickminusBt() {
    counterNumber = counterNumber - getRadioValue();
    counterHandler(counterNumber);
  }
  //곱하기버튼 클릭시 실행되는 함수
  function clickmultiplyBt() {
    counterNumber = counterNumber * getRadioValue();
    counterHandler(counterNumber);
  }
  //마이너스버튼 클릭시 실행되는 함수
  function clickdivisionBt() {
    counterNumber = counterNumber / getRadioValue();
    counterHandler(counterNumber);
  }
  //리셋해버려
  function clickreset() {
    counterNumber = counterNumber*0 ;
    counterHandler(counterNumber);
  }


//5. 라디오 버튼 제어
  //라디오 버튼의 클릭된 값을 찾는 기능
  function getRadioValue() {
    var radios =document.getElementsByName('increment');//여러개 Element's'
    for (var i = 0; i <radios.length; ++i) {
      var radio = radios[i];
      if (radio.checked === true) {
        return parseInt(radio.value,10);//parseint( ): 정수로 변환
      }
    }
  }

  plusBt.addEventListener('click',clickPlusBt);
  minusBt.addEventListener('click',clickminusBt);
  multiplyBt.addEventListener('click',clickmultiplyBt);
  divisionBt.addEventListener('click',clickdivisionBt);
  reset.addEventListener('click',clickreset);

};


document.addEventListener('DOMContentLoaded',init);
