// Tienes un array de personas, Usa filter() + map() para obtener un array con los nombres de las personas mayores de edad.
const personas = [
  { nombre: "Ana", edad: 17 },
  { nombre: "Luis", edad: 22 },
  { nombre: "Marta", edad: 15 },
  { nombre: "Pedro", edad: 30 }
];
let mayoresEdad = personas.filter(persona => persona.edad >= 18).map(persona => persona.nombre)
console.log(mayoresEdad)

// Tienes un array de productos, Usa map() para agregarles una propiedad precioConIVA (21% más).
// Luego usa filter() para mostrar solo los que tengan precioConIVA mayor o igual a 40.
const productos = [
  { nombre: "camisa", precio: 20 },
  { nombre: "pantalón", precio: 35 },
  { nombre: "zapatos", precio: 80 }
];
let precioMas40 = productos
  .map(producto => ({
    ...producto,
    precioConIVA: producto.precio * 1.21
  }))
  .filter(producto => producto.precioConIVA >= 40)
console.log(precioMas40)

// Tienes un array de objetos con notas, Usa filter() para quedarte solo con los alumnos aprobados (nota ≥ 5).
// Luego usa reduce() para calcular el promedio de sus notas.
const alumnos = [
  { nombre: "Ana", nota: 8 },
  { nombre: "Luis", nota: 4 },
  { nombre: "Marta", nota: 6 },
  { nombre: "Pedro", nota: 3 }
];
let mediaAprobados = alumnos
  .filter(alumno => alumno.nota >=5)
  .reduce((acc, alumno, _, array) => {
    acc += alumno.nota / array.length
    return acc;
  }, 0)
console.log(mediaAprobados)

// Tienes un array de alumnos, Usa filter() para obtener los aprobados y reduce() para calcular el porcentaje de aprobados respecto al total.
const alumnos2 = [
  { nombre: "Ana", nota: 8 },
  { nombre: "Luis", nota: 4 },
  { nombre: "Marta", nota: 6 },
  { nombre: "Pedro", nota: 3 },
  { nombre: "Sara", nota: 10 }
];
let porcentajeAprobados = alumnos2
  .filter(alumno => alumno.nota >= 5)
  .reduce((acc, alumno, _, array) => {
    acc = (array.length / alumnos2.length) * 100;
    return acc;
  }, 0)
console.log(`El porcentaje de aprobados es ${porcentajeAprobados}`)

// Tienes un array de productos, Usa map() para crear un nuevo array de strings con este formato:
// "Camisa: antes 25€, ahora 20€" (descuento del 20%).
const productos2 = [
  { nombre: "Camisa", precio: 25 },
  { nombre: "Pantalón", precio: 40 },
  { nombre: "Zapatos", precio: 80 }
];
let productosDescuento = productos2.map(producto => `${producto.nombre}: antes ${producto.precio}€, ahora ${producto.precio - producto.precio * 0.2}€`)
console.log(productosDescuento)

// Tienes un array de productos con categoría y precio, Usa reduce() para crear un objeto con el precio promedio por categoría:
const productos3 = [
  { nombre: "Manzana", categoria: "Fruta", precio: 2 },
  { nombre: "Pera", categoria: "Fruta", precio: 3 },
  { nombre: "Brócoli", categoria: "Verdura", precio: 4 },
  { nombre: "Zanahoria", categoria: "Verdura", precio: 2 },
  { nombre: "Pollo", categoria: "Carne", precio: 10 }
];
let datosCategoria = productos3.reduce((acc, producto) =>{
  acc[producto.categoria] ||= {suma: 0, cantidad: 0};
  acc[producto.categoria].suma += producto.precio;
  acc[producto.categoria].cantidad += 1;
  return acc;
}, {})
let precioCategoria = Object.entries(datosCategoria).reduce((acc, [categoria, datos]) => {
  acc[categoria] = datos.suma /datos.cantidad;
  return acc;
}, {})
console.log(datosCategoria)
console.log(precioCategoria)

