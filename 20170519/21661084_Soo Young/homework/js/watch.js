/*content1*/
$(document).ready(function() {

  updateClock();
  setInterval('updateClock()', 250);

});

function updateClock() {

  var cur_time = new Date();
  var cur_s = cur_time.getSeconds();
  var cur_m = cur_time.getMinutes();
  var cur_h = cur_time.getHours();
  var cur_d = cur_time.getDate();
  
  var s_deg = 6*cur_s;
  var m_deg = 6*cur_m;
  var h_deg = (cur_m/60 + cur_h)*30;

  $('.the-hour').text(checkTime(cur_h));
  $('.the-minute').text(checkTime(cur_m));
  $('.the-second').text(checkTime(cur_s));
  $('.day span').text(cur_d);
 
  
  $('.second').css({ 'transform': 'rotate(' + s_deg + 'deg)' });
  $('.minute').css({ 'transform': 'rotate(' + m_deg + 'deg)' });
  $('.hour').css({ 'transform': 'rotate(' + h_deg + 'deg)' });
}

function checkTime(i) {
  //10보다 작은 숫자 앞에 0을 추가
  if (i < 10) {
    i = "0" + i;
  }

  return i;
}

/*content3*/

var init = function(){

  var hour = document.getElementById('hour');
  var min = document.getElementById('min');
  var sec = document.getElementById('sec');
  var startButton = document.getElementById('startButton');
  var lapButton = document.getElementById('lapButton');
  var stopButton = document.getElementById('stopButton');
  var resetButton = document.getElementById('resetButton');
  //lap에 대한담을 변수 생성
  var lapTimes = [];
  var lapli = document.getElementById('lap');

  var hourNumber= 0;
  var minNumber= 0;
  var secNumber = 0;
  var sectimer;
  //초시계 동작 상태를 담고 있는 변수. 동작중이면 true, 멈춘상태면 false.
  //처음은 멈춰있으므로 false로 작성.
  var isRunning = false;

  //start button
  //start 버튼 클릭시 setInterval를 실행할 함수
  function startInterval(){
    secNumber++;
    if(secNumber > 59){
      secNumber = 0;
      minNumber++;
      if(minNumber > 59){
        minNumber = 0;
        hourNumber++;
        hour.innerHTML = addZero(hourNumber);
      }
      min.innerHTML = addZero(minNumber);
    }
    sec.innerHTML = addZero(secNumber);
  }

  //start버튼 click시 실행되는 함수
  function startAction(){
    //start버튼이 실행됐을때!동작이 쌓이지 않기 위해서 작성
    if(isRunning === false){
      secInterval = setInterval(startInterval,10);
      isRunning = true;
    }
  }
  //실행
  //startAction();

  //stop버튼 click시 실행되는 함수
  function stopAction(){
    clearInterval(secInterval);
    isRunning = false;
  }

  //reset버튼 click시 실행되는 함수
  function resetAction(){
    //한번 멈추고 초기화 실행될 수 있게 stopAction를 실행.
    stopAction();
    
    hour.innerHTML = '00';
    min.innerHTML = '00';
    sec.innerHTML = '00';
    //Number를 하지 않으면 리셋은 되지만, start를 누를때 0부터 시작을 안함.
    hourNumber= 0;
    minNumber= 0;
    secNumber = 0;
    //랩 타임 초기화
    lapTimes =[]; 
    
    lapli.innerHTML = '';
  }
  
  //lapButton click시 실행되는 함수
  function lapButtonClick(){
    if(isRunning === true){
      var time = {hour: hourNumber, min : minNumber , sec: secNumber };
      
      lapTimes.push(time);
      
      var li = document.createElement('li');
      li.innerHTML = addZero(time.hour) + ':' + addZero(time.min) + ':' + addZero(time.sec);
      lapli.appendChild(li);
    }
    
  }
  
  function addZero(num){
    if(num<10){
      return '0'+ num;
    }else{
      return num;
    }
  }
  addZero();

  startButton.addEventListener('click', startAction);
  stopButton.addEventListener('click',stopAction);
  lapButton.addEventListener('click',lapButtonClick);
  resetButton.addEventListener('click',resetAction);

};


/*content4*/
(function(window, document, $) {
  $(function(){
    init();
  });

  function init() {
    var clock = new Clock();
    clock.startClock();
  }

  function Clock() {
    this.time = '';
  }
  Clock.prototype = {
    startClock: function() {
      var scope = this;
      setInterval(this.updateClock.bind(this, scope), 500);
    },
    updateClock: function(scope) {
      var strArr = scope.getTime();
      this.updateClockView(strArr);

    },
    updateClockView: function(strArr) {
      var targets = $('.clock-container>ul>li>span');
      for(var i = 0; i < 5; i++) {
        targets.eq(i).html(strArr[i]);
      }
    },
    getTime: function() {
      var today=new Date();
      var h=today.getUTCHours();
      var m=today.getUTCMinutes();
      var s=today.getUTCSeconds();

      var hoursArr = this.convertHourByTimeZone(h);

      m = this.fixLayout(m);
      s = this.fixLayout(s);

      var strArr = [];
      for(var i = 0; i < 5; i++) {
        var str = hoursArr[i] + ':' + m + ':' + s;
        strArr.push(str);
      }
      return strArr;
    },
    convertHourByTimeZone: function(h) {
      // order Los Angeles, London, Paris, Rome, Tokyo
      var arr = [-7, 1, 2, 2, 9];
      var hourArr = [];

      for(var i = 0; i < 5; i++) {
        var hour = h + arr[i];
        if(24 <= hour) {
          hour = hour - 24;
        } else if(hour < 0) {
          hour = 24 + hour;
        }

        // push
        hourArr.push(hour);

      }

      return hourArr;
    },
    fixLayout: function(i) {
      if (i<10) {
        i = "0" + i;
      }  // add zero in front of numbers < 10
      return i;
    }
  };

})(window, document, window.jQuery);

/**/

document.addEventListener('DOMContentLoaded', init);
document.addEventListener('DOMContentLoaded', updateClock);
