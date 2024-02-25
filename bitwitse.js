function decimalToBinary(decimalNumber) {
  debugger;
  if (decimalNumber === 0) {
    return "0";
  }

  let binary = "";
  let tempNumber = decimalNumber;

  while (tempNumber > 0) {
    binary += tempNumber % 2;
    tempNumber = Math.floor(tempNumber / 2);
  }

  return binary;
}

// Example usage:
const decimalValue = 5;
const binaryRepresentation = decimalToBinary(decimalValue);

console.log(
  `Binary representation of ${decimalValue} is: ${binaryRepresentation}`
);

var bitwiseComplement = function (N) {
  let binary = N.toString(2);
  binary = binary
    .split("")
    .map((x) => {
      return x == 1 ? 0 : 1;
    })
    .join("");
  return parseInt(binary, 2);
};
