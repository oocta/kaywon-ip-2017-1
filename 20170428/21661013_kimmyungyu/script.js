var number = document.getElementsByName('increment');
var plus = document.getElementsByClassName('buttonList')[0].firstElementChild;
var minus = document.getElementsByClassName('buttonList')[0].lastElementChild;
var counter = document.getElementsByClassName('counter')[0];

plus.addEventListener('click',function(){
  for(var i = 0; i<number.length; ++i){
    if (number[i].checked == true){
      var textP = counter.innerHTML;
      var countnum = number[i].value;
      countnum = textP+'+'+number[i].value;
    }
  }
   counter.innerHTML = countnum;
})
minus.addEventListener('click',function(){
  for(var i = 0; i<number.length; ++i){
    if (number[i].checked == true){
      var textM = counter.innerHTML;
      var countnum2 = number[i].value;
      countnum2 = textM+'-'+number[i].value;
    }
  }counter.innerHTML = countnum2;
})
