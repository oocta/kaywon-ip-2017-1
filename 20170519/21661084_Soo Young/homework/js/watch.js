

$(document).ready(function(){
            BoxRePosition();
        })
        $(window).resize(function(){
            BoxRePosition();
        })
        $(window).load(function(){
            BoxRePosition();
        })
        function BoxRePosition(){
            var windowWidth = $(window).width();
            var windowHeight = $(window).height();
            var boxWidth = $('.box').width();
            var boxHeight = $('.box').height();

            $('.box').css('left', (windowWidth - boxWidth)/2);
            $('.box').css('top', (windowHeight - boxHeight)/2);
        }


$(function(){
  /*
    Date() : 시간데이터 호출함수
    .getFullYear() / .getMonth()  /  .getDate()   /   .getDay()
    .getHours()  /  .getMinutes()  /   .getSecond()
  */
  var Ar=new Array("일","월","화","수","목","금","토");
  function timeClock(){
    var now=new Date(); // alert(now);
    var year=now.getFullYear();
    var mon=now.getMonth()+1;
    var date=now.getDate();
    var day=Ar[now.getDay()];
    $('#day').text( year+"년 "+mon+"월 "+date+"일 "+day+"요일 ");
  }
  timeClock();
});

/*
var init = function () {
  var sec = document.getElementById('sec');
  var min = document.getElementById('min');
  var hour = document.getElementById('hour');
  var time;

  function intervalHandler(){
    time = new Date();
    sec.innerHTML = time.getSeconds();
    min.innerHTML = time.getMinutes();
    hour.innerHTML = time.getHours()
  }
  setInterval(intervalHandler, 1000);

};
*/
var init = function () {
    var now=new Date(); 
    var hour=now.getHours();
    var min=now.getMinutes();
    var sec=now.getSeconds();//console.log( mon+','+day+','+hour);
    var apm="am";
    if( hour>=12 ){
        apm="pm";
        hour-=12;
    }
   $('#clock').text( hour+ ":" +min+ ":" + sec +apm);
    setTimeout( init, 1000 );
};

document.addEventListener('DOMContentLoaded', init);



