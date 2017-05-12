var bt01 = document.getElementsByClass('buttonList').firstElementChild;
var bt02 =document.getElementsByClass('buttonList').lastElementChild;
var counter= document.getElementsByClass('counter');

var clicks = 0;
function addbutton(){
  //'첫번째 체크박스에 체크가 되었을 때'를 적어보려고 했습니당....
  // if(increment[0].checked) 이렇게 써봐도 안되네요..! 검색해봤는데도 어떻게 써야할 지 모르겠습니다 ㅜ
  if(document.getElementsByName("increment")[0].checked){
    clicks += 1;
    counter.innerHTML = clicks;
  }
}
bt01.addEventListener('click',addbutton);

/* 제가 해보려했던 건 각각의 체크박스가 체크 되어있을 때, 증가하는 값을 적어서 버튼 클릭 시, 
#counter에 기록되도록 하는 방식을 체크박스 갯수대로 만들어본 후에 코드를 정리 해보고 싶었는데, 생각처럼 안됩니다 ㅜㅜ 
일단 여기까지만 제출하고,더 고민해보도록 하겠습니다.*/
