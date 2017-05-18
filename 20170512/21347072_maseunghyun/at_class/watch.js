//문서 전체 선택
var init = function(){
  var $hour = document.getElementById('hour');
  var $min = document.getElementById('min');
  var $sec = document.getElementById('sec');
  var hourNumber = 0;
  var minNumber = 0;
  var secNumber = 0;

  function hourHandler(){
    $hour.innerHTML = hourNumber;
    console.log('sec');
    hourNumber = hourNumber + 1;
    if(hourNumber === 60){
      hourNumber = 0;
    }
    $hour.innerHTML = addZero(hourNumber);
  }
  function minHandler(){
    $min.innerHTML = minNumber;
    console.log('sec');
    minNumber = minNumber + 1;
    if(minNumber === 60){
      hourHandler();
      minNumber = 0;
    }
    $min.innerHTML = addZero(minNumber);
  }
  function secHandler(){
    $sec.innerHTML = secNumber;
    console.log('sec');
    secNumber = secNumber + 1;
    if(secNumber === 60){
      minHandler();
      secNumber = 0;
    }
    $sec.innerHTML = addZero(secNumber);
  }
  function addZero(num){
    if(num < 10){
       return '0' + num;
    }
    return num;
  }
  function intervalHandler(){
    secHandler();
  }
  setInterval(intervalHandler,10);
}

//문서 실행
document.addEventListener('DOMContentLoaded',init);
