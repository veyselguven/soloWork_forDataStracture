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
