
var init = function(){

  var hour = document.getElementById('hour');
  var min = document.getElementById('min');
  var sec = document.getElementById('sec');
  var hourNumber= 0;
  var minNumber= 0;
  var secNumber = 0;
  var timer = 0;

  //hour를 control하는 함수
  function hourHandler(){
    hourNumber = hourNumber + 1;
    hour.innerHTML = hourNumber;
  }
  //min를 control하는 함수
  function minHandler(){
    minNumber = minNumber + 1;
    if(minNumber === 60){
      hourHandler();
      minNumber = 0;
    }
    min.innerHTML = addZero(minNumber);
  }
  //sec를 control하는 함수
  function secHandler(){
    secNumber = secNumber + 1;

    //secNumber가 60이 되면 minNumber가 1씩 추가된다. 1씩 추가 될 떄 secNumber가 0으로 돌아가 다시 시작!
    if(secNumber === 60){
      minHandler();
      secNumber = 0;
    }
    sec.innerHTML = addZero(secNumber);
  }

  function addZero(num){
    if(num<10){
      return '0'+ num;
    }else{
      return num;
    }
  }
  addZero();

  function intervalHandler(){
    secHandler();
  }


  var start = document.getElementById('startButton');
  var stop = document.getElementById('stopButton');
  var reset = document.getElementById('resetButton');

  function startbt(){
    //start를 누르면 타이머가 시작된다.
    timer = setInterval(intervalHandler,1000);
  }
  function stopbt(time){
      clearInterval(timer);
  }

  function resetbt(){
    clearInterval(timer);
    hour.innerHTML = '00';
    min.innerHTML = '00';
    sec.innerHTML = '00';
    //Number를 하지 않으면 리셋은 되지만, start를 누를때 0부터 시작을 안함.
    hourNumber= 0;
    minNumber= 0;
    secNumber = 0;
  }
  start.addEventListener('click',startbt);
  stop.addEventListener('click', stopbt);
  reset.addEventListener('click',resetbt);
}

document.addEventListener('DOMContentLoaded', init);

//타이머 기록은 어떻게 해야할지 모르겠습니다...stopbt안에 innerHTML이 필요하고 주어진 값을 따로 줘야할 것 같습니다..
