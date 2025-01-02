/*
¡Es hora de seleccionar a los renos más rápidos para los viajes de Santa! 🦌🎄
Santa Claus ha organizado unas emocionantes carreras de renos para decidir cuáles están en mejor forma.

Tu tarea es mostrar el progreso de cada reno en una pista de nieve en formato isométrico.

La información que recibes:

indices: Un array de enteros que representan el progreso de cada reno en la pista:
0: El carril está vacío.
Número positivo: La posición actual del reno desde el inicio de la pista.
Número negativo: La posición actual del reno desde el final de la pista.
length: La longitud de cada carril.
Devuelve un string que represente la pista de la carrera:

Cada carril tiene exactamente length posiciones llenas de nieve (~).
Cada reno se representa con la letra r.
Los carriles están numerados al final con /1, /2, etc.
La vista es isométrica, por lo que los carriles inferiores están desplazados hacia la derecha.
Ejemplos:

drawRace([0, 5, -3], 10)
  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3

drawRace([2, -1, 0, 5], 8)
   ~~r~~~~~ /1
  ~~~~~~~r /2
 ~~~~~~~~ /3
~~~~~r~~ /4

drawRace([3, 7, -2], 12)
  ~~~r~~~~~~~~ /1
 ~~~~~~~r~~~~ /2
~~~~~~~~~~r~ /3
*/

/**
 * Dibuja una carrera de renos en vista isométrica.
 * 
 * @param {number[]} indices - Array con la posición de cada reno:
 *   -  0  => no hay reno en ese carril
 *   -  >0 => posición desde el inicio (0-based)
 *   -  <0 => posición desde el final (p.ej. -1 => última posición)
 * @param {number} length - Longitud de cada carril (número de '~')
 * @returns {string} - Un dibujo en forma de pista con los renos
 */

function drawRace(indices, length) {
  return indices
    .map((progress, laneIndex) => {
      const trackLine = [...'~'.repeat(length)];

      if (progress !== 0) {
        const renoPosition = progress > 0 ? progress : length + progress;
        trackLine[renoPosition] = 'r';
      }

      const isometricOffset = ' '.repeat(indices.length - laneIndex - 1);
      const trackLineStr = trackLine.join('');
      return `${isometricOffset}${trackLineStr} /${laneIndex + 1}`;
    })
    .join('\n');
}


