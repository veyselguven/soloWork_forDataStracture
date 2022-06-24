const uncompress = (s) => {
  //debugger;
  let numbers = "012345679";
  let result = "";
  let i = 0;
  let j = 0;
  while (j < s.length) {
    if (numbers.includes(s[j])) {
      j++;
    } else {
      let count = Number(s.slice(i, j));
      for (let repeat = 0; repeat < count; repeat++) {
        result += s[j];
      }
      j++;
      i = j;
    }
  }
  return result;
};
