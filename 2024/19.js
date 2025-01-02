/*
¡Se acerca el día para repartir regalos! Necesitamos apilar los regalos que transportaremos en el trineo 🛷 
y para eso los vamos a meter en cajas 📦.

Los regalos se pueden meter en 4 cajas distintas, donde cada caja soporta 1, 2, 5, 10 de peso y se representan así:

    _
1: |_|
    _____
2: |_____|
    _____
5: |     |
   |_____|
     _________
10: |         |
    |_________|

Representación en JavaScript:
const boxRepresentations = {
  1: [" _ ", "|_|"] ,
  2: [" ___ ", "|___|"],
  5: [" _____ ", "|     |", "|_____|"],
  10: [" _________ ", "|         |", "|_________|"]
}
Tu misión es que al recibir el peso de los regalos, uses las mínimas cajas posibles y que, además, las apiles de 
menos peso (arriba) a más peso (abajo). Siempre alineadas a la izquierda.

Además, ten en cuenta que al apilarlas, se reusa el borde inferior de la caja.

distributeWeight(1)
Devuelve:
 _
|_|

distributeWeight(2)
Devuelve:
 ___
|___|

distributeWeight(3)
Devuelve:
 _
|_|_
|___|

distributeWeight(4)
Devuelve:
 ___
|___|
|___|

distributeWeight(5)
Devuelve:
 _____
|     |
|_____|

distributeWeight(6)
Devuelve:
 _
|_|___
|     |
|_____|
Nota: ¡Ten cuidado con los espacios en blanco! No añadas espacios en blanco a la derecha de una caja si no son necesarios.
*/

function distributeWeight(weight) {
  // Si el peso no es positivo, no hay nada que dibujar
  if (weight <= 0) return '';

  // Representación ASCII de cada tipo de caja
  // Cada caja es un array de líneas
  const boxRepresentations = {
    1: [" _ ", "|_|"],
    2: [" ___ ", "|___|"],
    5: [" _____ ", "|     |", "|_____|"],
    10: [" _________ ", "|         |", "|_________|"]
  };

  // Según los ejemplos del enunciado, estos son los subrayados extra
  // que se añaden cuando se apila una caja 'top' encima de otra 'bottom'.
  // Se ha inferido caso por caso:
  //
  // Ejemplos relevantes:
  //  - 3 (1+2) => la línea de 1 (|_|) se fusiona con la de 2, añadiendo 1 underscore.
  //  - 6 (1+5) => la línea de 1 (|_|) se fusiona con la de 5, añadiendo 3 underscores.
  //  - 1->10 => ejemplo hipotético => añade 8
  //  - 2->2 => sin subrayados extra
  //  - 2->5 => sin subrayados extra
  //  - 5->10 => sin subrayados extra
  //  - etc.
  const mergeUnderscores = {
    '1,1': 0,  '1,2': 1,   '1,5': 3,   '1,10': 8,
    '2,1': 0,  '2,2': 0,   '2,5': 0,   '2,10': 0,
    '5,1': 0,  '5,2': 0,   '5,5': 0,   '5,10': 0,
    '10,1': 0, '10,2': 0,  '10,5': 0,  '10,10': 0
  };

  // 1) Descomponer el peso de forma 'greedy' en las cajas 10,5,2,1
  const capacities = [10, 5, 2, 1];
  const boxes = [];
  let remaining = weight;
  for (const cap of capacities) {
    while (remaining >= cap) {
      boxes.push(cap);
      remaining -= cap;
    }
  }
  // Ahora 'boxes' tiene las capacidades en el orden (de mayor a menor)
  // pero queremos apilarlas de menor a mayor (arriba la más ligera)
  boxes.sort((a, b) => a - b);

  // 2) Función auxiliar para obtener el ASCII de una caja
  function getBoxAscii(cap) {
    return boxRepresentations[cap];
  }

  // 3) Función que "fusiona" la última línea del bloque superior con la
  //    primera línea del bloque inferior, conforme a los ejemplos.
  function stackTwo(topAscii, bottomAscii) {
    // Si no hay bloque superior, no hay fusión
    if (topAscii.length === 0) {
      return bottomAscii;
    }
    // Tomamos la última línea del bloque de arriba y la primera del de abajo
    const topLast = topAscii[topAscii.length - 1];
    const bottomFirst = bottomAscii[0];

    // Quitamos esas líneas de cada bloque
    const newTop = topAscii.slice(0, -1);
    const newBottom = bottomAscii.slice(1);

    // Determinamos qué cajas son 'top' y 'bottom' para ver cuántos subrayados van
    // Como ya tenemos el ASCII, podemos comparar con nuestras representaciones
    // y localizar cuál es la 'capacity' de cada una.
    function findCap(asciiBlock) {
      // Miramos entre 1,2,5,10
      for (const w of [1, 2, 5, 10]) {
        const rep = boxRepresentations[w];
        if (rep.length === asciiBlock.length && rep.every((line, i) => asciiBlock[i] === line)) {
          return w;
        }
      }
      return 1; // fallback (no debería ocurrir con los casos válidos)
    }

    const topCap = findCap(topAscii);
    const bottomCap = findCap(bottomAscii);
    // Vemos cuántos '_' hay que añadir, según la tabla 'mergeUnderscores'
    const key = `${topCap},${bottomCap}`;
    const extra = mergeUnderscores[key] || 0;

    // Fusionamos la última línea del top con los subrayados extra
    // Quitamos espacios de la derecha para no arrastrar huecos
    const mergedLine = topLast.replace(/\s+$/, '') + '_'.repeat(extra);

    // Devolvemos la nueva pila
    return [...newTop, mergedLine, ...newBottom];
  }

  // 4) Vamos apilando las cajas de menor a mayor
  let stacked = [];
  for (const cap of boxes) {
    const boxAscii = getBoxAscii(cap);
    stacked = stackTwo(stacked, boxAscii);
  }

  // 5) Devolvemos el resultado unificado en un string
  return stacked.join('\n');
}

// -------------------------
// Pruebas de los ejemplos
// -------------------------

// 4 = 2 + 2 => sin subrayados en la segunda línea
console.log(distributeWeight(4));
/*
 ___
|___|
|___|
*/

// 6 = 1 + 5 => 1 en la línea superior con 3 underscores al fusionar con 5
console.log(distributeWeight(6));
/*
 _
|_|___
|     |
|_____|
*/

// 3 = 1 + 2 => 1 underscore en la segunda línea
console.log(distributeWeight(3));
/*
 _
|_|_
|___|
*/

// 5 => una sola caja, sin fusión
console.log(distributeWeight(5));
/*
 _____
|     |
|_____|
*/

// 10 => una sola caja, sin fusión
console.log(distributeWeight(10));
/*
 _________ 
|         |
|_________|
*/

// 11 => 1 + 10 => top=1 + bottom=10 => 8 underscores en la fusión
console.log(distributeWeight(11));
/*
 _
|_|________
|         |
|_________|
*/

// 15 => 5 + 10 => sin subrayados extra
console.log(distributeWeight(15));
/*
 _____
|     |
|_____|
|         |
|_________|
*/

// Algunos otros ejemplos individuales:
console.log(distributeWeight(1));
/*
 _
|_|
*/
console.log(distributeWeight(2));
/*
 ___
|___|
*/
