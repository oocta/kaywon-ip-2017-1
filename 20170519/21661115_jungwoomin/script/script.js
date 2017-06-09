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
  var apm = document.getElementById('apm')
  
  
  function apmControll (num) {
    if (num > 11) {
      apm.innerHTML = 'PM';
      return addZero(num - 12);
    } else {
      return addZero(num);
    }
  }
  
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
    realTimeMonth = realTime.getMonth() + 1;
    realTimeDate = realTime.getDate();
    realTimeDay = realTime.getDay();
    
    realHour.innerHTML = apmControll(realTimeHour);
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
  
  var lapNum = 0;
  
  resetButton.addEventListener('click', function(){
    stopWatchHour = 0;
    stopWatchMin = 0;
    stopWatchSec = 0;
    stopWatchNum = 0;
    stopHour.innerHTML = addZero(stopWatchHour);
    stopMin.innerHTML = addZero(stopWatchMin);
    stopSec.innerHTML = addZero(stopWatchSec);
    stopNum.innerHTML = addZero(stopWatchNum);
    document.getElementById('lapTime').innerHTML = '';
    lapNum = 0;
    clearInterval(interval);
    state = false;
    stateDebug.innerHTML = 'STOPWATCH가 초기화 되었습니다.';
  })
  
  var lapHour = document.getElementById('lapHour');
  var lapMin = document.getElementById('lapMin');
  var lapSec = document.getElementById('lapSec');
  var lapNum = document.getElementById('lapNum');
  
  lapButton.addEventListener('click', function(){
    if(state === true) {
      var lapTimes = document.createElement('li');
      lapNum = lapNum + 1;
      lapTimes.innerHTML = lapNum + '      ' + addZero(stopWatchHour) + ':' + addZero(stopWatchMin) + ':' + addZero(stopWatchSec) + ':' + addZero(stopWatchNum);
      document.getElementById('lapTime').appendChild(lapTimes);
      stateDebug.innerHTML = 'LAPTIME이 기록되었습니다.';
    } else if (state === false) {
      stateDebug.innerHTML = 'STOPWATCH가 실행 중이 아닙니다.';
    }
  })
  
  
  /*-------------------------------------------------*/
  
  //Timer
  
  var hourNow = document.getElementById('hourNow');
  var minNow = document.getElementById('minNow');
  
  function timeNowHandler() {
    var timeHourNow = realTime.getHours();
    var timeMinNow = realTime.getMinutes();
    hourNow.innerHTML = addZero(timeHourNow);
    minNow.innerHTML = addZero(timeMinNow);
  }
  
  function timeNowInterval() {
    setInterval(timeNowHandler, 1000);
  }
  
  timeNowInterval();
  
  var timerHour = document.getElementById('timerHour');
  var timerMin = document.getElementById('timerMin');
  
  var timerHourSel;
  for(i = 0; i < timerHour.length; i++){
    if(timerHour[i].selected == true) {
      timerHourSel = timerHour.options[i].value;
      break;
    }
  }
  var timerMinSel;
  for(o = 0; o < timerMin.length; o++){
    if(timerMin[o].selected == true) {
      timerMinSel = timerMin.options[o].value;
      break;
    }
  }
  
  function alarmHandler() {
    if(timerHourSel == timeHourNow && timerMinSel == timeMinNow) {
      alert('설정된 시간입니다.');
    } 
  }
  var alarmIn;
  function alarmInterval() {
    alert('알람이 설정되었습니다.');
    alarmIn = setInterval(alarmHandler, 1000);
  }
  
  function clearAlarm() {
    alert('알람이 해제되었습니다.');
    clearInterval(alarmIn);
  }
  
  var setAlarm = document.getElementById('setAlarm');
  var resetAlarm = document.getElementById('resetAlarm');
  setAlarm.addEventListener('click', alarmInterval);  
  resetAlarm.addEventListener('click', clearAlarm);
  
  /*------------------------------------------------*/
  
  
  
  
  
  
};

      

document.addEventListener('DOMContentLoaded', init);
