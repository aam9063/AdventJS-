/*
En el Polo Norte, los elfos tienen dos árboles binarios mágicos que generan energía 🌲🌲 para mantener encendida la estrella navideña ⭐️. Sin embargo, para que funcionen correctamente, los árboles deben estar en perfecta sincronía como espejos 🪞.

Dos árboles binarios son espejos si:

Las raíces de ambos árboles tienen el mismo valor.
Cada nodo del primer árbol debe tener su correspondiente nodo en la posición opuesta en el segundo árbol.
Y el árbol se representa con tres propiedades value, left y right. Dentro de estas dos últimas va mostrando el resto de ramas (si es que tiene):

const tree = {
  value: '⭐️',
  left: {
    value: '🎅'
    left: {...}
    right: { ... }
  },
  right: {
    value: '🎁'
    left: { ... }
    right: { ...&nbsp;}
  }
}
Santa necesita tu ayuda para verificar si los árboles están sincronizados para que la estrella pueda seguir brillando. Debes devolver un array donde la primera posición indica si los árboles están sincronizados y la segunda posición devuelve el valor de la raíz del primer árbol.

const tree1 = {
  value: '🎄',
  left: { value: '⭐' },
  right: { value: '🎅' }
}

const tree2 = {
  value: '🎄',
  left: { value: '🎅' }
  right: { value: '⭐' },
}

isTreesSynchronized(tree1, tree2) // [true, '🎄']

  tree1          tree2
   🎄              🎄
  / \             / \
⭐   🎅         🎅   ⭐

const tree3 = {
  value: '🎄',
  left: { value: '🎅' },
  right: { value: '🎁' }
}

isTreesSynchronized(tree1, tree3) // [false, '🎄']

const tree4 = {
  value: '🎄',
  left: { value: '⭐' },
  right: { value: '🎅' }
}

isTreesSynchronized(tree1, tree4) // [false, '🎄']

isTreesSynchronized(
  { value: '🎅' },
  { value: '🧑‍🎄' }
) // [false, '🎅']
*/

/**
 * Verifica si dos árboles binarios son espejos y devuelve [boolean, string].
 * El boolean indica si están sincronizados. El string es el valor de la raíz del primer árbol.
 *
 * @param {object|null} tree1 - Primer árbol binario (con propiedades: value, left, right)
 * @param {object|null} tree2 - Segundo árbol binario
 * @returns {[boolean, string]}
 */
function isTreesSynchronized(tree1, tree2) {
  if (!tree1) {
    // Si el primero no existe, no podemos devolver su valor de raíz
    // Aquí no está claro si puede ocurrir en el enunciado, pero por seguridad:
    return [false, ''];
  }

  // Función auxiliar para comprobar si dos árboles son espejos
  function areMirrors(t1, t2) {
    // Caso base: ambos son nulos
    if (!t1 && !t2) return true;
    // Si uno es nulo y el otro no, no pueden ser espejos
    if (!t1 || !t2) return false;
    // Si los valores no coinciden, no son espejos
    if (t1.value !== t2.value) return false;
    // Se verifica recursivamente:
    //  - el subárbol izquierdo de t1 con el subárbol derecho de t2
    //  - el subárbol derecho de t1 con el subárbol izquierdo de t2
    return areMirrors(t1.left, t2.right) && areMirrors(t1.right, t2.left);
  }

  // Verificamos si tree1 y tree2 son espejos
  const synchronized = areMirrors(tree1, tree2);

  // Devolvemos el resultado con el valor de la raíz del primer árbol
  return [synchronized, tree1.value];
}


// -----------------------------
// EJEMPLOS DE USO
// -----------------------------
const tree1 = {
  value: '🎄',
  left: { value: '⭐' },
  right: { value: '🎅' }
};

const tree2 = {
  value: '🎄',
  left: { value: '🎅' },
  right: { value: '⭐' }
};

console.log(isTreesSynchronized(tree1, tree2)); // [true, '🎄']

const tree3 = {
  value: '🎄',
  left: { value: '🎅' },
  right: { value: '🎁' }
};

console.log(isTreesSynchronized(tree1, tree3)); // [false, '🎄']

const tree4 = {
  value: '🎄',
  left: { value: '⭐' },
  right: { value: '🎅' }
};

console.log(isTreesSynchronized(tree1, tree4)); // [false, '🎄']

console.log(isTreesSynchronized({ value: '🎅' }, { value: '🧑‍🎄' })); // [false, '🎅']






  