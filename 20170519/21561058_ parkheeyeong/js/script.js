var init = function () {
  // 시계
  var timesec = document.getElementById('timesec');
  var timemin = document.getElementById('timemin');
  var timehour = document.getElementById('timehour');
  var clocktime;

  function addZero(num){
    if(num<10){
      return '0'+num;
        }
      return num;
    }
  function intervalHandeler(){
  clocktime = new Date();
  secIs=clocktime.getSeconds();
  minIs=clocktime.getMinutes();
  hourIs=clocktime.getHours();

  timesec.innerHTML = addZero(secIs)
  timemin.innerHTML = addZero(minIs)
  timehour.innerHTML = addZero(hourIs)
  }
  setInterval(intervalHandeler,1000);

  // 타이머
  var hour = document.getElementById('hour');
  var min = document.getElementById('min');
  var sec = document.getElementById('sec');
  var startbtn = document.getElementById('startButton');
  var stopbtn = document.getElementById('stopButton');
  var resetbtn = document.getElementById('resetButton');
  var lapbtn = document.getElementById('lapButton');
  var lapedtimes = document.getElementById('lapedTimes');
  //카운트 값 선언
  var hourNumber = 0;
  var minNumber = 0;
  var secNumber = 0;
  var secInterval;
  //초시계 동작 상태를 담고 있는 변수, 동작중이면 true, 멈춘상태면 false
  var isRunning = false;
  var lapTimes = [];

  //스타트 버튼 클릭시 실행되는 setInterval함수
  function startInterval(){
    secNumber++;
    if(secNumber>59){
      secNumber = 0;
      minNumber++;
        if(minNumber>59){
          minNumber=0;
          hourNumber++;
          hour.innerHTML = addZero(hourNumber);
        }
      min.innerHTML = addZero(minNumber);
    }
    sec.innerHTML = addZero(secNumber);
  }

  //스타트버튼을 클릭 시 실행되는 함수
  function startAction(){
    if(isRunning ===false){
      secInterval = setInterval(startInterval,10);
      isRunning =true;
    }
  }
  //스탑버튼을 클릭 시 실행되는 함수
  function stopAction(){
    clearInterval(secInterval);
    isRunning =false;
  }
  //리셋버튼을 클릭 시 실행되는 함수
  function resetAction(){
    stopAction();
    hourNumber = 0;
    hour.innerHTML = addZero(hourNumber);
    minNumber = 0;
    min.innerHTML = addZero(minNumber);
    secNumber = 0;
    sec.innerHTML = addZero(secNumber);
    lapTimes=[];
  }
  function lapAction(){
      var lapplus = document.createElement('p');
      var time = document.createTextNode(
        addZero(hourNumber) + ':' +
        addZero(minNumber) + ':'+
        addZero(secNumber)
      );
      // var time = { hour:addZero(hourNumber),min:addZero(minNumber),sec:addZero(secNumber)};
    if(isRunning ===true){
      lapplus.appendChild(time);
      lapedtimes.push(lapplus);
    }

  }

  lapButton.addEventListener('click',lapAction);
  startbtn.addEventListener('click',startAction);
  stopbtn.addEventListener('click',stopAction);
  resetbtn.addEventListener('click',resetAction);

  };

document.addEventListener('DOMContentLoaded', init);
