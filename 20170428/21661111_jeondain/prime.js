function getprimenumber() {
    var number = prompt('숫자를 입력하세요');
    var list = '';
    var primeNum;
    //약수가 1과 자기 자신 뿐인 수 = 소수
    for (var i = 2; i <= number; i++) {
        primeNum = true;
        for (var j = 2; j < i; j++) {
            if (i % j == 0) {
                primeNum = false;
                // 불필요한 반복을 줄일 수 있다.
                break;
            }
        }
        if (primeNum) {
            list = list + ', ' + i;
        }
    }
    console.log(list);
}
/*알고리즘-약수가 1과 자신뿐인 것을 확인해야 한다. 자기자신보다 작은수를 나누어서 하나라도 나누어지면 소수X
..죄송합니다 교수님.. 이것저것 찾아도 보고 언니오빠들 과제들도 읽어봤는데 이해가 잘 안됩니다..
알고리즘은 이해를 했는데 아무 정보없이 그냥 다시 써보면 계속오류가 뜹니다.더 공부해 가겠습니다.*/
