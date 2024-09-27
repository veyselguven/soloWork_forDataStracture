// "use strict";
// x = 15;

// function strict_function() {
//   "use strict";

//   x = "Test message";

//   console.log(x);
// }

// strict_function();

// let a = 10;

// function veysel() {
//   console.log(a);
//   let a = 20;
//   // console.log(a);
// }

// const veysel2 = () => {};

// veysel();

console.log(b);
var b = 10;
var numberOfMatches = function (n) {
  let count = 0;

  while (n > 1) {
    count = count + Math.floor(n / 2);
    n = Math.ceil(n / 2);
  }

  return count;
};
