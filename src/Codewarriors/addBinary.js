/* Implement a function that adds two numbers together and returns their sum in binary.
The conversion can be done before, or after the addition.

The binary number returned should be a string.*/
function convert2binary(number){
  let binary = "";
  if (number === 0) {
    return "";
  }
  while (number > 1) {
    binary = number % 2 + binary;
    number = parseInt(number / 2);
  }
  if (number === 1) {
    binary = 1 + binary;
  }
  return binary;
}
function addBinary(a,b) {
  return convert2binary(a + b)
}

