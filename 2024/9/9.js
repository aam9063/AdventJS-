/*
Los elfos están jugando con un tren 🚂 mágico que transporta regalos. Este tren se mueve en un tablero representado por un array de strings.

El tren está compuesto por una locomotora (@), seguida de sus vagones (o), y debe recoger frutas mágicas (*) que le sirve de combustible. El movimiento del tren sigue las siguientes reglas:

Recibirás dos parámetros board y mov.

board es un array de strings que representa el tablero:

@ es la locomotora del tren.
o son los vagones del tren.
* es una fruta mágica.
· son espacios vacíos.
mov es un string que indica el próximo movimiento del tren desde la cabeza del tren @:

'L': izquierda
'R': derecha
'U': arriba
'D': abajo.
Con esta información, debes devolver una cadena de texto:

'crash': Si el tren choca contra los bordes del tablero o contra sí mismo.
'eat': Si el tren recoge una fruta mágica (*).
'none': Si avanza sin chocar ni recoger ninguna fruta mágica.
Ejemplo:

const board = [
  '·····',
  '*····',
  '@····',
  'o····',
  'o····'
]

console.log(moveTrain(board, 'U'))
➞ 'eat'
Porque el tren se mueve hacia arriba y encuentra una fruta mágica

console.log(moveTrain(board, 'D'))
➞ 'crash'
El tren se mueve hacia abajo y la cabeza se choca consigo mismo

console.log(moveTrain(board, 'L'))
➞ 'crash'
El tren se mueve a la izquierda y se choca contra la pared

console.log(moveTrain(board, 'R'))
➞ 'none'
El tren se mueve hacia derecha y hay un espacio vacío en la derecha
*/

/**
 * Mueve la locomotora (@) una posición según la dirección mov. 
 * Si en la nueva posición está la fruta (*), devolvemos "eat".
 * Si salimos del tablero o chocamos con el propio tren (o/@), devolvemos "crash".
 * En otro caso, devolvemos "none".
 * 
 * @param {string[]} board - Array de strings que representa el tablero
 * @param {'U' | 'D' | 'R' | 'L' } mov - Dirección de movimiento
 * @returns {'none' | 'crash' | 'eat'} - Resultado del movimiento
 */

function moveTrain(board, mov) {
  const directions = {
    U: (row, col) => board[row - 1]?.[col],
    D: (row, col) => board[row + 1]?.[col],
    R: (row, col) => board[row][col + 1],
    L: (row, col) => board[row][col - 1],
  };

  const flatBoard = board.join('');
  const trainHeadIndex = flatBoard.indexOf('@');

  const totalColumns = board[0].length;
  const currentRow = Math.floor(trainHeadIndex / totalColumns);
  const currentColumn = trainHeadIndex % totalColumns;

  const nextCell = directions[mov](currentRow, currentColumn);

  const results = {
    '*': 'eat',
    '·': 'none',
  };

  return results[nextCell] || 'crash';
}

  