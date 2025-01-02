/*
En el taller de Santa, los elfos aman los acertijos 🧠. Este año, han creado uno especial: 
un desafío para formar un palíndromo navideño.

Un palíndromo es una palabra que se lee igual hacia adelante y hacia atrás. Los elfos quieren 
saber si es posible formar un palíndromo haciendo, como mucho, un intercambio de letras.

Crea una función getIndexsForPalindrome que reciba una cadena de caracteres y devolverá:

    Si ya es un palíndromo, un array vacío.
    Si no es posible, null.
    Si se puede formar un palíndromo con un cambio, un array con las dos posiciones (índices) 
    que se deben intercambiar para poder crearlo.

Por ejemplo:

getIndexsForPalindrome('anna') // []
getIndexsForPalindrome('abab') // [0, 1]
getIndexsForPalindrome('abac') // null
getIndexsForPalindrome('aaaaaaaa') // []
getIndexsForPalindrome('aaababa') // [1, 3]
getIndexsForPalindrome('caababa') // null

Si se puede formar el palíndromo con diferentes intercambios, siempre se debe devolver 
el primero que se encuentre.
*/

function getIndexsForPalindrome(word) {
    if (isPalindrome(word)) return [];
  
    for (let i = 0; i < word.length; i++) {
      for (let j = i + 1; j < word.length; j++) {
        const arr = word.split("");
        [arr[i], arr[j]] = [arr[j], arr[i]];
        const swappedStr = arr.join("");
        if (isPalindrome(swappedStr)) {
          return [i, j];
        }
      }
    }
    return null;
  
    function isPalindrome(str) {
      let left = 0;
      let right = str.length - 1;
  
      while (left < right) {
        if (str[left] !== str[right]) {
          return false;
        }
        left++;
        right--;
      }
      return true;
    }
  }
  
  // Ejemplos
  console.log(getIndexsForPalindrome('anna')); // []
  console.log(getIndexsForPalindrome('abab')); // [0, 1]
  console.log(getIndexsForPalindrome('abac')); // null
  console.log(getIndexsForPalindrome('aaaaaaaa')); // []
  console.log(getIndexsForPalindrome('aaababa')); // [1, 3]
  console.log(getIndexsForPalindrome('caababa')); // null
  