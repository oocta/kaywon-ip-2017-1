var init = function(){
  //가져오기
  var hour = document.getElementById('hour');
  var min = document.getElementById('min');
  var sec = document.getElementById('sec');
  var startbtn = document.getElementById('startButton');
  var stopbtn = document.getElementById('stopButton');
  var resetbtn = document.getElementById('resetButton');
  //카운트 값 선언
  var hourNumber = 0;
  var minNumber = 0;
  var secNumber = 0;
  //1씩 더해주기 + 60초되면 0만들어주고 상위함수실행
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
  //00으로 표시할 수 있도록
  function addZero(num){
    if(num<10){
      return '0'+num;
        }
      return num;
    }
  function intervalHandler(){secHandler();}
  //초기화 해주기
  function resetTimer(){
    secNumber = 0;
    minNumber = 0;
    hourNumber = 0;
    sec.innerHTML = secNumber+'0';
    min.innerHTML = minNumber+'0';
    hour.innerHTML = hourNumber+'0';
  }
 //버튼제어하기
  function timer(){
    var start = setInterval(intervalHandler,1000);
    function stop(){clearInterval(start)}
    function reset(){
      clearInterval(start);
      resetTimer();
    }
    //setInterval을 멈출 수 있도록
    stopbtn.addEventListener('click',stop);
    resetbtn.addEventListener('click',reset);
  }
  startbtn.addEventListener('click',timer);
}
document.addEventListener('DOMContentLoaded',init);
