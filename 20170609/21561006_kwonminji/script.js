/*
Requirement
#1 로그인 처리 = 총 10점
1. id를 입력하지 않고 로그인 버튼을 클릭할 경우 "아이디를 입력해주세요" alert 출력
2. id는 입력했으나 password를 입력하지 않은 경우 "패스워드를 입력해주세요" alert 출력
3. id, 패스워드를 모두 입력시 "로그인 되었습니다" alert 후 section#loginForm 영역은 감춰진다.

loginform.style.display="none";
4. 3번 프로세스에서 입력된 id를 div#userDisplay 영역에 자식 노드로 추가한다.
innerHTML = useid
4. 4번 프로세스 수행 후 section#loginCounter 영역이 화면에 표시되도록 한다.
*/

var init = function() {
  var loginform = document.getElementById('loginForm');
  var logincount = document.getElementById('loginCounter');
  var idis = document.getElementById('username');
  var pwis = document.getElementById('userpass');
  var displayid = document.getElementById('userDisplay');
  var btn = document.getElementById('login');
  var extensionBtn = document.getElementById('extension');
  var countbox = document.getElementById('counter');
  var fiveMinutes = 60 * 5;
  var timer2;
  var minutes;
  var seconds;


    function check(){
      if(idis.value == ''){
        alert('아이디를 입력해주세요');
        idis.focus();
        return;
      }if(pwis.value == ''){
        alert('패스워드를 입력해주세요');
        pwis.focus();
        return;
      }if(idis.value !== '' && pwis.value !== ''){
        alert('로그인 되었습니다');
        timer2 = startTimer(fiveMinutes, countbox);
        loginform.style.display="none";
        logincount.style.display="block";
        displayid.innerHTML = idis.value;
      }
    }

    function startTimer(duration, display) {
        var timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes ? + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            countbox.innerHTML = minutes + ":" + seconds;
            if (--timer < 0) {
              alert('로그아웃 되었습니다.');
              timer2 = duration;
              loginform.style.display="block";
              logincount.style.display="none";
              displayid.innerHTML ='';
              idis.value = '';
              pwis.value = '';
            }
          }, 1000)
        }

        function resetTimer() {
        	clearInterval(timer2);
          minutes = '';
          seconds = '';
          timer = '';
        	timer2 = startTimer(fiveMinutes, countbox);
        }


  btn.addEventListener('click', check);
  extensionBtn.addEventListener('click', resetTimer);
}

document.addEventListener('DOMContentLoaded', init);
/*
완료되면 로그인 폼 없어지고 연장 보이게
로그인시 5분부터 카운트
오분이 다되면 로그아웃되었습니다 얼럿
그리고 폼 나오게 : 이때 전에 적은 내용은 초기화되어있어야함

#2 로그인 연장 로직 = 총 15점
1. 최초 페이지 접근 시 5분의 카운트다운이 진행
2. 화면에 진행중인 카운트다운 현황이 표시
3. 로그인 연장 버튼을 클릭시 카운트다운 초기화
extensionBtn.addEventListener('click', resetTime)
4. 5분의 카운트다운이 모두 완료 되면 "로그아웃 되었습니다." alert이 출력된다.
5. section#loginCounter 영역은 display:none 처리 되고, 다시 section#loginForm 영역이 표시된다.
6. 5번 프로세스 수행시 input 노드 두개의 내용은 모두 초기화 되어야 한다.

* 두 항목 모두 기본점수 2점이 주어집니다. 각 항목의 구현정도에 따라 가산점이 주어지고,
동점자 및 등급 우열이 어려울 경우 13주차 과제의 완성도를 기준으로 가중치를 판단하여, 우열을 가립니다.
참고 바랍니다.
*/
