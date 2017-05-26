var init = function () {
  var hour = document.getElementById('hour');
  var min = document.getElementById('min');
  var sec = document.getElementById('sec');
  var hourNumber = 0;
  var minNumber = 0;
  var secNumber = 0;
  var start = document.getElementById('startButton');
  var stop = document.getElementById('stopButton');
  var reset = document.getElementById('resetButton');
  
  function hourHandler() {
    hour.innerHTML = addZero(hourNumber);
  }
  
  function minHandler() {
    min.innerHTML = minNumber + 1;
    if (minNumber === 60) {
      hourNumber = hourNumber + 1;
      hourHandler();
      minNumber = 0;
    }
    min.innerHTML = addZero(minNumber);
  }
  
  function secHandler() {
    secNumber = secNumber + 1;
    if (secNumber === 60) {
      minNumber = minNumber + 1;
      minHandler();
      secNumber = 0;
    }
    sec.innerHTML = addZero(secNumber);
  }
  
  function addZero(num){
    if (num < 10){
      return '0'+ num;
    }  
    return num;
  }
  
  function intervalhandler() {
    secHandler();
  }
  
  var interval
  
  start.addEventListener('click', startHandler); //start클릭했을때
  function startHandler() {
    interval = setInterval(intervalhandler, 1000); 
  }
  
  stop.addEventListener('click', stopHandler); //stop클릭햇을때
  function stopHandler(){
    clearInterval(interval);  //중단
  }
  
  reset.addEventListener('click', resetHandler); //reset클릭했을때
  function resetHandler(){
    secNumber = 0; //초를 0으로
    minNumber = 0; //분도 0으로
    hourNumber = 0; //시간도 0으로
    sec.innerHTML = addZero(secNumber);  //0한것을 다시 넣어준다.
    min.innerHTML = addZero(minNumber);
    hour.innerHTML = addZero(hourNumber);
    clearInterval(interval); //중단 (중단안하면 초기화후 다시 초올라감ㅇㅅㅇ)
  }
  
};

document.addEventListener('DOMContentLoaded', init);
