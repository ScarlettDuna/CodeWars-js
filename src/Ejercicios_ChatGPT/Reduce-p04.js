// Tienes un array de productos, Usa reduce() para agruparlos por categoría en un objeto, donde cada clave sea la categoría y el valor sea un array con los nombres.
const productos = [
  { nombre: "manzana", categoria: "fruta" },
  { nombre: "pera", categoria: "fruta" },
  { nombre: "brócoli", categoria: "verdura" },
  { nombre: "espinaca", categoria: "verdura" },
  { nombre: "pollo", categoria: "carne" }
];
let orderProductos = productos.reduce((acc, prod) => {
  acc[prod.categoria] ||= []; // if (!acc[prod.categoria]) acc[prod.categoria] = [];
  acc[prod.categoria].push(prod.nombre)
  return acc;
},{})
console.log(orderProductos)

// Tienes un array de números con las notas de un examen, Usa reduce() para devolver un objeto con:
// la nota más baja
// la nota más alta
// la media de todas las notas
const notas = [5, 7, 9, 4, 6, 10, 8]
let reportNotas = notas.reduce((acc, nota) => {
  if (nota < acc.min) acc.baja = nota;
  if (nota > acc.max) acc.alta = nota;
  acc.media += nota / notas.length;
  return acc
}, {alta: 0, baja: 0, media: 0})
console.log(reportNotas)