var init = function() {
// 불러온다
var hour = document.getElementById('hour');
var min = document.getElementById('min');
var sec = document.getElementById('sec');
var startbtn = document.getElementById('startButton');
var stopbtn = document.getElementById('stopButton');
var resetbtn = document.getElementById('resetButton');

//시간값 초기화
var hourNumber = 0;
var minNumber = 0;
var secNumber = 0;
//현재 상태값 멈추었는지 움직이는지 체크

//1씩 증가하며 60이 되면 다시 0이되게 한다.
function hourHandler(){
  hourNumber = hourNumber + 1;
  if(hourNumber === 60){
    hourNumber = 0;
  }
  hour.innerHTML = addZero(hourNumber);
}
function minHandler(){
  minNumber = minNumber + 1;
  if(minNumber === 60){
    hourHandler();
    minNumber = 0;
  }
  min.innerHTML = addZero(minNumber);
}
function secHandler(){
  secNumber = secNumber + 1;
  if(secNumber === 60){
    minHandler();
    secNumber = 0;
  }
  sec.innerHTML = addZero(secNumber);
}

//숫자가 10보다 작을 경우 숫자 앞에 0을 붙인다
function addZero(num){
  if(num < 10){
    return '0' + num;
  }
  return num;
}
function intervalhandler(){
  secHandler();
}
var state;

//시작버튼 누르면 작동
var startwatch = function(){
  state = setInterval(intervalhandler, 20);
}
//정지버튼 누르면 작동
var stopwatch = function(){
  clearInterval(state);
}
//리셋버튼을 누르면 작동
var resetwatch = function(){
  hourNumber = 0;
  minNumber = 0;
  secNumber = 0;
  hour.innerHTML = addZero(hourNumber);
  min.innerHTML = addZero(minNumber);
  sec.innerHTML = addZero(secNumber);
  clearInterval(state)
}

startbtn.addEventListener('click', startwatch);
stopbtn.addEventListener('click', stopwatch);
resetbtn.addEventListener('click', resetwatch);
}
document.addEventListener('DOMContentLoaded',init);
