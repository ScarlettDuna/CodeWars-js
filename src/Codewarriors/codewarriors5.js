/* Implement a function that accepts 3 integer values a, b, c.
The function should return true if a triangle can be built with the sides of given length and false in any other case.
(In this case, all triangles must have surface greater than 0 to be accepted). */
function isTriangle(a,b,c) {
  if (a < 0 || b < 0 || c < 0) {
    return false;
  }
  let semi_perimeter = (a + b + c) / 2;
  let area = Math.sqrt(semi_perimeter * (semi_perimeter - a) * (semi_perimeter - b) * (semi_perimeter - c));
  if (area > 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isTriangle(1,2,2));
console.log(isTriangle(4,2,3));
console.log(isTriangle(1,2,3));
console.log(isTriangle(-5,1,3));