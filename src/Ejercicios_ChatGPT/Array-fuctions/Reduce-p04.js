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
let reportNotas = notas.reduce((acc, nota, _, arr) => {
  acc.baja = Math.min(acc.baja, nota);
  acc.alta = Math.max(acc.alta, nota);
  acc.media += nota / arr.length;
  return acc
}, {alta: -Infinity, baja: Infinity, media: 0})
console.log(reportNotas)

// Tienes un array de personas, Usa reduce() para obtener un objeto con el promedio de edad por ciudad, así:
const personas = [
  { nombre: "Ana", ciudad: "Madrid", edad: 25 },
  { nombre: "Luis", ciudad: "Barcelona", edad: 30 },
  { nombre: "Marta", ciudad: "Madrid", edad: 35 },
  { nombre: "Pedro", ciudad: "Sevilla", edad: 40 },
  { nombre: "Lucía", ciudad: "Barcelona", edad: 20 }
];
let promedioCiudad = personas.reduce((acc, persona, _, array) => {
  acc[persona.ciudad] = (acc[persona.ciudad] || 0) + persona.edad / ((array.filter(p => p.ciudad === persona.ciudad).length));
  return acc;
}, {})
console.log(promedioCiudad)

// Tienes un array de ventas, Usa reduce() para obtener un objeto con el porcentaje de ventas totales que hizo cada vendedor.
const ventas = [
  { vendedor: "Ana", monto: 200 },
  { vendedor: "Luis", monto: 400 },
  { vendedor: "Ana", monto: 100 },
  { vendedor: "Pedro", monto: 300 },
  { vendedor: "Luis", monto: 100 }
];
let VentasPorVendedor = ventas.reduce((acc, vendedor) => {
  acc[vendedor.vendedor] = (acc[vendedor.vendedor] || 0) + vendedor.monto;
  return acc;
}, {})
let totalVentas = ventas.reduce((acc, vendedor) => acc += vendedor.monto, 0)
let porcentajeVentas = {};

for (let vendedor in VentasPorVendedor) {
  let porcentaje = (VentasPorVendedor[vendedor] / totalVentas) * 100;
  porcentajeVentas[vendedor] = porcentaje.toFixed(2);
}

console.log(VentasPorVendedor)
console.log(porcentajeVentas)
/* -- Mi versión, "menos eficiente"
let porcentajeVentas = ventas.reduce((acc, vendedor) => {
  acc[vendedor.vendedor] = (acc[vendedor.vendedor] || 0) + vendedor.monto / (ventas.reduce((acc, vendedor) => acc += vendedor.monto, 0)) * 100;
  return acc;
  }, {})
*/
