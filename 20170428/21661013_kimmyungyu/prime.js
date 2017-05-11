function prime(){
  for(var i = 2; i <= 100; ++i){
    var num = '';
    num = true;
    for(var a = 2; a < i; ++a){
      if(i%a == 0){
        num = false;
        break;
      }
    }
    if(num == true){
      num = i;
      console.log(num);
    }
  }
}
prime();
