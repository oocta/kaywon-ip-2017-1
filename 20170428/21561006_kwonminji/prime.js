//소수구하기


function getPrime() {
    var number = prompt('숫자를 입력하세요');
    var isPrime = '';
    var prime;
    for (var i = 2; i <= number; i++) {
        prime = true;
        for (var j = 2; j < i; j++) {
            if (i % j == 0) {
                prime = false;
                break;
            }
        }
        if (prime) {
            isPrime = isPrime + ', ' + i;
        }
    }
    console.log(isPrime);
}
