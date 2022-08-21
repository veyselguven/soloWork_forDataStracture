var isIsomorphic = function (s, t) {
  // debugger;
  const obj = {};
  for (i in s) {
    if (!(s[i] in obj)) obj[s[i]] = t[i];
    else {
      if (obj[s[i]] !== t[i]) return false;
    }
  }
  const ob = {};
  for (i in t) {
    if (!(t[i] in ob)) ob[t[i]] = s[i];
    else {
      if (ob[t[i]] !== s[i]) return false;
    }
  }

  return true;
};

let s = "egg",
  t = "add";

//console.log(isIsomorphic(s, t));

let a = "veysel";
for (let i in a) {
  console.log(i);
}

function pigIt(str) {
  str = str.split(" ");
  let result = [];

  for (let i = 0; i < str.length; i++) {
    if (/([a-zA-Z])/.test(str[i])) {
      let word = str[i].slice(1) + str[i][0] + "ay";
      result.push(word);
    } else {
      result.push(s[i]);
    }
  }
  return result.join(" ");
}

console.log(pigIt("Pig latin is cool"));

function pigIt2(str) {
  //Code here
  return str
    .split(" ")
    .map((word) => {
      return word.substring(1) + word[0] + "ay";
    })
    .join(" ");
}
