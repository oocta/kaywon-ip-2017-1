var init = function () {
  var hour =document.getElementById('hour');
  var min =document.getElementById('min');
  var sec =document.getElementById('sec');

  var hourNumber = 0;
  var minNumber = 0;
  var secNumber = 0;

  //버튼 추가
  var startBT = document.getElementById('startButton');
  var stopBT= document.getElementById('stopButton');
  var resetBT = document.getElementById('resetButton');

  function hourHandler() {
    hourNumber = hourNumber + 1;
    hour.innerHTML = addZero(hourNumber);
  }
  function minHandler() {
    minNumber = minNumber + 1;
    if (minNumber === 60 ) {
      hourHandler();
      minNumber = 0;
    }
    min.innerHTML = addZero(minNumber);
  }
  function secHandler() {
    secNumber = secNumber + 1;
    if (secNumber === 60 ) {
      minHandler();
      secNumber = 0;
    }
    sec.innerHTML = addZero(secNumber);
  }

// 숫자두개 00
function addZero(num) {
  if (num < 10) {
    return '0'+ num;
  }
  return num;
}
//초
  function intervalHandler() {
    secHandler();
}
var time = 0;

startBT.addEventListener('click', function startBT(){
  time = setInterval(intervalHandler, 1000);
})
stopBT.addEventListener('click', function stopBT(){
  clearInterval(time);
})

resetBT.addEventListener('click', function resetBT(){
  clearInterval(time);
  var hourNumber = 0;
  var minNumber = 0;
  var secNumber = 0;
//왜... 0이... 안될까요...
})
//실행

};
document.addEventListener('DOMContentLoaded',init);

