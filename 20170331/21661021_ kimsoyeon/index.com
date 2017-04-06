<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Interaction Programming : Week5 - DOM </title>
    <style media="screen">
      .row { display: block; margin: 20px 10px; }
      .col { display: inline-block; margin: 10px 5px; }
      .red { color: red; }
      .blue { color: blue; }
    </style>
  </head>
  <body>
    <h1>회원가입</h1>
    <form id="signin" action="index.html" >
      <div id="row">
        <div class="col">
          <h1 id="title"></h1>
        </div>
      </div>
      <div id="wrapper">
        <div class="row">
          <div class="row">
            <button id="windowSize">윈도우 사이즈 호출!</button>
          </div>
        </div>
        <div class="row">
          <label for="inputId">
            <span>아이디 : </span>
            <input name="inputId" id="inputId" type="text" value="" />
          </label>
        </div>
        <div class="row">
          <label for="inputPassword">
            <span>패스워드 : </span>
            <input name="inputPassword" id="inputPassword" value="" type="password" />
          </label>
        </div>
        <div class="row">
          <div class="col">
            <button id="buttonCancel">취소</button>
          </div>
          <div class="col">
            <button id="buttonSignin">가입</button>
          </div>
          <div class="col">
            <button id="buttonReset">초기화</button>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <ul id="city">
              <li>Seoul</li>
              <li>Tokyo</li>
              <li>beijing</li>
            </ul>
          </div>
        </div>
        <div class="row">
          <button id="addCity">도시 추가하기</button>
        </div>
      </div>
    </form>
    <div class="row">
      <div class="col">
        <button id="goTop">맨 위로 가기</button>
      </div>
    </div>
    <script>

    /*
   1. id가 title인 element에 'Hello World' 문자열이 포함되도록 코드를 작성해주세요.
   */
    var i =document.getElementById('title').innerHTML='Hello World!';
   /*
   2. button#windowSize element를 클릭했을 때 window 컨텐츠 영역의 높이와 넓이를 alert으로 출력하도록 작성해주세요.
   */
    window.onload=function(){
    document.getElementById('windowSize');
    }
    windowSize.onclick= function(){
    var width = window.innerWidth;
    var height =window.innerHeight;
    alert(width);
    alert(height);
    };
   /*
   3. class 속성에 'row'가 포함되어 있는 element의 수를 출력하는 함수를 작성하세요.
   */
    function a(){
    var num = document.getElementByClassName('row');
    return(num.length);
    }
   /*
   4. id 속성의 값이 'inputId'인 element를 찾고 그 value 속성의 값을 출력하는 함수를 작성하세요.
   */
    function b(){
    var inputId = document.getElementById('inputId');
    return(inputId.element.value);
    }
   /*
   5. 10초마다 'check!!' 라는 문자열이 console 창에 출력되도록 코드를 작성해주세요. (console.log 사용)
   */
   var timer = setInterval("console.log('check!!');",10000);
   /*
   6. button#buttonCancel 클릭 시 현재 창이 새로고침 되도록 이벤트를 할당해주세요.
   */
   var bt = document.getElementById('buttonCancel');
   bc.addEventListener('click', function(){
   window.location.reload();
   });
   /*
   7. button#buttonSignin 클릭 시 '정말 가입하시겠습니까?' 라는 메시지를 포함하고 있는 확인 창(confirm)를 출력하고 사용자가 확인을 누를 경우
   '가입을 환영합니다!' 문구가 alert으로 출력되도록 작성해주세요.
   */
    var LogIn = document.getElementById('buttonSignin');
    LogIn.addEventListener('click',function(){
    var sign = confirm('정말 가입을 하시겠습니까?');
    if(sign === true){
    alert('가입을 환영합니다!');
    }
    });
   /*
   8. button#buttonReset 클릭 시 '초기화 하시려면 99 를 입력하세요.' 라는 메시지를 포함하고 있는 prompt를 출력하고, 사용자가 99를 정확하게 입력하면, input#inputId 과 input#inputPassword 두 element의 value 속성이 빈 값으로 초기화하도록 작성해주세요.
   */
    window.onload=function(){
    document.getElementById('buttonReset');
      }
    buttonReset.onclick= function(){
    if (prompt('초기화 하시려면 99 를 입력하세요.') === 99){
    var Id = document.getElementById('inputId');
    var Psword = document.getElementById('inputPassword');
    Id.attributes.value('');
    Psword.attributes.value('');
    }
   }

   /*
   9. button#addCity 버튼을 클릭 시 '도시명을 입력하세요.' 메시지를 담고 있는 prompt를 출력하고, 사용자가 입력한 도시명을 ul#city 하위의 li 엘리먼트로 추가되도록 작성해주세요.
   */
    window.onload=function(){
    document.getElementById('Acity');
    }
    addCity.onclick= function(){
    var a = prompt('도시명을 입력하세요.');
    if (a === true){
    var cityname = document.creatElement('Ct');
    var text = document.createTextNode('Ad');
    document.getElementById('Acity').appendChild(cityname);
    }
   /*
   10. button#goTop 클릭 시 스크롤이 현재 화면의 제일 상단으로 이동하도록 이벤트 핸들러를 할당해주세요.
   */
   var top = document.getElementById('go');
   go.addEventListener('click', function(){
   scrollTo( 0, 0);
   });
   </script>
 </body>
</html>
