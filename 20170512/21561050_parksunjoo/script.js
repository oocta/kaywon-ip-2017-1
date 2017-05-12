var init = function () {
  var hour = document.getElementById('hour');
  var min = document.getElementById('min');
  var sec = document.getElementById('sec');
  var hourNumber = '0';
  var minNumber = '0';
  var secNumber = '0';

  function hourHandler(){

  }

  function minHandler() {

  }

  function secHandler() {
    sec.innterHTML = secNumber;
  }
secHandler();
};

document.addEventListener('DOMContentLoded', init);
