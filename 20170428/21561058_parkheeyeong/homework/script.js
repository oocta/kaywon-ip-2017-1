var init = function(){
  //가져오가
  var counter = document.getElementById('counter');
  var plusButton = document.getElementById('plusButton');
  var minusButton = document.getElementById('minusButton');
  var multipleButton = document.getElementById('multipleButton');
  var namugeButton = document.getElementById('namugeButton');
  //초기값을 0을 준다.
  var counterNumber = 0;

  //매개변수num을 counter에 값을 html에 적도록
  function counterHandler(num){
       counter.innerHTML = num;
  }
  //더하기, 빼기, 곱하기, 나머지 함수 만들기 초기값 카운트넘버에 라디오value값을 더해서 다시 카운트넘버에 담아준다 (담으면 위에서 counterHandler로 담아준다.)
  function clickPlusbtn(){
    counterNumber = counterNumber + getRadioValue();
    counterHandler(counterNumber);
  }

  function clickMinusbtn(){
    counterNumber = counterNumber - getRadioValue();
    counterHandler(counterNumber);
  }

  function clickmultiplebtn(){
    counterNumber = counterNumber * getRadioValue();
    counterHandler(counterNumber);
  }
  function clicknamugebtn(){
    counterNumber = counterNumber % getRadioValue();
    counterHandler(counterNumber);
  }

  //라디오 버튼의 선택된 값 가져오기
  function getRadioValue(){
    var radios = document.getElementsByName('increment');
    for(var i=0;i<radios.length;++i){
      var radio = radios[i];
       if(radio.checked===true){
         return parseInt(radio.value,10);
       }
    }
  }

  plusButton.addEventListener('click', clickPlusbtn);
  minusButton.addEventListener('click', clickMinusbtn);
  multipleButton.addEventListener('click', clickmultiplebtn);
  namugeButton.addEventListener('click', clicknamugebtn);

};
document.addEventListener('DOMContentLoaded',init);
