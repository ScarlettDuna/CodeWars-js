// Tienes un array de números, Usa reduce() para crear un nuevo objeto donde las claves sean los números y los valores sean el cuadrado de cada número.
let numeros = [1, 2, 3, 4, 5];
let numCuadrados = numeros.reduce((acc, num) => {
  acc[num] = Math.pow(num, 2);
  return acc
}, {})
console.log(numCuadrados)

// Tienes un array de strings, Usa reduce() para obtener el color que más veces se repite.
let colores = ["azul", "verde", "rojo", "azul", "rojo", "rojo"];
let masRepetido = colores
  .reduce((acc, color) => {
  acc[color] = (acc[color] || 0) + 1;
  return acc
}, {});
console.log(masRepetido)
let arrayMasRepetido = Object.entries(masRepetido)
  .reduce((acc, [color, count]) => {
    return count > acc[1] ? [color, count] : acc;
  })
// let [colorMasRepetido] = arrayMasRepetido;
console.log(arrayMasRepetido)


// Tienes un array de objetos con transacciones (positivo = ingreso, negativo = gasto), Usa reduce() para calcular el balance final (suma de todos los montos).
let saldo = [
  { tipo: "ingreso", monto: 100 },
  { tipo: "gasto", monto: -20 },
  { tipo: "ingreso", monto: 50 },
  { tipo: "gasto", monto: -10 }
]
let balanceFinal = saldo.reduce((acc, movimiento) => acc += movimiento.monto, 0)
console.log(balanceFinal)

// Dado este array de transacciones, Usa reduce() para obtener un objeto con esta forma:
const movimientos = [
  { tipo: "ingreso", monto: 100 },
  { tipo: "gasto", monto: -20 },
  { tipo: "ingreso", monto: 50 },
  { tipo: "gasto", monto: -10 },
  { tipo: "ingreso", monto: 200 }
];
let resumenMovimientos = movimientos.reduce((acc, movimiento) => {
  acc[movimiento.tipo] = (acc[movimiento.tipo] || 0 ) + movimiento.monto;
  return acc;
}, {})
console.log(resumenMovimientos)

let resumenMovimientos2 = movimientos.reduce((acc, movimiento) => {
  if (movimiento.tipo === "ingreso") {
    acc.ingresos += movimiento.monto;
  } else if (movimiento.tipo === "gasto") {
    acc.gastos += movimiento.monto;
  }
  // el balance siempre suma el monto (positivo o negativo)
  acc.balance += movimiento.monto;
  return acc;
}, { ingresos: 0, gastos: 0, balance: 0 });

console.log(resumenMovimientos2);
// { ingresos: 350, gastos: -30, balance: 320 }

// Usa reduce() para obtener un objeto que indique cuántos ingresos y cuántos gastos hay.
let conteo = movimientos.reduce((acc, mov) => {
  if (mov.tipo === "ingreso") {
    acc.ingresos += 1;
  } else if (mov.tipo === "gasto") {
    acc.gastos += 1;
  }
  return acc;
}, { ingresos: 0, gastos:0 })
console.log(conteo)

// Dado un array de palabras, Usa reduce() para formar una sola cadena de texto con espacios entre cada palabra:
let palabras =  ["JavaScript", "es", "genial"];
let frase = palabras.reduce((acc, palabra) =>
  acc.concat(" ", palabra))
let frase2 = palabras.join(" ")
console.log(frase)
console.log(frase2)

// Dado un array de números, Usa reduce() para devolver un objeto con la cantidad de números pares e impares.
let arrayNumeros =  [1, 2, 3, 4, 5, 6]
let paresImpares = arrayNumeros.reduce((acc, num) => {
  if (num % 2 === 0){
    acc.pares += 1;
  } else {
    acc.impares += 1;
  }
  return acc;
}, {pares: 0, impares: 0})
console.log(paresImpares)