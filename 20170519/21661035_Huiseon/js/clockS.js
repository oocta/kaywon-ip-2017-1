
//로컬
  var init = function () {
  var hour =document.getElementById('hour');
  var min =document.getElementById('min');
  var sec =document.getElementById('sec');
  var msec =document.getElementById('msec');
//시시 분분 초초 제어

  var startBT = document.getElementById('startButton');
  var stopBT= document.getElementById('stopButton');
  var resetBT = document.getElementById('resetButton');
  var lapBT = document.getElementById('lapButton');
  //제어하려는 버튼 불러오기
  var lapul = document.getElementById('laplist');

  var hourNumber = 0;
  var minNumber = 0;
  var secNumber = 0;
  var msecNumber = 0;
  //처음값 0

  var secInterval;
  //세트인터블을 담을 곳
  var isRunning = false;
  //초시계가 작동중인지 체크하는 함수

  function startInterval() {
    msecNumber++;
    if (msecNumber >59) {
      msecNumber = 0;
      secNumber++;
      if (secNumber > 59) {
        secNumber = 0;
        minNumber++;
        if (minNumber >59) {
          minNumber = 0;
          hourNumber++;
          hour.innerHTML = addZero(hourNumber);
        }
        min.innerHTML = addZero(minNumber);
      }
      sec.innerHTML = addZero(secNumber);
    }
    msec.innerHTML = addZero(msecNumber);
  }
//실행-------------------------------------------------------
  // 숫자두개 00
  function addZero(num) {
    if (num < 10) {
      return '0'+ num;
    }
    return num;
  }



  //시작버튼
  function startAction() {
    if (isRunning === false) {
      //이즈러닝이 false일때 아래를 실행하라
      secInterval = setInterval(startInterval, 50);
      isRunning = true;
      //실행중에는 이즈러닝을 true로 맹근다
    }
  }

  //멈춤버튼
  function stopAction() {
    clearInterval(secInterval);
    isRunning = false;
  //멈추면 다시 초기화 시켜준다
  }

  //리셋버튼
  function resetAction() {
    //stopAction();
    clearInterval(secInterval);
    isRunning = false;
    msecNumber = 0;
    secNumber = 0;
    minNumber = 0;
    hourNumber = 0;
    hour.innerHTML = addZero(hourNumber);
    min.innerHTML = addZero(minNumber);
    sec.innerHTML = addZero(secNumber);
    msec.innerHTML = addZero(msecNumber);
  }

  //랩버튼
  function lapAction(){
    var lapli = document.createElement('li');
    var lapText = document.createTextNode(
      addZero(hourNumber) + ':' +
      addZero(minNumber) + ':' +
      addZero(secNumber) + ':' +
      addZero(msecNumber)
    );
    if(isRunning === true){
      lapli.appendChild(lapText);
      lapul.appendChild(lapli);
    }
  }

  startBT.addEventListener('click',startAction);
  stopBT.addEventListener('click',stopAction);
  resetBT.addEventListener('click',resetAction);
  lapBT.addEventListener('click',lapAction);

};

document.addEventListener('DOMContentLoaded',init);


//숫자랑 함수줄이기까지 성공한 최종본
