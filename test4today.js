// Obtener elementos del HTML
const numero1Input = document.getElementById("numero1");
const numero2Input = document.getElementById("numero2");
const sumarBoton = document.getElementById("sumar");
const resultadoDiv = document.getElementById("resultado");

// Funciones de operaciones
function sumar() {
  const numero1 = parseFloat(numero1Input.value);
  const numero2 = parseFloat(numero2Input.value);
  const resultado = numero1 + numero2;
  resultadoDiv.textContent = "Resultado: " + resultado;
}

// Añadir event listeners
sumarBoton.addEventListener("click", sumar);
