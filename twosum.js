console.log("hello");

const nums = [2, 7, 11, 15];
const target = 9;

/*
        9-2 =7
comp=target-nums[i]

2:0,
7:1,
11:2,
15:3

*/

function solution(nums, target) {
  let hash = {};
  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    const complement = targetSum - num;
    if (complement in hash) {
      console.log(hash);
      return [i, hash[complement]];
    }
    hash[num] = i;
  }
}

console.log(solution(nums, target));

const pairProduct = (numbers, targetProduct) => {
  let hash = {};
  for (let i = 0; i < numbers.length; i++) {
    let value = numbers[i];
    let complemet = targetProduct / value;
    if (complemet in hash) {
      return [hash[complemet], i];
    }
    hash[value] = i;
    // console.log(hash);
  }
  console.log(hash);
};

//{ '4': 0,'7': 1, '9': 2 , "2":3, "5":4, "1":5}
pairProduct([4, 7, 9, 2, 5, 1], 5);

const str = "hello";

function solution(str) {
  let result = "";

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }

  return result;
}

console.log(solution(str));

function tersCevir(str) {
  // Base case: Stringin uzunluğu 0 veya 1 ise, doğrudan stringi döndür
  if (str.length <= 1) {
    return str;
  }

  // İlk karakteri al, geri kalanı recursive olarak ters çevir
  const ilkKarakter = str[0];
  const geriKalan = str.slice(1);
  const tersGeriKalan = tersCevir(geriKalan);

  // İlk karakterin sona eklenmiş hali ile ters çevrilmiş geri kalanı birleştir ve döndür
  return tersGeriKalan + ilkKarakter;
}

const orijinalString = "Merhaba!";
const tersString = tersCevir(orijinalString);
console.log(tersString); // "!abahreM"
