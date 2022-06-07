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
// let arry = [];
// console.log("arry", arry);

var v = 1;
var f1 = function () {
  // console.log(v);
};
var f2 = function () {
  var v = 2;
  f1();
};
f2();

class X {
  get Y() {
    return 42;
  }
}
var x = new X();
x.Y;
//console.log(x.Y);

function printA() {
  console.log(answer);
}
//printA();

function foodPrice(prices, addValue) {
  var newPriceList = [];
  for (var i = 0; i < prices.length; i++) {
    var finalPrice = prices[i] + addValue;
    newPriceList.push(finalPrice);
  }
  console.log(i);
  console.log(finalPrice);
  return newPriceList;
}
let result = foodPrice([10, 20, 30], 10);
console.log(result);

grater = "Say Hello";
console.log(grater);
var grater;
