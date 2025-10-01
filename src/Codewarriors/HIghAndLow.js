// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
function highAndLow(numbers){
  // Separate string into an array
  let separatedNumbers = numbers.split(" ")
  // convert to integers
  for (let i = 0; i < separatedNumbers.length; i++) {
    separatedNumbers[i] = parseInt(separatedNumbers[i]);
  }
  let result = "";
  let min = Math.min(...separatedNumbers)
  let max = Math.max(...separatedNumbers)
  result= result + (max).toString() + " " + (min).toString();
  return result;

}

console.log(highAndLow("1 2 3 4 5"))
console.log(highAndLow("1 2 -3 4 5"))