var init = function () {

  var username = document.getElementById('username');
  var userpass = document.getElementById('userpass');
  var login = document.getElementById('login');
  var userDisplay = document.getElementById('userDisplay');
  var counter = document.getElementById('counter');
  var extension = document.getElementById('extension');
  
//1. id를 입력하지 않고 로그인 버튼을 클릭할 경우 "아이디를 입력해주세요" alert 출력
 /* function idnone(){
    if(username.value == false){
      window.aleat('아이디를 입력해주세요.');
    }
  }
  idnone();*/
//2. id는 입력했으나 password를 입력하지 않은 경우 "패스워드를 입력해주세요" alert 출력
  /* function passwordnone(){
    if(userpass.value == false){
      window.aleat('패스워드를 입력해주세요.');
    }
  }
  passwordnone();*/


  function loginAction() {
    if(username.value == false){
      window.alert('아이디를 입력해주세요.');
    } else if (userpass.value == false){
      window.alert('패스워드를 입력해주세요.');
    } else {
      //3. id, 패스워드를 모두 입력시 "로그인 되었습니다" alert 후 section#loginForm 영역은 감춰진다.
      window.alert('로그인 되었습니다.');
      loginForm.style.display = "none";
      //4. 3번 프로세스에서 입력된 id를 div#userDisplay 영역에 자식 노드로 추가한다.
      userDisplay.innerHTML = username.value;
      //4. 4번 프로세스 수행 후 section#loginCounter 영역이 화면에 표시되도록 한다.
      loginCounter.style.display = "block";
    }
  }
  login.addEventListener('click', loginAction);
  
  
//---------------------------------------------------2-----------------------------------------------------------

//1. 최초 페이지 접근 시 5분의 카운트다운이 진행
  
  var countMin = 5;
  var countSec = 0;
  var countInterval;
  
  function addZero (num) { //숫자앞에 0더하는거
    if (num < 10) {
      return '0' + num;
    } else {
      return num;
    }
  }
  
//2. 화면에 진행중인 카운트다운 현황이 표시
  function countDownHandler() {
      countSec = countSec - 1;                        
      if(countSec < 0){                           
        countSec = 59;                      
        countMin = countMin - 1;             
        if(countMin < 0){          
          //4. 5분의 카운트다운이 모두 완료 되면 "로그아웃 되었습니다." alert이 출력된다.
          alert('로그아웃 되었습니다.');     
          clearInterval(countInterval);       
          //5. section#loginCounter 영역은 display:none 처리 되고, 다시 section#loginForm 영역이 표시된다.
          loginForm.style.display = 'block';
          loginCounter.style.display = 'none'; 
          //6. 5번 프로세스 수행시 input 노드 두개의 내용은 모두 초기화 되어야 한다.
          username.value = "";
          userpass.value = "";
        }
      }
      counter.innerHTML = countMin + ':' + addZero(countSec);
    }

  function countDownInterval() {
  countInterval = setInterval(countDownHandler, 1000); 
  }
  countDownInterval();

  
//3. 로그인 연장 버튼을 클릭시 카운트다운 초기화
  function extensionAction(){
    countMin = 5;       
    countSec = 0;       
    counter.innerHTML = countMin + ':' + addZero(countSec);
  }
  extension.addEventListener('click', extensionAction);

  
};
document.addEventListener('DOMContentLoaded', init);
