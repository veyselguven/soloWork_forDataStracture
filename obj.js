const target = { a: 1, b: 2, d: 2 };
const source = { b: 4, c: 5, d: 6 };

const returnedObject = Object.assign(target, source);

//console.log(returnedObject);
const object1 = {
  a: "somestring",
  b: 42,
};
//console.log(Object.entries(object1));
////[ [ 'a', 'somestring' ], [ 'b', 42 ] ]

const ob = [1, 2, 4, 5];

//console.log(Object.entries(ob));
// [ [ '0', 1 ], [ '1', 2 ], [ '2', 4 ], [ '3', 5 ] ]

const ob2 = { a: 1, b: 2, c: 3 };
for (let property in ob2) {
  //console.log("property", property);
  //property a
  //property b
  // property c
  //console.log(ob2[property]);
  //1
  //2
  //3
}

const object3 = {
  a: "somestring",
  b: 42,
  c: false,
};

console.log(Object.values(object3));
//  'somestring', 42, false ]

const object4 = {
  a: "somestring",
  b: 42,
  c: false,
};

console.log(Object.keys(object4));
//[ 'a', 'b', 'c' ]
