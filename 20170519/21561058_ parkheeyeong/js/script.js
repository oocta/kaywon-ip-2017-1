var init = function () {
  // 시계
  var timesec = document.getElementById('timesec');
  var timemin = document.getElementById('timemin');
  var timehour = document.getElementById('timehour');
  var clocktime;

  function intervalHandeler(){
  clocktime = new Date();
  timesec.innerHTML = clocktime.getSeconds();
  timemin.innerHTML = clocktime.getMinutes();
  timehour.innerHTML = clocktime.getHours();
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
          hour.innerHTML = hourNumber;
        }
      min.innerHTML = minNumber;
    }
    sec.innerHTML = secNumber;
  }

  //스타트버튼을 클릭 시 실행되는 함수
  function startAction(){
    if(isRunning ===false){
      secInterval = setInterval(startInterval,1000);
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
    hour.innerHTML = hourNumber;
    minNumber = 0;
    min.innerHTML = minNumber;
    secNumber = 0;
    sec.innerHTML = secNumber;
    lapTimes=[];
  }
  function lapAction(){
    if(isRunning ===true){
      var time = { hour:hourNumber,min:minNumber, sec:secNumber};
      lapTimes.push(time);
      console.log(lapTimes);
    }

  }

  lapButton.addEventListener('click',lapAction);
  startbtn.addEventListener('click',startAction);
  stopbtn.addEventListener('click',stopAction);
  resetbtn.addEventListener('click',resetAction);

  };

document.addEventListener('DOMContentLoaded', init);
