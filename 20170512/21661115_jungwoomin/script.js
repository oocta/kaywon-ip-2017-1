var init = function () {
    var hour = document.getElementById('hour');
    var min = document.getElementById('min');
    var sec = document.getElementById('sec');
    var timeNum = document.getElementById('timeNum');
    var hourNumber = 0;
    var minNumber = 0;
    var secNumber = 0;
    var timeNumber = 0;
    
    function addZero (num) {
        if (num < 10) {
            return '0' + num;
        } else {
            return num;
        }
    }
    
    function hourHandler () {
        hour.innerHTML = addZero(hourNumber);
    }
    
    function minHandler () {
        if (minNumber === 60) {
            hourNumber = hourNumber + 1;
            hourHandler();
            minNumber = 0;
        }
        min.innerHTML = addZero(minNumber);
    }
    
    function secHandler () {
        if (secNumber === 60) {
            minNumber = minNumber + 1;
            minHandler();
            secNumber = 0;
        }
        sec.innerHTML = addZero(secNumber);
    }
    
    function timeNumHandler () {
        timeNumber = timeNumber + 1;
        if (timeNumber === 100) {
            secNumber = secNumber + 1;
            secHandler();
            timeNumber = 0;
        }
        timeNum.innerHTML = addZero(timeNumber);
    }
    
    function intervalHandler () {
        timeNumHandler();
    }
    
    hourHandler();
    minHandler();
    setInterval(intervalHandler, 10);
};



document.addEventListener('DOMContentLoaded', init);
