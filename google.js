const unique = (value, index, self) => {
  return self.indexOf(value) === index;
};

const sampleValues = [1, 4, 5, 2, "a", "e", "b", "e", 2, 2, 4];

//const uniqueValues = sampleValues.filter(unique);
//const uniqueValue=sampleValues.filter(unique);

var veysel = (x) => {
  let result = [];
  for (let i = 0; i < x.length; i++) {
    let element = x[i];
    if (!result.includes(element)) {
      result.push(element);
    }
  }
  return result;
};
let a = [1, 2, 4, 6, 7, 8, 5, 8, 2, 3, 4, 4, 4];
// console.log(veysel(a));
console.log([...new Set(a)]);
