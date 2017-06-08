//알람 속 현재시간
setInterval("time()",1000);
function time(){
    var now = new Date();
    hours = now.getHours();
    minutes = now.getMinutes();
    seconds = now.getSeconds();
    
    //오전, 오후 출력
    if (hours >= 12){
        ampm = "pm";
    }else{
        ampm = "am";
    }
    
    if (hours>12){
        hours = hours -12;
    }else if (hours === 0){
        hours =12;
    }
    
    //시,분,초가 10보다 작을 시 0출력
    if (hours < 10){
        hours = "0" + hours;
    }
    if (minutes < 10){
        minutes = "0" + minutes;
    }
    if (seconds < 10){
        seconds = "0" + seconds;
    }
    //화면 출력
    document.getElementById("time").innerHTML= hours + ":" + minutes + ":" + seconds + ampm;
}

//시간 세팅
var setH = 0;
var setM = 0;

function hourA(){
    setH = prompt('시를 입력하세요.');
    document.getElementById("setH").innerHTML= setH;
    
}
function minA(){
    setM = prompt('분을 입력하세요.');
    document.getElementById("setM").innerHTML = setM;
}


//알람 실행부분을 잘 모르겠어서 못했습니다. 죄송합니다.
