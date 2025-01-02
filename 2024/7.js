/*
¡El grinch 👹 ha pasado por el taller de Santa Claus! Y menudo desastre ha montado. Ha cambiado el orden de algunos paquetes, por lo que los envíos no se pueden realizar.

Por suerte, el elfo Pheralb ha detectado el patrón que ha seguido el grinch para desordenarlos. Nos ha escrito las reglas que debemos seguir para reordenar los paquetes. Las instrucciones que siguen son:

Recibirás un string que contiene letras y paréntesis.
Cada vez que encuentres un par de paréntesis, debes voltear el contenido dentro de ellos.
Si hay paréntesis anidados, resuelve primero los más internos.
Devuelve el string resultante con los paréntesis eliminados, pero con el contenido volteado correctamente.
Nos ha dejado algunos ejemplos:

fixPackages('a(cb)de')
➞ "abcde"
Volteamos "cb" dentro de los paréntesis

fixPackages('a(bc(def)g)h')
➞ "agdefcbh"
1º volteamos "def" → "fed", luego volteamos "bcfedg" → "gdefcb"

fixPackages('abc(def(gh)i)jk')
➞ "abcighfedjk"
1º volteamos "gh" → "hg", luego "defhgi" → "ighfed"

fixPackages('a(b(c))e')
➞ "acbe"
1º volteamos "c" → "c", luego "bc" → "cb"
*/

/** @param {string} packages with parentheses
 *  @returns {string} Fixed and sorted packages
 */
function fixPackages(packages) {
  // Utilizamos una pila para manejar la estructura de paréntesis anidados.
  const stack = [''];

  for (const char of packages) {
    if (char === '(') {
      // Cada vez que vemos '(', agregamos un nuevo string vacío a la pila
      // para empezar a acumular el contenido dentro de estos paréntesis.
      stack.push('');
    } else if (char === ')') {
      // Cuando encontramos ')', significa que debemos cerrar y voltear
      // el contenido que hay en la parte superior de la pila.
      const top = stack.pop().split('').reverse().join('');
      // Agregamos el contenido invertido a la parte superior actual.
      stack[stack.length - 1] += top;
    } else {
      // Si es un carácter normal, lo vamos concatenando a la cima de la pila.
      stack[stack.length - 1] += char;
    }
  }

  // Al finalizar, sólo debería quedar un elemento en la pila con el contenido final.
  return stack[0];
}

