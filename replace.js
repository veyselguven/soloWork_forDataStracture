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
console.log("veysel1", veysel);
//Remove all non-alphanumeric Characters from String
//asdfsdgsdf532v3r

veysel = veysel.replace(/[1234567890]/g, "");
//asdfsdg: sdf&#@^ vr

console.log("veysel2", veysel);

function validateIP(ip) {
  /**
	@param ip: string
	@return: boolean
	*/

  // your code goes here
  /////convert ip into array
  //////. '192.168.0.1'-->[192,168,0,1]///
  let splittArr = ip.split(".");

  if (splittArr.length < 4 || splittArr.length > 4) {
    return false;
  }

  let value = true;

  let left = 0;
  let ref = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  console.log(splittArr);
  for (let eachNum of splittArr) {
    //  console.log('eachNum=>',isNaN(eachNum))
    let replacedNonNumber = eachNum.replace(/[^a-z0-9]/gi, "");
  }

  while (left < splittArr.length) {
    if (parseInt(splittArr[left]) >= 0 && parseInt(splittArr[left]) <= 255) {
      left++;
    } else {
      value = false;
      break;
    }
  }

  console.log("result=>", value);
}

validateIP("1.2.3.0x1");
