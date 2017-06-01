var initL = function () {
  var hourL =document.getElementById('hourL');
  var minL =document.getElementById('minL');
  var secL =document.getElementById('secL');
//시시 분분 초초 제어
  var time;

  function intervalHandler() {
    time = new Date();
    hourL.innerHTML = time.getHours();
    minL.innerHTML = time.getMinutes();
    secL.innerHTML = time.getSeconds();
  }
  intervalHandler();
  setInterval(intervalHandler,1000);
};
document.addEventListener('DOMContentLoaded',initL);

//로컬
