var isHappy = function (n) {
  //debugger;
  let seen = new Set();
  while (!seen.has(n)) {
    seen.add(n);
    sqSum = 0;
    while (n > 0) {
      sqSum += (n % 10) * (n % 10);
      n = Math.floor(n / 10);
    }
    if (sqSum === 1) {
      return true;
    }
    n = sqSum;
  }
  return false;
};
console.log(isHappy(4));
/* 
/
/
/
/
*/
var lastStoneWeight = function (stones) {
  // debugger;
  if (stones.length === 0) {
    return 0;
  }
  let sorted = stones.sort((a, b) => b - a);
  while (sorted.length > 1) {
    y = sorted[0];
    x = sorted[1];
    if (x === y) {
      sorted.shift();
      sorted.shift();
    } else {
      let val = y - x;
      sorted.shift();
      sorted.shift();
      sorted.unshift(val);
    }
  }

  return sorted[0];
};

//console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));

const a = [1, 2, 4, 6, 7, 87, 43, 466, 47, 77, 4, 64335, 53, 32];

// l=> 14

//console.log(a.splice(1, 2));
//console.log(a);

console.log("a" >= "a");
