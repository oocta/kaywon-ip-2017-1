var init = function(){
  var hour = document.getElementById('hour');
  var min = document.getElementById('min');
  var sec = document.getElementById('sec');
  var hourNumber = 0;
  var minNumber = 0;
  var secNumber = 0;

  function hourHandler(){
    hourNumber = hourNumber + 1;
    hour.innerHTML = addZero(hourNumber);
  }

  function minHandler(){
    minNumber = minNumber+1;
    if(minNumber === 60){
      hourHandler();
      minNumber = 0;
    }
    min.innerHTML = addZero(minNumber);
  }

  function secHandler(){
    secNumber = secNumber+1;
    if(secNumber === 60){
      minHandler();
      secNumber = 0;
    }
    sec.innerHTML = addZero(secNumber);
  }

  function addZero(num){
    if(num < 10) {
      return '0' + num;
    }
    return num;
  }

  function intervalHandler(){
    secHandler();
  }

  var start = document.getElementById('startButton');
  var stop = document.getElementById('stopButton');
  var reset = document.getElementById('resetButton');
  var isRunning = false;

  var timer = 0;
  function watchStart(){
    if(isRunning === false){
      timer = setInterval(intervalHandler, 1000);
      isRunning = true;
    }
  }
  function watchStop(){
    clearInterval(timer);
    isRunning = false;
  }
  function watchReset(){
    clearInterval(timer);
    hour.innerHTML = '00';
    min.innerHTML = '00';
    sec.innerHTML = '00';
    hourNumber = 0;
    minNumber = 0;
    secNumber = 0;
    isRunning = false;
  }
  start.addEventListener('click',watchStart);
  stop.addEventListener('click',watchStop);
  reset.addEventListener('click',watchReset);
}
document.addEventListener('DOMContentLoaded', init);
