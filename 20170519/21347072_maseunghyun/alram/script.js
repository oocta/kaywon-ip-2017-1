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
    // FIXME === 를 습관적으로 사용하도록 합시다.
    if(nowHour == pHour && nowMin == pMin){
      audio.play();
      $notice.innerHTML = '알람시간입니다!';
    }
  }
  setInterval(checkInterval,900);
}

alramBtn.addEventListener('click',promFunc);

// TODO 알람을 해제하는 기능도 포함되면 좋을것 같네요. 현재 코드에서는 setInterval을 초기화하는 부분이 없어 위험해보입니다.

} //init
document.addEventListener('DOMContentLoaded',init);
