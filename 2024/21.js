/*
Santa Claus 🎅 está decorando un árbol de Navidad mágico 🪄, que este año tiene una estructura especial 
en forma de árbol binario. Cada nodo del árbol representa un regalo, y Santa quiere saber la altura del 
árbol para colocar la estrella mágica en la punta.

Tu tarea es escribir una función que calcule la altura de un árbol binario. La altura de un árbol binario 
se define como el número máximo de niveles desde la raíz hasta una hoja. Un árbol vacío tiene una altura de 0.

Definición del árbol
const tree = {
  value: '🎁',
  left: {
    value: '🎄',
    left: {
      value: '⭐',
      left: null,
      right: null
    },
    right: {
      value: '🎅',
      left: null,
      right: null
    }
  },
  right: {
    value: '❄️',
    left: null,
    right: {
      value: '🦌',
      left: null,
      right: null
    }
  }
}

Representación gráfica del árbol:
       🎁
      /   \
    🎄     ❄️
   /  \      \
 ⭐   🎅      🦌

Llamada a la función
treeHeight(tree)
Devuelve: 3
*/

/**
 * Calcula la altura de un árbol binario. La altura de un árbol vacío es 0.
 * 
 * @param {{ value: string; left: any; right: any }} tree
 * @returns {number} - Altura del árbol
 */
function treeHeight(tree) {
  // Un árbol inexistente (null) tiene altura 0
  if (!tree) return 0;

  // La altura es 1 más el máximo entre la altura del subárbol izquierdo y derecho
  return 1 + Math.max(treeHeight(tree.left), treeHeight(tree.right));
}

// Ejemplo de uso:
const tree = {
  value: '🎁',
  left: {
    value: '🎄',
    left: {
      value: '⭐',
      left: null,
      right: null
    },
    right: {
      value: '🎅',
      left: null,
      right: null
    }
  },
  right: {
    value: '❄️',
    left: null,
    right: {
      value: '🦌',
      left: null,
      right: null
    }
  }
};

console.log(treeHeight(tree)); // 3

  