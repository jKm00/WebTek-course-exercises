printG();
var g = 3;
printG();

function printG() {
  console.log("The value of g is " + g);
}

function c() {
  var z = 667;
  a();
  console.log("z (direct from c): " + z);

  function a() {
    console.log(x);
    var y = 15;
    console.log(y);
    console.log("z (from a): " + z);
  }

  function b() {
    console.log(x);
    console.log(y);
  }
}

var x = 12;
console.log(x);
console.log(window.x);

c();
