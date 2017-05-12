var init = function(){
  var counter = document.getElementById('counter');
  var plusButton = document.getElementById('plusButton');
  var minusButton = document.getElementById('minusButton');
  var multipleButton = document.getElementById('multipleButton');
  var namugeButton = document.getElementById('namugeButton');
  var counterNumber = 0;

  function counterHandler(num){
       counter.innerHTML = num;
  }

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
