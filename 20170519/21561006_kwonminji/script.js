//세계시간
//1. 각 시간이 들어갈 자리 getElementById 이용해서 변수 지정해주기
//am,pm 설정 제어하기 위해서 지정
//2. 버튼으로 각 국가 페이지 이동 위해 버튼 값 getElementById 이용해서 지정
//3. 국가별 이미지 변경위해서 배경 div 변수 지정
//4. 국가별 변수 만들기
//5. 시차 적용 계산

var init = function() {
    var houris = document.getElementById('hour');
    var minis = document.getElementById('min');
    var secis = document.getElementById('sec');
    var ampmis = document.getElementById('ampm');
    var date = document.getElementById('date');
    var paris = document.getElementById('paris');
    var dubai = document.getElementById('dubai');
    var shanghai = document.getElementById('shanghai');
    var seoul = document.getElementById('seoul');
    var ny = document.getElementById('ny');
    var box = document.getElementById('section0');
    var amPm;// 초기값 AM
    var time;
    var timer;//setInterval,clearInterval 제어하기 위해 밖에서 선언

    //초기에 먼저 서울 실행하기 위해서
    timer = setInterval(timeSeoul, 1000)

    //페이지 이동 시 국가 전환하기 위해서 기존에 실행되고 있는 timer를 clearInterval시키고
    //클릭한 국가의 변수를 setInterval 시켜주세요.
    paris.addEventListener('click', function() {
        clearInterval(timer);
        timer = setInterval(timeParis, 1000);
    })

    dubai.addEventListener('click', function() {
        clearInterval(timer);
        timer = setInterval(timeDubai, 1000);
    })

    shanghai.addEventListener('click', function() {
        clearInterval(timer);
        timer = setInterval(timeShanghai, 1000);
    })

    seoul.addEventListener('click', function() {
        clearInterval(timer);
        timer = setInterval(timeSeoul, 1000);
    })


    ny.addEventListener('click', function() {
        clearInterval(timer);
        timer = setInterval(timeNy, 1000);
    })


    //숫자가 10보다 작을 때(한자리일때) 앞에 0을 추가하는 함수
    function addZero(number) {
        if(number < 10){
          return '0' + number;
        }
        return number;
    }

    //paris 버튼을 클릭할 때 실행되는 함수
    function timeParis() {
        //초기값 am
        amPm = 'AM';
        time = new Date();
        gets = time.getSeconds();
        getm = time.getMinutes();
        //time.getTime 시간에서 - (7 * 60 * 60 * 1000)
        //파리와 -7시간 차이나기때문에 계산 하면 파리의 시간.
        var partime = new Date(time.getTime() - (7 * 60 * 60 * 1000));
        parishour = partime.getHours();
        //배경인 box의 배경이미지를 국가별 이미지로 변경해주기 위함.
        box.style.backgroundImage = "url('./images/paris.jpg')";

        //시간이 12보다 클 때 ampm 값을 PM으로 변경
        if (parishour >= 12) {
            amPm = 'PM';
        }if (gets >= 50) {
          //초의 값이 50이 되는 순간부터 색상 빨갛게 변경
          secis.style.color="#ef2020";
        }else if (gets < 60) {
          //60이 되는 순간 하얀색으로
          secis.style.color="white";
        }
        //시간을 담아줌
        houris.innerHTML = addZero(parishour);
        minis.innerHTML = addZero(getm);
        secis.innerHTML = addZero(gets);
        ampmis.innerHTML = amPm;
        //년월일을 담아줌
        date.innerHTML = partime.getFullYear() + '년 ' + (partime.getMonth() + 1) + '월 ' + partime.getDate() + '일';
    }

    //Dubai 버튼을 클릭할 때 실행되는 함수
    function timeDubai() {
        amPm = 'AM';
        time = new Date();
        gets = time.getSeconds();
        getm = time.getMinutes();
        var dubaitime = new Date(time.getTime() - (5 * 60 * 60 * 1000));
        dubaihour = dubaitime.getHours();
        box.style.backgroundImage = "url('./images/dubai.jpg')";

        if (dubaihour >= 12) {
            amPm = 'PM';
          }if (gets >= 50) {
            secis.style.color="#ef2020";
          }else if (gets < 60) {
            secis.style.color="white";
          }
          houris.innerHTML = addZero(dubaihour);
          minis.innerHTML = addZero(getm);
          secis.innerHTML = addZero(gets);
          ampmis.innerHTML = amPm;
          date.innerHTML = dubaitime.getFullYear() + '년 ' + (dubaitime.getMonth() + 1) + '월 ' + dubaitime.getDate() + '일';
      }

    //shanghai 버튼을 누를 때 실행되는 함수
    function timeShanghai() {
        amPm = 'AM';
        time = new Date();
        gets = time.getSeconds();
        getm = time.getMinutes();
        var shtime = new Date(time.getTime() - (1 * 60 * 60 * 1000));
        shhour = shtime.getHours();
        box.style.backgroundImage = "url('./images/sh.jpg')";


        if (shhour >= 12) {
            amPm = 'PM';
          }if (gets >= 50) {
            secis.style.color="#ef2020";
          }else if (gets < 60) {
            secis.style.color="white";
          }
          houris.innerHTML = addZero(shhour);
          minis.innerHTML = addZero(getm);
          secis.innerHTML = addZero(gets);
          ampmis.innerHTML = amPm;
          date.innerHTML = shtime.getFullYear() + '년 ' + (shtime.getMonth() + 1) +'월 ' + shtime.getDate() +'일';
    }

    //Seoul 버튼을 누를 때 실행되는 함수
    function timeSeoul() {
        amPm = 'AM';
        time = new Date();
        seoultime = time.getHours();
        gets = time.getSeconds();
        getm = time.getMinutes();
        box.style.backgroundImage = "url('./images/seoul.jpg')";

        if (seoultime >= 12) {
            amPm = 'PM';
          }if (gets >= 50) {
            secis.style.color="#ef2020";
          }else if (gets < 60) {
            secis.style.color="white";
          }
          houris.innerHTML = addZero(seoultime);
          minis.innerHTML = addZero(getm);
          secis.innerHTML = addZero(gets);
          ampmis.innerHTML = amPm;
          date.innerHTML = time.getFullYear() + '년 ' + (time.getMonth() + 1) +'월 ' + time.getDate() +'일';
    }

    //New york 버튼을 누를 때 실행되는 함수
    function timeNy() {
        amPm = 'AM';
        time = new Date();
        gets = time.getSeconds();
        getm = time.getMinutes();
        var nytime = new Date(time.getTime() - (13 * 60 * 60 * 1000));
        nyhour = nytime.getHours();
        box.style.backgroundImage = "url('./images/newyork.jpg')";

        if (nyhour >= 12) {
            amPm = 'PM';
          }if (gets >= 50) {
            secis.style.color="#ef2020";
          }else if (gets < 60) {
            secis.style.color="white";
          }
          houris.innerHTML = addZero(nyhour);
          minis.innerHTML = addZero(getm);
          secis.innerHTML = addZero(gets);
          ampmis.innerHTML = amPm;
          date.innerHTML = nytime.getFullYear() + '년 ' + (nytime.getMonth() + 1) +'월 ' + nytime.getDate() +'일';
    }
}
document.addEventListener('DOMContentLoaded', init);


