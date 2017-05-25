var init = function () {
  var hour = document.getElementById('hour');
  var min = document.getElementById('min');
  var sec = document.getElementById('sec');

  var start = document.getElementById('startButton');
  var stop = document.getElementById('stopButton');
  var reset = document.getElementById('resetButton');
  var lap = document.getElementById('lapButton');
  
      
  var hourNumber = 0;
  var minNumber = 0;
  var secNumber = 0;
  var secInterval;
  //초시계 동작상태를 담고잇는 변수. 동작중이면 true, 멈추면false
  var isRunnung = false;
  var lapTime = [];
  //start 버튼 클릭시 실행되는 setUnterval 함수
  function stratInterval() {
    secNumber++;
    if (secNumber > 59) {  //secNumber가 59를 넘어가는 숫자면 다 동작
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

  function startAction() {
    if (isRunnung === false) { //초시계가 동작하고 있지 않을떄만
      secInterval = setInterval(stratInterval, 3);
      isRunnung = true;
    }
    
  }
  

  function stopAction() {
    clearInterval(secInterval);
    isRunnung = false;
  }

  function resetAction() {
    stopAction();
    secNumber = 0;
    sec.innerHTML = '0'+secNumber;
    minNumber = 0;
    min.innerHTML = '0'+minNumber;
    hourNumber = 0;
    hour.innerHTML = '0'+hourNumber;
    lapTime = [];
  }
  //랩버튼 글릭
  function lapAction(){
   if (isRunnung === true){
    var time = { hour: hourNumber, min:minNumber, sec:secNumber};
    lapTime.push(time);
     console.log(lapTime);
    }
  }
  
  startButton.addEventListener('click', startAction);
  stopButton.addEventListener('click', stopAction);
  resetButton.addEventListener('click', resetAction);
  lapButton.addEventListener('click', lapAction);
  
  
};

document.addEventListener('DOMContentLoaded', init);
