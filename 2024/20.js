/*
Santa Claus 🎅 está revisando la lista de regalos que debe entregar esta Navidad. Sin embargo, algunos regalos faltan, otros están duplicados, y algunos tienen cantidades incorrectas. Necesita tu ayuda para resolver el problema.

Recibirás dos arrays:

received: Lista con los regalos que Santa tiene actualmente.
expected: Lista con los regalos que Santa debería tener.
Tu tarea es escribir una función que, dado received y expected, devuelva un objeto con dos propiedades:

missing: Un objeto donde las claves son los nombres de los regalos faltantes y los valores son las cantidades que faltan.
extra: Un objeto donde las claves son los nombres de los regalos extra o duplicados y los valores son las cantidades que sobran.
Ten en cuenta que:

Los regalos pueden repetirse en ambas listas.
Las listas de regalos están desordenadas.
Si no hay regalos que falten o sobren, las propiedades correspondientes (missing o extra) deben ser objetos vacíos.
fixGiftList(['puzzle', 'car', 'doll', 'car'], ['car', 'puzzle', 'doll', 'ball'])
Devuelve:
{
  missing: { ball: 1 },
  extra: { car: 1 }
}

fixGiftList(
  ['book', 'train', 'kite', 'train'],
  ['train', 'book', 'kite', 'ball', 'kite']
)
Devuelve:
{
  missing: { ball: 1, kite: 1 },
  extra: { train: 1 }
}

fixGiftList(
  ['bear', 'bear', 'car'],
  ['bear', 'car', 'puzzle', 'bear', 'car', 'car']
)
Devuelve:
{
  missing: { puzzle: 1, car: 2 },
  extra: {}
}

fixGiftList(['bear', 'bear', 'car'], ['car', 'bear', 'bear'])
Devuelve:
{
  missing: {},
  extra: {}
}
*/

/**
 * @typedef {Record<string, number>} GiftsCount
 */

/**
 * @typedef {{ missing: GiftsCount, extra: GiftsCount }} Result
 */

/**
 * @param {string[]} received
 * @param {string[]} expected
 * @returns {Result}
 */


function fixGiftList(received, expected) {
  const countReceived = {};
  const countExpected = {};

  // 1. Contamos las apariciones en received
  for (const gift of received) {
    countReceived[gift] = (countReceived[gift] || 0) + 1;
  }

  // 2. Contamos las apariciones en expected
  for (const gift of expected) {
    countExpected[gift] = (countExpected[gift] || 0) + 1;
  }

  // 3. Recorremos la unión de todas las claves de ambos objetos
  const allGifts = new Set([...Object.keys(countReceived), ...Object.keys(countExpected)]);
  
  // Objetos para guardar faltantes y sobrantes
  const missing = {};
  const extra = {};

  for (const gift of allGifts) {
    const have = countReceived[gift] || 0;
    const need = countExpected[gift] || 0;
    const diff = need - have;

    if (diff > 0) {
      // faltan 'diff' unidades
      missing[gift] = diff;
    } else if (diff < 0) {
      // sobran '-diff' unidades
      extra[gift] = -diff;
    }
  }

  return { missing, extra };
}

// Ejemplos de uso:
console.log(
  fixGiftList(['puzzle', 'car', 'doll', 'car'], ['car', 'puzzle', 'doll', 'ball'])
);
// {
//   missing: { ball: 1 },
//   extra: { car: 1 }
// }

console.log(
  fixGiftList(['book', 'train', 'kite', 'train'], ['train', 'book', 'kite', 'ball', 'kite'])
);
// {
//   missing: { ball: 1, kite: 1 },
//   extra: { train: 1 }
// }

console.log(
  fixGiftList(['bear', 'bear', 'car'], ['bear', 'car', 'puzzle', 'bear', 'car', 'car'])
);
// {
//   missing: { puzzle: 1, car: 2 },
//   extra: {}
// }

console.log(
  fixGiftList(['bear', 'bear', 'car'], ['car', 'bear', 'bear'])
);
// {
//   missing: {},
//   extra: {}
// }

