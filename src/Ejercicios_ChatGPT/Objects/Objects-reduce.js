// Ejercicio 1 — Contar ocurrencias de valores
const frutas = ["manzana", "pera", "manzana", "plátano", "pera", "pera"];
// Usa reduce() para obtener un objeto con el conteo de cada fruta, y luego ordena las claves alfabéticamente con Object.entries() y Object.fromEntries().
let conteoFruta = frutas.reduce((acc, fruta) => {
  acc[fruta] = (acc[fruta] || 0) + 1;
  return acc;
}, {})
console.log(conteoFruta)
// Ejercicio 2 — Agrupar empleados por departamento
// Usa reduce() para crear un objeto donde cada clave sea un departamento y su valor sea un array con los nombres de los empleados de ese departamento.
const empleados = [
  { nombre: "Ana", depto: "Ventas" },
  { nombre: "Luis", depto: "Marketing" },
  { nombre: "Carlos", depto: "Ventas" },
  { nombre: "Marta", depto: "IT" }
];
let reportDepto = empleados.reduce((acc, emple) => {
  acc[emple.depto] ||= [];
  acc[emple.depto].push(emple.nombre);
  return acc;
}, {})
console.log(reportDepto)

// Ejercicio 3 — Calcular totales por categoría
// Usa Object.entries() y reduce() para crear un nuevo objeto que contenga el total vendido por categoría (sumando cada array de números).
const ventas = {
  ropa: [20, 35, 40],
  tecnologia: [100, 200],
  hogar: [15, 25, 30, 10]
};
let totalDepto = Object.entries(ventas).reduce((acc, [depto, ventas]) => {
  acc[depto] = (acc[depto] || 0) + ventas.reduce((a, b) => a + b);
  return acc;
}, {})
console.log(totalDepto)

// Ejercicio 1 — Promedio de números positivos Usa filter() y reduce() para calcular el promedio solo de los números positivos.
const numeros = [3, -1, 8, 5, -2, 10];
let promedioPositivos = numeros.filter(num => num > 0).reduce((acc, num, _, array) => acc + num / array.length, 0)
console.log(promedioPositivos)

// Ejercicio 2 — Transformar precios con IVA Usa Object.entries() y Object.fromEntries() junto con map()
// para devolver un nuevo objeto con los precios con un IVA del 21%, con dos decimales.
const precios = { pan: 1, leche: 1.5, huevos: 3 };
let preciosConIVA = Object.fromEntries(Object.entries(precios).map(([nombre, precio]) => [nombre, (precio * 1.21).toFixed(2)]))
console.log(preciosConIVA)

// Ejercicio 3 — Verificar stock Usa some() y every() para:
// comprobar si algún producto está agotado,
// y si todos tienen stock positivo.
const productos = [
  { nombre: "Camisa", stock: 10 },
  { nombre: "Pantalón", stock: 0 },
  { nombre: "Zapatos", stock: 5 }
];
let algunAgotado = productos.some(prod => prod.stock === 0)
let todosStock = productos.every(prod => prod.stock > 0)

// Ejercicio 4 — Agrupar ventas por categoría
const ventas2 = [
  { categoria: "Ropa", monto: 40 },
  { categoria: "Tecnología", monto: 120 },
  { categoria: "Ropa", monto: 30 },
  { categoria: "Hogar", monto: 70 },
  { categoria: "Tecnología", monto: 90 }
];
let ventasPorCategoria = ventas2.reduce((acc, venta) => {
  acc[venta.categoria] = (acc[venta.categoria] || 0) + venta.monto
  return acc;
}, {})
console.log(ventasPorCategoria)

// Ejercicio 5 — Normalizar claves
const datos = {
  "NOMBRE": "Lucía",
  "EDAD": 25,
  "CIUDAD": "Madrid"
};
// Usa Object.entries() + map() + Object.fromEntries() para crear un nuevo objeto con las claves en minúsculas.
let datosMinusculas = Object.fromEntries(Object.entries(datos).map(([categoria, dato]) => [categoria.toLowerCase(), dato]))
console.log(datosMinusculas)

// Ejercicio 6 — Promedio de notas por curso
const alumnos = [
  { nombre: "Ana", curso: "A", nota: 8 },
  { nombre: "Luis", curso: "B", nota: 6 },
  { nombre: "Marta", curso: "A", nota: 9 },
  { nombre: "Pedro", curso: "B", nota: 7 },
  { nombre: "Sara", curso: "A", nota: 5 }
];
let promedioPorCurso = alumnos.reduce((acc, alumno) => {
  acc[alumno.curso] ||= {suma: 0, cantidad: 0}
  acc[alumno.curso].suma += alumno.nota;
  acc[alumno.curso].cantidad += 1;
  return acc;
}, {})
let promedios = Object.fromEntries(Object.entries(promedioPorCurso).map(([curso, {suma, cantidad}]) => [
  curso, (suma / cantidad).toFixed(2)
]))
console.log(promedios)