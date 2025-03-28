console.log("naber");

var generate = function (numRows) {
  //debugger;
  if (numRows < 1) return [];
  if (numRows === 1) return [[1]];

  const triangle = [[1]];
  for (let i = 1; i < numRows; i++) {
    let prevRow = triangle[i - 1];
    const curRow = [];
    curRow.push(1);

    for (let j = 1; j < prevRow.length; j++) {
      curRow[j] = prevRow[j] + prevRow[j - 1];
    }
    curRow.push(1);
    triangle.push(curRow);
  }
  return triangle;
};

console.log(generate(5));

function fizzBuzz(n) {
  //debugger;
  let result = "";
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0) result += "Fizz";
    else if (i % 5 === 0) result += "Buzz";
    else if (i % 3 === 0 && n % 5 === 0) result += "FizzBuzz";
    else result += i;
  }
  console.log(result);
}
fizzBuzz(15);

var removeOuterParentheses = function (S) {
  let result = "";
  let level = 0;

  for (const item of S) {
    if (item === ")") {
      level--;
    }
    if (level >= 1) {
      result += item;
    }
    if (item === "(") {
      level++;
    }
  }

  return result;
};
var highFive = function (items) {
  let scores = {};

  for (let i = 0; i < items.length; i++) {
    let student_id = items[i][0];
    let marks = items[i][1];
    // Here I'm adding the student_id as a key to scores hash table if it doesn't exist already with an empty array as value
    if (!scores[student_id]) scores[student_id] = [];
    // Here I'm pushing the marks to a student_id key, if it exists in scores hash table
    scores[student_id].push(marks);
  }

  let result = [];

  Object.keys(scores).forEach((key) => {
    let avg = 0;
    // Sort all the marks in descending order
    scores[key].sort((a, b) => b - a);
    for (let i = 0; i < 5; i++) {
      avg += scores[key][i];
    }
    avg = Math.floor(avg / 5);
    result.push([key, avg]);
  });

  return result;
};
var isBoomerang = function (points) {
  const [[x1, y1], [x2, y2], [x3, y3]] = points;
  return (y1 - y2) * (x1 - x3) != (y1 - y3) * (x1 - x2);
};
// var maximumWealth = function(accounts) {
//      let max=-Infinity;

//     for(let account of accounts){
//         let total=0;
//         for(let i=0; i<account.length; i++){
//             total+=account[i];

//         }
//             if(total>max){
//             max=total
//              }
//      }
//      return max

// };

var maximumWealth = function (accounts) {
  let a = accounts.map((account) => {
    console.log(account);
    return account.reduce((acc, b) => acc + b, 0);
    // console.log(b)
  });
  return Math.max(...a);
};

var removeOuterParentheses = function (s) {
  let result = "";
  let ticker = 0;
  for (el of s) {
    el == "(" ? ticker++ : 0;
    ticker > 1 ? (result += el) : 0;
    el == ")" ? ticker-- : 0;
  }
  return result;
};

var countPrimes = function (n) {
  if (n <= 2) return 0;
  function isPrime(num) {
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  }

  let count = 1;

  for (let i = 3; i < n; i += 2) {
    if (isPrime(i)) count++;
  }
  return count;
};
var findLucky = function (arr) {
  let hasMap = {};
  for (let i = 0; i < arr.length; i++) {
    if (!(arr[i] in hasMap)) {
      hasMap[arr[i]] = 1;
    } else {
      hasMap[arr[i]]++;
    }
  }
  let max = -Infinity;
  console.log(hasMap);
  for (let i in hasMap) {
    if (Number(i) === hasMap[i]) {
      max = Math.max(max, hasMap[i]);
    }
  }
  return max === -Infinity ? -1 : max;
};

function maximumSum(a, m) {
  const n = a.length;
  let maxSum = 0;
  let prefixSum = 0;

  // Sorted set for prefix sums
  let prefixSums = new Set();
  prefixSums.add(0); // Initial prefix sum

  for (let i = 0; i < n; i++) {
    prefixSum = (prefixSum + a[i]) % m;
    maxSum = Math.max(maxSum, prefixSum);

    // Find the smallest prefix sum greater than current prefixSum
    for (let ps of prefixSums) {
      if (ps >= prefixSum + 1) {
        maxSum = Math.max(maxSum, (prefixSum - ps + m) % m);
        break;
      }
    }

    // Add current prefixSum to the set
    prefixSums.add(prefixSum);
  }

  return maxSum;
}

// Function to process multiple queries
function processQueries(queries) {
  const results = [];
  for (let query of queries) {
    const [n, m] = query[0];
    const a = query[1];
    results.push(maximumSum(a, m));
  }
  return results;
}

// Sample input processing
const input = [
  [
    [5, 7],
    [3, 3, 9, 9, 5],
  ],
];

console.log(processQueries(input)); // Output: [6]

var countMatches = function (items, ruleKey, ruleValue) {
  var ruleKeys = ["type", "color", "name"];
  var keyIndex = ruleKeys.indexOf(ruleKey);
  var count = 0;
  for (var i = 0; i < items.length; i++) {
    if (items[i][keyIndex] === ruleValue) count++;
  }
  return count;
};

/* 
Example 1:

Input: s = "Hello how are you Contestant", k = 4
Output: "Hello how are you"
Explanation:
The words in s are ["Hello", "how" "are", "you", "Contestant"].
The first 4 words are ["Hello", "how", "are", "you"].
Hence, you should return "Hello how are you".
Example 2:

Input: s = "What is the solution to this problem", k = 4
Output: "What is the solution"
Explanation:
The words in s are ["What", "is" "the", "solution", "to", "this", "problem"].
The first 4 words are ["What", "is", "the", "solution"].
Hence, you should return "What is the solution".
Example 3:

Input: s = "chopper is not a tanuki", k = 5
Output: "chopper is not a tanuki"

*/

var truncateSentence = function (s, k) {
  return s.split(" ").splice(0, k).join(" ");
};

var isSumEqual = function (firstWord, secondWord, targetWord) {
  let ref = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
    i: 8,
    j: 9,
  };
  function getValue(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i] in ref) {
        result += ref[str[i]];
      }
    }
    let getNumber = parseInt(result, 10);
    //   console.log(getNumber);
    return getNumber;
  }
  //  getValue(firstWord)
  let getFirst = getValue(firstWord);
  let getSecond = getValue(secondWord);
  let getTarget = getValue(targetWord);

  if (getFirst + getSecond === getTarget) return true;
  else return false;
};
