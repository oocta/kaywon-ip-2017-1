var init = function() {
  /*
  Requirement
  #1 로그인 처리 = 총 10점
  1. id를 입력하지 않고 로그인 버튼을 클릭할 경우 "아이디를 입력해주세요" alert 출력
  2. id는 입력했으나 password를 입력하지 않은 경우 "패스워드를 입력해주세요" alert 출력
  3. id, 패스워드를 모두 입력시 "로그인 되었습니다" alert 후 section#loginForm 영역은 감춰진다.
  4. 3번 프로세스에서 입력된 id를 div#userDisplay 영역에 자식 노드로 추가한다.
  4. 4번 프로세스 수행 후 section#loginCounter 영역이 화면에 표시되도록 한다. */

  var username = document.getElementById('username');
  var userpass = document.getElementById('userpass');
  var loginForm = document.getElementById('loginForm');
  var loginCounter = document.getElementById('loginCounter');
  var userDisplay = document.getElementById('userDisplay');
  
  function logInProcess() {
    if(username.value != false) {       //username의 값이 있을 경우
      if(userpass.value != false) {     //userpass의 값이 있을 경우
        alert('로그인 되었습니다.');       //로그인 되었다는 창이 뜬다.
        loginForm.style.display = "none"; //로그인폼은 숨기고
        userDisplay.innerHTML = username.value; //userDisplay에 username의 value값을 넣는다.
        loginCounter.style.display = "inline-block"; //그리고 loginCounter를 보이게 한다.
        countDownInterval();
      } else {                            //userpass의 값이 없을 경우
        alert('패스워드를 입력해주세요.');    //패스워드를 입력하라는 창이 뜬다.
      }
    } else {                              //username의 값이 없을 경우
      alert('아이디를 입력해주세요.');        //아이디를 입력하라는 창이 뜬다.
    }
  }
  
  var login = document.getElementById('login');
  
  login.addEventListener('click', logInProcess);    //로그인 버튼을 누르면 함수 실행.

  /*
  #2 로그인 연장 로직 = 총 15점
  1. 최초 페이지 접근 시 5분의 카운트다운이 진행
  2. 화면에 진행중인 카운트다운 현황이 표시
  3. 로그인 연장 버튼을 클릭시 카운트다운 초기화
  4. 5분의 카운트다운이 모두 완료 되면 "로그아웃 되었습니다." alert이 출력된다.
  5. section#loginCounter 영역은 display:none 처리 되고, 다시 section#loginForm 영역이 표시된다.
  6. 5번 프로세스 수행시 input 노드 두개의 내용은 모두 초기화 되어야 한다.
  * 두 항목 모두 기본점수 2점이 주어집니다. 각 항목의 구현정도에 따라 가산점이 주어지고,
  동점자 및 등급 우열이 어려울 경우 13주차 과제의 완성도를 기준으로 가중치를 판단하여, 우열을 가립니다.
  참고 바랍니다.
  */
  
  var counter = document.getElementById('counter');
  var cntMin = 5;
  var cntSec = 0;
  
  function addZero (num) {
    if (num < 10) {
      return '0' + num;
    } else {
      return num;
    }
  }
  
  //카운터 다운
  function countDownHandler() {
    cntSec = cntSec - 1;                          //cntSec의 값을 1씩 감소시킨다.
    if(cntSec < 0){                             //만약 cntSec의 값이 0보다 작아지면
      cntSec = 59;                      //cntSec을 59로 바꾸고
      cntMin = cntMin - 1;              //cntMin의 값을 1 감소시킨다.
      if(cntMin < 0){                   //만약 cntMin의 값이 0보다 작아지면
        alert('로그아웃 되었습니다.');     //로그아웃되었다는 창이 뜨고
        cntMin = 5;                     //초와 분 값이 초기화되며
        cntSec = 0;
        clearInterval(cntInterval);       //타이머는 멈추고
        loginForm.style.display = 'inline-block'; //loginForm이 보이고
        loginCounter.style.display = 'none'; //loginCounter는 숨긴다.
      }
    }
    counter.innerHTML = cntMin + ':' + addZero(cntSec);
  }
  
  var cntInterval;
  
  function countDownInterval() {
    cntInterval = setInterval(countDownHandler, 1000); //1초마다 실행
  }

  //로그인 연장
  function extensionTime() {
    cntMin = 5;       //cntMin의 값을 5로
    cntSec = 0;       //cntSec의 값을 0으로 초기화
    counter.innerHTML = cntMin + ':' + addZero(cntSec);
  }
  
  var extension = document.getElementById('extension');
  
  extension.addEventListener('click', extensionTime);
  
};


document.addEventListener('DOMContentLoaded', init);
