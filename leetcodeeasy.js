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
