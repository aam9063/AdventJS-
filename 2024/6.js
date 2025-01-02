/*
Ya hemos empaquetado cientos de regalos 🎁… pero a un elfo se le ha olvidado revisar si el regalo, representado por un asterisco *, está dentro de la caja.

La caja tiene un regalo (*) y cuenta como dentro de la caja si:

Está rodeada por # en los bordes de la caja.
El * no está en los bordes de la caja.
Ten en cuenta entonces que el * puede estar dentro, fuera o incluso no estar. Y debemos devolver true si el * está dentro de la caja y false en caso contrario.

Ejemplos:

inBox([
  "###",
  "#*#",
  "###"
]) // ➞ true

inBox([
  "####",
  "#* #",
  "#  #",
  "####"
]) // ➞ true

inBox([
  "#####",
  "#   #",
  "#  #*",
  "#####"
]) // ➞ false

inBox([
  "#####",
  "#   #",
  "#   #",
  "#   #",
  "#####"
]) // ➞ false
*/

/**
 * Comprueba si existe al menos un asterisco (*) que no esté en los bordes.
 * @param {string[]} box - Array que representa la caja
 * @returns {boolean} True si el asterisco está dentro de la caja, false en caso contrario
 */
function inBox(box) {
  // Si la caja tiene menos de 3 filas o cualquier fila tiene menos de 3 columnas,
  // es imposible que haya un regalo "dentro"
  if (box.length < 3 || box.some(row => row.length < 3)) {
    return false;
  }

  // Recorremos desde la segunda fila hasta la penúltima
  for (let row = 1; row < box.length - 1; row++) {
    // Obtenemos la cadena de la fila
    const line = box[row];

    // Recorremos desde la segunda columna hasta la penúltima
    for (let col = 1; col < line.length - 1; col++) {
      // Si encontramos un '*', significa que hay un regalo dentro
      if (line[col] === '*') {
        return true;
      }
    }
  }

  // Si terminamos el bucle sin encontrar '*', retornamos false
  return false;
}
