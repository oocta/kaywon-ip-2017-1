var init = function(){

//숫자 2자리로 만들기
  function addZero(num){
    if (num < 10){
      return '0' + num;
    }
    return num;
  }

  //현재시간
  var hour = document.getElementById('hour');
  var min = document.getElementById('min');
  var sec = document.getElementById('sec');

  var watch = function() {
    var newTime = new Date();

    hour.innerHTML = addZero(newTime.getHours());
    min.innerHTML = addZero(newTime.getMinutes());
    sec.innerHTML = addZero(newTime.getSeconds());

  }
  setInterval(watch, 1000);

  //초시계
  var sthour = document.getElementById('sthour');
  var stmin = document.getElementById('stmin');
  var stsec = document.getElementById('stsec');
  var sstsec = document.getElementById('sstsec');
  var startButton = document.getElementById('startButton');
  var stopButton = document.getElementById('stopButton');
  var resetButton = document.getElementById('resetButton');
  var lapButton = document.getElementById('lapButton');
  var lap = document.getElementById('lap');


  var hourNumber = 0;
  var minNumber = 0;
  var secNumber = 0;
  var ssecNumber = 0;
  var secInterval;
  var isRunning = false;


//초시계_시계부분
  function startInterval(){
    ssecNumber++;
    if (ssecNumber > 59) {
      ssecNumber = 0;
      secNumber++;
      if (secNumber >59){
        secNumber = 0;
        minNumber++;
       if (minNumber > 59) {
          minNumber = 0;
          hourNumber++;
          sthour.innerHTML = addZero(hourNumber);
      }
      stmin.innerHTML = addZero(minNumber);
      }
      stsec.innerHTML = addZero(secNumber);
    }
    sstsec.innerHTML = addZero(ssecNumber);
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

    ssecNumber = 0;
    sstsec.innerHTML = addZero(ssecNumber);
    secNumber = 0;
    stsec.innerHTML = addZero(secNumber);
    minNumber = 0;
    stmin.innerHTML = addZero(minNumber);
    hourNumber = 0;
    sthour.innerHTML = addZero(hourNumber);

    lapTimes = [];
    lap.innerHTML = '';
  }
//랩버튼 클릭 할 떄 실행되는 함수
  function lapAction(){
    if (isRunning === true){
      var time = {hour : hourNumber, min : minNumber, sec: secNumber, ssec: ssecNumber};
      var li = document.createElement('li');
        li.innerHTML = addZero(time.hour) +':'+ addZero(time.min)+':'+ addZero(time.sec)+':'+ addZero(time.ssec);
      lap.appendChild(li);

    }
  }

  startButton.addEventListener('click', startAction);
  lapButton.addEventListener('click', lapAction);
  stopButton.addEventListener('click', stopAction);
  resetButton.addEventListener('click', resetAction);

//알람시계
var alhour = document.getElementById('alhour');
var almin = document.getElementById('almin');
var timeset = document.getElementById('timeset');
var usetime = document.getElementById('usetime');

var sethour = 0;
var setmin = 0;

//기준시계 & 시간비교
var standardwatch = function() {
  var newTime = new Date();
  var h = newTime.getHours();
  var m = newTime.getMinutes();

  alhour.innerHTML = addZero(h);
  almin.innerHTML = addZero(m);

  if (h === Number(sethour) && m === Number(setmin)) {
    alert('알람시간입니다.');
    sethour = 0;
    setmin = 0;
    usetime.innerHTML = '';
    }
}

//알람시간설정
function useset(){
  sethour = prompt('몇시');
  setmin = prompt('몇분');
  usetime.innerHTML = sethour +':'+ setmin;
}

timeset.addEventListener('click', useset);

setInterval(standardwatch, 1000);

}
document.addEventListener('DOMContentLoaded', init);
