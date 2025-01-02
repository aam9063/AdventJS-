/* 
Los elfos 🧝🧝‍♂️ de Santa Claus han encontrado un montón de botas mágicas desordenadas en el taller. Cada bota se describe por dos valores:

type indica si es una bota izquierda (I) o derecha (R).
size indica el tamaño de la bota.
Tu tarea es ayudar a los elfos a emparejar todas las botas del mismo tamaño que tengan izquierda y derecha. Para ello, debes devolver una lista con los pares disponibles después de emparejar las botas.

¡Ten en cuenta que puedes tener más de una zapatilla emparejada del mismo tamaño!

const shoes = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 42 }
]

organizeShoes(shoes)
[38, 42]

const shoes2 = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'I', size: 38 },
  { type: 'I', size: 38 },
  { type: 'R', size: 38 }
]
[38, 38]

const shoes3 = [
  { type: 'I', size: 38 },
  { type: 'R', size: 36 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 43 }
]

organizeShoes(shoes3)
[]
*/

/**
 * @param {{ type: 'I' | 'R', size: number }[]} shoes
 * @returns {number[]} Available shoes 
 */
function organizeShoes(shoes) {
  // 1. Creamos un objeto para contabilizar cuántas botas izquierda (I) y derecha (R) hay de cada talla
  const tally = {};

  for (const { type, size } of shoes) {
    // Inicializamos la entrada para la talla si no existe
    if (!tally[size]) {
      tally[size] = { I: 0, R: 0 };
    }
    // Sumamos 1 según sea izquierda o derecha
    tally[size][type]++;
  }

  // 2. Para cada talla, el número de pares es la mínima cantidad entre I y R
  //    Añadimos esa talla tantas veces como pares haya
  const result = [];
  for (const size in tally) {
    const { I, R } = tally[size];
    const pairs = Math.min(I, R); // cuántos pares se pueden formar
    for (let i = 0; i < pairs; i++) {
      result.push(Number(size));
    }
  }

  return result;
}
