function veysel(s) {
  let max = 0;
  let windowStart = 0;
  const soFar = {};
  for (let i = 0; i < s.length; i++) {
    let element = s[i];
    //  soFar[element] = soFar[element] + 1 || 1;
    if (!soFar[element]) {
      soFar[element] = 1;
    } else if (soFar[element]) {
      soFar[element] += 1;
    }
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

var minimumAbsDifference = function (arr) {
  let result = [];
  //console.log("beforesorted arr=>",arr)
  arr.sort((a, b) => a - b);
  let minDifference = Infinity;
  for (let i = 1; i < arr.length; i++) {
    const currentDifference = arr[i] - arr[i - 1];
    if (currentDifference < minDifference) {
      minDifference = currentDifference;
    }
  }
  for (let i = 0; i < arr.length - 1; i++) {
    const minus = arr[i + 1] - arr[i];
    if (minus === minDifference) {
      result.push([arr[i], arr[i + 1]]);
    }
  }
  return result;
};

/* 
  var minimumAbsDifference = function(arr) {
      let minAbsolute = Infinity; // initialize minAbsolute to Infinity
      let result = []; // initialize result to empty array
  
      arr.sort((a, b) => a - b); // sort the array using sort()
      for (let i = 0; i < arr.length - 1; i++) { // loop through the every element of array
          const diff = arr[i + 1] - arr[i]; // find difference of next element to current element
          if (diff < minAbsolute) { // if diff is less than minAbsolute
              minAbsolute = diff; // make diff to minAbsolute
              result = [[arr[i], arr[i + 1]]]; // add current element and next element of array arr inside array of result
          } else if (diff === minAbsolute) { // else if diff is equal to minAbsolute
              result.push([arr[i], arr[i + 1]]); // push current and next element of array arr to result array
          }
      }
      
      return result; // return result array
  };
   */
