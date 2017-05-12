
var init = function(){

  var hour = document.getElementById('hour');
  var min = document.getElementById('min');
  var sec = document.getElementById('sec');
  var hourNumber= 0;
  var minNumber= 0;
  var secNumber = 0;

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

  setInterval(intervalHandler,10);

};

document.addEventListener('DOMContentLoaded', init);
