var radioButton = document.getElementsByName('increment'); 
var radioLength = radioButton.length;

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

var plusButton = document.getElementById('plusButton');
var minusButton = document.getElementById('minusButton');
var counter = document.getElementsByClassName('counter')[0];

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


/*radio 버튼의 value 값을 불러오는 것까지는 성공하였으나 
값을 늘려가는 걸 도저히 모르겠어서 그냥 제출합니다.
남은 시간 동안 고민해보겠습니다. 죄송합니다.*/

plusButton.addEventListener('click', plusNumber);

minusButton.addEventListener('click', minusNumber);
