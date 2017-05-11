//함수선언
function sosu(){
//prompt 출력 - number는 prompt에 쓴걸 담는 변수
  var number = prompt('소수를 입력하세요');
//빈 변수를 담아줌
  var content = '';
  //소수 선언
  var primeFlag;
  //소수는 1과 자기 자신으로 나눠지는것이기 때문에 1은 다나눠져서 안댐
  //prompt에 입력한 값 number 까지 검사
  for(var i=2;i<=number;i++){
    //모든 i는 true인데
    primeFlag=true;
    //2부터 시작하는 number보다 작은 숫자 i중 for문을 사용해서 나머지가 0이되는 숫자 j 찾기
    for(var j=2;j<i;j++) {
      if(i%j==0){
        //자기 자신이 아닌수로 나눴을때 (j는 i보다 작다고 했으니까)나머지가 0이면(나눠지면)소수아니므로 false로 바꾼다.
        primeFlag=false;
        break;
      }
    }
    //소수인 i를 content에 담아줌
    if(primeFlag){
    content=content+', '+i;
    }
  }
  console.log(content);
}




//주석없는 깔끔버전
function sosu(){
  var number = prompt('소수를 입력하세요');
  var content = '';
  var primeFlag;
  for(var i=2;i<=number;i++){
    primeFlag=true;
    for(var j=2;j<i;j++) {
      if(i%j==0){
        primeFlag=false;
        break;
      }
    }
    if(primeFlag){
    content=content+', '+i;
    }
  }
  console.log(content);
}
