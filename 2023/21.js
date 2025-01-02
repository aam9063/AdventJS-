/*
Los elfos están recibiendo mensajes binarios extraños desde Marte 🪐. 
¿Los extraterrestres están tratando de comunicarse con ellos? 👽

El mensaje que llega es un array de 0s y 1s. Parece que han encontrado un patrón… 
Para asegurarse, quieren encontrar el segmento más largo de la cadena donde el número de 0s y 1s sea igual.

findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1])
//                         |________|

posición del segmento:    [2, 5]
más largo equilibrado
de 0s y 1s

findBalancedSegment([1, 1, 0])
                    |__|
                   [1, 2]

findBalancedSegment([1, 1, 1])
 no hay segmentos equilibrados: []

Ten en cuenta que si hay más de un patrón equilibrado, debes devolver el más largo 
y el primero que encuentres de izquierda a derecha.

Dicen que si encuentran el patrón, podrán enviar un mensaje de vuelta a Marte 🚀. 
Parece ser que tienen que enviarlos a https://mars.codes.
*/

function findBalancedSegment(message) {
    let maxLength = 0;
    let startIdx = -1;
  
    for (let i = 0; i < message.length; i++) {
      let count0 = 0;
      let count1 = 0;
  
      for (let j = i; j < message.length; j++) {
        if (message[j] === 0) {
          count0++;
        } else if (message[j] === 1) {
          count1++;
        }
  
        if (count0 === count1) {
          let currentLength = j - i + 1;
          if (currentLength > maxLength) {
            maxLength = currentLength;
            startIdx = i;
          }
        }
      }
    }
  
    if (startIdx === -1) {
      return [];
    }
  
    return [startIdx, startIdx + maxLength - 1];
  }
  
  // Ejemplos de uso
  console.log(findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1])); // [2, 5]
  console.log(findBalancedSegment([1, 1, 0])); // [1, 2]
  console.log(findBalancedSegment([1, 1, 1])); // []
  