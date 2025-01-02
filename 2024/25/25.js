/*
¡Ya hemos repartido todos los regalos! De vuelta al taller, ya comienzan los preparativos para el año que viene.

Un elfo genio está creando un lenguaje de programación mágico 🪄, que ayudará a simplificar la entrega de regalos 
a los niños en 2025.

Los programas siempre empiezan con el valor 0 y el lenguaje es una cadena de texto donde cada caracter representa 
una instrucción:

> Se mueve a la siguiente instrucción
+ Incrementa en 1 el valor actual
- Decrementa en 1 el valor actual
[ y ]: Bucle. Si el valor actual es 0, salta a la instrucción después de ]. Si no es 0, vuelve a la instrucción 
 después de [
{y }: Condicional. Si el valor actual es 0, salta a la instrucción después de }. Si no es 0, sigue a la 
instrucción después de {
Tienes que devolver el valor del programa tras ejecutar todas las instrucciones.

execute('+++') // 3
execute('+--') // -1
execute('>+++[-]') // 0
execute('>>>+{++}') // 3
execute('+{[-]+}+') // 2
execute('{+}{+}{+}') // 0
execute('------[+]++') // 2
execute('-[++{-}]+{++++}') // 5

Nota: Un condicional puede tener un bucle dentro y también un bucle puede tener un condicional. Pero nunca se 
anidan dos bucles o dos condicionales.
  
*/

/**
 * Ejecuta un "programa" en el lenguaje mágico descrito:
 *
 *   - '>' : No hace nada, avanza.
 *   - '+' : Incrementa el valor en 1.
 *   - '-' : Decrementa el valor en 1.
 *   - '[' y ']' : Bucle. Estilo Brainfuck.
 *   - '{' y '}' : Condicional. Si value === 0 al encontrar '{', salta a '}'.
 *
 * Se asume que no hay anidamientos dobles (no hay "[[" o "{{" anidados),
 * aunque sí puede haber un '{' dentro de un '[' o viceversa.
 *
 * @param {string} code - Programa en el lenguaje mágico.
 * @returns {number} - Valor final tras la ejecución.
 */

function execute(code) {
  code = [...code];
  let value = 0;
  const actions = {
    '>': () => {},
    '+': () => value++,
    '-': () => value--,
    '[': () => {
      code = code.slice(code.indexOf(']') - 1);
    },
    ']': () => {
      value = 0;
    },
    '{': () => {
      if (value === 0) code = code.slice(code.indexOf('}'));
    },
    '}': () => {},
  };

  while (code.length) actions[code.shift()]();

  return value;
}

// -------------------------
// Ejemplos del enunciado
// -------------------------
console.log(execute('+++'));           // 3
console.log(execute('+--'));           // -1
console.log(execute('>+++[-]'));       // 0
console.log(execute('>>>+{++}'));      // 3
console.log(execute('+{[-]+}+'));      // 2
console.log(execute('{+}{+}{+}'));     // 0
console.log(execute('------[+]++'));   // 2
console.log(execute('-[++{-}]+{++++}'));// 5
