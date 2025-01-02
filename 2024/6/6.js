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
  return box
    .slice(1, -1)
    .some(
      (line) =>
        line.includes('*') &&
        line.indexOf('*') > 0 &&
        line.indexOf('*') < line.length - 1,
    );
}
