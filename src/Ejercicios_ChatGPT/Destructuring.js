/*
// Ejercicio 1: Array destructuring básico
// Extrae las tres posiciones en variables llamadas primero, segundo y tercero.
const colores = ["rojo", "verde", "azul"];
let [primero, segundo, tercero] = colores;
console.log(`El primero color es ${primero}, el segundo es ${segundo} y el tercero es ${tercero}`)

// Ejercicio 2: Ignorar posiciones
// Extrae solo el primer y cuarto valor (ignorando los del medio) en variables llamadas x & y.
const coordenadas = [10, 20, 30, 40];
let [x, , , y] = coordenadas;
console.log(`X: ${x} & Y: ${y}`)

// Ejercicio 3: Object destructuring. Extrae las propiedades: nombre y ciudad y muestra el mensaje:
// “Laura vive en Madrid.”
const persona = {
  nombre: "Laura",
  edad: 32,
  ciudad: "Madrid"
};
let {nombre, ciudad} = persona;
console.log(`${nombre} vive en ${ciudad}`);

// Ejercicio 4: Renombrar propiedades. Usa destructuring para crear variables n y p que contengan los valores de nombre y precio.
const producto = {
  nombre: "Portátil",
  precio: 1200
};
let { nombre : n, precio : p } = producto;
console.log(`${n} y ${p}`)

// Ejercicio 5: Destructuring anidado: Extrae nombre del cliente y ciudad del pedido usando destructuring anidado.
const pedido = {
  id: 123,
  cliente: {
    nombre: "Carlos",
    direccion: {
      ciudad: "Valencia",
      codigoPostal: 46001
    }
  }
};
let { cliente: {nombre, direccion: {ciudad}}} = pedido;
console.log(`Nombre: ${nombre} \nCiudad: ${ciudad}`)
*/
// Ejercicio 6: Destructuring Mixto - Extrae el usuario y solo la segunda red social (Instagram) usando destructuring combinado de objeto y array.
const datos = {
  usuario: "María",
  redes: ["Twitter", "Instagram", "GitHub"]
};
let { usuario, redes: [ , instagram,]} = datos;
console.log(`${usuario} uses ${instagram}`);

// Ejercicio 7 — Valores por defecto. Usa destructuring para obtener nombre, precio y una propiedad stock con valor por defecto 0 si no existe.
const producto = {
  nombre: "Móvil",
  precio: 300
};
let { nombre, precio, stock = 0 } = producto;
console.log(`Nombre producto: ${nombre}, precio: ${precio} y stock: ${stock}`)

// Ejercicio 8: Destructuring en parámetros
// Llama a la función mostrarInfo con ambos objetos y observa cómo se comporta el valor por defecto para edad.
const mostrarInfo = ({ nombre, edad = "desconocida", ciudad }) => {
  console.log(`${nombre} (${edad}) vive en ${ciudad}.`);
};

const persona1 = { nombre: "Lucía", ciudad: "Granada" };
const persona2 = { nombre: "Raúl", edad: 25, ciudad: "Bilbao" };
mostrarInfo(persona1)
mostrarInfo(persona2)