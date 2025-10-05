// Tienes dos arrays, Usa el spread operator para combinarlos en un solo array.
let a = [1, 2, 3];
let b = [4, 5, 6];
let c = [...a, ...b];
console.log(c)

// Tienes un objeto, Crea un nuevo objeto a partir de persona, copiando todas sus propiedades pero cambiando la edad a 31 con spread operator.
let persona = { nombre: "Ana", edad: 30 };
let newPersona = {...persona, edad: 31}
console.log(newPersona)

// Crea un nuevo array que contenga todos los números menos el 30, usando el spread operator.
let numeros = [10, 20, 30, 40];
let numMenos30 = [...numeros]