// Ejercicio 1: Comprueba si todos los números son positivos
const numeros = [3, 7, 2, 9, 12];
let positivos = numeros.every(x => x > 0)
console.log(positivos)

// Ejercicio 2: Todos los usuarios con mayores de edad
const usuarios = [
  { nombre: "Ana", edad: 17 },
  { nombre: "Luis", edad: 22 },
  { nombre: "Marta", edad: 16 }
];
let mayoresEdad = usuarios.every(x => x.edad >= 18);
console.log(mayoresEdad)

// Ejercicio 3: Comprueba si todas las palabras tienen más de tres letras
const palabras = ["sol", "luna", "mar", "pez"];
let masDe3 = palabras.every(x => x.length > 3)
console.log(masDe3)