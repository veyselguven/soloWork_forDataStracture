function uniquearray(array) {
  let unique_array = Array.from(new Set(array));
  return unique_array;
}
console.log("newSet", new Set([1, 4, 5, 3, 5, 33, 5, 35, 35, 5, 53]));

//console.log("array", Array.from(2, 4, 5, 5, 3, 3, 4));
// console.log(uniquearray([1, 3, 4, 5, 3, 5, 3, 5]));

function unque_array(arr) {
  let unique_array = arr.filter(function (elem, index, self) {
    return index == self.indexOf(elem);
  });
  return unique_array;
}
//console.log(unique_array(array_with_duplicates));

console.log(
  "unique",
  unque_array([2, 3, 3, 5, 5, , 3, 22, 33, 22, 3, 1, 2, 5, 6])
);
