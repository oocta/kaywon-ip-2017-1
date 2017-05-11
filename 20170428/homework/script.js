
var plusBtn = document.getElementById('plusBtn');
var minusBtn = document.getElementById('minusBtn');

plusBtn.addEventListener('click', function () {
  printCount(increase('+', getCount()));
});
minusBtn.addEventListener('click', function () {
  printCount(increase('-', getCount()));
});

function increase(increase, val) {
  var radios = document.getElementsByName('increment');
  var value = 0;
  for (var i = 0; i < radios.length; ++i) {
    if (radios[i].checked) {
      value = parseInt(radios[i].value, 10);
    }
  }
  if (increase === '+') {
    value = val + value;
  } else if (increase === '-') {
    value = val - value;
  }
  return value;
}

function getCount() {
  return parseInt(document.getElementsByClassName('counter')[0].innerHTML, 10);
}

function printCount(val) {
  var counter = document.getElementsByClassName('counter')[0];
  counter.innerHTML = val;
}
