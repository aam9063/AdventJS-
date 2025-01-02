/*
Santa Claus 🎅 ha recibido una lista de números mágicos que representan regalos 🎁, pero algunos de 
ellos están duplicados y deben ser eliminados para evitar confusiones. Además, los regalos deben ser 
ordenados en orden ascendente antes de entregárselos a los elfos.

Tu tarea es escribir una función que reciba una lista de números enteros (que pueden incluir duplicados) 
y devuelva una nueva lista sin duplicados, ordenada en orden ascendente.
*/

function solveAllChallenges() {
    /**
     * Recibe una lista de números que pueden incluir duplicados
     * y devuelve una lista sin duplicados y ordenada en orden ascendente.
     *
     * @param {number[]} gifts - El array de regalos a preparar
     * @returns {number[]} El array de regalos preparados
     */
    function prepareGifts(gifts) {
      // 1. Eliminar duplicados -> podemos usar Set
      // 2. Ordenar en orden ascendente
      const uniqueGifts = [...new Set(gifts)];
      return uniqueGifts.sort((a, b) => a - b);
    }
  
    // Ejemplos de uso
    const gifts1 = [3, 1, 2, 3, 4, 2, 5];
    const preparedGifts1 = prepareGifts(gifts1);
    console.log(preparedGifts1); // [1, 2, 3, 4, 5]
  
    const gifts2 = [6, 5, 5, 5, 5];
    const preparedGifts2 = prepareGifts(gifts2);
    console.log(preparedGifts2); // [5, 6]
  
    const gifts3 = [];
    const preparedGifts3 = prepareGifts(gifts3);
    console.log(preparedGifts3); // []
  }
  