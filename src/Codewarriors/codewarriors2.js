// Function that tells you if a number is a perfect square.

function isSquare(n){
  if (n < 0) {
    return false;
  }
  let raiz_cuadrada = Math.sqrt(n);
  if (raiz_cuadrada % 1 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isSquare(-1));
console.log(isSquare(5));
console.log(isSquare(3));
console.log(isSquare(4));
console.log(isSquare(0));