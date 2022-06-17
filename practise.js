let animals = ["eagle", "osprey", "salmon"];

let key = (animal) => animal === "salmon";

//console.log(key);

if (animals.some(key)) {
  console.log("swim");
}
