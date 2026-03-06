let dict = { o: 0, l: 1, z: 2, i: 3, h: 4, s: 5, g: 6, e: 3 };
// 0(n+m)
const isValid = (num, words) => {
  //debugger;
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

console.log(isValid(3160061789, ["amazon", "google", "facebook"]));
/* */
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
var addBinary = function (a, b) {
  return (BigInt("0b" + a) + BigInt("0b" + b)).toString(2);
};

//console.log(plusOne([9]));

let a = new Set();
a.add("a");
a.add("b");
a.add("v");
//console.log(a);

//console.log("array", Array.from(a));
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

console.log("3160061789".indexOf("003"));

//2418. Sort the People
var sortPeople = function (names, heights) {
  let pairs = [];

  for (let i = 0; i < names.length; i++) {
    pairs.push([names[i], heights[i]]);
  }
  // console.log("pairs=>",pairs)
  pairs.sort((a, b) => b[1] - a[1]);
  console.log("pairs2=>", pairs);
  return pairs.map((a) => {
    return a[0];
  });
};

function sortPeople2(names, heights) {
  let arr = [];

  // pair names with heights
  for (let i = 0; i < names.length; i++) {
    arr.push([names[i], heights[i]]);
  }

  // sort by height descending
  arr.sort((a, b) => b[1] - a[1]);

  // extract names
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i][0]);
  }
  return result;
}

function sortPeople3(names, heights) {
  return names
    .map((name, i) => [name, heights[i]])
    .sort((a, b) => b[1] - a[1])
    .map((person) => person[0]);
}

/* 
map → pair values
sort → order them
map → extract what you need
 */
