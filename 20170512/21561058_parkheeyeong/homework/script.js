var init = function(){
  var hour = document.getElementById('hour');
  var min = document.getElementById('min');
  var sec = document.getElementById('sec');
  var startbtn = document.getElementById('startButton');
  var stopbtn = document.getElementById('stopButton');
  var resetbtn = document.getElementById('resetButton');
  var hourNumber = 0;
  var minNumber = 0;
  var secNumber = 0;

  function hourHandler(){
    hourNumber = hourNumber +1;
    hour.innerHTML = addZero(hourNumber);
  }
  function minHandler(){
    minNumber = minNumber +1;
    if (minNumber ===60){
      hourHandler();
      minNumber = 0;
    }
    min.innerHTML = addZero(minNumber);
  }
  function secHandler(){
    secNumber = secNumber +1;
    if (secNumber ===60){
      minHandler();
      secNumber = 0;
    }
    sec.innerHTML = addZero(secNumber);
  }
  function addZero(num){
    if(num<10){
      return '0'+num;
        }
      return num;
    }
  function intervalHandler(){secHandler();}
  //start를 제어하는 변수

  function startTimer(){var start = setInterval(intervalHandler,1000);};
    //setInterval을 멈추는 게 어려움 start는 지역변수기 때문에(?)ㅠㅠ
  startbtn.addEventListener('click',startTimer);
  stopbtn.addEventListener('click',clearInterval(start));


};
document.addEventListener('DOMContentLoaded',init);
