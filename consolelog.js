let fruit = ["apple", "banana", "cheery"];

console.log(fruit); //(3) ['apple', 'banana', 'cheery']
console.dir(fruit);
// display an object's properties in an interactive,tree-like format in the console
/* 
0: "apple"
1: "banana"
2: "cheery"
length:3
*/

let users = [
  { name: "Alice", age: 28 },
  { name: "bob", age: 34 },
];

console.log(users); // (2) [{…}, {…}]
console.table(users);
// displats tabular data in a table format in the console.log
/* 
|---------------------|
|index  name     age  |
|0    Alice      28   |
|1     Bob       34   |
|____________________ |

*/

// function sumOfDigits(num) {
//   //debugger;
//   let sum = 0;
//   while (num > 0) {
//     sum += num % 10;
//     num = Math.floor(num / 10);
//   }
//   return sum;
// }

function sumOfDigits(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}

function countLargestGroup(n) {
  const groups = {};

  for (let i = 1; i <= n; i++) {
    const sum = sumOfDigits(i);
    if (!groups[sum]) {
      groups[sum] = 0;
    }
    groups[sum]++;
  }

  let maxGroupSize = 0;
  let numberOfLargestGroups = 0;

  for (const sum in groups) {
    if (groups[sum] > maxGroupSize) {
      maxGroupSize = groups[sum];
      numberOfLargestGroups = 1;
    } else if (groups[sum] === maxGroupSize) {
      numberOfLargestGroups++;
    }
  }

  return numberOfLargestGroups;
}

console.log(sumOfDigits(10));
