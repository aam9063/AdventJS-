/*
Los elfos están trabajando en un sistema para verificar las listas de regalos de los niños 👧👦. Sin embargo, 
¡algunas listas están incompletas y faltan números!

Tu tarea es escribir una función que, dado un array de números, encuentre todos los números que faltan entre 
1 y n (donde n es el tamaño del array o el número más alto del array).

Eso sí, ten en cuenta que:

Los números pueden aparecer más de una vez y otros pueden faltar
El array siempre contiene números enteros positivos
Siempre se empieza a contar desde el 1
findMissingNumbers([1, 2, 4, 6])
[3, 5]

findMissingNumbers([4, 8, 7, 2])
[1, 3, 5, 6]

findMissingNumbers([3, 2, 1, 1])
[]

findDisappearedNumbers([5, 5, 5, 3, 3, 2, 1])
[4]
*/

/**
 * Dado un array de números (donde puede haber repetidos y faltantes),
 * encuentra todos los números faltantes entre 1 y n, donde n es el número
 * más alto del array.
 *
 * @param {number[]} nums - Lista de enteros positivos.
 * @returns {number[]} - Lista de números que faltan.
 */
function findMissingNumbers(nums) {
  // 1. Determinamos el valor máximo en nums (n).
  const n = Math.max(...nums);

  // 2. Convertimos nums en un Set para consultar en O(1)
  const present = new Set(nums);

  // 3. Buscamos los números faltantes entre 1 y n
  const missing = [];
  for (let i = 1; i <= n; i++) {
    if (!present.has(i)) {
      missing.push(i);
    }
  }

  return missing;
}

// Ejemplos:
console.log(findMissingNumbers([1, 2, 4, 6])); // [3, 5]
console.log(findMissingNumbers([4, 8, 7, 2])); // [1, 3, 5, 6]
console.log(findMissingNumbers([3, 2, 1, 1])); // []
console.log(findMissingNumbers([5, 5, 5, 3, 3, 2, 1])); // [4]

  