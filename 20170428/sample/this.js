/*
this
*/

console.log(this);

window.addEventListener('load', function () {
  console.log(this);
});

function func() {
  console.log(this);
  function func2() {
    console.log('func2', this);
  }
  func2();
}
// func();

var myobj = {
  func: function () {
    console.log(this);
    function func2() {
      console.log('func2', this);
    }
    func2();
    this.func3 = function () {
      console.log('func3', this);
    }
    this.func3();
  }
};

myobj.func();
