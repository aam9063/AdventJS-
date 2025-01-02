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
    const result = [];
    const n = gifts.length;
  
    // Función auxiliar (backtracking) que genera todas las combinaciones
    // de longitud 'combLength' a partir de la posición 'start'.
    function backtrack(start, combLength, current) {
      // Si ya hemos tomado combLength regalos, agregamos la combinación al resultado.
      if (current.length === combLength) {
        result.push([...current]);
        return;
      }
  
      // Intentamos añadir cada regalo posible desde 'start' en adelante.
      for (let i = start; i < n; i++) {
        current.push(gifts[i]);
        backtrack(i + 1, combLength, current);
        current.pop(); // backtrack (eliminamos el regalo añadido)
      }
    }
  
    // Generamos primero las combinaciones de 1 elemento, luego de 2,
    // hasta llegar a n (todas las combinaciones).
    for (let size = 1; size <= n; size++) {
      backtrack(0, size, []);
    }
  
    return result;
  }
  
  // Ejemplos:
  console.log(generateGiftSets(['car', 'doll', 'puzzle']));
  /*
  [
    [ 'car' ],
    [ 'doll' ],
    [ 'puzzle' ],
    [ 'car', 'doll' ],
    [ 'car', 'puzzle' ],
    [ 'doll', 'puzzle' ],
    [ 'car', 'doll', 'puzzle' ]
  ]
  */
  
  console.log(generateGiftSets(['ball']));
  /*
  [ [ 'ball' ] ]
  */
  
  console.log(generateGiftSets(['game', 'pc']));
  /*
  [ [ 'game' ], [ 'pc' ], [ 'game', 'pc' ] ]
  */
  
