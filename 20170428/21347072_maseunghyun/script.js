//시간내서 코드 줄여보갰습니다 ㅠ.ㅠ


// 선택
var $counter = document.getElementsByClassName('counter');
var $radios = document.getElementsByClassName('increment');
var $plus = document.getElementById('plus');
var $minus = document.getElementById('minus');
var radio1 = $radios[0].childNodes[1];
var radio2 = $radios[0].childNodes[3];
var radio3 = $radios[0].childNodes[5];
var radio4 = $radios[0].childNodes[7];
var radio5 = $radios[0].childNodes[9];

// 실제 카운트의 값
var count = 0;
// 라디오버튼을 바꿔줄 채널
var channel = 0;

// +를 눌렀을때 일어나는 함수
var plusFunc = function(){
  // 채널이 1이라면
  if (channel === 1) {
    ++count;
    console.log(count);
    $counter[0].innerHTML = count;
  }
  // 채널이 2라면
  else if (channel === 2) {
    count = count + 2;
    console.log(count);
    $counter[0].innerHTML = count;
  }
  // 채널이 3이라면
  else if (channel === 3) {
    count = count + 3;
    console.log(count);
    $counter[0].innerHTML = count;
  }
  // 채널이 4라면
  else if (channel === 4) {
    count = count + 4;
    console.log(count);
    $counter[0].innerHTML = count;
  }
  // 채널이 5라면
  else if (channel === 5) {
    count = count + 5;
    console.log(count);
    $counter[0].innerHTML = count;
  }
}

// -를 눌렀을때 일어나는 함수
var minusFunc = function(){
  // 채널이 1이라면
  if (channel === 1){
    --count;
    console.log(count);
    $counter[0].innerHTML = count;
  }
  // 채널이 2이라면
  else if(channel === 2){
    count = count - 2;
    console.log(count);
    $counter[0].innerHTML = count;
  }
  // 채널이 3이라면
  else if(channel === 3){
    count = count - 3;
    console.log(count);
    $counter[0].innerHTML = count;
  }
  // 채널이 4이라면
  else if(channel === 4){
    count = count - 4;
    console.log(count);
    $counter[0].innerHTML = count;
  }
  // 채널이 5이라면
  else if(channel === 5){
    count = count - 5;
    console.log(count);
    $counter[0].innerHTML = count;
  }
}

// 함수 1페이즈는 채널을 1로바꿈
var phase1 = function(){
  channel = 1;
  return channel;
}
// 함수 2페이즈는 채널을 2로바꿈
var phase2 = function() {
  channel = 2;
  return channel;
}
// 함수 3페이즈는 채널을 3로바꿈
var phase3 = function() {
  channel = 3;
  return channel;
}
// 함수 4페이즈는 채널을 4로바꿈
var phase4 = function() {
  channel = 4;
  return channel;
}
// 함수 5페이즈는 채널을 5로바꿈
var phase5 = function() {
  channel = 5;
  return channel;
}

// 라디오(n) 클릭시 (n)페이즈로 전환
radio1.addEventListener('click',phase1);
radio2.addEventListener('click',phase2);
radio3.addEventListener('click',phase3);
radio4.addEventListener('click',phase4);
radio5.addEventListener('click',phase5);

// +,- 눌렀을때 각각 plusFunc,minusFunc 실행
$plus.addEventListener('click',plusFunc);
$minus.addEventListener('click',minusFunc);


