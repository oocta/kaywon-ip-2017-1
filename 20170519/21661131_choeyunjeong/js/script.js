
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
  //month.innerHTML = time.getMonth()+1+'월';
  //date.innerHTML = time.getDate()+'일';
  }
  setInterval(intervalHandler,1000);

  /****************초시계****************/

  var swhour = document.getElementById('swhour');
  var swmin = document.getElementById('swmin');
  var swsec = document.getElementById('swsec');
  var start = document.getElementById('startButton');
  var stop = document.getElementById('stopButton');
  var lap = document.getElementById('lapButton');
  var reset = document.getElementById('resetButton');
  var swbox = document.getElementById('swbox');

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
    var time = { hour: '00', min: '00', sec: '00'};
    if(isRunning === true){
      // time = { hour: hourNumber, min: minNumber, sec: secNumber};
      time.hour = hourNumber;
      time.min = minNumber;
      time.sec = secNumber;
      //{hour:0, min:0, sec:10}
    };
    lapTimes.push(time);
    swbox.innerHTML = time.hour + ':' + time.min + ':' + time.sec;
  }

  start.addEventListener('click', startAction);
  stop.addEventListener('click', stopAction);
  lap.addEventListener('click', lapAction);
  reset.addEventListener('click', resetAction);

  /****************알람****************/


  var ahour = document.getElementById('ahour');
  var amin = document.getElementById('amin');
  var click = document.getElementById('click');

  var hourprom = 0;
  var minprom = 0;
  //알람 설정 여부.
  //a아니면 b일 경우 boolean 값으로 조절하면 된다!
  var isAlarmSet = false;

  function hourstartClick(){
    hourprom = prompt('시간설정');
    if(hourprom !== ''){
      isAlarmSet = true;
      ahour.innerHTML = hourprom;
    }
  }

  function minstartClick(){
    minprom = prompt('시간설정');
    if (minprom !== '') {
      isAlarmSet = true;
      amin.innerHTML = minprom;
    }
  }

  function checkClick(){
    time = new Date();
    var ahourr = time.getHours();
    var aminn = time.getMinutes();

    if(Number(hourprom) === ahourr && Number(minprom) === aminn && isAlarmSet){
      alert('알람!');
      hourprom = '00';
      ahour.innerHTML = hourprom;
      minprom = '00';
      amin.innerHTML = minprom;
    }
  }

  setInterval(checkClick, 1000);

  click.addEventListener('click', hourstartClick);
  click2.addEventListener('click', minstartClick);


};


document.addEventListener('DOMContentLoaded',init);
