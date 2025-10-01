/* You are given an array (which will have a length of at least 3, but could be very large) containing integers.
The array is either entirely composed of odd integers or entirely composed of even integers except for a single integer N.
Write a method that takes the array as an argument and returns this "outlier" N.
[2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)
[160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)*/
function findOutlier(integers){
  let even = 0, odd = 0 ;
  let weird_num = 0;
  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 === 0 ) {
      even++;
    } else {
      odd++;
    }
  }
  for (let i = 0; i < integers.length; i++) {
    if (even > odd) {
      if (integers[i] % 2 !== 0 ) {
        weird_num = integers[i];
      }
    } else {
      if (integers[i] % 2 === 0 ) {
        weird_num = integers[i];
      }

    }
  }
  return weird_num;
}
console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]))
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]))