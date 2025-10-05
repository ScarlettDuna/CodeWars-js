// Dado un array de números, usa reduce() para obtener la suma total de todos los elementos.
let array = [1, 2, 10, 5, 6, 8, 15];
let sumaArray = array.reduce((a , b) => a + b, 0)
console.log(sumaArray)

// Tienes un array de números. Usa reduce() para calcular el producto de todos los elementos (multiplicarlos entre sí).
let multiplicaArray = array.reduce((a,b) => a * b, 1)
console.log(multiplicaArray)

// Dado un array de strings, usa reduce() para contar cuántas veces aparece cada palabra y devuelve un objeto con el resultado.
let names = ["Ana", "Vanesa", "Bambú", "Marina", "Ana", "Vanesa"];
let cuenta = names.reduce((allnames, name) => {
  allnames[name] = (allnames[name] || 0) + 1;
  return allnames;
}, {});
console.log(cuenta)

// Tienes un array de objetos con id y nombre. Usa reduce() para convertirlo en un objeto donde cada clave sea el id y el valor sea el nombre.
const usuarios = [
  { id: 1, nombre: "Ana" },
  { id: 2, nombre: "Luis" },
  { id: 3, nombre: "Marta" }
];
let objUsuarios = usuarios.reduce((acc, usuario) => {
  acc[usuario.id] = usuario.nombre
  return acc;
}, {})
console.log(objUsuarios)

// Usa reduce() para agruparlos por categoría en un objeto, donde cada clave sea la categoría y el valor sea un array con los nombres.
let fruteria =  [
    { categoria: "fruta", nombre: "manzana" },
    { categoria: "fruta", nombre: "pera" },
    { categoria: "verdura", nombre: "zanahoria" },
    { categoria: "fruta", nombre: "plátano" },
    { categoria: "verdura", nombre: "brócoli" }
  ]
let orderFruteria = fruteria.reduce((acc, producto) => {
  acc[producto.categoria] ||= [];
  acc[producto.categoria].push(producto.nombre);
  return acc;
}, {})
console.log(orderFruteria)

// Tienes un array de números que pueden repetirse. Usa reduce() para crear un nuevo array que contenga solo los valores únicos (sin duplicados).
let numRepes = [1, 2, 10, 5, 6, 8, 5, 2, 10];
let notRepes = numRepes.reduce((acc, num) => {
  !acc.includes(num) ? acc.push(num) : acc;
  return acc;
}, [])
console.log(notRepes)