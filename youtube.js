/* 
Hash table
anahtarlari degerlere baglayan bir veri yapisi.
Anahtar verildiginde degere O(1) zamaninda erisilir.
Bu yontem diziler kullanilarak O(n) zamanda yapilabilirdi.
Javascript objeleri hash table a ornektir
*/

// let students = [
//   { id: 122, name: "veysel" },
//   { id: 134, name: "aysel" },
//   { id: 162, name: "emre" },
//   { id: 111, name: "habib" },
// ];

// function getStudentById(id, students) {
//   for (let student of students) {
//     if (student.id == id) {
//       return student;
//     }
//   }
// }

// console.log(getStudentById(122, students));

// let studentMap = {
//   122: { id: 122, name: "veysel" },
//   134: { id: 134, name: "aysel" },
//   162: { id: 162, name: "emre" },
//   111: { id: 111, name: "habib" },
// };

// console.log(studentMap[134]);

// linked

let item1 = {
  value: "a",
  next: null,
};
let item2 = {
  value: "b",
  next: null,
};
let item3 = {
  value: "c",
  next: null,
};

item1.next = item2;
item2.next = item3;

while (item1) {
  console.log(item1.value);
  item1 = item1.next;
}
console.log("----------");
console.log("----------");
console.log("----------");

// item1.next = item2.next;
// let item = item1;
// while (item) {
//   console.log(item.value);
//   item = item.next;
// }
// 1. Grid'i tek listeye çevir
let arr = [];
for (let i = 0; i < m; i++) {
  for (let j = 0; j < n; j++) {
    arr.push(grid[i][j]);
  }
}

// 2. k kez sağa kaydır
while (k > 0) {
  let last = arr[arr.length - 1]; // son elemanı al
  // tüm elemanları sağa kaydır
  for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = last; // sona gelen elemanı başa koy
  k--;
}

// 3. Tekrar 2D grid'e çevir
let result = [];
let index = 0;

for (let i = 0; i < m; i++) {
  let row = [];
  for (let j = 0; j < n; j++) {
    row.push(arr[index]);
    index++;
  }
  result.push(row);
}

return result;
