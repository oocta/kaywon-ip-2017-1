
function PrimeNum() {
    var num = prompt('숫자를 입력하세요');
    var blank = '';
    var primeFlag;
    //소수는 1은 제외하므로 2부터 시작
    for (var a = 2; a <= num; a++) {
        prime = true; //소수인지 아닌지 판별
        for (var b = 2; b < a; b++) {
            if (a % b == 0) { // 1과 num 자신 외에 나누어지는 수가 있는지 검사할 조건문
                prime = false; //소수가 아니다
                break; //불필요한 연산을 줄이기 위한 것
            }
        }
        if (primeFlag) {
            blank = blank + ', ' + a;
        }
    }
    console.log(blank);
    }
