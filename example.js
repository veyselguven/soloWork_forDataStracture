let dict = { o: 0, l: 1, z: 2, i: 3, h: 4, s: 5, g: 6, e: 3 };
// 0(n+m)
const isValid = (num, words) => {
  // debugger;
  let numString = String(num);
  for (let word of words) {
    //o(n) n time
    word = word.split("").reverse().join("");
    console.log("word", word);
    let convertedNumber = "";
    let isValid = true;
    for (let i = 0; i < word.length; i++) {
      //O(n)
      if (word[i] in dict) convertedNumber += dict[word[i]];
      else isValid = false;
    }
    //console.log(convertedNumber);
    if (!isValid) continue;
    if (numString.indexOf(convertedNumber) !== -1) return true;
  }
  return false;
};

//console.log(isValid(3160061789, ["amazon", "google", "facebook"]));
/* 

*/
var plusOne = function (digits) {
  //debugger;
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
  }
  digits.unshift(1);
  return digits;
};

//console.log(plusOne([9]));

let a = new Set();
a.add("a");
a.add("b");
a.add("v");
console.log(a);

console.log("array", Array.from(a));
// const b = new Set([2, 5, 6, 7, 8, 9, 4, 3, 33]);

// //console.log(b);

// let result = [];
// for (let row = 0; row < 6; row++) {
//   let subResult = [];
//   for (let col = 0; col < 1; col++) {
//     subResult.push(col);
//   }
//   result.push(subResult);
// }

// console.log(result);
