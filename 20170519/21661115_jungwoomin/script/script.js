var init = function () {
  //realTime
  
  var realHour = document.getElementById('realHour');
  var realMin = document.getElementById('realMin');
  var realSec = document.getElementById('realSec');
  var realYear = document.getElementById('realYear');
  var realMonth = document.getElementById('realMonth');
  var realDate = document.getElementById('realDate');
  var realDay = document.getElementById('realDay');
  var realTime;
  var realTimeHour;
  var realTimeMin;
  var realTimeSec;
  var realTimeYear;
  var realTimeMonth;
  var realTimeDate;
  var realTimeDay;
  
  function addZero (num) {
    if (num < 10) {
      return '0' + num;
    } else {
      return num;
    }
  }
  
  function whatDay (num) {
    var dayArray = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    for (var i = 0; i < num; ++i) {
      if (i = num) {
        return dayArray[i];
      }
    }
  }
  
  function realTimeHandler () {
    realTime = new Date();
    realTimeHour = realTime.getHours();
    realTimeMin = realTime.getMinutes();
    realTimeSec = realTime.getSeconds();
    realTimeYear = realTime.getFullYear();
    realTimeMonth = realTime.getMonth();
    realTimeDate = realTime.getDate();
    realTimeDay = realTime.getDay();
    
    realHour.innerHTML = addZero(realTimeHour);
    realMin.innerHTML = addZero(realTimeMin);
    realSec.innerHTML = addZero(realTimeSec);
    realYear.innerHTML = realTimeYear;
    realMonth.innerHTML = addZero(realTimeMonth);
    realDate.innerHTML = addZero(realTimeDate);
    realDay.innerHTML = whatDay(realTimeDay);
  };
  
  function realTimeInterval () {
    setInterval(realTimeHandler, 1000);
  }
  
  realTimeInterval();
  
  
  /*-------------------------------------------------*/
  
  
  //stopWatch
  
  var stopHour = document.getElementById('stopHour');
  var stopMin = document.getElementById('stopMin');
  var stopSec = document.getElementById('stopSec');
  var stopNum = document.getElementById('stopNum');
  var stopWatchHour = 0;
  var stopWatchMin = 0;
  var stopWatchSec = 0;
  var stopWatchNum = 0;
  var interval;
  var state = false;
  
  function stopWatchHandler() {
    stopWatchNum = stopWatchNum + 1;
    if (stopWatchNum > 99) {
      stopWatchNum = 0;
      stopWatchSec = stopWatchSec + 1;
      if (stopWatchSec > 59) {
        stopWatchSec = 0;
        stopWatchMin = stopWatchMin + 1;
        if(stopWatchMin > 59) {
          stopWatchMin = 0;
          stopWatchHour = stopWatchHour + 1;
          stopHour.innerHTML = addZero(stopWatchHour); 
        }
        stopMin.innerHTML = addZero(stopWatchMin);
      }
      stopSec.innerHTML = addZero(stopWatchSec);
    }
    stopNum.innerHTML = addZero(stopWatchNum);
  }
  
  function stopWatchInterval() {
    interval = setInterval(stopWatchHandler, 10);
  }
  
  var startButton = document.getElementById('startButton');
  var stopButton = document.getElementById('stopButton');
  var resetButton = document.getElementById('resetButton');
  var lapButton = document.getElementById('lapButton');
  var stateDebug = document.getElementById('state')
  
  
  startButton.addEventListener('click', function(){
    if(state === false){
      stopWatchInterval();
      state = true;
      stateDebug.innerHTML = 'STOPWATCH를 작동합니다.';
    } else {
      stateDebug.innerHTML = 'STOPWATCH가 이미 작동중입니다.';
    }
  })
  
  stopButton.addEventListener('click', function(){
    if(state === true){
      clearInterval(interval);
      state = false;
      stateDebug.innerHTML = 'STOPWATCH를 정지합니다.';
    } else {
      stateDebug.innerHTML = 'STOPWATCH가 이미 멈춰있습니다.';
    }
  })
  
  resetButton.addEventListener('click', function(){
    stopWatchHour = 0;
    stopWatchMin = 0;
    stopWatchSec = 0;
    stopWatchNum = 0;
    stopHour.innerHTML = addZero(stopWatchHour);
    stopMin.innerHTML = addZero(stopWatchMin);
    stopSec.innerHTML = addZero(stopWatchSec);
    stopNum.innerHTML = addZero(stopWatchNum);
    lapHour.innerHTML = addZero(0);
    lapMin.innerHTML = addZero(0);
    lapSec.innerHTML = addZero(0);
    lapNum.innerHTML = addZero(0);
    clearInterval(interval);
    state = false;
    stateDebug.innerHTML = 'STOPWATCH가 초기화 되었습니다.';
  })
  
  var lapHour = document.getElementById('lapHour');
  var lapMin = document.getElementById('lapMin');
  var lapSec = document.getElementById('lapSec');
  var lapNum = document.getElementById('lapNum');
  
  lapButton.addEventListener('click', function(){
      lapHour.innerHTML = addZero(stopWatchHour);
      lapMin.innerHTML = addZero(stopWatchMin);
      lapSec.innerHTML = addZero(stopWatchSec);
      lapNum.innerHTML = addZero(stopWatchNum);
      stateDebug.innerHTML = 'LAPTIME이 기록되었습니다.'
  })
  
  /*-------------------------------------------------*/
  
  //Timer
  
  
  
  
  /*------------------------------------------------*/
  
  var articleRealTime = document.getElementById('realTime');
  var articleStopWatch = document.getElementById('stopWatch');
  var articleTimer = document.getElementById('timer');
  var realTimeButton = document.getElementById('realTimeButton');
  var stopWatchButton = document.getElementById('stopWatchButton');
  var timerButton = document.getElementById('timerButton');
  
  realTimeButton.addEventListener('click', function(){
    articleRealTime.style.display = "block";
    articleStopWatch.style.display = "none";
    articleTimer.style.display = "none";
  })
  
  stopWatchButton.addEventListener('click', function(){
    articleRealTime.style.display = "none";
    articleStopWatch.style.display = "block";
    articleTimer.style.display = "none";
  })
  
  timerButton.addEventListener('click', function(){
    articleRealTime.style.display = "none";
    articleStopWatch.style.display = "none";
    articleTimer.style.display = "block";
  })
  
  
  
  
  
};

document.addEventListener('DOMContentLoaded', init);
