/* A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits,
each raised to the power of the number of digits in a given base.
In this Kata, we will restrict ourselves to decimal (base 10). */

function narcissistic(value) {
  let narcissistic = Number(value);
  let potencia = 0;
  let digitos = [];
  while (narcissistic >= 1) {
    potencia++;
    digitos.push(Math.floor(narcissistic % 10));
    narcissistic = Math.floor(narcissistic / 10);
  }
  let suma = 0;
  for (let i = 0; i < digitos.length; i++) {
    suma += Math.pow(digitos[i], potencia);
  }
  if (suma === value) {
    return true;
  } else {
    return false;
  }
}

console.log(narcissistic(153));
console.log(narcissistic(1652));