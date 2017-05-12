/*소수 구하기 */

    var primeN;
    for (var i = 2; i <= 100; i++) {
      primeN = true;
      for (var j = 2; j < i; j++) {


        if (i % j == 0) {
          primeN = false;
          break;
        }
      }// 짝수로 떨어지는거 false처리


      if (primeN) {
        document.write(i + ", ");
      }//나머지 (소수)만 불러준다
    }
