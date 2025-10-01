/* Given an array of integers, find the one that appears an odd number of times.
There will always be only one integer that appears an odd number of times.*/
function findOdd(array) {
  if (array.length === 1) return 1;
  // array to collect unique numbers
  let singles = [];
  for (let i = 0; i < array.length; i++) {
    if (singles.indexOf(array[i]) === -1 ) {
      singles.push(array[i]);
    }
  }
  let repetitions = 0;
  for (let i = 0; i < singles.length; i++) {
    repetitions = 0;
    for (let j = 0; j < array.length; j++) {
      if (singles[i] === array[j]) {
        repetitions += 1;
      }
    }
    if (repetitions % 2 !== 0) {
      return repetitions;
    }
  }
  return repetitions;
}
console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]));

/*
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd). */