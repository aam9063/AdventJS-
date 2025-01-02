/*
El Grinch ha estado haciendo de las suyas en el Polo Norte y ha sembrado bombas de carbón explosivo 💣 en la fábrica 
de juguetes de los duendes. Quiere que todos los juguetes queden inutilizados y por eso ha dejado una cuadrícula donde 
algunas celdas tienen carbón explosivo (true) y otras están vacías (false).

Los duendes necesitan tu ayuda para mapear las zonas peligrosas. Cada celda vacía debe mostrar un número que indique 
cuántas bombas de carbón explosivo hay en las posiciones adyacentes, incluidas las diagonales.

detectBombs([
  [true, false, false],
  [false, true, false],
  [false, false, false]
])
[
  [1, 2, 1],
  [2, 1, 1],
  [1, 1, 1]
]

detectBombs([
  [true, false],
  [false, false]
])
[
  [0, 1],
  [1, 1]
]

detectBombs([
  [true, true],
  [false, false],
  [true, true]
])

[
  [1, 1],
  [4, 4],
  [1, 1]
]
Nota: ¿Quieres una pista? Seguro que has jugado al juego de buscaminas antes… 😉
*/

/**
 * Dado un grid booleano, donde true es bomba y false es vacío,
 * para cada celda se debe indicar cuántas bombas hay en sus
 * celdas vecinas (incluyendo diagonales).
 *
 * @param {boolean[][]} grid - Matriz que indica dónde hay bombas
 * @returns {number[][]} - Matriz con las cantidades de bombas vecinas
 */

function detectBombs(grid) {
  const neighborOffsets = [-1, 0, 1];

  return grid.map((row, rowIndex) =>
    row.map((_, colIndex) => {
      const adjacentBombsCount = neighborOffsets.reduce(
        (totalBombs, rowOffset) =>
          totalBombs +
          neighborOffsets.reduce((bombsInColumn, colOffset) => {
            const neighborRow = rowIndex + rowOffset;
            const neighborCol = colIndex + colOffset;
            const isBomb = grid[neighborRow]?.[neighborCol];
            return bombsInColumn + (isBomb ? 1 : 0);
          }, 0),
        0,
      );

      return adjacentBombsCount - (grid[rowIndex][colIndex] ? 1 : 0);
    }),
  );
}

// Ejemplos
console.log(
  detectBombs([
    [true, false, false],
    [false, true, false],
    [false, false, false],
  ]),
); // [[1, 2, 1], [2, 1, 1], [1, 1, 1]]

console.log(
  detectBombs([
    [true, false],
    [false, false],
  ]),
); // [[0, 1], [1, 1]]  

console.log(
  detectBombs([
    [true, true],
    [false, false],
    [true, true],
  ]),
); // [[1, 1], [4, 4], [1, 1]]