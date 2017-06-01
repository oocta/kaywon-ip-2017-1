
$(document).ready(function() {

  updateClock();
  setInterval('updateClock()', 250);

});

function updateClock() {

  var cur_time = new Date();
  var cur_s = cur_time.getSeconds();
  var cur_m = cur_time.getMinutes();
  var cur_h = cur_time.getHours();
  var cur_d = cur_time.getDate();
  
  var s_deg = 6*cur_s;
  var m_deg = 6*cur_m;
  var h_deg = (cur_m/60 + cur_h)*30;

  $('.the-hour').text(checkTime(cur_h));
  $('.the-minute').text(checkTime(cur_m));
  $('.the-second').text(checkTime(cur_s));
  $('.day span').text(cur_d);
 
  
  $('.second').css({ 'transform': 'rotate(' + s_deg + 'deg)' });
  $('.minute').css({ 'transform': 'rotate(' + m_deg + 'deg)' });
  $('.hour').css({ 'transform': 'rotate(' + h_deg + 'deg)' });
}

function checkTime(i) {
  //10보다 작은 숫자 앞에 0을 추가
  if (i < 10) {
    i = "0" + i;
  }

  return i;
}

document.addEventListener('DOMContentLoaded', updateClock);
