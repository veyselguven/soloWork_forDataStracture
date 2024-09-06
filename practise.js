// let animals = ["eagle", "osprey", "salmon"];

// let key = (animal) => animal === "salmon";

// //console.log(key);

// if (animals.some(key)) {
//   console.log("swim");
// }

// Reverse each word in one sentence
const str = "Welcome to guide JS Guide!";

// create a function when to take a  string in order to reverse each sentence

// initialized a empty result string

// const reverseStr = (str) => {
//   let result = [];
//   str = str.split(" ");
//   for (let s of str) {
//     let a = s.split("").reverse().join("");
//     result.push(a);
//   }
//   console.log(result.join(" "));
// };

const reverseStr = (str) => {
  return str.split(" ").reverse().join(" ");
};

//console.log(reverseStr(str));

// define a function that takes an array of strings and returns the most commonly occuring string
// in that array

const mostCommonString = (strings) => {
  const commonStrings = {};
  strings.forEach((str) => {
    if (commonStrings[str] === undefined) {
      commonStrings[str] = 1;
    } else {
      commonStrings[str]++;
    }
  });
  //console.log(commonStrings);
  let maxEntry;
  let maxValue = 0;
  for (commonString in commonStrings) {
    if (commonStrings[commonString] > maxValue) {
      maxEntry = commonString;
      maxValue = commonStrings[commonString];
    }
  }
  return maxEntry;
};
const mostCommonString1 = (strings) => {
  const mapping = strings.reduce((acc, el) => {
    if (!(el in acc)) {
      acc[el] = 1;
    } else {
      acc[el]++;
    }
    return acc;
  }, {});
  let getMaxValue = Math.max(...Object.values(mapping));
  console.log("getMax=>", getMaxValue);
  console.log(mapping);
  let result = "";
  for (let i in mapping) {
    if (mapping[i] === getMaxValue) {
      result += i;
    }
  }
  //console.log(result);
  return result;
};

console.log(mostCommonString1(["a", "b", "c", "a"]));
mostCommonString1(["a", "b", "c", "a"]);
