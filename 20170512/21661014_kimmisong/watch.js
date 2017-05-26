var init = function(){
  var hour = document.getElementById('hour');
  var min = document.getElementById('min');
  var sec = document.getElementById('sec');
  var hourNumber = 0;
  var minNumber = 0;
  var secNumber = 0;

  function hourHandler(){
    hour.innerHTML =  addZero(hourNumber);
    hourNumber = hourNumber + 1;
  }

  function minHandler(){
    minNumber = minNumber + 1;
    if (minNumber === 60){
      hourHandler()
      minNumber = 0;
    }
    min.innerHTML = addZero(minNumber);
  }

  function secHandler(){
    secNumber = secNumber + 1;
    if (secNumber === 60) {
      minHandler();
      secNumber = 0;
    }
    sec.innerHTML = addZero(secNumber);
  }

  function addZero(num){
    if (num < 10){
      return '0' + num;
    }
    return num;
  }

  function intervalHandler(){
    secHandler()
  }

setInterval(intervalHandler, 1000);

};

document.addEventListener('DOMContentLoaded', init);
