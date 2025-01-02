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
  // 1. Buscamos la posición de la cabeza del tren '@'
  //    y guardamos las posiciones del resto del tren (los 'o') para detectar choques.
  let headRow = -1;
  let headCol = -1;
  const bodyPositions = new Set(); // Para almacenar posiciones de 'o' (y '@' si queremos) => "fila,col"

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      const cell = board[r][c];
      if (cell === '@') {
        headRow = r;
        headCol = c;
      } else if (cell === 'o') {
        bodyPositions.add(`${r},${c}`);
      }
    }
  }

  // Si no encontramos '@', no podemos mover nada
  if (headRow === -1 || headCol === -1) {
    return 'none';
  }

  // 2. Calculamos la siguiente posición de la cabeza según mov
  let newRow = headRow;
  let newCol = headCol;
  switch (mov) {
    case 'U':
      newRow--;
      break;
    case 'D':
      newRow++;
      break;
    case 'L':
      newCol--;
      break;
    case 'R':
      newCol++;
      break;
  }

  // 3. Comprobamos si se sale del tablero (choque con los bordes)
  if (
    newRow < 0 || 
    newRow >= board.length || 
    newCol < 0 || 
    newCol >= board[0].length
  ) {
    return 'crash';
  }

  // 4. Vemos qué hay en la nueva posición
  const nextCell = board[newRow][newCol];

  // - Choque con el tren (cabeza o vagones)
  if (nextCell === '@' || nextCell === 'o') {
    return 'crash';
  }

  // - Recoger fruta mágica
  if (nextCell === '*') {
    return 'eat';
  }

  // - Espacio vacío (o cualquier otro símbolo que no cause colisión)
  return 'none';
}

  