// Tienes un array de números, Usa .filter() para obtener un nuevo array solo con los números pares.
const numeros = [1, 2, 3, 4, 5, 6, 7, 8];
let pares = numeros.filter(num => num % 2 === 0)
console.log(pares)

// Tienes un array de palabras, Usa .filter() para devolver solo las palabras que tengan 4 letras o menos.
const palabras = ["sol", "luna", "estrella", "mar"];
let palabrasCortas = palabras.filter(palabra => palabra.length <= 4)
console.log(palabrasCortas)

//Tienes un array de objetos, Usa .filter() para obtener un nuevo array con solo los productos que tengan stock mayor que 0.
const productos = [
  { nombre: "camisa", stock: 5 },
  { nombre: "pantalón", stock: 0 },
  { nombre: "zapatos", stock: 3 },
  { nombre: "bufanda", stock: 0 }
];
let enStock = productos.filter(producto => producto.stock > 0);
console.log(enStock)

// Tienes un array de objetos, Usa .filter() para obtener solo las personas mayores o iguales a 18 años.
const personas = [
  { nombre: "Ana", edad: 17 },
  { nombre: "Luis", edad: 22 },
  { nombre: "Marta", edad: 15 },
  { nombre: "Pedro", edad: 30 }
];
let mayoresEdad = personas.filter(persona => persona.edad >= 18)
console.log(mayoresEdad)

//Tienes un array de palabras, Usa .filter() para obtener solo las palabras que contengan la letra "e".
const palabras2 = ["sol", "estrella", "cielo", "nube", "luz"];
let conE = palabras2.filter(palabra => palabra.includes("e"))
console.log(conE)

// Tienes un array de precios, Usa .filter() para quedarte con los precios que estén entre 50 y 200 (incluidos).
const precios = [10, 50, 100, 150, 200, 250];
let entre50y200 = precios.filter(precio => precio >= 50 && precio <= 200)
console.log(entre50y200)