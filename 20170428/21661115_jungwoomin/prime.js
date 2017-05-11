function getPrime() {                            //getPrime이라는 함수 생성
  var number = prompt('숫자를 입력하세요');        //입력창을 생성. 입력값은 number라는 변수에 저장.
  var primeList = '';                            //primeList라는 빈 변수 생성.
  for(var i = 2; i <= number; ++i) {             //i라는 변수에 2를 할당하고 i가 number 값보다 작거나 같으면 i를 1씩 증가하며 반복.
    var iss = true;                                         
    for(var o = 2; o < i; ++o) {                 //o라는 변수에 2를 할당하고 o가 i보다 작으면 o값을 1씩 증가하며 반복.
      if(i%o === 0){                             //i값을 o를 나눈 값이 0이면
        iss = false;                             //iss의 값을 false로 하고 
        break;                                   //반복을 멈춘다.
      }
    }
    if(iss === true) {                           //만약 iss 값이 true면
      primeList += i + ',';                      //primeList에 i값을 할당한다.
    }
  }
  alert(number + '의 소수는 ' + primeList);       //입력한 number 값의 소수는 primeList라는 메시지를 출력한다.
}
      
getPrime(); //함수 실행.
