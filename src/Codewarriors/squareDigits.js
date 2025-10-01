/*  square every digit of a number and concatenate them.
* An input of 765 will/should return 493625 because 7 is 49, 6 is 36, and 5 is 25. (49-36-25) */
function squareDigits(num){
  let digits = [];
  while(num > 1){
    digits.push(num%10)
    num = parseInt(num / 10);

  }
  let result = "";
  for (let i = digits.length - 1; i >= 0 ; i--) {
    result += Math.pow(digits[i], 2);
  }
  return +result;
}

// function squareDigits(num){
//   return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));}