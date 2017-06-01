var init = function(){

function addZero(num){
  if(num < 10){
     return '0' + num;
  }
  return num;
}
function iftf(num){
  if(num >= 24){
    num = num % 24;
    return num;
  }
  return num;
}
function ifZero(num){
  if(num <= 0){
    num = 24 - num;
    return num;
  }
  return num;
}
function iftv(num){
  if(num > 12){
    num = num - 12;
    return num;
  }
  return num;
}
function ifampm(hour,eq){
  if(hour > 12){
    ampm[eq].innerHTML = 'PM';
  }
}

var hour = document.getElementsByClassName('hour');
var min = document.getElementsByClassName('min');
var sec = document.getElementsByClassName('sec');
var ampm = document.getElementsByClassName('ampm');

var timeCheck = function(){
  var nowTime = new Date();
  var nowHour = nowTime.getHours();
  var nowMin = nowTime.getMinutes();
  var nowSec = nowTime.getSeconds();

  console.log('현재 시간은',nowHour,'시',nowMin,'분',nowSec,'초');

  hour[0].innerHTML = addZero(iftv(ifZero(iftf(nowHour-7))));
  min[0].innerHTML = addZero(nowMin);
  sec[0].innerHTML = addZero(nowSec);
  ifampm(iftf(nowHour),0);
  hour[1].innerHTML = addZero(iftv(ifZero(iftf(nowHour-6))));
  min[1].innerHTML = addZero(nowMin);
  sec[1].innerHTML = addZero(nowSec);
  ifampm(ifZero(iftf(nowHour-7)),1);
  hour[2].innerHTML = addZero(iftv(iftf(nowHour+11)));
  min[2].innerHTML = addZero(nowMin);
  sec[2].innerHTML = addZero(nowSec);
  ifampm(iftf(nowHour+11),2);
}
timeCheck();
setInterval(timeCheck,1000);


}//init
document.addEventListener('DOMContentLoaded',init);
