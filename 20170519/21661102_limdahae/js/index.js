
function nowTime() {
    var time = new Date();
        hours = time.getHours();
        minutes = time.getMinutes();
        seconds = time.getSeconds();
    
    //AM , PM 설정
    if(hours >= 12){
        meridiem = "PM";
    }else{
        meridiem = "AM";
    }
    
    
    //12시간 넘으면 다시 0부터 시작하는건데 pm,am있으니까 넣어야함
    if (hours>12){
        hours = hours -12;
    }else if (hours === 0){
        hours =12;
    }
    
    //분이 10이하면 앞에 0을 붙인다.아니면 말고
    if (minutes<10){
        minutes = "0" + minutes;
    }else{
        minutes = minutes;
    }
    
    if(seconds<10){
        seconds = "0" + seconds;
    }else{
        seconds = seconds;
    }
    
    document.getElementById("nowTime").innerHTML = (hours+":"+minutes+":"+seconds + meridiem);
}

setInterval('nowTime()',1000);
