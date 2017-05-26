
var init = function(){
  //현재 시각 화면에 표시 (초시계)
  var sec = document.getElementById('sec');
  var min = document.getElementById('min');
  var hour = document.getElementById('hour');
  var month = document.getElementById('month');
  var date = document.getElementById('date');

  var time;
  function intervalHandler(){
  time = new Date();
  sec.innerHTML = time.getSeconds();
  min.innerHTML = time.getMinutes();
  hour.innerHTML = time.getHours();
  month.innerHTML = time.getMonth()+1+'월';
  date.innerHTML = time.getDate()+'일';
  }
  setInterval(intervalHandler,1000);
  
};


document.addEventListener('DOMContentLoaded',init);
