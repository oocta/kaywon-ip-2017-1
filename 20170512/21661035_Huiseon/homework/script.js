
var init = function () {
  var hour =document.getElementById('hour');
  var min =document.getElementById('min');
  var sec =document.getElementById('sec');

  var hourNumber = 0;
  var minNumber = 0;
  var secNumber = 0;

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
  setInterval(intervalHandler, 1000);
//실행

//리셋
function resetBT() {
  resetBT = document.getElementById('resetButton');
  sec.innerHTML = 0;
  min.innerHTML = 0;
  hour.innerHTML = 0;
  resetButton();
}

};
document.addEventListener('DOMContentLoaded',init);


/*--------------------------------------------------리셋*/
