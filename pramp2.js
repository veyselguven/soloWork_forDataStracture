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
