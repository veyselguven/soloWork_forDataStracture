// var isIsomorphic = function (s, t) {
//   // debugger;
//   const obj = {};
//   for (i in s) {
//     if (!(s[i] in obj)) obj[s[i]] = t[i];
//     else {
//       if (obj[s[i]] !== t[i]) return false;
//     }
//   }
//   const ob = {};
//   for (i in t) {
//     if (!(t[i] in ob)) ob[t[i]] = s[i];
//     else {
//       if (ob[t[i]] !== s[i]) return false;
//     }
//   }

//   return true;
// };

// let s = "egg",
//   t = "add";

//console.log(isIsomorphic(s, t));

// let a = "veysel";
// for (let index in a) {
//   console.log("i=>", index);
//   console.log("a=>", a[index]);
// }
// let a = { name: "Veysel", surname: "Basbyadr" };
// for (let index in a) {
//   console.log("index=>", index); // name ,surname
//   console.log("a=>", a[index]); // veysel,basbaydar
// }

// let b = [{ name: "Veysel", surname: "Basbyadr" }];
// for (let x of b) {
//   console.log("x=>", x);
//   console.log("b=>", b);
// }

// function pigIt(str) {
//   str = str.split(" ");
//   let result = [];

//   for (let i = 0; i < str.length; i++) {
//     if (/([a-zA-Z])/.test(str[i])) {
//       let word = str[i].slice(1) + str[i][0] + "ay";
//       result.push(word);
//     } else {
//       result.push(s[i]);
//     }
//   }
//   return result.join(" ");
// }

// console.log(pigIt("Pig latin is cool"));

// function pigIt2(str) {
//   //Code here
//   return str
//     .split(" ")
//     .map((word) => {
//       return word.substring(1) + word[0] + "ay";
//     })
//     .join(" ");
// }

// console.log("2" + 0 === 20);

let a = "3";
+a--;
console.log(a);
