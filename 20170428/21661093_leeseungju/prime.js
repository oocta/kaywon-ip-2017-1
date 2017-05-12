function getPrime() {                            
  var number = prompt('숫자를 입력하세요');        
  var primeList = '';                            
  var prime;
  for(var a = 2; a <= number; ++a) {             //a에게 2인데, a가 number보다 작거나 같으면, a는 1씩 증가
    prime = true;                                         
    for(var b = 2; b < a; ++b) {                 //b에게 2인데, b가 a보다 작으면, b는 1씩 증가
      if(a%b === 0){                             //만을 a를b로 나눈값이 0이면
        prime = false;                             //거짓
        break;                                   //그대로 멈춰라
      }
    }
    if(prime === true) {                           //만약 true라면
      primeList += a + ',';                      //primeList는 a,
    }
  }
  alert(number + '의 소수는 ' + primeList);       //입력한 mumber의 소수는 primeList이다.
}
      
getPrime(); 
