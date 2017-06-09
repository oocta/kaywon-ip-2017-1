var init = function(){ //document load

var form1 = document.getElementById('loginForm');
var form2 = document.getElementById('loginCounter');
var userDisplay = document.getElementById('userDisplay');
var loginBtn = document.getElementById('login');
var exBtn = document.getElementById('extension');
var secNum = 0;
var minNum = 5;

function addZero(num) {
    if (num < 10) {
        return '0' + num;
    }
    return num;
}
var input = function() {
    var name = document.getElementById('username').value;
    var pass = document.getElementById('userpass').value;
    if (name == '') {
        alert('아이디를 입력해주세요');
    } else if (pass == '') {
        alert('패스워드를 입력해주세요');
    } else {
        alert(name +'님 로그인 되었습니다');
        nextPhase(name);
    }
}
var nextPhase = function(id) {
    var counter = document.getElementById('counter');
    form1.style.display = 'none';
    form2.style.display = 'block';
    userDisplay.innerHTML = id + '님 환영합니다~ ٩(๑❛ᴗ❛๑)۶';
    var secTime = function() {
        exBtn.addEventListener('click', function() {
                secNum = 0;
                minNum = 5;
                counter.innerHTML = (minNum + ':') + (addZero(secNum) + '');
            })
            --secNum;
        if (secNum < 0) {
            console.log('0이다!!');
            secNum = 59;
            minTime();
        }
        console.log(minNum, secNum);
        counter.innerHTML = (minNum + ':') + (addZero(secNum) + '');
    }
    var minTime = function() {
        --minNum;
        if (minNum < 0) {
            clearInterval(startInterval);
            prevPhase();
            alert('자동 로그아웃 처리 되었습니다.');
            secNum = 0;
            minNum = 5;
            var name2 = document.getElementById('username');
            var pass2 = document.getElementById('userpass');
            name2.value = '';
            pass2.value = '';
        }
    }
    var startInterval = setInterval(secTime, 1000);
}
var prevPhase = function() {
    form1.style.display = 'block';
    form2.style.display = 'none';
}
loginBtn.addEventListener('click', function() {
    input();
});

} //init
document.addEventListener('DOMContentLoaded',init);
