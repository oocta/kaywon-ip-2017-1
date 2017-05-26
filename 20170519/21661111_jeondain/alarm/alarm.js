var alarmTime;
var curTime;
var hourNum;
var minNum;
var min;
var hour;
function GetTime() {
 var min = document.getElementById('min');
 var hour = document.getElementById('hour');
 var time;

 function intervalHandler(){
   time = new Date();
   min.innerHTML = time.getMinutes();
   hour.innerHTML = time.getHours();
 }
 intervalHandler();
 time = setInterval(intervalHandler,10);
}

document.addEventListener('DOMContentLoaded', GetTime);

function alarmSet() {
    hourNum = document.clock.hourOpt[document.clock.hourOpt.selectedIndex].value;
    minNum = document.clock.minOpt[document.clock.minOpt.selectedIndex].value;
    alarmTime = hourNum + ":" + minNum;
    if (alarmTime == time) {
      alertFunc();
    }
}
function alertFunc() {
  alert("Hello!");
}
document.addEventListener('DOMContentLoaded', alarmSet);
