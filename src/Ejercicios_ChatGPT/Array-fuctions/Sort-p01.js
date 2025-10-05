// Ejercicio 1: Ordena el array de números de menor a mayor y de mayor a menor
const numeros = [4, 10, 2, 7, 1];
let deMenorAMayor = [...numeros].sort((a, b) => a - b);
let deMayorAMenor = [...numeros].sort((a, b) => b - a);
console.log(deMenorAMayor)
console.log(deMayorAMenor)

// Ejercicio 2: Ordena las palabras alfabéticamente
const frutas = ["plátano", "manzana", "pera", "kiwi", "naranja"];
let ascendente = [...frutas].sort((a, b) => a.localeCompare(b))
let descendente = [...frutas].sort((a, b) => b.localeCompare(a));
console.log(ascendente)
console.log(descendente)

// Ejercicio 3: Ordenar objetos por propiedad
const productos = [
  { nombre: "Camisa", precio: 25 },
  { nombre: "Pantalón", precio: 40 },
  { nombre: "Zapatos", precio: 60 },
  { nombre: "Gorra", precio: 15 }
];
// Del más barato al más caro
let ordenPorPrecio = [...productos].sort((a, b) => a.precio - b.precio);
console.log(ordenPorPrecio)
// Por orden alfabético del nombre
let ordenPorNombre = [...productos].sort((a, b) => a.nombre.localeCompare(b.nombre));
console.log(ordenPorNombre)