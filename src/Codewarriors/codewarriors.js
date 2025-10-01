/* Implement a function that computes the difference between two lists.
The function should remove all occurrences of elements from the first list (a)
that are present in the second list (b). The order of elements in the
first list should be preserved in the result. */

/*  let arr = [1, 2, 3, 2];
let nuevo = arr.filter(num => num !== 2);
console.log(nuevo); // [1, 3]
 */
function arrayDiff(a, b) {
  if (Array.isArray(a) && a.length === 0) {
    return a;
  } else if (Array.isArray(b) && b.length === 0) {
    return a;
  }
  let result = a;
  for (let i = 0; i < b.length; i++) {
    result = result.filter(num => num !== b[i]);

  }
  return result;
}

let a = [1, 2]
let b = [1]
console.log(arrayDiff(a, b))
let a2 = [1, 2, 2, 2, 3]
let b2 = [2]
console.log(arrayDiff(a2, b2));
console.log(arrayDiff([1,2,3], [1,2]));
console.log(arrayDiff([], [1,2]));
console.log(arrayDiff([1,2,2], []));