// console.log("hello");
function isMatch(text, pattern) {
  // debugger
  if (text === pattern) return true;
  let count = 0;
  for (let i = 0; i < pattern.length; i++) {
    if (pattern[i] === "." || pattern[i] === "*") return true;
    if (pattern[i] === text[i]) count++;
  }
  if (count !== text.length) return false;
  return false;
}

//console.log(isMatch("abbdbb", "ab*d"));

// console.log("Mehmet" === "Mehmet");
