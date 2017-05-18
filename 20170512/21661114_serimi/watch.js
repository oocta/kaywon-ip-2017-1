var init =function functionName() {
 var hour = document.getElementById('hour');
 var min = document.getElementById('min');
 var sec = document.getElementById('sec');
 var hourString = '00';
 var minString = '00';
 var secString = '00';
 var hourNumber= 0;
 var minNumber= 0;
 var secNumber= 0;
 var startButton = document.getElementById('startButton');
 var stopButton = document.getElementById('stopButton');
 var resetButton = document.getElementById('resetButton');

 function hourHandler(){
   hourNumber = hourNumber + 1;
   hour.innerHTML = hourNumber;
 }
 function minHandler(){
   minNumber =minNumber+1;
   if (minNumber===60) {
     hourHandler();
     minNumber=0;
   }
   min.innerHTML = minNumber;
 }
 function secHandler(){
   secNumber =secNumber+1;
   if (secNumber===60) {
     minHandler();
     secNumber=0;
   }
   sec.innerHTML = secNumber;
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
   hour.innerHTML = addZero(hourNumber);
   min.innerHTML = addZero(minNumber);
   sec.innerHTML = addZero(secNumber);
 }
   startButton.addEventListener('click', function() {
     watchtime = setInterval(secHandler, 1000);
   })
   stopButton.addEventListener('click', function() {
     clearInterval(watchtime);
   })
   resetButton.addEventListener('click', function() {
     clearInterval(watchtime);
     resetHandler();
   })
 }
document.addEventListener('DOMContentLoaded',init);
