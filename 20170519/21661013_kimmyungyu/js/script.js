var init = function () {

  //clock

  var clockHour = document.getElementById('clock_hour');
  var clockMin = document.getElementById('clock_min');
  var clockSec = document.getElementById('clock_sec');
  var ampm = document.getElementById('ampm');
  var time;

  function clockintervalHandler(){
    time =new Date();
    var hour = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    //AM과 PM구분 & 시간 단위 24 -> 12로 변경
    if(hour > 12){
      hour = hour-12;
      ampm.innerHTML = 'PM';
    }

    clockHour.innerHTML = addZero(hour);
    clockMin.innerHTML = addZero(min);
    clockSec.innerHTML = addZero(sec);

    var dm = min * 6; //분침의 각도
    var ds = sec * 6; //초침의 각도

    /* 시침, 분침, 초침의 각도를 계산한 값으로 변경 */
    /* IE 10+, Firefox */
    document.getElementById("circle_min").style.transform = "rotate(" + dm + "deg)";
    document.getElementById("circle_sec").style.transform = "rotate(" + ds + "deg)";
    //숫자도 같이 돌아가는 현상 방지
    clockMin.style.transform = "rotate(" + -dm + "deg)";
    clockSec.style.transform = "rotate(" + -ds + "deg)";

    /* IE 9 */
    document.getElementById("circle_min").style.MsTransform = "rotate(" + dm + "deg)";
    document.getElementById("circle_sec").style.MsTransform = "rotate(" + ds + "deg)";
    //숫자도 같이 돌어가는 현상 방지
    clockMin.style.MsTransform = "rotate(" + -dm + "deg)";
    clockSec.style.MsTransform = "rotate(" + -ds + "deg)";

    /* Opera, Chrome, Safari */
    document.getElementById("circle_min").style.WebkitTransform = "rotate(" + dm + "deg)";
    document.getElementById("circle_sec").style.WebkitTransform = "rotate(" + ds + "deg)";
    //숫자도 같이 돌아가는 현상 방지
    clockMin.style.WebkitTransform = "rotate(" + -dm + "deg)";
    clockSec.style.WebkitTransform = "rotate(" + -ds + "deg)";
  }
  setInterval(clockintervalHandler,1000);

  function addZero(num){
    if(num < 10) {
      return '0' + num;
    }
    return num;
  }


  //stopwatch

  var stopHour = document.getElementById('stop_hour');
  var stopMin = document.getElementById('stop_min');
  var stopSec = document.getElementById('stop_sec');
  var hourNumber = 0;
  var minNumber = 0;
  var secNumber = 0;

  function hourHandler(){
    hourNumber = hourNumber + 1;
    stopHour.innerHTML = addZero(hourNumber);
  }

  function minHandler(){
    minNumber = minNumber+1;
    if(minNumber === 60){
      hourHandler();
      minNumber = 0;
    }
    stopMin.innerHTML = addZero(minNumber);
  }

  function secHandler(){
    secNumber = secNumber+1;
    if(secNumber === 60){
      minHandler();
      secNumber = 0;
    }
    stopSec.innerHTML = addZero(secNumber);
  }
  function stopwatchintervalHandler(){
    secHandler();
  }

  var start = document.getElementById('startButton');
  var stop = document.getElementById('stopButton');
  var lap = document.getElementById('lapButton');
  var reset = document.getElementById('resetButton');
  var lapBox = document.getElementById('lapbox');
  var li = document.createElement('li');
  var isRunning = false;
  var lapTimes = [];

  var timer = 0;
  function watchStart(){
    if(isRunning === false){
      timer = setInterval(stopwatchintervalHandler, 1000);
      isRunning = true;
    }
  }
  function watchStop(){
    clearInterval(timer);
    isRunning = false;
  }
  function watchLap(){
    //var lapTime = {stopHour : hourNumber, stopMin : minNumber, stopSec : secNumber};
    //lapTimes.push(lapTime);
    //push : 배열에 원소를 넣음
    var lapTime = addZero(hourNumber)+':'+addZero(minNumber)+':'+addZero(secNumber);
    li.innerHTML = lapTime;
    lapBox.appendChild(li);
  }
  function watchReset(){
    //초시계 중지
    clearInterval(timer);
    //초시계 초기화
    stopHour.innerHTML = '00';
    stopMin.innerHTML = '00';
    stopSec.innerHTML = '00';
    hourNumber = 0;
    minNumber = 0;
    secNumber = 0;
    isRunning = false;
    //랩타임 초기화
    lapTimes = [];
  }
  start.addEventListener('click',watchStart);
  stop.addEventListener('click',watchStop);
  lap.addEventListener('click',watchLap);
  reset.addEventListener('click',watchReset);

  //alarm

  var alarmHour = document.getElementById('alarm_hour');
  var alarmMin = document.getElementById('alarm_min');
  var set = document.getElementById('set');
  var setbox = document.getElementById('setnumber');
  var effect = document.getElementById('effect');
  var circle = document.getElementById('before');
  var alert = document.getElementById('alert');


  function alarmintervalHandler(){
    time = new Date();
    var hour2 = time.getHours();
    var min2 = time.getMinutes();
    alarmHour.innerHTML = addZero(hour2);
    alarmMin.innerHTML = addZero(min2);
  }
  setInterval(alarmintervalHandler,1000);
  function alarmSet(){
    var setHour = prompt('시간을 입력해주세요');
    var setMin = prompt('분 입력');
    if(setHour>23 || setMin>59){
      alert.innerHTML = 'range number in input';
    }
    if(typeof setHour === 'number' && typeof setMin === 'number'){
      alert.innerHTML = 'setup is complete';
    } /*<--이거 왜 안 될까요..?*/
    else{
      alert.innerHTML = 'input only number';
    }
    function please(){
      var hour2 = time.getHours();
      var min2 = time.getMinutes();

      if(setHour == hour2 && setMin == min2){
        effect.style.display = 'block';
        circle.style.display = 'none';
        alert.innerHTML = 'Alarm Message';
      }
    }
    setInterval(please,1000);
  }

  set.addEventListener('click',alarmSet);

}
document.addEventListener('DOMContentLoaded', init);
