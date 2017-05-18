var init = function(){

  var hour = document.getElementById('hour');
  var min = document.getElementById('min');
  var sec = document.getElementById('sec');
  var hourNumber = 0;
  var minNumber = 0;
  var secNumber = 0;

  function hourHandler(){
    hourNumber = hourNumber + 1;
    hour.innerHTML = addZero(hourNumber);
  }
  function minHandler(){
    minNumber = minNumber + 1;
    if(minNumber === 60){
      hourHandler();
      minNumber=0;
    }
    min.innerHTML = addZero(minNumber);
  }
  function secHandler(){
    secNumber = secNumber + 1;
    if(secNumber === 60){
      minHandler();
      secNumber=0;
    }
    sec.innerHTML = addZero(secNumber);
  }
  function addZero(num){
    if(num < 10){
      return '0' + num;
    }
    return num;
  }

  function intervalHandler(){
    secHandler();
  }
  var myVarstart = setInterval(intervalHandler, 1000);
  //특정정해진 시간마다 내가 정해준 함수를 계속적으로 사용하는
};

  var clickevent = function(){
    var start = document.getElementById('startButton');
    var stop = document.getElementById('stopButton');
    var reset = document.getElementById('resetButton');

    start.addEventListener('click', init);
    stop.addEventListener('click', function(){
      clickstopevent();
    });
    reset.addEventListener('click', function(){
      clickresetevent();
    });

    function clickstopevent(){
      console.log('중지되었습니다');
    }

    function clickresetevent(){
      console.log('리셋되었습니다');
      //clearInterval을 써야할 것 같은데...뭘까여..;
      //00만들기
      hour.innerHTML = '00';
      min.innerHTML = '00';
      sec.innerHTML = '00';
    }
  };
  document.addEventListener('DOMContentLoaded', clickevent);

  /*start 버튼을 누르면 누적되서 작용한다.
  clearInterval()사용법을 잘 모르겠다.

  침고예시--교수님한테 여쭤보기
  <!DOCTYPE html>
<html>
<body>

<p>A script on this page starts this clock:</p>

<p id="demo"></p>

<button onclick="myStopFunction()">Stop time</button>

<script>
var myVar = setInterval(function(){ myTimer() }, 1000);

function myTimer() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById("demo").innerHTML = t;
}

function myStopFunction() {
    clearInterval(myVar);
}
</script>

</body>
</html>

*/
