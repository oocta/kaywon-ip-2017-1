var init = function(){
  var hour = document.getElementById('hour');
  var min = document.getElementById('min');
  var sec = document.getElementById('sec');
  var start = document.getElementById('startButton');
  var stop = document.getElementById('stopButton');
  var reset = document.getElementById('resetButton');
  var hourNumber = 0;
  var minNumber = 0;
  var secNumber = 0;
  var time;

  console.log(hour, min, sec);

  function hourHandler(){
    hourNumber = hourNumber + 1;
    hour.innerHTML = addZero(hourNumber);
  }

  function minHandler(){
    minNumber = minNumber + 1;
    if(minNumber === 60){
      hourNumber = hourNumber + 1;
      hourHandler();
      minNumber = 0;
    }
    min.innerHTML = addZero(minNumber);
  }

  function secHandler(){
    secNumber = secNumber + 1;
    if (secNumber === 60){
      minNumber = minNumber + 1;
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
    secHandler();
  }

  var time = 0;

  start.addEventListener('click', function start(){
    time = setInterval(intervalHandler, 1000);
  })
  stop.addEventListener('click', function stop(){
    clearInterval(time);
  })
  
  reset.addEventListener('click', function reset(){
    clearInterval(time);
    var hourNumber = 0;
    var minNumber = 0;
    var secNumber = 0;
    //
    hour.innerHTML = addZero(hourNumber);
    min.innerHTML = addZero(minNumber);
    sec.innerHTML = addZero(secNumber);
  })
}

document.addEventListener('DOMContentLoaded', init);
