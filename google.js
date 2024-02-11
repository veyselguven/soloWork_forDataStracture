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
console.log("23" == "23");

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
