/*
Santa Claus 🎅 quiere enmarcar los nombres de los niños buenos para decorar su taller 🖼️, pero el marco debe 
cumplir unas reglas específicas. Tu tarea es ayudar a los elfos a generar este marco mágico.

Reglas:

Dado un array de nombres, debes crear un marco rectangular que los contenga a todos.
Cada nombre debe estar en una línea, alineado a la izquierda.
El marco está construido con * y tiene un borde de una línea de ancho.
La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio a cada lado.
Ejemplo de funcionamiento:

createFrame(['midu', 'madeval', 'educalvolpz'])

Resultado esperado:
***************
* midu        *
* madeval     *
* educalvolpz *
***************

createFrame(['midu'])

Resultado esperado:
********
* midu *
********

createFrame(['a', 'bb', 'ccc'])

Resultado esperado:
*******
* a   *
* bb  *
* ccc *
*******

createFrame(['a', 'bb', 'ccc', 'dddd'])
*/

/**
 * @param {string[]} names - Array of names to frame
 * @returns {string} The framed names
 */
function createFrame(names) {
    // Si no hay nombres, devolvemos una cadena vacía (o podríamos manejarlo de otra forma)
    if (names.length === 0) return '';
  
    // 1. Encontramos la longitud del nombre más largo
    const maxLen = Math.max(...names.map(name => name.length));
  
    // 2. Creamos la línea superior e inferior (borde)
    const border = '*'.repeat(maxLen + 4);
  
    // 3. Para cada nombre, generamos una línea con: "* " + nombre + espacios + " *"
    const framedLines = names.map(name => {
      const spaces = ' '.repeat(maxLen - name.length);
      return `* ${name}${spaces} *`;
    });
  
    // 4. Unimos todo con saltos de línea y lo retornamos
    return [border, ...framedLines, border].join('\n');
  }
  