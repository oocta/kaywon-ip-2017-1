//10보다 작을때 앞에 0을 붙여주는 함수
function addZeros(num){
  if (num < 10){
    return '0'+ num;
  }
  return num;
}
//현재 시간 함수
var init1 = function(){

  var sec1 = document.getElementById('sec1');
  var min1 = document.getElementById('min1');
  var hour1 = document.getElementById('hour1');
  var amPm = document.getElementById('amPm'); // 초기값 AM
  var time;

  function intervalHandler(){
    time = new Date();
    sec1.innerHTML = addZeros(time.getSeconds(),2);
    min1.innerHTML = addZeros(time.getMinutes(),2);
    hour1.innerHTML = addZeros(time.getHours(),2);

    // 시간이 12보다 클 때 PM으로 세팅, 12 이상일때 12를 빼줌
    if(hour1 >= 12,2){
      amPm.innerHTML = 'PM';
      hour1.innerHTML = addZeros(time.getHours() - 12,2);
    }
    else {
      amPm.innerHTML = 'AM';
    }
  }
  intervalHandler();
};
setInterval("init1()",1000);
document.addEventListener('DOMContentLoaded',init1);


var init2 = function(){

  var hour2 = document.getElementById('hour2');
  var min2 = document.getElementById('min2');
  var sec2 = document.getElementById('sec2');
  var hourNumber = 0;
  var minNumber = 0;
  var secNumber = 0;
  var secInterval;
  //초시계 동작 상태를 담고있는 변수. 동작중이면 true 멈춘상태면 false
  var isRunning = false;

  var startbtn = document.getElementById('startButton');
  var stopbtn = document.getElementById('stopButton');
  var resetbtn = document.getElementById('resetButton');
  var lapbtn = document.getElementById('lapButton');
  var lapul = document.getElementById('laplist');


//start버튼 클릭시 실행되는 setInterval 함수
function startInterval(){
  secNumber++;
  if(secNumber > 59){
    secNumber = 0;
    minNumber++;
    if (minNumber > 59){
      minNumber = 0;
      hourNumber++;
      hour2.innerHTML = addZeros(hourNumber);
    }
    min2.innerHTML = addZeros(minNumber);
  }
  sec2.innerHTML = addZeros(secNumber);
}
//스타트 버튼을 누를때 실행되는 함수
  function startAction(){
    if(isRunning === false){
      secInterval = setInterval(startInterval, 20);
      isRunning = true;
    }
  }
//스탑 버튼을 누를 때 실행되는 함수
  function stopAction(){
    clearInterval(secInterval);
    isRunning = false;
  }
//리셋 버튼을 누를 때 실행되는 함수
  function resetAction(){
    secNumber = 0;
    sec2.innerHTML = secNumber + '0';
    minNumber = 0;
    min2.innerHTML = minNumber + '0';
    hourNumber = 0;
    hour2.innerHTML = hourNumber + '0';
  }
//랩 버튼을 누를 때 실행되는 함수
function lapAction(){
  var lapli = document.createElement('li');
  var lapText = document.createTextNode(
    addZeros(hourNumber) + ':' +
    addZeros(minNumber) + ':' +
    addZeros(secNumber)
  );
  if(isRunning === true){
    lapli.appendChild(lapText);
    lapul.appendChild(lapli);
  }
}
startbtn.addEventListener('click', startAction);
stopbtn.addEventListener('click', stopAction);
resetbtn.addEventListener('click', resetAction);
lapbtn.addEventListener('click', lapAction)

};
document.addEventListener('DOMContentLoaded',init2);
