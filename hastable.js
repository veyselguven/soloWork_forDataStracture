// var isIsomorphic = function (s, t) {
//   // debugger;
//   const obj = {};
//   for (i in s) {
//     if (!(s[i] in obj)) obj[s[i]] = t[i];
//     else {
//       if (obj[s[i]] !== t[i]) return false;
//     }
//   }
//   const ob = {};
//   for (i in t) {
//     if (!(t[i] in ob)) ob[t[i]] = s[i];
//     else {
//       if (ob[t[i]] !== s[i]) return false;
//     }
//   }

//   return true;
// };

// let s = "egg",
//   t = "add";

//console.log(isIsomorphic(s, t));

// let a = "veysel";
// for (let index in a) {
//   console.log("i=>", index);
//   console.log("a=>", a[index]);
// }
// let a = { name: "Veysel", surname: "Basbyadr" };
// for (let index in a) {
//   console.log("index=>", index); // name ,surname
//   console.log("a=>", a[index]); // veysel,basbaydar
// }

// let b = [{ name: "Veysel", surname: "Basbyadr" }];
// for (let x of b) {
//   console.log("x=>", x);
//   console.log("b=>", b);
// }

// function pigIt(str) {
//   str = str.split(" ");
//   let result = [];

//   for (let i = 0; i < str.length; i++) {
//     if (/([a-zA-Z])/.test(str[i])) {
//       let word = str[i].slice(1) + str[i][0] + "ay";
//       result.push(word);
//     } else {
//       result.push(s[i]);
//     }
//   }
//   return result.join(" ");
// }

// console.log(pigIt("Pig latin is cool"));

// function pigIt2(str) {
//   //Code here
//   return str
//     .split(" ")
//     .map((word) => {
//       return word.substring(1) + word[0] + "ay";
//     })
//     .join(" ");
// }

// console.log("2" + 0 === 20);

// let a = 41;
// a--;
// console.log(a);
// var selfDividingNumbers = function (left, right) {
//   // debugger;
//   let result = [];

//   for (let i = left; i <= right; i++) {
//     let compareNum = i;
//     //  console.log("compareNum=>",compareNum)
//     let num = String(compareNum).split("");
//     // console.log("num",num)
//     for (let j = 0; j < num.length; j++) {
//       if (compareNum % Number(num[j]) === 0) {
//         result.push(compareNum);
//       }
//     }
//   }
//   return result;
// };

//console.log(selfDividingNumbers(1, 22));

console.log(NaN == NaN);

function missingNumbers(arr, brr) {
  // Write your code here
  let hash1 = arr.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});
  let hash2 = brr.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});
  console.log("hash1=>", hash1);
  console.log("hash2=>", hash2);
  let result = [];

  for (let i in hash2) {
    if (hash2[i] !== hash1[i] || !hash1[i]) {
      result.push(i) * hash1[i];
    }
  }
  return result;
}
let arr = [7, 2, 5, 3, 5, 3];
let brr = [7, 2, 5, 4, 6, 3, 5, 3];

console.log(missingNumbers(arr, brr));

var countKDifference = function (nums, k) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (Math.abs(nums[j] - nums[i]) == k) {
        result++;
      }
    }
  }
  return result;
};
