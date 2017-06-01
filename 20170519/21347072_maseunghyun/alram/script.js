var init = function(){

var alramBtn = document.getElementById('alrambutton');
var $notice = document.getElementById('notice');
var $hour = document.getElementById('hour');
var $min = document.getElementById('min');

var promFunc = function(){
  var pHour = prompt('시를 입력해주세요 (24시계)');
  var pMin = prompt('분을 입력해주세요');
  $notice.innerHTML = '알람이 설정되었습니다';
  $hour.innerHTML = pHour;
  $min.innerHTML = pMin;

  var audio = new Audio('alram.mp3');

  var checkInterval = function(){
    var nowTime = new Date();
    var nowHour = nowTime.getHours();
    var nowMin = nowTime.getMinutes();
    if(nowHour == pHour && nowMin == pMin){
      audio.play();
      $notice.innerHTML = '알람시간입니다!';
    }
  }
  setInterval(checkInterval,900);
}

alramBtn.addEventListener('click',promFunc);


} //init
document.addEventListener('DOMContentLoaded',init);
