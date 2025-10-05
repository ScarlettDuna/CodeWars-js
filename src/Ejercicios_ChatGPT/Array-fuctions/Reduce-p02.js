// Usa reduce() para calcular el total recaudado por cada producto en un objeto como:
let ventas = [
  { producto: "camisa", precio: 25 },
  { producto: "pantalón", precio: 40 },
  { producto: "camisa", precio: 25 },
  { producto: "zapatos", precio: 60 }
]
let ventasXproducto = ventas.reduce((acc, prod) => {
  acc[prod.producto] = (acc[prod.producto] || 0) + prod.precio;
  return acc
}, {})

console.log(ventasXproducto)

// Convierte esta cadena en un objeto con la frecuencia de cada letra (ignora espacios).
let string = "javascript mola mucho";
let arrayFromString = Array.from(string)
let frecLetras = arrayFromString
  .filter(letra => letra !== " ")
  .reduce((acc, letra) => {
  acc[letra] = (acc[letra] || 0) + 1;
  return acc;
}, {})
console.log(arrayFromString)
console.log(frecLetras)

// Tienes un array de arrays (matriz), Usa reduce() para "aplanarlo" en un solo array:
let matriz = [[1, 2], [3, 4], [5, 6]];
let plano = matriz.reduce((acc, num) => {
  return acc.concat(num);
}, [])
console.log(plano)

// Tienes un array de números, Usa reduce() para encontrar el máximo valor del array.
let misNumeros =  [5, 8, 2, 10, 3]

let min = misNumeros.reduce((a, b) => a < b ? a : b)
console.log(min)

// Mínimo y Máximo en una sola operación
/* let resultado = numeros.reduce((acc, num) => {
  if (num < acc.min) acc.min = num;
  if (num > acc.max) acc.max = num;
  return acc;
}, { min: Infinity, max: -Infinity }); */

// Tienes un array de palabras, Usa reduce() para encontrar la palabra más larga.
let palabras = ["sol", "luna", "estrella", "mar", "cielo"]
let maxLarga = palabras.reduce((max, palabra) =>
  palabra.length > max.length ? palabra : max
)
console.log(maxLarga)

// Tienes un array de objetos con notas de estudiantes, Usa reduce() para calcular el promedio de todas las notas.
let estudiantes = [
    { nombre: "Ana", nota: 7 },
    { nombre: "Luis", nota: 5 },
    { nombre: "Marta", nota: 9 },
    { nombre: "Pablo", nota: 6 }
]
let promedio = estudiantes.reduce((acc, estudiante) =>
  acc += estudiante.nota, 0) / estudiantes.length

console.log(promedio)