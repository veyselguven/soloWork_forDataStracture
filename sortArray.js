const data = [
  { name: "Tomato", cost: 10, weight: 5 },
  { name: "Carrot", cost: 15, weight: 2 },
  { name: "Onion", cost: 5, weight: 7 },
];

function getSortValue(vegatable) {
  return vegatable.cost;
}

const sortOrder = "asc";

data.sort((a, b) => {
  const valueA = getSortValue(a);
  const valueB = getSortValue(b);
  const reverserOrder = sortOrder === "asc" ? 1 : -1;

  if (typeof valueA === "string") {
    return valueA.localeCompare(valueB) * reverserOrder;
  } else {
    return (valueA - valueB) * reverserOrder;
  }
});

console.log(data);
/// solve without sort((a,b)=>a-b) // assending
function selectionSort(arr) {
  // Array'i değiştirmemek için kopya al (isteğe bağlı ama iyi alışkanlık)
  const array = arr.slice();

  // Array'in her elemanı için
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;

    // i'den sonraki en küçük elemanı bul
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    // En küçük eleman i'de değilse yer değiştir
    if (minIndex !== i) {
      let temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
  }

  return array;
}
