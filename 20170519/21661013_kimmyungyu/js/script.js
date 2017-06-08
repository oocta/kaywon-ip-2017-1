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
    //숫자도 같이 돌아가는 현상 방지
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


  //worldclock


  function hourSet(num){
    if(num < 0){
      num = num+24;
      return num;
    }
    else if(num > 24){
      num = num%24;
      return num;
    }
    return num;
  }

  var vancouver = document.getElementById('vancouver_hour');
  var newyork = document.getElementById('newyork_hour');
  var saopaulo = document.getElementById('saopaulo_hour');
  var london = document.getElementById('london_hour');
  var paris = document.getElementById('paris_hour');
  var moscow = document.getElementById('moscow_hour');
  var beijing = document.getElementById('beijing_hour');
  var tokyo = document.getElementById('tokyo_hour');
  var wellington = document.getElementById('wellington_hour');
  var worldmin = document.getElementsByClassName('world_min');
  function worldclock(){
    time =new Date();
    hour = time.getHours();
    vancouver.innerHTML = addZero(hourSet(hour-16));
    newyork.innerHTML = addZero(hourSet(hour-13));
    saopaulo.innerHTML = addZero(hourSet(hour-12));
    london.innerHTML = addZero(hourSet(hour-8));
    paris.innerHTML = addZero(hourSet(hour-7));
    moscow.innerHTML = addZero(hourSet(hour-6));
    beijing.innerHTML = addZero(hourSet(hour-1));
    tokyo.innerHTML = addZero(hour);
    wellington.innerHTML = addZero(hourSet(hour+3));
    for(var i = 0; i < worldmin.length; i++){
      worldmin[i].innerHTML = addZero(time.getMinutes());
    }
  }
  setInterval(worldclock,1000);


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
  var article = document.getElementById('stopwatch');
  var div = document.getElementById('div');
  var isRunning = false;
  var li;

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
    var lapTime = addZero(hourNumber)+':'+addZero(minNumber)+':'+addZero(secNumber);
    var text = document.createTextNode(lapTime);
    li = document.createElement('li');
    li.appendChild(text);
    lapBox.appendChild(li);
    //lap버튼 클릭 시 시계와 버튼 위로 이동
    div.style.marginTop = "-305px";
    div.style.transition = "all 1s";
    div.style.WebkitTransition = "all 1s";
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
    lapBox.innerHTML = '';
    //reset버튼 클릭 시 시계와 버튼 위치 초기화
    div.style.marginTop = "-205px";
    div.style.transition = "all 1s";
    div.style.WebkitTransition = "all 1s";
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
  var alarmSound = document.getElementById('alarmsound');

  var setHour;
  var setMin;
  var hour2;
  var min2;
  var isRunning2 = false;
  var animation;
  function alarmSet(){
    setHour = parseInt(prompt('시 입력'), 10);
    setMin = parseInt(prompt('분 입력'), 10);
    if(typeof setHour === 'number' && typeof setMin === 'number'){
      if(setHour>23 || setMin>59){
        alert.innerHTML = 'Range number in input';
      }//아무 것도 입력하지 않았을 때 & 문자가 입력되었을 때
      else if(isNaN(setHour) == true || isNaN(setMin) == true){
        alert.innerHTML = 'Input only number';
        alarmHour.innerHTML = '00';
        alarmMin.innerHTML= '00';
      }else{
        alarmHour.innerHTML = addZero(setHour);
        alarmMin.innerHTML= addZero(setMin);
        alert.innerHTML = 'Setup is complete';
        animation = setInterval(please,1000);
      }
    }
  }
  function please(){
    time = new Date();
    hour2 = time.getHours();
    min2 = time.getMinutes();
    //설정한 시간과 현재 시간이 같을 때
    if(setHour === hour2 && setMin === min2){
      effect.style.display = 'block';
      circle.style.display = 'none';
      alert.innerHTML = 'Alarm Message';
      alarmSound.play();
    }
  }
  set.addEventListener('click',function(){
    if(isRunning2 === false){
      alarmSet();
      isRunning2 = true;
    }
    //알람 다시 설정 시
    else if(isRunning2 === true){
      effect.style.display = 'none';
      circle.style.display = 'block';
      alert.innerHTML = 'Please set alarm';
      clearInterval(animation);
      alarmSound.load();
      alarmSet();
    }
  });
}
document.addEventListener('DOMContentLoaded', init);
