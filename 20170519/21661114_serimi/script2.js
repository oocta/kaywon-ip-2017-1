var init = function () {
  var hour =document.getElementById('hour');
  var min =document.getElementById('min');
  var sec =document.getElementById('sec');
  var time;
  var lapbutton =document.getElementById('lapbutto');
  function intervalHandler() {
    time = new Date();
    hour.innerHTML = time.getHours();
    min.innerHTML = time.getMinutes();
    sec.innerHTML = time.getSeconds();
  }
  setInterval(intervalHandler,1000);
};

document.addEventListener('DOMContentLoaded',init);
