/*
Los elfos están muy ocupados en el taller de Santa Claus organizando regalos 🎁 
para la víspera de Navidad 🎄.

El formato de entrada es especial, ya que indica el número de regalos y el tipo 
de regalo con letras de la a a la z. Por ejemplo, '66a11b' significa 66 regalos 
a y 11 regalos b.

Los elfos tienen un sistema especial para organizar los regalos:

Cada 10 regalos del mismo tipo se empaquetan en una caja, representada por {x}. 
Por ejemplo, 20 regalos tipo a se empaquetan en 2 cajas así: {a}{a}.
Cada 5 cajas se apilan en un palé, representado por [x]. Por ejemplo, 10 cajas 
de a se apilan en 2 palés de esta manera: [a][a]
Cualquier regalo adicional se coloca en una bolsa, representada por () y se 
colocan todas dentro. Por ejemplo 4 regalos de b se colocan en una bolsa así (bbbb)
Los regalos luego se colocan en el siguiente orden: palés, cajas y bolsas. Y 
los regalos aparecen en el mismo orden que la cadena de entrada.

Tu tarea es escribir una función organizeGifts que tome una cadena de regalos 
como argumento y devuelva una cadena representando el almacén.

const result1 = organizeGifts(`76a11b`)
console.log(result1)
// '[a]{a}{a}(aaaaaa){b}(b)'

/* Explicación:

  76a: 76 regalos tipo 'a' se empaquetarían en 7 cajas y sobrarían 6 regalos, 
  resultando en 1 palé [a] (por las primeras 5 cajas), 2 cajas sueltas {a}{a} y una bolsa con 6 regalos (aaaaaa)

  11b: 11 regalos tipo 'b' se empaquetarían en 1 caja y sobraría 1 regalo, 
  resultando en 1 caja suelta {b} y una bolsa con 1 regalo (b)
*/

function organizeGifts(gifts) {
    let result = ''; // Resultado final
    let regex = /\d+[a-z]/g; // Expresión regular para encontrar los regalos
    let matches = gifts.match(regex); // Encontrar los regalos
  
    for (let match of matches) { // Iterar sobre los regalos
      let number = parseInt(match.match(/\d+/)[0]); // Encontrar el número de regalos
      let type = match.match(/[a-z]/)[0]; // Encontrar el tipo de regalo
      let pallets = Math.floor(number / 50); // Calcular el número de palés
      let remainingAfterPallets = number % 50; // Calcular el número de regalos restantes después de los palés
      let boxes = Math.floor(remainingAfterPallets / 10); // Calcular el número de cajas
      let remainingAfterBoxes = remainingAfterPallets % 10; // Calcular el número de regalos restantes después de las cajas
  
      // Add pallets to result
      for (let i = 0; i < pallets; i++) {
        result += `[${type}]`;
      }
  
      // Add boxes to result
      for (let i = 0; i < boxes; i++) {
        result += `{${type}}`;
      }
  
      // Add remaining gifts to bag
      if (remainingAfterBoxes > 0) {
        result += `(${type.repeat(remainingAfterBoxes)})`;
      }
    }
  
    return result;
  }

  const result1 = organizeGifts('76a11b');
  console.log(result1); // '[a]{a}{a}(aaaaaa){b}(b)'

