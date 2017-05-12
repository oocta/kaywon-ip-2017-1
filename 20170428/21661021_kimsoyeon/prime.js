//소수 구하기

function getnumber() {
    var number = prompt('숫자를 입력하세요');
    var list = '';
    var primeNum;
    for (var i = 2; i <= number; i++) {
        primeNum = true;
        for (var j = 2; j < i; j++) {
            if (i % j == 0) {
                primeNum = false;
                break;
            }
        }
        if (primeNum) {
            list = list + ', ' + i;
        }
    }
    console.log(list);
}

//for 부분이 왜 j와 i가 2인지 이해가 잘 되지 않습니다.
