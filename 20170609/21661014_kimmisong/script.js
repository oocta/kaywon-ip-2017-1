/*
Requirement
#1 로그인 처리 = 총 10점
1. id를 입력하지 않고 로그인 버튼을 클릭할 경우 "아이디를 입력해주세요" alert 출력
2. id는 입력했으나 password를 입력하지 않은 경우 "패스워드를 입력해주세요" alert 출력
3. id, 패스워드를 모두 입력시 "로그인 되었습니다" alert 후 section#loginForm 영역은 감춰진다.
4. 3번 프로세스에서 입력된 id를 div#userDisplay 영역에 자식 노드로 추가한다.
4. 4번 프로세스 수행 후 section#loginCounter 영역이 화면에 표시되도록 한다.

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
var init = function(){
  var login = document.getElementById('login');
  var loginForm = document.getElementById('loginForm');
  var userDisplay = document.getElementById('userDisplay');
  var loginCounter = document.getElementById('loginCounter');
  var counter = document.getElementById('counter');
  var extension = document.getElementById('extension');
  var id;
  var pass;
  var counterM = 5;
  var counteS = 0;


  var idck = function() {
    id = document.getElementById('username').value;
    pass = document.getElementById('userpass').value;
    if (id === '' ){
      alert('ID를 입력해주세요.');
    } else if(pass === ''){
      alert('패스워드를 입력해주세요.');
    }else {
        alert('로그인 되었습니다.');
        loginForm.style.display = 'none';
        loginCounter.style.display ='inline-block'

        var li = document.createElement('li');
        li.innerHTML = id
        userDisplay.appendChild(li);
         setInterval(count, 1000);
      //serDisplay.innerHTML = id;
    }
  }
 login.addEventListener('click', idck);

 function count(){
   counteS--
    if (counteS <= 0){
      counteS = 59;
      counterM--;
    }else if (counteS === 0 && counterM === 0) {
      alert('로그아웃 되었습니다.');
      loginForm.style.display = 'inline-block';
      loginCounter.style.display = 'none';
      clearInterval(setInterval);
      id = '';
      pass = '';
    }
  counter.innerHTML = counterM + ':' + counteS;
}
  var exten = function(){
  counterM = 5;
  counteS = 0;
  counter.innerHTML = counterM + ':' + counteS;
}
 extension.addEventListener('click', exten);

}
document.addEventListener('DOMContentLoaded', init);
