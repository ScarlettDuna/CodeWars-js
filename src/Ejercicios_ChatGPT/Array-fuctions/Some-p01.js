// Ejercicio 1: Al menos un número negativo, Comprueba si algún número del array es negativo.
const numeros = [3, 7, -2, 9, 12];
let hayNegativo = numeros.some(x => x < 0);
console.log(hayNegativo);

// Ejercicio 2: Usuario mayor de edad, Comprueba si algún usuario es mayor de edad (edad >= 18).
const usuarios = [
  { nombre: "Ana", edad: 17 },
  { nombre: "Luis", edad: 22 },
  { nombre: "Marta", edad: 16 }
];
let mayorDeEdad = usuarios.some(x => x.edad >= 18);
console.log(mayorDeEdad);

// Ejercicio 3: Palabra larga, Comprueba si alguna palabra tiene más de 5 letras.
const palabras = ["sol", "luna", "mar", "montaña", "pez"];
let mas5letras = palabras.some(x => x.length > 5);
console.log(mas5letras);