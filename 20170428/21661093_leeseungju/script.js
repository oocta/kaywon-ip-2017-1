
//1. 1,2,3,4,5를 클릭한다. test:console.log('plus');
//4. 1,2,3,4,5를 클릭하고 +를 클릭하면 선택한 숫자만큼 counter증가
//4. 1,2,3,4,5를 클릭하고 -를 클릭하면 선택한 숫자만큼 counter감소


var plusBt = document.getElementById('plubt');
var minusBt = document.getElementById('minbt');

plusBt.addEventListener('click', function(){ //플러스버튼을 누르면
  //console.log('plus'); //우선 콘솔로 테스트
   var increment = document.getElementsByName("increment"); 
        //라디오 버튼이 체크되었나 확인하기 위한 변수
        var increment_check = 0;
        for(var i = 0; i<increment.length; i++){
            if(increment[i].checked==true){
                console.log(increment[i].value);
                increment_check++;
            }
        }
});

//아무리 노력을 해도 문제를 이해하고 진행을 하지못하겠습니다.
//위에코드로 라디오버튼을클릭했을대 숫자적용을 이해하겠으나 더하기를 이해하지 못하겠습니다ㅜㅜㅜ
