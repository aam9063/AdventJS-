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
  const rows = grid.length;
  const cols = grid[0].length;
  
  // Creamos una matriz de la misma dimensión para almacenar el resultado
  const result = Array.from({ length: rows }, () => Array(cols).fill(0));

  // Movimientos relativos en 8 direcciones (N, NE, E, SE, S, SW, W, NW)
  const directions = [
    [-1, -1], [-1, 0], [-1, 1],
    [ 0, -1],           [ 0, 1],
    [ 1, -1], [ 1, 0], [ 1, 1]
  ];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      // Para cada celda, contamos cuántas bombas hay en sus vecinos
      let bombCount = 0;
      for (const [dr, dc] of directions) {
        const nr = r + dr;  // Fila vecina
        const nc = c + dc;  // Columna vecina

        // Verificamos que la posición vecina esté dentro de la matriz
        if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) {
          if (grid[nr][nc] === true) {
            bombCount++;
          }
        }
      }
      result[r][c] = bombCount;
    }
  }

  return result;
}

// Ejemplos de uso:
console.log(detectBombs([
  [true, false, false],
  [false, true, false],
  [false, false, false]
]));
// [
//   [1, 2, 1],
//   [2, 1, 1],
//   [1, 1, 1]
// ]

console.log(detectBombs([
  [true, false],
  [false, false]
]));
// [
//   [0, 1],
//   [1, 1]
// ]

console.log(detectBombs([
  [true, true],
  [false, false],
  [true, true]
]));
// [
//   [1, 1],
//   [4, 4],
//   [1, 1]
// ]

  