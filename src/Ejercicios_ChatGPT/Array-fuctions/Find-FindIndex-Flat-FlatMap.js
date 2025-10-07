// Ejercicio 1 — Buscar un usuario por nombre, Usa find() para obtener el objeto del usuario llamado "María".
const usuarios = [
  { nombre: "Ana", edad: 22 },
  { nombre: "Luis", edad: 19 },
  { nombre: "María", edad: 30 },
  { nombre: "Pedro", edad: 25 }
];
let findMaria = usuarios.find(u => u.nombre === "María");
console.log(findMaria)

// Ejercicio 2 — Posición del primer número mayor que 50 Usa findIndex() para encontrar la posición (índice) del primer número mayor que 50.
const numeros = [10, 25, 60, 30, 80, 15];
let posicion50 = numeros.findIndex(u => u > 50)
console.log(posicion50)

// Ejercicio 3 — Extraer palabras de frases Usa flatMap() para crear un array con todas las palabras separadas, sin arrays anidados.
const frases = [
  "JavaScript es divertido",
  "Me gusta programar",
  "reduce y map son geniales"
];
let palabras = frases.flatMap(f => f.split(" "))
console.log(palabras)