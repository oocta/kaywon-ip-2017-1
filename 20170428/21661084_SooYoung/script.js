var button = document.getElementsByClassName('buttonList');

//plus버튼을 누르면 함수가 실행된다.
plus.addEventListener('click',function() {

  if (value === 1) {
    count = count++;
    counter.innerHTML = count;
  }
  else if (value === 2) {
    count = count + 2;
    counter.innerHTML = count;
  }
  else if (value === 3) {
    count = count + 3;
    counter.innerHTML = count;
  }
  else if (value === 4) {
    count = count + 4;
    counter.innerHTML = count;
  }
  else(value === 5){
    count = count + 5;
    counter.innerHTML = count;
  }

});

//minus버튼을 누르면 함수가 실행된다.
//만약 value가 1이라면 count가 줄어들고 html에 보여지게 된다.
minus.addEventListener('click',function() {
  if (value === 1) {
    count = --count;
    counter.innerHTML = count;
  }
  else if (value === 2) {
    count = count - 2;
    counter.innerHTML = count;
  }
  else if (value === 3) {
    count = count - 3;
    counter.innerHTML = count;
  }
  else if (value === 4) {
    count = count - 4;
    counter.innerHTML = count;
  }
  else(value === 5){
    count = count - 5;
    counter.innerHTML = count;
  }
});

//radio버튼 value값 넣기
var rate = document.getElementsByClassName('increment').value;
var increment_value;

if(rates =='1'.checked){
    rate_value = document.getElementById('1').value;

}else if(rates =='2'.checked){
    rate_value = document.getElementById('2').value;

}else if(rates =='3'.checked){
    rate_value = document.getElementById('3').value;

}else if(rates =='4'.checked){
    rate_value = document.getElementById('4').value;

}else(rates =='5'.checked){
    rate_value = document.getElementById('5').value;

}

document.getElementById('results').innerHTML = increment_value;

/*

이 구문을 사용해서 더 하고 싶은데 어떻게 사용해야 할지 모르겠습니다...분명 사용할 수 있을 것 같은데...

for(var i = 0; i < rates.length; i++){
    if(rates[i].checked){
        rate_value = rates[i].value;
    }
}
*/


//그리고 사실 검색해보고 했는데 어떻게 해야할지모르겠습니다..도저히 모르겠습니다..
