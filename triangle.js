const triangle = (a) => {
  let result = [];
  let square = Math.pow(a, 2);
  result.push(a);
  //console.log(square);
  let floor = Math.floor(square / 2);
  result.push(floor);
  let ceil = Math.ceil(square / 2);
  result.push(ceil);
  return result;
};

// console.log(triangle(3));
// console.log(triangle(5));
//console.log(triangle(11));
//console.log(triangle(3));

const squareSum = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += Math.pow(i, 2);
  }
  return sum;
};

console.log(squareSum(10));
