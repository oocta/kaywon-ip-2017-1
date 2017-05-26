var init =function functionName() {
 var hour = document.getElementById('hour');
 var min = document.getElementById('min');
 var sec = document.getElementById('sec');
 //new
 // var time;
 //
 var hourString = '00';
 var minString = '00';
 var secString = '00';
 var hourNumber= 0;
 var minNumber= 0;
 var secNumber= 0;
 var startButton = document.getElementById('startButton');
 var stopButton = document.getElementById('stopButton');
 var resetButton = document.getElementById('resetButton');

 var lapbutton =document.getElementById('lap');
 var li = document.createElement('li');
 var lapBox = document.getElementById('lap');
 var lapTime = [];

 var isRunning = false;
//시계함수
 // function intervalHandler() {
 //   time = new Date();
 //   hour.innerHTML = time.getHours();
 //   min.innerHTML = time.getMinutes();
 //   sec.innerHTML = time.getSeconds();
 // }
 // setInterval(intervalHandler,1000);


//초시계
 function hourHandler(){
   hourNumber = hourNumber + 1;
   hour.innerHTML = addZero(hourNumber);
 }
 function minHandler(){
   minNumber =minNumber+1;
   if (minNumber===60) {
     hourHandler();
     minNumber=0;
   }
   min.innerHTML = addZero(minNumber);
 }
 function secHandler(){
   secNumber =secNumber+1;
   if (secNumber===60) {
     minHandler();
     secNumber=0;
   }
   sec.innerHTML = addZero(secNumber);
 }
 function startAction(){
   if(isRunning === false){
       secInterval = setInterval(startInterval,10);
       isRunning = true;
      }
}
 function addZero(num) {
   if (num<10) {
     return '0'+num;
   }
   else {
     return num;
   }
 }
 /*function intervalHandler() {
   secHandler();
 }*/
 function resetHandler() {
   hourNumber = 0;
   minNumber = 0;
   secNumber = 0;
   lapHandler = 0;
   hour.innerHTML = addZero(hourNumber);
   min.innerHTML = addZero(minNumber);
   sec.innerHTML = addZero(secNumber);
 }
 function lapHandler(){
     var lapTime = addZero(hourNumber)+':'+addZero(minNumber)+':'+addZero(secNumber);
     var li =document.createElement('li');
     li.innerHTML = lapTime;
     lap.appendChild(li);
   }

   startButton.addEventListener('click', function() {
     watchtime = setInterval(secHandler, 10);
   })
   stopButton.addEventListener('click', function() {
     clearInterval(watchtime);
   })
   resetButton.addEventListener('click', function() {
     clearInterval(watchtime);
     resetHandler();
   })
   lapButton.addEventListener('click',lapHandler);
 }
document.addEventListener('DOMContentLoaded',init);
