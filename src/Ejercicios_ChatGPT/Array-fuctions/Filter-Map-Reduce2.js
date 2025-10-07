// Ejercicio 1: Promedio de los números pares, Usa filter() y reduce() para calcular el promedio de los números pares.
const numeros = [4, 7, 10, 3, 8, 9];
let promedioPares = numeros
  .filter(x => x % 2 === 0)
  .reduce((acc, num, _, array) => acc += num / array.length, 0)
console.log(promedioPares.toFixed(2))

// Ejercicio 2: Total de ventas por categoría (solo las que superan 50€) Usa filter() y reduce() para obtener un objeto con el total vendido por categoría,
// pero solo contando las ventas mayores o iguales a 50€.
const ventas = [
  { categoria: "ropa", monto: 80 },
  { categoria: "tecnología", monto: 120 },
  { categoria: "ropa", monto: 40 },
  { categoria: "hogar", monto: 75 },
  { categoria: "hogar", monto: 30 }
];
let ventasMas50 = ventas.filter(x=> x.monto >= 50)
let ventasPorCategoria = ventasMas50.reduce((acc, venta) => {
  acc[venta.categoria] = (acc[venta.categoria] || 0) + venta.monto;
  return acc;
}, {})
console.log(ventasPorCategoria)

// Ejercicio 3: Transformar datos y agruparlos. Usa map() y reduce() para crear un objeto que muestre el promedio de notas por curso,
// pero primero transforma las notas con map() para que cada una tenga +1 punto extra (máximo 10).
const alumnos = [
  { nombre: "Ana", curso: "A", nota: 8 },
  { nombre: "Luis", curso: "B", nota: 6 },
  { nombre: "Marta", curso: "A", nota: 9 },
  { nombre: "Pedro", curso: "B", nota: 7 },
  { nombre: "Sara", curso: "A", nota: 5 }
];
let notasSubidas = alumnos
  .map(alumno => ({
    ...alumno,
    nota: alumno.nota < 10 ? alumno.nota += 1 : alumno.nota
  }))
let notaTotalPorCurso = notasSubidas
  .reduce((acc, alumno) => {
    acc[alumno.curso] += alumno.nota;
    return acc;
  }, {A: 0, B: 0})
let promedioPorCurso = {
  A: (notaTotalPorCurso.A / notasSubidas.filter(a => a.curso === "A").length).toFixed(2),
  B: (notaTotalPorCurso.B / notasSubidas.filter(b => b.curso === "B").length).toFixed(2)
}
console.log(promedioPorCurso)
let promedioPorCurso2 = alumnos
  .map(alumno => ({
    ...alumno,
    nota: alumno.nota < 10 ? alumno.nota + 1 : alumno.nota
  }))
  .reduce((acc, alumno) => {
    acc[alumno.curso] += alumno.nota / alumnos.filter(a => a.curso === alumno.curso).length;
    return acc;
  }, {A: 0, B: 0})

console.log(promedioPorCurso2)

// Ejercicio 4: Promedio de notas por curso (A, B y C)
const alumnos2 = [
  { nombre: "Ana", curso: "A", nota: 8 },
  { nombre: "Luis", curso: "B", nota: 6 },
  { nombre: "Marta", curso: "A", nota: 9 },
  { nombre: "Pedro", curso: "B", nota: 7 },
  { nombre: "Sara", curso: "A", nota: 5 },
  { nombre: "Hugo", curso: "C", nota: 10 },
  { nombre: "Laura", curso: "C", nota: 8 }
];
// Usa map() para subir +1 punto a cada nota (sin pasar de 10).
let notasSubidas2 = alumnos2.map(alumno => ({
  ...alumno,
  nota: alumno.nota < 10 ? alumno.nota + 1 : alumno.nota
}))
// Usa reduce() para calcular el promedio por curso (A, B y C).
let promedioPorCurso3 = notasSubidas2.reduce((acc, alumno) => {
  acc[alumno.curso] = (acc[alumno.curso] || 0) + alumno.nota / alumnos2.filter(a => a.curso === alumno.curso).length;
  return acc;
}, {})
console.log(promedioPorCurso3)
// Opción más eficiente
let notasSubidas_2 = alumnos2.map(alumno => ({
  ...alumno,
  nota: alumno.nota < 10 ? alumno.nota + 1 : alumno.nota
}));

let acumulado = notasSubidas_2.reduce((acc, alumno) => {
  // si no existe la clave, la inicializamos
  if (!acc[alumno.curso]) {
    acc[alumno.curso] = { suma: 0, cantidad: 0 };
  }

  acc[alumno.curso].suma += alumno.nota;
  acc[alumno.curso].cantidad += 1;

  return acc;
}, {});

// transformamos las sumas en promedios
let promedioPorCurso_3 = Object.fromEntries(
  Object.entries(acumulado).map(([curso, datos]) => [
    curso,
    (datos.suma / datos.cantidad).toFixed(1)
  ])
);

console.log(promedioPorCurso_3);
