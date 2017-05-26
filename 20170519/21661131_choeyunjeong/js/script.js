
var init = function(){
  //현재 시각 화면에 표시 (초시계)
  var sec = document.getElementById('sec');
  var min = document.getElementById('min');
  var hour = document.getElementById('hour');
  var month = document.getElementById('month');
  var date = document.getElementById('date');

  var time;
  function intervalHandler(){
  time = new Date();
  sec.innerHTML = time.getSeconds();
  min.innerHTML = time.getMinutes();
  hour.innerHTML = time.getHours();
  month.innerHTML = time.getMonth()+1+'월';
  date.innerHTML = time.getDate()+'일';
  }
  setInterval(intervalHandler,1000);

  //초시계

  var swhour = document.getElementById('swhour');
  var swmin = document.getElementById('swmin');
  var swsec = document.getElementById('swsec');
  var start = document.getElementById('startButton');
  var stop = document.getElementById('stopButton');
  var lap = document.getElementById('lapButton');
  var reset = document.getElementById('resetButton');

  var hourNumber = 0;
  var minNumber = 0;
  var secNumber = 0;
  var secInterval;
  //초시계 동작 상태를 담고 있는 변수. 동작중이면 true, 멈춘상태면 false
  var isRunning = false;
  var lapTimes = [];


  //start 버튼 클릭시 실행되는 setInterval 함수
  function startInterval(){
    secNumber++;
    //60일때만 작동하는 경우
    //if(secNumber === 60 )
    if(secNumber > 59){
      secNumber = 0;
      minNumber++;
      if(minNumber > 59){
        minNumber = 0;
        hourNumber++;
        swhour.innerHTML = hourNumber;
      }
      swmin.innerHTML = minNumber;
    }
    swsec.innerHTML = secNumber;
  }

  //start 버튼 누를때 실행되는 함수
  function startAction(){
    if (isRunning === false){
      secInterval = setInterval(startInterval, 10);
      isRunning = true;
    }
  }

  //stop 버튼 누를때 실행되는 함수
  function stopAction(){
    isRunning = false;
    clearInterval(secInterval);
  }

  //reset 버튼 누를때 실행되는 함수
  function resetAction(){
    //초시계 중지
    stopAction();
    //초시계 정보 초기화
    secNumber = 0;
    swsec.innerHTML = secNumber;
    minNumber = 0;
    swmin.innerHTML = minNumber;
    hourNumber = 0;
    swhour.innerHTML = hourNumber;
    //랩타임 초기화
    lapTimes = [];
  }

  function lapAction(){
    if(isRunning === true){
      var time = { hour: hourNumber, min: minNumber, sec: secNumber};
      //{hour:0, min:0, sec:10}
    };
    lapTimes.push(time);
    console.log(lapTimes);
  }

  start.addEventListener('click', startAction);
  stop.addEventListener('click', stopAction);
  lap.addEventListener('click', lapAction);
  reset.addEventListener('click', resetAction);

};


document.addEventListener('DOMContentLoaded',init);
