var init = function(){
  var hour = document.getElementById('hour');
  var min = document.getElementById('min');
  var sec = document.getElementById('sec');
  var startButton = document.getElementById('startButton');
  var stopButton = document.getElementById('stopButton');
  var resetButton = document.getElementById('resetButton');

  var hourNumber = 0;
  var minNumber = 0;
  var secNumber = 0;
  var secInterval;
  //초시계 동작 상태를 담고 있는 변수. 동작이면 true, 멈춘상태면 false
  var isRunning = false;

//start 버튼 클릭시 실행되는 setInterval 함수
  function startInterval(){
    secNumber++;
    if (secNumber > 59) {
      secNumber = 0;
      minNumber++;
      if (minNumber > 59) {
        minNumber = 0;
        hourNumber++;
        hour.innerHTML = hourNumber;
      }
      min.innerHTML = minNumber;
    }
    sec.innerHTML = secNumber;
  }

//스타트버튼 클릭 할 떄 실행되는 함수
  function startAction() {
    if (isRunning === false) {
      secInterval = setInterval(startInterval, 10);
      isRunning = true;
    }
  }
//스탑버튼 클릭 할 떄 실행되는 함수
  function stopAction() {
    clearInterval(secInterval);
    isRunning = false;
  }
//리셋버튼 클릭 할 떄 실행되는 함수
  function resetAction() {
    stopAction();
    secNumber = 0;
    sec.innerHTML = secNumber;
    minNumber = 0;
    min.innerHTML = minNumber;
    hourNumber = 0;
    hour.innerHTML = hourNumber;

  }

  startButton.addEventListener('click', startAction);
  stopButton.addEventListener('click', stopAction);
  resetButton.addEventListener('click', resetAction);
}

document.addEventListener('DOMContentLoaded', init);
