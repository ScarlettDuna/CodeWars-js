/* Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

let conCeros = numero.toString().padStart(5, "0"); // "00042"*/

function humanReadable (seconds) {
  let minutos = 0;
  let horas = 0;
  let result = "";
  if (seconds > 59) {
    minutos = Math.floor(seconds / 60);
    seconds = seconds % 60;
    if (minutos > 59) {
      horas = Math.floor(minutos / 60);
      minutos = minutos % 60;
    }
  }
  result += (horas.toString().padStart(2, "0") + ":" + minutos.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0"));
  return result;
}
console.log(humanReadable(3600))