
var init = function () {
  /*
  //1. Date 인스턴스(instance) 생성하기
  var myDate1 = new Date();
  console.log('myDate1', myDate1);
  var myDate2 = new Date(1495034774564);
  console.log('myDate2', myDate2);
  var myDate3 = new Date('2017/5/19 20:10:05');
  console.log('myDate3', myDate3);
  //년,월,일,시,분,초
  //월을 4로 쓴 이유 : 5번째index이기 때문에 0,1,2,3,4 - 1,2,3,4,5월
  var myDate4 = new Date(2017, 4, 19, 20, 10, 5);
  console.log('myDate4', myDate4);
  */

  //2. 유용한 메서드 - 시간 상태 가져오기

  //코드가 실행될 당시의 시간 = new Date();
  var time = new Date();
  //전체 년도
  var year = time.getFullYear();
  console.log('year',year);
  var month = time.getMonth();
  console.log('month',month);
  var date = time.getDate();
  //일요일을 기준으로 index 0부터 0,1,2,3,4,5,6 - 일,월,화,수,목,금,토
  var day = time.getDay();
  var hour = time.getHours();
  var min = time.getMinutes();
  var sec = time.getSeconds();

  //3. 유용한 메서드 - 시간 상태 설정하기
  /*
  //get:가져오는것 set:설정
  var newTime = new Date();
  newTime.setFullYear(2016);
  console.log(newTime);
  newTime.setMonth(5);
  console.log(newTime);
  newTime.setDate(20);
  newTime.setHours(19);
  newTime.setMinutes(21);
  newTime.setSeconds(15);
  */

  // 4. Math 객체 사용하기
  //원을 활용한 내용을 만들때 (그래프등)
  //console창에 입력
  Math.PI; // 원주율 프로퍼티
  Math.ceil(1.3); // 올림
  Math.floor(4.95); // 버림
  Math.round(4.45); // 반올림
  Math.max(1, 3.4, 7); // 매개변수 중 가장 큰 숫자 출력.
  Math.min(1, 3.4, 7); // 매개변수 중 가장 작은 숫자 출력.
  //0~1사이의 난수 생성
  Math.random(); // 난수 생성

};

document.addEventListener('DOMContentLoaded', init);
