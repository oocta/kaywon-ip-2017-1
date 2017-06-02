var init = function(){
  function addZero(num){
    if(num < 10){
       return '0' + num;
    }
    return num;
  }
  function ifsz(num){
    if(num <= 0){
      num=num+24;
      return num;
    }else if (num > 24) {
      num=num%24;
      return num;
    }
    return num;
  }

 var sec = document.getElementById('sec');
 var min = document.getElementById('min');
 var hour = document.getElementById('hour');

 var sec1 = document.getElementById('sec1');
 var min1 = document.getElementById('min1');
 var hour1 = document.getElementById('hour1');

 var sec2 = document.getElementById('sec2');
 var min2 = document.getElementById('min2');
 var hour2 = document.getElementById('hour2');

 var sec3 = document.getElementById('sec3');
 var min3 = document.getElementById('min3');
 var hour3 = document.getElementById('hour3');
 var time;

 function intervalHandler(){
   time = new Date();

   sec.innerHTML = addZero(time.getSeconds());
   min.innerHTML = addZero(time.getMinutes());
   hour.innerHTML = addZero(ifsz(time.getHours()));

   sec1.innerHTML = addZero(time.getSeconds());
   min1.innerHTML = addZero(time.getMinutes());
   hour1.innerHTML = addZero(ifsz(time.getHours()-7));

   sec2.innerHTML = addZero(time.getSeconds());
   min2.innerHTML = addZero(time.getMinutes());
   hour2.innerHTML = addZero(ifsz(time.getHours()-12));

   sec3.innerHTML = addZero(time.getSeconds());
   min3.innerHTML = addZero(time.getMinutes());
   hour3.innerHTML = addZero(ifsz(time.getHours()-9));
 }
 intervalHandler();
 time = setInterval(intervalHandler,10);
};

document.addEventListener('DOMContentLoaded', init);
