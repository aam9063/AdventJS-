/*
Estamos programando unos robots llamados giftbot 🤖🎁 que navegan de forma autónoma 
por los almacenes de regalos.

Estamos creando una función a la que le pasamos: el almacén 🏬 que deben navegar y 
los movimientos ↔️ que pueden realizar.

El almacén se representa como un array de cadenas de texto, donde:

    . significa que hay vía libre.
    * significa que hay un obstáculo.
    ! es la posición inicial del robot.

Los movimientos son un array de cadenas de texto, donde:

    R mueve al robot una posición a la derecha.
    L mueve al robot una posición a la izquierda.
    U mueve al robot una posición hacia arriba.
    D mueve al robot una posición hacia abajo.

Hay que tener en cuenta que el robot no puede superar los obstáculos ni los límites 
del almacén.

Dados un almacén y los movimientos, debemos devolver el array con la posición 
final de nuestro robot.

const store = ['..!....', '...*.*.']

const movements = ['R', 'R', 'D', 'L']
const result = autonomousDrive(store, movements)
console.log(result)

[
  ".......",
  "...*!*."
]


/ El último movimiento es hacia la izquierda, pero no puede moverse porque 
hay un obstáculo.

Ten en cuenta que la store es un array que puede ser de un número de filas 
que va de 1 a 100, ya que tenemos almacenes de todos los tamaños.

También que el robot es posible que termine en su posición inicial si no puede 
moverse o si está dando vueltas.
*/

function autonomousDrive(store, movements) {
    // Convertimos el almacén en una matriz para poder manipular los valores
    const grid = store.map(row => row.split(''));
    
    // Encontrar la posición inicial
    let position;
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[row].length; col++) {
        if (grid[row][col] === '!') {
          position = [row, col];
          break;
        }
      }
      if (position) break;
    }
  
    // Procesar los movimientos
    for (let move of movements) {
      const [currentRow, currentCol] = position;
      let newRow = currentRow;
      let newCol = currentCol;
  
      // Calculamos la nueva posición en base al movimiento
      if (move === 'R') newCol++;
      else if (move === 'L') newCol--;
      else if (move === 'U') newRow--;
      else if (move === 'D') newRow++;
  
      // Verificamos si el movimiento es válido
      if (
        newRow >= 0 &&
        newRow < grid.length &&
        newCol >= 0 &&
        newCol < grid[newRow].length &&
        grid[newRow][newCol] !== '*'
      ) {
        // Actualizamos la posición inicial
        grid[currentRow][currentCol] = '.';
        grid[newRow][newCol] = '!';
        position = [newRow, newCol];
      }
    }
  
    // Convertimos la matriz de vuelta a un array de cadenas de texto
    return grid.map(row => row.join(''));
  }
  
  // Ejemplo de uso
  const store = ['..!....', '...*.*.'];
  const movements = ['R', 'R', 'D', 'L'];
  const result = autonomousDrive(store, movements);
  console.log(result);
  /*
  [
    ".......",
    "...*!*."
  ]
  */
  