function getPrime() {
  var number = prompt('숫자를 입력하세요');
  var primeList = '';
  for(var i = 2; i <= number; ++i) {
    var iss = true;
    for(var o = 2; o < i; ++o) {
      if(i%o === 0){
        iss = false;
        break;
      }
    }
    if(iss === true) {
      primeList += i + ',';
    }
  }
  console.log(number + '의 소수는 ' + primeList);
}
      
getPrime();
