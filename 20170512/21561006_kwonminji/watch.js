//초시계 만들기

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
    hour.innerHTML = addZero(hourNumber);
  }

  function minHandler() {
    minNumber = minNumber + 1;
    if (minNumber === 60) {
      hourHandler();//60분마다 실행
      minNumber = 0;//0으로
    }
    min.innerHTML = addZero(minNumber);
  }

  function secHandler() {
    secNumber = secNumber + 1;
    if (secNumber === 60) {
      minHandler();//secNumber가 60이 될때마다 실행
      secNumber = 0;//0으로
    }
    sec.innerHTML = addZero(secNumber);
  }

  //num 변수를 통해 전달된 숫자 길이가 1인 경우 0을 붙여주는 함수
  //실제 값을 대입하는 시점에 함수 추가 하면 됨
  function addZero (num) {
    if (num < 10) {
      return '0' + num;
    }
    return num;
  }

  //특정 주기마다 실행할 코드 담을 것
  function intervalHandler() {
    secHandler();
  }

  setInterval(intervalHandler, 1000);

};

//DOM엘리먼트의 콘텐츠들이 다 로드 됐을 때 init 실행
document.addEventListener('DOMContentLoaded', init)
