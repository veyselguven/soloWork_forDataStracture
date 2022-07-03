console.log("afsd");

/* 
1
12
123
1234
12345
123456
1234567
123456
12345
1234
123
12
1
*/

let text = "";
let t = 1;

for (let i = 1; i < 14; i++) {
  if (i <= 7) {
    for (let j = 1; j <= i; j++) {
      text += j;
    }
  } else {
    for (let j = 1; j < i - t; j++) {
      text += j;
    }
    t += 2;
  }

  text += "<br>";
}

//document.write(text);

function minimalOperations(words) {
  // debugger;
  const res = [];
  for (let word of words) {
    let replacements = 0;
    for (let i = 1; i < word.length; i++) {
      if (word[i] === word[i - 1]) {
        word = word.slice(0, i) + "1" + word.slice(i + 1);
        replacements++;
      }
    }
    res.push(replacements);
  }
  return res;
}
const words = ["ab", "aab", "abb", "abab", "abaaaba"];

minimalOperations(words);

var isSubsequence1 = function (s, t) {
  if (s == "" && t == "") {
    return true;
  }
  let left = 0;
  for (let i = 0; i < t.length; i++) {
    if (s[left] === t[i]) {
      left++;
    }
    if (left == s.length) {
      return true;
    }
  }
  return false;
};
var isSubsequence = function (s, t) {
  if (s === "") return true;

  // p
  //"abc"
  // p
  //"ahbgdc"

  let p1 = 0;
  let p2 = 0;

  while (p2 <= t.length - 1) {
    if (s[p1] == t[p2]) {
      p1++;
      p2++;
    } else {
      p2++;
    }
  }
  return p1 == s.length;
};

let nums = [1, 2, 43, 5, 6, 4];
const result = new Array(nums.length).fill(0);
console.log(result);

/* 




*/
//time O(n)
//space0(n)
/*
var sortedSquares = function(nums) {
    let result=[];
    for(let i=0; i<nums.length; i++){
        let element=nums[i];
        result.push(element*element)
    }
    return result.sort((a,b)=>a-b)
};

*/

//index=nums.length-1

// Math.abs(l)>Math.abs(r){
// nums[index] =nums[l]*nums[l];
// l++
// }else{
// r--;
//}

//index--
//   L
//  -4 -1 0 3 10
//          R

//  [             ]
var sortedSquares = function (nums) {
  let l = 0;
  let r = nums.length - 1;
  let index = nums.length - 1;
  let result = [];
  while (l <= r) {
    if (Math.abs(nums[l]) < Math.abs(nums[r])) {
      result[index] = nums[r] * nums[r];
      r--;
    } else {
      result[index] = nums[l] * nums[l];
      l++;
    }
    index--;
  }
  return result;
};
