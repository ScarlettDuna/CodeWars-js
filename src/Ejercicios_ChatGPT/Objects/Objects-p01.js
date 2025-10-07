// Ejercicio 1: Extraer claves y valores
const producto = { nombre: "Camiseta", precio: 25, stock: 10 };
console.log(Object.keys(producto))
console.log(Object.values(producto))
console.log(Object.entries(producto))

// Ejercicio 2: Aumentar precios, Usa Object.entries() y Object.fromEntries() para crear un nuevo objeto con todos los precios aumentados un 10%.
const precios = { pan: 1, leche: 1.5, huevos: 3 };
let preciosSubidos = Object.entries(precios).map(([producto, precio]) => [producto, (precio * 1.1).toFixed(2)])
/* .map(x => {
      let producto = x[0];
      let precio = x[1];
      return [producto, precio * 1.1];
});
 */
let objetoPreciosSubidos = Object.fromEntries(preciosSubidos)
console.log(objetoPreciosSubidos)

// Ejercicio 3: Fusionar objetos, Usa Object.assign() o el spread operator para fusionarlos.
const usuario = { nombre: "Ana" };
const detalles = { edad: 28, ciudad: "Madrid" };
let usuarioDetalles = Object.assign(usuario, detalles) // Esto modifica el objeto usuario original, porque Object.assign copia directamente en él.
let usuarioDetalles2 = {...usuario, ...detalles} // Spread operator
console.log(usuarioDetalles)
console.log(usuarioDetalles2)

