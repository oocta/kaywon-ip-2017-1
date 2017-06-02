var init = function(){
 var sec = document.getElementById('sec');
 var min = document.getElementById('min');
 var hour = document.getElementById('hour');
 var time;

 function intervalHandler(){
   time = new Date();
   sec.innerHTML = time.getSeconds();
   min.innerHTML = time.getMinutes();
   hour.innerHTML = time.getHours();
 }
 intervalHandler();
 time = setInterval(intervalHandler,10);
};

document.addEventListener('DOMContentLoaded', init);
