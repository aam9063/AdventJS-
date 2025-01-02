/*
Estás en un mercado muy especial en el que se venden árboles de Navidad 🎄. Cada uno viene decorado con una serie de adornos muy peculiares, y el precio del árbol se determina en función de los adornos que tiene.

*: Copo de nieve - Valor: 1
o: Bola de Navidad - Valor: 5
^: Arbolito decorativo - Valor: 10
#: Guirnalda brillante - Valor: 50
@: Estrella polar - Valor: 100
Normalmente se sumarían todos los valores de los adornos y ya está…

Pero, ¡ojo! Si un adorno se encuentra inmediatamente a la izquierda de otro de mayor valor, en lugar de sumar, se resta su valor.

calculatePrice('***')  // 3   (1 + 1 + 1)
calculatePrice('*o')   // 4   (5 - 1)
calculatePrice('o*')   // 6   (5 + 1)
calculatePrice('*o*')  // 5  (-1 + 5 + 1) 
calculatePrice('**o*') // 6  (1 - 1 + 5 + 1) 
calculatePrice('o***') // 8   (5 + 3)
calculatePrice('*o@')  // 94  (-5 - 1 + 100)
calculatePrice('*#')   // 49  (-1 + 50)
calculatePrice('@@@')  // 300 (100 + 100 + 100)
calculatePrice('#@')   // 50  (-50 + 100)
calculatePrice('#@Z')  // undefined (Z es desconocido)
*/

/**
 * Calcula el precio de un árbol de Navidad según los adornos.
 *
 * *   => 1
 * o   => 5
 * ^   => 10
 * #   => 50
 * @   => 100
 *
 * Regla adicional:
 *  - Si un adorno (de menor valor) está inmediatamente a la izquierda
 *    de uno de mayor valor, se resta en lugar de sumarse.
 *
 * Ejemplos:
 *  calculatePrice('***')  // 3   (1 + 1 + 1)
 *  calculatePrice('*o')   // 4   (5 - 1)
 *  calculatePrice('*o@')  // 94  (-5 - 1 + 100)
 *  calculatePrice('#@Z')  // undefined (Z es desconocido)
 *
 * @param {string} ornaments
 * @return {number} - The price of the tree (or undefined si hay adorno desconocido)
 */
function calculatePrice(ornaments) {
  // Diccionario de valores
  const values = {
    '*': 1,
    'o': 5,
    '^': 10,
    '#': 50,
    '@': 100
  };

  // Verificamos si hay algún carácter desconocido
  for (const char of ornaments) {
    if (!values.hasOwnProperty(char)) {
      return undefined;
    }
  }

  let total = 0;

  // Recorremos la cadena y comparamos valor actual con el siguiente
  for (let i = 0; i < ornaments.length; i++) {
    const currentValue = values[ornaments[i]];

    // Si existe un siguiente adorno, lo comparamos
    if (i + 1 < ornaments.length) {
      const nextValue = values[ornaments[i + 1]];

      // Si el valor actual es menor que el siguiente, restamos
      if (currentValue < nextValue) {
        total -= currentValue;
      } else {
        // En caso contrario, sumamos
        total += currentValue;
      }
    } else {
      // El último carácter siempre se suma
      total += currentValue;
    }
  }

  return total;
}

