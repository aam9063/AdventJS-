/*
El Grinch ha hackeado 🏴‍☠️ los sistemas del taller de Santa Claus y ha codificado los nombres de todos los archivos importantes. Ahora los elfos no pueden encontrar los archivos originales y necesitan tu ayuda para descifrar los nombres.

Cada archivo sigue este formato:

Comienza con un número (puede contener cualquier cantidad de dígitos).
Luego tiene un guion bajo _.
Continúa con un nombre de archivo y su extensión.
Finaliza con una extensión extra al final (que no necesitamos).
Ten en cuenta que el nombre de los archivos pueden contener letras (a-z, A-Z), números (0-9), otros guiones bajos (_) y guiones (-).

Tu tarea es implementar una función que reciba un string con el nombre de un archivo codificado y devuelva solo la parte importante: el nombre del archivo y su extensión.

Ejemplos:
decodeFilename('2023122512345678_sleighDesign.png.grinchwa')
➞ "sleighDesign.png"

decodeFilename('42_chimney_dimensions.pdf.hack2023')
➞ "chimney_dimensions.pdf"

decodeFilename('987654321_elf-roster.csv.tempfile')
➞ "elf-roster.csv"
*/

/**
 * Decodes a filename by removing the initial digits and underscore,
 * as well as the final extension. It returns only the meaningful
 * "filename.extension".
 *
 * @param {string} filename - The filename to decode.
 * @returns {string} The decoded filename (without the extra extension).
 */
function decodeFilename(filename) {
  // 1. Buscamos la posición del primer '_'.
  const underscoreIndex = filename.indexOf('_');
  if (underscoreIndex === -1) {
    // Si no hay '_', no podemos decodificar siguiendo el patrón dado.
    return '';
  }

  // 2. Tomamos todo lo que hay después del guion bajo (ej. "sleighDesign.png.grinchwa").
  const afterUnderscore = filename.slice(underscoreIndex + 1);

  // 3. Buscamos la última aparición de '.' para eliminar la extensión final (ej. "grinchwa").
  const lastDotIndex = afterUnderscore.lastIndexOf('.');
  if (lastDotIndex === -1) {
    // Si no hay '.', no hay extensión final que quitar.
    return afterUnderscore;
  }

  // 4. Devolvemos solo la parte previa a esa última extensión.
  return afterUnderscore.slice(0, lastDotIndex);
}
