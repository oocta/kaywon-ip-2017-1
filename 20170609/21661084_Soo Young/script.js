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


/* 1 */

   function Login()
   {
           var form = document.form1;

                  //아이디에서 입력 필수 조건문
                  if (form.username.value == "")
                  {
                          alert("아이디를 입력해야 합니다!");
                          form.username.focus();//포커스를 id박스로 이동.
                          return;
                  }

                  //아이디 입력 문자수를 4~12자로 제한하는 조건문

                  if (form.username.value.length < 4 || form.username.value.length > 12)
                  {
                   alert("아이디는 4~12자 이내로 입력 가능합니다!");

                   form.username.select();//입력한 문자를 선택 상태로 만듬.
                   return;
                  }

            //입력된 문자의 길이만큼 루프를 돌면서 검사 

            for (i = 0; i<form.username.value.length; i++)
            {
                   var ch = form.username.value.charAt(i);//문자를 반환(정수형), 범위 검사 가능

                   //입력된 문자를 검사

                   if ( ( ch < "a" || ch > "z") && (ch < "A" || ch > "Z") && (ch < "0" || ch > "9" ) )
                   {
                    alert("아이디는 영문 소문자로만 입력 가능 합니다!");
                    form.username.select();
                    return;
                   }
            }

            //입력된 첫번째 문자가 숫자인지 검사하는 조건문

            if (!isNaN(form.username.value.substr(0,1)))

            {
                 alert("아이디는 숫자로 시작할 수 없습니다!");
                 form.username.select();
                 return;
            }

 

//패스워드 검사 -------------------------------------------------------------------------

            if (form.userpass.value == "")
            {
                 alert("패스워드를 입력 해야 합니다!");
                 form.userpass.focus();//포커스를 Password박스로 이동.
                 return;
            }

 

            if (form.userpass.value.length < 4 || form.userpass.value.length > 12)
            {
                 alert("비밀번호는 4~12자 이내로 입력 가능 합니다!");

                 form.userpass.select();
                 return;
            }

    form.submit(alert('로그인 완료'));
}




        var SetTime = 300;		// 최초 설정 시간(기본 : 초)

		function msg_time() {	// 1초씩 카운트
			
			m = Math.floor(SetTime / 60) + "분 " + (SetTime % 60) + "초";	// 남은 시간 계산
			
			var msg = "현재 남은 시간은 <font color='red'>" + m + "</font> 입니다.";
			
			document.all.counter.innerHTML = msg;		// div 영역에 보여줌 
					
			SetTime--;					// 1초씩 감소
			
          var count = document.getElementById('extension');
          
			if (SetTime > 0) {	
                
				count.addEventListener('click',function(){
                  
                  
                  
                });
			}else if(SetTime < 0){
              clearInterval(tid);		// 타이머 해제
				alert("로그아웃");
              
            }
			
		}

		window.onload = function TimerStart(){ tid = setInterval('msg_time()',1000) };



/**/




document.addEventListener('DOMContentLoaded', Login);