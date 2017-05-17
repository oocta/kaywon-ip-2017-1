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

 function hourHandler(){
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
 function addZero(secNumber) {
   if (num<10) {
     return '0'+num;
   }
   else {
     return num;
   }
 }
 function intervalHandler() {
   secHandler();
 }

 setInterval(intervalHandler,100);

};
document.addEventListener('DOMContentLoaded',init);