// stopwatch
//1. 각 시,분,초 값 들어갈 변수 id찾아서 담아주기
//2. 실행,중지,랩,리셋 버튼 변수로 담아주고
//3. 시,분,초 값 변수 선언
//4. 각 버튼을 누를 때 실행될 함수들 선언해주기

var init2 = function() {
    var hour = document.getElementById('s_hour');
    var min = document.getElementById('s_min');
    var sec = document.getElementById('s_sec');
    var lap = document.getElementById('lapTimes');
    var startButton = document.getElementById('startButton');
    var lapButton = document.getElementById('lapButton');
    var stopButton = document.getElementById('stopButton');
    var resetButton = document.getElementById('resetButton');

    var hourNumber = 0;
    var minNumber = 0;
    var secNumber = 0;
    var secInterval;
    // 초시계 동작 상태를 담고 있는 변수. 동작중이면 true, 멈춘상태면 false.
    var isRunning = false;
    var lapTimes;


    //start 버튼 클릭시 실행되는 setInterval 함수
    function startInterval() {
      //secNumber 증가
        secNumber++;
        //secNumber가 59보다 커지면 secNumber를 0으로 초기화 시키고
        //minNumber를 +1 해주세요.
        if (secNumber > 59) {
            secNumber = 0;
            minNumber++;
            //minNumber가 59보다 커지면 minNumber를 0으로 초기화 시키고
            //hourNumber를 +1 해주세요.
            //만약 hourNumber가 10보다 작은(한자리) 수이면 앞에 0을 추가하는 함수(addzero) 실행.
            if (minNumber > 59) {
                minNumber = 0;
                hourNumber++;
                hour.innerHTML = addZero(hourNumber);
            }
            //10보다 작은(한자리) 수이면 앞에 0을 추가하는 함수(addzero) 실행
            min.innerHTML = addZero(minNumber);
        }
        //10보다 작은(한자리) 수이면 앞에 0을 추가하는 함수(addzero) 실행
        sec.innerHTML = addZero(secNumber);
    }

    // 스타트 버튼을 클릭할 때 실행되는 함수
    function startAction() {
      //isRunning === false 이면 실행시켜주세요.
      //그리고 isRunning을 true 로 변경해주세요.
        if (isRunning === false) {
            secInterval = setInterval(startInterval, 1000);
            isRunning = true;
        }
    }

    // 스탑 버튼 클릭할 때 실행되는 함수
    function stopAction() {
      //setInterval 되고 있는 secInterval을 clearInterval 시켜주세요.
      //그리고 isRunning을 false 로 변경해주세요.
        clearInterval(secInterval);
        isRunning = false;
    }

    //랩 버튼을 클릭할 때 실행되는 함수
    //isRunning이 true이면
    //laptime 변수에 현재 값을 담고
    //li 요소를 createElement 해주는 변수 li를 만들고
    //그 안에 createTextNode로 laptime을 담아줌
    //위에 선언한 변수 lap에 li를 appendChild하고
    //그 li 에 createTextNode를 담은 num을 appendChild 시켜주세요.
    function lapAction() {
        if (isRunning === true) {
            var laptime = addZero(hourNumber) + ':' + addZero(minNumber) + ':' + addZero(secNumber);
            var li = document.createElement('li');
            var num = document.createTextNode(laptime);
            li.appendChild(num);
            lap.appendChild(li);
        }
    }

    // 리셋 버튼 클릭할 때 실행되는 함수
    //stopAction 실행
    //각 sec,min,hour Number를 초기화
    //lap 한 내용들도 초기화
    function resetAction() {
        stopAction();
        secNumber = 0;
        sec.innerHTML = addZero(secNumber);
        minNumber = 0;
        min.innerHTML = addZero(minNumber);
        hourNumber = 0;
        hour.innerHTML = addZero(hourNumber);
        lap.innerHTML = '';
    }

    function addZero(number) {
        if (number < 10) {
            return '0' + number;
        }
        return number;
    }
    startButton.addEventListener('click', startAction);
    stopButton.addEventListener('click', stopAction);
    lapButton.addEventListener('click', lapAction);
    resetButton.addEventListener('click', resetAction);
};

