/*var radioButton = document.getElementsByName('increment'); 
var radioLength = radioButton.length;*/

/*
//radio 버튼의 value 값 출력
function valueCheck() {
  for(var i = 0; i < radioLength; ++i) {
    if(radioButton[i].checked) {
      console.log(radioButton[i].value);
      break;
    }
  }
}
*/
/*
var plusButton = document.getElementById('plusButton');
var minusButton = document.getElementById('minusButton');
var counter = document.getElementsByClassName('counter')[0];
*/
/*
function plusNumber() {
  var inputNum = '';
  for (var i = 0; i < radioLength; ++i) {
    if(radioButton[i].checked) {
      inputNum += radioButton[i].value;
    }
  }
  counter.innerHTML = inputNum;
  console.log(inputNum);
}


function minusNumber() {
  var inputNum = '';
  for (var i = 0; i < radioLength; ++i) {
    if(radioButton[i].checked) {
      inputNum -= radioButton[i].value;
    }
  }
  counter.innerHTML = inputNum;
  console.log(inputNum);
}
*/

/*
function plusNumber() {
  var inputNum = '';
  for (var i = 0; i < radioLength; ++i) {
    if(radioButton[i].checked) {
      inputNum += radioButton[i].value;
    }
  }
  counter.innerHTML += inputNum;
  console.log(inputNum);
}


function minusNumber() {
  var inputNum = '';
  for (var i = 0; i < radioLength; ++i) {
    if(radioButton[i].checked) {
      inputNum -= radioButton[i].value;
    }
  }
  counter.innerHTML -= inputNum;
  console.log(inputNum);
}
*/

/*radio 버튼의 value 값을 불러오는 것까지는 성공하였으나 
값을 늘려가는 걸 도저히 모르겠어서 그냥 제출합니다.
남은 시간 동안 고민해보겠습니다. 죄송합니다.*/

/*
plusButton.addEventListener('click', plusNumber);

minusButton.addEventListener('click', minusNumber);
*/

var init = function () {
    //code here.
    var counter = document.getElementById('counter');
    var plusButton = document.getElementById('plusButton');
    var minusButton = document.getElementById('minusButton');
    var counterNumber = 0;
    
    //counter를 제어하는 함수
    function counterHandler (num) {
        counter.innerHTML = num;
        //alert('counterHandler');
        
    }
    
    
    //plusButton을 클릭 했을 때 실행되는 함수
    function clickPlusButton () {
        getRadioValue();
        //counterNumber += 1;
        //getRadioValue의 return값을 10진수의 숫자타입으로 바꾼다.
        //counterNumber = counterNumber + parseInt(getRadioValue(), 10); 
        counterNumber = counterNumber + getRadioValue();
        counterHandler(counterNumber);
    }
    
    
    //minusButton을 클릭 했을 때 실행되는 함수
    function clickMinusButton () {
        //counterNumber = counterNumber - parseInt(getRadioValue(), 10); 
        counterNumber = counterNumber - getRadioValue();
        counterHandler(counterNumber);
    }
    
    
    //radio button의 value 값을 찾는 기능
    function getRadioValue () {
        var radios = document.getElementsByName('increment');
        for (var i = 0; i < radios.length; ++i) {
            var radio = radios[i];
            if(radio.checked === true) {
                return parseInt(radio.value, 10);
            }
        }
        return 0;
    }
    
    plusButton.addEventListener('click', clickPlusButton);
    minusButton.addEventListener('click', clickMinusButton);
};

//내가 작성한 HTML이 Element에 접근할 수 있을 때
document.addEventListener('DOMContentLoaded', init);
