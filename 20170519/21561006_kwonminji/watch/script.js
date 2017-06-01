var init = function() {
    var bbb = document.getElementById('time');
    // var hour = document.getElementById('hour');
    // var min = document.getElementById('min');
    // var sec = document.getElementById('sec');
    var aaa = document.getElementById('ampm');
    var amPm; // 초기값 AM
    var time;
    var timer;
    var paris = document.getElementById('paris');
    var dubai = document.getElementById('dubai');
    var shanghai = document.getElementById('shanghai');
    var seoul = document.getElementById('seoul');
    var ny = document.getElementById('ny');
    var box = document.getElementById('section0');

    timer = setInterval(timeSeoul, 1000)

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

    function addZero(number) {
        if (number < 10) {
            return '0' + number;
        }
        return number;
    }

    function timeParis() {
        amPm = 'AM'; // 초기값 AM
        time = new Date();
        geth = time.getHours();
        gets = time.getSeconds();
        getm = time.getMinutes();
        hourp = geth - 7;
        box.style.backgroundImage = "url('./images/paris.jpg')";

        if (hourp >= 12) { // 시간이 12보다 클 때 PM으로 세팅
            amPm = 'PM';
        }
        bbb.innerHTML = addZero(hourp) + ':' + addZero(getm) + ':' + addZero(gets);
        aaa.innerHTML = amPm;

    }

    function timeDubai() {
        amPm = 'AM'; // 초기값 AM
        time = new Date();
        geth = time.getHours();
        gets = time.getSeconds();
        getm = time.getMinutes();
        hourDu = geth - 5;
        box.style.backgroundImage = "url('./images/dubai.jpg')";

        if (hourDu >= 12) { // 시간이 12보다 클 때 PM으로 세팅
            amPm = 'PM';
        }
        bbb.innerHTML = addZero(hour) + ':' + addZero(getm) + ':' + addZero(gets);
        aaa.innerHTML = amPm;
    }

    function timeShanghai() {
        amPm = 'AM'; // 초기값 AM
        time = new Date();
        geth = time.getHours();
        gets = time.getSeconds();
        getm = time.getMinutes();
        hourSh = geth - 1;
        box.style.backgroundImage = "url('./images/sh.jpg')";


        if (hourSh >= 12) { // 시간이 12보다 클 때 PM으로 세팅
            amPm = 'PM';
        }
        bbb.innerHTML = addZero(hour2) + ':' + addZero(getm) + ':' + addZero(gets);
        aaa.innerHTML = amPm;
    }

    function timeSeoul() {
        amPm = 'AM'; // 초기값 AM
        time = new Date();
        geth = time.getHours();
        gets = time.getSeconds();
        getm = time.getMinutes();
        box.style.backgroundImage = "url('./images/seoul.jpg')";

        if (geth >= 12) { // 시간이 12보다 클 때 PM으로 세팅
            amPm = 'PM';
        }
        bbb.innerHTML = addZero(geth) + ':' + addZero(getm) + ':' + addZero(gets);
        aaa.innerHTML = amPm;
    }

    function timeNy() {
        amPm = 'AM'; // 초기값 AM
        time = new Date();
        geth = time.getHours();
        gets = time.getSeconds();
        getm = time.getMinutes();
        hourNy = geth - 13;
        box.style.backgroundImage = "url('./images/newyork.jpg')";

        if (hourNy >= 12) { // 시간이 12보다 클 때 PM으로 세팅
            amPm = 'PM';
        }
        bbb.innerHTML = addZero(hourNy) + ':' + addZero(getm) + ':' + addZero(gets);
        aaa.innerHTML = amPm;
    }


}
document.addEventListener('DOMContentLoaded', init);


// stopwatch

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
        secNumber++;
        if (secNumber > 59) {
            secNumber = 0;
            minNumber++;
            if (minNumber > 59) {
                minNumber = 0;
                hourNumber++;
                hour.innerHTML = addZero(hourNumber);
            }
            min.innerHTML = addZero(minNumber);
        }
        sec.innerHTML = addZero(secNumber);
    }

    // 스타트 버튼을 클릭할 때 실행되는 함수
    function startAction() {
        if (isRunning === false) {
            secInterval = setInterval(startInterval, 3);
            isRunning = true;
        }
    }

    // 스탑 버튼 클릭할 때 실행되는 함수
    function stopAction() {
        clearInterval(secInterval);
        isRunning = false;
    }

    function lapAction() {
        if (isRunning === true) {
            var laptime = addZero(hourNumber) + ':' + addZero(minNumber) + ':' + addZero(secNumber);
            var num = document.createTextNode(laptime);
            var li = document.createElement('li');
            li.appendChild(num);
            lap.appendChild(li);
        }
    }

    // 리셋 버튼 클릭할 때 실행되는 함수
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
//set버튼 누르면 전송되게 하기
var init3 = function() {
  var sethour = document.getElementById('hourValue');
  var setmin = document.getElementById('minValue');
  var set = document.getElementById('set');
  var ap = document.getElementById('ap');
  var abb = document.getElementById('setAlarm');
  var now;

  function setTime() {
    var now = new Date();
      var setH = sethour.options[sethour.selectedIndex].value;
      var setM = setmin.options[setmin.selectedIndex].value;
      var setap = ap.options[ap.selectedIndex].value;
      nowHour = now.getHours();
      nowMin = now.getMinutes();

      abb.innerHTML = setap + ' ' + setH + '시 ' + setM + '분 알람이 설정되었습니다' ;

      if(setap == '오후'){
        setH = parseInt(setH,10) + 12;
      }
      if(setM == nowMin & setH == nowHour){
      alert('!!!!!');
    }

    setInterval(setTime, 1000);
}
  set.addEventListener('click', setTime);
};

document.addEventListener('DOMContentLoaded', init3);
