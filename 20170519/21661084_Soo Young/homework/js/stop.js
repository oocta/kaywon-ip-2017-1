
var init = function(){

  var hour = document.getElementById('hour');
  var min = document.getElementById('min');
  var sec = document.getElementById('sec');
  var startButton = document.getElementById('startButton');
  var lapButton = document.getElementById('lapButton');
  var stopButton = document.getElementById('stopButton');
  var resetButton = document.getElementById('resetButton');
   var lap = document.getElementById('laplist');
  //lap에 대한담을 변수 생성
  var lapTimes = [];

  var hourNumber= 0;
  var minNumber= 0;
  var secNumber = 0;
  var sectimer;
  //초시계 동작 상태를 담고 있는 변수. 동작중이면 true, 멈춘상태면 false.
  //처음은 멈춰있으므로 false로 작성.
  var isRunning = false;

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
        hour.innerHTML = hourNumber;
      }
      min.innerHTML = minNumber;
    }
    sec.innerHTML = secNumber;
  }

  //start버튼 click시 실행되는 함수
  function startAction(){
    //start버튼이 실행됐을때!동작이 쌓이지 않기 위해서 작성
    if(isRunning === false){
      secInterval = setInterval(startInterval,10);
      isRunning = true;
    }
  }
  //실행
  //startAction();

  //stop버튼 click시 실행되는 함수
  function stopAction(){
    clearInterval(secInterval);
    isRunning = false;
  }

  //reset버튼 click시 실행되는 함수
  function resetAction(){
    //한번 멈추고 초기화 실행될 수 있게 stopAction를 실행.
    stopAction();
    //화면뿐만 아니라 변수도 변경해야 reset이 됨.
    secNumber =  0;
    sec.innerHTML = secNumber;
    minNumber = 0;
    min.innerHTML = minNumber;
    hourNumber = 0;
    hour.innerHTML = hourNumber;
    //랩 타임 초기화
    lapTimes =[];
  }
  //lapButton click시 실행되는 함수
  function lapButton(){
    var list = document.createElement('li');
    var plus = document.createTextNode(
    addZeros(hourNumber) + ':' + addZeros(minNumber) + ':' + addZeros(secNumber));
    if(isRunning === true){
      list.appendChild(plus);
      lap.appendChild(list);
    }
    
  }

  startButton.addEventListener('click', startAction);
  stopButton.addEventListener('click',stopAction);
  lapButton.addEventListener('click',lapButton);
  resetButton.addEventListener('click',resetAction);

};


document.addEventListener('DOMContentLoaded', init);
