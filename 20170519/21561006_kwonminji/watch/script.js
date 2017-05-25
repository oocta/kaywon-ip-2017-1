var init = function() {
  var hour = document.getElementById('hour');
  var min = document.getElementById('min');
  var sec = document.getElementById('sec');
  var time;

  function intervalHandler() {
    time = new Date();
    sec.innerHTML = time.getSeconds();
    min.innerHTML = time.getMinutes();
    hour.innerHTML = time.getHours();
  }
  setInterval(intervalHandler, 1000);
}

document.addEventListener('DOMContentLoaded', init)



// stopwatch

var init = function () {

  var hour = document.getElementById('s_hour');
  var min = document.getElementById('s_min');
  var sec = document.getElementById('s_sec');
  var lap = document.getElementById('lapTimes');
  var startButton = document.getElementById('startButton');
  var lapButton = document.getElementById('lapButton');
  var stopButton = document.getElementById('stopButton');
  var resetButton = document.getElementById('resetButton');

  var hourNumber = 0;
  var minNumber = 0;
  var secNumber = 0;
  var secInterval;
  // 초시계 동작 상태를 담고 있는 변수. 동작중이면 true, 멈춘상태면 false.
  var isRunning = false;
  var lapTimes = [];


  //start 버튼 클릭시 실행되는 setInterval 함수
  function startInterval() {
    secNumber++;
    if(secNumber > 59) {
      secNumber = 0;
      minNumber++;
      if(minNumber > 59) {
        minNumber = 0;
        hourNumber++;
        hour.innerHTML = addZero(hourNumber);
      }
      min.innerHTML = addZero(minNumber);
    }
    sec.innerHTML = addZero(secNumber);
  }

  // 스타트 버튼을 클릭할 때 실행되는 함수
  function startAction() {
    if(isRunning === false) {
      secInterval = setInterval(startInterval, 3);
      isRunning = true;
    }
  }

  // 스탑 버튼 클릭할 때 실행되는 함수
  function stopAction() {
    clearInterval(secInterval);
    isRunning = false;
  }

  function lapAction() {
    if (isRunning === true) {
    // var time = { hour: hourNumber, min: minNumber, sec: secNumber };
    // //{hour:0, min:0, sec:0};
    // lapTimes.push(time);
    lap.innerHTML += addZero(hourNumber) + ':' + addZero(minNumber) + ':' + addZero(secNumber)
  }
}

  // 리셋 버튼 클릭할 때 실행되는 함수
  function resetAction() {
    stopAction();
    secNumber = 0;
    sec.innerHTML = addZero(secNumber);
    minNumber = 0;
    min.innerHTML = addZero(minNumber);
    hourNumber = 0;
    hour.innerHTML = addZero(hourNumber);
    lapTimes = []; //완료가 되서 리셋을 누르는 순간 초기화
  }

  function addZero(number) {
  if(number < 10){
    return '0' + number;
  }
  return number;
  }

  startButton.addEventListener('click', startAction);
  stopButton.addEventListener('click', stopAction);
  lapButton.addEventListener('click', lapAction);
  resetButton.addEventListener('click', resetAction);

};

document.addEventListener('DOMContentLoaded', init);
