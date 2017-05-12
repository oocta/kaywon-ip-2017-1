//1. element 찾기
var init = function () {
  var counter = document.getElementById('counter');
  var plusButton = document.getElementById('plusButton');
  var minusButton = document.getElementById('minusButton');
  console.log(plusButton, minusButton);
};
document.addEventListener('DOMContentLoaded', init);
