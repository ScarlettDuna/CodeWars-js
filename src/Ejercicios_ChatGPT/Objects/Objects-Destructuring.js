// Ejercicio 1 — Convertir y modificar pares "clave-valor"
const temperaturas = {
  madrid: 30,
  barcelona: 28,
  valencia: 32
};
// Usa Object.entries() y Object.fromEntries() junto con destructuring para crear un nuevo objeto con las temperaturas convertidas a grados Fahrenheit. F = C * 1.8 + 32
let tempFahrenheit = Object.entries(temperaturas).map(([ciudad, temperatura]) => [ciudad, (temperatura * 1.8 + 32)])
let objetoFahrenheit = Object.fromEntries(tempFahrenheit)
console.log(objetoFahrenheit)
// En una sola línea: const objetoFahrenheit = Object.fromEntries(Object.entries(temperaturas).map(([ciudad, t]) => [ciudad, t * 1.8 + 32]));

// Ejercicio 2 - Filtrar propiedades según su valor
// Usa Object.entries() + filter() + Object.fromEntries() para obtener un nuevo objeto solo con los productos que cuesten más de 30 €.
const productos = {
  camisa: 25,
  pantalon: 40,
  corbata: 15,
  abrigo: 90
};
let masDe30 = Object.entries(productos).filter(([nombre, precio]) => precio > 30)
let ObjetoMas30 = Object.fromEntries(masDe30)
console.log(ObjetoMas30)

// Ejercicio 3 — Cambiar nombres de claves, Usa Object.entries() y map() (con destructuring) para devolver un nuevo objeto donde las claves estén en mayúsculas.
const usuario = {
  nombre: "Ana",
  edad: 30,
  ciudad: "Sevilla"
};
let USUARIO = Object.entries(usuario).map(([campo, dato]) => [campo.toUpperCase(), dato])
let ObjectUsuario = Object.fromEntries(USUARIO)
console.log(ObjectUsuario)