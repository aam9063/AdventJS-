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
  // Posición actual
  let x = 0;
  let y = 0;

  // Para saber qué movimientos básicos se han hecho alguna vez (para '?')
  const doneMoves = new Set();

  // Función para invertir un movimiento
  function invert(move) {
    switch (move) {
      case 'L': return 'R';
      case 'R': return 'L';
      case 'U': return 'D';
      case 'D': return 'U';
    }
    return move; // en caso de que algo sea distinto de L,R,U,D
  }

  let i = 0;
  while (i < moves.length) {
    // 1. Recolectamos modificadores consecutivos
    const modifiers = [];
    while (i < moves.length && ['*', '!', '?'].includes(moves[i])) {
      modifiers.push(moves[i]);
      i++;
    }

    // 2. Si hemos llegado al final, no hay dirección que aplicar
    if (i >= moves.length) break;

    // 3. La siguiente posición debería ser un movimiento básico (L, R, U, D)
    const c = moves[i];
    i++;

    // Si no es un movimiento válido, lo ignoramos y continuamos
    if (!['L', 'R', 'U', 'D'].includes(c)) {
      continue;
    }

    // 4. Aplicamos los modificadores en el orden en que aparecieron
    let direction = c;

    // (a) Invertir movimientos ('!')
    //     Cada '!' convierte L<->R y U<->D
    //     Si hay varias '!', se aplican todas (pero realmente dos inversiones se anulan).
    //     Para simplificar, aplicamos en orden.
    for (const m of modifiers) {
      if (m === '!') {
        direction = invert(direction);
      }
    }

    // (b) Comprobamos si hay un '?': si está, solo se mueve si NO se ha hecho ese movimiento antes
    let skip = false;
    if (modifiers.includes('?')) {
      if (doneMoves.has(direction)) {
        skip = true;
      } 
    }

    // (c) Comprobamos si hay un '*': si está, el movimiento se realiza 2 veces
    let times = modifiers.includes('*') ? 2 : 1;

    // 5. Si NO vamos a saltar el movimiento, lo marcamos como hecho y actualizamos la posición
    if (!skip) {
      doneMoves.add(direction);
      for (let t = 0; t < times; t++) {
        if (direction === 'L') x--;
        if (direction === 'R') x++;
        if (direction === 'U') y++;
        if (direction === 'D') y--;
      }
    }
  }

  // Al terminar, comprobamos si el robot vuelve a (0,0)
  if (x === 0 && y === 0) {
    return true;
  }
  return [x, y];
}
  