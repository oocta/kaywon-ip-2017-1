
var init = function(){
  //현재 시각 화면에 표시 (시계)
  var sec = document.getElementById('sec');
  var min = document.getElementById('min');
  var hour = document.getElementById('hour');
  var month = document.getElementById('month');
  var date = document.getElementById('date');
 
  var time;
  function intervalHandler(){
  time = new Date();
  sec.innerHTML = addZero(time.getSeconds());
  min.innerHTML = addZero(time.getMinutes());
  hour.innerHTML = addZero(time.getHours());
  month.innerHTML = time.getMonth()+1+'월';
  date.innerHTML = time.getDate()+'일';
  }
  setInterval(intervalHandler,1000);
    
  // 알람 시계 영역
  // 현재 시각
  var time2;
  var hour2 = document.getElementById('hour2');
  var min2 = document.getElementById('min2');
 
  function intervalHandler2(){
  time2 = new Date();    
  hour2.innerHTML = addZero(time2.getHours()); 
  min2.innerHTML = addZero(time2.getMinutes());
  }
  setInterval(intervalHandler2,1000);  
    

  // 알람
  // 알람 상태를 담고 있는 변수. 동작 중 true, 정지 false.
  var setAlarm;

  var alarmStart = document.getElementById('alarm_Start');
  var alarmClear = document.getElementById('alarm_Clear');
  function AlarmSet(){
      setAlarm = true;
      alert('알람이 설정되었습니다');
  }
  function AlarmClear(){
      setAlarm = false;
      alert('알람이 꺼집니다');
      
  }
  // 안되는 부분 
  function InputNumber(){
      if(setHour > 24){
          alert('24이하로만 입력해주세요');
      }else if(setMin > 59){
          alert('60이하로만 입력해주세요');
      }
  }
    /*
  function setting(){
      // setHour와 hour2 그리고 setMin과 min2가 같을 때
      if(setHour == hour2 && setMin == min2){
          alert('알람');
      }
      
  }*/
    
  // 초시계 영역  
  var hour3 = document.getElementById('hour3');
  var min3 = document.getElementById('min3');
  var sec3 = document.getElementById('sec3');
  var lap3 = document.getElementById('lap3')
  var lap = document.getElementById('lap');
  var startButton = document.getElementById('start3');
  var lapButton = document.getElementById('lap');
  var stopButton = document.getElementById('stop3');
  var resetButton = document.getElementById('reset');
  //lap에 대한담을 변수 생성
  var lapTimes = [];
 
  var hourNumber= 0;
  var minNumber= 0;
  var secNumber = 0;
  var sectimer;
  //초시계 동작 상태를 담고 있는 변수. 동작 중 true, 정지 false.
  var isRunning = false;

 
  // 자릿 수를 맞추기 위한 함수 작성
  function addZero (i) {
    if (i < 10) {
        return '0' + i;
    }else {
        return i;
    }
  }

  //start 버튼 클릭 시 setInterval를 실행할 함수
  function startInterval(){
    secNumber++;
    if(secNumber > 59){
      secNumber = 0;
      minNumber++;
      if(minNumber > 59){
        minNumber = 0;
        hourNumber++;
        hour3.innerHTML =  addZero(hourNumber);
      }
      min3.innerHTML = addZero(minNumber);
    }
    sec3.innerHTML = addZero(secNumber);
  }
 
  //start버튼 click시 실행되는 함수
  function startAction(){
    //start버튼이 실행됐을 때, 동작이 쌓이지 않는다.
    if(isRunning === false){
      secInterval = setInterval(startInterval,10);
      isRunning = true;
    }
  }
 
  //stop버튼 click시 실행되는 함수
  function stopAction(){
    clearInterval(secInterval);
    isRunning = false;
  }
 
  //reset버튼 click시 실행되는 함수
  function resetAction(){
    //한번 멈추고 초기화 실행될 수 있게 stopAction를 실행.
    stopAction();
    //화면뿐만 아니라 변수도 변경해야 reset이 됨.
    secNumber =  0;
    sec3.innerHTML = addZero(secNumber);
    minNumber = 0;
    min3.innerHTML = addZero(minNumber);
    hourNumber = 0;
    hour3.innerHTML = addZero(hourNumber);
    //랩 타임 초기화
    lapTimes =[];
 
  }
  //lapButton click시 실행되는 함수
  function lapButtonClick(){
 
    if(isRunning === true){
      //{hour:0, min:0,sec:10};
      var time = { hour: hourNumber, min : minNumber, sec : secNumber };
      //push : 배열에 원소를 넣겠다
      lapTimes.push(time);
      //lap.innerHTML = lap.innerHTML + '<p>' + time.hour + ':' + time.min + ':' + time.sec + '</p>';
      var li = document.createElement('li');
      li.innerHTML = addZero(time.hour) + ':' + addZero(time.min )+ ':' + addZero(time.sec);
      lap3.appendChild(li);
 
    }
    
}
    
    

 
  start3.addEventListener('click', startAction);
  stop3.addEventListener('click',stopAction);
  lap.addEventListener('click',lapButtonClick);
  reset.addEventListener('click',resetAction);
  alarmClear.addEventListener('click',AlarmClear);
  alarmStart.addEventListener('click',AlarmSet);

};
 
 
document.addEventListener('DOMContentLoaded',init);
