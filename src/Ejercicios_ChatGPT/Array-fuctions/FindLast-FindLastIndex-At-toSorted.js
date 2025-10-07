// Ejercicio 1 — Buscar desde el final Usa findLast() para encontrar el último pedido realizado por "Ana".
const pedidos = [
  { id: 1, cliente: "Ana", total: 35 },
  { id: 2, cliente: "Luis", total: 80 },
  { id: 3, cliente: "Ana", total: 120 },
  { id: 4, cliente: "Carlos", total: 60 }
];
let UltimoPedidoAna = pedidos.findLast(pedido => pedido.cliente === "Ana")
console.log(UltimoPedidoAna)

// Ejercicio 2 — Acceso con índice negativo, Usa at() para obtener el último mensaje sin usar .length.
const mensajes = ["Hola", "¿cómo estás?", "Nos vemos mañana", "Adiós"];
let ultimoMensaje = mensajes.at(-1)
console.log(ultimoMensaje)

// Ejercicio 3 — Crear una copia ordenada sin modificar el original, Usa toSorted() para obtener un nuevo array con los precios de menor a mayor,
// y comprueba que el array original no se haya modificado.
const precios = [50, 20, 80, 10];
let preciosOrdenados = precios.toSorted((a,b) => a - b)
console.log(precios)
console.log(preciosOrdenados)

// Ejercicio 4 — Invertir sin tocar el original, Usa toReversed() para obtener un nuevo array invertido.
// Muestra ambos arrays por consola y confirma que el original no cambió.
const numeros = [10, 20, 30, 40];
let invertidos = numeros.toReversed()
console.log(invertidos)

// Ejercicio 5 — Eliminar y reemplazar elementos sin mutar Usa toSpliced() para: eliminar "descansar" e insertar "pasear" en su lugar.
const tareas = ["leer", "estudiar", "descansar", "comer"];
let tareasActualizadas = tareas.toSpliced(2, 1, "pasear")
console.log(tareasActualizadas)
console.log(tareas)
