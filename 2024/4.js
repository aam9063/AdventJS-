/*
¡Es hora de poner el árbol de Navidad en casa! 🎄 Pero este año queremos que sea especial. Vamos a crear una función que recibe la altura del árbol (un entero positivo entre 1 y 100) y un carácter especial para decorarlo.

La función debe devolver un string que represente el árbol de Navidad, construido de la siguiente manera:

El árbol está compuesto de triángulos de caracteres especiales.
Los espacios en blanco a los lados del árbol se representan con guiones bajos _.
Todos los árboles tienen un tronco de dos líneas, representado por el carácter #.
El árbol siempre debe tener la misma longitud por cada lado.
Debes asegurarte de que el árbol tenga la forma correcta usando saltos de línea \n para cada línea.
Ejemplos:

const tree = createXmasTree(5, '*')
console.log(tree)
____*____
___***___
__*****__
_*******_
*********
____#____
____#____

const tree2 = createXmasTree(3, '+')
console.log(tree2)
__+__
_+++_
+++++
__#__
__#__

const tree3 = createXmasTree(6, '@')
console.log(tree3)

_____@_____
____@@@____
___@@@@@___
__@@@@@@@__
_@@@@@@@@@_
@@@@@@@@@@@
_____#_____
_____#_____

Asegúrate de utilizar saltos de línea \n al final de cada línea, excepto en la última.
*/

/**
 * @param {number} height - Height of the tree (1 <= height <= 100)
 * @param {string} ornament - Symbol to draw
 * @returns {string} The drawn tree
 */
function createXmasTree(height, ornament) {
    // Guardamos todas las líneas del árbol en un array
    const lines = [];
  
    // 1. Construimos el triángulo del árbol
    // Para cada nivel del árbol (1..height):
    // - Cantidad de '_' a la izquierda y a la derecha: (height - i)
    // - Cantidad de adornos: 2*i - 1
    for (let i = 1; i <= height; i++) {
      const underscores = '_'.repeat(height - i);
      const ornaments = ornament.repeat(2 * i - 1);
      lines.push(underscores + ornaments + underscores);
    }
  
    // 2. Construimos el tronco del árbol (2 líneas)
    // Mismo ancho que la parte superior
    // Cantidad de '_' a cada lado: height - 1
    const trunk = '_'.repeat(height - 1) + '#' + '_'.repeat(height - 1);
    lines.push(trunk);
    lines.push(trunk);
  
    // 3. Devolvemos el árbol como un string con saltos de línea
    return lines.join('\n');
  }
  