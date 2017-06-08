    var status = 0;
    var time = 0;
    var hour = 0;
    var min = 0;
    var sec = 0;
    var mSec = 0;
                 
    function start(){
        status = 1;
        document.getElementById("button-start").disabled = true;
        timer();
    }
    function stop(){
        status = 0;
        document.getElementById("button-start").disabled = false;
    }
    function reset(){
        status = 0;
        time = 0;
        setTimeout(function () {
            document.getElementById('timer-s').innerHTML = '00:00:00.00';
            document.getElementById("button-start").disabled = false;
            document.getElementById('lap').innerHTML = '';
        }, 10);
        
    }
    function lap(){
        if(status == 1){
            var lap =  document.getElementById('lap');
            var li = document.createElement('li');
            li.innerHTML =  hour + ":" + min + ":" + sec + ":" + mSec;
            lap.appendChild(li)
        }
        
    }
     function timer(){
        if(status == 1){
            setTimeout(function(){
                time++;
                 hour = Math.floor(time/100/60/60);
                 min = Math.floor(time/100/60);
                 sec = Math.floor(time/100);
                 mSec = time % 100;
                
                if (hour < 10) {
                    hour = "0" + hour;
                }
                if (min >= 60) {
                    min = min % 60;
                }
                if(min < 10) {
                    min = "0" + min;
                }
                if(sec >= 60) {
                    sec = sec % 60;
                }
                if(sec < 10) {
                    sec = "0" + sec;
                }
                if(mSec <10) {
                    mSec = "0" + mSec
                }
                 
                document.getElementById('timer-s').innerHTML = hour + ":" + min + ":" + sec + "." + mSec;
                timer();
            }, 10);
        }
    }