// Tienes un array de productos, Calcula el precio promedio después de aplicar un 10 % de descuento a todos los productos que cuesten más de 30.
const productos4 = [
  { nombre: "Camisa", precio: 20 },
  { nombre: "Pantalón", precio: 40 },
  { nombre: "Zapatos", precio: 60 },
  { nombre: "Chaqueta", precio: 80 }
];
let preciosCaros = productos4.filter(prod => prod.precio >= 30);
let preciosDescontados = preciosCaros
  .map(prod => prod.precio * 0.9);
let precioPromedio = (preciosDescontados.reduce((acc, prod) => acc + prod, 0) / preciosDescontados.length).toFixed(2);

console.log(`El precio promedio es ${precioPromedio}`)

// Devuelve un nuevo array con los nombres en mayúsculas de los alumnos aprobados (nota ≥ 5).
const alumnos3 = [
  { nombre: "Ana", nota: 8 },
  { nombre: "Luis", nota: 4 },
  { nombre: "Marta", nota: 6 },
  { nombre: "Pedro", nota: 3 }
];
let alumnosAprobados = alumnos3
  .filter(alumno => alumno.nota >= 5)
  .map(alumno => alumno.nombre.toUpperCase())
console.log(alumnosAprobados)


// Devuelve un objeto que muestre el total vendido por cada categoría.
const ventas = [
  { categoria: "tecnología", monto: 300 },
  { categoria: "ropa", monto: 100 },
  { categoria: "tecnología", monto: 200 },
  { categoria: "hogar", monto: 400 },
  { categoria: "ropa", monto: 50 }
];
let ventaPorCategoria = ventas.reduce((acc, venta) => {
  acc[venta.categoria] = (acc[venta.categoria] || 0) + venta.monto;
  return acc;
}, {})
console.log(ventaPorCategoria)

// Calcula el salario promedio de los empleados cuyo estado activo sea true.
const empleados = [
  { nombre: "Ana", salario: 1200, activo: true },
  { nombre: "Luis", salario: 900, activo: false },
  { nombre: "Marta", salario: 1500, activo: true },
  { nombre: "Pedro", salario: 800, activo: true }
];
let empleadosActivos = empleados.filter(empleado => empleado.activo === true)
let salarioPromedioActivos = (empleadosActivos.reduce((acc, empleado) => acc + empleado.salario, 0 )/ empleadosActivos.length).toFixed(2);
console.log(empleadosActivos)
console.log(salarioPromedioActivos)

// Calcula el total final con IVA (21%) sumando el precio * cantidad de cada producto.
const productosSinIVA = [
  { nombre: "Camisa", precio: 20, cantidad: 3 },
  { nombre: "Pantalón", precio: 35, cantidad: 2 },
  { nombre: "Zapatos", precio: 50, cantidad: 1 }
];
let productosConIVA = productosSinIVA.map(prod => ({
  ...prod,
  precio: prod.precio * 1.21
}))
let total = productosConIVA.reduce((acc, prod) => {
  acc += prod.precio * prod.cantidad;
  return acc;
}, 0)
console.log(productosConIVA)
console.log(total)

// Calcula un objeto con el promedio de notas por curso
const alumnos4 = [
  { nombre: "Ana", curso: "A", nota: 8 },
  { nombre: "Luis", curso: "B", nota: 6 },
  { nombre: "Marta", curso: "A", nota: 7 },
  { nombre: "Pedro", curso: "B", nota: 4 },
  { nombre: "Sara", curso: "A", nota: 9 }
];
let cantidadCurso = alumnos4.reduce((acc, alumno) => {
  if (alumno.curso === "A") {
    acc.A += 1;
  } else {
    acc.B += 1;
  }
  return acc;
}, {A: 0, B:0})
let promedioPorCurso = alumnos4.reduce((acc, alumno) => {
  if (alumno.curso === "A") {
    acc.A += alumno.nota / cantidadCurso.A;
  } else {
    acc.B += alumno.nota / cantidadCurso.B;
  }
  return acc;
}, {A: 0, B: 0})
console.log(cantidadCurso)
console.log(promedioPorCurso)
