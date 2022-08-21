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

console.log(isIsomorphic(s, t));

let a = "veysel";
for (let i in a) {
  console.log(i);
}
