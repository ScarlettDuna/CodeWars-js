// Tienes un array de números, Usa .map() para crear un nuevo array con cada número multiplicado por 2.
let numerosSimples = [1, 2, 3, 4, 5];
let numerosDuplicados = numerosSimples.map(num => num * 2)
console.log(numerosDuplicados)

// Tienes un array de strings, Usa .map() para devolver un nuevo array con todas las palabras en mayúsculas.
let palabras = ["hola", "mundo", "javascript"];
let mayusculas = palabras.map(palabra => palabra.toUpperCase());
console.log(mayusculas)

// Tienes un array de objetos con nombres, Usa .map() para obtener solo los nombres en un nuevo array.
let nombres = [
  { nombre: "Ana" },
  { nombre: "Luis" },
  { nombre: "Marta" }
]
let soloNombre = nombres.map(nombre => nombre.nombre);
console.log(soloNombre)

//Tienes un array de precios, Usa .map() para crear un nuevo array con un 20% de descuento aplicado a cada precio.
const precios = [100, 200, 300, 400];
let preciosDescontados = precios.map(precio => precio - precio * 0.2)
console.log(preciosDescontados)

// Tienes un array de objetos con nombres y apellidos, Usa .map() para devolver un nuevo array con los nombres completos en una sola cadena.
const personas = [
  { nombre: "Ana", apellido: "Pérez" },
  { nombre: "Luis", apellido: "Martín" },
  { nombre: "Marta", apellido: "López" }
];
let nombresCompletos = personas.map(persona => persona.nombre + " " + persona.apellido)
console.log(nombresCompletos)

// Tienes un array de números del 0 al 10, Usa .map() para devolver un nuevo array con los textos "Aprobado" o "Suspenso" según la nota (aprobado si ≥ 5).
const notas = [10, 8, 6, 4, 2];
let marks = notas.map(nota => nota >= 5 ? "Aprobado" : "Suspenso");
console.log(marks)
