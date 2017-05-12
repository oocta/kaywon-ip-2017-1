//var counter = document.getElementByid('counter');
//console.log(counter); //값이 id가아닌 null인이유
// : 스크립트가 위에서 실행후 body를 읽어서 body아래로 옮겨준다.
//document.body.addEventListener('DOMContenLoaded', function () {});
//'DOMContenLoaded >바디태그안에 돔ㅋ리에 접근할 수 있을때 뒤에코드 실행~

/*--var init = function () { //우리의 기본패턴 함수로 정하자~
 //code here.
 };
 document.addEventListener('DOMContentLoaded', init);  --*/

var init = function () {     
    var counter = document.getElementById('counter');
    var plusButton = document.getElementById('plusButton');
    var minusButton = document.getElementById('minusButton');
    var counterNumber = 0;
  
  //2. 카운터 제어 기능 만들기
  //counter.innerHTML = '1';
    
    function counterHandler(num) { //값을 표시해주는것만
      counter.innerHTML = num;
      console.log('counterHandler');
    } 
    
   //+버튼을 눌렀을때
    function clickPlusButton() {
      counterNumber = counterNumber + getRadioValue();
      counterHandler(counterNumber);
    }
    
    //-버튼을 눌렀을때
    function clickMinusButton() {
      
      counterNumber = counterNumber - getRadioValue();
      counterHandler(counterNumber);
    } 
    
    //라디오버튼의 선택된 값을 찾는 기능
    function getRadioValue() {
      var radios = document.getElementsByName('increment');
      for (var i = 0; i < radios.length; ++i) {
        var radio = radios[i];
        if (radio.checked === true) {
         return parseInt(radio.value, 10);
        }
      }
    }
    console.log(getRadioValue());
  
    //plusButton에 이벤트를 주세요.(클릭했을때, clickPlusButton가)
    plusButton.addEventListener('click', clickPlusButton);
    minusButton.addEventListener('click', clickMinusButton);   
    
    
 };
 document.addEventListener('DOMContentLoaded', init);
