console.log("afsd");

/* 
1
12
123
1234
12345
123456
1234567
123456
12345
1234
123
12
1
*/

let text = "";
let t = 1;

for (let i = 1; i < 14; i++) {
  if (i <= 7) {
    for (let j = 1; j <= i; j++) {
      text += j;
    }
  } else {
    for (let j = 1; j < i - t; j++) {
      text += j;
    }
    t += 2;
  }

  text += "<br>";
}

//document.write(text);

function minimalOperations(words) {
  // debugger;
  const res = [];
  for (let word of words) {
    let replacements = 0;
    for (let i = 1; i < word.length; i++) {
      if (word[i] === word[i - 1]) {
        word = word.slice(0, i) + "1" + word.slice(i + 1);
        replacements++;
      }
    }
    res.push(replacements);
  }
  return res;
}
const words = ["ab", "aab", "abb", "abab", "abaaaba"];

minimalOperations(words);
