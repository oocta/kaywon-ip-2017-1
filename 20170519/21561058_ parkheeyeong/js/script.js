var init = function () {
  // 시계
  var timesec = document.getElementById('timesec');
  var timemin = document.getElementById('timemin');
  var timehour = document.getElementById('timehour');
  var ampm = document.getElementById('ampm');
  var clocktime;
  var calendar;
  //알람
  //카운트 값 선언
  var alarmedhour = 0;
  var alarmedmin = 0;
  var sethourIs = 0;
  var setminIs = 0;

  // //날짜
  // var year = document.getElementById('year');
  // var month = document.getElementById('month');
  // var day = document.getElementById('day');
  // var date = document.getElementById('date');
  //
  // var monthIs = 0;
  // var dayIs = 0;
  // var dateIs = 0;

  //알람상태, 시계상태를 정하기

  function addZero(num){
    if(num<10){
      return '0'+num;
        }
      return num;
    }

  var year = document.getElementById('year');
  var month = document.getElementById('month');
  var day = document.getElementById('day');
  var date = document.getElementById('date');
  var monthIs = 0;
  var dayIs = 0;
  var dateIs = 0;

  function  getDate(){
    calendar = new Date();
    yearIs = calendar.getFullYear();
    monthIs = calendar.getMonth();//월의 값
    dateIs = calendar.getDate();//일의 값
    dayIs = calendar.getDay();//요일의 값( 일요일이 0임)
    year.innerHTML= yearIs;
    monthIs = monthIs+1;//월은 0부터 시작
    month.innerHTML = addZero(monthIs);
    date.innerHTML = addZero(dateIs);
    var daywhat='a'
    if(dayIs===0){daywhat='일'}
    else if(dayIs===1){daywhat='월'}
    else if(dayIs===2){daywhat='화'}
    else if(dayIs===3){daywhat='수'}
    else if(dayIs===4){daywhat='목'}
    else if(dayIs===4){daywhat='금'}
    if(dayIs===0){daywhat='토'}
    day.innerHTML = daywhat;
  }


  function intervalHandeler(){
  clocktime = new Date();
  secIs=addZero(clocktime.getSeconds());
  minIs=addZero(clocktime.getMinutes());
  hourIs=clocktime.getHours();

  if(hourIs>12){
    timehour.innerHTML =addZero(hourIs-12);
    ampm.innerHTML=' PM'}
  else{ampm.innerHTML=' AM'
    timehour.innerHTML =addZero(hourIs);}

  timesec.innerHTML = secIs;
  timemin.innerHTML = minIs;
    var alarmNow = false;
  //알람  html
    if(sethourIs===hourIs && setminIs===minIs){
      alarmNow = true;
    }
    if(alarmNow===true){
      alarmtxt.innerHTML='이 되었습니다!';
    }else {
      alarmtxt.innerHTML='에 알람이 울립니다';
    }
  }

  setInterval(intervalHandeler,1000);
  getDate();

  // 타이머
  var hour = document.getElementById('hour');
  var min = document.getElementById('min');
  var sec = document.getElementById('sec');
  var startbtn = document.getElementById('startButton');
  var stopbtn = document.getElementById('stopButton');
  var resetbtn = document.getElementById('resetButton');
  var lapbtn = document.getElementById('lapButton');
  var lapedtimes = document.getElementById('lapedTimes');
  var laptimes = document.getElementById('lapTimes');

  //카운트 값 선언
  var hourNumber = 0;
  var minNumber = 0;
  var secNumber = 0;
  var secInterval;
  //초시계 동작 상태를 담고 있는 변수, 동작중이면 true, 멈춘상태면 false
  var isRunning = false;



  //스타트 버튼 클릭시 실행되는 setInterval함수
  function startInterval(){
    secNumber++;
    if(secNumber>59){
      secNumber = 0;
      minNumber++;
        if(minNumber>59){
          minNumber=0;
          hourNumber++;
          hour.innerHTML = addZero(hourNumber);
        }
      min.innerHTML = addZero(minNumber);
    }
    sec.innerHTML = addZero(secNumber);
  }

  //스타트버튼을 클릭 시 실행되는 함수
  function startAction(){
    if(isRunning ===false){
      secInterval = setInterval(startInterval,10);
      isRunning =true;
    }
  }
  //스탑버튼을 클릭 시 실행되는 함수
  function stopAction(){
    clearInterval(secInterval);
    isRunning =false;
  }
  //리셋버튼을 클릭 시 실행되는 함수
  function resetAction(){
    stopAction();
    hourNumber = 0;
    hour.innerHTML = addZero(hourNumber);
    minNumber = 0;
    min.innerHTML = addZero(minNumber);
    secNumber = 0;
    sec.innerHTML = addZero(secNumber);
    lapTimes.innerHTML='';
  }
  function lapAction(){
    var liNode = document.createElement('li');
    var txtNode = document.createTextNode(
      addZero(hourNumber) + ':' +
      addZero(minNumber) + ':'+
      addZero(secNumber)
    );
    if(isRunning ===true){
      liNode.appendChild(txtNode);
      laptimes.appendChild(liNode);
    }
  }
  lapButton.addEventListener('click',lapAction);
  startbtn.addEventListener('click',startAction);
  stopbtn.addEventListener('click',stopAction);
  resetbtn.addEventListener('click',resetAction);

  // 알람
  var alarmhour = document.getElementById('alarmhour');
  var alarmmin = document.getElementById('alarmmin');

  var hourup = document.getElementById('hourup');
  var hourdown = document.getElementById('hourdown');
  var minup = document.getElementById('minup');
  var mindown = document.getElementById('mindown');

  var set = document.getElementById('set');
  var sethour = document.getElementById('sethour');
  var setmin = document.getElementById('setmin');

  var am = document.getElementById('am');
  var pm = document.getElementById('pm');

  var sethour = document.getElementById('sethour');
  var setmin = document.getElementById('setmin');
  var alarmtxt = document.getElementById('alarmtxt');
  var alarmampm = document.getElementById('alarmampm');



  //알람 업다운을 클릭했을때 값을 주는 함수

  function hourupBtnAct(){
    alarmedhour++;
      if(alarmedhour>23){
        alarmedhour=0;
        alarmhour.innerHTML=addZero(0);
      }
      if(alarmedhour<12){
        alarmhour.innerHTML=addZero(alarmedhour);
        alarmampm.innerHTML='am';
      }
      else {
        alarmhour.innerHTML=addZero(alarmedhour-12);
        alarmampm.innerHTML='pm';
      }
      if(alarmedhour===12){
        alarmhour.innerHTML=12;
        alarmampm.innerHTML='pm';
      }
      console.log(alarmedhour);
  }
  function hourdownBtnAct(){
      if(alarmedhour>0){
      alarmedhour--;
      }
  }
  hourup.addEventListener('click',hourupBtnAct)
  hourdown.addEventListener('click',hourdownBtnAct)

  function minupBtnAct(){
    alarmedmin=alarmedmin+5;
      if(alarmedmin>59){
        alarmedmin=0;
        alarmmin.innerHTML=addZero(0);
      }
    alarmmin.innerHTML=addZero(alarmedmin);
  }
  function mindownBtnAct(){
      if(alarmedmin>0){
      alarmedmin=alarmedmin-5;
      }
    alarmmin.innerHTML=addZero(alarmedmin);
  }
  function amBtnAct(){
      if(alarmedhour>12){
        alarmedhour=alarmedhour-12;
        alarmhour.innerHTML=addZero(alarmedhour);
      }
  }
  function pmBtnAct(){
      if(alarmedhour<13){
        alarmedhour=alarmedhour+12;
        alarmhour.innerHTML=addZero(alarmedhour);
      }
  }

  minup.addEventListener('click',minupBtnAct)
  mindown.addEventListener('click',mindownBtnAct)
  am.addEventListener('click',amBtnAct)
  pm.addEventListener('click',pmBtnAct)
  set.addEventListener('click',setIs)


  // //카운트 값 선언
  // var alarmedhour = 0;
  // var alarmedmin = 0;
  // var sethourIs = 0;
  // var setminIs = 0;


  function setIs(){
    sethourIs = alarmedhour;
    sethour.innerHTML=addZero(sethourIs);
    setminIs = alarmedmin;
    setmin.innerHTML=addZero(setminIs);
      }

  //알람시간=지금시간일때 글씨가 나오는 함수


















  };

document.addEventListener('DOMContentLoaded', init);
