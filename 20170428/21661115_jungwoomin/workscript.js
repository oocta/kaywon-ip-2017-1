var init = function () {
    //code here.
    var counter = document.getElementById('counter');
    var plusButton = document.getElementById('plusButton');
    var minusButton = document.getElementById('minusButton');
    var xButton = document.getElementById('xButton');
    var percentButton = document.getElementById('percentButton');
    var counterNumber = 0;
    
    //counter를 제어하는 함수
    function counterHandler (num) {
        counter.innerHTML = num;
        //alert('counterHandler');
        
    }
    
    
    //plusButton을 클릭 했을 때 실행되는 함수
    function clickPlusButton () {
        getRadioValue();
        //counterNumber += 1;
        //getRadioValue의 return값을 10진수의 숫자타입으로 바꾼다.
        //counterNumber = counterNumber + parseInt(getRadioValue(), 10); 
        counterNumber = counterNumber + getRadioValue();
        counterHandler(counterNumber);
    }
    
    
    //minusButton을 클릭 했을 때 실행되는 함수
    function clickMinusButton () {
        //counterNumber = counterNumber - parseInt(getRadioValue(), 10); 
        counterNumber = counterNumber - getRadioValue();
        counterHandler(counterNumber);
    }
    
    function clickXButton () {
        //counterNumber = counterNumber - parseInt(getRadioValue(), 10); 
        counterNumber = counterNumber * getRadioValue();
        counterHandler(counterNumber);
    }
    
    function clickPercentButton () {
        //counterNumber = counterNumber - parseInt(getRadioValue(), 10); 
        counterNumber = counterNumber % getRadioValue();
        counterHandler(counterNumber);
    }
    
    //radio button의 value 값을 찾는 기능
    function getRadioValue () {
        var radios = document.getElementsByName('increment');
        for (var i = 0; i < radios.length; ++i) {
            var radio = radios[i];
            if(radio.checked === true) {
                return parseInt(radio.value, 10);
            }
        }
        return 0;
    }
    
    plusButton.addEventListener('click', clickPlusButton);
    minusButton.addEventListener('click', clickMinusButton);
    xButton.addEventListener('click', clickXButton);
    percentButton.addEventListener('click', clickPercentButton);
};

//내가 작성한 HTML이 Element에 접근할 수 있을 때
document.addEventListener('DOMContentLoaded', init);
