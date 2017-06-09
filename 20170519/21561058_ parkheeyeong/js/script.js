var init = function() {
  // 시계 가져오기
  var timesec = document.getElementById('timesec');
  var timemin = document.getElementById('timemin');
  var timehour = document.getElementById('timehour');
  var ampm = document.getElementById('ampm');
  //빈 변수 만들어주기
  var clocktime;
  var calendar;
  //알람
  var worldtime;
  var worldtime2;
  //카운트 값 선언
  var alarmedhour = 0;
  var alarmedmin = 0;
  var sethourIs = 0;
  var setminIs = 0;

  //날짜 가져오기
  var year = document.getElementById('year');
  var month = document.getElementById('month');
  var day = document.getElementById('day');
  var date = document.getElementById('date');
  var monthIs = 0;
  var dayIs = 0;
  var dateIs = 0;

  //10이하일때 앞에 0을 추가해주는 함수 -num은 숫자입니다
  function addZero( num ) {
    if (num < 10) {
      return '0' + num;
    }
    return num;
  }

  //날짜를 가져오는 함수
  function getDate() {
    calendar = new Date();
    yearIs = calendar.getFullYear();
    monthIs = calendar.getMonth(); //월의 값
    dateIs = calendar.getDate(); //일의 값
    dayIs = calendar.getDay(); //요일의 값( 일요일이 0임)
    year.innerHTML = yearIs;
    monthIs = monthIs + 1; //월요일은 0부터 시작하므로 1을 더해줍니다.
    month.innerHTML = addZero( monthIs );
    date.innerHTML = addZero( dateIs );
    //index를 요일로 가져온다
    var daywhat = 'a'
    if (dayIs === 0) {
      daywhat = '일'
    } else if (dayIs === 1) {
      daywhat = '월'
    } else if (dayIs === 2) {
      daywhat = '화'
    } else if (dayIs === 3) {
      daywhat = '수'
    } else if (dayIs === 4) {
      daywhat = '목'
    } else if (dayIs === 5) {
      daywhat = '금'
    }
    if (dayIs === 0) {
      daywhat = '토'
    }
    day.innerHTML = daywhat;
  }

  //세계시간표시하는 변수 가져오기
  var worldhour = document.getElementById('worldhour');
  var worldmin = document.getElementById('worldmin');
  var worldsec = document.getElementById('worldsec');

  var worldhour2 = document.getElementById('worldhour2');
  var worldmin2 = document.getElementById('worldmin2');
  var worldsec2 = document.getElementById('worldsec2');
  //표시될 시간 0으로 초기값주기
  var worldhourIs = 0;
  var worldminIs = 0;
  var worldsecIs = 0;

  var worldhourIs2 = 0;
  var worldminIs2 = 0;
  var worldsecIs2 = 0;

  //index로 가져오는 방법 생각하기
  var china = document.getElementById('china');
  var tiwan = document.getElementById('tiwan');
  var ger = document.getElementById('ger');
  var gris = document.getElementById('gris');
  var england = document.getElementById('england');
  var france = document.getElementById('france');
  var sau = document.getElementById('sau');
  var kena = document.getElementById('kena');
  var newy = document.getElementById('newy');
  var canada = document.getElementById('canada');
  var mex = document.getElementById('mex');
  var aus = document.getElementById('aus');

  var china2 = document.getElementById('china2');
  var tiwan2 = document.getElementById('tiwan2');
  var ger2 = document.getElementById('ger2');
  var gris2 = document.getElementById('gris2');
  var england2 = document.getElementById('england2');
  var france2 = document.getElementById('france2');
  var sau2 = document.getElementById('sau2');
  var kena2 = document.getElementById('kena2');
  var newy2 = document.getElementById('newy2');
  var canada2 = document.getElementById('canada2');
  var mex2 = document.getElementById('mex2');
  var aus2 = document.getElementById('aus2');

  //1초마다 실행되는 함수
  function intervalHandeler() {
    //시간을 가져오는 함수
    clocktime = new Date();
    worldtime = new Date();
    worldtime2 = new Date();

    //위에 만들어준 변수에 가져운 시간을 담아준다.
    secIs = addZero( clocktime.getSeconds() );
    minIs = addZero( clocktime.getMinutes() );
    hourIs = clocktime.getHours();

    //ampm설정
    if ( hourIs > 12 ) {
      timehour.innerHTML = addZero( hourIs - 12 );
      ampm.innerHTML = ' PM'
    }
    if ( hourIs === 12 ) {
      timehour.innerHTML = addZero( hourIs );
      ampm.innerHTML = ' PM'
    } else {
      ampm.innerHTML = ' AM'
      timehour.innerHTML = addZero( hourIs );
    }

    timesec.innerHTML = secIs;
    timemin.innerHTML = minIs;

    //알람
    var alarmNow = false;
    //알람  html
    if ( sethourIs === hourIs && setminIs === minIs ) {
      alarmNow = true;
      if ( secIs == 00 ) {
        alert( " 시간이 되었습니다 " );
      }
    }
    if ( alarmNow === true ) {
      alarmtxt.innerHTML = '이 되었습니다!';
    } else {
      alarmtxt.innerHTML = '에 알람이 울립니다';
    }

    //세계시간 표시 해주기
    worldhourIs = worldtime.getHours();
    worldminIs = worldtime.getMinutes();
    worldsecIs = worldtime.getSeconds();

    worldhourIs2 = worldtime2.getHours();
    worldminIs2 = worldtime2.getMinutes();
    worldsecIs2 = worldtime2.getSeconds();

    //여기까지intervalhandeler
  }

  //세계시간

  var worldtimer;//set,clear인터벌 할 수 있도록
  // var worldIsrunning=false;
  function chinas() {
    clearInterval( worldtimer );
    worldtimer = setInterval( chinaClickHandler, 1000 );
  }

  function tiwans() {
    clearInterval( worldtimer );
    worldtimer = setInterval( tiwanClickHandler, 1000 );
  }

  function gers() {
    clearInterval( worldtimer );
    worldtimer = setInterval( gerClickHandler, 1000 );
  }

  function englands() {
    clearInterval( worldtimer );
    worldtimer = setInterval( englandClickHandler, 1000 );
  }

  function frances() {
    clearInterval( worldtimer );
    worldtimer = setInterval( franceClickHandler, 1000 );
  }

  function saus() {
    clearInterval( worldtimer );
    worldtimer = setInterval( sauClickHandler, 1000 );
  }

  function newys() {
    clearInterval( worldtimer );
    worldtimer = setInterval( newyClickHandler, 1000 );
  }

  function canadas() {
    clearInterval( worldtimer );
    worldtimer = setInterval( canadaClickHandler, 1000 );
  }

  function mexs() {
    clearInterval( worldtimer );
    worldtimer = setInterval( mexClickHandler, 1000 );
  }

  function auss() {
    clearInterval( worldtimer );
    worldtimer = setInterval( ausClickHandler, 1000 );
  }

  function chinaClickHandler() { write( 1 ); }
  function tiwanClickHandler() { write( 7 ); }
  function gerClickHandler() { write( 8 );}
  function englandClickHandler() { write( 9 ); }
  function franceClickHandler() { write( 8 ); }
  function sauClickHandler() { write( 6 ); }
  function newyClickHandler() { write( 14 ); }
  function canadaClickHandler() { write( 15 ); }
  function mexClickHandler() { write( 15 ); }
  function ausClickHandler() { write( -1 ); }

  function write(a) {
    if ((worldhourIs - a) < 0) {
      worldhour.innerHTML = addZero( worldhourIs - a + 23 );
      console.log('ss');
    } else {
      worldhour.innerHTML = addZero( worldhourIs - a );
    }
    worldmin.innerHTML = addZero( worldminIs );
    worldsec.innerHTML = addZero( worldsecIs );
  }


  china.addEventListener( 'click', chinas );
  tiwan.addEventListener( 'click', tiwans );
  ger.addEventListener( 'click', gers );
  england.addEventListener( 'click', englands );
  france.addEventListener( 'click', frances );
  sau.addEventListener( 'click', saus );
  newy.addEventListener( 'click', newys );
  canada.addEventListener( 'click', canadas );
  mex.addEventListener( 'click', mexs );
  aus.addEventListener( 'click', auss );


  var worldtimer2;
  // var worldIsrunning=false;
  function chinas2() {
    clearInterval( worldtimer2 );
    worldtimer2 = setInterval( chinaClickHandler2, 1000 );
  }

  function tiwans2() {
    clearInterval( worldtimer2 );
    worldtimer2 = setInterval( tiwanClickHandler2, 1000 );
  }

  function gers2() {
    clearInterval( worldtimer2 );
    worldtimer2 = setInterval( gerClickHandler2, 1000 );
  }

  function englands2() {
    clearInterval( worldtimer2 );
    worldtimer2 = setInterval( englandClickHandler2, 1000 );
  }

  function frances2() {
    clearInterval( worldtimer2 );
    worldtimer2 = setInterval( franceClickHandler2, 1000 );
  }

  function saus2() {
    clearInterval( worldtimer2 );
    worldtimer2 = setInterval( sauClickHandler2, 1000 );
  }

  function newys2() {
    clearInterval( worldtimer2 );
    worldtimer2 = setInterval( newyClickHandler2, 1000 );
  }

  function canadas2() {
    clearInterval( worldtimer2 );
    worldtimer2 = setInterval( canadaClickHandler2, 1000 );
  }

  function mexs2() {
    clearInterval( worldtimer2 );
    worldtimer2 = setInterval( mexClickHandler2, 1000 );
  }

  function auss2() {
    clearInterval( worldtimer2 );
    worldtimer2 = setInterval( ausClickHandler2, 1000 )
  }

  function chinaClickHandler2() { write2( 1 ); }
  function tiwanClickHandler2() { write2( 7 ); }
  function gerClickHandler2() { write2( 8 ); }
  function englandClickHandler2() { write2( 9 );  }
  function franceClickHandler2() { write2( 8 ); }
  function sauClickHandler2() { write2( 6 ); }
  function newyClickHandler2() { write2( 14 ); }
  function canadaClickHandler2() { write2( 15 ); }
  function mexClickHandler2() { write2( 15 ); }
  function ausClickHandler2() { write2(-1); }

  function write2( a ) {
    worldtime2 = new Date( worldtime2.getTime() - ( a * 60 * 60 * 1000 ));
    worldhourIs2 = worldtime2.getHours();
    worldhour2.innerHTML = addZero( worldhourIs2 );
    worldmin2.innerHTML = addZero( worldminIs2 );
    worldsec2.innerHTML = addZero( worldsecIs2 );
  }


  china2.addEventListener( 'click', chinas2 );
  tiwan2.addEventListener( 'click', tiwans2 );
  ger2.addEventListener( 'click', gers2 );
  england2.addEventListener( 'click', englands2 );
  france2.addEventListener( 'click', frances2 );
  sau2.addEventListener( 'click', saus2 );
  newy2.addEventListener( 'click', newys2 );
  canada2.addEventListener( 'click', canadas2 );
  mex2.addEventListener( 'click', mexs2 );
  aus2.addEventListener( 'click', auss2 );
  //세계시간1끝


  setInterval(intervalHandeler, 1000);
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
  var ispaulse = false;

  //스타트 버튼 클릭시 실행되는 setInterval함수
  function startInterval() {
    secNumber++;
    if ( secNumber > 59 ) {
      secNumber = 0;
      minNumber++;
      if ( minNumber > 59 ) {
        minNumber = 0;
        hourNumber++;
        hour.innerHTML = addZero( hourNumber );
      }
      min.innerHTML = addZero( minNumber );
    }
    sec.innerHTML = addZero( secNumber );
  }

  //스타트버튼을 클릭 시 실행되는 함수
  function startAction() {
    lapTimes.innerHTML = '';

    if (isRunning === false) {
      secInterval = setInterval( startInterval, 10 );
      isRunning = true;
      ispaulse = true;
    }
  }
  //스탑버튼을 클릭 시 실행되는 함수
  function stopAction() {
    clearInterval( secInterval );
    isRunning = false;
    ispaulse = true;
  }
  //리셋버튼을 클릭 시 실행되는 함수
  function resetAction() {
    stopAction();
    hourNumber = 0;
    hour.innerHTML = addZero( hourNumber );
    minNumber = 0;
    min.innerHTML = addZero( minNumber );
    secNumber = 0;
    sec.innerHTML = addZero( secNumber );
    lapTimes.innerHTML = '';
    ispaulse = false;
  }

  function lapAction() {
    var liNode = document.createElement('li');
    var txtNode = document.createTextNode(
      addZero( hourNumber ) + ':' +
      addZero( minNumber ) + ':' +
      addZero( secNumber )
    );
    if (isRunning === true) {
      liNode.appendChild( txtNode );
      laptimes.appendChild( liNode );
    } else {
      lapTimes.innerHTML = 'start를 해주세요!';
    }
  }
  lapButton.addEventListener('click', lapAction);
  startbtn.addEventListener('click', startAction);
  stopbtn.addEventListener('click', stopAction);
  resetbtn.addEventListener('click', resetAction);

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
  var plusButton = document.getElementById('plusButton');
  var minusButton = document.getElementById('minusButton');

  //일정한 숫자만큼 더하고 빼도록 해주는 라디오값
  function getRadioValue() {
    var radios = document.getElementsByName('increment');
    for ( var i = 0; i < radios.length; ++i ) {
      var radio = radios[i];
      if ( radio.checked === true ) {
        return parseInt(radio.value, 10);
      }
    }
  }

  //알람 업다운을 클릭했을때 값을 주는 함수
  function hourupBtnAct() {
    alarmedhour = alarmedhour + getRadioValue();
    if ( alarmedhour > 23 ) {
      alarmedhour = 0;
      alarmhour.innerHTML = addZero(0);
    }
    if (alarmedhour < 12) {
      alarmhour.innerHTML = addZero( alarmedhour );
      alarmampm.innerHTML = 'am';
    } else {
      alarmhour.innerHTML = addZero( alarmedhour - 12 );
      alarmampm.innerHTML = 'pm';
    }
    if ( alarmedhour === 12 ) {
      alarmhour.innerHTML = 12;
      alarmampm.innerHTML = 'pm';
    }
  }

  function hourdownBtnAct() {
    alarmedhour = alarmedhour - getRadioValue();
    alarmhour.innerHTML = addZero(0);

    if (alarmedhour < 0) {
      alarmedhour = alarmedhour + 24;
      alarmhour.innerHTML = addZero(0);
    }
    if (alarmedhour < 12) {
      alarmhour.innerHTML = addZero(alarmedhour);
      alarmampm.innerHTML = 'am';
    } else {
      alarmhour.innerHTML = addZero(alarmedhour - 12);
      alarmampm.innerHTML = 'pm';
    }
    if (alarmedhour === 12) {
      alarmhour.innerHTML = 12;
      alarmampm.innerHTML = 'pm';
    }
  }

  hourup.addEventListener('click', hourupBtnAct);
  hourdown.addEventListener('click', hourdownBtnAct);

  function minupBtnAct() {
    alarmedmin = alarmedmin + getRadioValue();
    if (alarmedmin > 59) {
      alarmedmin = 0;
      alarmmin.innerHTML = addZero(0);
    }
    alarmmin.innerHTML = addZero(alarmedmin);
  }

  function mindownBtnAct() {
    alarmedmin = alarmedmin - getRadioValue();
    if (alarmedmin < 0) {
      alarmedmin = alarmedmin + 60;
    }
    alarmmin.innerHTML = addZero(alarmedmin);
  }


  function amBtnAct() {
    if (alarmedhour > 12) {
      alarmedhour = alarmedhour - 12;
      alarmhour.innerHTML = addZero(alarmedhour);
      alarmampm.innerHTML = 'am';
    }
    if (alarmedhour === 12) {
      alarmedhour = 0;
      alarmhour.innerHTML = addZero(alarmedhour);
      alarmampm.innerHTML = 'am';
    }
    console.log(alarmedhour);
  }

  function pmBtnAct() {
    if (alarmedhour < 13) {
      alarmedhour = alarmedhour + 12;
      alarmhour.innerHTML = addZero(alarmedhour-12);
      if(alarmedhour === 12){
        alarmhour.innerHTML = 12;
      }
      alarmampm.innerHTML = 'pm';
    }
    console.log(alarmedhour);
  }

  minup.addEventListener('click', minupBtnAct);
  mindown.addEventListener('click', mindownBtnAct);
  am.addEventListener('click', amBtnAct);
  pm.addEventListener('click', pmBtnAct);
  set.addEventListener('click', setIs);


  // //카운트 값 선언
  // var alarmedhour = 0;
  // var alarmedmin = 0;
  // var sethourIs = 0;
  // var setminIs = 0;

 //설정된 시간
  function setIs() {
    sethourIs = alarmedhour;
    sethour.innerHTML = addZero(sethourIs);
    setminIs = alarmedmin;
    setmin.innerHTML = addZero(setminIs);
  }

  //로또
  var lotto1 = document.getElementById('lotto1');
  var lotto2 = document.getElementById('lotto2');
  var lotto3 = document.getElementById('lotto3');
  var lotto4 = document.getElementById('lotto4');
  var lotto5 = document.getElementById('lotto5');
  var lotto6 = document.getElementById('lotto6');
  var lotto7 = document.getElementById('lotto7');
  var lottogo = document.getElementById('lottogobtn');
  var lottoreset = document.getElementById('lottoresetbtn');

  //빈 배열 만들기
  var lottonum = [];

  //로또 시작
  function luckyIs() {
    //숫자를 비워준 후 담아주는 함수 실행
    lotto1.innerHTML = '';
    lotto2.innerHTML = '';
    lotto3.innerHTML = '';
    lotto4.innerHTML = '';
    lotto5.innerHTML = '';
    lotto6.innerHTML = '';
    lotto7.innerHTML = '';
    randomAction();
  }

  //리셋할시
  function luckyreset() {
    lotto1.innerHTML = '1';
    lotto2.innerHTML = '2';
    lotto3.innerHTML = '3';
    lotto4.innerHTML = '4';
    lotto5.innerHTML = '5';
    lotto6.innerHTML = '6';
    lotto7.innerHTML = 'bonus';
  }

  //랜덤으로 숫자를 실행하는 함수
  function randomAction() {
    //a만큼 배열을 증가, 7가지의 수를 검사 ( index는 0부터 시작 )
    for ( var a = 0; a < 7; a++)  {
      lottonum[a] = 0;
    }
    //반복문 -  i로 배열을 만든다.
    for (var i = 0; i < 7; i++) {
      for (var j = 0; j <= i; j++) {
        //변수 aaa는 1부터 45까지 의 랜덤인 수
        var aaa = Math.floor(Math.random() * 45) + 1;
        //중복되지 않도록 만들어 주는 반복문
        if (aaa == lottonum[j]) {
          aaa = Math.floor(Math.random() * 45) + 1;
        } else {
          lottonum[i] = aaa;
        }
      }
    }
    //배열 순서대로
    lotto1.innerHTML = lottonum[0];
    lotto2.innerHTML = lottonum[1];
    lotto3.innerHTML = lottonum[2];
    lotto4.innerHTML = lottonum[3];
    lotto5.innerHTML = lottonum[4];
    lotto6.innerHTML = lottonum[5];
    lotto7.innerHTML = lottonum[6];
  }


  lottogo.addEventListener('click', luckyIs)
  lottoreset.addEventListener('click', luckyreset)

  //제일 위로 넘어가는 함수
  function gotop() {
    window.scrollTo(0, 0);
  }

  var scrolltop = document.getElementById('scrolltop');
  scrolltop.addEventListener('click', gotop);

  // // 계산기 - 숫자 어떻게 가져올 것인지 (반복문) - 실패했습니다..ㅠ
  //
  // var cal1 = document.getElementById('cal1');
  // var cal2 = document.getElementById('cal2');
  // var cal3 = document.getElementById('cal3');
  // var cal4 = document.getElementById('cal4');
  // var cal5 = document.getElementById('cal5');
  // var cal6 = document.getElementById('cal6');
  // var cal7 = document.getElementById('cal7');
  // var cal8 = document.getElementById('cal8');
  // var cal9 = document.getElementById('cal9');
  // var cal0 = document.getElementById('cal0');
  // var cal00 = document.getElementById('cal00');
  // var ac = document.getElementById('AC');
  // var calIs = document.getElementById('calIs');
  // var calplus = document.getElementById('calplus');
  // var calminus = document.getElementById('calminus');
  // var calmultiple = document.getElementById('calmultiple');
  // var caldivide = document.getElementById('divide');
  //
  // calNum = 0;
  // caltotal = 0;
  // caling = 0;
  //
  // //숫자를 입력
  // function calwhat(a){
  //   a.toString();
  //   calNum=parseInt(calNum+'' + a, 10);
  //   calNum.toString();
  //   calIs.innerHTML=calNum;
  // }
  //
  // function calculatingplus(){
  //   console.log(calNum);
  //   console.log(caltotal);
  // }
  //   // calIs.innerHTML=calNum;
  //
  // function calthe1(){ calwhat(1); }
  // function calthe2(){ calwhat(2); }
  // function calthe3(){ calwhat(3); }
  // function calthe4(){ calwhat(4); }
  // function calthe5(){ calwhat(5); }
  // function calthe6(){ calwhat(6); }
  // function calthe7(){ calwhat(7); }
  // function calthe8(){ calwhat(8); }
  // function calthe9(){ calwhat(9); }
  // function calthe0(){ calwhat(0); }
  // function calthe00(){ calwhat(0);calwhat(0); }
  //
  // function acNum(){calNum = 0;calIs.innerHTML='';}
  //
  // cal1.addEventListener( 'click', calthe1 );
  // cal2.addEventListener( 'click', calthe2 );
  // cal3.addEventListener( 'click', calthe3 );
  // cal4.addEventListener( 'click', calthe4 );
  // cal5.addEventListener( 'click', calthe5 );
  // cal6.addEventListener( 'click', calthe6 );
  // cal7.addEventListener( 'click', calthe7 );
  // cal8.addEventListener( 'click', calthe8 );
  // cal9.addEventListener( 'click', calthe9 );
  // cal0.addEventListener( 'click', calthe0 );
  // cal00.addEventListener( 'click', calthe00 );
  //
  // calplus.addEventListener( 'click', calculatingplus );
  // // calminus.addEventListener( 'click', calculatingminus );
  // // calmultiple.addEventListener( 'click', calculatingmultiple );
  // // caldivide.addEventListener( 'click', calculatingdivide );
  //
  //
};


document.addEventListener('DOMContentLoaded', init);
