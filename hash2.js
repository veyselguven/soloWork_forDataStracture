function veysel(s) {
  let max = 0;
  let windowStart = 0;
  const soFar = {};
  for (let i = 0; i < s.length; i++) {
    let element = s[i];
    soFar[element] = soFar[element] + 1 || 1;
    // if (!soFar[element]) {
    //   soFar[element] = 1;
    // } else if (soFar[element]) {
    //   soFar[element] += 1;
    // }
    while (soFar[element] > 1) {
      let char = s[windowStart];
      if (soFar[char] > 1) {
        soFar[char]--;
      } else {
        delete soFar[char];
      }
      windowStart++;
    }
    max = Math.max(max, i - windowStart + 1);
  }
  return max;
}

console.log(veysel("asfdgasfdgfasdaa"));
