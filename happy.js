var isHappy = function (n) {
  // debugger;
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
