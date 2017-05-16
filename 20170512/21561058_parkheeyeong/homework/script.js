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

 function timer(){
   var start = setInterval(intervalHandler,1000);
   function stop(){clearInterval(start)}
   stopbtn.addEventListener('click',stop);
 }

  startbtn.addEventListener('click',timer);



};
document.addEventListener('DOMContentLoaded',init);
