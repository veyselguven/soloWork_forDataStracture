var isValid = function (s) {
  // debugger;
  const hasMap = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  //  "()[]{}"
  let stack = [];
  for (let ch of s) {
    if (hasMap[ch]) {
      // ch is an opening bracket
      stack.push(hasMap[ch]);
    } else if (stack.length > 0 && stack[stack.length - 1] === ch) {
      // ch. is a closing bracket and top of stack matches
      stack.pop();
    } else {
      // ch is a closing bracket and top of the stack doesnt match
      return false;
    }
  }
  return stack.length === 0;
};

console.log(isValid("{[]}({}"));

const decompressBraces = (s) => {
  const nums = "123456789";
  const stack = [];
  // 2{q}3{tu}v
  for (let char of s) {
    if (nums.includes(char)) {
      stack.push(Number(char));
    } else {
      if (char === "}") {
        let segment = "";
        while (typeof stack[stack.length - 1] !== "number") {
          const popped = stack.pop();
          segment = popped + segment;
        }
        const number = stack.pop();
        stack.push(repeat(segment, number));
      } else if (char !== "{") {
        stack.push(char);
      }
    }
  }

  return stack.join("");
};

const repeat = (str, n) => {
  let result = "";
  for (let i = 0; i < n; i += 1) {
    result += str;
  }
  return result;
};
//decompressBraces("2{q}3{tu}v");
