/*
Los elfos del Polo Norte han creado un robot 🤖 especial que ayuda a Papá Noel a distribuir regalos dentro de un gran almacén. El robot se mueve en un plano 2D y partimos desde el origen (0, 0).

Queremos saber si, tras ejecutar una serie de movimientos, el robot vuelve a estar justo donde empezó.

Las órdenes básicas del robot son:

L: Mover hacia la izquierda
R: Mover hacia la derecha
U: Mover hacia arriba
D: Mover hacia abajo
Pero también tiene ciertos modificadores para los movimientos:

*: El movimiento se realiza con el doble de intensidad (ej: *R significa RR)
!: El siguiente movimiento se invierte (ej: R!L se considera como RR)
?: El siguiente movimiento se hace sólo si no se ha hecho antes (ej: R?R significa R)
Nota: Cuando el movimiento se invierte con ! se contabiliza el movimiento invertido y no el original. Por ejemplo, !U?U invierte el movimiento de U, por lo que contabiliza que se hizo el movimiento D pero no el U. Así !U?U se traduce como D?U y, por lo tanto, se haría el movimiento U final.

Debes devolver:

true: si el robot vuelve a estar justo donde empezó
[x, y]: si el robot no vuelve a estar justo donde empezó, devolver la posición donde se detuvo
isRobotBack('R')     // [1, 0]
isRobotBack('RL')    // true
isRobotBack('RLUD')  // true
isRobotBack('*RU')   // [2, 1]
isRobotBack('R*U')   // [1, 2]
isRobotBack('LLL!R') // [-4, 0]
isRobotBack('R?R')   // [1, 0]
isRobotBack('U?D')   // true
isRobotBack('R!L')   // [2,0]
isRobotBack('U!D')   // [0,2]
isRobotBack('R?L')   // true
isRobotBack('U?U')   // [0,1]
isRobotBack('*U?U')  // [0,2]
isRobotBack('U?D?U') // true

Ejemplos paso a paso:
isRobotBack('R!U?U') // [1,0]
'R'  -> se mueve a la derecha 
'!U' -> se invierte y se convierte en 'D'
'?U' -> se mueve arriba, porque no se ha hecho el movimiento 'U'

isRobotBack('UU!U?D') // [0,1]
'U'  -> se mueve arriba
'U'  -> se mueve arriba
'!U' -> se invierte y se convierte en 'D'
'?D' -> no se mueve, ya que ya se hizo el movimiento 'D'
*/

/**
 * El robot se mueve en un plano 2D a partir de una secuencia de instrucciones:
 *  - 'L', 'R', 'U', 'D'   : movimientos básicos
 *  - '*': la siguiente instrucción se repite el doble de veces
 *  - '!': invierte la siguiente instrucción (L<->R, U<->D)
 *  - '?': ejecuta la siguiente instrucción sólo si no se ha hecho antes
 *
 * Devuelve:
 *  - true  si el robot regresa a (0,0)
 *  - [x,y] si el robot acaba en la posición (x,y) != (0,0)
 *
 * Ejemplos:
 *  isRobotBack('R')      -> [1,0]
 *  isRobotBack('RL')     -> true
 *  isRobotBack('*RU')    -> [2,1]   ( '*R' => RR, luego 'U' )
 *  isRobotBack('R!L')    -> [2,0]   ( 'R' y después '!L' => 'R' )
 *  isRobotBack('R?R')    -> [1,0]   ( primera R se hace, segunda R se salta )
 *  isRobotBack('U!D')    -> [0,2]   ( 'U' y luego '!D' => 'U' )
 *  isRobotBack('U?D?U')  -> true
 */

function isRobotBack(moves) {
  let x = 0;
  let y = 0;

  const moveCount = {
    L: 0,
    R: 0,
    U: 0,
    D: 0,
  };
  const inverted = {
    L: 'R',
    R: 'L',
    U: 'D',
    D: 'U',
  };
  const directions = {
    U: [0, 1],
    D: [0, -1],
    R: [1, 0],
    L: [-1, 0],
  };

  const applyMove = (move, factor = 1) => {
    moveCount[move] += factor;
    x += directions[move][0] * factor;
    y += directions[move][1] * factor;
  };

  moves.replace(/([*!?])?([LRUD])/g, (_, operator, move) => {
    if (operator === '*') applyMove(move, 2);
    else if (operator === '!') applyMove(inverted[move]);
    else if (!operator || (operator === '?' && !moveCount[move]))
      applyMove(move);
  });

  return x || y ? [x, y] : true;
}