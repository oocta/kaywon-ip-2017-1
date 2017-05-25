var initL = function () {
  var hourL =document.getElementById('hourL');
  var minL =document.getElementById('minL');
  var secL =document.getElementById('secL');
//시시 분분 초초 제어
  var time;

  function intervalHandler() {
    time = new Date();
    hourL.innerHTML = time.getHours();
    minL.innerHTML = time.getMinutes();
    secL.innerHTML = time.getSeconds();
  }
  intervalHandler();
  setInterval(intervalHandler,1000);
};
document.addEventListener('DOMContentLoaded',initL);

//로컬

var initS = function () {
  var hourS =document.getElementById('hourS');
  var minS =document.getElementById('minS');
  var secS =document.getElementById('secS');
//시시 분분 초초 제어
  var startBT = document.getElementById('startButton');
  var stopBT= document.getElementById('stopButton');
  var resetBT = document.getElementById('resetButton');
//제어하려는 버튼 불러오기

  var hourSNumber = 0;
  var minSNumber = 0;
  var secSNumber = 0;
//처음값 0
  var secSInterval;
//세트인터블을 담을 곳
  var isRunning = false;
//초시계가 작동중인지 체크하는 함수

  function startInterval() {
    secSNumber++;
    if (secSNumber > 59) {
      secSNumber = 0;
      minSNumber++;
      if (minSNumber >59) {
        minSNumber = 0;
        hourSNumber++;
        hourS.innerHTML = hourSNumber;
      }
      minS.innerHTML = minSNumber;
    }
    secS.innerHTML = secSNumber;
  }
//start 버튼 클릭시 실행되는 setInterval 함수

  function startAction() {
    if (isRunning === false) {
      //이즈러닝이 false일때 아래를 실행하라
      secSInterval = setInterval(startInterval, 1000);
      isRunning = true;
      //실행중에는 이즈러닝을 true로 맹근다
    }
  }
//스타트 버튼 클릭시 실행

  function stopAction() {
    clearInterval(secSInterval);
    isRunning = false;
//멈추면 다시 초기화 시켜준다
  }
//스탑 버튼 클릭시 실행

  function resetAction() {
    //stopAction();
    clearInterval(secSInterval);
    secSNumber = 0;
    secS.innerHTML = secSNumber;
    minSNumber = 0;
    minS.innerHTML = minSNumber;
    hourSNumber = 0;
    hourS.innerHTML = hourSNumber;
  }
//setInterval(주기적으로 실행할 함수, 실행주기);



  startBT.addEventListener('click',startAction);
  stopBT.addEventListener('click',stopAction);
  resetBT.addEventListener('click',resetAction);

};
document.addEventListener('DOMContentLoaded',initS);

//초
