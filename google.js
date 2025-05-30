// const unique = (value, index, self) => {
//   return self.indexOf(value) === index;
// };

// const sampleValues = [1, 4, 5, 2, "a", "e", "b", "e", 2, 2, 4];

// //const uniqueValues = sampleValues.filter(unique);
// //const uniqueValue=sampleValues.filter(unique);

// var veysel = (x) => {
//   let result = [];
//   for (let i = 0; i < x.length; i++) {
//     let element = x[i];
//     if (!result.includes(element)) {
//       result.push(element);
//     }
//   }
//   return result;
// };
// let a = [1, 2, 4, 6, 7, 8, 5, 8, 2, 3, 4, 4, 4];
// // console.log(veysel(a));
// console.log([...new Set(a)]);

const tokenReplace = (s, tokens) => {
  // debugger;
  let ar = s.split(" ");
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] in tokens) {
      ar.splice(i, 1, `${tokens[ar[i]]}`);
    }
    for (let key in tokens) {
      if (ar[i].includes(key)) {
        ar.splice(i, 1, `${tokens[key]}`);
      }
    }
  }
  return ar.join(" ");
};
const tokens = {
  $LOCATION$: "park",
  $ANIMAL$: "dog",
};
//console.log(tokenReplace("Walk the $ANIMAL$ in the $LOCATION$!", tokens));
//console.log("23" == "23");

// Time Complexity O(n)
// Space Complexity O(1)

// 1. Create leftPointer and assign it to 0.
// 2. Create rightPointer and assign it to s.length -1.
// 3. While leftPointer is less than rightPointer.
//      a. If the values of the pointer are not equal.
//          i. Find palindrome with leftPointer added one.
//          ii. Find palindrome with rightPointer minus one.
//          iii. Return if either are true
//      b. Increment leftPointer.
//      c. Decrement rightPointer.
// 4. Return true.

var validPalindrome = function (s) {
  let leftPointer = 0;
  let rightPointer = s.length - 1;
  while (leftPointer < rightPointer) {
    if (s[leftPointer] !== s[rightPointer]) {
      const checkLeft = checkInnerPalindrome(leftPointer + 1, rightPointer, s);
      const checkRight = checkInnerPalindrome(leftPointer, rightPointer - 1, s);
      return checkLeft || checkRight;
    }
    leftPointer++;
    rightPointer--;
  }
  return true;
};

var checkInnerPalindrome = function (leftPointer, rightPointer, s) {
  while (leftPointer < rightPointer) {
    if (s[leftPointer] !== s[rightPointer]) {
      return false;
    }
    leftPointer++;
    rightPointer--;
  }
  return true;
};

const isPowerOfFour = (number) => {
  if (number < 1) {
    return false; // Negative numbers and 0 are not powers of 4
  }

  while (number !== 1) {
    if (number % 4 !== 0) {
      return false; // If the remainder is not 0, it's not a power of 4
    }
    number /= 4;
  }

  return true;
};
const isPowerOfFour2 = (number) => {
  if (number == 1) return false;
  if (n <= 0) return false;
  if (n % 4 !== 0) return false;
  return isPowerOfFour(n / 4);
};

console.log(isPowerOfFour(64));

var scoreOfString = function (s) {
  let sum = 0;
  for (let i = 0; i < s.length - 1; i++) {
    sum += Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
  }

  return sum;
};
// var isPalindrome = function(x) { //https: //leetcode.com/problems/shift-2d-grid/
//   return x == x.toString().split("").reverse().join("");
// };

var isPalindrome = function (x) {
  //TIME-COMPLEXITY: O(n);
  //MEMORY: O(1);
  const str = x.toString();
  let leftIndex = 0;
  let rightIndex = str.length - 1;

  while (leftIndex < rightIndex) {
    if (str[leftIndex] !== str[rightIndex]) {
      return false;
    }
    leftIndex++;
    rightIndex--;
  }

  return true;
};

var removeElement = function (nums, val) {
  var zeroStartIdx = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[zeroStartIdx] = nums[i];
      zeroStartIdx++;
    }
  }
  return zeroStartIdx;
};

var evenOddBit = function (n) {
  n = n.toString(2);
  //   console.log(n);
  let calOne = 0;
  // console.log(typeof n)

  let value = [];

  for (let i = n.length - 1; i >= 0; i--) {
    if (Number(n[i]) === 1) {
      value.push(n.length - 1 - i);
    }
  }

  //  console.log(value)
  let getEven = 0;
  let getOdd = 0;
  for (let i = 0; i < value.length; i++) {
    if (value[i] % 2 === 0) {
      getEven++;
    }
    if (value[i] % 2 === 1) {
      getOdd++;
    }
  }
  return [getEven, getOdd];
};
