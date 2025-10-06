// Ejercicio 1: Crea una fecha con tu cumpleaños y muestra
const miCumple = new Date(1991,3,20);
console.log(miCumple.toLocaleDateString());

// Cuantos días faltan para tu próximo cumpleaños
const hoy = new Date("2025-10-06");
let diasHastaCumple = (new Date("2026-04-20") - hoy) / 86400000;
console.log(diasHastaCumple);

// Ejercicio 2: Tienes unas fechas, Calcula cuántos días hay de diferencia entre ambas (usa la resta entre fechas y convierte los milisegundos a días).
const inicio = new Date("2024-01-01");
const fin = new Date("2024-12-31");
const milisegundosDia = 86400000;
let diasDiferencia = Math.round((fin - inicio) / milisegundosDia);
console.log(diasDiferencia);

// Ejercicio 3: Calcular una fecha futura
// Crea una nueva variable dentroDe100Dias que represente la fecha exacta dentro de 100 días a partir de hoy.
const hoy2 = new Date();
let dentroDe100Dias = new Date;
dentroDe100Dias.setDate(hoy2.getDate() + 100);
console.log(dentroDe100Dias.toLocaleDateString());

// Ejercicio 4: Calcular la edad exacta. Calcula cuántos años tienes hoy (redondeando hacia abajo).
let miEdad = hoy2.getFullYear() - miCumple.getFullYear();
console.log(`Tienes ${miEdad} años.`)