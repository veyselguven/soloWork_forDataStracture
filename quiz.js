//let modal = document.querySelector("#result");
// console.log("model");
// setTimeout(function () {
//   // modal.classList.remove("hidden");
//   console.log("modal in time out");
// }, 3000);

// console.log("Result shown");

// for (var i = 1; i <= 4; i++) {
//   (function (j) {
//     setTimeout(function () {
//       console.log(j);
//     });
//   })(i);
// }

// for (var j = 1; j <= 4; j++) {
//   setTimeout(function () {
//     console.log(j);
//   }, j * 1000);
// }

"use strict";
let q = function logThis() {
  this.des = "logger";
  // console.log(this);
};

//console.log(q);
console.log(new q());
