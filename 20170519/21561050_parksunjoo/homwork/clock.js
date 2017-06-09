//10보다 작을때 앞에 0을 붙인다.
function addZeros(num) {
    if (num < 10) {
        return '0' + num;
    }
    return num;
}
var currenthour1;
var currentmin1;

var alarmHour;
var alarmMinute;
var audio = new Audio('alarm.mp3');


var init1 = function() {

    var sec1 = document.getElementById('sec1');
    var min1 = document.getElementById('min1');
    var hour1 = document.getElementById('hour1');
    var amPm = document.getElementById('amPm'); // 초기값 AM

    var time;



    function intervalHandler() {
        time = new Date();
        var currentsec1 = sec1.innerHTML = addZeros(time.getSeconds(), 2);
        currentmin1 = min1.innerHTML = addZeros(time.getMinutes(), 2);
        currenthour1 = hour1.innerHTML = addZeros(time.getHours(), 2);
        // var hour0 = document.getElementById('hour0');
        // var min0 = document.getElementById('min0');
        //
        // function alarmAction() {
        //     //hour와 min을 설정할 수 있는 기능
        //     alarmHour = prompt('시를 입력해주세요');
        //     alarmMinute = prompt('분을 입력해주세요');
        //     //설정한 시분을 저장한다.적용한다.
        //     hour0.innerHTML = addZeros(alarmHour);
        //     min0.innerHTML = addZeros(alarmMinute);
        //     //현재시간과 설정 시간과 동일 하면 실행
        // };
        // settime.addEventListener('click', alarmAction);


        // 시간이 12보다 클 때 PM으로 세팅, 12를 빼줌
        if (currenthour1 >= 12) {
            amPm.innerHTML = 'PM'
        } else {
            amPm.innerHTML = 'AM';
        }
    }
    intervalHandler();

};
setInterval(init1, 1000);
document.addEventListener('DOMContentLoaded', init1);


var init3 = function() {

    var hour2 = document.getElementById('hour2');
    var min2 = document.getElementById('min2');
    var sec2 = document.getElementById('sec2');
    var hourNumber = 0;
    var minNumber = 0;
    var secNumber = 0;
    var secInterval;
    //초시계 동작 상태를 담고있는 변수. 동작중이면 true 멈춘상태면 false
    var isRunning = false;

    var startbtn = document.getElementById('startButton');
    var stopbtn = document.getElementById('stopButton');
    var resetbtn = document.getElementById('resetButton');
    var lapbtn = document.getElementById('lapButton');
    var lapul = document.getElementById('laplist');


    //start버튼 클릭시 실행되는 setInterval 함수
    function startInterval() {
        secNumber++;
        if (secNumber > 59) {
            secNumber = 0;
            minNumber++;
            if (minNumber > 59) {
                minNumber = 0;
                hourNumber++;
                hour2.innerHTML = addZeros(hourNumber);
            }
            min2.innerHTML = addZeros(minNumber);
        }
        sec2.innerHTML = addZeros(secNumber);
    }
    //스타트 버튼을 누를때 실행되는 함수
    function startAction() {
        if (isRunning === false) {
            secInterval = setInterval(startInterval, 20);
            isRunning = true;
        }
    }
    //스탑 버튼을 누를 때 실행되는 함수
    function stopAction() {
        clearInterval(secInterval);
        isRunning = false;
    }
    //리셋 버튼을 누를 때 실행되는 함수
    function resetAction() {
        secNumber = 0;
        sec2.innerHTML = secNumber + '0';
        minNumber = 0;
        min2.innerHTML = minNumber + '0';
        hourNumber = 0;
        hour2.innerHTML = hourNumber + '0';
        laplist.innerHTML = '';
    }
    //랩 버튼을 누를 때 실행되는 함수
    function lapAction() {
        var lapli = document.createElement('li');
        var lapText = document.createTextNode(
            addZeros(hourNumber) + ':' +
            addZeros(minNumber) + ':' +
            addZeros(secNumber)
        );
        if (isRunning === true) {
            lapli.appendChild(lapText);
            lapul.appendChild(lapli);
        }
    }
    //랩리셋 버튼을 누를 때 실행되는 함수

    startbtn.addEventListener('click', startAction);
    stopbtn.addEventListener('click', stopAction);
    resetbtn.addEventListener('click', resetAction);
    lapbtn.addEventListener('click', lapAction);




    var settime = document.getElementById('setTimeButton');

    settime.addEventListener('click',function(){
        var hourp = addZeros(prompt('시를입력해주세요'));
        var minp = addZeros(prompt('분을 입력해주세요'));
        var hourA = document.getElementById('hour0');
        var minA = document.getElementById('min0');
        hourA.innerHTML = hourp;
        minA.innerHTML = minp;
        if(hourp == currenthour1 && minp == currentmin1){
            audio.play();
        }

    })
};

document.addEventListener('DOMContentLoaded', init3);
