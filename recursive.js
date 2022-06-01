// girilen parametre degerine kadar olan sayilari toplayan
// recursive fonksiyonu yazin

let i = 0;
let toplam = 0;

function topla(number) {
  if (i < number) {
    toplam += i;
    i++;
    //console.log(toplam + i);
    console.log(toplam);
    topla(number);
  }
}

topla(5);
