//var init = function() {} 시작
//1. 시, 분, 초 id 가져오는 변수 지정
//2. 시, 분, 초 안에 들어갈 내용 변수 지정
//3. 각 핸들러 함수 만들기
//<내용 변수 + 1; 시분초 id 변수에 내용 추가하기 위해 innerHTML 만들기
//4. 초 -> 분 -> 시 올라갈 수 있게 if문 추가
//5.


//참고
//init 함수 적기
//document.addEventListener('DOMContentLoaded', init) 적기
//스크립트 제대로 불러와지는지 확인
//element 가져오고 제대로 가져오는지 확인해보기
//각 세가지 엘리먼트를 담당해주는 기능 세개 만들기
//가장 작은 단위부터 제어 순서
//초기 변수명 string은 html 내 그대로 가져온다고 생각해서 -> 숫자로 변환해야 함


var init = function () {
  var hour = document.getElementById('hour');
  var min = document.getElementById('min');
  var sec = document.getElementById('sec');

  var hourNumber = 0;
  var minNumber = 0;
  var secNumber = 0;

  function hourHandler() {
    hourNumber = hourNumber + 1;
    hour.innerHTML = hourNumber;
  }

  function minHandler() {
    minNumber = minNumber + 1;
    min.innerHTML = minNumber;
    if(minNumber === 60){
      hourHandler();
      minNumber = 0;
    }
  }

  function secHandler() {
    secNumber = secNumber + 1;
    sec.innerHTML = secNumber;
    if(secNumbr === 60){
      minHandler();
      secNumber = 0;
    }
  }

}


document.addEventListener('DOMContentLoaded', init)
