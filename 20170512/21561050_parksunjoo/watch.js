var init = function () {
  var hour = document.getElementById('hour');
  var min = document.getElementById('min');
  var sec = document.getElementById('sec');
  var hourNumber = '0';
  var minNumber = '0';
  var secNumber = '0';

  function hourHandler(){
    hour.innterHTML = hourNumber;
  }

  function minHandler() {
    min.innterHTML = minNumber;
  }

  function secHandler() {
    if(secNumber === 60){
      secNumber = 0;
    }
    hour.innterHTML = secNumber;
  }

  function intervalHandler() {
  secHandler();
  }
};

document.addEventListener('DOMContentLoded', init);
