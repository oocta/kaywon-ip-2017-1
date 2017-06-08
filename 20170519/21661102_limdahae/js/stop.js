//스톱워치

var init = function(){

  var hour = document.getElementById('hour');
  var min = document.getElementById('min');
  var sec = document.getElementById('sec');
  var lap = document.getElementById('laptime');
  var startButton = document.getElementById('startButton');
  var lapButton = document.getElementById('lapButton');
  var stopButton = document.getElementById('stopButton');
  var resetButton = document.getElementById('resetButton');
  var hourNumber= 0;
  var minNumber= 0;
  var secNumber = 0;
  var sectimer;

  var isRunning = false;
    
  //0추가
  function addZero(num){
      if(num < 10){
          return'0' + num;
      }else{
          return num;
      }}

  //start button
  //start 버튼 클릭시 setInterval를 실행할 함수
  function startInterval(){
    secNumber++;
    if(secNumber > 59){
      secNumber = 0;
      minNumber++;
      if(minNumber > 59){
        minNumber = 0;
        hourNumber++;
        hour.innerHTML = addZero(hourNumber);
      }
      min.innerHTML = addZero(minNumber);
    }
    sec.innerHTML = addZero(secNumber);
  }

  //start버튼 click시 실행되는 함수
  function startAction(){
    //start버튼이 실행됐을때 동작이 쌓이지 않기 위해서 작성
    if(isRunning === false){
      secInterval = setInterval(startInterval,10);
      isRunning = true;
    }
  }
    
  //stop버튼 click시 실행되는 함수
  function stopAction(){
    clearInterval(secInterval);
    isRunning = false;
  }

  //reset버튼 click시 실행되는 함수
  function resetAction(){
    //한번 멈추고 초기화 실행될 수 있게 stopAction를 실행.
    stopAction();
    
    secNumber =  0;
    sec.innerHTML = addZero(secNumber);
    minNumber = 0;
    min.innerHTML = addZero(minNumber);
    hourNumber = 0;
    hour.innerHTML = addZero(hourNumber);
    lap.innerHTML = '';
  }
  //lapButton click시 실행되는 함수
  function lapAction(){
    if(isRunning === true){
      var laptimes = addZero(hourNumber) + ':' + addZero(minNumber) + ':' + addZero(secNumber);
        var number = document.createTextNode(laptimes);
        var li = document.createElement('li');
        li.appendChild(number);
        lap.appendChild(li);
    }
  }

  startButton.addEventListener('click', startAction);
  stopButton.addEventListener('click',stopAction);
  lapButton.addEventListener('click',lapAction);
  resetButton.addEventListener('click',resetAction);

};

document.addEventListener('DOMContentLoaded', init);

