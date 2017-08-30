var  init1 = function(){
    var login = document.getElementById('login');

    function nullvalue(){
        var username = document.getElementById('username').value;
        var userpass = document.getElementById('userpass').value;
        if(username == ''){
            alert('아이디를 입력하세요')
        }
        else if(userpass == ''){
            alert('패스워드를 입력하세요')
        }
        else{
            alert('로그인 되었습니다')
            document.getElementById('loginForm').style.display="none";
            document.getElementById('loginCounter').style.display="block";
            userDisplay.innerHTML = username;
        }
    }
    function countstart(){
        var counter = document.getElementById('counter');
    }


    login.addEventListener('click', nullvalue);
}
document.addEventListener('DOMContentLoaded', init1);
