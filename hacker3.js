console.log("Hello");
function findMedian(arr) {
  // Write your code here
  arr == arr.sort((a, b) => a - b);
  let middle = Math.floor(arr.length / 2);
  if (arr.length % 2 === 1) {
    return arr[middle];
  } else {
    return (arr[middle] + arr[middle - 1]) / 2;
  }
}

console.log(findMedian([1, 3, 3, 6, 7, 8, 9]));
console.log(findMedian([1, 2, 3, 4, 5, 6, 8, 9]));

console.log({} == {}); // false
//console.log({} === {}); // false
//This condition will always return 'false'
//since JavaScript compares objects by reference, not value.

var largestAltitude = function (gain) {
  let currentGain = 0;
  let result = 0;

  for (let num of gain) {
    currentGain += num;
    result = Math.max(currentGain, result);
  }

  return result;
};

// var largestAltitude = function(gain) {
//     let result=[0];
//     let sum=0;
//     for(let i =0; i<gain.length; i++){
//             sum+=gain[i]
//             result.push(sum)
//     }
//    return Math.max(...result)
// };
var sumOfTheDigitsOfHarshadNumber = function (x) {
  let stringArray = String(x).split("");
  let total = stringArray.reduce((acc, curr) => {
    return acc + Number(curr);
  }, 0);
  console.log(total);
  return x % total === 0 ? total : -1;
};

var countElements = function (arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    if (arr.includes(current + 1)) total++;
  }
  return total;
};

// 151. Reverse Words in a String Leetcode
var reverseWords = function (s) {
  //Time Complexity: O(n)
  //Space Complexity: O(n)
  // let alphabet=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  // s=s.split("")
  // console.log(s)
  let stringNoSpace = s.trim().replace(/\s+/g, " "); // Replace multiple spaces with a single space
  //console.log(stringNoSpace);
  stringNoSpace = stringNoSpace.split(" ");
  console.log(stringNoSpace);
  return stringNoSpace.reverse().join(" ");
};
