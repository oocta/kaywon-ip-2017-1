// 안녕하세요 교수님 질문드릴게있습니다ㅠㅠ
// setInterval을 함수에 내장시켜서 함수화 시킨다음 작동시키면
// clearInterval 단계가 제대로 실행되지가 않습니다
// 맨밑에 헷갈리는 해당내용써보았습니다 감사합니다

//전체 문서내용
var init = function(){
console.log('START : 1페이즈');
console.log('STOP : 2페이즈');
console.log('RESET과 시작은 0페이즈');

//도큐먼트 선택
var $hour = document.getElementById('hour');
var $min = document.getElementById('min');
var $sec = document.getElementById('sec');
var $startBtn = document.getElementById('startButton');
var $stopBtn = document.getElementById('stopButton');
var $resetBtn = document.getElementById('resetButton');
var $notice = document.getElementById('notice');

//시 분 초 값
var hourNumber = 0;
var minNumber = 0;
var secNumber = 0;

//상황분별값
var phase = 0;

//hour 에 값을 더해주고 문서 출력
function hourHandler(){
  $hour.innerHTML = hourNumber;
  console.log('hour');
  hourNumber = hourNumber + 1;
  $hour.innerHTML = addZero(hourNumber);
}

//minNumber에 값을 더해주고 문서출력
//값이 60이되면 0으로 바꾸고 hourHandler한번 실행
function minHandler(){
  $min.innerHTML = minNumber;
  console.log('min');
  minNumber = minNumber + 1;
  if(minNumber === 60){
    hourHandler();
    minNumber = 0;
  }
  $min.innerHTML = addZero(minNumber);
}

//secNumber에 값을 더해주고 문서출력
//값이 60이되면 0으로 바꾸고 minHandler한번 실행
function secHandler(){
  if(phase === 1){
    $sec.innerHTML = secNumber;
    console.log('sec');
    secNumber = secNumber + 1;
    if(secNumber === 60){
      minHandler();
      secNumber = 0;
    }
    $sec.innerHTML = addZero(secNumber);
  }else{
    clearInterval(intervalHandler);
  }
}

//secNumber, minNumber, hourNumber 가 한자리수라면 앞에 0을 더해주는 함수.
function addZero(num){
  if(num < 10){
     return '0' + num;
  }
  return num;
}

// 인터벌이 걸린 함수 (1초마다 secHandler실행)
var intervalHandler = function(){
  secHandler();
}

//인터벌 그자체
setInterval(intervalHandler,16.666666);

//시작버튼을 눌렀다면 셋인터벌!
var startTime = function(){
  if(phase === 1){
    $notice.innerHTML = '이미 스톱워치가 작동중입니다!';
  }else if(phase === 2){
    $notice.innerHTML = '다시 스톱워치가 돌아갑니다.';
  }else{
    $notice.innerHTML = '스톱워치가 돌아갑니다.';
  }
  phase = 1;
  console.log(phase + ' 페이즈로!');
  console.log('START!!!');
}

//스톱을 눌렀다면 멈춰야지!
var stopTime = function(){
  if(phase === 1){
    $notice.innerHTML = '스톱워치를 일시중지 합니다.'
    phase = 2;
  }else if(phase === 0){
    $notice.innerHTML = '스톱워치가 작동중이 아닙니다. START를 눌러주세요.'
    phase = 0;
  }else if(phase === 2){
    $notice.innerHTML = '이미 일시중지된 상태입니다. START를 누르면 다시 작동됩니다.'
  }
  console.log(phase + ' 페이즈로!');
  console.log('--- STOP ---');
}

//리셋버튼을 눌렀다면 리셋 (클리어인터벌 x)
var resetTime = function(){
  if(phase === 0){
    $notice.innerHTML = '이미 리셋 상태입니다. START를 눌러주세요.';
  }
  else{
    $notice.innerHTML = '스톱워치가 초기화 되었습니다.';
  }
  phase = 0 ;
  console.log(phase + ' 페이즈로!');
  console.log('~~~ RESET ~~~');
  secNumber = 0;
  minNumber = 0;
  hourNumber = 0;
  $sec.innerHTML = addZero(0);
  $min.innerHTML = addZero(0);
  $hour.innerHTML = addZero(0);
}

//각 버튼을 누르면 각 버튼의 함수실행
$startBtn.addEventListener('click',startTime);
$resetBtn.addEventListener('click',resetTime);
$stopBtn.addEventListener('click',stopTime);

} //init

//문서 실행
document.addEventListener('DOMContentLoaded',init);




// 테스트
// var test1 = setInterval(function(){
//   console.log(123);
// },100)
//
// var c1 = function(){
//   clearInterval(test1);
// }
//이건 작동이 됩니다


// var test2 = function(){
//   var con = setInterval(function(){
//     console.log(123);
//   },100);
// }
// test2();
// var c2 = function(){
//   clearInterval(test2);
// }
//이건 작동이 안됩니다..

