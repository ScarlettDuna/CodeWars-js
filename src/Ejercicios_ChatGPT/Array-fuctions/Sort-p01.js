// Ejercicio 1: Ordena el array de números de menor a mayor y de mayor a menor
const numeros = [4, 10, 2, 7, 1];
let deMenorAMayor = [...numeros].sort((a, b) => a - b);
let deMayorAMenor = [...numeros].sort((a, b) => b - a);
console.log(deMenorAMayor)
console.log(deMayorAMenor)

// Ejercicio 2: Ordena las palabras alfabéticamente
const frutas = ["plátano", "manzana", "pera", "kiwi", "naranja"];
let ascendente = [...frutas].sort((a, b) => a.localeCompare(b))
let descendente = [...frutas].sort((a, b) => b.localeCompare(a));
console.log(ascendente)
console.log(descendente)

// Ejercicio 3: Ordenar objetos por propiedad
const productos = [
  { nombre: "Camisa", precio: 25 },
  { nombre: "Pantalón", precio: 40 },
  { nombre: "Zapatos", precio: 60 },
  { nombre: "Gorra", precio: 15 }
];
// Del más barato al más caro
let ordenPorPrecio = [...productos].sort((a, b) => a.precio - b.precio);
console.log(ordenPorPrecio)
// Por orden alfabético del nombre
let ordenPorNombre = [...productos].sort((a, b) => a.nombre.localeCompare(b.nombre));
console.log(ordenPorNombre)

// Ordenar por edad, y si empatas, por nombre
const personas = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Luis", edad: 30 },
  { nombre: "Marta", edad: 25 },
  { nombre: "Pedro", edad: 20 }
];
// Ordena el array de menor a mayor edad.
// Si dos personas tienen la misma edad, ordénalas alfabéticamente por nombre.
let personasOrdenadas = [...personas].sort((a, b) => {
  if (a.edad !== b.edad) {
    return a.edad - b.edad;
  } else {
    return a.nombre.localeCompare(b.nombre);
  }

});
console.log(personasOrdenadas)

// Ejercicio 5: Ordenar por puntuación descendente
const jugadores = [
  { nombre: "Laura", puntuacion: 180 },
  { nombre: "Carlos", puntuacion: 240 },
  { nombre: "Elena", puntuacion: 190 },
  { nombre: "David", puntuacion: 240 }
];
//Ordena el array de mayor a menor puntuación.
// Si hay empate, ordénalos alfabéticamente por nombre.
let jugadoresOrdenados = [...jugadores].sort((a, b) => {
  if (a.puntuacion !== b.puntuacion) {
    return b.puntuacion - a.puntuacion;
  } else {
    return a.nombre.localeCompare(b.nombre);
  }
})
console.log(jugadoresOrdenados)

// Ejercicio 6: Ordenar fechas
const tareas = [
  { nombre: "Reunión", fecha: "2024-11-12" },
  { nombre: "Entrega proyecto", fecha: "2024-03-05" },
  { nombre: "Revisión", fecha: "2024-07-20" },
  { nombre: "Presentación", fecha: "2024-03-05" }
];
// Ordena las tareas por fecha más reciente primero (de la más nueva a la más vieja).
// Si dos tienen la misma fecha, ordénalas por nombre alfabético.
let tareasOrdenadas = [...tareas].sort((a, b) => {
  if (a.fecha !== b.fecha) {
    return new Date(b.fecha) - new Date(a.fecha);
  } else {
    return a.nombre.localeCompare(b.nombre);
  }
})
console.log(tareasOrdenadas)