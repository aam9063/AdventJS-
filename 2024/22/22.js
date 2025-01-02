/*
Santa Claus 🎅 está revisando una lista de juguetes únicos que podría incluir en su bolsa mágica de regalos. Quiere explorar todas las combinaciones posibles de juguetes. Quiere ver todas las combinaciones que realmente contengan al menos un juguete.

Tu tarea es escribir una función que, dado un array de juguetes, devuelva todas las combinaciones posibles.

Importante: Debes devolverlo en el orden que aparecen los juguetes y de combinaciones de 1 a n juguetes.

generateGiftSets(['car', 'doll', 'puzzle'])
[
  ['car'],
  ['doll'],
  ['puzzle'],
  ['car', 'doll'],
  ['car', 'puzzle'],
  ['doll', 'puzzle'],
  ['car', 'doll', 'puzzle']
]

generateGiftSets(['ball'])
[
  ['ball']
]

generateGiftSets(['game', 'pc'])
[
  ['game'],
  ['pc'],
  ['game', 'pc']
]
Nota: En el array de entrada siempre habrá al menos un juguete y nunca habrá juguetes duplicados.

Consejo: Hay muchas formas de solucionar este problema, pero el backtracking puede ser una buena opción. 😉
*/

/**
 * Genera todas las combinaciones de los regalos recibidos, sin incluir la combinación vacía.
 * Devuelve las combinaciones agrupadas por tamaño (1..n), manteniendo el orden original.
 *
 * @param {string[]} gifts - Lista de regalos (sin duplicados).
 * @returns {string[][]} - Todas las combinaciones posibles, desde 1 regalo hasta n.
 */

function generateGiftSets(gifts) {
  const results = [];
  function backtracking(start, currentSet) {
    if (currentSet.length > 0) {
      results.push([...currentSet]);
    }

    for (let i = start; i < gifts.length; i++) {
      currentSet.push(gifts[i]);
      backtracking(i + 1, currentSet);
      currentSet.pop();
    }
  }

  backtracking(0, []);

  return results.sort((a, b) => a.length - b.length);
}