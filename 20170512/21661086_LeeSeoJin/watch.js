
// stop 상태로 실행
window.onload = function(){
    StopHandler();
}
var init = function(){
  var hour = document.getElementById('hour');
  var min = document.getElementById('min');
  var sec = document.getElementById('sec');
  var startButton = document.getElementById('startButton');
  var stopButton = document.getElementById('stopButton');
  var resetButton = document.getElementById('resetButton');
  var hourNumber =0;
  var minNumber =0;
  var secNumber =0;

  function hourHandler(){
    hourNumber = hourNumber + 1;
    if(hourNumber === 60){
      hourNumber = 0;
    }
    hour.innerHTML = addZero(hourNumber);
  }
  function minHandler(){
    minNumber = minNumber + 1;
    if(minNumber === 60){
      hourHandler();
      minNumber = 0;
    }
    min.innerHTML = addZero(minNumber);
  }
  function secHandler(){
    secNumber = secNumber + 1;
    if(secNumber === 60){
      minHandler();
      secNumber = 0;
    }
   sec.innerHTML = addZero(secNumber);
  }

  function addZero(num){
    if (num < 10){
      return '0'+ num;
    }
    return num;
 }

  // secHandler를 1초마다 실행한다.
  function StartHandler(){
    time = setInterval(secHandler, 1000);
  }
  // stop 시켜주는 함수
  function StopHandler() {
    clearInterval(time);
}
// 00 상태로 초기화 시킨다.
  function resetHandler() {
    hourNumber =0;
    minNumber =0;
    secNumber =0;
    hour.innerHTML = "00";
    min.innerHTML = "00";
    sec.innerHTML = "00";

  }

startButton.addEventListener('click',StartHandler);
stopButton.addEventListener('click', StopHandler);
resetButton.addEventListener('click',resetHandler);


};

document.addEventListener('DOMContentLoaded',init);
