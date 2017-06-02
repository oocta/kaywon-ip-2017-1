var alarmTime;
var curTime;
var hourNum;
var minNum;
var secNum;
var min;
var hour;
var sec;
var stop;
var isRunning = true;

var timer = 0;
function GetTime() {
     min = document.getElementById('min');
     hour = document.getElementById('hour');
     sec = document.getElementById('sec');

     function intervalHandler(){
       var time = new Date();
       min.innerHTML = time.getMinutes();
       hour.innerHTML = time.getHours();
       sec.innerHTML = time.getSeconds();
       if((time.getHours() == hourNum) && (time.getMinutes() == minNum)){
         console.log("on");
       }
     }

     intervalHandler();
     timer = setInterval(intervalHandler,10);
}

document.addEventListener('DOMContentLoaded', GetTime);

function alarmSet() {
    var alarmHour = document.getElementById('alarmHour');
    var alarmmin = document.getElementById('alarmmin');

    hourNum=alarmHour.value;
    minNum=alarmmin.value;
}

function stopalarm(){
  console.log("hello");
  clearInterval(intervalHandler);
  var isRunning = false;
}
