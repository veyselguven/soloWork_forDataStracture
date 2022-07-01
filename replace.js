// use for string replace

// string.replace(regex , string or function )

var s = "unicorns and rainbows";

let c = s.replace(/unicorns/, "cupcakes");

//console.log(c); //cupcakes and rainbows
//console.log(s); //unicorns and rainbows orjinal string never modify

let x = "unicorns and rainbows and cupcakes";

let a = x.replace(/\w{6,8}/, "kittens");
//kittens and rainbows and cupcakes
//replace 6 to 8 character with kittens
// if you put /\w{6,8}/g
let b = x.replace(/\W{8}/g, "kittens");
//kittens and kittens and kittens
//console.log(b);

let hatun = "veysel guven basbaydar";

//console.log(hatun.replace(/[aeuio]/g, "naber"));
//[] match olur ben burda eger aeui gorursen degistir dedim

let veysel = "asdfsdg: sdf&53#@^ 2v3r ";

veysel = veysel.replace(/[^a-z0-9]/gi, "");
//Remove all non-alphanumeric Characters from String
//asdfsdgsdf532v3r

veysel = veysel.replace(/[1234567890]/g, "");
//asdfsdgsdf532v3r

console.log(veysel);
