/* ??
Santa 🎅 está probando su nuevo trineo eléctrico, el CyberReindeer, en una carretera del 
Polo Norte. La carretera se representa con una cadena de caracteres, donde:

. = Carretera
S = Trineo de Santa
/ * = Barrera abierta
| = Barrera cerrada
Ejemplo de carretera: S...|....|.....

Cada unidad de tiempo, el trineo avanza una posición a la derecha. Si encuentra una barrera cerrada, 
se detiene hasta que la barrera se abra. Si está abierta, la atraviesa directamente.

Todas las barreras empiezan cerradas, pero después de 5 unidades de tiempo, se abren todas para siempre.

Crea una función que simule el movimiento del trineo durante un tiempo dado y devuelva un array de cadenas 
representando el estado de la carretera en cada unidad de tiempo:

const road = 'S..|...|..'
const time = 10 // unidades de tiempo
const result = cyberReindeer(road, time)

-> result:
[
  'S..|...|..', // estado inicial
  '.S.|...|..', // avanza el trineo la carretera
  '..S|...|..', // avanza el trineo la carretera
  '..S|...|..', // el trineo para en la barrera
  '..S|...|..', // el trineo para en la barrera
  '...S...*..', // se abre la barrera, el trineo avanza
  '...*S..*..', // avanza el trineo la carretera
  '...*.S.*..', // avanza el trineo la carretera
  '...*..S*..', // avanza el trineo la carretera
  '...*...S..', // avanza por la barrera abierta
]

El resultado es un array donde cada elemento muestra la carretera en cada unidad de tiempo.

Ten en cuenta que si el trineo está en la misma posición que una barrera, entonces toma su 
lugar en el array.
*/

function cyberReindeer(road, time) {
    const roadArray = road.split('');
    let position = 0;
    let result = [];
  
    for (let t = 0; t < time; t++) {
      result.push(roadArray.join(''));
  
      // Si el trineo está en una barrera cerrada antes del tiempo 5, se queda detenido
      if (roadArray[position] === '|' && t < 5) {
        continue;
      }
  
      // Después de 5 unidades de tiempo, las barreras se abren
      if (t >= 4) {
        for (let i = 0; i < roadArray.length; i++) {
          if (roadArray[i] === '|') {
            roadArray[i] = '*';
          }
        }
      }
  
      // Mueve el trineo a la derecha si no está en el final de la carretera
      if (position < roadArray.length - 1) {
        if (roadArray[position + 1] === '.' || roadArray[position + 1] === '*') {
          roadArray[position] = '.'; // Deja la posición anterior
          position++;
          roadArray[position] = 'S'; // Mueve el trineo a la nueva posición
        }
      }
    }
  
    // Añade el estado final de la carretera
    result.push(roadArray.join(''));
  
    return result;
  }
  
  // Ejemplo de uso
  const road = 'S..|...|..';
  const time = 10;
  const result = cyberReindeer(road, time);
  console.log(result);
// [
//   "S..|...|..",
//   ".S.|...|..",
//   "..S|...|..",
//   "..S|...|..",
//   "..S|...|..",
//   "...S...*..",
//   "...*S..*..",
//   "...*.S.*..",
//   "...*..S*..",
//   "...*...S.."
// ]