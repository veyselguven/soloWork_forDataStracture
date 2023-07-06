// let a = [12, 3, 22, 42, 4];
// let count = 0;
// prev = -1;
// let len = a.length;
// index = 2;
// let i = 0;
// while (count < index) {
//   // debugger;
//   prev = a[i]; //node before index
//   //current = current.next; //node after the index
//   count++;
//   i++;
// }

var indexPairs = function (text, words) {
  let res = [];
  words.sort((a, b) => a.length - b.length);
  for (let i = 0; i < text.length; i++) {
    words.forEach((word) => {
      if (text.slice(i, i + word.length) === word) {
        res.push([i, i + word.length - 1]);
      }
    });
  }
  return res;
};
