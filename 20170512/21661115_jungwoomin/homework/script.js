var init = function () {
  //1. 각 엘리먼트 지정
  var hour = document.getElementById('hour');
  var min = document.getElementById('min');
  var sec = document.getElementById('sec');
  var hourNum = 0;
  var minNum = 0;
  var secNum = 0;
  var interval
  var startButton = document.getElementById('startButton');
  var stopButton = document.getElementById('stopButton');
  var resetButton = document.getElementById('resetButton');
  var startControl = 0;
  
  //매개변수 num이 10보다 작으면 0Num으로, 아니면 num으로 표시
  function addZero (num) {
    if (num < 10) {
        return '0' + num;
    } else {
        return num;
    }
  }
  
  //hour에 addZero 함수를 포함한 hourNum을 작성한다.
  function hourHandler () {
    hour.innerHTML = addZero(hourNum);
  }
  
  //만약 minNum이 60이 되면 minNum에 0을 넣고, hourNum에 1씩 더해준다.
  function minHandler () {
    if (minNum === 60) {
            hourNum = hourNum + 1;
            hourHandler();
            minNum = 0;
        }
    min.innerHTML = addZero(minNum);
  }
  
  //만약 secNum이 60이 되면 secNum에 0을 넣고, minNum에 1씩 더해준다.
  function secHandler () {
    secNum = secNum + 1;
    if (secNum === 60) {
            minNum = minNum + 1;
            minHandler();
            secNum = 0;
        }
    sec.innerHTML = addZero(secNum);
  }
  
  //startControl이 0일 때, 1초 간격으로 secHandler를 실행하고 startControl에 1을 할당한다.
  function intervalHandler () {
    if (startControl == 0) {
      interval = setInterval(secHandler, 1000);
      startControl = 1;
    }
  }
  
  //secHanler를 실행하고 있는 interval이라는 변수를 제어하고 startControl에 다시 0을 할당한다.
  function stopHandler () {
    clearInterval(interval);
    startControl = 0;
  }
  
  //secHanler를 실행하고 있는 interval이라는 변수를 제어하고 startControl에 0을 할당하고 hourNum, minNum, secNum에 0을 할당함과 동시에 각 부분에 0을 할당한 변수를 넣어준다.
  function resetHandler () {
    clearInterval(interval);
    startControl = 0;
    hourNum = 0;
    minNum = 0;
    secNum = 0;
    hour.innerHTML = addZero(hourNum);
    min.innerHTML = addZero(minNum);
    sec.innerHTML = addZero(secNum);
  }
  
  //함수 실행
  hourHandler();
  minHandler();
  
  //startButton을 클릭하면 intervalHandler 실행
  startButton.addEventListener('click', intervalHandler);
  //stopButton을 클릭하면 stopHandler 실행
  stopButton.addEventListener('click', stopHandler);
  //resetButton을 클릭하면 resetHandler 실행
  resetButton.addEventListener('click', resetHandler);
  
}

document.addEventListener('DOMContentLoaded', init);