document.addEventListener('DOMContentLoaded', init2);


//알람시계
//1. 필요한 변수 지정
//2. set 버튼을 누르면 실행될 함수 지정해주기
//3. 알람이 실행될 때 뜨는 stop버튼 클릭시 실행될 함수 만들어주기

var init3 = function() {
  var sethour = document.getElementById('hourValue');
  var setmin = document.getElementById('minValue');
  var set = document.getElementById('set');
  //오전 오후 지정
  var ap = document.getElementById('ap');
  var setAlarm = document.getElementById('setAlarm');
  var stopbb = document.getElementById('stopAlarm');
  //알람 실행시 울리는 오디오
  var audio = new Audio('alarm.mp3');
  //현재 시간 담기 위함
  var now;
  //set,clearInterval 위해 선언
  var timer2;

  //set 버튼을 누르면 실행되는 함
  function setTime() {
      var now = new Date();
      //위에서 지정한 sethour 중 선택된 option의 value 값을 가져와서 setH에 담음.
      var setH = sethour.options[sethour.selectedIndex].value
      //위에서 지정한 setmin 중 선택된 option의 value 값을 가져와서 setM에 담음.
      var setM = setmin.options[setmin.selectedIndex].value;
      //ap 중 선택된 option의 value 값을 담음 (오전, 오후)
      //후에 오후는 + 12 하기 위해 담는 과정
      var setap = ap.options[ap.selectedIndex].value;
      //현재 시간 담음, setH, setM과 비교하기 위해
      nowHour = now.getHours();
      nowMin = now.getMinutes();

      //set 버튼을 누르면 아래와 같이 innerHTML 되게 해주세요.
      setAlarm.innerHTML = setap + ' ' + setH + '시 ' + setM + '분 알람이 설정되었습니다' ;

      //만약 위에서 받은 setap의 밸류값이 '오후' 이면 setH를 10진수로 바꿔주고 +12를 더해주세요.
      if(setap == '오후'){
        setH = parseInt(setH, 10) + 12;
      }

      //만약 설정한 setH의 값과 현재 시간 nowHour이 같고, setM과 nowMin이 같다면
      //stopbb 버튼을 보이게 해주고
      //오디오를 실행
      //setAlarm 안의 내용을 아래와 같이 변경해주세요.
      if(setH == nowHour & setM == nowMin){
        stopbb.style.display="block";
        audio.play();
        setAlarm.innerHTML = '설정한 알람시간 ' + setap + ' ' + setH + '시 ' + setM + '분 입니다' ;
      }
    }

    //알람이 실행되면 나오는 stop 버튼을 누르면 실행되는 함수
    //clearInterval 시키고
    //audio를 중지
    //스탑 버튼을 보이지 않게
    //setAlarm의 내용을 비워주세요.
    function stopAction() {
      clearInterval(timer2);
      audio.pause();
      stopbb.style.display="none";
      setAlarm.innerHTML = '';
    }

  //set버튼을 누르면 setInterval 실행
  set.addEventListener('click', function() {
     timer2 = setInterval(setTime, 1000)});
  //알람이 실행될 때만 보이는 스탑버튼을 누르면 stopAction실행
  stopbb.addEventListener('click', stopAction);
}

document.addEventListener('DOMContentLoaded', init3);
