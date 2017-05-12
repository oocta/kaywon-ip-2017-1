var init = function(){

var bt01 = document.getElementById('plusButton')
var bt02 =document.getElementById('minusButton')
var counter= document.getElementById('counter');

var clicks = 0;

function counterHandler(number){
    counter.innerHTML = number;
}

function clickPlusBt(){
  clicks = clicks + getRadioValue();
}
function clickMinusBt(){
  clicks = clicks - getRadioValue();
}

function getRadioValue(){
  var radios=
  document.getElementsByName('increment');
  for(var i = 0, i<radios.length;++i){
    var radio = radios[i];
    if(radio.checkd === true){
      return parseInt(radio.value, 10);
    }
  }
}
plusButton.addEventListener('click', clickPlusBt);
minusButton.addEventListener('click', clickMinusBt);
};
document.addEventListener('DOMContentLoaded', init);
