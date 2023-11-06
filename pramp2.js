// // console.log("hello");
// function isMatch(text, pattern) {
//   // debugger
//   if (text === pattern) return true;
//   let count = 0;
//   for (let i = 0; i < pattern.length; i++) {
//     if (pattern[i] === "." || pattern[i] === "*") return true;
//     if (pattern[i] === text[i]) count++;
//   }
//   if (count !== text.length) return false;
//   return false;
// }

// //console.log(isMatch("abbdbb", "ab*d"));

// // console.log("Mehmet" === "Mehmet");
// function removeDuplicates(array) {
//   //  debugger;
//   const unique = [];
//   for (let item of array) {
//     if (unique.indexOf(item) === -1) {
//       unique.push(item);
//     }
//   }
//   return unique;
// }
// const array = [1, 2, 2, 3, 4, 4, 5];
// const uniqueArray = removeDuplicates(array);

// console.log(uniqueArray);
var commonChars = function (words) {
  const firstString = words[0];
  const result = [];

  for (const char of firstString) {
    if (words.every((str) => str.includes(char))) {
      result.push(char);
      // Remove the character from the other strings to avoid duplicates
      words = words.map((str) => str.replace(char, ""));
    }
  }

  return result;
};

function solution(a, k) {
  const remainderCount = new Array(k).fill(0);
  let count = 0;

  for (const num of a) {
    const remainder = ((num % k) + k) % k;
    const complementRemainder = (k - remainder) % k;

    count += remainderCount[complementRemainder];
    remainderCount[remainder]++;
  }

  return count;
}

// Example usage
const a = [1, 2, 3, 4, 5];
const k = 3;
console.log(solution(a, k)); // Output: 4

var letterCombinations = function (digits) {
  if (!digits) return [];

  const letterMap = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  const result = [];

  const backtrack = (combination, nextDigits) => {
    if (nextDigits.length === 0) {
      result.push(combination);
    } else {
      const currentDigit = nextDigits[0];
      const letters = letterMap[currentDigit];

      for (let i = 0; i < letters.length; i++) {
        const letter = letters[i];
        backtrack(combination + letter, nextDigits.slice(1));
      }
    }
  };

  backtrack("", digits);
  return result;
};

var numberOfPoints = function (nums) {
  let obj = {};
  let count = 0;
  for (let x of nums) {
    for (let i = x[0]; i <= x[1]; i++) {
      if (obj[i] == undefined) count++;
      if (!(obj[i] in obj)) {
        obj[i] = 0;
      }
    }
  }
  return count;
};
var plusOne = function (digits) {
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
var addDigits = function (num) {
  let sum = num;
  while (sum >= 10) {
    strArray = sum.toString().split("");
    sum = 0;
    for (let i = 0; i < strArray.length; i++) {
      sum += Number(strArray[i]);
    }
  }
  return sum;
};
