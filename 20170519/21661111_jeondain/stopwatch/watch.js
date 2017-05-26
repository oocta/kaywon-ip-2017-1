var init = function(){

  var hour = document.getElementById('hour');
  var min = document.getElementById('min');
  var sec = document.getElementById('sec');
  var startButton = document.getElementById('startButton');
  var stopButton = document.getElementById('stopButton');
  var resetButton = document.getElementById('resetButton');
  var lapButton = document.getElementById('lapButton');

  var hourNumber = 0;
  var minNumber = 0;
  var secNumber = 0;

  //이거 잘 이해가 안감
  var secInterval;
  //초시계 동작 상태ㅡ 담고 있는 변수.. 동작중이면 true, 멈춘상태면 false.
  var isRunning = false;
  var laptimes = [];

  //start 버튼 클릭 시 실행되는 setInterval 함수
  function startInterval(){
    secNumber++;//초를 담당하는 아이
    if(secNumber>59){
        secNumber=0;
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

  function startAction(){
    if(isRunning === false){
      secInterval = setInterval(startInterval,3);
      isRunning = true;//계속해서 실행 setInterval(함수, 실행주기);
    }
  }

  function stopAction(){
    clearInterval(secInterval);
    isRunning = false;

  }

  function resetAction(){
    stopAction();
    //초시계 초기화
    secNumber = 0;
    sec.innerHTML = secNumber;
    minNumber = 0;
    min.innerHTML = minNumber;
    hourNumber = 0;
    hour.innerHTML =  hourNumber;
    //랩타임초기화
    laptimes = [];
  }
  
  function lapAction(){
    var time = {hour: hourNumber, min:minNumber, sec:secNumber};
    //{hour:0 min:0 sec:0}
    laptimes.push(time);//push-배열에 원소를 넣겠다.
    console.log(laptimes);
  }

  startButton.addEventListener('click',startAction);
  stopButton.addEventListener('click',stopAction);
  resetButton.addEventListener('click',resetAction);
  lapButton.addEventListener('click',lapAction);

};
document.addEventListener('DOMContentLoaded', init);
