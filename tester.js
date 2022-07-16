let dict = { o: 0, l: 1, z: 2, i: 3, h: 4, s: 5, g: 6, e: 3 };
// 0(n+m)
const isValid = (num, words) => {
  // debugger;
  let numString = String(num);
  for (let word of words) {
    //o(n) n time
    word = word.split("").reverse().join("");
    // console.log("word", word);
    let convertedNumber = "";
    let isValid = true;
    for (let i = 0; i < word.length; i++) {
      //O(n)
      if (word[i] in dict) convertedNumber += dict[word[i]];
      else isValid = false;
    }
    //console.log(convertedNumber);
    if (!isValid) continue;
    if (numString.indexOf(convertedNumber) !== -1) return true;
  }
  return false;
};

//console.log(isValid(3160061789, ["amazon", "google", "facebook"]));

console.log("3160061789".indexOf("6"));

const record = new Array(7);

console.log("record=>", record);
