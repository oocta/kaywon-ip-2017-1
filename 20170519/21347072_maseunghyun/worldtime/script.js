// var init = function(){
//
// var $korea = document.getElementById('korea');
// var $berlin = document.getElementById('berlin');
// var $newyork = document.getElementById('newyork');
//
// function addZero(num){
//   if(num < 10){
//      return '0' + num;
//   }
//   return num;
// }
//
// var khour = $korea.getElementsByClassName('hour');
// var kmin = $korea.getElementsByClassName('min');
// var ksec = $korea.getElementsByClassName('sec');
// var kapm = $korea.getElementsByClassName('apm');
// var bhour = $berlin.getElementsByClassName('hour');
// var bmin = $berlin.getElementsByClassName('min');
// var bsec = $berlin.getElementsByClassName('sec');
// var bapm = $berlin.getElementsByClassName('apm');
// var nhour = $newyork.getElementsByClassName('hour');
// var nmin = $newyork.getElementsByClassName('min');
// var nsec = $newyork.getElementsByClassName('sec');
// var napm = $newyork.getElementsByClassName('apm');
//
//
// var timeInterval = function(){
//   var nowTime = new Date();
//   var nowDay = nowTime.getDay();
//   var nowHour = nowTime.getHours();
//   var nowMin = nowTime.getMinutes();
//   var nowSec = nowTime.getSeconds();
//   var bHour = nowHour - new Date(7*60*60*1000);
//   var nHour = nowHour + new Date(11*60*60*1000);
// }
//
//
// var timeInterval = function(){
//   var nowTime = new Date();
//   var nowDay = nowTime.getDay();
//   var nowHour = nowTime.getHours();
//   var nowMin = nowTime.getMinutes();
//   var nowSec = nowTime.getSeconds();
//   var nowBhour = nowHour - 7;
//   var nowNhour = nowHour + 11;
//
//   if(nowHour < 12){
//     kapm[0].innerHTML = 'AM';
//   }else{
//     kapm[0].innerHTML = 'PM';
//     nowHour = nowHour - 12;
//   }
//   khour[0].innerHTML = addZero(nowHour);
//   kmin[0].innerHTML = addZero(nowMin);
//   ksec[0].innerHTML = addZero(nowSec);
//
//
//   if(nowBhour < 12){
//     bapm[0].innerHTML = 'AM';
//   }else{
//     bapm[0].innerHTML = 'PM';
//     nowBhour = nowBhour - 12;
//   }
//   bhour[0].innerHTML = addZero(nowBhour);
//   bmin[0].innerHTML = addZero(nowMin);
//   bsec[0].innerHTML = addZero(nowSec);
//
//
//   if(nowNhour < 12){
//     napm[0].innerHTML = 'AM';
//   }else{
//     napm[0].innerHTML = 'PM';
//     nowNhour = nowNhour - 12;
//   };
//   nhour[0].innerHTML = addZero(nowNhour);
//   nmin[0].innerHTML = addZero(nowMin);
//   nsec[0].innerHTML = addZero(nowSec);
// }
//
// timeInterval();
//
// setInterval(timeInterval,1000);
// }// init
// document.addEventListener('DOMContentLoaded',init);



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
  var nowHour = nowTime.getHours(); //여기다가더해
  var nowMin = nowTime.getMinutes();
  var nowSec = nowTime.getSeconds();

  console.log('현재 시간은',nowHour,'시',nowMin,'분',nowSec,'초');

  hour[0].innerHTML = addZero(iftv(iftf(nowHour))); //더하지마한국시간
  min[0].innerHTML = addZero(nowMin);
  sec[0].innerHTML = addZero(nowSec);
  ifampm(iftf(nowHour),0);
  hour[1].innerHTML = addZero(iftv(ifZero(iftf(nowHour-7)))) ; //베를린시간
  min[1].innerHTML = addZero(nowMin);
  sec[1].innerHTML = addZero(nowSec);
  ifampm(ifZero(iftf(nowHour-7)),1);
  hour[2].innerHTML = addZero(iftv(iftf(nowHour+11))); //뉴욕시간
  min[2].innerHTML = addZero(nowMin);
  sec[2].innerHTML = addZero(nowSec);
  ifampm(iftf(nowHour+11),2);
}
timeCheck();
setInterval(timeCheck,1000);


}//init
document.addEventListener('DOMContentLoaded',init);
